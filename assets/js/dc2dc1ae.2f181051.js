"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[628,1516,1710,3548,3751,5769],{863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>v,frontMatter:()=>b,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/configFiles","title":"configFiles","description":"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),l=n(60513),o=n(1775),u=n(7478),i=n(28702),c=n(87464),d=n(62774);const b={},h=void 0,k={},m=[];function p(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(c.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
      cat <<EOF > ${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${i.D.data.value}
      EOF
    `})]}),(0,a.jsxs)(c.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
      - path: ${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${i.D.data.value}
    `})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},6353:(e,t,n)=>{n.d(t,{$:()=>a});var r=n(7478);const a={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},17150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),l=n(60513),o=n(1775);const u={},i=void 0,c={},d=[];function b(e){return(0,a.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},28702:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(60513),a=n(6353),s=n(7478),l=n(31798);const o={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${a.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      # Для того, что бы сделать эту часть конфигурации статичной
      # все динамичные части будут определены через переменные окружения 
      # systemd Unit kubelet
      # >>>>>>
      # clusterDNS:
      # - "${s.M.kubernetesDNSAddress.value}"
      # clusterDomain: cluster.local
      # TODO нужны только при hardway
      # tlsCertFile: "${a.$.kubeletCurrentServer.crtPath}"
      # tlsPrivateKeyFile: "${a.$.kubeletCurrentServer.crtPath}"
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${s.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${l.h.kubeletHealthz.portNumber}
      httpCheckFrequency: 0s
      imageGCHighThresholdPercent: 55
      imageGCLowThresholdPercent: 50
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      kubeAPIQPS: 50
      kubeAPIBurst: 100
      maxPods: 250
      memorySwap: {}
      nodeStatusReportFrequency: 1s
      nodeStatusUpdateFrequency: 1s
      podPidsLimit: 4096
      registerNode: true
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      serializeImagePulls: false
      serverTLSBootstrap: true
      shutdownGracePeriod: 15s
      shutdownGracePeriodCriticalPods: 5s
      staticPodPath: ${s.M.kuberneteBaseFolderPath.value}/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      tlsMinVersion: "VersionTLS12"
      volumeStatsAggPeriod: 0s
      featureGates:
        RotateKubeletServerCertificate: true
        APIPriorityAndFairness:         true
      tlsCipherSuites:
        - "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
        - "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
    `}}},31798:(e,t,n)=>{n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},45351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>v,frontMatter:()=>b,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),l=n(60513),o=n(1775),u=n(42567),i=n(63770),c=n(87464),d=n(62774);const b={},h=void 0,k={},m=[];function p(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(c.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
            mkdir -p /etc/default/kubelet
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
            cat <<EOF > /etc/default/kubelet/download.env
            KUBERNETES_VERSION="${i.M.kubernetes.value}"
            BASE_URL="${u.m.kubelet.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          #!/bin/bash
          set -Eeuo pipefail
        
          KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${i.M.kubernetes.value}}"
          BASE_URL="$\{BASE_URL:-${u.m.kubelet.baseUrl}}"
          KUBELET_URL="$\{BASE_URL}/${u.m.kubelet.templateUrlBin}"
          CHECKSUM_URL="$\{BASE_URL}/${u.m.kubelet.templateUrlBinCheckSum}"
          INSTALL_PATH="${u.m.kubelet.path}"
        
          LOG_TAG="kubelet-installer"
          TMP_DIR="$(mktemp -d)"
        
          logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."
          CURRENT_VERSION=$(kubelet version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
        
          logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $KUBERNETES_VERSION"
          logger -t "$LOG_TAG" "[INFO] Download URL: $KUBELET_URL"
        
          if [[ "$CURRENT_VERSION" != "$KUBERNETES_VERSION" ]]; then
            logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $KUBERNETES_VERSION..."
        
            cd "$TMP_DIR"
            logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
        
            logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
            curl -fsSL -o kubelet "$KUBELET_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
            curl -fsSL -o kubelet.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
            awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
        
            logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
            install -m 755 kubelet "$INSTALL_PATH"
        
            logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $KUBERNETES_VERSION."
            rm -rf "$TMP_DIR"
          else
            logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
          fi
          EOF
        `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
          cat <<EOF > /usr/lib/systemd/system/kubelet-install.service
          [Unit]
          Description=Install and update kubelet
          After=network.target
          Wants=network-online.target
          
          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubelet/download.env
          ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
          RemainAfterExit=yes
          
          [Install]
          WantedBy=multi-user.target
          EOF
        `})]}),(0,a.jsxs)(c.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(o.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBERNETES_VERSION="${i.M.kubernetes.value}"
              BASE_URL="${u.m.kubelet.baseUrl}"
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              #!/bin/bash
              set -Eeuo pipefail
              
              KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${i.M.kubernetes.value}}"
              BASE_URL="$\{BASE_URL:-${u.m.kubelet.baseUrl}}"
              KUBELET_URL="$\{BASE_URL}/${u.m.kubelet.templateUrlBin}"
              CHECKSUM_URL="$\{BASE_URL}/${u.m.kubelet.templateUrlBinCheckSum}"
              INSTALL_PATH="${u.m.kubelet.path}"
              
              LOG_TAG="kubelet-installer"
              TMP_DIR="$(mktemp -d)"
              
              logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."
              
              CURRENT_VERSION=$(kubelet version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
              
              logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $KUBERNETES_VERSION"
              logger -t "$LOG_TAG" "[INFO] Download URL: $KUBELET_URL"
              
              if [[ "$CURRENT_VERSION" != "$KUBERNETES_VERSION" ]]; then
                logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $KUBERNETES_VERSION..."
                
                cd "$TMP_DIR"
                logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"
                
                logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
                curl -fsSL -o kubelet "$KUBELET_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
                curl -fsSL -o kubelet.sha256sum "$CHECKSUM_URL" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
                awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }
                
                logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
                install -m 755 kubelet "$INSTALL_PATH"
                
                logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $KUBERNETES_VERSION."
                rm -rf "$TMP_DIR"
              else
                logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
              fi
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(o.A,{language:"yaml",children:l.A`
          - path: /usr/lib/systemd/system/kubelet-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubelet
              After=network.target
              Wants=network-online.target
              
              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubelet/download.env
              ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
              RemainAfterExit=yes
              
              [Install]
              WantedBy=multi-user.target
        `})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},52315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>v,frontMatter:()=>b,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),l=n(60513),o=n(1775),u=(n(31798),n(7478)),i=n(87464),c=n(62774),d=n(17150);const b={},h=void 0,k={},m=[...d.toc];function p(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(c.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"Bash",children:[(0,a.jsx)(d.default,{}),(0,a.jsx)("h4",{children:"Systemd Unit"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service
            [Unit]
            Description=kubelet: The Kubernetes Node Agent
            Documentation=https://kubernetes.io/docs/
            Wants=network-online.target
            After=network-online.target
            
            [Service]
            ExecStart=/usr/bin/kubelet
            Restart=always
            StartLimitInterval=0
            RestartSec=10
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Config"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            # Note: This dropin only works with kubeadm and kubelet v1.11+
            [Service]
            Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${u.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/kubelet.conf"
            Environment="KUBELET_CONFIG_ARGS=--config=${u.M.kuberneteKubeletFolderPath.value}/config.yaml"
            # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
            EnvironmentFile=-${u.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
            # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
            # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
            EnvironmentFile=-/etc/default/kubelet/extra-args.env
            ExecStart=
            ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
            EOF
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,a.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,a.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,a.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,a.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,a.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,a.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
      export CLUSTER_NAME="${u.M.clusterName.value}"
      export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
  `}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
      cat <<EOF > ${u.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://${u.M.criEndpoint.value} \
      --pod-infra-container-image=${u.M.baseDockerRegistry.value}/${u.M.pausedImage.value} \
      --config=${u.M.kuberneteKubeletFolderPath.value}/custom-config.yaml \
      --cluster-domain=${u.M.kubernetesClusterDomain.value} \
      --cluster-dns=${u.M.kubernetesDNSAddress.value}
      "
      EOF
  `})]})]}),(0,a.jsxs)(i.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(o.A,{language:"yaml",children:l.A`
          - path: /usr/lib/systemd/system/kubelet.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=kubelet: The Kubernetes Node Agent
              Documentation=https://kubernetes.io/docs/
              Wants=network-online.target
              After=network-online.target
          
              [Service]
              ExecStart=/usr/bin/kubelet
              Restart=always
              StartLimitInterval=0
              RestartSec=10
          
              [Install]
              WantedBy=multi-user.target
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:l.A`
          - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            owner: root:root
            permissions: '0644'
            content: |
              # Note: This dropin only works with kubeadm and kubelet v1.11+
              [Service]
              Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${u.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${u.M.kuberneteBaseFolderPath.value}/kubelet.conf"
              Environment="KUBELET_CONFIG_ARGS=--config=${u.M.kuberneteKubeletFolderPath.value}/config.yaml"
              # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
              EnvironmentFile=-${u.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
              # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
              # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
              EnvironmentFile=-/etc/default/kubelet/extra-args.env
              ExecStart=
              ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARG $KUBELET_EXTRA_ARGS
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(o.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubelet/extra-args.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBELET_EXTRA_ARGS=""
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,a.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,a.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,a.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,a.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,a.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,a.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,a.jsx)(o.A,{language:"bash",children:l.A`
    - path: ${u.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      owner: root:root
      permissions: '0644'
      content: |
        KUBELET_KUBEADM_ARGS="\
        --container-runtime-endpoint=unix://${u.M.criEndpoint.value} \
        --pod-infra-container-image=${u.M.baseDockerRegistry.value}/${u.M.pausedImage.value} \
        --config=${u.M.kuberneteKubeletFolderPath.value}/custom-config.yaml \
        "
  `})]})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},52679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycle-settings","title":"5.2.1.3.4. Kubelet","description":"5.2.1.3.4.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleSettings.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycle-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.3.3. Kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle-settings"},"next":{"title":"5.2.1.3.5.1. Init Manifests","permalink":"/in-cloud/tech-docs/kubernetes/k8s-init-manifests"}}');var a=n(74848),s=n(28453),l=(n(45351),n(17150),n(67332)),o=n(52315),u=n(863);const i={id:"lifecycle-settings"},c="5.2.1.3.4. Kubelet",d={},b=[{value:"5.2.1.3.4.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521341-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.3.4.2. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521342-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-systemd-unit-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...o.toc,{value:"5.2.1.3.4.3. \u0421\u0442\u0430\u0440\u0442 Systemd Unit",id:"521343-\u0441\u0442\u0430\u0440\u0442-systemd-unit",level:2},...l.toc,{value:"5.2.1.3.4.4. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521344-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...u.toc];function h(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"52134-kubelet",children:"5.2.1.3.4. Kubelet"})}),"\n",(0,a.jsx)(t.h2,{id:"521341-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.4.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,a.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit (\u0441\u0435\u0440\u0432\u0438\u0441)."}),"\n",(0,a.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a."}),"\n"]}),"\n","\n",(0,a.jsx)(t.h2,{id:"521342-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-systemd-unit-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.4.2. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(t.h2,{id:"521343-\u0441\u0442\u0430\u0440\u0442-systemd-unit",children:"5.2.1.3.4.3. \u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(t.h2,{id:"521344-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.4.4. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e, \u0435\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435 \u0447\u0435\u0440\u0435\u0437 Kubeadm, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u0443\u0431\u043b\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0436\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"kubeadm config"})})]})}),"\n",(0,a.jsxs)(n,{close:!0,children:[(0,a.jsx)("summary",{children:"Kubelet config"}),(0,a.jsx)(u.default,{})]})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},62774:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),s=n(65627),l=n(56347),o=n(50372),u=n(30604),i=n(11861),c=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=b(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=k({queryString:n,groupId:a}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=i??m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,E.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function S(e){const t=m(e);return(0,E.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,E.jsx)(f,{...t,...e}),(0,E.jsx)(g,{...t,...e})]})}function y(e){const t=(0,p.A)();return(0,E.jsx)(S,{...e,children:d(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},67332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","title":"systemdUnitEnable","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),l=n(60513),o=n(1775);const u={},i=void 0,c={},d=[];function b(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{language:"bash",children:l.A`
      systemctl enable kubelet
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(o.A,{language:"bash",children:l.A`
      Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service → /usr/lib/systemd/system/kubelet.service.
  `})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},87464:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}}}]);