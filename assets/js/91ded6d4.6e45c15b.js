"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4286],{6353:(e,t,a)=>{a.d(t,{$:()=>o});var r=a(7478);const o={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},25292:(e,t,a)=>{a.d(t,{L:()=>l});var r=a(6353),o=a(31798),n=a(7478);const l={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${o.h.kubeletServer.portNumber}`},securePort:{value:`${o.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${o.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${o.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${n.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${n.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,a)=>{a.d(t,{A:()=>C});var r=a(96540),o=a(34164),n=a(65627),l=a(56347),u=a(50372),i=a(30604),s=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}(a);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const o=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,n=b(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[s,d]=h({queryString:a,groupId:o}),[v,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,c.Dv)(a);return[o,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:o}),m=(()=>{const e=s??v;return k({value:e,tabValues:n})?e:null})();(0,u.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,n]),tabValues:n}}var p=a(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function P(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:s}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),o=u[a].value;o!==r&&(s(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...n,className:(0,o.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,f.jsx)(P,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function C(e){const t=(0,p.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},77221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>f,frontMatter:()=>k,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/rbac","title":"5.2.4.1.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c \u0443\u0437\u043b\u0430\u043c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u043f\u0435\u0440\u0435\u0434 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/rbac.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/rbac","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/rbac","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"rbac"},"sidebar":"techDocs","previous":{"title":"5.2.4.1.1.2. Join","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/marking-join"},"next":{"title":"5.2.4.1.3.1. Init","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/upload-configs-all-init"}}');var o=a(74848),n=a(28453),l=a(87464),u=a(62774),i=a(1775),s=a(60513),c=a(7478),d=a(31798),b=a(25292);const k={id:"rbac"},h="5.2.4.1.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",v={},p=[{value:"5.2.4.1.2.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438",id:"524121-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0440\u043e\u043b\u0435\u0432\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438",level:2}];function m(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"52412-\u0440\u043e\u043b\u0435\u0432\u0430\u044f-\u043c\u043e\u0434\u0435\u043b\u044c",children:"5.2.4.1.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c \u0443\u0437\u043b\u0430\u043c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u043f\u0435\u0440\u0435\u0434 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."})}),"\n",(0,o.jsx)(t.h2,{id:"524121-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0440\u043e\u043b\u0435\u0432\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438",children:"5.2.4.1.2.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),"\n",(0,o.jsxs)(u.A,{groupId:"install-type",children:[(0,o.jsxs)(l.A,{value:"HardWay",children:[(0,o.jsxs)(a,{open:!0,children:[(0,o.jsx)("summary",{children:"Role bindings"}),(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(i.A,{language:"bash",children:s.A`
          export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
      `}),(0,o.jsx)("h4",{children:"\u0420\u043e\u043b\u0438 \u0438 \u0441\u0432\u044f\u0437\u0438"}),(0,o.jsx)(i.A,{language:"bash",children:s.A`
        kubectl --kubeconfig=$\{BASE_K8S_PATH}/super-admin.conf apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: kubeadm:get-nodes
        rules:
        - apiGroups:
          - ""
          resources:
          - nodes
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:bootstrap-signer-clusterinfo
          namespace: kube-public
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - cluster-info
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:bootstrap-signer-clusterinfo
          namespace: kube-public
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:bootstrap-signer-clusterinfo
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: User
          name: system:anonymous
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:cluster-admins
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: cluster-admin
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: kubeadm:cluster-admins
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:get-nodes
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: kubeadm:get-nodes
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:kubelet-bootstrap
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:node-bootstrapper
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:node-autoapprove-bootstrap
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:certificates.k8s.io:certificatesigningrequests:nodeclient
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:node-autoapprove-certificate-rotation
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        EOF
      `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
      clusterrole.rbac.authorization.k8s.io/kubeadm:get-nodes created
      role.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      rolebinding.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:cluster-admins created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:get-nodes created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:kubelet-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-certificate-rotation created
  `})})]}),(0,o.jsxs)(a,{open:!0,children:[(0,o.jsx)("summary",{children:"Bootstrap tokens"}),(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(i.A,{language:"bash",children:s.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
      `}),(0,o.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),(0,o.jsx)(i.A,{children:s.A`
      kubectl apply -f - <<EOF
      ---
      apiVersion: v1
      kind: Secret
      metadata:
        name: bootstrap-token-$\{TOKEN_ID}
        namespace: kube-system
      data:
        auth-extra-groups: $(echo -n "$AUTH_EXTRA_GROUPS" | base64)
        description: $(echo -n "$DESCRIPTION" | base64)
        expiration: $(echo -n "$EXPIRATION" | base64)
        token-id: $(echo -n "$TOKEN_ID" | base64)
        token-secret: $(echo -n "$TOKEN_SECRET" | base64)
        usage-bootstrap-authentication: $(echo -n "$USAGE_BOOTSTRAP_AUTHENTIFICATION" | base64)
        usage-bootstrap-signing: $(echo -n "$USAGE_BOOTSTRAP_SIGNING" | base64)
      type: bootstrap.kubernetes.io/token
      EOF
    `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
      secret/bootstrap-token-fjt9ex configured
  `})})]}),(0,o.jsxs)(a,{open:!0,children:[(0,o.jsx)("summary",{children:"Cluster-Info"}),(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(i.A,{language:"bash",children:s.A`
          export KUBE_APISERVER_PORT=${d.h.kubeAPIServer.portNumber}
          export KUBE_CA_CRT_BASE64=$(base64 -w 0 /etc/kubernetes/pki/ca.crt)
          export CLUSTER_NAME="${c.M.clusterName.value}"
          export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
      `}),(0,o.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0421luster-info"}),(0,o.jsx)(i.A,{children:s.A`
      kubectl --kubeconfig=$\{BASE_K8S_PATH}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: v1
      data:
        kubeconfig: |
          apiVersion: v1
          clusters:
          - cluster:
              certificate-authority-data: $\{KUBE_CA_CRT_BASE64}
              server: https://api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${b.L.securePort.value}
            name: ""
          contexts: null
          current-context: ""
          kind: Config
          preferences: {}
          users: null
      kind: ConfigMap
      metadata:
        name: cluster-info
        namespace: kube-public

      EOF
    `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
      configmap/cluster-info created
  `})})]})]}),(0,o.jsxs)(l.A,{value:"Kubeadm",children:[(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(i.A,{language:"bash",children:s.A`
          export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
      `}),(0,o.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),(0,o.jsx)(i.A,{language:"bash",children:s.A`
          kubeadm init phase bootstrap-token --config=$\{BASE_K8S_PATH}/kubeadm.conf
      `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(i.A,{language:"bash",children:s.A`
      [bootstrap-token] Using token: fjt9ex.lwzqgdlvoxtqk4yw
      [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
      [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
      [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
      [bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
      [bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
      [bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
  `})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},87464:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var r=a(34164);const o={tabItem:"tabItem_Ymn6"};var n=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a,children:t})}}}]);