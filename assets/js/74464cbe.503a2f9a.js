"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1121,1736,2262,4048,7562],{6353:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},10119:(e,t,a)=>{a.d(t,{D:()=>o});var r=a(6353),l=a(31798);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},25292:(e,t,a)=>{a.d(t,{L:()=>i});var r=a(6353),l=a(31798),o=a(7478);const i={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},28702:(e,t,a)=>{a.d(t,{D:()=>u});var r=a(60513),l=a(6353),o=a(7478),i=a(31798);const u={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${l.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      # Для того, что бы сделать эту часть конфигурации статичной
      # все динамичные части будут определены через переменные окружения 
      # systemd Unit kubelet
      # >>>>>>
      # clusterDNS:
      # - "${o.M.kubernetesDNSAddress.value}"
      # clusterDomain: cluster.local
      # TODO нужны только при hardway
      # tlsCertFile: "${l.$.kubeletCurrentServer.crtPath}"
      # tlsPrivateKeyFile: "${l.$.kubeletCurrentServer.crtPath}"
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${o.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${i.h.kubeletHealthz.portNumber}
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
      staticPodPath: ${o.M.kuberneteBaseFolderPath.value}/manifests
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
    `}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,a)=>{a.d(t,{A:()=>L});var r=a(96540),l=a(34164),o=a(65627),i=a(56347),u=a(50372),n=a(30604),s=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}(a);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,n.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,o=v(e),[i,n]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,d]=p({queryString:a,groupId:l}),[b,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,c.Dv)(a);return[l,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:l}),m=(()=>{const e=s??b;return h({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{m&&n(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);n(e),d(e),k(e)}),[d,k,o]),tabValues:o}}var k=a(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function f(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:u}=e;const n=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=n.indexOf(t),l=u[a].value;l!==r&&(s(t),i(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=n.indexOf(e.currentTarget)+1;t=n[a]??n[0];break}case"ArrowLeft":{const a=n.indexOf(e.currentTarget)-1;t=n[a]??n[n.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{n.push(e)},onKeyDown:d,onClick:c,...o,className:(0,l.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function $(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)($,{...t,...e})]})}function L(e){const t=(0,k.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},63770:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},66483:(e,t,a)=>{a.d(t,{L:()=>o});var r=a(6353),l=a(7478);const o={authenticationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${l.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},72608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),i=a(87464),u=a(62774),n=a(60513),s=a(1775);const c={},d=void 0,v={},h=[];function p(e){return(0,l.jsxs)(u.A,{children:[(0,l.jsx)(i.A,{value:"master-2",children:(0,l.jsx)(s.A,{language:"bash",children:n.A`
        export HOST_NAME=master-2
      `})}),(0,l.jsx)(i.A,{value:"master-3",children:(0,l.jsx)(s.A,{language:"bash",children:n.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p()}},75478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/initMaster","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),i=a(87464),u=a(62774),n=a(60513),s=a(1775);const c={},d=void 0,v={},h=[];function p(e){return(0,l.jsx)(u.A,{children:(0,l.jsx)(i.A,{value:"master-1",children:(0,l.jsx)(s.A,{language:"bash",children:n.A`
        export HOST_NAME=master-1
      `})})})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p()}},82332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>L,contentTitle:()=>y,default:()=>S,frontMatter:()=>$,metadata:()=>r,toc:()=>P});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),i=a(60513),u=a(1775),n=a(10119),s=a(25292),c=a(66483),d=(a(31798),a(7478)),v=a(63770);a(6353),a(28702);i.A`

    `;var h=a(87464),p=a(62774),b=a(85421);const k={data:{value:i.A`
      advertise-client-urls: ${n.D.advertiseClientUrls.value}
      auto-compaction-retention: ${n.D.autoCompactionRetention.value}
      cert-file: ${n.D.certFile.value}
      client-cert-auth: ${n.D.clientCertAuth.value}
      data-dir: ${n.D.dataDir.value}
      election-timeout: ${n.D.electionTimeout.value}
      experimental-initial-corrupt-check=true
      experimental-watch-progress-notify-interval=5s
      heartbeat-interval: ${n.D.heartbeatInterval.value}
      initial-advertise-peer-urls: ${n.D.initialAdvertisePeerUrls.value}
      initial-cluster: ${n.D.initialCluster.value}
      key-file: ${n.D.keyFile.value}
      listen-client-urls: ${n.D.listenClientUrls.value}
      listen-metrics-urls: ${n.D.listenMetricsUrls.value}
      listen-peer-urls: ${n.D.listenPeerUrls.value}
      logger: ${n.D.logger.value}
      max-snapshots: ${n.D.maxSnapshots.value}
      max-wals: ${n.D.maxWals.value}
      metrics: ${n.D.metrics.value}
      name: ${n.D.name.value}
      peer-cert-file: ${n.D.peerCertFile.value}
      peer-client-cert-auth: ${n.D.peerClientCertAuth.value}
      peer-key-file: ${n.D.peerKeyFile.value}
      peer-trusted-ca-file: ${n.D.peerTrustedCAFile.value}
      snapshot-count: "${n.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      trusted-ca-file: ${n.D.trustedCAFile.value}
    `}},m={data:{value:i.A`
      aggregator-reject-forwarding-redirect: "${s.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${s.L.allowPrivileged.value}"
      anonymous-auth: "${s.L.anonymousAuth.value}"
      api-audiences: "${s.L.apiAudiences.value}"
      apiserver-count: "${s.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${s.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${s.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${s.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${s.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${s.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${s.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${s.L.auditLogCompress.value}"
      audit-log-format: "${s.L.auditLogFormat.value}"
      audit-log-maxage: "${s.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${s.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${s.L.auditLogMaxsize.value}"
      audit-log-mode: "${s.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${s.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${s.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${s.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${s.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${s.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${s.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${s.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${s.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${s.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${s.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${s.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${s.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${s.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${s.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${s.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${s.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${s.L.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${s.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${s.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${s.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${s.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${s.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${s.L.authorizationWebhookVersion.value}"
      bind-address: "${s.L.bindAddress.value}"
      cert-dir: "${s.L.certDir.value}"
      client-ca-file: "${s.L.clientCaFile.value}"
      cloud-provider: "${s.L.cloudProvider.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${s.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${s.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${s.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${s.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${s.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${s.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${s.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${s.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${s.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${s.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${s.L.enableGarbageCollector.value}"
      enable-logs-handler: "${s.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${s.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${s.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${s.L.endpointReconcilerType.value}"
      etcd-cafile: "${s.L.etcdCafile.value}"
      etcd-certfile: "${s.L.etcdCertfile.value}"
      etcd-compaction-interval: "${s.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${s.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${s.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${s.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${s.L.etcdKeyfile.value}"
      etcd-prefix: "${s.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${s.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${s.L.etcdServers.value}"
      event-ttl: "${s.L.eventTtl.value}"
      feature-gates: "${s.L.featureGates.value}"
      goaway-chance: "${s.L.goawayChance.value}"
      help: "${s.L.help.value}"
      http2-max-streams-per-connection: "${s.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${s.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${s.L.kubeletClientKey.value}"
      kubelet-port: "${s.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${s.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${s.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${s.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${s.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${s.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${s.L.livezGracePeriod.value}"
      log-flush-frequency: "${s.L.logFlushFrequency.value}"
      logging-format: "${s.L.loggingFormat.value}"
      log-json-info-buffer-size: "${s.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${s.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${s.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${s.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${s.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${s.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${s.L.maxRequestsInflight.value}"
      min-request-timeout: "${s.L.minRequestTimeout.value}"
      permit-address-sharing: "${s.L.permitAddressSharing.value}"
      permit-port-sharing: "${s.L.permitPortSharing.value}"
      profiling: "${s.L.profiling.value}"
      proxy-client-cert-file: "${s.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${s.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${s.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${s.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${s.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${s.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${s.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${s.L.requestTimeout.value}"
      runtime-config: "${s.L.runtimeConfig.value}"
      secure-port: "${s.L.securePort.value}"
      service-account-extend-token-expiration: "${s.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${s.L.serviceAccountIssuer.value}"
      service-account-key-file: "${s.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${s.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${s.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${s.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${s.L.serviceClusterIpRange.value}"
      service-node-port-range: "${s.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${s.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${s.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${s.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${s.L.storageBackend.value}"
      storage-media-type: "${s.L.storageMediaType.value}"
      tls-cert-file: "${s.L.tlsCertFile.value}"
      tls-private-key-file: "${s.L.tlsPrivateKeyFile.value}"
      v: "${s.L.v.value}"
      version: "${s.L.version.value}"
      watch-cache: "${s.L.watchCache.value}"

      # Не указывать если значение "" или undefined
      # cloud-config: "${s.L.cloudConfig.value}"
      # strict-transport-security-directives: "${s.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${s.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${s.L.disabledMetrics.value}"
      # egress-selector-config-file: "${s.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${s.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${s.L.etcdServersOverrides.value}"
      # external-hostname: "${s.L.externalHostname.value}"
      # kubelet-certificate-authority: "${s.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${s.L.oidcCaFile.value}"
      # oidc-client-id: "${s.L.oidcClientId.value}"
      # oidc-groups-claim: "${s.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${s.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${s.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${s.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${s.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${s.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${s.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${s.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${s.L.peerAdvertisePort.value}"
      # peer-ca-file: "${s.L.peerCaFile.value}"
      # service-account-jwks-uri: "${s.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${s.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${s.L.tlsCipherSuites.value}"
      # tls-min-version: "${s.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${s.L.tlsSniCertKey.value}"
      # token-auth-file: "${s.L.tokenAuthFile.value}"
      # tracing-config-file: "${s.L.tracingConfigFile.value}"
      # vmodule: "${s.L.vmodule.value}"
      # watch-cache-sizes: "${s.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${s.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${s.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${s.L.debugSocketPath.value}"
      # authorization-policy-file: "${s.L.authorizationPolicyFile.value}"
      # authorization-config: "${s.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${s.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${s.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${s.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${s.L.auditPolicyFile.value}"
      # audit-log-path: "${s.L.auditLogPath.value}"
      # allow-metric-labels: "${s.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${s.L.allowMetricLabelsManifest.value}"
      # admission-control: "${s.L.admissionControl.value}"
      # admission-control-config-file: "${s.L.admissionControlConfigFile.value}"
      # advertise-address: "${s.L.advertiseAddress.value}"
    `}},g={data:{value:i.A`
      allocate-node-cidrs: "${c.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${c.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${c.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${c.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${c.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${c.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${c.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${c.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${c.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${c.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${c.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${c.L.bindAddress.value}"
      cidr-allocator-type: "${c.L.cidrAllocatorType.value}"
      client-ca-file: "${c.L.clientCaFile.value}"
      cloud-provider: "${c.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${c.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${c.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${c.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${c.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${c.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${c.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${c.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${c.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${c.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${c.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${c.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${c.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${c.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${c.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${c.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${c.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${c.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${c.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${c.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${c.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${c.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${c.L.configureCloudRoutes.value}"
      contention-profiling: "${c.L.contentionProfiling.value}"
      controller-start-interval: "${c.L.controllerStartInterval.value}"
      controllers: "${c.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${c.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${c.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${c.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${c.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${c.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${c.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${c.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${c.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${c.L.featureGates.value}"
      flex-volume-plugin-dir: "${c.L.flexVolumePluginDir.value}"
      help: "${c.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${c.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${c.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${c.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${c.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${c.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${c.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${c.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${c.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${c.L.kubeApiBurst.value}"
      kube-api-content-type: "${c.L.kubeApiContentType.value}"
      kube-api-qps: "${c.L.kubeApiQps.value}"
      kubeconfig: "${c.L.kubeconfig.value}"
      large-cluster-size-threshold: "${c.L.largeClusterSizeThreshold.value}"
      leader-elect: "${c.L.leaderElect.value}"
      leader-elect-lease-duration: "${c.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${c.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${c.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${c.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${c.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${c.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${c.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${c.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${c.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${c.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${c.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${c.L.logTextSplitStream.value}"
      logging-format: "${c.L.loggingFormat.value}"
      max-endpoints-per-slice: "${c.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${c.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${c.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${c.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${c.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${c.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${c.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${c.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${c.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${c.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${c.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${c.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${c.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${c.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${c.L.permitAddressSharing.value}"
      permit-port-sharing: "${c.L.permitPortSharing.value}"
      profiling: "${c.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${c.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${c.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${c.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${c.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${c.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${c.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${c.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${c.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${c.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${c.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${c.L.rootCaFile.value}"
      route-reconciliation-period: "${c.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${c.L.secondaryNodeEvictionRate.value}"
      secure-port: "${c.L.securePort.value}"
      service-account-private-key-file: "${c.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${c.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${c.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${c.L.useServiceAccountCredentials.value}"
      v: "${c.L.v.value}"
      version: "${c.L.version.value}"
      volume-host-allow-local-loopback: "${c.L.volumeHostAllowLocalLoopback.value}"

      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${c.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${c.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${c.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${c.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${c.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${c.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${c.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${c.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${c.L.clusterCidr.value}"
      # cloud-config: "${c.L.cloudConfig.value}"
      # cert-dir: "${c.L.certDir.value}"
      # allow-metric-labels-manifest: "${c.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${c.L.allowMetricLabels.value}"
      # disabled-metrics: "${c.L.disabledMetrics.value}"
      # leader-migration-config: "${c.L.leaderMigrationConfig.value}"
      # master: "${c.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${c.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${c.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${c.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${c.L.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${c.L.tlsCertFile.value}"
      # tls-cipher-suites: "${c.L.tlsCipherSuites.value}"
      # tls-min-version: "${c.L.tlsMinVersion.value}"
      # tls-private-key-file: "${c.L.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${c.L.tlsSniCertKey.value}"
      # vmodule: "${c.L.vmodule.value}"
      # volume-host-cidr-denylist: "${c.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${c.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${c.L.requestheaderAllowedNames.value}"
    `}},f={data:{value:i.A`
      authentication-kubeconfig: "${b.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${b.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${b.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${b.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${b.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${b.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${b.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${b.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${b.w.bindAddress.value}"
      client-ca-file: "${b.w.clientCaFile.value}"
      contention-profiling: "${b.w.contentionProfiling.value}"
      help: "${b.w.help.value}"
      http2-max-streams-per-connection: "${b.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${b.w.kubeApiBurst.value}"
      kube-api-content-type: "${b.w.kubeApiContentType.value}"
      kube-api-qps: "${b.w.kubeApiQps.value}"
      kubeconfig: "${b.w.kubeconfig.value}"
      leader-elect: "${b.w.leaderElect.value}"
      leader-elect-lease-duration: "${b.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${b.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${b.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${b.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${b.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${b.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${b.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${b.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${b.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${b.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${b.w.logTextSplitStream.value}"
      logging-format: "${b.w.loggingFormat.value}"
      permit-address-sharing: "${b.w.permitAddressSharing.value}"
      permit-port-sharing: "${b.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${b.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${b.w.profiling.value}"
      requestheader-extra-headers-prefix: "${b.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${b.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${b.w.requestheaderUsernameHeaders.value}"
      secure-port: "${b.w.securePort.value}"
      v: "${b.w.v.value}"
      version: "${b.w.version.value}"

      # allow-metric-labels: "${b.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${b.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${b.w.certDir.value}"
      # config: "${b.w.config.value}"
      # disabled-metrics: "${b.w.disabledMetrics.value}"
      # feature-gates: "${b.w.featureGates.value}"
      # master: "${b.w.master.value}"
      # requestheader-allowed-names: "${b.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${b.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${b.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${b.w.tlsCertFile.value}"
      # tls-cipher-suites: "${b.w.tlsCipherSuites.value}"
      # tls-min-version: "${b.w.tlsMinVersion.value}"
      # tls-private-key-file: "${b.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${b.w.tlsSniCertKey.value}"
      # vmodule: "${b.w.vmodule.value}"
      # write-config-to: "${b.w.writeConfigTo.value}"
    `}},$={},y=void 0,L={},P=[];function C(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(a,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsxs)(p.A,{groupId:"install-type",children:[(0,l.jsxs)(h.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(u.A,{language:"bash",children:i.A`
          export CLUSTER_NAME='${d.M.clusterName.value}'
          export BASE_DOMAIN='${d.M.kubernetesBaseDomain.value}'
          export FULL_HOST_NAME=${d.M.virtualMachineFullName.value}
          export INTERNAL_API=api.${d.M.kubernetesClusterExternalDomain.value}
        `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,l.jsx)(u.A,{children:i.A`
        cat <<EOF > ${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
          imagePullPolicy: IfNotPresent
          taints: null
          kubeletExtraArgs:
            cloud-provider: external
            config: "${d.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${d.M.kubernetesClusterDomain.value}
            cluster-dns: "${d.M.kubernetesDNSAddress.value}"
          # name: '$\{FULL_HOST_NAME}'
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
        clusterName: "$\{CLUSTER_NAME}"
        controlPlaneEndpoint: $\{INTERNAL_API}:${s.L.securePort.value}
        imageRepository: "${d.M.baseDockerRegistry.value}"
        networking:
          serviceSubnet: ${d.M.kubernetesServiceCIDR.value}
          dnsDomain: ${d.M.kubernetesClusterDomain.value}
        kubernetesVersion: ${v.M.kubernetes.value}
        dns: {}
        etcd:
          local:
            imageRepository: "${d.M.baseDockerRegistry.value}"
            dataDir: "/var/lib/etcd"
            extraArgs:
              ${k.data.value}
            peerCertSANs:
              - 127.0.0.1
            serverCertSANs:
              - 127.0.0.1
        apiServer:
          extraArgs:
            ${m.data.value}
          extraVolumes:
          - name: "k8s-audit"
            hostPath: "/var/log/kubernetes/audit/"
            mountPath: "/var/log/kubernetes/audit/"
            readOnly: false
            pathType: DirectoryOrCreate
          certSANs:
            - "127.0.0.1"
            # TODO для доабвления внешнего FQDN в сертификаты кластера
            # - $\{INTERNAL_API}
          timeoutForControlPlane: 4m0s
        controllerManager:
          extraArgs:
            cluster-name: "$\{CLUSTER_NAME}"
            ${g.data.value}
        scheduler:
          extraArgs:
            ${f.data.value}
        EOF
      `})]}),(0,l.jsx)(h.A,{value:"Cloud-init",children:(0,l.jsx)(u.A,{children:i.A`
        - path: ${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
          owner: root:root
          permissions: '0644'
          content: |
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
              imagePullPolicy: IfNotPresent
              taints: null
              kubeletExtraArgs:
                cloud-provider: external
                config: "${d.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${d.M.kubernetesDNSAddress.value}"

              # TODO тут нужно подумать, нужно ли определение имени узла при инициализации УК
              # name: {{ local_hostname }}

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

            clusterName: "${d.M.clusterName.value}"
            # TODO нужно указывать VIP LoadBalancer
            controlPlaneEndpoint: {{ local_hostname }}:${s.L.securePort.value}

            imageRepository: "${d.M.baseDockerRegistry.value}"

            networking:
              serviceSubnet: ${d.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${v.M.kubernetes.value}

            dns: {}
            etcd:
              local:
                imageRepository: "${d.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  ${k.data.value}
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1

            apiServer:
              extraArgs:
                ${m.data.value}

              extraVolumes:
              - name: "k8s-audit"
                hostPath: "/var/log/kubernetes/audit/"
                mountPath: "/var/log/kubernetes/audit/"
                readOnly: false
                pathType: DirectoryOrCreate
              certSANs:
                - "127.0.0.1"
              timeoutForControlPlane: 4m0s

            controllerManager:
              extraArgs:
                cluster-name: "${d.M.clusterName.value}"
                ${g.data.value}

            scheduler:
              extraArgs:
                ${f.data.value}
      `})})]})]})}function S(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(C,{...e})}):C(e)}},85421:(e,t,a)=>{a.d(t,{w:()=>o});var r=a(31798),l=a(7478);const o={authenticationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:'["/healthz","/readyz","/livez"]'},authorizationKubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${l.M.kuberneteBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},86969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configFiles","title":"configFiles","description":"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),i=a(98744),u=a(82332),n=a(75478),s=a(72608);const c={},d=void 0,v={},h=[{value:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:3},...n.toc,...u.toc,{value:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:3},...s.toc,...i.toc];function p(e){const t={h3:"h3",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h3,{id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,l.jsx)(n.default,{}),"\n",(0,l.jsx)(u.default,{}),"\n",(0,l.jsx)(t.h3,{id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,l.jsx)(s.default,{}),"\n",(0,l.jsx)(i.default,{})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},87464:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(34164);const l={tabItem:"tabItem_Ymn6"};var o=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a,children:t})}},98744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),i=a(1775),u=a(25292),n=a(60513),s=a(7478),c=a(31798);const d={},v=void 0,h={},p=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
      export MACHINE_LOCAL_ADDRESS="${s.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${s.M.clusterName.value}.${s.M.kubernetesBaseDomain.value}

    `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,l.jsx)(i.A,{children:n.A`cat <<EOF > ${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${c.h.kubeAPIServer.portNumber}
      certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${u.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}}}]);