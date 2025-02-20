"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1516,1710,3548,5769,7374,7691],{863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>S,default:()=>h,frontMatter:()=>k,metadata:()=>n,toc:()=>_});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/configFiles","title":"configFiles","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(53828),o=r(1775),l=r(7478),i=r(6353),u=r(31798),d=r(28702);const k={},S=void 0,p={},_=[];function A(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
      export BASE_K8S_PATH="${l.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${l.M.kuberneteKubeletFolderPath.value}"
      export KUBERNETES_CA_CRT_PATH="${i.$.kubernetesCA.crtPath}"
      export SERVICE_DNS="${l.M.kubernetesDNSAddress.value}"
      export CLUSTER_NAME="${l.M.clusterName.value}"
      export BASE_DOMAIN="${l.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${l.M.kubernetesClusterDomain.value}"
      export KUBELET_CURRENT_SERVER_CRT_PATH="${i.$.kubeletCurrentServer.crtPath}"
      export KUBELET_HEALTHZ_PORT=${u.h.kubeletHealthz.portNumber}

  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:`cat <<EOF > \${BASE_KUBELET_PATH}/config.yaml\n---\n${d.D.data.value}\nEOF`})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(A,{...e})}):A()}},6353:(e,t,r)=>{r.d(t,{$:()=>n});const n={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},17150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>S,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(53828),o=r(1775);const l={},i=void 0,u={},d=[];function k(e){return(0,s.jsx)(o.A,{language:"bash",children:a.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function S(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},25161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycle","title":"5.2.1.2.6. Kubelet","description":"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycle.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycle","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle"},"sidebar":"techDocs","previous":{"title":"5.2.1.2.5. Kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle"},"next":{"title":"5.2.1.2.7. Etcd","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/lifecycle"}}');var s=r(74848),c=r(28453),a=r(45351);r(17150),r(93887),r(52315),r(863);const o={id:"lifecycle"},l="5.2.1.2.6. Kubelet",i={},u=[{value:"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521261-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.2.6.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521262-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...a.toc];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"52126-kubelet",children:"5.2.1.2.6. Kubelet"})}),"\n",(0,s.jsx)(t.h2,{id:"521261-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u0443\u0437\u0435\u043b."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"521262-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.6.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(a.default,{})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28702:(e,t,r)=>{r.d(t,{D:()=>n});const n={data:{value:r(53828).A`
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
    `}}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},42567:(e,t,r)=>{r.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrl:"https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubelet"},kubectl:{path:"/usr/local/bin/kubectl",templateUrl:"https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubectl"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrl:"https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm"},runc:{path:"/usr/local/bin/runc",templateUrl:"https://github.com/opencontainers/runc/releases/download/${RUNC_VERSION}/runc.amd64"},containerd:{path:"/tmp/containerd.tar.gz",templateUrl:"https://github.com/containerd/containerd/releases/download/v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz"},crictl:{path:"/tmp/crictl.tar.gz",templateUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download/${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz"},etcdctl:{path:"/tmp/etcd.tar.gz",templateUrl:"https://github.com/etcd-io/etcd/releases/download/${ETCD_TOOL_VERSION}/etcd-${ETCD_TOOL_VERSION}-linux-amd64.tar.gz"}}},45351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>_,frontMatter:()=>u,metadata:()=>n,toc:()=>S});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/downloadBIN","title":"downloadBIN","description":"\u041f\u0435\u0440\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(53828),o=r(1775),l=r(42567),i=r(63770);const u={},d=void 0,k={},S=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
      export KUBERNETES_VERSION="${i.M.kubernetes.value}"
  `}),"\n",(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
      wget -O ${l.m.kubelet.path} ${l.m.kubelet.templateUrl}
      chmod +x ${l.m.kubelet.path}
  `})]})}function _(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},52315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>_,frontMatter:()=>u,metadata:()=>n,toc:()=>S});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(53828),o=r(1775),l=r(31798),i=r(7478);const u={},d=void 0,k={},S=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
      export BASE_K8S_PATH="${i.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${i.M.kuberneteKubeletFolderPath.value}"
      export CRI_ENDPOINT="${i.M.criEndpoint.value}"
      export BASE_DOCKER_REGISTRY="${i.M.baseDockerRegistry.value}"
      export PAUSED_IMAGE="${i.M.pausedImage.value}"
      export KUBELET_SERVER_PORT=${l.h.kubeletServer.portNumber}
      export KUBELET_HEALTHZ_PORT=${l.h.kubeletHealthz.portNumber}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f systemd unit"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 systemd unit"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
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
  `}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
      cat <<EOF > $\{BASE_KUBELET_PATH}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://$\{CRI_ENDPOINT} \
      --pod-infra-container-image=$\{BASE_DOCKER_REGISTRY}/$\{PAUSED_IMAGE}
      "
      EOF
  `}),"\n",(0,s.jsx)(o.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/kubelet
      KUBELET_EXTRA_ARGS=""
      EOF
  `}),"\n"]})}function _(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},63770:(e,t,r)=>{r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},93887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>S,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/startSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(53828),o=r(1775);const l={},i=void 0,u={},d=[];function k(e){return(0,s.jsx)(o.A,{language:"bash",children:a.A`
      systemctl enable kubelet
  `})}function S(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}}}]);