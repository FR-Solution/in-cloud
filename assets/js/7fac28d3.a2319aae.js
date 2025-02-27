"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1121],{6353:(e,t,r)=>{r.d(t,{$:()=>a});const a={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>a});const a={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,r)=>{r.d(t,{D:()=>a});const a={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:"${ETCD_PEER_CRT_PATH}"},peerKeyFile:{value:"${ETCD_PEER_KEY_PATH}"},peerTrustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},peerClientCertAuth:{value:"true"},certFile:{value:"${ETCD_SERVER_CRT_PATH}"},keyFile:{value:"${ETCD_SERVER_KEY_PATH}"},trustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},listenClientUrls:{value:"https://127.0.0.1:${ETCD_SERVER_PORT},https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},listenPeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},listenMetricsUrls:{value:"http://127.0.0.1:${ETCD_METRICS_PORT}"},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"}}},11583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>P,contentTitle:()=>p,default:()=>v,frontMatter:()=>T,metadata:()=>a,toc:()=>C});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),i=r(28453),l=r(53828),s=r(1775),c=r(10119),o=r(25292),u=r(31798),_=r(7478),E=r(63770),A=r(6353),S=r(28702);const d={data:{value:l.A`
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
      controlPlaneEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${o.L.securePort.value}
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
            auto-compaction-retention: "${c.D.autoCompactionRetention.value}"
            cert-file: "${c.D.certFile.value}"
            client-cert-auth: "${c.D.clientCertAuth.value}"
            data-dir: "${c.D.dataDir.value}"
            election-timeout: "${c.D.electionTimeout.value}"
            experimental-initial-corrupt-check: "true"
            experimental-watch-progress-notify-interval: "5s"
            heartbeat-interval: "${c.D.heartbeatInterval.value}"
            key-file: "${c.D.keyFile.value}"
            logger: "${c.D.logger.value}"
            max-snapshots: "${c.D.maxSnapshots.value}"
            max-wals: "${c.D.maxWals.value}"
            metrics: "${c.D.metrics.value}"
            peer-cert-file: "${c.D.peerCertFile.value}"
            peer-client-cert-auth: "${c.D.peerClientCertAuth.value}"
            peer-key-file: "${c.D.peerKeyFile.value}"
            peer-trusted-ca-file: "${c.D.peerTrustedCAFile.value}"
            snapshot-count: "10000"
            trusted-ca-file: "${c.D.trustedCAFile.value}"
          serverCertSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "${c.D.name.value}"
          peerCertSANs:
          - "$\{MACHINE_LOCAL_ADDRESS}"
          - "${c.D.name.value}"
      apiServer:
        extraArgs:
          allow-privileged: "${o.L.allowPrivileged.value}"
          anonymous-auth: "${o.L.anonymousAuth.value}"
          authorization-mode: "${o.L.authorizationMode.value}"
          client-ca-file: "${o.L.clientCAFile.value}"
          enable-admission-plugins: "${o.L.enableAdmissionPlugins.value}"
          enable-bootstrap-token-auth: "${o.L.enableBootstrapTokenAuth.value}"
          etcd-cafile: "${o.L.etcdCAFile.value}"
          etcd-certfile: "${o.L.etcdCertfile.value}"
          etcd-keyfile: "${o.L.etcdKeyfile.value}"
          etcd-servers: "${o.L.etcdServers.value}"
          kubelet-client-certificate: "${o.L.kubeletClientCertificate.value}"
          kubelet-client-key: "${o.L.kubeletClientKey.value}"
          proxy-client-cert-file: "${o.L.proxyClientCertFile.value}"
          proxy-client-key-file: "${o.L.proxyClientKeyFile.value}"
          requestheader-allowed-names: "${o.L.requestheaderAllowedNames.value}"
          requestheader-client-ca-file: "${o.L.requestheaderClientCAFile.value}"
          requestheader-extra-headers-prefix: "${o.L.requestheaderExtraHeadersPrefix.value}"
          requestheader-group-headers: "${o.L.requestheaderGroupHeaders.value}"
          requestheader-username-headers: "${o.L.requestheaderUsernameHeaders.value}"
          secure-port: "${o.L.securePort.value}"
          service-account-issuer: "${o.L.serviceAccountIssuer.value}"
          service-account-key-file: "${o.L.serviceAccountKeyFile.value}"
          service-account-signing-key-file: "${o.L.serviceAccountSigningKeyFile.value}"
          service-cluster-ip-range: "${o.L.serviceClusterIPRange.value}"
          tls-cert-file: "${o.L.tlsCertFile.value}"
          tls-private-key-file: "${o.L.tlsPrivateKeyFile.value}"
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
    `}},T={},p=void 0,P={},C=[];function k(e){const t={admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,n.jsx)(s.A,{language:"bash",children:l.A`
      export KUBELET_SERVER_PORT=${u.h.kubeletServer.portNumber}
      export KUBELET_READ_ONLY_PORT=${u.h.kubeletReadOnlyPort.portNumber}
      export KUBE_APISERVER_PORT=${u.h.kubeAPIServer.portNumber}
      export ETCD_SERVER_PORT=${u.h.etcdServer.portNumber}
      export KUBELET_HEALTHZ_PORT=${u.h.kubeletHealthz.portNumber}
    `}),(0,n.jsx)(s.A,{language:"bash",children:l.A`
      export BASE_K8S_PATH="${_.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${_.M.kuberneteKubeletFolderPath.value}"
      export SERVICE_DNS="${_.M.kubernetesDNSAddress.value}"
      export SERVICE_CIDR="${_.M.kubernetesServiceCIDR.value}"
      export MACHINE_LOCAL_ADDRESS=${_.M.virtualMachineLocalAddress.value}
      export BASE_DOCKER_REGISTRY="${_.M.baseDockerRegistry.value}"
      export CLUSTER_NAME="${_.M.clusterName.value}"
      export BASE_DOMAIN="${_.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${_.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${_.M.virtualMachineFullName.value}"
      export KUBERNETES_VERSION="${E.M.kubernetes.value}"
      export ETCD_SERVERS="https://127.0.0.1:$\{ETCD_SERVER_PORT}"
    `}),(0,n.jsx)(s.A,{language:"bash",children:l.A`
      export KUBELET_CURRENT_SERVER_CRT_PATH="${A.$.kubeletCurrentServer.crtPath}"
      export KUBERNETES_CA_KEY_PATH="${A.$.kubernetesCA.keyPath}"
      export KUBERNETES_CA_CRT_PATH="${A.$.kubernetesCA.crtPath}"
      export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${A.$.kubernetesSA.keyPath}"
      export KUBERNETES_SERVICE_ACCOUNT_CRT_PATH="${A.$.kubernetesSA.crtPath}"
      export KUBERNETES_SERVER_KEY_PATH="${A.$.kubernetesServer.keyPath}"
      export KUBERNETES_SERVER_CRT_PATH="${A.$.kubernetesServer.crtPath}"
      export KUBERNETES_KUBELET_CLIENT_KEY_PATH="${A.$.kubernetesKubeletClient.keyPath}"
      export KUBERNETES_KUBELET_CLIENT_CRT_PATH="${A.$.kubernetesKubeletClient.crtPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH="${A.$.kubernetesFrontProxyClient.keyPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH="${A.$.kubernetesFrontProxyClient.crtPath}"
      export KUBERNETES_FRONT_PROXY_CLIENT_CN="${A.$.kubernetesFrontProxyClient.cname}"
      export KUBERNETES_ETCD_CLIENT_KEY_PATH="${A.$.kubernetesEtcdClient.keyPath}"
      export KUBERNETES_ETCD_CLIENT_CRT_PATH="${A.$.kubernetesEtcdClient.crtPath}"
      export FRONT_PROXY_CA_CRT_PATH="${A.$.frontProxyCA.crtPath}"
      export ETCD_SERVER_KEY_PATH="${A.$.etcdServer.keyPath}"
      export ETCD_SERVER_CRT_PATH="${A.$.etcdServer.crtPath}"
      export ETCD_PEER_KEY_PATH="${A.$.etcdPeer.keyPath}"
      export ETCD_PEER_CRT_PATH="${A.$.etcdPeer.crtPath}"
      export ETCD_CA_CRT_PATH="${A.$.etcdCA.crtPath}"
    `}),(0,n.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,n.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,n.jsx)(s.A,{children:`cat <<EOF > \${BASE_K8S_PATH}/kubeadm.conf\n${d.data.value}\n---\n${S.D.data.value}\nEOF`})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},25292:(e,t,r)=>{r.d(t,{L:()=>a});const a={clientCAFile:{value:"${KUBERNETES_CA_CRT_PATH}"},tlsCertFile:{value:"${KUBERNETES_SERVER_CRT_PATH}"},tlsPrivateKeyFile:{value:"${KUBERNETES_SERVER_KEY_PATH}"},etcdCAFile:{value:"${ETCD_CA_CRT_PATH}"},etcdCertfile:{value:"${KUBERNETES_ETCD_CLIENT_CRT_PATH}"},etcdKeyfile:{value:"${KUBERNETES_ETCD_CLIENT_KEY_PATH}"},etcdServers:{value:"${ETCD_SERVERS}"},kubeletClientCertificate:{value:"${KUBERNETES_KUBELET_CLIENT_CRT_PATH}"},kubeletClientKey:{value:"${KUBERNETES_KUBELET_CLIENT_KEY_PATH}"},kubeletServerPort:{value:"${KUBELET_SERVER_PORT}"},kubeletReadOnlyPort:{value:"${KUBELET_READ_ONLY_PORT}"},proxyClientCertFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}"},proxyClientKeyFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}"},requestheaderAllowedNames:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CN}"},requestheaderClientCAFile:{value:"${FRONT_PROXY_CA_CRT_PATH}"},serviceAccountIssuer:{value:"https://kubernetes.default.svc.${CLUSTER_DOMAIN}"},serviceAccountKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}"},serviceAccountSigningKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"},serviceClusterIPRange:{value:"${SERVICE_CIDR}"},advertiseAddress:{value:"${MACHINE_LOCAL_ADDRESS}"},securePort:{value:"${KUBE_APISERVER_PORT}"},anonymousAuth:{value:"true"},authorizationMode:{value:"Node,RBAC"},allowPrivileged:{value:"true"},enableAdmissionPlugins:{value:'"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"'},enableBootstrapTokenAuth:{value:"true"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"}}},28702:(e,t,r)=>{r.d(t,{D:()=>a});const a={data:{value:r(53828).A`
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
    `}}},31798:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},63770:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}}}]);