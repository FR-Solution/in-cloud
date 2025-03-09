"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3099,4668],{42567:(e,t,n)=>{n.d(t,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},55189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>h,default:()=>R,frontMatter:()=>m,metadata:()=>l,toc:()=>p});const l=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/in-cloud/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),r=n(28453),c=n(60513),s=n(1775),o=n(42567),i=n(63770),d=n(87464),u=n(62774);const m={},h=void 0,E={},p=[];function g(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(s.A,{language:"bash",children:c.A`
            mkdir -p /etc/default/etcd
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"bash",children:c.A`
            cat <<EOF > /etc/default/etcd/download.env
            ETCD_VERSION="${i.M.etcdctl.value}"
            BASE_URL="${o.m.etcdctl.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(s.A,{language:"bash",children:c.A`
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
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(s.A,{language:"yaml",children:c.A`
            chmod +x /etc/default/etcd/download-script.sh
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(s.A,{language:"bash",children:c.A`
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
          `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"yaml",children:c.A`
            - path: /etc/default/etcd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                ETCD_VERSION="${i.M.etcdctl.value}"
                BASE_URL="${o.m.etcdctl.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(s.A,{language:"yaml",children:c.A`
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
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(s.A,{language:"yaml",children:c.A`
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
          `})]})]})}function R(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g()}},62774:(e,t,n)=>{n.d(t,{A:()=>b});var l=n(96540),a=n(34164),r=n(65627),c=n(56347),s=n(50372),o=n(30604),i=n(11861),d=n(78749);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function E(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[c,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[i,u]=E({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),R=(()=>{const e=i??p;return h({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{R&&o(R)}),[R]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=n(9136);const R={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=n(74848);function I(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==l&&(i(t),c(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",R.tabItem,r?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:r}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function $(e){const t=p(e);return(0,T.jsxs)("div",{className:(0,a.A)("tabs-container",R.tabList),children:[(0,T.jsx)(I,{...t,...e}),(0,T.jsx)(_,{...t,...e})]})}function b(e){const t=(0,g.A)();return(0,T.jsx)($,{...e,children:u(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},76743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/lifecycle","title":"5.2.1.2.7. ETCD","description":"5.2.1.2.7.1.  \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/etcd/lifecycle.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/lifecycle","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle"},"sidebar":"techDocs","previous":{"title":"5.2.1.2.6. Kubelet","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle"},"next":{"title":"5.2.1.3.1. Containerd","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/lifecycle-settings"}}');var a=n(74848),r=n(28453),c=n(55189);const s={id:"lifecycle"},o="5.2.1.2.7. ETCD",i={},d=[{value:"5.2.1.2.7.1.  \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521271--\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.2.7.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521272-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...c.toc];function u(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"52127-etcd",children:"5.2.1.2.7. ETCD"})}),"\n",(0,a.jsx)(t.h2,{id:"521271--\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.7.1.  \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u0443\u0437\u0435\u043b."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"521272-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.7.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsx)(c.default,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},87464:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var l=n(34164);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,c),hidden:n,children:t})}}}]);