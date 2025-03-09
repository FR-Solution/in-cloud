"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1121],{6353:(e,t,r)=>{r.d(t,{$:()=>a});const a={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>a});const a={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,r)=>{r.d(t,{D:()=>a});const a={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:"${ETCD_PEER_CRT_PATH}"},peerKeyFile:{value:"${ETCD_PEER_KEY_PATH}"},peerTrustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},peerClientCertAuth:{value:"true"},certFile:{value:"${ETCD_SERVER_CRT_PATH}"},keyFile:{value:"${ETCD_SERVER_KEY_PATH}"},trustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},listenClientUrls:{value:"https://127.0.0.1:${ETCD_SERVER_PORT},https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},listenPeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},listenMetricsUrls:{value:"http://127.0.0.1:${ETCD_METRICS_PORT}"},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"}}},11583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>h,default:()=>k,frontMatter:()=>v,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),i=r(53828),s=r(1775),o=r(10119),c=r(25292),u=r(31798),d=r(7478),E=r(63770),_=r(6353);r(28702);i.A`
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
      controlPlaneEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${c.L.securePort.value}
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
            auto-compaction-retention: "${o.D.autoCompactionRetention.value}"
            cert-file: "${o.D.certFile.value}"
            client-cert-auth: "${o.D.clientCertAuth.value}"
            data-dir: "${o.D.dataDir.value}"
            election-timeout: "${o.D.electionTimeout.value}"
            experimental-initial-corrupt-check: "true"
            experimental-watch-progress-notify-interval: "5s"
            heartbeat-interval: "${o.D.heartbeatInterval.value}"
            key-file: "${o.D.keyFile.value}"
            logger: "${o.D.logger.value}"
            max-snapshots: "${o.D.maxSnapshots.value}"
            max-wals: "${o.D.maxWals.value}"
            metrics: "${o.D.metrics.value}"
            peer-cert-file: "${o.D.peerCertFile.value}"
            peer-client-cert-auth: "${o.D.peerClientCertAuth.value}"
            peer-key-file: "${o.D.peerKeyFile.value}"
            peer-trusted-ca-file: "${o.D.peerTrustedCAFile.value}"
            snapshot-count: "10000"
            trusted-ca-file: "${o.D.trustedCAFile.value}"
          serverCertSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "${o.D.name.value}"
          peerCertSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "${o.D.name.value}"
      apiServer:
        extraArgs:
          allow-privileged: "${c.L.allowPrivileged.value}"
          anonymous-auth: "${c.L.anonymousAuth.value}"
          authorization-mode: "${c.L.authorizationMode.value}"
          client-ca-file: "${c.L.clientCAFile.value}"
          enable-admission-plugins: "${c.L.enableAdmissionPlugins.value}"
          enable-bootstrap-token-auth: "${c.L.enableBootstrapTokenAuth.value}"
          etcd-cafile: "${c.L.etcdCAFile.value}"
          etcd-certfile: "${c.L.etcdCertfile.value}"
          etcd-keyfile: "${c.L.etcdKeyfile.value}"
          etcd-servers: "${c.L.etcdServers.value}"
          kubelet-client-certificate: "${c.L.kubeletClientCertificate.value}"
          kubelet-client-key: "${c.L.kubeletClientKey.value}"
          proxy-client-cert-file: "${c.L.proxyClientCertFile.value}"
          proxy-client-key-file: "${c.L.proxyClientKeyFile.value}"
          requestheader-allowed-names: "${c.L.requestheaderAllowedNames.value}"
          requestheader-client-ca-file: "${c.L.requestheaderClientCAFile.value}"
          requestheader-extra-headers-prefix: "${c.L.requestheaderExtraHeadersPrefix.value}"
          requestheader-group-headers: "${c.L.requestheaderGroupHeaders.value}"
          requestheader-username-headers: "${c.L.requestheaderUsernameHeaders.value}"
          secure-port: "${c.L.securePort.value}"
          service-account-issuer: "${c.L.serviceAccountIssuer.value}"
          service-account-key-file: "${c.L.serviceAccountKeyFile.value}"
          service-account-signing-key-file: "${c.L.serviceAccountSigningKeyFile.value}"
          service-cluster-ip-range: "${c.L.serviceClusterIPRange.value}"
          tls-cert-file: "${c.L.tlsCertFile.value}"
          tls-private-key-file: "${c.L.tlsPrivateKeyFile.value}"
          kubelet-preferred-address-types: InternalIP,ExternalIP,Hostname
          cloud-provider: external
          v: "2"
          event-ttl: "1h0m0s"
          kubernetes-service-node-port: "0"
          max-connection-bytes-per-sec: "0"
          max-requests-inflight: "400"
          min-request-timeout: "1800"
          profiling: "false"
          feature-gates: "RotateKubeletServerCertificate=true"
          audit-log-maxage: "30"
          audit-log-maxbackup: "10"
          audit-log-maxsize: "1000"
          audit-log-mode: "batch"
          runtime-config: "api/all=true"
          enable-aggregator-routing: "true"
          api-audiences: "konnectivity-server"
          oidc-client-id: paas-client
          oidc-username-prefix: "-"
          oidc-username-claim: email
          oidc-groups-claim: groups
          kubelet-timeout: "5s"
          etcd-prefix: /registry

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
          v: "2"
          cloud-provider: external
          allocate-node-cidrs: "false"
          concurrent-deployment-syncs: "5"
          concurrent-endpoint-syncs: "5"
          concurrent-namespace-syncs: "10"
          concurrent-resource-quota-syncs: "5"
          horizontal-pod-autoscaler-sync-period: "30s"
          leader-elect-lease-duration: "15s"
          leader-elect-renew-deadline: "10s"
          leader-elect-retry-period: "2s"
          node-monitor-grace-period: "40s"
          node-monitor-period: "5s"
          profiling: "false"
          resource-quota-sync-period: "5m0s"
          terminated-pod-gc-threshold: "0"
          cluster-signing-duration: "720h"
          use-service-account-credentials: "true"

      scheduler:
        extraArgs:
          bind-address: 0.0.0.0
          leader-elect: "true"
    `;var A=r(87464),p=r(62774);const v={},h=void 0,S={},m=[];function T(e){const t={admonition:"admonition",code:"code",p:"p",...(0,l.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
      export KUBELET_SERVER_PORT=${u.h.kubeletServer.portNumber}
      export KUBELET_READ_ONLY_PORT=${u.h.kubeletReadOnlyPort.portNumber}
      export KUBE_APISERVER_PORT=${u.h.kubeAPIServer.portNumber}
      export ETCD_SERVER_PORT=${u.h.etcdServer.portNumber}
      export KUBELET_HEALTHZ_PORT=${u.h.kubeletHealthz.portNumber}
    `}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
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
    `}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
      export KUBELET_CURRENT_SERVER_CRT_PATH="${_.$.kubeletCurrentServer.crtPath}"
      export KUBERNETES_CA_KEY_PATH="${_.$.kubernetesCA.keyPath}"
      export KUBERNETES_CA_CRT_PATH="${_.$.kubernetesCA.crtPath}"
      export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${_.$.kubernetesSA.keyPath}"
      export KUBERNETES_SERVICE_ACCOUNT_CRT_PATH="${_.$.kubernetesSA.crtPath}"
      export KUBERNETES_SERVER_KEY_PATH="${_.$.kubernetesServer.keyPath}"
      export KUBERNETES_SERVER_CRT_PATH="${_.$.kubernetesServer.crtPath}"
      export KUBERNETES_KUBELET_CLIENT_KEY_PATH="${_.$.kubernetesKubeletClient.keyPath}"
      export KUBERNETES_KUBELET_CLIENT_CRT_PATH="${_.$.kubernetesKubeletClient.crtPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH="${_.$.kubernetesFrontProxyClient.keyPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH="${_.$.kubernetesFrontProxyClient.crtPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_CN="${_.$.kubernetesFrontProxyClient.cname}"
      export KUBERNETES_ETCD_CLIENT_KEY_PATH="${_.$.kubernetesEtcdClient.keyPath}"
      export KUBERNETES_ETCD_CLIENT_CRT_PATH="${_.$.kubernetesEtcdClient.crtPath}"
      export FRONT_PROXY_CA_CRT_PATH="${_.$.frontProxyCA.crtPath}"
      export ETCD_SERVER_KEY_PATH="${_.$.etcdServer.keyPath}"
      export ETCD_SERVER_CRT_PATH="${_.$.etcdServer.crtPath}"
      export ETCD_PEER_KEY_PATH="${_.$.etcdPeer.keyPath}"
      export ETCD_PEER_CRT_PATH="${_.$.etcdPeer.crtPath}"
      export ETCD_CA_CRT_PATH="${_.$.etcdCA.crtPath}"
    `}),(0,n.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,n.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,n.jsx)(s.A,{children:i.A`
    cat <<EOF > $\{BASE_K8S_PATH}/kubeadm.conf
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
      kubeletExtraArgs:
        cloud-provider: external
        #config: /etc/kubernetes/kubelet/config.yaml
      name: '{{ local_hostname }}'
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
    controlPlaneEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${c.L.securePort.value}
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
          auto-compaction-retention: "${o.D.autoCompactionRetention.value}"
          cert-file: "${o.D.certFile.value}"
          client-cert-auth: "${o.D.clientCertAuth.value}"
          data-dir: "${o.D.dataDir.value}"
          election-timeout: "${o.D.electionTimeout.value}"
          experimental-initial-corrupt-check: "true"
          experimental-watch-progress-notify-interval: "5s"
          heartbeat-interval: "${o.D.heartbeatInterval.value}"
          key-file: "${o.D.keyFile.value}"
          logger: "${o.D.logger.value}"
          max-snapshots: "${o.D.maxSnapshots.value}"
          max-wals: "${o.D.maxWals.value}"
          metrics: "${o.D.metrics.value}"
          peer-cert-file: "${o.D.peerCertFile.value}"
          peer-client-cert-auth: "${o.D.peerClientCertAuth.value}"
          peer-key-file: "${o.D.peerKeyFile.value}"
          peer-trusted-ca-file: "${o.D.peerTrustedCAFile.value}"
          snapshot-count: "10000"
          trusted-ca-file: "${o.D.trustedCAFile.value}"
        serverCertSANs:
        - "$\{MACHINE_LOCAL_ADDRESS}"
        - "${o.D.name.value}"
        peerCertSANs:
        - "$\{MACHINE_LOCAL_ADDRESS}"
        - "${o.D.name.value}"
    apiServer:
      extraArgs:
        allow-privileged: "${c.L.allowPrivileged.value}"
        anonymous-auth: "${c.L.anonymousAuth.value}"
        authorization-mode: "${c.L.authorizationMode.value}"
        client-ca-file: "${c.L.clientCAFile.value}"
        enable-admission-plugins: "${c.L.enableAdmissionPlugins.value}"
        enable-bootstrap-token-auth: "${c.L.enableBootstrapTokenAuth.value}"
        etcd-cafile: "${c.L.etcdCAFile.value}"
        etcd-certfile: "${c.L.etcdCertfile.value}"
        etcd-keyfile: "${c.L.etcdKeyfile.value}"
        etcd-servers: "${c.L.etcdServers.value}"
        kubelet-client-certificate: "${c.L.kubeletClientCertificate.value}"
        kubelet-client-key: "${c.L.kubeletClientKey.value}"
        proxy-client-cert-file: "${c.L.proxyClientCertFile.value}"
        proxy-client-key-file: "${c.L.proxyClientKeyFile.value}"
        requestheader-allowed-names: "${c.L.requestheaderAllowedNames.value}"
        requestheader-client-ca-file: "${c.L.requestheaderClientCAFile.value}"
        requestheader-extra-headers-prefix: "${c.L.requestheaderExtraHeadersPrefix.value}"
        requestheader-group-headers: "${c.L.requestheaderGroupHeaders.value}"
        requestheader-username-headers: "${c.L.requestheaderUsernameHeaders.value}"
        secure-port: "${c.L.securePort.value}"
        service-account-issuer: "${c.L.serviceAccountIssuer.value}"
        service-account-key-file: "${c.L.serviceAccountKeyFile.value}"
        service-account-signing-key-file: "${c.L.serviceAccountSigningKeyFile.value}"
        service-cluster-ip-range: "${c.L.serviceClusterIPRange.value}"
        tls-cert-file: "${c.L.tlsCertFile.value}"
        tls-private-key-file: "${c.L.tlsPrivateKeyFile.value}"
        kubelet-preferred-address-types: InternalIP,ExternalIP,Hostname
        cloud-provider: external
        v: "2"
        event-ttl: "1h0m0s"
        kubernetes-service-node-port: "0"
        max-connection-bytes-per-sec: "0"
        max-requests-inflight: "400"
        min-request-timeout: "1800"
        profiling: "false"
        feature-gates: "RotateKubeletServerCertificate=true"
        audit-log-maxage: "30"
        audit-log-maxbackup: "10"
        audit-log-maxsize: "1000"
        audit-log-mode: "batch"
        runtime-config: "api/all=true"
        enable-aggregator-routing: "true"
        api-audiences: "konnectivity-server"
        oidc-client-id: paas-client
        oidc-username-prefix: "-"
        oidc-username-claim: email
        oidc-groups-claim: groups
        kubelet-timeout: "5s"
        etcd-prefix: /registry

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
        v: "2"
        cloud-provider: external
        allocate-node-cidrs: "false"
        concurrent-deployment-syncs: "5"
        concurrent-endpoint-syncs: "5"
        concurrent-namespace-syncs: "10"
        concurrent-resource-quota-syncs: "5"
        horizontal-pod-autoscaler-sync-period: "30s"
        leader-elect-lease-duration: "15s"
        leader-elect-renew-deadline: "10s"
        leader-elect-retry-period: "2s"
        node-monitor-grace-period: "40s"
        node-monitor-period: "5s"
        profiling: "false"
        resource-quota-sync-period: "5m0s"
        terminated-pod-gc-threshold: "0"
        cluster-signing-duration: "720h"
        use-service-account-credentials: "true"

    scheduler:
      extraArgs:
        bind-address: 0.0.0.0
        leader-elect: "true"
EOF`})]}),"\n",(0,n.jsxs)(p.A,{groupId:"install-type",children:[(0,n.jsxs)(A.A,{value:"Bash",children:[(0,n.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,n.jsx)(s.A,{children:i.A`
          cat <<EOF > $\{BASE_K8S_PATH}/kubeadm.conf
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
            kubeletExtraArgs:
              cloud-provider: external
              config: /etc/kubernetes/kubelet/config.yaml
            name: '{{ local_hostname }}'
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
          controlPlaneEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${c.L.securePort.value}
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
                auto-compaction-retention: "${o.D.autoCompactionRetention.value}"
                cert-file: "${o.D.certFile.value}"
                client-cert-auth: "${o.D.clientCertAuth.value}"
                data-dir: "${o.D.dataDir.value}"
                election-timeout: "${o.D.electionTimeout.value}"
                experimental-initial-corrupt-check: "true"
                experimental-watch-progress-notify-interval: "5s"
                heartbeat-interval: "${o.D.heartbeatInterval.value}"
                key-file: "${o.D.keyFile.value}"
                logger: "${o.D.logger.value}"
                max-snapshots: "${o.D.maxSnapshots.value}"
                max-wals: "${o.D.maxWals.value}"
                metrics: "${o.D.metrics.value}"
                peer-cert-file: "${o.D.peerCertFile.value}"
                peer-client-cert-auth: "${o.D.peerClientCertAuth.value}"
                peer-key-file: "${o.D.peerKeyFile.value}"
                peer-trusted-ca-file: "${o.D.peerTrustedCAFile.value}"
                snapshot-count: "10000"
                trusted-ca-file: "${o.D.trustedCAFile.value}"
              serverCertSANs:
              - "$\{MACHINE_LOCAL_ADDRESS}"
              - "${o.D.name.value}"
              peerCertSANs:
              - "$\{MACHINE_LOCAL_ADDRESS}"
              - "${o.D.name.value}"
          apiServer:
            extraArgs:
              allow-privileged: "${c.L.allowPrivileged.value}"
              anonymous-auth: "${c.L.anonymousAuth.value}"
              authorization-mode: "${c.L.authorizationMode.value}"
              client-ca-file: "${c.L.clientCAFile.value}"
              enable-admission-plugins: "${c.L.enableAdmissionPlugins.value}"
              enable-bootstrap-token-auth: "${c.L.enableBootstrapTokenAuth.value}"
              etcd-cafile: "${c.L.etcdCAFile.value}"
              etcd-certfile: "${c.L.etcdCertfile.value}"
              etcd-keyfile: "${c.L.etcdKeyfile.value}"
              etcd-servers: "${c.L.etcdServers.value}"
              kubelet-client-certificate: "${c.L.kubeletClientCertificate.value}"
              kubelet-client-key: "${c.L.kubeletClientKey.value}"
              proxy-client-cert-file: "${c.L.proxyClientCertFile.value}"
              proxy-client-key-file: "${c.L.proxyClientKeyFile.value}"
              requestheader-allowed-names: "${c.L.requestheaderAllowedNames.value}"
              requestheader-client-ca-file: "${c.L.requestheaderClientCAFile.value}"
              requestheader-extra-headers-prefix: "${c.L.requestheaderExtraHeadersPrefix.value}"
              requestheader-group-headers: "${c.L.requestheaderGroupHeaders.value}"
              requestheader-username-headers: "${c.L.requestheaderUsernameHeaders.value}"
              secure-port: "${c.L.securePort.value}"
              service-account-issuer: "${c.L.serviceAccountIssuer.value}"
              service-account-key-file: "${c.L.serviceAccountKeyFile.value}"
              service-account-signing-key-file: "${c.L.serviceAccountSigningKeyFile.value}"
              service-cluster-ip-range: "${c.L.serviceClusterIPRange.value}"
              tls-cert-file: "${c.L.tlsCertFile.value}"
              tls-private-key-file: "${c.L.tlsPrivateKeyFile.value}"
              kubelet-preferred-address-types: InternalIP,ExternalIP,Hostname
              cloud-provider: external
              v: "2"
              event-ttl: "1h0m0s"
              kubernetes-service-node-port: "0"
              max-connection-bytes-per-sec: "0"
              max-requests-inflight: "400"
              min-request-timeout: "1800"
              profiling: "false"
              feature-gates: "RotateKubeletServerCertificate=true"
              audit-log-maxage: "30"
              audit-log-maxbackup: "10"
              audit-log-maxsize: "1000"
              audit-log-mode: "batch"
              runtime-config: "api/all=true"
              enable-aggregator-routing: "true"
              api-audiences: "konnectivity-server"
              oidc-client-id: paas-client
              oidc-username-prefix: "-"
              oidc-username-claim: email
              oidc-groups-claim: groups
              kubelet-timeout: "5s"
              etcd-prefix: /registry
    
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
              v: "2"
              cloud-provider: external
              allocate-node-cidrs: "false"
              concurrent-deployment-syncs: "5"
              concurrent-endpoint-syncs: "5"
              concurrent-namespace-syncs: "10"
              concurrent-resource-quota-syncs: "5"
              horizontal-pod-autoscaler-sync-period: "30s"
              leader-elect-lease-duration: "15s"
              leader-elect-renew-deadline: "10s"
              leader-elect-retry-period: "2s"
              node-monitor-grace-period: "40s"
              node-monitor-period: "5s"
              profiling: "false"
              resource-quota-sync-period: "5m0s"
              terminated-pod-gc-threshold: "0"
              cluster-signing-duration: "720h"
              use-service-account-credentials: "true"
    
          scheduler:
            extraArgs:
              bind-address: 0.0.0.0
              leader-elect: "true"
        EOF`}),(0,n.jsx)("h4",{children:"Systemd Unit ENV"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
          `}),(0,n.jsx)("h4",{children:"Systemd Unit Template"}),(0,n.jsx)(s.A,{language:"bash",children:i.A`
          `})]}),(0,n.jsxs)(A.A,{value:"Cloud-init",children:[(0,n.jsx)("h4",{children:"Systemd Unit ENV"}),(0,n.jsx)(s.A,{language:"yaml",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,n.jsx)(s.A,{language:"yaml",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,n.jsx)(s.A,{language:"yaml",children:i.A`
          `}),(0,n.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,n.jsx)(s.A,{language:"yaml",children:i.A`
          `}),(0,n.jsx)("h4",{children:"Systemd Unit Template"}),(0,n.jsx)(s.A,{language:"yaml",children:i.A`
          `})]})]})]})}function k(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}},25292:(e,t,r)=>{r.d(t,{L:()=>a});const a={clientCAFile:{value:"${KUBERNETES_CA_CRT_PATH}"},tlsCertFile:{value:"${KUBERNETES_SERVER_CRT_PATH}"},tlsPrivateKeyFile:{value:"${KUBERNETES_SERVER_KEY_PATH}"},etcdCAFile:{value:"${ETCD_CA_CRT_PATH}"},etcdCertfile:{value:"${KUBERNETES_ETCD_CLIENT_CRT_PATH}"},etcdKeyfile:{value:"${KUBERNETES_ETCD_CLIENT_KEY_PATH}"},etcdServers:{value:"${ETCD_SERVERS}"},kubeletClientCertificate:{value:"${KUBERNETES_KUBELET_CLIENT_CRT_PATH}"},kubeletClientKey:{value:"${KUBERNETES_KUBELET_CLIENT_KEY_PATH}"},kubeletServerPort:{value:"${KUBELET_SERVER_PORT}"},kubeletReadOnlyPort:{value:"${KUBELET_READ_ONLY_PORT}"},proxyClientCertFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}"},proxyClientKeyFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}"},requestheaderAllowedNames:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CN}"},requestheaderClientCAFile:{value:"${FRONT_PROXY_CA_CRT_PATH}"},serviceAccountIssuer:{value:"https://kubernetes.default.svc.${CLUSTER_DOMAIN}"},serviceAccountKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}"},serviceAccountSigningKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"},serviceClusterIPRange:{value:"${SERVICE_CIDR}"},advertiseAddress:{value:"${MACHINE_LOCAL_ADDRESS}"},securePort:{value:"${KUBE_APISERVER_PORT}"},anonymousAuth:{value:"true"},authorizationMode:{value:"Node,RBAC"},allowPrivileged:{value:"true"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},enableBootstrapTokenAuth:{value:"true"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"}}},28702:(e,t,r)=>{r.d(t,{D:()=>a});const a={data:{value:r(53828).A`
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
    `}}},31798:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,r)=>{r.d(t,{A:()=>C});var a=r(96540),n=r(34164),l=r(65627),i=r(56347),s=r(50372),o=r(30604),c=r(11861),u=r(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function E(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function _(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function A(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=E(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!_({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,d]=A({queryString:r,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),h=(()=>{const e=c??p;return _({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!_({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(9136);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=r(74848);function m(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),n=s[r].value;n!==a&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...l,className:(0,n.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function T(e){let{lazy:t,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function k(e){const t=p(e);return(0,S.jsxs)("div",{className:(0,n.A)("tabs-container",h.tabList),children:[(0,S.jsx)(m,{...t,...e}),(0,S.jsx)(T,{...t,...e})]})}function C(e){const t=(0,v.A)();return(0,S.jsx)(k,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var l=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}}}]);