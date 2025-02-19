"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1507,3492,5618,5854,6658,6733,8034],{6353:(e,t,r)=>{r.d(t,{$:()=>n});const n={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,r)=>{r.d(t,{D:()=>n});const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:"${ETCD_PEER_CRT_PATH}"},peerKeyFile:{value:"${ETCD_PEER_KEY_PATH}"},peerTrustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},peerClientCertAuth:{value:"true"},certFile:{value:"${ETCD_SERVER_CRT_PATH}"},keyFile:{value:"${ETCD_SERVER_KEY_PATH}"},trustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},listenClientUrls:{value:"https://127.0.0.1:${ETCD_SERVER_PORT},https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},listenPeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},listenMetricsUrls:{value:"http://127.0.0.1:${ETCD_METRICS_PORT}"},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"}}},25292:(e,t,r)=>{r.d(t,{L:()=>n});const n={clientCAFile:{value:"${KUBERNETES_CA_CRT_PATH}"},tlsCertFile:{value:"${KUBERNETES_SERVER_CRT_PATH}"},tlsPrivateKeyFile:{value:"${KUBERNETES_SERVER_KEY_PATH}"},etcdCAFile:{value:"${ETCD_CA_CRT_PATH}"},etcdCertfile:{value:"${KUBERNETES_ETCD_CLIENT_CRT_PATH}"},etcdKeyfile:{value:"${KUBERNETES_ETCD_CLIENT_KEY_PATH}"},etcdServers:{value:"${ETCD_SERVERS}"},kubeletClientCertificate:{value:"${KUBERNETES_KUBELET_CLIENT_CRT_PATH}"},kubeletClientKey:{value:"${KUBERNETES_KUBELET_CLIENT_KEY_PATH}"},kubeletServerPort:{value:"${KUBELET_SERVER_PORT}"},kubeletReadOnlyPort:{value:"${KUBELET_READ_ONLY_PORT}"},proxyClientCertFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}"},proxyClientKeyFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}"},requestheaderAllowedNames:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CN}"},requestheaderClientCAFile:{value:"${FRONT_PROXY_CA_CRT_PATH}"},serviceAccountIssuer:{value:"https://kubernetes.default.svc.${CLUSTER_DOMAIN}"},serviceAccountKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}"},serviceAccountSigningKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"},serviceClusterIPRange:{value:"${SERVICE_CIDR}"},advertiseAddress:{value:"${MACHINE_LOCAL_ADDRESS}"},securePort:{value:"${KUBE_APISERVER_PORT}"},anonymousAuth:{value:"true"},authorizationMode:{value:"Node,RBAC"},allowPrivileged:{value:"true"},enableAdmissionPlugins:{value:"NodeRestriction"},enableBootstrapTokenAuth:{value:"true"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"}}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},35825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>n,toc:()=>E});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),l=r(31798),o=r(63770),i=r(1775),u=r(53828);const d={},h=void 0,p={},E=[];function _(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(i.A,{language:"bash",children:u.A`
    export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
    export KUBERNETES_VERSION="${o.M.kubernetes.value}"
    export KUBE_SCHEDULER_PORT=${l.h.kubeScheduler.portNumber}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(i.A,{language:"bash",children:u.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cat <<EOF > ${BASE_K8S_PATH}/manifests/kube-scheduler.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: null\n  labels:\n    component: kube-scheduler\n    tier: control-plane\n  name: kube-scheduler\n  namespace: kube-system\nspec:\n  containers:\n  - command:\n    - kube-scheduler\n    - --authentication-kubeconfig=${BASE_K8S_PATH}/scheduler.conf\n    - --authorization-kubeconfig=${BASE_K8S_PATH}/scheduler.conf\n    - --bind-address=0.0.0.0\n    - --kubeconfig=${BASE_K8S_PATH}/scheduler.conf\n    - --leader-elect=true\n    image: registry.k8s.io/kube-scheduler:${KUBERNETES_VERSION}\n    imagePullPolicy: IfNotPresent\n    livenessProbe:\n      failureThreshold: 8\n      httpGet:\n        path: /healthz\n        port: ${KUBE_SCHEDULER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    name: kube-scheduler\n    resources:\n      requests:\n        cpu: 100m\n    startupProbe:\n      failureThreshold: 24\n      httpGet:\n        path: /healthz\n        port: ${KUBE_SCHEDULER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    volumeMounts:\n    - mountPath: ${BASE_K8S_PATH}/scheduler.conf\n      name: kubeconfig\n      readOnly: true\n  hostNetwork: true\n  priority: 2000001000\n  priorityClassName: system-node-critical\n  securityContext:\n    seccompProfile:\n      type: RuntimeDefault\n  volumes:\n  - hostPath:\n      path: ${BASE_K8S_PATH}/scheduler.conf\n      type: FileOrCreate\n    name: kubeconfig\nstatus: {}\nEOF\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},51792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/joinStaticPod","title":"joinStaticPod","description":"Kube API,Scheduler,Controller","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/joinStaticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/joinStaticPod","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/kubeadm/joinStaticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453);const c={},l=void 0,o={},i=[{value:"Kube API,Scheduler,Controller",id:"kube-apischedulercontroller",level:4},{value:"\u0417\u0430\u043f\u0443\u0441\u043a Kubelet",id:"\u0437\u0430\u043f\u0443\u0441\u043a-kubelet",level:4},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 ETCD",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-\u0443\u0437\u043b\u0430-\u0432-\u043a\u043b\u0430\u0441\u0442\u0435\u0440-etcd",level:4}];function u(e){const t={admonition:"admonition",code:"code",h4:"h4",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h4,{id:"kube-apischedulercontroller",children:"Kube API,Scheduler,Controller"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubeadm join phase control-plane-prepare control-plane \\\n    --config=${BASE_K8S_PATH}/kubeadm.conf\n"})}),"\n",(0,a.jsx)(t.h4,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-kubelet",children:"\u0417\u0430\u043f\u0443\u0441\u043a Kubelet"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubeadm join phase kubelet-start \\\n    --config=${BASE_K8S_PATH}/kubeadm.conf\n"})}),"\n",(0,a.jsx)(t.h4,{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-\u0443\u0437\u043b\u0430-\u0432-\u043a\u043b\u0430\u0441\u0442\u0435\u0440-etcd",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 ETCD"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubeadm join phase control-plane-join etcd \\\n    --config=${BASE_K8S_PATH}/kubeadm.conf\n"})}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'#### Kube API,Scheduler,Controller\n[control-plane] Using manifest folder "/etc/kubernetes/manifests"\n[control-plane] Creating static Pod manifest for "kube-apiserver"\n[control-plane] Creating static Pod manifest for "kube-controller-manager"\n[control-plane] Creating static Pod manifest for "kube-scheduler"\n'})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'#### \u0417\u0430\u043f\u0443\u0441\u043a Kubelet\n[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"\n[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"\n[kubelet-start] Starting the kubelet\n[kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s\n[kubelet-check] The kubelet is healthy after 501.740644ms\n[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap\n'})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'#### \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 ETCD\n[etcd] Announced new etcd member joining to the existing etcd cluster\n[etcd] Creating static Pod manifest for "etcd"\n'})})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},51877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/initStaticPod","title":"initStaticPod","description":"ETCD","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/initStaticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/initStaticPod","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/kubeadm/initStaticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453);const c={},l=void 0,o={},i=[{value:"ETCD",id:"etcd",level:4},{value:"Kube API",id:"kube-api",level:4},{value:"Kube Controller Manager",id:"kube-controller-manager",level:4}];function u(e){const t={admonition:"admonition",code:"code",h4:"h4",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h4,{id:"etcd",children:"ETCD"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubeadm init phase  etcd local \\\n    --config=${BASE_K8S_PATH}/kubeadm.conf\n"})}),"\n",(0,a.jsx)(t.h4,{id:"kube-api",children:"Kube API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubeadm init phase  control-plane apiserver \\\n    --config=${BASE_K8S_PATH}/kubeadm.conf\n"})}),"\n",(0,a.jsx)(t.h4,{id:"kube-controller-manager",children:"Kube Controller Manager"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubeadm init phase  control-plane controller-manager \\\n    --config=${BASE_K8S_PATH}/kubeadm.conf\n"})}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'#### ETCD\n[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"\n'})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'#### Kube API\n[control-plane] Creating static Pod manifest for "apiserver"\n'})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'#### Kube Controller Manager\n[control-plane] Creating static Pod manifest for "kube-controller-manager"\n'})})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},62774:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),a=r(34164),s=r(65627),c=r(56347),l=r(50372),o=r(30604),i=r(11861),u=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function E(e){let{queryString:t=!1,groupId:r}=e;const a=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function _(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[c,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=E({queryString:r,groupId:a}),[_,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),A=(()=>{const e=i??_;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{A&&o(A)}),[A]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var P=r(74848);function S(e){let{className:t,block:r,selectedValue:n,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(i(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,P.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,P.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:s}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,P.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=_(e);return(0,P.jsxs)("div",{className:(0,a.A)("tabs-container",A.tabList),children:[(0,P.jsx)(S,{...t,...e}),(0,P.jsx)(k,{...t,...e})]})}function T(e){const t=(0,m.A)();return(0,P.jsx)(b,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},66686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>m,default:()=>k,frontMatter:()=>_,metadata:()=>n,toc:()=>P});const n=JSON.parse('{"id":"tech-docs/kubernetes/staticPods","title":"staticPods","description":"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u043e\u0434\u044b \u0432 Kubernetes \u2014 \u044d\u0442\u043e \u043e\u0441\u043e\u0431\u044b\u0439 \u0432\u0438\u0434 \u043f\u043e\u0434\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0434\u0435\u043c\u043e\u043d\u043e\u043c kubelet \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0443\u0437\u043b\u0435, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 Kubernetes. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0434, \u0432\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0435 \u0444\u0430\u0439\u043b-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 \u0443\u0437\u043b\u0435 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u043e {CUSTOM_VALUE.kuberneteBaseFolderPath.value}). Kubelet \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u043e\u0434\u044b \u043f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u044d\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0430\u0445.","source":"@site/docs/tech-docs/kubernetes/staticPods.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/staticPods","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/staticPods","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(87464),l=r(62774),o=r(69423),i=r(85631),u=r(35825),d=r(79988),h=r(7478),p=r(51877),E=r(51792);const _={},m=void 0,A={},P=[...o.toc,...d.toc,...i.toc,...u.toc,...p.toc,...d.toc,...i.toc,...u.toc,...E.toc,...d.toc,...i.toc,...u.toc,...E.toc];function S(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u043e\u0434\u044b \u0432 Kubernetes \u2014 \u044d\u0442\u043e \u043e\u0441\u043e\u0431\u044b\u0439 \u0432\u0438\u0434 \u043f\u043e\u0434\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0434\u0435\u043c\u043e\u043d\u043e\u043c kubelet \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0443\u0437\u043b\u0435, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 Kubernetes. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0434, \u0432\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0435 \u0444\u0430\u0439\u043b-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 \u0443\u0437\u043b\u0435 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u043e ",(0,a.jsx)(t.strong,{children:h.M.kuberneteBaseFolderPath.value}),"). Kubelet \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u043e\u0434\u044b \u043f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u044d\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0430\u0445."]}),"\n"]}),"\n",(0,a.jsxs)(l.A,{groupId:"current-master",children:[(0,a.jsx)(c.A,{value:"master-1",children:(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsxs)(c.A,{value:"HardWay",children:[(0,a.jsx)(o.default,{}),(0,a.jsx)(d.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)(c.A,{value:"Kubeadm",children:(0,a.jsx)(p.default,{})})]})}),(0,a.jsx)(c.A,{value:"master-2",children:(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsxs)(c.A,{value:"HardWay",children:[(0,a.jsx)(d.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)(c.A,{value:"Kubeadm",children:(0,a.jsx)(E.default,{})})]})}),(0,a.jsx)(c.A,{value:"master-3",children:(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsxs)(c.A,{value:"HardWay",children:[(0,a.jsx)(d.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)(c.A,{value:"Kubeadm",children:(0,a.jsx)(E.default,{})})]})})]})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(S,{...e})}):S(e)}},69423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>E,default:()=>P,frontMatter:()=>p,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPod","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/etcd/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),l=r(6353),o=r(31798),i=r(63770),u=r(10119),d=r(53828),h=r(1775);const p={},E=void 0,_={},m=[];function A(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(h.A,{language:"bash",children:d.A`
      export ETCD_METRICS_PORT=${o.h.etcdMetricServer.portNumber}
      export ETCD_PEER_PORT=${o.h.etcdPeer.portNumber}
      export ETCD_SERVER_PORT=${o.h.etcdServer.portNumber}
  `}),"\n",(0,a.jsx)(h.A,{language:"bash",children:d.A`
      export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
      export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
      export BASE_DOCKER_REGISTRY="${c.M.baseDockerRegistry.value}"
      export ETCD_VERSION="${i.M.etcd.value}"
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=https://$\{MACHINE_LOCAL_ADDRESS}:$\{ETCD_PEER_PORT}"
  `}),"\n",(0,a.jsx)(h.A,{language:"bash",children:d.A`
      export ETCD_SERVER_KEY_PATH="${l.$.etcdServer.keyPath}"
      export ETCD_SERVER_CRT_PATH="${l.$.etcdServer.crtPath}"
      export ETCD_PEER_KEY_PATH="${l.$.etcdPeer.keyPath}"
      export ETCD_PEER_CRT_PATH="${l.$.etcdPeer.crtPath}"
      export ETCD_CA_CRT_PATH="${l.$.etcdCA.crtPath}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(h.A,{language:"bash",children:d.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(h.A,{language:"bash",children:d.A`
  cat <<EOF > $\{BASE_K8S_PATH}/manifests/etcd.yaml
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
      - --advertise-client-urls=${u.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${u.D.autoCompactionRetention.value}
      - --cert-file=${u.D.certFile.value}
      - --client-cert-auth=${u.D.clientCertAuth.value}
      - --data-dir=${u.D.dataDir.value}
      - --election-timeout=${u.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${u.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${u.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${u.D.initialCluster.value}
      - --key-file=${u.D.keyFile.value}
      - --listen-client-urls=${u.D.listenClientUrls.value}
      - --listen-metrics-urls=${u.D.listenMetricsUrls.value}
      - --listen-peer-urls=${u.D.listenPeerUrls.value}
      - --logger=${u.D.logger.value}
      - --max-snapshots=${u.D.maxSnapshots.value}
      - --max-wals=${u.D.maxWals.value}
      - --metrics=${u.D.metrics.value}
      - --name=${u.D.name.value}
      - --peer-cert-file=${u.D.peerCertFile.value}
      - --peer-client-cert-auth=${u.D.peerClientCertAuth.value}
      - --peer-key-file=${u.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${u.D.peerTrustedCAFile.value}
      - --snapshot-count=10000
      - --trusted-ca-file=${u.D.trustedCAFile.value}
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
      - mountPath: $\{BASE_K8S_PATH}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: $\{BASE_K8S_PATH}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})}function P(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(A,{...e})}):A()}},79988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>E,default:()=>P,frontMatter:()=>p,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),l=r(6353),o=r(31798),i=r(63770),u=r(25292),d=r(1775),h=r(53828);const p={},E=void 0,_={},m=[];function A(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:h.A`
    export KUBELET_SERVER_PORT=${o.h.kubeletServer.portNumber}
    export KUBELET_READ_ONLY_PORT=${o.h.kubeletReadOnlyPort.portNumber}
    export KUBE_APISERVER_PORT=${o.h.kubeAPIServer.portNumber}
    export ETCD_SERVER_PORT=${o.h.etcdServer.portNumber}
    export ETCD_SERVERS="https://127.0.0.1:$\{ETCD_SERVER_PORT}"
    export SERVICE_CIDR="${c.M.kubernetesServiceCIDR.value}"
    export MACHINE_LOCAL_ADDRESS="${c.M.virtualMachineLocalAddress.value}"
  `}),"\n",(0,a.jsx)(d.A,{language:"bash",children:h.A`
    export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
    export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
    export CLUSTER_NAME="${c.M.clusterName.value}"
    export KUBERNETES_VERSION="${i.M.kubernetes.value}"
    export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
    export BASE_DOCKER_REGISTRY="${c.M.baseDockerRegistry.value}"
  `}),"\n",(0,a.jsx)(d.A,{language:"bash",children:h.A`
    export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${l.$.kubernetesSA.keyPath}"
    export KUBERNETES_SERVICE_ACCOUNT_CRT_PATH="${l.$.kubernetesSA.crtPath}"
    export KUBERNETES_SERVER_KEY_PATH="${l.$.kubernetesServer.keyPath}"
    export KUBERNETES_SERVER_CRT_PATH="${l.$.kubernetesServer.crtPath}"
    export KUBERNETES_KUBELET_CLIENT_KEY_PATH="${l.$.kubernetesKubeletClient.keyPath}"
    export KUBERNETES_KUBELET_CLIENT_CRT_PATH="${l.$.kubernetesKubeletClient.crtPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH="${l.$.kubernetesFrontProxyClient.keyPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH="${l.$.kubernetesFrontProxyClient.crtPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_CN="${l.$.kubernetesFrontProxyClient.cname}"
    export KUBERNETES_ETCD_CLIENT_KEY_PATH="${l.$.kubernetesEtcdClient.keyPath}"
    export KUBERNETES_ETCD_CLIENT_CRT_PATH="${l.$.kubernetesEtcdClient.crtPath}"
    export KUBERNETES_CA_CRT_PATH="${l.$.kubernetesCA.crtPath}"
    export FRONT_PROXY_CA_CRT_PATH="${l.$.frontProxyCA.crtPath}"
    export ETCD_CA_CRT_PATH="${l.$.etcdCA.crtPath}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:h.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:h.A`cat <<EOF > $\{BASE_K8S_PATH}/manifests/kube-apiserver.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:$\{KUBE_APISERVER_PORT}
    creationTimestamp: null
    labels:
      component: kube-apiserver
      tier: control-plane
    name: kube-apiserver
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-apiserver
      - --advertise-address=${u.L.advertiseAddress.value}
      - --allow-privileged=${u.L.allowPrivileged.value}
      - --anonymous-auth=${u.L.anonymousAuth.value}
      - --authorization-mode=${u.L.authorizationMode.value}
      - --client-ca-file=${u.L.clientCAFile.value}
      - --enable-admission-plugins=${u.L.enableAdmissionPlugins.value}
      - --enable-bootstrap-token-auth=${u.L.enableBootstrapTokenAuth.value}
      - --etcd-cafile=${u.L.etcdCAFile.value}
      - --etcd-certfile=${u.L.etcdCertfile.value}
      - --etcd-keyfile=${u.L.etcdKeyfile.value}
      - --etcd-servers=${u.L.etcdServers.value}
      - --kubelet-client-certificate=${u.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${u.L.kubeletClientKey.value}
      - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
      - --proxy-client-cert-file=${u.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${u.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${u.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${u.L.requestheaderClientCAFile.value}
      - --requestheader-extra-headers-prefix=${u.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${u.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${u.L.requestheaderUsernameHeaders.value}
      - --secure-port=${u.L.securePort.value}
      - --service-account-issuer=${u.L.serviceAccountIssuer.value}
      - --service-account-key-file=${u.L.serviceAccountKeyFile.value}
      - --service-account-signing-key-file=${u.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${u.L.serviceClusterIPRange.value}
      - --tls-cert-file=${u.L.tlsCertFile.value}
      - --tls-private-key-file=${u.L.tlsPrivateKeyFile.value}
      image: $\{BASE_DOCKER_REGISTRY}/kube-apiserver:$\{KUBERNETES_VERSION}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: $\{KUBE_APISERVER_PORT}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-apiserver
      readinessProbe:
        failureThreshold: 3
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /readyz
          port: $\{KUBE_APISERVER_PORT}
          scheme: HTTPS
        periodSeconds: 1
        timeoutSeconds: 15
      resources:
        requests:
          cpu: 250m
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: $\{KUBE_APISERVER_PORT}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /var/log/kubernetes/audit/
        name: k8s-audit
      - mountPath: $\{BASE_K8S_PATH}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /var/log/kubernetes/audit/
        type: DirectoryOrCreate
      name: k8s-audit
    - hostPath:
        path: $\{BASE_K8S_PATH}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
EOF
`})]})}function P(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(A,{...e})}):A()}},85631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>p,default:()=>A,frontMatter:()=>h,metadata:()=>n,toc:()=>_});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),l=r(6353),o=r(31798),i=r(63770),u=r(53828),d=r(1775);const h={},p=void 0,E={},_=[];function m(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
    export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
    export CLUSTER_NAME="${c.M.clusterName.value}"
    export KUBERNETES_VERSION="${i.M.kubernetes.value}"
    export KUBE_CONTROLLER_MANAGER_PORT=${o.h.kubeControllerManager.portNumber}
  `}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
    export KUBERNETES_CA_CRT_PATH="${l.$.kubernetesCA.crtPath}"
    export KUBERNETES_CA_KEY_PATH="${l.$.kubernetesCA.keyPath}"
    export FRONT_PROXY_CA_CRT_PATH="${l.$.frontProxyCA.crtPath}"
    export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${l.$.kubernetesSA.keyPath}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cat <<EOF > ${BASE_K8S_PATH}/manifests/kube-controller-manager.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: null\n  labels:\n    component: kube-controller-manager\n    tier: control-plane\n  name: kube-controller-manager\n  namespace: kube-system\nspec:\n  containers:\n  - command:\n    - kube-controller-manager\n    - --authentication-kubeconfig=${BASE_K8S_PATH}/controller-manager.conf\n    - --authorization-always-allow-paths=/healthz,/readyz,/livez,/metrics\n    - --authorization-kubeconfig=${BASE_K8S_PATH}/controller-manager.conf\n    - --bind-address=0.0.0.0\n    - --client-ca-file=${KUBERNETES_CA_CRT_PATH}\n    - --cluster-name=${CLUSTER_NAME}\n    - --cluster-signing-cert-file=${KUBERNETES_CA_CRT_PATH}\n    - --cluster-signing-duration=720h\n    - --cluster-signing-key-file=${KUBERNETES_CA_KEY_PATH}\n    - --concurrent-replicaset-syncs=20\n    - --controllers=*,bootstrapsigner,tokencleaner\n    - --feature-gates=RotateKubeletServerCertificate=true\n    - --kube-api-burst=120\n    - --kube-api-qps=100\n    - --kubeconfig=${BASE_K8S_PATH}/controller-manager.conf\n    - --leader-elect=true\n    - --namespace-sync-period=2m0s\n    - --node-startup-grace-period=10s\n    - --requestheader-client-ca-file=${FRONT_PROXY_CA_CRT_PATH}\n    - --root-ca-file=${KUBERNETES_CA_CRT_PATH}\n    - --service-account-private-key-file=${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}\n    - --terminated-pod-gc-threshold=12500\n    - --use-service-account-credentials=true\n    - --v=2\n    image: registry.k8s.io/kube-controller-manager:${KUBERNETES_VERSION}\n    imagePullPolicy: IfNotPresent\n    livenessProbe:\n      failureThreshold: 8\n      httpGet:\n        path: /healthz\n        port: ${KUBE_CONTROLLER_MANAGER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    name: kube-controller-manager\n    resources:\n      requests:\n        cpu: 200m\n    startupProbe:\n      failureThreshold: 24\n      httpGet:\n        path: /healthz\n        port: ${KUBE_CONTROLLER_MANAGER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    volumeMounts:\n    - mountPath: /etc/ssl/certs\n      name: ca-certs\n      readOnly: true\n    - mountPath: /etc/ca-certificates\n      name: etc-ca-certificates\n      readOnly: true\n    - mountPath: /etc/pki\n      name: etc-pki\n      readOnly: true\n    - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec\n      name: flexvolume-dir\n    - mountPath: ${BASE_K8S_PATH}/pki\n      name: k8s-certs\n      readOnly: true\n    - mountPath: ${BASE_K8S_PATH}/controller-manager.conf\n      name: kubeconfig\n      readOnly: true\n    - mountPath: /usr/local/share/ca-certificates\n      name: usr-local-share-ca-certificates\n      readOnly: true\n    - mountPath: /usr/share/ca-certificates\n      name: usr-share-ca-certificates\n      readOnly: true\n  hostNetwork: true\n  priority: 2000001000\n  priorityClassName: system-node-critical\n  securityContext:\n    seccompProfile:\n      type: RuntimeDefault\n  volumes:\n  - hostPath:\n      path: /etc/ssl/certs\n      type: DirectoryOrCreate\n    name: ca-certs\n  - hostPath:\n      path: /etc/ca-certificates\n      type: DirectoryOrCreate\n    name: etc-ca-certificates\n  - hostPath:\n      path: /etc/pki\n      type: DirectoryOrCreate\n    name: etc-pki\n  - hostPath:\n      path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec\n      type: DirectoryOrCreate\n    name: flexvolume-dir\n  - hostPath:\n      path: ${BASE_K8S_PATH}/pki\n      type: DirectoryOrCreate\n    name: k8s-certs\n  - hostPath:\n      path: ${BASE_K8S_PATH}/controller-manager.conf\n      type: FileOrCreate\n    name: kubeconfig\n  - hostPath:\n      path: /usr/local/share/ca-certificates\n      type: DirectoryOrCreate\n    name: usr-local-share-ca-certificates\n  - hostPath:\n      path: /usr/share/ca-certificates\n      type: DirectoryOrCreate\n    name: usr-share-ca-certificates\nstatus: {}\nEOF\n"})})]})}function A(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},87464:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function c(e){let{children:t,hidden:r,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,c),hidden:r,children:t})}}}]);