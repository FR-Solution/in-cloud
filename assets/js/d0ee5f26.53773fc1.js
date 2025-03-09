"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4668],{42567:(e,t,l)=>{l.d(t,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},55189:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>h,contentTitle:()=>E,default:()=>p,frontMatter:()=>m,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/in-cloud/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=l(74848),r=l(28453),c=l(60513),s=l(1775),o=l(42567),i=l(63770),d=l(87464),u=l(62774);const m={},E=void 0,h={},g=[];function R(e){return(0,n.jsxs)(u.A,{groupId:"install-type",children:[(0,n.jsxs)(d.A,{value:"Bash",children:[(0,n.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,n.jsx)(s.A,{language:"bash",children:c.A`
            mkdir -p /etc/default/etcd
          `}),(0,n.jsx)("h4",{children:"Systemd Unit ENV"}),(0,n.jsx)(s.A,{language:"bash",children:c.A`
            cat <<EOF > /etc/default/etcd/download.env
            ETCD_VERSION="${i.M.etcdctl.value}"
            BASE_URL="${o.m.etcdctl.baseUrl}"
            EOF
          `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(s.A,{language:"bash",children:c.A`
            cat <<"EOF" > /etc/default/etcd/download-script.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            ETCD_VERSION="$\{ETCD_VERSION:-${i.M.etcdctl.value}}"
            BASE_URL="$\{BASE_URL:-${o.m.etcdctl.baseUrl}}"
            ETCD_URL="$\{BASE_URL}/${o.m.etcdctl.templateUrlBin}"
            CHECKSUM_URL="$\{BASE_URL}/${o.m.etcdctl.templateUrlBinCheckSum}"
            INSTALL_PATH="${o.m.etcdctl.path}"
            
            LOG_TAG="etcd-installer"
            TMP_DIR="$(mktemp -d)"
            
            logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."
            CURRENT_VERSION=$(etcd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
            
            logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $ETCD_VERSION"
            logger -t "$LOG_TAG" "[INFO] Download URL: $ETCD_URL"
            
            if [[ "$CURRENT_VERSION" != "$ETCD_VERSION" ]]; then
              logger -t "$LOG_TAG" "[INFO] Updating etcd to version $ETCD_VERSION..."
            
              cd "$TMP_DIR"
              logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
            
              logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
              curl -fsSL -o "etcd-$\{ETCD_VERSION}-linux-amd64.tar.gz" "$ETCD_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
              curl -fsSL -o "etcd.sha256sum" "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
              grep "etcd-$\{ETCD_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Extracting files..."
              tar -C "$TMP_DIR" -xvf "etcd-$\{ETCD_VERSION}-linux-amd64.tar.gz"
            
              logger -t "$LOG_TAG" "[INFO] Installing binaries..."
              install -m 755 "$TMP_DIR/etcd-$\{ETCD_VERSION}-linux-amd64/etcd" $INSTALL_PATH
              install -m 755 "$TMP_DIR/etcd-$\{ETCD_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
              install -m 755 "$TMP_DIR/etcd-$\{ETCD_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH
              
              logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $ETCD_VERSION."
              rm -rf "$TMP_DIR"
            else
              logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
            fi
            EOF
          `}),(0,n.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,n.jsx)(s.A,{language:"yaml",children:c.A`
            chmod +x /etc/default/etcd/download-script.sh
          `}),(0,n.jsx)("h4",{children:"Systemd Unit Download"}),(0,n.jsx)(s.A,{language:"bash",children:c.A`
            cat <<EOF > /usr/lib/systemd/system/etcd-install.service
            [Unit]
            Description=Install and update b-cloud component etcd
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/etcd/download.env
            ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,n.jsxs)(d.A,{value:"Cloud-init",children:[(0,n.jsx)("h4",{children:"Systemd Unit ENV"}),(0,n.jsx)(s.A,{language:"yaml",children:c.A`
            - path: /etc/default/etcd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                ETCD_VERSION="${i.M.etcdctl.value}"
                BASE_URL="${o.m.etcdctl.baseUrl}"
          `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(s.A,{language:"yaml",children:c.A`
            - path: /etc/default/etcd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                ETCD_VERSION="$\{ETCD_VERSION:-${i.M.etcdctl.value}}"
                BASE_URL="$\{BASE_URL:-${o.m.etcdctl.baseUrl}}"
                ETCD_URL="$\{BASE_URL}/${o.m.etcdctl.templateUrlBin}"
                CHECKSUM_URL="$\{BASE_URL}/${o.m.etcdctl.templateUrlBinCheckSum}"
                INSTALL_PATH="${o.m.etcdctl.path}"
                
                LOG_TAG="etcd-installer"
                TMP_DIR="$(mktemp -d)"
                
                logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."
                CURRENT_VERSION=$(etcd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
                
                logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $ETCD_VERSION"
                logger -t "$LOG_TAG" "[INFO] Download URL: $ETCD_URL"
                
                if [[ "$CURRENT_VERSION" != "$ETCD_VERSION" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Updating etcd to version $ETCD_VERSION..."
                
                  cd "$TMP_DIR"
                  logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                  logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
                  curl -fsSL -o "etcd-$\{ETCD_VERSION}-linux-amd64.tar.gz" "$ETCD_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                  curl -fsSL -o "etcd.sha256sum" "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                  grep "etcd-$\{ETCD_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Extracting files..."
                  tar -C "$TMP_DIR" -xvf "etcd-$\{ETCD_VERSION}-linux-amd64.tar.gz"
                
                  logger -t "$LOG_TAG" "[INFO] Installing binaries..."
                  install -m 755 "$TMP_DIR/etcd-$\{ETCD_VERSION}-linux-amd64/etcd" $INSTALL_PATH
                  install -m 755 "$TMP_DIR/etcd-$\{ETCD_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
                  install -m 755 "$TMP_DIR/etcd-$\{ETCD_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH
                  
                  logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $ETCD_VERSION."
                  rm -rf "$TMP_DIR"
                else
                  logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
                fi
          `}),(0,n.jsx)("h4",{children:"Systemd Unit Download"}),(0,n.jsx)(s.A,{language:"yaml",children:c.A`
            - path: /usr/lib/systemd/system/etcd-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component etcd
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/etcd/download.env
                ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(R,{...e})}):R()}},62774:(e,t,l)=>{l.d(t,{A:()=>N});var a=l(96540),n=l(34164),r=l(65627),c=l(56347),s=l(50372),o=l(30604),i=l(11861),d=l(78749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:l,attributes:a,default:n}}=e;return{value:t,label:l,attributes:a,default:n}}))}(l);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function E(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:l}=e;const n=(0,c.W6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,r=m(e),[c,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!E({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=h({queryString:l,groupId:n}),[g,R]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Dv)(l);return[n,(0,a.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:n}),p=(()=>{const e=i??g;return E({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{p&&o(p)}),[p]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!E({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),R(e)}),[u,R,r]),tabValues:r}}var R=l(9136);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=l(74848);function T(e){let{className:t,block:l,selectedValue:a,selectValue:c,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),d=e=>{const t=e.currentTarget,l=o.indexOf(t),n=s[l].value;n!==a&&(i(t),c(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;t=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;t=o[l]??o[o.length-1];break}}t?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},t),children:s.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...r,className:(0,n.A)("tabs__item",p.tabItem,r?.className,{"tabs__item--active":a===t}),children:l??t},t)}))})}function _(e){let{lazy:t,children:l,selectedValue:r}=e;const c=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function $(e){const t=g(e);return(0,I.jsxs)("div",{className:(0,n.A)("tabs-container",p.tabList),children:[(0,I.jsx)(T,{...t,...e}),(0,I.jsx)(_,{...t,...e})]})}function N(e){const t=(0,R.A)();return(0,I.jsx)($,{...e,children:u(e.children)},String(t))}},63770:(e,t,l)=>{l.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,l)=>{l.d(t,{A:()=>c});l(96540);var a=l(34164);const n={tabItem:"tabItem_Ymn6"};var r=l(74848);function c(e){let{children:t,hidden:l,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,c),hidden:l,children:t})}}}]);