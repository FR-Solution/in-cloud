"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4043],{16292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>N,default:()=>E,frontMatter:()=>m,metadata:()=>a,toc:()=>R});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),l=n(28453),o=n(53828),i=n(1775),s=n(42567),c=n(63770),u=n(87464),d=n(62774);const m={},N=void 0,h={},R=[];function I(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/containerd
          `}),(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/containerd/download.env
            CONTAINERD_VERSION="${c.M.containerd.value}"
            BASE_URL="${s.m.containerd.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/containerd/download-script.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            CONTAINERD_VERSION="$\{CONTAINERD_VERSION:-${c.M.containerd.value}}"
            BASE_URL="$\{BASE_URL:-${s.m.containerd.baseUrl}}"
            CONTAINERD_URL="$\{BASE_URL}/${s.m.containerd.templateUrlBin}"
            CHECKSUM_URL="$\{BASE_URL}/${s.m.containerd.templateUrlBinCheckSum}"
            INSTALL_PATH="${s.m.containerd.path}"
            
            LOG_TAG="containerd-installer"
            TMP_DIR="$(mktemp -d)"
            
            logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."
            CURRENT_VERSION=$(containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
            
            logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $CONTAINERD_VERSION"
            logger -t "$LOG_TAG" "[INFO] Download URL: $CONTAINERD_URL"
            
            if [[ "$CURRENT_VERSION" != "$CONTAINERD_VERSION" ]]; then
              logger -t "$LOG_TAG" "[INFO] Updating containerd to version $CONTAINERD_VERSION..."
            
              cd "$TMP_DIR"
              logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
            
              logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
              curl -fsSL -o "containerd-$\{CONTAINERD_VERSION}-linux-amd64.tar.gz" "$CONTAINERD_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
              curl -fsSL -o "containerd.sha256sum" "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
              sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Extracting files..."
              tar -C "$TMP_DIR" -xvf "containerd-$\{CONTAINERD_VERSION}-linux-amd64.tar.gz"
            
              logger -t "$LOG_TAG" "[INFO] Installing binaries..."
              install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
              install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
              install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH
            
              logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $CONTAINERD_VERSION."
              rm -rf "$TMP_DIR"
            else
              logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
            fi
            EOF
          `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(i.A,{language:"yaml",children:o.A`
            chmod +x /etc/default/containerd/download-script.sh
          `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
            cat <<EOF > /usr/lib/systemd/system/containerd-install.service
            [Unit]
            Description=Install and update b-cloud component containerd
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/containerd/download.env
            ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(i.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                CONTAINERD_VERSION="${c.M.containerd.value}"
                BASE_URL="${s.m.containerd.baseUrl}"
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(i.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                CONTAINERD_VERSION="$\{CONTAINERD_VERSION:-${c.M.containerd.value}}"
                BASE_URL="$\{BASE_URL:-${s.m.containerd.baseUrl}}"
                CONTAINERD_URL="$\{BASE_URL}/${s.m.containerd.templateUrlBin}"
                CHECKSUM_URL="$\{BASE_URL}/${s.m.containerd.templateUrlBinCheckSum}"
                INSTALL_PATH="${s.m.containerd.path}"
                
                LOG_TAG="containerd-installer"
                TMP_DIR="$(mktemp -d)"
                
                logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."
                CURRENT_VERSION=$(containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
                
                logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $CONTAINERD_VERSION"
                logger -t "$LOG_TAG" "[INFO] Download URL: $CONTAINERD_URL"
                
                if [[ "$CURRENT_VERSION" != "$CONTAINERD_VERSION" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Updating containerd to version $CONTAINERD_VERSION..."
                
                  cd "$TMP_DIR"
                  logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                  logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
                  curl -fsSL -o "containerd-$\{CONTAINERD_VERSION}-linux-amd64.tar.gz" "$CONTAINERD_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                  curl -fsSL -o "containerd.sha256sum" "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                  sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Extracting files..."
                  tar -C "$TMP_DIR" -xvf "containerd-$\{CONTAINERD_VERSION}-linux-amd64.tar.gz"
                
                  logger -t "$LOG_TAG" "[INFO] Installing binaries..."
                  install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
                  install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
                  install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH
                
                  logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $CONTAINERD_VERSION."
                  rm -rf "$TMP_DIR"
                else
                  logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
                fi
          `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(i.A,{language:"yaml",children:o.A`
            - path: /usr/lib/systemd/system/containerd-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component containerd
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/containerd/download.env
                ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function E(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(I,{...e})}):I()}},42567:(e,t,n)=>{n.d(t,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},62774:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(96540),r=n(34164),l=n(65627),o=n(56347),i=n(50372),s=n(30604),c=n(11861),u=n(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function N(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function R(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!N({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,d]=h({queryString:n,groupId:r}),[R,I]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),E=(()=>{const e=c??R;return N({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{E&&s(E)}),[E]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!N({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),I(e)}),[d,I,l]),tabValues:l}}var I=n(9136);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function O(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",E.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function p(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function b(e){const t=R(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",E.tabList),children:[(0,g.jsx)(O,{...t,...e}),(0,g.jsx)(p,{...t,...e})]})}function T(e){const t=(0,I.A)();return(0,g.jsx)(b,{...e,children:d(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}}}]);