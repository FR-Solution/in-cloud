"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5618],{6353:(e,t,r)=>{r.d(t,{$:()=>l});var a=r(7478);const l={etcdCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>a});const a={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,r)=>{r.d(t,{D:()=>n});var a=r(6353),l=r(31798);const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${a.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${a.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${a.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${a.$.etcdServer.crtPath}`},keyFile:{value:`${a.$.etcdServer.keyPath}`},trustedCAFile:{value:`${a.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${PORTS.etcdPeer.portNumber}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},31798:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},63770:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},69423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>v,default:()=>m,frontMatter:()=>h,metadata:()=>a,toc:()=>P});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=r(74848),n=r(28453),s=r(7478),c=r(6353),u=r(31798),o=r(63770),i=r(10119),d=r(60513),k=r(1775);const h={},v=void 0,p={},P=[];function b(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,l.jsx)(k.A,{language:"bash",children:d.A`
      export ETCD_METRICS_PORT=${u.h.etcdMetricServer.portNumber}
      export ETCD_PEER_PORT=${u.h.etcdPeer.portNumber}
      export ETCD_SERVER_PORT=${u.h.etcdServer.portNumber}
  `}),"\n",(0,l.jsx)(k.A,{language:"bash",children:d.A`
      export BASE_K8S_PATH="${s.M.kuberneteBaseFolderPath.value}"
      export MACHINE_LOCAL_ADDRESS=${s.M.virtualMachineLocalAddress.value}
      export FULL_HOST_NAME="${s.M.virtualMachineFullName.value}"
      export BASE_DOCKER_REGISTRY="${s.M.baseDockerRegistry.value}"
      export ETCD_VERSION="${o.M.etcd.value}"
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=https://$\{MACHINE_LOCAL_ADDRESS}:$\{ETCD_PEER_PORT}"
  `}),"\n",(0,l.jsx)(k.A,{language:"bash",children:d.A`
      export ETCD_SERVER_KEY_PATH="${c.$.etcdServer.keyPath}"
      export ETCD_SERVER_CRT_PATH="${c.$.etcdServer.crtPath}"
      export ETCD_PEER_KEY_PATH="${c.$.etcdPeer.keyPath}"
      export ETCD_PEER_CRT_PATH="${c.$.etcdPeer.crtPath}"
      export ETCD_CA_CRT_PATH="${c.$.etcdCA.crtPath}"
  `}),"\n",(0,l.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,l.jsx)(k.A,{language:"bash",children:d.A`
      mkdir -p ${s.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,l.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,l.jsx)(k.A,{language:"bash",children:d.A`
  cat <<EOF > ${s.M.kuberneteBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:$\{ETCD_SERVER_PORT}
    creationTimestamp: null
    labels:
      component: etcd
      tier: control-plane
    name: etcd
    namespace: kube-system
  spec:
    containers:
    - command:
      - etcd
      - --advertise-client-urls=${i.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${i.D.autoCompactionRetention.value}
      - --cert-file=${i.D.certFile.value}
      - --client-cert-auth=${i.D.clientCertAuth.value}
      - --data-dir=${i.D.dataDir.value}
      - --election-timeout=${i.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${i.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${i.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${i.D.initialCluster.value}
      - --key-file=${i.D.keyFile.value}
      - --listen-client-urls=${i.D.listenClientUrls.value}
      - --listen-metrics-urls=${i.D.listenMetricsUrls.value}
      - --listen-peer-urls=${i.D.listenPeerUrls.value}
      - --logger=${i.D.logger.value}
      - --max-snapshots=${i.D.maxSnapshots.value}
      - --max-wals=${i.D.maxWals.value}
      - --metrics=${i.D.metrics.value}
      - --name=${i.D.name.value}
      - --peer-cert-file=${i.D.peerCertFile.value}
      - --peer-client-cert-auth=${i.D.peerClientCertAuth.value}
      - --peer-key-file=${i.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${i.D.peerTrustedCAFile.value}
      - --snapshot-count=10000
      - --trusted-ca-file=${i.D.trustedCAFile.value}
      image: $\{BASE_DOCKER_REGISTRY}/etcd:$\{ETCD_VERSION}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: $\{ETCD_METRICS_PORT}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: etcd
      resources:
        requests:
          cpu: 100m
          memory: 100Mi
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: 127.0.0.1
          path: /health?serializable=false
          port: $\{ETCD_METRICS_PORT}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${s.M.kuberneteBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${s.M.kuberneteBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b()}}}]);