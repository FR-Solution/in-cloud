"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9740],{39522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>I,frontMatter:()=>m,metadata:()=>l,toc:()=>R});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),n=r(28453),c=r(53828),i=r(1775),s=r(42567),o=r(63770),u=r(87464),d=r(62774);const m={},h=void 0,g={},R=[];function p(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(u.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(i.A,{language:"bash",children:c.A`
            mkdir -p /etc/default/crictl
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(i.A,{language:"bash",children:c.A`
            cat <<EOF > /etc/default/crictl/download.env
            CRICTL_VERSION="${o.M.crictl.value}"
            BASE_URL="${s.m.crictl.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(i.A,{language:"bash",children:c.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            CRICTL_VERSION="$\{CRICTL_VERSION:-${o.M.crictl.value}}"
            BASE_URL="$\{BASE_URL:-${s.m.crictl.baseUrl}}"
            CRICTL_URL="$\{BASE_URL}/${s.m.crictl.templateUrlBin}"
            CHECKSUM_URL="$\{BASE_URL}/${s.m.crictl.templateUrlBinCheckSum}"
            INSTALL_PATH="${s.m.crictl.path}"
            
            LOG_TAG="crictl-installer"
            TMP_DIR="$(mktemp -d)"
            
            logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."
            CURRENT_VERSION=$(crictl --version 2>/dev/null | awk '{print $3}') || CURRENT_VERSION="none"
            
            logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $CRICTL_VERSION"
            logger -t "$LOG_TAG" "[INFO] Download URL: $CRICTL_URL"
            
            if [[ "$CURRENT_VERSION" != "$CRICTL_VERSION" ]]; then
              logger -t "$LOG_TAG" "[INFO] Updating crictl to version $CRICTL_VERSION..."
            
            cd "$TMP_DIR"
            logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
            
            logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
            curl -fsSL -o crictl.tar.gz "$CRICTL_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }
            
            logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
            curl -fsSL -o crictl.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
            
            logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
            awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
            
            logger -t "$LOG_TAG" "[INFO] Extracting files..."
            tar -C "$TMP_DIR" -xvf crictl.tar.gz
            
            logger -t "$LOG_TAG" "[INFO] Installing crictl..."
            install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"
            
            logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $CRICTL_VERSION."
            rm -rf "$TMP_DIR"
            
            else
              logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
            fi
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(i.A,{language:"bash",children:c.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(i.A,{language:"bash",children:c.A`
            cat <<EOF > /usr/lib/systemd/system/crictl-install.service
            [Unit]
            Description=Install and update b-cloud component crictl
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/download.env
            ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,a.jsxs)(u.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(i.A,{language:"yaml",children:c.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                CRICTL_VERSION="${o.M.crictl.value}"
                BASE_URL="${s.m.crictl.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(i.A,{language:"yaml",children:c.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                CRICTL_VERSION="$\{CRICTL_VERSION:-${o.M.crictl.value}}"
                BASE_URL="$\{BASE_URL:-${s.m.crictl.baseUrl}}"
                CRICTL_URL="$\{BASE_URL}/${s.m.crictl.templateUrlBin}"
                CHECKSUM_URL="$\{BASE_URL}/${s.m.crictl.templateUrlBinCheckSum}"
                INSTALL_PATH="${s.m.crictl.path}"
                
                LOG_TAG="crictl-installer"
                TMP_DIR="$(mktemp -d)"
                
                logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."
                CURRENT_VERSION=$(crictl --version 2>/dev/null | awk '{print $3}') || CURRENT_VERSION="none"
                
                logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $CRICTL_VERSION"
                logger -t "$LOG_TAG" "[INFO] Download URL: $CRICTL_URL"
                
                if [[ "$CURRENT_VERSION" != "$CRICTL_VERSION" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Updating crictl to version $CRICTL_VERSION..."
                
                cd "$TMP_DIR"
                logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
                curl -fsSL -o crictl.tar.gz "$CRICTL_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                curl -fsSL -o crictl.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Extracting files..."
                tar -C "$TMP_DIR" -xvf crictl.tar.gz
                
                logger -t "$LOG_TAG" "[INFO] Installing crictl..."
                install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"
                
                logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $CRICTL_VERSION."
                rm -rf "$TMP_DIR"
                
                else
                  logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
                fi
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(i.A,{language:"yaml",children:c.A`   
            - path: /usr/lib/systemd/system/crictl-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component crictl
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/download.env
                ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function I(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},42567:(e,t,r)=>{r.d(t,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},62774:(e,t,r)=>{r.d(t,{A:()=>$});var l=r(96540),a=r(34164),n=r(65627),c=r(56347),i=r(50372),s=r(30604),o=r(11861),u=r(78749);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:l,default:a}}=e;return{value:t,label:r,attributes:l,default:a}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,c.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function R(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=m(e),[c,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:n}))),[o,d]=g({queryString:r,groupId:a}),[R,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Dv)(r);return[a,(0,l.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),I=(()=>{const e=o??R;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{I&&s(I)}),[I]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),p(e)}),[d,p,n]),tabValues:n}}var p=r(9136);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function E(e){let{className:t,block:r,selectedValue:l,selectValue:c,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),u=e=>{const t=e.currentTarget,r=s.indexOf(t),a=i[r].value;a!==l&&(o(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:u,...n,className:(0,a.A)("tabs__item",I.tabItem,n?.className,{"tabs__item--active":l===t}),children:r??t},t)}))})}function O(e){let{lazy:t,children:r,selectedValue:n}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function _(e){const t=R(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",I.tabList),children:[(0,b.jsx)(E,{...t,...e}),(0,b.jsx)(O,{...t,...e})]})}function $(e){const t=(0,p.A)();return(0,b.jsx)(_,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var l=r(34164);const a={tabItem:"tabItem_Ymn6"};var n=r(74848);function c(e){let{children:t,hidden:r,className:c}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,c),hidden:r,children:t})}}}]);