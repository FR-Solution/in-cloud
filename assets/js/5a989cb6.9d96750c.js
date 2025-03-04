"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1516,1710,3548,5769,9914],{863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>_,frontMatter:()=>E,metadata:()=>n,toc:()=>S});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/configFiles","title":"configFiles","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),l=r(28453),a=r(53828),c=r(1775),o=r(7478),i=r(6353),u=r(31798),d=r(28702);const E={},k=void 0,b={},S=[];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:a.A`
      export BASE_K8S_PATH="${o.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${o.M.kuberneteKubeletFolderPath.value}"
      export KUBERNETES_CA_CRT_PATH="${i.$.kubernetesCA.crtPath}"
      export SERVICE_DNS="${o.M.kubernetesDNSAddress.value}"
      export CLUSTER_NAME="${o.M.clusterName.value}"
      export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
      export KUBELET_CURRENT_SERVER_CRT_PATH="${i.$.kubeletCurrentServer.crtPath}"
      export KUBELET_HEALTHZ_PORT=${u.h.kubeletHealthz.portNumber}

  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:`cat <<EOF > \${BASE_KUBELET_PATH}/config.yaml\n---\n${d.D.data.value}\nEOF`})]})}function _(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},6353:(e,t,r)=>{r.d(t,{$:()=>n});const n={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},17150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),l=r(28453),a=r(53828),c=r(1775);const o={},i=void 0,u={},d=[];function E(e){return(0,s.jsx)(c.A,{language:"bash",children:a.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(E,{...e})}):E()}},28702:(e,t,r)=>{r.d(t,{D:()=>n});const n={data:{value:r(53828).A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: $\{KUBERNETES_CA_CRT_PATH}
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      clusterDNS:
      - $\{SERVICE_DNS}
      clusterDomain: $\{CLUSTER_DOMAIN}
      # TODO нужны только при hardway
      # tlsCertFile: "$\{KUBELET_CURRENT_SERVER_CRT_PATH}"
      # tlsPrivateKeyFile: "$\{KUBELET_CURRENT_SERVER_CRT_PATH}"
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: ""
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: $\{KUBELET_HEALTHZ_PORT}
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
      staticPodPath: $\{BASE_K8S_PATH}/manifests
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
    `}}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},42567:(e,t,r)=>{r.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io/"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io/"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io/"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${RUNC_VERSION}/runc.amd64",templateUrlBinCheckSum:"${RUNC_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${ETCD_VERSION}/etcd-${ETCD_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${ETCD_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},45351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>_,frontMatter:()=>E,metadata:()=>n,toc:()=>S});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),l=r(28453),a=r(53828),c=r(1775),o=r(42567),i=r(63770),u=r(87464),d=r(62774);const E={},k=void 0,b={},S=[];function h(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubelet
          `}),(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(c.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubelet/download.env
            KUBERNETES_VERSION="${i.M.kubernetes.value}"
            BASE_URL="${o.m.kubelet.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          #!/bin/bash
          set -Eeuo pipefail
        
          KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${i.M.kubernetes.value}}"
          BASE_URL="$\{BASE_URL:-${o.m.kubelet.baseUrl}}"
          KUBELET_URL="$\{BASE_URL}/${o.m.kubelet.templateUrlBin}"
          CHECKSUM_URL="$\{BASE_URL}/${o.m.kubelet.templateUrlBinCheckSum}"
          INSTALL_PATH="${o.m.kubelet.path}"
        
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
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(c.A,{language:"bash",children:a.A`
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
        `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBERNETES_VERSION="${i.M.kubernetes.value}"
              BASE_URL="${o.m.kubelet.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              #!/bin/bash
              set -Eeuo pipefail
              
              KUBERNETES_VERSION="$\{KUBERNETES_VERSION:-${i.M.kubernetes.value}}"
              BASE_URL="$\{BASE_URL:-${o.m.kubelet.baseUrl}}"
              KUBELET_URL="$\{BASE_URL}/${o.m.kubelet.templateUrlBin}"
              CHECKSUM_URL="$\{BASE_URL}/${o.m.kubelet.templateUrlBinCheckSum}"
              INSTALL_PATH="${o.m.kubelet.path}"
              
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
        `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(c.A,{language:"yaml",children:a.A`
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
        `})]})]})}function _(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},47075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>E,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycle","title":"5.2.1.2.6. Kubelet","description":"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleInstall.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycle","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle"},"sidebar":"techDocs","previous":{"title":"5.2.1.2.5. Kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle"},"next":{"title":"5.2.1.2.7. Etcd","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/lifecycle"}}');var s=r(74848),l=r(28453),a=r(45351);r(17150),r(52315),r(863);const c={id:"lifecycle"},o="5.2.1.2.6. Kubelet",i={},u=[{value:"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521261-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.2.6.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521262-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...a.toc];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"52126-kubelet",children:"5.2.1.2.6. Kubelet"})}),"\n",(0,s.jsx)(t.h2,{id:"521261-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u0443\u0437\u0435\u043b."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"521262-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.6.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(a.default,{})]})}function E(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},52315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>d,default:()=>S,frontMatter:()=>u,metadata:()=>n,toc:()=>k});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),l=r(28453),a=r(53828),c=r(1775),o=r(31798),i=r(7478);const u={},d=void 0,E={},k=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:a.A`
      export BASE_K8S_PATH="${i.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${i.M.kuberneteKubeletFolderPath.value}"
      export CRI_ENDPOINT="${i.M.criEndpoint.value}"
      export BASE_DOCKER_REGISTRY="${i.M.baseDockerRegistry.value}"
      export PAUSED_IMAGE="${i.M.pausedImage.value}"
      export KUBELET_SERVER_PORT=${o.h.kubeletServer.portNumber}
      export KUBELET_HEALTHZ_PORT=${o.h.kubeletHealthz.portNumber}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f systemd unit"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:a.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 systemd unit"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=$\{BASE_K8S_PATH}/bootstrap-kubelet.conf --kubeconfig=$\{BASE_K8S_PATH}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=$\{BASE_KUBELET_PATH}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-$\{BASE_KUBELET_PATH}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
      EOF
  `}),"\n",(0,s.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > $\{BASE_KUBELET_PATH}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://$\{CRI_ENDPOINT} \
      --pod-infra-container-image=$\{BASE_DOCKER_REGISTRY}/$\{PAUSED_IMAGE}
      "
      EOF
  `}),"\n",(0,s.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/kubelet
      KUBELET_EXTRA_ARGS=""
      EOF
  `}),"\n"]})}function S(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},62774:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(96540),s=r(34164),l=r(65627),a=r(56347),c=r(50372),o=r(30604),i=r(11861),u=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function E(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function S(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=E(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,d]=b({queryString:r,groupId:s}),[S,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),_=(()=>{const e=i??S;return k({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{_&&o(_)}),[_]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var h=r(9136);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=r(74848);function m(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=c[r].value;s!==n&&(i(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",_.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function A(e){let{lazy:t,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function T(e){const t=S(e);return(0,p.jsxs)("div",{className:(0,s.A)("tabs-container",_.tabList),children:[(0,p.jsx)(m,{...t,...e}),(0,p.jsx)(A,{...t,...e})]})}function f(e){const t=(0,h.A)();return(0,p.jsx)(T,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}}}]);