"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3605,9283],{23789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>N,frontMatter:()=>h,metadata:()=>r,toc:()=>R});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/runc/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/runc/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=n(74848),a=n(28453),c=n(53828),s=n(1775),o=n(42567),u=n(63770),i=n(87464),d=n(62774);const h={},m=void 0,p={},R=[];function g(e){return(0,l.jsxs)(d.A,{groupId:"install-type",children:[(0,l.jsxs)(i.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,l.jsx)(s.A,{language:"bash",children:c.A`
            mkdir -p /etc/default/runc
          `}),(0,l.jsx)("h4",{children:"Systemd Unit ENV"}),(0,l.jsx)(s.A,{language:"bash",children:c.A`
            cat <<EOF > /etc/default/runc/download.env
            RUNC_VERSION="${u.M.runc.value}"
            BASE_URL="${o.m.runc.baseUrl}"
            EOF
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(s.A,{language:"bash",children:c.A`
            cat <<"EOF" > /etc/default/runc/download-script.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            RUNC_VERSION="$\{RUNC_VERSION:-${u.M.runc.value}}"
            BASE_URL="$\{BASE_URL:-https://github.com/opencontainers/runc/releases/download}"
            RUNC_URL="$\{BASE_URL}/${o.m.runc.templateUrlBin}"
            CHECKSUM_URL="$\{BASE_URL}/${o.m.runc.templateUrlBinCheckSum}"
            INSTALL_PATH="${o.m.runc.path}"
            
            LOG_TAG="runc-installer"
            TMP_DIR="$(mktemp -d)"
            
            logger -t "$LOG_TAG" "[INFO] Checking current runc version..."
            CURRENT_VERSION=$("$INSTALL_PATH" --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"
            
            logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $RUNC_VERSION"
            logger -t "$LOG_TAG" "[INFO] Download URL: $RUNC_URL"
            
            if [[ "$CURRENT_VERSION" != "$\{RUNC_VERSION#v}" ]]; then
              logger -t "$LOG_TAG" "[INFO] Updating runc to version $RUNC_VERSION..."
            
              cd "$TMP_DIR"
              logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
            
              logger -t "$LOG_TAG" "[INFO] Downloading runc..."
              curl -fsSL -o runc.amd64 "$RUNC_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
              curl -fsSL -o runc.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
              grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
            
              logger -t "$LOG_TAG" "[INFO] Installing runc..."
              install -m 755 runc.amd64 "$INSTALL_PATH"
            
              logger -t "$LOG_TAG" "[INFO] runc successfully updated to $RUNC_VERSION."
              rm -rf "$TMP_DIR"
            else
              logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
            fi
            EOF
          `}),(0,l.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,l.jsx)(s.A,{language:"bash",children:c.A`
            chmod +x /etc/default/runc/download-script.sh
          `}),(0,l.jsx)("h4",{children:"Systemd Unit Download"}),(0,l.jsx)(s.A,{language:"bash",children:c.A`
            cat <<EOF > /usr/lib/systemd/system/runc-install.service
            [Unit]
            Description=Install and update b-cloud component runc
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/runc/download.env
            ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,l.jsxs)(i.A,{value:"Cloud-init",children:[(0,l.jsx)("h4",{children:"Systemd Unit ENV"}),(0,l.jsx)(s.A,{language:"yaml",children:c.A`
            - path: /etc/default/runc/download.env
              owner: root:root
              permissions: '0644'
              content: |
                RUNC_VERSION="${u.M.runc.value}"
                BASE_URL="${o.m.runc.baseUrl}"
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(s.A,{language:"yaml",children:c.A`
            - path: /etc/default/runc/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                RUNC_VERSION="$\{RUNC_VERSION:-${u.M.runc.value}}"
                BASE_URL="$\{BASE_URL:-https://github.com/opencontainers/runc/releases/download}"
                RUNC_URL="$\{BASE_URL}/${o.m.runc.templateUrlBin}"
                CHECKSUM_URL="$\{BASE_URL}/${o.m.runc.templateUrlBinCheckSum}"
                INSTALL_PATH="${o.m.runc.path}"
                
                LOG_TAG="runc-installer"
                TMP_DIR="$(mktemp -d)"
                
                logger -t "$LOG_TAG" "[INFO] Checking current runc version..."
                CURRENT_VERSION=$("$INSTALL_PATH" --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"
                
                logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $RUNC_VERSION"
                logger -t "$LOG_TAG" "[INFO] Download URL: $RUNC_URL"
                
                if [[ "$CURRENT_VERSION" != "$\{RUNC_VERSION#v}" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Updating runc to version $RUNC_VERSION..."
                
                  cd "$TMP_DIR"
                  logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                  logger -t "$LOG_TAG" "[INFO] Downloading runc..."
                  curl -fsSL -o runc.amd64 "$RUNC_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                  curl -fsSL -o runc.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                  grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                  logger -t "$LOG_TAG" "[INFO] Installing runc..."
                  install -m 755 runc.amd64 "$INSTALL_PATH"
                
                  logger -t "$LOG_TAG" "[INFO] runc successfully updated to $RUNC_VERSION."
                  rm -rf "$TMP_DIR"
                else
                  logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
                fi
          `}),(0,l.jsx)("h4",{children:"Systemd Unit Download"}),(0,l.jsx)(s.A,{language:"yaml",children:c.A`   
            - path: /usr/lib/systemd/system/runc-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component runc
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/runc/download.env
                ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function N(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g()}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},62774:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(96540),l=n(34164),a=n(65627),c=n(56347),s=n(50372),o=n(30604),u=n(11861),i=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,c.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function R(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=h(e),[c,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=p({queryString:n,groupId:l}),[R,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,i.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),N=(()=>{const e=u??R;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{N&&o(N)}),[N]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(9136);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function E(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),i=e=>{const t=e.currentTarget,n=o.indexOf(t),l=s[n].value;l!==r&&(u(t),c(l))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:i,...a,className:(0,l.A)("tabs__item",N.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function I(e){const t=R(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",N.tabList),children:[(0,b.jsx)(E,{...t,...e}),(0,b.jsx)(f,{...t,...e})]})}function O(e){const t=(0,g.A)();return(0,b.jsx)(I,{...e,children:d(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},80884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycle","title":"5.2.1.2.2. Runc","description":"5.2.1.2.2.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycle.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycle","permalink":"/in-cloud/tech-docs/kubernetes/components/runc/lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle"},"sidebar":"techDocs","previous":{"title":"5.2.1.2.1. Containerd","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/lifecycle"},"next":{"title":"5.2.1.2.3. Crictl","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/lifecycle"}}');var l=n(74848),a=n(28453),c=n(23789);const s={id:"lifecycle"},o="5.2.1.2.2. Runc",u={},i=[{value:"5.2.1.2.2.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521221-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.2.2.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521222-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...c.toc];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"52122-runc",children:"5.2.1.2.2. Runc"})}),"\n",(0,l.jsx)(t.h2,{id:"521221-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.2.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u0443\u0437\u0435\u043b."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"521222-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.2.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsx)(c.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},87464:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(34164);const l={tabItem:"tabItem_Ymn6"};var a=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,c),hidden:n,children:t})}}}]);