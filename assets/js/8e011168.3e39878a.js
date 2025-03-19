"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[983,3536,8034],{6353:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},25292:(e,t,a)=>{a.d(t,{L:()=>u});var r=a(6353),l=a(31798),o=a(7478);const u={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},38229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),u=a(7478),n=a(1775),i=a(60513);const s={},c=void 0,d={},v=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,l.jsx)(n.A,{language:"bash",children:i.A`
      export BASE_K8S_PATH="${u.M.kuberneteBaseFolderPath.value}"
  `}),"\n",(0,l.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,l.jsx)(n.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane apiserver \
        --config=${u.M.kuberneteBaseFolderPath.value}/kubeadm.conf
  `}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(n.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},38291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/api-settings","title":"5.2.1.3.5.1.1. Kube-Apiserver","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setup.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/api-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/api-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"api-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.3.5.1. Init Manifests","permalink":"/in-cloud/tech-docs/kubernetes/k8s-init-manifests"},"next":{"title":"5.2.1.3.5.1.2. Controller","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/controller-settings"}}');var l=a(74848),o=a(28453),u=a(87464),n=a(62774),i=a(79988),s=a(38229);const c={id:"api-settings"},d="5.2.1.3.5.1.1. Kube-Apiserver",v={},h=[...i.toc,...s.toc];function b(e){const t={admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"5213511-kube-apiserver",children:"5.2.1.3.5.1.1. Kube-Apiserver"})}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,l.jsxs)(n.A,{groupId:"install-type",children:[(0,l.jsx)(u.A,{value:"Static Pod",children:(0,l.jsx)(i.default,{})}),(0,l.jsx)(u.A,{value:"Kubeadm",children:(0,l.jsx)(s.default,{})})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},62774:(e,t,a)=>{a.d(t,{A:()=>L});var r=a(96540),l=a(34164),o=a(65627),u=a(56347),n=a(50372),i=a(30604),s=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}(a);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const l=(0,u.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,o=v(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,d]=b({queryString:a,groupId:l}),[k,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,c.Dv)(a);return[l,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:l}),m=(()=>{const e=s??k;return h({value:e,tabValues:o})?e:null})();(0,n.A)((()=>{m&&i(m)}),[m]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var p=a(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function $(e){let{className:t,block:a,selectedValue:r,selectValue:u,tabValues:n}=e;const i=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),l=n[a].value;l!==r&&(s(t),u(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t),children:n.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...o,className:(0,l.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function P(e){let{lazy:t,children:a,selectedValue:o}=e;const u=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=k(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,f.jsx)($,{...t,...e}),(0,f.jsx)(P,{...t,...e})]})}function L(e){const t=(0,p.A)();return(0,f.jsx)(g,{...e,children:d(e.children)},String(t))}},63770:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},79988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),u=a(7478),n=a(6353),i=a(31798),s=a(63770),c=a(25292),d=a(1775),v=a(60513);const h={},b=void 0,k={},p=[];function m(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,l.jsx)(d.A,{language:"bash",children:v.A`
    export KUBELET_SERVER_PORT=${i.h.kubeletServer.portNumber}
    export KUBELET_READ_ONLY_PORT=${i.h.kubeletReadOnlyPort.portNumber}
    export KUBE_APISERVER_PORT=${i.h.kubeAPIServer.portNumber}
    export ETCD_SERVER_PORT=${i.h.etcdServer.portNumber}
    export ETCD_SERVERS="https://127.0.0.1:$\{ETCD_SERVER_PORT}"
    export SERVICE_CIDR="${u.M.kubernetesServiceCIDR.value}"
    export MACHINE_LOCAL_ADDRESS="${u.M.virtualMachineLocalAddress.value}"
  `}),"\n",(0,l.jsx)(d.A,{language:"bash",children:v.A`
    export BASE_K8S_PATH="${u.M.kuberneteBaseFolderPath.value}"
    export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
    export CLUSTER_NAME="${u.M.clusterName.value}"
    export KUBERNETES_VERSION="${s.M.kubernetes.value}"
    export CLUSTER_DOMAIN="${u.M.kubernetesClusterDomain.value}"
    export BASE_DOCKER_REGISTRY="${u.M.baseDockerRegistry.value}"
  `}),"\n",(0,l.jsx)(d.A,{language:"bash",children:v.A`
    export KUBERNETES_SERVICE_ACCOUNT_KEY_PATH="${n.$.kubernetesSA.keyPath}"
    export KUBERNETES_SERVICE_ACCOUNT_CRT_PATH="${n.$.kubernetesSA.crtPath}"
    export KUBERNETES_SERVER_KEY_PATH="${n.$.kubernetesServer.keyPath}"
    export KUBERNETES_SERVER_CRT_PATH="${n.$.kubernetesServer.crtPath}"
    export KUBERNETES_KUBELET_CLIENT_KEY_PATH="${n.$.kubernetesKubeletClient.keyPath}"
    export KUBERNETES_KUBELET_CLIENT_CRT_PATH="${n.$.kubernetesKubeletClient.crtPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH="${n.$.kubernetesFrontProxyClient.keyPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH="${n.$.kubernetesFrontProxyClient.crtPath}"
    export KUBERNETES_FRONT_PROXY_CLIENT_CN="${n.$.kubernetesFrontProxyClient.cname}"
    export KUBERNETES_ETCD_CLIENT_KEY_PATH="${n.$.kubernetesEtcdClient.keyPath}"
    export KUBERNETES_ETCD_CLIENT_CRT_PATH="${n.$.kubernetesEtcdClient.crtPath}"
    export KUBERNETES_CA_CRT_PATH="${n.$.kubernetesCA.crtPath}"
    export FRONT_PROXY_CA_CRT_PATH="${n.$.frontProxyCA.crtPath}"
    export ETCD_CA_CRT_PATH="${n.$.etcdCA.crtPath}"
  `}),"\n",(0,l.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,l.jsx)(d.A,{language:"bash",children:v.A`
      mkdir -p ${u.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,l.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,l.jsx)(d.A,{language:"bash",children:v.A`cat <<EOF > ${u.M.kuberneteBaseFolderPath.value}/manifests/kube-apiserver.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${c.L.securePort.value}
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
      - --advertise-address: "$\{MACHINE_LOCAL_ADDRESS}"
      - --aggregator-reject-forwarding-redirect: "${c.L.aggregatorRejectForwardingRedirect.value}"
      - --allow-privileged: "${c.L.allowPrivileged.value}"
      - --anonymous-auth: "${c.L.anonymousAuth.value}"
      - --api-audiences: "${c.L.apiAudiences.value}"
      - --apiserver-count: "${c.L.apiserverCount.value}"
      - --audit-log-batch-buffer-size: "${c.L.auditLogBatchBufferSize.value}"
      - --audit-log-batch-max-size: "${c.L.auditLogBatchMaxSize.value}"
      - --audit-log-batch-max-wait: "${c.L.auditLogBatchMaxWait.value}"
      - --audit-log-batch-throttle-burst: "${c.L.auditLogBatchThrottleBurst.value}"
      - --audit-log-batch-throttle-enable: "${c.L.auditLogBatchThrottleEnable.value}"
      - --audit-log-batch-throttle-qps: "${c.L.auditLogBatchThrottleQps.value}"
      - --audit-log-compress: "${c.L.auditLogCompress.value}"
      - --audit-log-format: "${c.L.auditLogFormat.value}"
      - --audit-log-maxage: "${c.L.auditLogMaxage.value}"
      - --audit-log-maxbackup: "${c.L.auditLogMaxbackup.value}"
      - --audit-log-maxsize: "${c.L.auditLogMaxsize.value}"
      - --audit-log-mode: "${c.L.auditLogMode.value}"
      - --audit-log-truncate-enabled: "${c.L.auditLogTruncateEnabled.value}"
      - --audit-log-truncate-max-batch-size: "${c.L.auditLogTruncateMaxBatchSize.value}"
      - --audit-log-truncate-max-event-size: "${c.L.auditLogTruncateMaxEventSize.value}"
      - --audit-log-version: "${c.L.auditLogVersion.value}"
      - --audit-webhook-batch-buffer-size: "${c.L.auditWebhookBatchBufferSize.value}"
      - --audit-webhook-batch-initial-backoff: "${c.L.auditWebhookBatchInitialBackoff.value}"
      - --audit-webhook-batch-max-size: "${c.L.auditWebhookBatchMaxSize.value}"
      - --audit-webhook-batch-max-wait: "${c.L.auditWebhookBatchMaxWait.value}"
      - --audit-webhook-batch-throttle-burst: "${c.L.auditWebhookBatchThrottleBurst.value}"
      - --audit-webhook-batch-throttle-enable: "${c.L.auditWebhookBatchThrottleEnable.value}"
      - --audit-webhook-batch-throttle-qps: "${c.L.auditWebhookBatchThrottleQps.value}"
      - --audit-webhook-initial-backoff: "${c.L.auditWebhookInitialBackoff.value}"
      - --audit-webhook-mode: "${c.L.auditWebhookMode.value}"
      - --audit-webhook-truncate-enabled: "${c.L.auditWebhookTruncateEnabled.value}"
      - --audit-webhook-truncate-max-batch-size: "${c.L.auditWebhookTruncateMaxBatchSize.value}"
      - --audit-webhook-truncate-max-event-size: "${c.L.auditWebhookTruncateMaxEventSize.value}"
      - --audit-webhook-version: "${c.L.auditWebhookVersion.value}"
      - --authentication-token-webhook-cache-ttl: "${c.L.authenticationTokenWebhookCacheTtl.value}"
      - --authentication-token-webhook-version: "${c.L.authenticationTokenWebhookVersion.value}"
      - --authorization-mode: "${c.L.authorizationMode.value}"
      - --authorization-webhook-cache-authorized-ttl: "${c.L.authorizationWebhookCacheAuthorizedTtl.value}"
      - --authorization-webhook-cache-unauthorized-ttl: "${c.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      - --authorization-webhook-version: "${c.L.authorizationWebhookVersion.value}"
      - --bind-address: "${c.L.bindAddress.value}"
      - --cert-dir: "${c.L.certDir.value}"
      - --client-ca-file: "${c.L.clientCaFile.value}"
      - --cloud-provider: "${c.L.cloudProvider.value}"
      - --cloud-provider-gce-l7lb-src-cidrs: "${c.L.cloudProviderGceL7lbSrcCidrs.value}"
      - --cloud-provider-gce-lb-src-cidrs: "${c.L.cloudProviderGceLbSrcCidrs.value}"
      - --contention-profiling: "${c.L.contentionProfiling.value}"
      - --default-not-ready-toleration-seconds: "${c.L.defaultNotReadyTolerationSeconds.value}"
      - --default-unreachable-toleration-seconds: "${c.L.defaultUnreachableTolerationSeconds.value}"
      - --default-watch-cache-size: "${c.L.defaultWatchCacheSize.value}"
      - --delete-collection-workers: "${c.L.deleteCollectionWorkers.value}"
      - --enable-admission-plugins: "${c.L.enableAdmissionPlugins.value}"
      - --enable-aggregator-routing: "${c.L.enableAggregatorRouting.value}"
      - --enable-bootstrap-token-auth: "${c.L.enableBootstrapTokenAuth.value}"
      - --enable-garbage-collector: "${c.L.enableGarbageCollector.value}"
      - --enable-logs-handler: "${c.L.enableLogsHandler.value}"
      - --enable-priority-and-fairness: "${c.L.enablePriorityAndFairness.value}"
      - --encryption-provider-config-automatic-reload: "${c.L.encryptionProviderConfigAutomaticReload.value}"
      - --endpoint-reconciler-type: "${c.L.endpointReconcilerType.value}"
      - --etcd-cafile: "${c.L.etcdCafile.value}"
      - --etcd-certfile: "${c.L.etcdCertfile.value}"
      - --etcd-compaction-interval: "${c.L.etcdCompactionInterval.value}"
      - --etcd-count-metric-poll-period: "${c.L.etcdCountMetricPollPeriod.value}"
      - --etcd-db-metric-poll-interval: "${c.L.etcdDbMetricPollInterval.value}"
      - --etcd-healthcheck-timeout: "${c.L.etcdHealthcheckTimeout.value}"
      - --etcd-keyfile: "${c.L.etcdKeyfile.value}"
      - --etcd-prefix: "${c.L.etcdPrefix.value}"
      - --etcd-readycheck-timeout: "${c.L.etcdReadycheckTimeout.value}"
      - --etcd-servers: "${c.L.etcdServers.value}"
      - --event-ttl: "${c.L.eventTtl.value}"
      - --feature-gates: "${c.L.featureGates.value}"
      - --goaway-chance: "${c.L.goawayChance.value}"
      - --help: "${c.L.help.value}"
      - --http2-max-streams-per-connection: "${c.L.http2MaxStreamsPerConnection.value}"
      - --kubelet-client-certificate: "${c.L.kubeletClientCertificate.value}"
      - --kubelet-client-key: "${c.L.kubeletClientKey.value}"
      - --kubelet-port: "${c.L.kubeletPort.value}"
      - --kubelet-preferred-address-types: "${c.L.kubeletPreferredAddressTypes.value}"
      - --kubelet-read-only-port: "${c.L.kubeletReadOnlyPort.value}"
      - --kubelet-timeout: "${c.L.kubeletTimeout.value}"
      - --kubernetes-service-node-port: "${c.L.kubernetesServiceNodePort.value}"
      - --lease-reuse-duration-seconds: "${c.L.leaseReuseDurationSeconds.value}"
      - --livez-grace-period: "${c.L.livezGracePeriod.value}"
      - --log-flush-frequency: "${c.L.logFlushFrequency.value}"
      - --logging-format: "${c.L.loggingFormat.value}"
      - --log-json-info-buffer-size: "${c.L.logJsonInfoBufferSize.value}"
      - --log-json-split-stream: "${c.L.logJsonSplitStream.value}"
      - --log-text-info-buffer-size: "${c.L.logTextInfoBufferSize.value}"
      - --log-text-split-stream: "${c.L.logTextSplitStream.value}"
      - --max-connection-bytes-per-sec: "${c.L.maxConnectionBytesPerSec.value}"
      - --max-mutating-requests-inflight: "${c.L.maxMutatingRequestsInflight.value}"
      - --max-requests-inflight: "${c.L.maxRequestsInflight.value}"
      - --min-request-timeout: "${c.L.minRequestTimeout.value}"
      - --permit-address-sharing: "${c.L.permitAddressSharing.value}"
      - --permit-port-sharing: "${c.L.permitPortSharing.value}"
      - --profiling: "${c.L.profiling.value}"
      - --proxy-client-cert-file: "${c.L.proxyClientCertFile.value}"
      - --proxy-client-key-file: "${c.L.proxyClientKeyFile.value}"
      - --requestheader-allowed-names: "${c.L.requestheaderAllowedNames.value}"
      - --requestheader-client-ca-file: "${c.L.requestheaderClientCaFile.value}"
      - --requestheader-extra-headers-prefix: "${c.L.requestheaderExtraHeadersPrefix.value}"
      - --requestheader-group-headers: "${c.L.requestheaderGroupHeaders.value}"
      - --requestheader-username-headers: "${c.L.requestheaderUsernameHeaders.value}"
      - --request-timeout: "${c.L.requestTimeout.value}"
      - --runtime-config: "${c.L.runtimeConfig.value}"
      - --secure-port: "${c.L.securePort.value}"
      - --service-account-extend-token-expiration: "${c.L.serviceAccountExtendTokenExpiration.value}"
      - --service-account-issuer: "${c.L.serviceAccountIssuer.value}"
      - --service-account-key-file: "${c.L.serviceAccountKeyFile.value}"
      - --service-account-lookup: "${c.L.serviceAccountLookup.value}"
      - --service-account-max-token-expiration: "${c.L.serviceAccountMaxTokenExpiration.value}"
      - --service-account-signing-key-file: "${c.L.serviceAccountSigningKeyFile.value}"
      - --service-cluster-ip-range: "${c.L.serviceClusterIpRange.value}"
      - --service-node-port-range: "${c.L.serviceNodePortRange.value}"
      - --shutdown-delay-duration: "${c.L.shutdownDelayDuration.value}"
      - --shutdown-send-retry-after: "${c.L.shutdownSendRetryAfter.value}"
      - --shutdown-watch-termination-grace-period: "${c.L.shutdownWatchTerminationGracePeriod.value}"
      - --storage-backend: "${c.L.storageBackend.value}"
      - --storage-media-type: "${c.L.storageMediaType.value}"
      - --tls-cert-file: "${c.L.tlsCertFile.value}"
      - --tls-private-key-file: "${c.L.tlsPrivateKeyFile.value}"
      - --v: "${c.L.v.value}"
      - --version: "${c.L.version.value}"
      - --watch-cache: "${c.L.watchCache.value}"

      # Не указывать если значение "" или undefined
      # - --cloud-config: "${c.L.cloudConfig.value}"
      # - --strict-transport-security-directives: "${c.L.strictTransportSecurityDirectives.value}"
      # - --disable-admission-plugins: "${c.L.disableAdmissionPlugins.value}"
      # - --disabled-metrics: "${c.L.disabledMetrics.value}"
      # - --egress-selector-config-file: "${c.L.egressSelectorConfigFile.value}"
      # - --encryption-provider-config: "${c.L.encryptionProviderConfig.value}"
      # - --etcd-servers-overrides: "${c.L.etcdServersOverrides.value}"
      # - --external-hostname: "${c.L.externalHostname.value}"
      # - --kubelet-certificate-authority: "${c.L.kubeletCertificateAuthority.value}"
      # - --oidc-ca-file: "${c.L.oidcCaFile.value}"
      # - --oidc-client-id: "${c.L.oidcClientId.value}"
      # - --oidc-groups-claim: "${c.L.oidcGroupsClaim.value}"
      # - --oidc-groups-prefix: "${c.L.oidcGroupsPrefix.value}"
      # - --oidc-issuer-url: "${c.L.oidcIssuerUrl.value}"
      # - --oidc-required-claim: "${c.L.oidcRequiredClaim.value}"
      # - --oidc-signing-algs: "${c.L.oidcSigningAlgs.value}"
      # - --oidc-username-claim: "${c.L.oidcUsernameClaim.value}"
      # - --oidc-username-prefix: "${c.L.oidcUsernamePrefix.value}"
      # - --peer-advertise-ip: "${c.L.peerAdvertiseIp.value}"
      # - --peer-advertise-port: "${c.L.peerAdvertisePort.value}"
      # - --peer-ca-file: "${c.L.peerCaFile.value}"
      # - --service-account-jwks-uri: "${c.L.serviceAccountJwksUri.value}"
      # - --show-hidden-metrics-for-version: "${c.L.showHiddenMetricsForVersion.value}"
      # - --tls-cipher-suites: "${c.L.tlsCipherSuites.value}"
      # - --tls-min-version: "${c.L.tlsMinVersion.value}"
      # - --tls-sni-cert-key: "${c.L.tlsSniCertKey.value}"
      # - --token-auth-file: "${c.L.tokenAuthFile.value}"
      # - --tracing-config-file: "${c.L.tracingConfigFile.value}"
      # - --vmodule: "${c.L.vmodule.value}"
      # - --watch-cache-sizes: "${c.L.watchCacheSizes.value}"
      # - --authorization-webhook-config-file: "${c.L.authorizationWebhookConfigFile.value}"
      # - --cors-allowed-origins: "${c.L.corsAllowedOrigins.value}"
      # - --debug-socket-path: "${c.L.debugSocketPath.value}"
      # - --authorization-policy-file: "${c.L.authorizationPolicyFile.value}"
      # - --authorization-config: "${c.L.authorizationConfig.value}"
      # - --authentication-token-webhook-config-file: "${c.L.authenticationTokenWebhookConfigFile.value}"
      # - --authentication-config: "${c.L.authenticationConfig.value}"
      # - --audit-webhook-config-file: "${c.L.auditWebhookConfigFile.value}"
      # - --audit-policy-file: "${c.L.auditPolicyFile.value}"
      # - --audit-log-path: "${c.L.auditLogPath.value}"
      # - --allow-metric-labels: "${c.L.allowMetricLabels.value}"
      # - --allow-metric-labels-manifest: "${c.L.allowMetricLabelsManifest.value}"
      # - --admission-control: "${c.L.admissionControl.value}"
      # - --admission-control-config-file: "${c.L.admissionControlConfigFile.value}"


      image: ${u.M.baseDockerRegistry.value}/kube-apiserver:${s.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${c.L.securePort.value}
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
          port: ${c.L.securePort.value}
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
          port: ${c.L.securePort.value}
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
      - mountPath: ${u.M.kuberneteBaseFolderPath.value}/pki
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
        path: ${u.M.kuberneteBaseFolderPath.value}/pki
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
`})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m()}},87464:(e,t,a)=>{a.d(t,{A:()=>u});a(96540);var r=a(34164);const l={tabItem:"tabItem_Ymn6"};var o=a(74848);function u(e){let{children:t,hidden:a,className:u}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,u),hidden:a,children:t})}}}]);