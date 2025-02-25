"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[447,1121,1736,2262,4048,4936,7562,9249,9816],{1245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/status","title":"status","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/status.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/status","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/status","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(53828),c=r(1775);const i={},l=void 0,u={},d=[];function E(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{language:"bash",children:o.A`
      kubeadm version
  `}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0441\u044f, \u0442\u043e \u043f\u0440\u0438 \u0432\u044b\u0432\u043e\u0434\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."}),(0,a.jsx)(c.A,{language:"bash",children:o.A`
      kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E(e)}},6353:(e,t,r)=>{r.d(t,{$:()=>n});const n={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,r)=>{r.d(t,{D:()=>n});const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:"${ETCD_PEER_CRT_PATH}"},peerKeyFile:{value:"${ETCD_PEER_KEY_PATH}"},peerTrustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},peerClientCertAuth:{value:"true"},certFile:{value:"${ETCD_SERVER_CRT_PATH}"},keyFile:{value:"${ETCD_SERVER_KEY_PATH}"},trustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},listenClientUrls:{value:"https://127.0.0.1:${ETCD_SERVER_PORT},https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},listenPeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},listenMetricsUrls:{value:"http://127.0.0.1:${ETCD_METRICS_PORT}"},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"}}},11020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycle-settings","title":"5.2.1.3.3. Kubeadm","description":"5.2.1.3.3.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/lifecycleSettings.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.3.2. Crictl","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/lifecycle-settings"},"next":{"title":"5.2.1.3.4. Kubelet","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle-settings"}}');var a=r(74848),s=r(28453),o=(r(24022),r(86969)),c=(r(1245),r(44772));const i={id:"lifecycle-settings"},l="5.2.1.3.3. Kubeadm",u={},d=[{value:"5.2.1.3.3.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521331-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.3.3.2. \u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521332-\u0440\u0430\u0431\u043e\u0447\u0438\u0435-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...c.toc,{value:"5.2.1.3.3.3. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521333-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...o.toc];function E(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"52133-kubeadm",children:"5.2.1.3.3. Kubeadm"})}),"\n",(0,a.jsx)(t.h2,{id:"521331-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.3.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,a.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"521332-\u0440\u0430\u0431\u043e\u0447\u0438\u0435-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.3.2. \u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(t.h2,{id:"521333-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.3.3. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,a.jsx)(o.default,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E(e)}},11583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>A,default:()=>T,frontMatter:()=>h,metadata:()=>n,toc:()=>S});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(53828),c=r(1775),i=r(10119),l=r(25292),u=r(31798),d=r(7478),E=r(63770),p=r(6353),_=r(28702);const m={data:{value:o.A`
      ---
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: InitConfiguration
      skipPhases:
        - addon
      bootstrapTokens:
        - token: "fjt9ex.lwzqgdlvoxtqk4yw"
          description: "kubeadm bootstrap token"
          ttl: "24h"
      certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
      nodeRegistration:
        ignorePreflightErrors:
          # > При поэтапной сборке кластера, а не выполнении единой команды, 
          # > необходимо указать исключения в параметре ignorePreflightErrors, 
          # > чтобы команда kubeadm init phase preflight выполнялась без препятствий. 
          # > Для этого в nodeRegistration добавляются следующие исключения:
          - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
          - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
          - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
          - FileAvailable--etc-kubernetes-manifests-etcd.yaml
      ---
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: ClusterConfiguration
      controlPlaneEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${l.L.securePort.value}
      imageRepository: "$\{BASE_DOCKER_REGISTRY}"
      networking:
        serviceSubnet: "$\{SERVICE_CIDR}"
        dnsDomain: "$\{CLUSTER_DOMAIN}"
      kubernetesVersion: "$\{KUBERNETES_VERSION}"
      etcd:
        local:
          imageRepository: "$\{BASE_DOCKER_REGISTRY}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            auto-compaction-retention: "${i.D.autoCompactionRetention.value}"
            cert-file: "${i.D.certFile.value}"
            client-cert-auth: "${i.D.clientCertAuth.value}"
            data-dir: "${i.D.dataDir.value}"
            election-timeout: "${i.D.electionTimeout.value}"
            experimental-initial-corrupt-check: "true"
            experimental-watch-progress-notify-interval: "5s"
            heartbeat-interval: "${i.D.heartbeatInterval.value}"
            key-file: "${i.D.keyFile.value}"
            logger: "${i.D.logger.value}"
            max-snapshots: "${i.D.maxSnapshots.value}"
            max-wals: "${i.D.maxWals.value}"
            metrics: "${i.D.metrics.value}"
            peer-cert-file: "${i.D.peerCertFile.value}"
            peer-client-cert-auth: "${i.D.peerClientCertAuth.value}"
            peer-key-file: "${i.D.peerKeyFile.value}"
            peer-trusted-ca-file: "${i.D.peerTrustedCAFile.value}"
            snapshot-count: "10000"
            trusted-ca-file: "${i.D.trustedCAFile.value}"
          serverCertSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "${i.D.name.value}"
          peerCertSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "${i.D.name.value}"
      apiServer:
        extraArgs:
          allow-privileged: "${l.L.allowPrivileged.value}"
          anonymous-auth: "${l.L.anonymousAuth.value}"
          authorization-mode: "${l.L.authorizationMode.value}"
          client-ca-file: "${l.L.clientCAFile.value}"
          enable-admission-plugins: "${l.L.enableAdmissionPlugins.value}"
          enable-bootstrap-token-auth: "${l.L.enableBootstrapTokenAuth.value}"
          etcd-cafile: "${l.L.etcdCAFile.value}"
          etcd-certfile: "${l.L.etcdCertfile.value}"
          etcd-keyfile: "${l.L.etcdKeyfile.value}"
          etcd-servers: "${l.L.etcdServers.value}"
          kubelet-client-certificate: "${l.L.kubeletClientCertificate.value}"
          kubelet-client-key: "${l.L.kubeletClientKey.value}"
          kubelet-preferred-address-types: InternalIP,ExternalIP,Hostname
          proxy-client-cert-file: "${l.L.proxyClientCertFile.value}"
          proxy-client-key-file: "${l.L.proxyClientKeyFile.value}"
          requestheader-allowed-names: "${l.L.requestheaderAllowedNames.value}"
          requestheader-client-ca-file: "${l.L.requestheaderClientCAFile.value}"
          requestheader-extra-headers-prefix: "${l.L.requestheaderExtraHeadersPrefix.value}"
          requestheader-group-headers: "${l.L.requestheaderGroupHeaders.value}"
          requestheader-username-headers: "${l.L.requestheaderUsernameHeaders.value}"
          secure-port: "${l.L.securePort.value}"
          service-account-issuer: "${l.L.serviceAccountIssuer.value}"
          service-account-key-file: "${l.L.serviceAccountKeyFile.value}"
          service-account-signing-key-file: "${l.L.serviceAccountSigningKeyFile.value}"
          service-cluster-ip-range: "${l.L.serviceClusterIPRange.value}"
          tls-cert-file: "${l.L.tlsCertFile.value}"
          tls-private-key-file: "${l.L.tlsPrivateKeyFile.value}"
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        certSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}"
          - "127.0.0.1"
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          authentication-kubeconfig: "$\{BASE_K8S_PATH}/controller-manager.conf"
          authorization-kubeconfig: "$\{BASE_K8S_PATH}/controller-manager.conf"
          kubeconfig: "$\{BASE_K8S_PATH}/controller-manager.conf"
          client-ca-file: "$\{KUBERNETES_CA_CRT_PATH}"
          cluster-signing-cert-file: "$\{KUBERNETES_CA_CRT_PATH}"
          cluster-signing-key-file: "$\{KUBERNETES_CA_KEY_PATH}"
          requestheader-client-ca-file: "$\{FRONT_PROXY_CA_CRT_PATH}"
          root-ca-file: "$\{KUBERNETES_CA_CRT_PATH}"
          service-account-private-key-file: "$\{KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"
          cluster-name: "$\{CLUSTER_NAME}"
          cluster-signing-duration: "720h"
          concurrent-replicaset-syncs: "20"
          authorization-always-allow-paths: "/healthz,/readyz,/livez,/metrics"
          bind-address: "0.0.0.0"
          controllers: "*,bootstrapsigner,tokencleaner"
          feature-gates: "RotateKubeletServerCertificate=true"
          kube-api-burst: "120"
          kube-api-qps: "100"
          leader-elect: "true"
          namespace-sync-period: "2m0s"
          node-startup-grace-period: "10s"
          terminated-pod-gc-threshold: "12500"
          v: "2"
      scheduler:
        extraArgs:
          bind-address: 0.0.0.0
    `}},h={},A=void 0,k={},S=[];function b(e){const t={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(c.A,{language:"bash",children:o.A`
      export KUBELET_SERVER_PORT=${u.h.kubeletServer.portNumber}
      export KUBELET_READ_ONLY_PORT=${u.h.kubeletReadOnlyPort.portNumber}
      export KUBE_APISERVER_PORT=${u.h.kubeAPIServer.portNumber}
      export ETCD_SERVER_PORT=${u.h.etcdServer.portNumber}
      export KUBELET_HEALTHZ_PORT=${u.h.kubeletHealthz.portNumber}
    `}),(0,a.jsx)(c.A,{language:"bash",children:o.A`
      export BASE_K8S_PATH="${d.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${d.M.kuberneteKubeletFolderPath.value}"
      export SERVICE_DNS="${d.M.kubernetesDNSAddress.value}"
      export SERVICE_CIDR="${d.M.kubernetesServiceCIDR.value}"
      export MACHINE_LOCAL_ADDRESS=${d.M.virtualMachineLocalAddress.value}
      export BASE_DOCKER_REGISTRY="${d.M.baseDockerRegistry.value}"
      export CLUSTER_NAME="${d.M.clusterName.value}"
      export BASE_DOMAIN="${d.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${d.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${d.M.virtualMachineFullName.value}"
      export KUBERNETES_VERSION="${E.M.kubernetes.value}"
      export ETCD_SERVERS="https://127.0.0.1:$\{ETCD_SERVER_PORT}"
    `}),(0,a.jsx)(c.A,{language:"bash",children:o.A`
      export KUBELET_CURRENT_SERVER_CRT_PATH="${p.$.kubeletCurrentServer.crtPath}"
      export KUBERNETES_CA_KEY_PATH="${p.$.kubernetesCA.keyPath}"
      export KUBERNETES_CA_CRT_PATH="${p.$.kubernetesCA.crtPath}"
      export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${p.$.kubernetesSA.keyPath}"
      export KUBERNETES_SERVICE_ACCOUNT_CRT_PATH="${p.$.kubernetesSA.crtPath}"
      export KUBERNETES_SERVER_KEY_PATH="${p.$.kubernetesServer.keyPath}"
      export KUBERNETES_SERVER_CRT_PATH="${p.$.kubernetesServer.crtPath}"
      export KUBERNETES_KUBELET_CLIENT_KEY_PATH="${p.$.kubernetesKubeletClient.keyPath}"
      export KUBERNETES_KUBELET_CLIENT_CRT_PATH="${p.$.kubernetesKubeletClient.crtPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH="${p.$.kubernetesFrontProxyClient.keyPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH="${p.$.kubernetesFrontProxyClient.crtPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_CN="${p.$.kubernetesFrontProxyClient.cname}"
      export KUBERNETES_ETCD_CLIENT_KEY_PATH="${p.$.kubernetesEtcdClient.keyPath}"
      export KUBERNETES_ETCD_CLIENT_CRT_PATH="${p.$.kubernetesEtcdClient.crtPath}"
      export FRONT_PROXY_CA_CRT_PATH="${p.$.frontProxyCA.crtPath}"
      export ETCD_SERVER_KEY_PATH="${p.$.etcdServer.keyPath}"
      export ETCD_SERVER_CRT_PATH="${p.$.etcdServer.crtPath}"
      export ETCD_PEER_KEY_PATH="${p.$.etcdPeer.keyPath}"
      export ETCD_PEER_CRT_PATH="${p.$.etcdPeer.crtPath}"
      export ETCD_CA_CRT_PATH="${p.$.etcdCA.crtPath}"
    `}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,a.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,a.jsx)(c.A,{children:`cat <<EOF > \${BASE_K8S_PATH}/kubeadm.conf\n${m.data.value}\n---\n${_.D.data.value}\nEOF`})]})}function T(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},24022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/downloadBIN","title":"downloadBIN","description":"\u041f\u0435\u0440\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(53828),c=r(1775),i=r(42567),l=r(63770);const u={},d=void 0,E={},p=[];function _(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:o.A`
      export KUBERNETES_VERSION="${l.M.kubernetes.value}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:o.A`
      wget -O ${i.m.kubeadm.path} ${i.m.kubeadm.templateUrl}
      chmod +x ${i.m.kubeadm.path}
  `})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_()}},25292:(e,t,r)=>{r.d(t,{L:()=>n});const n={clientCAFile:{value:"${KUBERNETES_CA_CRT_PATH}"},tlsCertFile:{value:"${KUBERNETES_SERVER_CRT_PATH}"},tlsPrivateKeyFile:{value:"${KUBERNETES_SERVER_KEY_PATH}"},etcdCAFile:{value:"${ETCD_CA_CRT_PATH}"},etcdCertfile:{value:"${KUBERNETES_ETCD_CLIENT_CRT_PATH}"},etcdKeyfile:{value:"${KUBERNETES_ETCD_CLIENT_KEY_PATH}"},etcdServers:{value:"${ETCD_SERVERS}"},kubeletClientCertificate:{value:"${KUBERNETES_KUBELET_CLIENT_CRT_PATH}"},kubeletClientKey:{value:"${KUBERNETES_KUBELET_CLIENT_KEY_PATH}"},kubeletServerPort:{value:"${KUBELET_SERVER_PORT}"},kubeletReadOnlyPort:{value:"${KUBELET_READ_ONLY_PORT}"},proxyClientCertFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}"},proxyClientKeyFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}"},requestheaderAllowedNames:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CN}"},requestheaderClientCAFile:{value:"${FRONT_PROXY_CA_CRT_PATH}"},serviceAccountIssuer:{value:"https://kubernetes.default.svc.${CLUSTER_DOMAIN}"},serviceAccountKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}"},serviceAccountSigningKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"},serviceClusterIPRange:{value:"${SERVICE_CIDR}"},advertiseAddress:{value:"${MACHINE_LOCAL_ADDRESS}"},securePort:{value:"${KUBE_APISERVER_PORT}"},anonymousAuth:{value:"true"},authorizationMode:{value:"Node,RBAC"},allowPrivileged:{value:"true"},enableAdmissionPlugins:{value:"NodeRestriction"},enableBootstrapTokenAuth:{value:"true"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"}}},28702:(e,t,r)=>{r.d(t,{D:()=>n});const n={data:{value:r(53828).A`
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
    `}}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},42567:(e,t,r)=>{r.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrl:"https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubelet"},kubectl:{path:"/usr/local/bin/kubectl",templateUrl:"https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubectl"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrl:"https://storage.googleapis.com/kubernetes-release/release/${KUBERNETES_VERSION}/bin/linux/amd64/kubeadm"},runc:{path:"/usr/local/bin/runc",templateUrl:"https://github.com/opencontainers/runc/releases/download/${RUNC_VERSION}/runc.amd64"},containerd:{path:"/tmp/containerd.tar.gz",templateUrl:"https://github.com/containerd/containerd/releases/download/v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz"},crictl:{path:"/tmp/crictl.tar.gz",templateUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download/${CRICTL_VERSION}/crictl-${CRICTL_VERSION}-linux-amd64.tar.gz"},etcdctl:{path:"/tmp/etcd.tar.gz",templateUrl:"https://github.com/etcd-io/etcd/releases/download/${ETCD_TOOL_VERSION}/etcd-${ETCD_TOOL_VERSION}-linux-amd64.tar.gz"}}},44772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(53828),c=r(1775);const i={},l=void 0,u={},d=[];function E(e){return(0,a.jsx)(c.A,{language:"bash",children:o.A`
      mkdir -p /etc/kubernetes/
  `})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E()}},62774:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),a=r(34164),s=r(65627),o=r(56347),c=r(50372),i=r(30604),l=r(11861),u=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function E(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function _(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=E(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=_({queryString:r,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),A=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{A&&i(A)}),[A]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=r(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function S(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=c[r].value;a!==n&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function T(e){const t=m(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",A.tabList),children:[(0,k.jsx)(S,{...t,...e}),(0,k.jsx)(b,{...t,...e})]})}function v(e){const t=(0,h.A)();return(0,k.jsx)(T,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},72608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/secondaryMasters","title":"secondaryMasters","description":"","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(87464),c=r(62774);const i={},l=void 0,u={},d=[];function E(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(c.A,{children:[(0,a.jsx)(o.A,{value:"master-2",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export HOST_NAME=master-2\n"})})}),(0,a.jsx)(o.A,{value:"master-3",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export HOST_NAME=master-3\n"})})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E(e)}},75478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/initMaster","title":"initMaster","description":"","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/initMaster","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(87464),c=r(62774);const i={},l=void 0,u={},d=[];function E(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsx)(c.A,{children:(0,a.jsx)(o.A,{value:"master-1",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export HOST_NAME=master-1\n"})})})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E(e)}},86969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configFiles","title":"configFiles","description":"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(98744),c=r(11583),i=r(75478),l=r(72608);const u={},d=void 0,E={},p=[{value:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:3},...i.toc,...c.toc,{value:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:3},...l.toc,...o.toc];function _(e){const t={h3:"h3",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(t.h3,{id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(o.default,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},87464:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},98744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>E,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>_});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),o=r(1775),c=r(25292),i=r(53828),l=r(7478),u=r(31798);const d={},E=void 0,p={},_=[];function m(e){const{Details:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
      export BASE_K8S_PATH="${l.M.kuberneteBaseFolderPath.value}"
      export CLUSTER_NAME="${l.M.clusterName.value}"
      export BASE_DOMAIN="${l.M.kubernetesBaseDomain.value}"
      export KUBE_APISERVER_PORT=${u.h.kubeAPIServer.portNumber}
      export CLUSTER_DOMAIN="${l.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${l.M.virtualMachineFullName.value}"
      export MACHINE_LOCAL_ADDRESS="${l.M.virtualMachineLocalAddress.value}"
      export KUBE_APISERVER_PORT=${u.h.kubeAPIServer.portNumber}

    `}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,a.jsx)(o.A,{children:i.A`cat <<EOF > $\{BASE_K8S_PATH}/kubeadm.conf
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: $\{KUBE_APISERVER_PORT}
      certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    discovery:
      bootstrapToken:
        apiServerEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${c.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);