"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[876],{18040:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>E,default:()=>R,frontMatter:()=>b,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=l(74848),r=l(28453),s=l(53828),u=l(1775),o=l(42567),c=l(63770),i=l(87464),d=l(62774);const b={},E=void 0,m={},h=[];function p(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
            mkdir -p /etc/default/kubectl
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
            cat <<EOF > /etc/default/kubectl/download.env
            KUBERNETES_VERSION="${c.M.kubernetes.value}"
            BASE_URL="${o.m.kubectl.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          #!/bin/bash
          set -Eeuo pipefail
        
          KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${c.M.kubernetes.value}}"
          BASE_URL="$\{BASE_URL:-${o.m.kubectl.baseUrl}}"
          KUBECTL_URL="$\{BASE_URL}/${o.m.kubectl.templateUrlBin}"
          CHECKSUM_URL="$\{BASE_URL}/${o.m.kubectl.templateUrlBinCheckSum}"
          INSTALL_PATH="${o.m.kubectl.path}"
        
          LOG_TAG="kubectl-installer"
          TMP_DIR="$(mktemp -d)"
        
          logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."
          CURRENT_VERSION=$(kubectl version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
        
          logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $KUBERNETES_VERSION"
          logger -t "$LOG_TAG" "[INFO] Download URL: $KUBECTL_URL"
        
          if [[ "$CURRENT_VERSION" != "$KUBERNETES_VERSION" ]]; then
            logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $KUBERNETES_VERSION..."
        
            cd "$TMP_DIR"
            logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
        
            logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
            curl -fsSL -o kubectl "$KUBECTL_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
            curl -fsSL -o kubectl.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
            awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
            install -m 755 kubectl "$INSTALL_PATH"
        
            logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $KUBERNETES_VERSION."
            rm -rf "$TMP_DIR"
          else
            logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
          fi
          EOF
        `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
          cat <<EOF > /usr/lib/systemd/system/kubectl-install.service
          [Unit]
          Description=Install and update kubectl
          After=network.target
          Wants=network-online.target
          
          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubectl/download.env
          ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
          RemainAfterExit=yes
          
          [Install]
          WantedBy=multi-user.target
          EOF
        `})]}),(0,a.jsxs)(i.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBERNETES_VERSION="${c.M.kubernetes.value}"
              BASE_URL="${o.m.kubectl.baseUrl}"
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              #!/bin/bash
              set -Eeuo pipefail
              
              KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${c.M.kubernetes.value}}"
              BASE_URL="$\{BASE_URL:-${o.m.kubectl.baseUrl}}"
              KUBECTL_URL="$\{BASE_URL}/${o.m.kubectl.templateUrlBin}"
              CHECKSUM_URL="$\{BASE_URL}/${o.m.kubectl.templateUrlBinCheckSum}"
              INSTALL_PATH="${o.m.kubectl.path}"
              
              LOG_TAG="kubectl-installer"
              TMP_DIR="$(mktemp -d)"
              
              logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."
              
              CURRENT_VERSION=$(kubectl version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
              
              logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $KUBERNETES_VERSION"
              logger -t "$LOG_TAG" "[INFO] Download URL: $KUBECTL_URL"
              
              if [[ "$CURRENT_VERSION" != "$KUBERNETES_VERSION" ]]; then
                logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $KUBERNETES_VERSION..."
                
                cd "$TMP_DIR"
                logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
                curl -fsSL -o kubectl "$KUBECTL_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                curl -fsSL -o kubectl.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
                install -m 755 kubectl "$INSTALL_PATH"
                
                logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $KUBERNETES_VERSION."
                rm -rf "$TMP_DIR"
              else
                logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
              fi
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /usr/lib/systemd/system/kubectl-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubectl
              After=network.target
              Wants=network-online.target
              
              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubectl/download.env
              ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
              RemainAfterExit=yes
              
              [Install]
              WantedBy=multi-user.target
        `})]})]})}function R(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},42567:(e,t,l)=>{l.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},62774:(e,t,l)=>{l.d(t,{A:()=>I});var n=l(96540),a=l(34164),r=l(65627),s=l(56347),u=l(50372),o=l(30604),c=l(11861),i=l(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:a}}=e;return{value:t,label:l,attributes:n,default:a}}))}(l);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function E(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:l}=e;const a=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,o.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:a}=e,r=b(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!E({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:l,groupId:a}),[h,p]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,i.Dv)(l);return[a,(0,n.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:a}),R=(()=>{const e=c??h;return E({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{R&&o(R)}),[R]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!E({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var p=l(9136);const R={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(74848);function k(e){let{className:t,block:l,selectedValue:n,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),i=e=>{const t=e.currentTarget,l=o.indexOf(t),a=u[l].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;t=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;t=o[l]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},t),children:u.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:i,...r,className:(0,a.A)("tabs__item",R.tabItem,r?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function N(e){let{lazy:t,children:l,selectedValue:r}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",R.tabList),children:[(0,g.jsx)(k,{...t,...e}),(0,g.jsx)(N,{...t,...e})]})}function I(e){const t=(0,p.A)();return(0,g.jsx)(S,{...e,children:d(e.children)},String(t))}},63770:(e,t,l)=>{l.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,l)=>{l.d(t,{A:()=>s});l(96540);var n=l(34164);const a={tabItem:"tabItem_Ymn6"};var r=l(74848);function s(e){let{children:t,hidden:l,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:l,children:t})}}}]);