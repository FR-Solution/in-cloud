"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1308,1607,5244,9740],{7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},14853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/status","title":"status","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/status.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/status","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/status","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=n(74848),c=n(28453),a=n(60513),i=n(1775);const s={},o=void 0,u={},d=[];function h(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{language:"bash",children:a.A`
      crictl ps -a
  `}),"\n",(0,l.jsxs)(t.admonition,{type:"note",children:[(0,l.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432 \u0432\u044b\u0432\u043e\u0434\u0435 \u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043e\u043a, \u0442\u043e crictl \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0438 \u0441\u043c\u043e\u0442\u0440\u0438 \u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 endpoint."}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
      root@compute:/home/user# crictl ps -a
      CONTAINER           IMAGE               CREATED             STATE               NAME                ATTEMPT             POD ID              POD

  `})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},20783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycle-settings","title":"5.2.1.3.2. Crictl","description":"5.2.1.3.2.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/lifecycleSettings.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycle-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/lifecycle-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.3.1. Containerd","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/lifecycle-settings"},"next":{"title":"5.2.1.3.3. Kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle-settings"}}');var l=n(74848),c=n(28453),a=(n(39522),n(52672));n(14853);const i={id:"lifecycle-settings"},s="5.2.1.3.2. Crictl",o={},u=[{value:"5.2.1.3.2.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521321-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.3.2.2. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521322-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...a.toc];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"52132-crictl",children:"5.2.1.3.2. Crictl"})}),"\n",(0,l.jsx)(t.h2,{id:"521321-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.2.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,l.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"521322-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.2.2. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},39522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>E,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=n(74848),c=n(28453),a=n(60513),i=n(1775),s=n(42567),o=n(63770),u=n(87464),d=n(62774);const h={},m=void 0,g={},p=[];function f(e){return(0,l.jsxs)(d.A,{groupId:"install-type",children:[(0,l.jsxs)(u.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/crictl
          `}),(0,l.jsx)("h4",{children:"Systemd Unit ENV"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/crictl/download.env
            CRICTL_VERSION="${o.M.crictl.value}"
            BASE_URL="${s.m.crictl.baseUrl}"
            EOF
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
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
          `}),(0,l.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,l.jsx)("h4",{children:"Systemd Unit Download"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
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
          `})]}),(0,l.jsxs)(u.A,{value:"Cloud-init",children:[(0,l.jsx)("h4",{children:"Systemd Unit ENV"}),(0,l.jsx)(i.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                CRICTL_VERSION="${o.M.crictl.value}"
                BASE_URL="${s.m.crictl.baseUrl}"
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(i.A,{language:"yaml",children:a.A`
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
          `}),(0,l.jsx)("h4",{children:"Systemd Unit Download"}),(0,l.jsx)(i.A,{language:"yaml",children:a.A`   
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
          `})]})]})}function E(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(f,{...e})}):f()}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/configFiles","title":"configFiles","description":"Systemd Unit ENV","source":"@site/docs/tech-docs/kubernetes/components/crictl/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=n(74848),c=n(28453),a=n(60513),i=n(1775),s=n(7478),o=n(87464),u=n(62774);const d={},h=void 0,m={},g=[];function p(e){return(0,l.jsxs)(u.A,{groupId:"install-type",children:[(0,l.jsxs)(o.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"Systemd Unit ENV"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/config.env
            CRI_ENDPOINT="${s.M.criEndpoint.value}"
            EOF
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/crictl.yaml.template.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            export CRI_ENDPOINT="$\{CRI_ENDPOINT:-${s.M.criEndpoint.value}}"
            
            TEMPLATE_PATH="/etc/default/crictl/crictl.yaml.template"
            CONFIG_PATH="/etc/crictl.yaml"
            LOG_TAG="crictl-config"
            
            if [[ ! -f "$TEMPLATE_PATH" ]]; then
              logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
              exit 1
            fi
            
            logger -t "$LOG_TAG" "[INFO] Generating crictl config..."
            envsubst '$CRI_ENDPOINT' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
            
            if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
              logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
            else
              logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
              exit 1
            fi
            EOF
          `}),(0,l.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            chmod +x /etc/default/crictl/crictl.yaml.template.sh
          `}),(0,l.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/crictl.yaml.template
            runtime-endpoint: unix://$\{CRI_ENDPOINT}
            EOF
          `}),(0,l.jsx)("h4",{children:"Systemd Unit Template"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            cat <<"EOF" > /usr/lib/systemd/system/crictl-config-update.service
            [Unit]
            Description=Update crictl config
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/config.env
            ExecStart=/bin/bash /etc/default/crictl/crictl.yaml.template.sh
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,l.jsxs)(o.A,{value:"Cloud-init",children:[(0,l.jsx)("h4",{children:"Systemd Unit ENV"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            - path: /etc/default/crictl/config.env
              owner: root:root
              permissions: '0644'
              content: |
                CRI_ENDPOINT="${s.M.criEndpoint.value}"
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            - path: /etc/default/crictl/crictl.yaml.template.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                export CRI_ENDPOINT="$\{CRI_ENDPOINT:-${s.M.criEndpoint.value}}"
                
                TEMPLATE_PATH="/etc/default/crictl/crictl.yaml.template"
                CONFIG_PATH="/etc/crictl.yaml"
                LOG_TAG="crictl-config"
                
                if [[ ! -f "$TEMPLATE_PATH" ]]; then
                  logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
                  exit 1
                fi
                
                logger -t "$LOG_TAG" "[INFO] Generating crictl config..."
                envsubst '$CRI_ENDPOINT' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
                
                if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
                else
                  logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
                  exit 1
                fi
          `}),(0,l.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            - path: /etc/default/crictl/crictl.yaml.template
              owner: root:root
              permissions: '0644'
              content: |
                runtime-endpoint: unix://$\{CRI_ENDPOINT}
          `}),(0,l.jsx)("h4",{children:"Systemd Unit Template"}),(0,l.jsx)(i.A,{language:"bash",children:a.A`
            - path: /usr/lib/systemd/system/crictl-config-update.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Update crictl config
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/config.env
                ExecStart=/bin/bash /etc/default/crictl/crictl.yaml.template.sh
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p()}},62774:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(96540),l=n(34164),c=n(65627),a=n(56347),i=n(50372),s=n(30604),o=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const l=(0,a.W6)(),c=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(c),(0,r.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(l.location.search);t.set(c,e),l.replace({...l.location,search:t.toString()})}),[c,l])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,c=h(e),[a,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:c}))),[o,d]=g({queryString:n,groupId:l}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,c]=(0,u.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&c.set(e)}),[n,c])]}({groupId:l}),E=(()=>{const e=o??p;return m({value:e,tabValues:c})?e:null})();(0,i.A)((()=>{E&&s(E)}),[E]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,c]),tabValues:c}}var f=n(9136);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=n(74848);function I(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),l=i[n].value;l!==r&&(o(t),a(l))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:c}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:u,...c,className:(0,l.A)("tabs__item",E.tabItem,c?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function R(e){let{lazy:t,children:n,selectedValue:c}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===c));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==c})))})}function b(e){const t=p(e);return(0,T.jsxs)("div",{className:(0,l.A)("tabs-container",E.tabList),children:[(0,T.jsx)(I,{...t,...e}),(0,T.jsx)(R,{...t,...e})]})}function O(e){const t=(0,f.A)();return(0,T.jsx)(b,{...e,children:d(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const l={tabItem:"tabItem_Ymn6"};var c=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:t})}}}]);