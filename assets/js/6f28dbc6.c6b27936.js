"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4936],{24022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>b,default:()=>p,frontMatter:()=>m,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),l=a(28453),s=a(53828),u=a(1775),o=a(42567),i=a(63770),d=a(87464),c=a(62774);const m={},b=void 0,E={},h=[];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(d.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(u.A,{language:"bash",children:s.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(u.A,{language:"bash",children:s.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            KUBERNETES_VERSION="${i.M.kubernetes.value}"
            BASE_URL="${o.m.kubeadm.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(u.A,{language:"bash",children:s.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          #!/bin/bash
          set -Eeuo pipefail
        
          KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${i.M.kubernetes.value}}"
          BASE_URL="$\{BASE_URL:-${o.m.kubeadm.baseUrl}}"
          kUBEADM_URL="$\{BASE_URL}/${o.m.kubeadm.templateUrlBin}"
          CHECKSUM_URL="$\{BASE_URL}/${o.m.kubeadm.templateUrlBinCheckSum}"
          INSTALL_PATH="${o.m.kubeadm.path}"
        
          LOG_TAG="kubeadm-installer"
          TMP_DIR="$(mktemp -d)"
        
          logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."
          CURRENT_VERSION=$(kubeadm version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
        
          logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $KUBERNETES_VERSION"
          logger -t "$LOG_TAG" "[INFO] Download URL: $kUBEADM_URL"
        
          if [[ "$CURRENT_VERSION" != "$KUBERNETES_VERSION" ]]; then
            logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $KUBERNETES_VERSION..."
        
            cd "$TMP_DIR"
            logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
        
            logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
            curl -fsSL -o kubeadm "$kUBEADM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
            curl -fsSL -o kubeadm.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
            awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
            install -m 755 kubeadm "$INSTALL_PATH"
        
            logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $KUBERNETES_VERSION."
            rm -rf "$TMP_DIR"
          else
            logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
          fi
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(u.A,{language:"bash",children:s.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(u.A,{language:"bash",children:s.A`
          cat <<EOF > /usr/lib/systemd/system/kubeadm-install.service
          [Unit]
          Description=Install and update kubeadm
          After=network.target
          Wants=network-online.target
          
          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubeadm/download.env
          ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
          RemainAfterExit=yes
          
          [Install]
          WantedBy=multi-user.target
          EOF
        `})]}),(0,r.jsxs)(d.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBERNETES_VERSION="${i.M.kubernetes.value}"
              BASE_URL="${o.m.kubeadm.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              #!/bin/bash
              set -Eeuo pipefail
              
              KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${i.M.kubernetes.value}}"
              BASE_URL="$\{BASE_URL:-${o.m.kubeadm.baseUrl}}"
              kUBEADM_URL="$\{BASE_URL}/${o.m.kubeadm.templateUrlBin}"
              CHECKSUM_URL="$\{BASE_URL}/${o.m.kubeadm.templateUrlBinCheckSum}"
              INSTALL_PATH="${o.m.kubeadm.path}"
              
              LOG_TAG="kubeadm-installer"
              TMP_DIR="$(mktemp -d)"
              
              logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."
              
              CURRENT_VERSION=$(kubeadm version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
              
              logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $KUBERNETES_VERSION"
              logger -t "$LOG_TAG" "[INFO] Download URL: $kUBEADM_URL"
              
              if [[ "$CURRENT_VERSION" != "$KUBERNETES_VERSION" ]]; then
                logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $KUBERNETES_VERSION..."
                
                cd "$TMP_DIR"
                logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
                curl -fsSL -o kubeadm "$kUBEADM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                curl -fsSL -o kubeadm.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
                install -m 755 kubeadm "$INSTALL_PATH"
                
                logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $KUBERNETES_VERSION."
                rm -rf "$TMP_DIR"
              else
                logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
              fi
        `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /usr/lib/systemd/system/kubeadm-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubeadm
              After=network.target
              Wants=network-online.target
              
              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubeadm/download.env
              ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
              RemainAfterExit=yes
              
              [Install]
              WantedBy=multi-user.target
        `})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},42567:(e,t,a)=>{a.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},62774:(e,t,a)=>{a.d(t,{A:()=>I});var n=a(96540),r=a(34164),l=a(65627),s=a(56347),u=a(50372),o=a(30604),i=a(11861),d=a(78749);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function E(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=E({queryString:a,groupId:r}),[h,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),p=(()=>{const e=i??h;return b({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{p&&o(p)}),[p]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var k=a(9136);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var R=a(74848);function g(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),r=u[a].value;r!==n&&(i(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,R.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,R.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:c,onClick:d,...l,className:(0,r.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function N(e){let{lazy:t,children:a,selectedValue:l}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,R.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function S(e){const t=h(e);return(0,R.jsxs)("div",{className:(0,r.A)("tabs-container",p.tabList),children:[(0,R.jsx)(g,{...t,...e}),(0,R.jsx)(N,{...t,...e})]})}function I(e){const t=(0,k.A)();return(0,R.jsx)(S,{...e,children:c(e.children)},String(t))}},63770:(e,t,a)=>{a.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:t})}}}]);