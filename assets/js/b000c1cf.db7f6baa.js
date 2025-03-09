"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4043,4218,5665,6618,7532,8290,8937],{7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},16292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>A,frontMatter:()=>m,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),i=n(28453),o=n(53828),s=n(1775),c=n(42567),l=n(63770),d=n(87464),u=n(62774);const m={},p=void 0,h={},g=[];function f(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/containerd
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/containerd/download.env
            CONTAINERD_VERSION="${l.M.containerd.value}"
            BASE_URL="${c.m.containerd.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/containerd/download-script.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            CONTAINERD_VERSION="$\{CONTAINERD_VERSION:-${l.M.containerd.value}}"
            BASE_URL="$\{BASE_URL:-${c.m.containerd.baseUrl}}"
            CONTAINERD_URL="$\{BASE_URL}/${c.m.containerd.templateUrlBin}"
            CHECKSUM_URL="$\{BASE_URL}/${c.m.containerd.templateUrlBinCheckSum}"
            INSTALL_PATH="${c.m.containerd.path}"
            
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
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            chmod +x /etc/default/containerd/download-script.sh
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
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
          `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                CONTAINERD_VERSION="${l.M.containerd.value}"
                BASE_URL="${c.m.containerd.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                CONTAINERD_VERSION="$\{CONTAINERD_VERSION:-${l.M.containerd.value}}"
                BASE_URL="$\{BASE_URL:-${c.m.containerd.baseUrl}}"
                CONTAINERD_URL="$\{BASE_URL}/${c.m.containerd.templateUrlBin}"
                CHECKSUM_URL="$\{BASE_URL}/${c.m.containerd.templateUrlBinCheckSum}"
                INSTALL_PATH="${c.m.containerd.path}"
                
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
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
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
          `})]})]})}function A(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f()}},17965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycle","title":"5.2.1.2.1. Containerd","description":"5.2.1.2.1.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycle.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycle","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle"},"sidebar":"techDocs","previous":{"title":"5.2.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/os-setup"},"next":{"title":"5.2.1.2.2. Runc","permalink":"/in-cloud/tech-docs/kubernetes/components/runc/lifecycle"}}');var a=n(74848),i=n(28453),o=n(16292);n(50623),n(85072),n(69073),n(23538),n(65934);const s={id:"lifecycle"},c="5.2.1.2.1. Containerd",l={},d=[{value:"5.2.1.2.1.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521211-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.2.1.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521212-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...o.toc];function u(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"52121-containerd",children:"5.2.1.2.1. Containerd"})}),"\n",(0,a.jsx)(t.h2,{id:"521211-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.1.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u0443\u0437\u0435\u043b."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"521212-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.1.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsx)(o.default,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},23538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),i=n(28453),o=n(53828),s=n(1775),c=n(87464),l=n(62774);const d={},u=void 0,m={},p=[];function h(e){return(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsx)(c.A,{value:"Bash",children:(0,a.jsx)(s.A,{language:"bash",children:o.A`
              cat <<EOF > /usr/lib/systemd/system/containerd.service
              [Unit]
              Description=containerd container runtime
              Documentation=https://containerd.io
              After=network.target local-fs.target
              Requires=containerd-install.service containerd-config-update.service runc-install.service
              
              [Service]
              ExecStartPre=-/sbin/modprobe overlay
              ExecStart=/usr/local/bin/containerd
              
              Type=notify
              Delegate=yes
              KillMode=process
              Restart=always
              RestartSec=5
              LimitNPROC=infinity
              LimitCORE=infinity
              LimitNOFILE=infinity
              TasksMax=infinity
              OOMScoreAdjust=-999
              
              [Install]
              WantedBy=multi-user.target
              EOF
          `})}),(0,a.jsxs)(c.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /usr/lib/systemd/system/containerd.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=containerd container runtime
                Documentation=https://containerd.io
                After=network.target local-fs.target
                Requires=containerd-install.service containerd-config-update.service runc-install.service
            
                [Service]
                ExecStartPre=-/sbin/modprobe overlay
                ExecStart=/usr/local/bin/containerd
                
                Type=notify
                Delegate=yes
                KillMode=process
                Restart=always
                RestartSec=5
                LimitNPROC=infinity
                LimitCORE=infinity
                LimitNOFILE=infinity
                TasksMax=infinity
                OOMScoreAdjust=-999
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},50623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),i=n(28453),o=n(53828),s=n(1775);const c={},l=void 0,d={},u=[];function m(e){return(0,a.jsx)(s.A,{language:"bash",children:o.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d/
      mkdir -p /etc/containerd/certs.d/
  `})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},62774:(e,t,n)=>{n.d(t,{A:()=>R});var r=n(96540),a=n(34164),i=n(65627),o=n(56347),s=n(50372),c=n(30604),l=n(11861),d=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=h({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),A=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{A&&c(A)}),[A]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function E(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(l(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",A.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function N(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function O(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",A.tabList),children:[(0,b.jsx)(E,{...t,...e}),(0,b.jsx)(N,{...t,...e})]})}function R(e){const t=(0,f.A)();return(0,b.jsx)(O,{...e,children:u(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},65934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),i=n(28453),o=n(53828),s=n(1775),c=n(7478),l=n(87464),d=n(62774);const u={},m=void 0,p={},h=[];function g(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            mkdir -p /etc/containerd/
            mkdir -p /etc/containerd/conf.d
            mkdir -p /etc/containerd/certs.d
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/containerd/config.env
            SANDBOX_IMAGE="${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/containerd/config.toml
            version = 2
            imports = ["/etc/containerd/conf.d/*.toml"]
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/containerd/b-cloud-config.toml.template.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            export SANDBOX_IMAGE="$\{SANDBOX_IMAGE:-registry.k8s.io/pause:3.9}"
            
            TEMPLATE_PATH="/etc/default/containerd/b-cloud-config.toml.template"
            CONFIG_PATH="/etc/containerd/conf.d/b-cloud.toml"
            LOG_TAG="containerd-config"
            
            if [[ ! -f "$TEMPLATE_PATH" ]]; then
              logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
              exit 1
            fi
            
            logger -t "$LOG_TAG" "[INFO] Generating containerd config..."
            envsubst '$SANDBOX_IMAGE' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
            
            if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
              logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
            else
              logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
              exit 1
            fi
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            chmod +x /etc/default/containerd/b-cloud-config.toml.template.sh
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/containerd/b-cloud-config.toml.template
            version = 2       
            [plugins]
              [plugins."io.containerd.grpc.v1.cri"]
                sandbox_image = "$\{SANDBOX_IMAGE}"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                runtime_type = "io.containerd.runc.v2"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                SystemdCgroup = true
              [plugins."io.containerd.grpc.v1.cri".registry]
                config_path = "/etc/containerd/certs.d/"
            EOF
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Template"}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
            cat <<"EOF" > /usr/lib/systemd/system/containerd-config-update.service
            [Unit]
            Description=Update containerd config
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/containerd/config.env
            ExecStartPre=/bin/mkdir -p /etc/containerd/conf.d
            ExecStart=/bin/bash /etc/default/containerd/b-cloud-config.toml.template.sh
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/config.env
              owner: root:root
              permissions: '0644'
              content: |
                SANDBOX_IMAGE="${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
          `}),(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /etc/containerd/config.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                imports = ["/etc/containerd/conf.d/*.toml"]
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/b-cloud-config.toml.template.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                export SANDBOX_IMAGE="$\{SANDBOX_IMAGE:-${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}}"
                
                TEMPLATE_PATH="/etc/default/containerd/b-cloud-config.toml.template"
                CONFIG_PATH="/etc/containerd/conf.d/b-cloud.toml"
                LOG_TAG="containerd-config"
                
                if [[ ! -f "$TEMPLATE_PATH" ]]; then
                  logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
                  exit 1
                fi
                
                logger -t "$LOG_TAG" "[INFO] Generating containerd config..."
                envsubst '$SANDBOX_IMAGE' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
                
                if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
                else
                  logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
                  exit 1
                fi
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/b-cloud-config.toml.template
              owner: root:root
              permissions: '0644'
              content: |
                version = 2       
                [plugins]
                  [plugins."io.containerd.grpc.v1.cri"]
                    sandbox_image = "$\{SANDBOX_IMAGE}"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                    runtime_type = "io.containerd.runc.v2"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                    SystemdCgroup = true
                  [plugins."io.containerd.grpc.v1.cri".registry]
                    config_path = "/etc/containerd/certs.d/"
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Template"}),(0,a.jsx)(s.A,{language:"yaml",children:o.A`
            - path: /usr/lib/systemd/system/containerd-config-update.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Update containerd config
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/containerd/config.env
                ExecStartPre=/bin/mkdir -p /etc/containerd/conf.d
                ExecStart=/bin/bash /etc/default/containerd/b-cloud-config.toml.template.sh
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g()}},69073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/statusSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),i=n(28453),o=n(53828),s=n(1775);const c={},l=void 0,d={},u=[];function m(e){const t={admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{language:"bash",children:o.A`
      systemctl status containerd
  `}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsx)(s.A,{language:"bash",children:o.A`
      ● containerd.service - containerd container runtime
           Loaded: loaded (/usr/lib/systemd/system/containerd.service; enabled; preset: enabled)
           Active: active (running) since Tue 2024-12-31 17:26:21 UTC; 2min 30s ago
             Docs: https://containerd.io
         Main PID: 839 (containerd)
            Tasks: 7 (limit: 2274)
           Memory: 62.0M (peak: 62.5M)
              CPU: 375ms
           CGroup: /system.slice/containerd.service
                   └─839 /usr/local/bin/containerd
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/startSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),i=n(28453),o=n(53828),s=n(1775);const c={},l=void 0,d={},u=[];function m(e){return(0,a.jsx)(s.A,{language:"bash",children:o.A`
      systemctl enable containerd
      systemctl start containerd
  `})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},87464:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}}}]);