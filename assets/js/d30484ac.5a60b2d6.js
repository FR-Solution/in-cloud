"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1507,2568,5334,6658,8034],{6353:(e,t,r)=>{r.d(t,{$:()=>n});const n={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},25292:(e,t,r)=>{r.d(t,{L:()=>n});const n={clientCAFile:{value:"${KUBERNETES_CA_CRT_PATH}"},tlsCertFile:{value:"${KUBERNETES_SERVER_CRT_PATH}"},tlsPrivateKeyFile:{value:"${KUBERNETES_SERVER_KEY_PATH}"},etcdCAFile:{value:"${ETCD_CA_CRT_PATH}"},etcdCertfile:{value:"${KUBERNETES_ETCD_CLIENT_CRT_PATH}"},etcdKeyfile:{value:"${KUBERNETES_ETCD_CLIENT_KEY_PATH}"},etcdServers:{value:"${ETCD_SERVERS}"},kubeletClientCertificate:{value:"${KUBERNETES_KUBELET_CLIENT_CRT_PATH}"},kubeletClientKey:{value:"${KUBERNETES_KUBELET_CLIENT_KEY_PATH}"},kubeletServerPort:{value:"${KUBELET_SERVER_PORT}"},kubeletReadOnlyPort:{value:"${KUBELET_READ_ONLY_PORT}"},proxyClientCertFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}"},proxyClientKeyFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}"},requestheaderAllowedNames:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CN}"},requestheaderClientCAFile:{value:"${FRONT_PROXY_CA_CRT_PATH}"},serviceAccountIssuer:{value:"https://kubernetes.default.svc.${CLUSTER_DOMAIN}"},serviceAccountKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}"},serviceAccountSigningKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"},serviceClusterIPRange:{value:"${SERVICE_CIDR}"},advertiseAddress:{value:"${MACHINE_LOCAL_ADDRESS}"},securePort:{value:"${KUBE_APISERVER_PORT}"},anonymousAuth:{value:"true"},authorizationMode:{value:"Node,RBAC"},allowPrivileged:{value:"true"},enableAdmissionPlugins:{value:"NodeRestriction"},enableBootstrapTokenAuth:{value:"true"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"}}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},35825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>P,frontMatter:()=>d,metadata:()=>n,toc:()=>E});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),o=r(31798),l=r(63770),i=r(1775),u=r(53828);const d={},h=void 0,p={},E=[];function _(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(i.A,{language:"bash",children:u.A`
    export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
    export KUBERNETES_VERSION="${l.M.kubernetes.value}"
    export KUBE_SCHEDULER_PORT=${o.h.kubeScheduler.portNumber}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(i.A,{language:"bash",children:u.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cat <<EOF > ${BASE_K8S_PATH}/manifests/kube-scheduler.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: null\n  labels:\n    component: kube-scheduler\n    tier: control-plane\n  name: kube-scheduler\n  namespace: kube-system\nspec:\n  containers:\n  - command:\n    - kube-scheduler\n    - --authentication-kubeconfig=${BASE_K8S_PATH}/scheduler.conf\n    - --authorization-kubeconfig=${BASE_K8S_PATH}/scheduler.conf\n    - --bind-address=0.0.0.0\n    - --kubeconfig=${BASE_K8S_PATH}/scheduler.conf\n    - --leader-elect=true\n    image: registry.k8s.io/kube-scheduler:${KUBERNETES_VERSION}\n    imagePullPolicy: IfNotPresent\n    livenessProbe:\n      failureThreshold: 8\n      httpGet:\n        path: /healthz\n        port: ${KUBE_SCHEDULER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    name: kube-scheduler\n    resources:\n      requests:\n        cpu: 100m\n    startupProbe:\n      failureThreshold: 24\n      httpGet:\n        path: /healthz\n        port: ${KUBE_SCHEDULER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    volumeMounts:\n    - mountPath: ${BASE_K8S_PATH}/scheduler.conf\n      name: kubeconfig\n      readOnly: true\n  hostNetwork: true\n  priority: 2000001000\n  priorityClassName: system-node-critical\n  securityContext:\n    seccompProfile:\n      type: RuntimeDefault\n  volumes:\n  - hostPath:\n      path: ${BASE_K8S_PATH}/scheduler.conf\n      type: FileOrCreate\n    name: kubeconfig\nstatus: {}\nEOF\n"})})]})}function P(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},63770:(e,t,r)=>{r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},65009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>_,frontMatter:()=>u,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/setupControlPlane","title":"setupControlPlane","description":"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u043e\u0434\u044b \u0432 Kubernetes \u2014 \u044d\u0442\u043e \u043e\u0441\u043e\u0431\u044b\u0439 \u0432\u0438\u0434 \u043f\u043e\u0434\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0434\u0435\u043c\u043e\u043d\u043e\u043c kubelet \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0443\u0437\u043b\u0435, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 Kubernetes. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0434, \u0432\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0435 \u0444\u0430\u0439\u043b-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 \u0443\u0437\u043b\u0435 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u043e {CUSTOM_VALUE.kuberneteBaseFolderPath.value}). Kubelet \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u043e\u0434\u044b \u043f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u044d\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0430\u0445.","source":"@site/docs/tech-docs/kubernetes/setupControlPlane.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/setupControlPlane","permalink":"/in-cloud/tech-docs/kubernetes/setupControlPlane","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(85631),o=r(35825),l=r(79988),i=r(7478);const u={},d=void 0,h={},p=[{value:"5.2.8.2. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube-API",id:"5282-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kube-api",level:2},...l.toc,{value:"5.2.8.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Controller Manager",id:"5283-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kube-controller-manager",level:2},...c.toc,{value:"5.2.8.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Scheduler",id:"5284-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kube-scheduler",level:2},...o.toc];function E(e){const t={blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u043e\u0434\u044b \u0432 Kubernetes \u2014 \u044d\u0442\u043e \u043e\u0441\u043e\u0431\u044b\u0439 \u0432\u0438\u0434 \u043f\u043e\u0434\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0434\u0435\u043c\u043e\u043d\u043e\u043c kubelet \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0443\u0437\u043b\u0435, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432 Kubernetes. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0434, \u0432\u044b \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0435 \u0444\u0430\u0439\u043b-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 \u0443\u0437\u043b\u0435 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u043e ",(0,a.jsx)(t.strong,{children:i.M.kuberneteBaseFolderPath.value}),"). Kubelet \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0435\u0439 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u043e\u0434\u044b \u043f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u044d\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0430\u0445."]}),"\n"]}),"\n","\n",(0,a.jsx)(t.h2,{id:"5282-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kube-api",children:"5.2.8.2. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube-API"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(t.h2,{id:"5283-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kube-controller-manager",children:"5.2.8.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Controller Manager"}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(t.h2,{id:"5284-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kube-scheduler",children:"5.2.8.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Scheduler"}),"\n",(0,a.jsx)(o.default,{})]})}function _(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(E,{...e})}):E(e)}},79988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>E,default:()=>A,frontMatter:()=>p,metadata:()=>n,toc:()=>P});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),o=r(6353),l=r(31798),i=r(63770),u=r(25292),d=r(1775),h=r(53828);const p={},E=void 0,_={},P=[];function S(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:h.A`
    export KUBELET_SERVER_PORT=${l.h.kubeletServer.portNumber}
    export KUBELET_READ_ONLY_PORT=${l.h.kubeletReadOnlyPort.portNumber}
    export KUBE_APISERVER_PORT=${l.h.kubeAPIServer.portNumber}
    export ETCD_SERVER_PORT=${l.h.etcdServer.portNumber}
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
    export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${o.$.kubernetesSA.keyPath}"
    export KUBERNETES_SERVICE_ACCOUNT_CRT_PATH="${o.$.kubernetesSA.crtPath}"
    export KUBERNETES_SERVER_KEY_PATH="${o.$.kubernetesServer.keyPath}"
    export KUBERNETES_SERVER_CRT_PATH="${o.$.kubernetesServer.crtPath}"
    export KUBERNETES_KUBELET_CLIENT_KEY_PATH="${o.$.kubernetesKubeletClient.keyPath}"
    export KUBERNETES_KUBELET_CLIENT_CRT_PATH="${o.$.kubernetesKubeletClient.crtPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH="${o.$.kubernetesFrontProxyClient.keyPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH="${o.$.kubernetesFrontProxyClient.crtPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_CN="${o.$.kubernetesFrontProxyClient.cname}"
    export KUBERNETES_ETCD_CLIENT_KEY_PATH="${o.$.kubernetesEtcdClient.keyPath}"
    export KUBERNETES_ETCD_CLIENT_CRT_PATH="${o.$.kubernetesEtcdClient.crtPath}"
    export KUBERNETES_CA_CRT_PATH="${o.$.kubernetesCA.crtPath}"
    export FRONT_PROXY_CA_CRT_PATH="${o.$.frontProxyCA.crtPath}"
    export ETCD_CA_CRT_PATH="${o.$.etcdCA.crtPath}"
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
`})]})}function A(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(S,{...e})}):S()}},85631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>p,default:()=>S,frontMatter:()=>h,metadata:()=>n,toc:()=>_});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),c=r(7478),o=r(6353),l=r(31798),i=r(63770),u=r(53828),d=r(1775);const h={},p=void 0,E={},_=[];function P(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
    export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
    export CLUSTER_NAME="${c.M.clusterName.value}"
    export KUBERNETES_VERSION="${i.M.kubernetes.value}"
    export KUBE_CONTROLLER_MANAGER_PORT=${l.h.kubeControllerManager.portNumber}
  `}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
    export KUBERNETES_CA_CRT_PATH="${o.$.kubernetesCA.crtPath}"
    export KUBERNETES_CA_KEY_PATH="${o.$.kubernetesCA.keyPath}"
    export FRONT_PROXY_CA_CRT_PATH="${o.$.frontProxyCA.crtPath}"
    export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${o.$.kubernetesSA.keyPath}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cat <<EOF > ${BASE_K8S_PATH}/manifests/kube-controller-manager.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  creationTimestamp: null\n  labels:\n    component: kube-controller-manager\n    tier: control-plane\n  name: kube-controller-manager\n  namespace: kube-system\nspec:\n  containers:\n  - command:\n    - kube-controller-manager\n    - --authentication-kubeconfig=${BASE_K8S_PATH}/controller-manager.conf\n    - --authorization-always-allow-paths=/healthz,/readyz,/livez,/metrics\n    - --authorization-kubeconfig=${BASE_K8S_PATH}/controller-manager.conf\n    - --bind-address=0.0.0.0\n    - --client-ca-file=${KUBERNETES_CA_CRT_PATH}\n    - --cluster-name=${CLUSTER_NAME}\n    - --cluster-signing-cert-file=${KUBERNETES_CA_CRT_PATH}\n    - --cluster-signing-duration=720h\n    - --cluster-signing-key-file=${KUBERNETES_CA_KEY_PATH}\n    - --concurrent-replicaset-syncs=20\n    - --controllers=*,bootstrapsigner,tokencleaner\n    - --feature-gates=RotateKubeletServerCertificate=true\n    - --kube-api-burst=120\n    - --kube-api-qps=100\n    - --kubeconfig=${BASE_K8S_PATH}/controller-manager.conf\n    - --leader-elect=true\n    - --namespace-sync-period=2m0s\n    - --node-startup-grace-period=10s\n    - --requestheader-client-ca-file=${FRONT_PROXY_CA_CRT_PATH}\n    - --root-ca-file=${KUBERNETES_CA_CRT_PATH}\n    - --service-account-private-key-file=${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}\n    - --terminated-pod-gc-threshold=12500\n    - --use-service-account-credentials=true\n    - --v=2\n    image: registry.k8s.io/kube-controller-manager:${KUBERNETES_VERSION}\n    imagePullPolicy: IfNotPresent\n    livenessProbe:\n      failureThreshold: 8\n      httpGet:\n        path: /healthz\n        port: ${KUBE_CONTROLLER_MANAGER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    name: kube-controller-manager\n    resources:\n      requests:\n        cpu: 200m\n    startupProbe:\n      failureThreshold: 24\n      httpGet:\n        path: /healthz\n        port: ${KUBE_CONTROLLER_MANAGER_PORT}\n        scheme: HTTPS\n      initialDelaySeconds: 10\n      periodSeconds: 10\n      timeoutSeconds: 15\n    volumeMounts:\n    - mountPath: /etc/ssl/certs\n      name: ca-certs\n      readOnly: true\n    - mountPath: /etc/ca-certificates\n      name: etc-ca-certificates\n      readOnly: true\n    - mountPath: /etc/pki\n      name: etc-pki\n      readOnly: true\n    - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec\n      name: flexvolume-dir\n    - mountPath: ${BASE_K8S_PATH}/pki\n      name: k8s-certs\n      readOnly: true\n    - mountPath: ${BASE_K8S_PATH}/controller-manager.conf\n      name: kubeconfig\n      readOnly: true\n    - mountPath: /usr/local/share/ca-certificates\n      name: usr-local-share-ca-certificates\n      readOnly: true\n    - mountPath: /usr/share/ca-certificates\n      name: usr-share-ca-certificates\n      readOnly: true\n  hostNetwork: true\n  priority: 2000001000\n  priorityClassName: system-node-critical\n  securityContext:\n    seccompProfile:\n      type: RuntimeDefault\n  volumes:\n  - hostPath:\n      path: /etc/ssl/certs\n      type: DirectoryOrCreate\n    name: ca-certs\n  - hostPath:\n      path: /etc/ca-certificates\n      type: DirectoryOrCreate\n    name: etc-ca-certificates\n  - hostPath:\n      path: /etc/pki\n      type: DirectoryOrCreate\n    name: etc-pki\n  - hostPath:\n      path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec\n      type: DirectoryOrCreate\n    name: flexvolume-dir\n  - hostPath:\n      path: ${BASE_K8S_PATH}/pki\n      type: DirectoryOrCreate\n    name: k8s-certs\n  - hostPath:\n      path: ${BASE_K8S_PATH}/controller-manager.conf\n      type: FileOrCreate\n    name: kubeconfig\n  - hostPath:\n      path: /usr/local/share/ca-certificates\n      type: DirectoryOrCreate\n    name: usr-local-share-ca-certificates\n  - hostPath:\n      path: /usr/share/ca-certificates\n      type: DirectoryOrCreate\n    name: usr-share-ca-certificates\nstatus: {}\nEOF\n"})})]})}function S(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(P,{...e})}):P(e)}},94544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"tech-docs/kubernetes-thw/step-by-step-static-pods","title":"5.2.8. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0423\u041a (Control Plane)","description":"","source":"@site/docs/tech-docs/kubernetes-thw/step-by-step-static-pods.mdx","sourceDirName":"tech-docs/kubernetes-thw","slug":"/tech-docs/kubernetes-thw/step-by-step-static-pods","permalink":"/in-cloud/tech-docs/kubernetes-thw/step-by-step-static-pods","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"step-by-step-static-pods"}}');var a=r(74848),s=r(28453),c=r(65009);const o={id:"step-by-step-static-pods"},l="5.2.8. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0423\u041a (Control Plane)",i={},u=[...c.toc];function d(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"528-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u043a-control-plane",children:"5.2.8. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0423\u041a (Control Plane)"})}),"\n",(0,a.jsx)(c.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);