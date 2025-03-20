"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1121],{6353:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,a)=>{a.d(t,{D:()=>o});var r=a(6353),l=a(31798);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${PORTS.etcdPeer.portNumber}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},25292:(e,t,a)=>{a.d(t,{L:()=>i});var r=a(6353),l=a(31798),o=a(7478);const i={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},28702:(e,t,a)=>{a.d(t,{D:()=>u});var r=a(60513),l=a(6353),o=a(7478),i=a(31798);const u={data:{value:r.A`
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
    `}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,a)=>{a.d(t,{A:()=>L});var r=a(96540),l=a(34164),o=a(65627),i=a(56347),u=a(50372),n=a(30604),c=a(11861),s=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,n.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,o=v(e),[i,n]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=p({queryString:a,groupId:l}),[b,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,s.Dv)(a);return[l,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:l}),$=(()=>{const e=c??b;return h({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{$&&n($)}),[$]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);n(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=a(9136);const $={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=a(74848);function k(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:u}=e;const n=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),s=e=>{const t=e.currentTarget,a=n.indexOf(t),l=u[a].value;l!==r&&(c(t),i(l))},d=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=n.indexOf(e.currentTarget)+1;t=n[a]??n[0];break}case"ArrowLeft":{const a=n.indexOf(e.currentTarget)-1;t=n[a]??n[n.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{n.push(e)},onKeyDown:d,onClick:s,...o,className:(0,l.A)("tabs__item",$.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",$.tabList),children:[(0,m.jsx)(k,{...t,...e}),(0,m.jsx)(f,{...t,...e})]})}function L(e){const t=(0,g.A)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(t))}},63770:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},77420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>L,contentTitle:()=>y,default:()=>S,frontMatter:()=>f,metadata:()=>r,toc:()=>P});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const c=function e(t){return a.withOptions=a=>e(u(u({},t),a)),a;function a(e,...a){const r="string"==typeof e?[e]:e.raw,{escapeSpecialCharacters:l=Array.isArray(e)}=t;let o="";for(let t=0;t<r.length;t++){let e=r[t];l&&(e=e.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),o+=e,t<a.length&&(o+=a[t])}const i=o.split("\n");let u=null;for(const t of i){const e=t.match(/^(\s+)\S+/);if(e){const t=e[1].length;u=u?Math.min(u,t):t}}if(null!==u){const e=u;o=i.map((t=>" "===t[0]||"\t"===t[0]?t.slice(e):t)).join("\n")}return o=o.trim(),l&&(o=o.replace(/\\n/g,"\n")),o}}({}),s=c;var d=a(1775),v=a(10119),h=a(25292),p=a(6353),b=a(7478);const g={authenticationKubeconfig:{value:`${b.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${b.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${b.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${p.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${p.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${p.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${p.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${p.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${b.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"8"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}};a(31798);var $=a(63770);a(28702);a(60513).A`

    `;var m=a(87464),k=a(62774);const f={},y=void 0,L={},P=[];function C(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(a,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsxs)(k.A,{groupId:"install-type",children:[(0,l.jsxs)(m.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(d.A,{language:"bash",children:s`
          export CLUSTER_NAME='${b.M.clusterName.value}'
          export BASE_DOMAIN='${b.M.kubernetesBaseDomain.value}'
          export CLUSTER_DOMAIN=${b.M.kubernetesClusterDomain.value}
          export FULL_HOST_NAME=${b.M.virtualMachineFullName.value}
          export INTERNAL_API=api.${b.M.kubernetesClusterDomain.value}
        `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,l.jsx)(d.A,{children:s`
        cat <<EOF > ${b.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
            config: "${b.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${b.M.kubernetesClusterDomain.value}
            cluster-dns: "${b.M.kubernetesDNSAddress.value}"
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
        controlPlaneEndpoint: $\{INTERNAL_API}:${h.L.securePort.value}
        imageRepository: "${b.M.baseDockerRegistry.value}"
        networking:
          serviceSubnet: ${b.M.kubernetesServiceCIDR.value}
          dnsDomain: ${b.M.kubernetesClusterDomain.value}
        kubernetesVersion: ${$.M.kubernetes.value}
        dns: {}
        etcd:
          local:
            imageRepository: "${b.M.baseDockerRegistry.value}"
            dataDir: "/var/lib/etcd"
            extraArgs:
              auto-compaction-retention: "${v.D.autoCompactionRetention.value}"
              cert-file: "${v.D.certFile.value}"
              client-cert-auth: "${v.D.clientCertAuth.value}"
              data-dir: "${v.D.dataDir.value}"
              election-timeout: "${v.D.electionTimeout.value}"
              experimental-initial-corrupt-check: "${v.D.experimentalInitialCorruptCheck.value}"
              experimental-watch-progress-notify-interval: "${v.D.experimentalWatchProgressNotifyInterval.value}"
              heartbeat-interval: "${v.D.heartbeatInterval.value}"
              key-file: "${v.D.keyFile.value}"
              logger: "${v.D.logger.value}"
              max-snapshots: "${v.D.maxSnapshots.value}"
              max-wals: "${v.D.maxWals.value}"
              metrics: "${v.D.metrics.value}"
              peer-cert-file: "${v.D.peerCertFile.value}"
              peer-client-cert-auth: "${v.D.peerClientCertAuth.value}"
              peer-key-file: "${v.D.peerKeyFile.value}"
              peer-trusted-ca-file: "${v.D.peerTrustedCAFile.value}"
              snapshot-count: "${v.D.snapshotCount.value}"
              trusted-ca-file: "${v.D.trustedCAFile.value}"
              listen-metrics-urls: "http://0.0.0.0:2381" # TODO
              quota-backend-bytes: "10737418240" # TODO
            peerCertSANs:
              - 127.0.0.1
            serverCertSANs:
              - 127.0.0.1
        apiServer:
          extraArgs:
            aggregator-reject-forwarding-redirect: "${h.L.aggregatorRejectForwardingRedirect.value}"
            allow-privileged: "${h.L.allowPrivileged.value}"
            anonymous-auth: "${h.L.anonymousAuth.value}"
            api-audiences: "${h.L.apiAudiences.value}"
            apiserver-count: "${h.L.apiserverCount.value}"
            audit-log-batch-buffer-size: "${h.L.auditLogBatchBufferSize.value}"
            audit-log-batch-max-size: "${h.L.auditLogBatchMaxSize.value}"
            audit-log-batch-max-wait: "${h.L.auditLogBatchMaxWait.value}"
            audit-log-batch-throttle-burst: "${h.L.auditLogBatchThrottleBurst.value}"
            audit-log-batch-throttle-enable: "${h.L.auditLogBatchThrottleEnable.value}"
            audit-log-batch-throttle-qps: "${h.L.auditLogBatchThrottleQps.value}"
            audit-log-compress: "${h.L.auditLogCompress.value}"
            audit-log-format: "${h.L.auditLogFormat.value}"
            audit-log-maxage: "${h.L.auditLogMaxage.value}"
            audit-log-maxbackup: "${h.L.auditLogMaxbackup.value}"
            audit-log-maxsize: "${h.L.auditLogMaxsize.value}"
            audit-log-mode: "${h.L.auditLogMode.value}"
            audit-log-truncate-enabled: "${h.L.auditLogTruncateEnabled.value}"
            audit-log-truncate-max-batch-size: "${h.L.auditLogTruncateMaxBatchSize.value}"
            audit-log-truncate-max-event-size: "${h.L.auditLogTruncateMaxEventSize.value}"
            audit-log-version: "${h.L.auditLogVersion.value}"
            audit-webhook-batch-buffer-size: "${h.L.auditWebhookBatchBufferSize.value}"
            audit-webhook-batch-initial-backoff: "${h.L.auditWebhookBatchInitialBackoff.value}"
            audit-webhook-batch-max-size: "${h.L.auditWebhookBatchMaxSize.value}"
            audit-webhook-batch-max-wait: "${h.L.auditWebhookBatchMaxWait.value}"
            audit-webhook-batch-throttle-burst: "${h.L.auditWebhookBatchThrottleBurst.value}"
            audit-webhook-batch-throttle-enable: "${h.L.auditWebhookBatchThrottleEnable.value}"
            audit-webhook-batch-throttle-qps: "${h.L.auditWebhookBatchThrottleQps.value}"
            audit-webhook-initial-backoff: "${h.L.auditWebhookInitialBackoff.value}"
            audit-webhook-mode: "${h.L.auditWebhookMode.value}"
            audit-webhook-truncate-enabled: "${h.L.auditWebhookTruncateEnabled.value}"
            audit-webhook-truncate-max-batch-size: "${h.L.auditWebhookTruncateMaxBatchSize.value}"
            audit-webhook-truncate-max-event-size: "${h.L.auditWebhookTruncateMaxEventSize.value}"
            audit-webhook-version: "${h.L.auditWebhookVersion.value}"
            authentication-token-webhook-cache-ttl: "${h.L.authenticationTokenWebhookCacheTtl.value}"
            authentication-token-webhook-version: "${h.L.authenticationTokenWebhookVersion.value}"
            authorization-mode: "${h.L.authorizationMode.value}"
            authorization-webhook-cache-authorized-ttl: "${h.L.authorizationWebhookCacheAuthorizedTtl.value}"
            authorization-webhook-cache-unauthorized-ttl: "${h.L.authorizationWebhookCacheUnauthorizedTtl.value}"
            authorization-webhook-version: "${h.L.authorizationWebhookVersion.value}"
            bind-address: "${h.L.bindAddress.value}"
            cert-dir: "${h.L.certDir.value}"
            client-ca-file: "${h.L.clientCaFile.value}"
            cloud-provider: "${h.L.cloudProvider.value}"
            cloud-provider-gce-l7lb-src-cidrs: "${h.L.cloudProviderGceL7lbSrcCidrs.value}"
            cloud-provider-gce-lb-src-cidrs: "${h.L.cloudProviderGceLbSrcCidrs.value}"
            contention-profiling: "${h.L.contentionProfiling.value}"
            default-not-ready-toleration-seconds: "${h.L.defaultNotReadyTolerationSeconds.value}"
            default-unreachable-toleration-seconds: "${h.L.defaultUnreachableTolerationSeconds.value}"
            default-watch-cache-size: "${h.L.defaultWatchCacheSize.value}"
            delete-collection-workers: "${h.L.deleteCollectionWorkers.value}"
            enable-admission-plugins: "${h.L.enableAdmissionPlugins.value}"
            enable-aggregator-routing: "${h.L.enableAggregatorRouting.value}"
            enable-bootstrap-token-auth: "${h.L.enableBootstrapTokenAuth.value}"
            enable-garbage-collector: "${h.L.enableGarbageCollector.value}"
            enable-logs-handler: "${h.L.enableLogsHandler.value}"
            enable-priority-and-fairness: "${h.L.enablePriorityAndFairness.value}"
            encryption-provider-config-automatic-reload: "${h.L.encryptionProviderConfigAutomaticReload.value}"
            endpoint-reconciler-type: "${h.L.endpointReconcilerType.value}"
            etcd-cafile: "${h.L.etcdCafile.value}"
            etcd-certfile: "${h.L.etcdCertfile.value}"
            etcd-compaction-interval: "${h.L.etcdCompactionInterval.value}"
            etcd-count-metric-poll-period: "${h.L.etcdCountMetricPollPeriod.value}"
            etcd-db-metric-poll-interval: "${h.L.etcdDbMetricPollInterval.value}"
            etcd-healthcheck-timeout: "${h.L.etcdHealthcheckTimeout.value}"
            etcd-keyfile: "${h.L.etcdKeyfile.value}"
            etcd-prefix: "${h.L.etcdPrefix.value}"
            etcd-readycheck-timeout: "${h.L.etcdReadycheckTimeout.value}"
            etcd-servers: "${h.L.etcdServers.value}"
            event-ttl: "${h.L.eventTtl.value}"
            feature-gates: "${h.L.featureGates.value}"
            goaway-chance: "${h.L.goawayChance.value}"
            help: "${h.L.help.value}"
            http2-max-streams-per-connection: "${h.L.http2MaxStreamsPerConnection.value}"
            kubelet-client-certificate: "${h.L.kubeletClientCertificate.value}"
            kubelet-client-key: "${h.L.kubeletClientKey.value}"
            kubelet-port: "${h.L.kubeletPort.value}"
            kubelet-preferred-address-types: "${h.L.kubeletPreferredAddressTypes.value}"
            kubelet-read-only-port: "${h.L.kubeletReadOnlyPort.value}"
            kubelet-timeout: "${h.L.kubeletTimeout.value}"
            kubernetes-service-node-port: "${h.L.kubernetesServiceNodePort.value}"
            lease-reuse-duration-seconds: "${h.L.leaseReuseDurationSeconds.value}"
            livez-grace-period: "${h.L.livezGracePeriod.value}"
            log-flush-frequency: "${h.L.logFlushFrequency.value}"
            logging-format: "${h.L.loggingFormat.value}"
            log-json-info-buffer-size: "${h.L.logJsonInfoBufferSize.value}"
            log-json-split-stream: "${h.L.logJsonSplitStream.value}"
            log-text-info-buffer-size: "${h.L.logTextInfoBufferSize.value}"
            log-text-split-stream: "${h.L.logTextSplitStream.value}"
            max-connection-bytes-per-sec: "${h.L.maxConnectionBytesPerSec.value}"
            max-mutating-requests-inflight: "${h.L.maxMutatingRequestsInflight.value}"
            max-requests-inflight: "${h.L.maxRequestsInflight.value}"
            min-request-timeout: "${h.L.minRequestTimeout.value}"
            permit-address-sharing: "${h.L.permitAddressSharing.value}"
            permit-port-sharing: "${h.L.permitPortSharing.value}"
            profiling: "${h.L.profiling.value}"
            proxy-client-cert-file: "${h.L.proxyClientCertFile.value}"
            proxy-client-key-file: "${h.L.proxyClientKeyFile.value}"
            requestheader-allowed-names: "${h.L.requestheaderAllowedNames.value}"
            requestheader-client-ca-file: "${h.L.requestheaderClientCaFile.value}"
            requestheader-extra-headers-prefix: "${h.L.requestheaderExtraHeadersPrefix.value}"
            requestheader-group-headers: "${h.L.requestheaderGroupHeaders.value}"
            requestheader-username-headers: "${h.L.requestheaderUsernameHeaders.value}"
            request-timeout: "${h.L.requestTimeout.value}"
            runtime-config: "${h.L.runtimeConfig.value}"
            secure-port: "${h.L.securePort.value}"
            service-account-extend-token-expiration: "${h.L.serviceAccountExtendTokenExpiration.value}"
            service-account-issuer: "${h.L.serviceAccountIssuer.value}"
            service-account-key-file: "${h.L.serviceAccountKeyFile.value}"
            service-account-lookup: "${h.L.serviceAccountLookup.value}"
            service-account-max-token-expiration: "${h.L.serviceAccountMaxTokenExpiration.value}"
            service-account-signing-key-file: "${h.L.serviceAccountSigningKeyFile.value}"
            service-cluster-ip-range: "${h.L.serviceClusterIpRange.value}"
            service-node-port-range: "${h.L.serviceNodePortRange.value}"
            shutdown-delay-duration: "${h.L.shutdownDelayDuration.value}"
            shutdown-send-retry-after: "${h.L.shutdownSendRetryAfter.value}"
            shutdown-watch-termination-grace-period: "${h.L.shutdownWatchTerminationGracePeriod.value}"
            storage-backend: "${h.L.storageBackend.value}"
            storage-media-type: "${h.L.storageMediaType.value}"
            tls-cert-file: "${h.L.tlsCertFile.value}"
            tls-private-key-file: "${h.L.tlsPrivateKeyFile.value}"
            v: "${h.L.v.value}"
            version: "${h.L.version.value}"
            watch-cache: "${h.L.watchCache.value}"

            # Не указывать если значение "" или undefined
            # cloud-config: "${h.L.cloudConfig.value}"
            # strict-transport-security-directives: "${h.L.strictTransportSecurityDirectives.value}"
            # disable-admission-plugins: "${h.L.disableAdmissionPlugins.value}"
            # disabled-metrics: "${h.L.disabledMetrics.value}"
            # egress-selector-config-file: "${h.L.egressSelectorConfigFile.value}"
            # encryption-provider-config: "${h.L.encryptionProviderConfig.value}"
            # etcd-servers-overrides: "${h.L.etcdServersOverrides.value}"
            # external-hostname: "${h.L.externalHostname.value}"
            # kubelet-certificate-authority: "${h.L.kubeletCertificateAuthority.value}"
            # oidc-ca-file: "${h.L.oidcCaFile.value}"
            # oidc-client-id: "${h.L.oidcClientId.value}"
            # oidc-groups-claim: "${h.L.oidcGroupsClaim.value}"
            # oidc-groups-prefix: "${h.L.oidcGroupsPrefix.value}"
            # oidc-issuer-url: "${h.L.oidcIssuerUrl.value}"
            # oidc-required-claim: "${h.L.oidcRequiredClaim.value}"
            # oidc-signing-algs: "${h.L.oidcSigningAlgs.value}"
            # oidc-username-claim: "${h.L.oidcUsernameClaim.value}"
            # oidc-username-prefix: "${h.L.oidcUsernamePrefix.value}"
            # peer-advertise-ip: "${h.L.peerAdvertiseIp.value}"
            # peer-advertise-port: "${h.L.peerAdvertisePort.value}"
            # peer-ca-file: "${h.L.peerCaFile.value}"
            # service-account-jwks-uri: "${h.L.serviceAccountJwksUri.value}"
            # show-hidden-metrics-for-version: "${h.L.showHiddenMetricsForVersion.value}"
            # tls-cipher-suites: "${h.L.tlsCipherSuites.value}"
            # tls-min-version: "${h.L.tlsMinVersion.value}"
            # tls-sni-cert-key: "${h.L.tlsSniCertKey.value}"
            # token-auth-file: "${h.L.tokenAuthFile.value}"
            # tracing-config-file: "${h.L.tracingConfigFile.value}"
            # vmodule: "${h.L.vmodule.value}"
            # watch-cache-sizes: "${h.L.watchCacheSizes.value}"
            # authorization-webhook-config-file: "${h.L.authorizationWebhookConfigFile.value}"
            # cors-allowed-origins: "${h.L.corsAllowedOrigins.value}"
            # debug-socket-path: "${h.L.debugSocketPath.value}"
            # authorization-policy-file: "${h.L.authorizationPolicyFile.value}"
            # authorization-config: "${h.L.authorizationConfig.value}"
            # authentication-token-webhook-config-file: "${h.L.authenticationTokenWebhookConfigFile.value}"
            # authentication-config: "${h.L.authenticationConfig.value}"
            # audit-webhook-config-file: "${h.L.auditWebhookConfigFile.value}"
            # audit-policy-file: "${h.L.auditPolicyFile.value}"
            # audit-log-path: "${h.L.auditLogPath.value}"
            # allow-metric-labels: "${h.L.allowMetricLabels.value}"
            # allow-metric-labels-manifest: "${h.L.allowMetricLabelsManifest.value}"
            # admission-control: "${h.L.admissionControl.value}"
            # admission-control-config-file: "${h.L.admissionControlConfigFile.value}"
            # advertise-address: "${h.L.advertiseAddress.value}"

          extraVolumes:
          - name: "k8s-audit"
            hostPath: "/var/log/kubernetes/audit/"
            mountPath: "/var/log/kubernetes/audit/"
            readOnly: false
            pathType: DirectoryOrCreate

          certSANs:
            - "127.0.0.1"
            # TODO для доабвления внешнего FQDN в сертификаты кластера
            # - api.$\{CLUSTER_NAME}.$\{EXTERNAL_DOMAIN}

          timeoutForControlPlane: 4m0s

        controllerManager:
          extraArgs:
            allocate-node-cidrs: "${g.allocateNodeCidrs.value}"
            allow-untagged-cloud: "${g.allowUntaggedCloud.value}"
            attach-detach-reconcile-sync-period: "${g.attachDetachReconcileSyncPeriod.value}"
            authentication-kubeconfig: "${g.authenticationKubeconfig.value}"
            authentication-skip-lookup: "${g.authenticationSkipLookup.value}"
            authentication-token-webhook-cache-ttl: "${g.authenticationTokenWebhookCacheTtl.value}"
            authentication-tolerate-lookup-failure: "${g.authenticationTolerateLookupFailure.value}"
            authorization-always-allow-paths: "${g.authorizationAlwaysAllowPaths.value}"
            authorization-kubeconfig: "${g.authorizationKubeconfig.value}"
            authorization-webhook-cache-authorized-ttl: "${g.authorizationWebhookCacheAuthorizedTtl.value}"
            authorization-webhook-cache-unauthorized-ttl: "${g.authorizationWebhookCacheUnauthorizedTtl.value}"
            bind-address: "${g.bindAddress.value}"

            cidr-allocator-type: "${g.cidrAllocatorType.value}"
            client-ca-file: "${g.clientCaFile.value}"

            cloud-provider: "${g.cloudProvider.value}"
            cloud-provider-gce-lb-src-cidrs: "${g.cloudProviderGceLbSrcCidrs.value}"
            cluster-name: "${g.clusterName.value}"

            cluster-signing-cert-file: "${g.clusterSigningCertFile.value}"
            cluster-signing-duration: "${g.clusterSigningDuration.value}"
            cluster-signing-key-file: "${g.clusterSigningKeyFile.value}"

            # Не указывать если значение "" или undefined
            # cluster-signing-kube-apiserver-client-cert-file: "${g.clusterSigningKubeApiserverClientCertFile.value}"
            # cluster-signing-kube-apiserver-client-key-file: "${g.clusterSigningKubeApiserverClientKeyFile.value}"
            # cluster-signing-kubelet-client-cert-file: "${g.clusterSigningKubeletClientCertFile.value}"
            # cluster-signing-kubelet-client-key-file: "${g.clusterSigningKubeletClientKeyFile.value}"
            # cluster-signing-kubelet-serving-cert-file: "${g.clusterSigningKubeletServingCertFile.value}"
            # cluster-signing-kubelet-serving-key-file: "${g.clusterSigningKubeletServingKeyFile.value}"
            # cluster-signing-legacy-unknown-cert-file: "${g.clusterSigningLegacyUnknownCertFile.value}"
            # cluster-signing-legacy-unknown-key-file: "${g.clusterSigningLegacyUnknownKeyFile.value}"
            # cluster-cidr: "${g.clusterCidr.value}"
            # cloud-config: "${g.cloudConfig.value}"
            # cert-dir: "${g.certDir.value}"
            # allow-metric-labels-manifest: "${g.allowMetricLabelsManifest.value}"
            # allow-metric-labels: "${g.allowMetricLabels.value}"
            # disabled-metrics: "${g.disabledMetrics.value}"
            # leader-migration-config: "${g.leaderMigrationConfig.value}"
            # master: "${g.master.value}"
            # pv-recycler-pod-template-filepath-hostpath: "${g.pvRecyclerPodTemplateFilepathHostpath.value}"
            # pv-recycler-pod-template-filepath-nfs: "${g.pvRecyclerPodTemplateFilepathNfs.value}"
            # service-cluster-ip-range: "${g.serviceClusterIpRange.value}"
            # show-hidden-metrics-for-version: "${g.showHiddenMetricsForVersion.value}"
            # tls-cert-file: "${g.tlsCertFile.value}"
            # tls-cipher-suites: "${g.tlsCipherSuites.value}"
            # tls-min-version: "${g.tlsMinVersion.value}"
            # tls-private-key-file: "${g.tlsPrivateKeyFile.value}"
            # tls-sni-cert-key: "${g.tlsSniCertKey.value}"
            # vmodule: "${g.vmodule.value}"
            # volume-host-cidr-denylist: "${g.volumeHostCidrDenylist.value}"
            # external-cloud-volume-plugin: "${g.externalCloudVolumePlugin.value}"
            # requestheader-allowed-names: "${g.requestheaderAllowedNames.value}"

            concurrent-cron-job-syncs: "${g.concurrentCronJobSyncs.value}"
            concurrent-deployment-syncs: "${g.concurrentDeploymentSyncs.value}"
            concurrent-endpoint-syncs: "${g.concurrentEndpointSyncs.value}"
            concurrent-ephemeralvolume-syncs: "${g.concurrentEphemeralvolumeSyncs.value}"
            concurrent-gc-syncs: "${g.concurrentGcSyncs.value}"
            concurrent-horizontal-pod-autoscaler-syncs: "${g.concurrentHorizontalPodAutoscalerSyncs.value}"
            concurrent-job-syncs: "${g.concurrentJobSyncs.value}"
            concurrent-namespace-syncs: "${g.concurrentNamespaceSyncs.value}"
            concurrent-rc-syncs: "${g.concurrentRcSyncs.value}"
            concurrent-replicaset-syncs: "${g.concurrentReplicasetSyncs.value}"
            concurrent-resource-quota-syncs: "${g.concurrentResourceQuotaSyncs.value}"
            concurrent-service-endpoint-syncs: "${g.concurrentServiceEndpointSyncs.value}"
            concurrent-service-syncs: "${g.concurrentServiceSyncs.value}"
            concurrent-serviceaccount-token-syncs: "${g.concurrentServiceaccountTokenSyncs.value}"
            concurrent-statefulset-syncs: "${g.concurrentStatefulsetSyncs.value}"
            concurrent-ttl-after-finished-syncs: "${g.concurrentTtlAfterFinishedSyncs.value}"
            concurrent-validating-admission-policy-status-syncs: "${g.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
            configure-cloud-routes: "${g.configureCloudRoutes.value}"
            contention-profiling: "${g.contentionProfiling.value}"
            controller-start-interval: "${g.controllerStartInterval.value}"
            controllers: "${g.controllers.value}"
            disable-attach-detach-reconcile-sync: "${g.disableAttachDetachReconcileSync.value}"
            disable-force-detach-on-timeout: "${g.disableForceDetachOnTimeout.value}"
            enable-dynamic-provisioning: "${g.enableDynamicProvisioning.value}"
            enable-garbage-collector: "${g.enableGarbageCollector.value}"
            enable-hostpath-provisioner: "${g.enableHostpathProvisioner.value}"
            enable-leader-migration: "${g.enableLeaderMigration.value}"
            endpoint-updates-batch-period: "${g.endpointUpdatesBatchPeriod.value}"
            endpointslice-updates-batch-period: "${g.endpointsliceUpdatesBatchPeriod.value}"
            feature-gates: "${g.featureGates.value}"
            flex-volume-plugin-dir: "${g.flexVolumePluginDir.value}"
            help: "${g.help.value}"
            horizontal-pod-autoscaler-cpu-initialization-period: "${g.horizontalPodAutoscalerCpuInitializationPeriod.value}"
            horizontal-pod-autoscaler-downscale-delay: "${g.horizontalPodAutoscalerDownscaleDelay.value}"
            horizontal-pod-autoscaler-downscale-stabilization: "${g.horizontalPodAutoscalerDownscaleStabilization.value}"
            horizontal-pod-autoscaler-initial-readiness-delay: "${g.horizontalPodAutoscalerInitialReadinessDelay.value}"
            horizontal-pod-autoscaler-sync-period: "${g.horizontalPodAutoscalerSyncPeriod.value}"
            horizontal-pod-autoscaler-tolerance: "${g.horizontalPodAutoscalerTolerance.value}"
            horizontal-pod-autoscaler-upscale-delay: "${g.horizontalPodAutoscalerUpscaleDelay.value}"
            http2-max-streams-per-connection: "${g.http2MaxStreamsPerConnection.value}"
            kube-api-burst: "${g.kubeApiBurst.value}"
            kube-api-content-type: "${g.kubeApiContentType.value}"
            kube-api-qps: "${g.kubeApiQps.value}"
            kubeconfig: "${g.kubeconfig.value}"
            large-cluster-size-threshold: "${g.largeClusterSizeThreshold.value}"
            leader-elect: "${g.leaderElect.value}"
            leader-elect-lease-duration: "${g.leaderElectLeaseDuration.value}"
            leader-elect-renew-deadline: "${g.leaderElectRenewDeadline.value}"
            leader-elect-resource-lock: "${g.leaderElectResourceLock.value}"
            leader-elect-resource-name: "${g.leaderElectResourceName.value}"
            leader-elect-resource-namespace: "${g.leaderElectResourceNamespace.value}"
            leader-elect-retry-period: "${g.leaderElectRetryPeriod.value}"
            legacy-service-account-token-clean-up-period: "${g.legacyServiceAccountTokenCleanUpPeriod.value}"
            log-flush-frequency: "${g.logFlushFrequency.value}"
            log-json-info-buffer-size: "${g.logJsonInfoBufferSize.value}"
            log-json-split-stream: "${g.logJsonSplitStream.value}"
            log-text-info-buffer-size: "${g.logTextInfoBufferSize.value}"
            log-text-split-stream: "${g.logTextSplitStream.value}"
            logging-format: "${g.loggingFormat.value}"
            max-endpoints-per-slice: "${g.maxEndpointsPerSlice.value}"
            min-resync-period: "${g.minResyncPeriod.value}"
            mirroring-concurrent-service-endpoint-syncs: "${g.mirroringConcurrentServiceEndpointSyncs.value}"
            mirroring-endpointslice-updates-batch-period: "${g.mirroringEndpointsliceUpdatesBatchPeriod.value}"
            mirroring-max-endpoints-per-subset: "${g.mirroringMaxEndpointsPerSubset.value}"
            namespace-sync-period: "${g.namespaceSyncPeriod.value}"
            node-cidr-mask-size: "${g.nodeCidrMaskSize.value}"
            node-cidr-mask-size-ipv4: "${g.nodeCidrMaskSizeIpv4.value}"
            node-cidr-mask-size-ipv6: "${g.nodeCidrMaskSizeIpv6.value}"
            node-eviction-rate: "${g.nodeEvictionRate.value}"
            node-monitor-grace-period: "${g.nodeMonitorGracePeriod.value}"
            node-monitor-period: "${g.nodeMonitorPeriod.value}"
            node-startup-grace-period: "${g.nodeStartupGracePeriod.value}"
            node-sync-period: "${g.nodeSyncPeriod.value}"
            permit-address-sharing: "${g.permitAddressSharing.value}"
            permit-port-sharing: "${g.permitPortSharing.value}"
            profiling: "${g.profiling.value}"
            pv-recycler-increment-timeout-nfs: "${g.pvRecyclerIncrementTimeoutNfs.value}"
            pv-recycler-minimum-timeout-hostpath: "${g.pvRecyclerMinimumTimeoutHostpath.value}"
            pv-recycler-minimum-timeout-nfs: "${g.pvRecyclerMinimumTimeoutNfs.value}"
            pv-recycler-timeout-increment-hostpath: "${g.pvRecyclerTimeoutIncrementHostpath.value}"
            pvclaimbinder-sync-period: "${g.pvclaimbinderSyncPeriod.value}"
            requestheader-client-ca-file: "${g.requestheaderClientCaFile.value}"
            requestheader-extra-headers-prefix: "${g.requestheaderExtraHeadersPrefix.value}"
            requestheader-group-headers: "${g.requestheaderGroupHeaders.value}"
            requestheader-username-headers: "${g.requestheaderUsernameHeaders.value}"
            resource-quota-sync-period: "${g.resourceQuotaSyncPeriod.value}"
            root-ca-file: "${g.rootCaFile.value}"
            route-reconciliation-period: "${g.routeReconciliationPeriod.value}"
            secondary-node-eviction-rate: "${g.secondaryNodeEvictionRate.value}"
            secure-port: "${g.securePort.value}"
            service-account-private-key-file: "${g.serviceAccountPrivateKeyFile.value}"
            terminated-pod-gc-threshold: "${g.terminatedPodGcThreshold.value}"
            unhealthy-zone-threshold: "${g.unhealthyZoneThreshold.value}"
            use-service-account-credentials: "${g.useServiceAccountCredentials.value}"
            v: "${g.v.value}"
            version: "${g.version.value}"
            volume-host-allow-local-loopback: "${g.volumeHostAllowLocalLoopback.value}"

        scheduler:
          extraArgs:
            bind-address: 0.0.0.0
            leader-elect: "true"
        EOF
      `})]}),(0,l.jsx)(m.A,{value:"Cloud-init",children:(0,l.jsx)(d.A,{children:s`
        - path: ${b.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
                config: "${b.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${b.M.kubernetesDNSAddress.value}"

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

            clusterName: "$\{CLUSTER_NAME}"
            # TODO нужно указывать VIP LoadBalancer
            controlPlaneEndpoint: {{ local_hostname }}:${h.L.securePort.value}

            imageRepository: "${b.M.baseDockerRegistry.value}"
            networking:
              serviceSubnet: ${b.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${$.M.kubernetes.value}
            dns: {}
            etcd:
              local:
                imageRepository: "${b.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  auto-compaction-retention: "${v.D.autoCompactionRetention.value}"
                  cert-file: "${v.D.certFile.value}"
                  client-cert-auth: "${v.D.clientCertAuth.value}"
                  data-dir: "${v.D.dataDir.value}"
                  election-timeout: "${v.D.electionTimeout.value}"
                  experimental-initial-corrupt-check: "${v.D.experimentalInitialCorruptCheck.value}"
                  experimental-watch-progress-notify-interval: "${v.D.experimentalWatchProgressNotifyInterval.value}"
                  heartbeat-interval: "${v.D.heartbeatInterval.value}"
                  key-file: "${v.D.keyFile.value}"
                  logger: "${v.D.logger.value}"
                  max-snapshots: "${v.D.maxSnapshots.value}"
                  max-wals: "${v.D.maxWals.value}"
                  metrics: "${v.D.metrics.value}"
                  peer-cert-file: "${v.D.peerCertFile.value}"
                  peer-client-cert-auth: "${v.D.peerClientCertAuth.value}"
                  peer-key-file: "${v.D.peerKeyFile.value}"
                  peer-trusted-ca-file: "${v.D.peerTrustedCAFile.value}"
                  snapshot-count: "${v.D.snapshotCount.value}"
                  trusted-ca-file: "${v.D.trustedCAFile.value}"
                  listen-metrics-urls: "http://0.0.0.0:2381" # TODO
                  quota-backend-bytes: "10737418240" # TODO
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1
            apiServer:
              extraArgs:
                aggregator-reject-forwarding-redirect: "${h.L.aggregatorRejectForwardingRedirect.value}"
                allow-privileged: "${h.L.allowPrivileged.value}"
                anonymous-auth: "${h.L.anonymousAuth.value}"
                api-audiences: "${h.L.apiAudiences.value}"
                apiserver-count: "${h.L.apiserverCount.value}"
                audit-log-batch-buffer-size: "${h.L.auditLogBatchBufferSize.value}"
                audit-log-batch-max-size: "${h.L.auditLogBatchMaxSize.value}"
                audit-log-batch-max-wait: "${h.L.auditLogBatchMaxWait.value}"
                audit-log-batch-throttle-burst: "${h.L.auditLogBatchThrottleBurst.value}"
                audit-log-batch-throttle-enable: "${h.L.auditLogBatchThrottleEnable.value}"
                audit-log-batch-throttle-qps: "${h.L.auditLogBatchThrottleQps.value}"
                audit-log-compress: "${h.L.auditLogCompress.value}"
                audit-log-format: "${h.L.auditLogFormat.value}"
                audit-log-maxage: "${h.L.auditLogMaxage.value}"
                audit-log-maxbackup: "${h.L.auditLogMaxbackup.value}"
                audit-log-maxsize: "${h.L.auditLogMaxsize.value}"
                audit-log-mode: "${h.L.auditLogMode.value}"
                audit-log-truncate-enabled: "${h.L.auditLogTruncateEnabled.value}"
                audit-log-truncate-max-batch-size: "${h.L.auditLogTruncateMaxBatchSize.value}"
                audit-log-truncate-max-event-size: "${h.L.auditLogTruncateMaxEventSize.value}"
                audit-log-version: "${h.L.auditLogVersion.value}"
                audit-webhook-batch-buffer-size: "${h.L.auditWebhookBatchBufferSize.value}"
                audit-webhook-batch-initial-backoff: "${h.L.auditWebhookBatchInitialBackoff.value}"
                audit-webhook-batch-max-size: "${h.L.auditWebhookBatchMaxSize.value}"
                audit-webhook-batch-max-wait: "${h.L.auditWebhookBatchMaxWait.value}"
                audit-webhook-batch-throttle-burst: "${h.L.auditWebhookBatchThrottleBurst.value}"
                audit-webhook-batch-throttle-enable: "${h.L.auditWebhookBatchThrottleEnable.value}"
                audit-webhook-batch-throttle-qps: "${h.L.auditWebhookBatchThrottleQps.value}"
                audit-webhook-initial-backoff: "${h.L.auditWebhookInitialBackoff.value}"
                audit-webhook-mode: "${h.L.auditWebhookMode.value}"
                audit-webhook-truncate-enabled: "${h.L.auditWebhookTruncateEnabled.value}"
                audit-webhook-truncate-max-batch-size: "${h.L.auditWebhookTruncateMaxBatchSize.value}"
                audit-webhook-truncate-max-event-size: "${h.L.auditWebhookTruncateMaxEventSize.value}"
                audit-webhook-version: "${h.L.auditWebhookVersion.value}"
                authentication-token-webhook-cache-ttl: "${h.L.authenticationTokenWebhookCacheTtl.value}"
                authentication-token-webhook-version: "${h.L.authenticationTokenWebhookVersion.value}"
                authorization-mode: "${h.L.authorizationMode.value}"
                authorization-webhook-cache-authorized-ttl: "${h.L.authorizationWebhookCacheAuthorizedTtl.value}"
                authorization-webhook-cache-unauthorized-ttl: "${h.L.authorizationWebhookCacheUnauthorizedTtl.value}"
                authorization-webhook-version: "${h.L.authorizationWebhookVersion.value}"
                bind-address: "${h.L.bindAddress.value}"
                cert-dir: "${h.L.certDir.value}"
                client-ca-file: "${h.L.clientCaFile.value}"
                cloud-provider: "${h.L.cloudProvider.value}"
                cloud-provider-gce-l7lb-src-cidrs: "${h.L.cloudProviderGceL7lbSrcCidrs.value}"
                cloud-provider-gce-lb-src-cidrs: "${h.L.cloudProviderGceLbSrcCidrs.value}"
                contention-profiling: "${h.L.contentionProfiling.value}"
                default-not-ready-toleration-seconds: "${h.L.defaultNotReadyTolerationSeconds.value}"
                default-unreachable-toleration-seconds: "${h.L.defaultUnreachableTolerationSeconds.value}"
                default-watch-cache-size: "${h.L.defaultWatchCacheSize.value}"
                delete-collection-workers: "${h.L.deleteCollectionWorkers.value}"
                enable-admission-plugins: "${h.L.enableAdmissionPlugins.value}"
                enable-aggregator-routing: "${h.L.enableAggregatorRouting.value}"
                enable-bootstrap-token-auth: "${h.L.enableBootstrapTokenAuth.value}"
                enable-garbage-collector: "${h.L.enableGarbageCollector.value}"
                enable-logs-handler: "${h.L.enableLogsHandler.value}"
                enable-priority-and-fairness: "${h.L.enablePriorityAndFairness.value}"
                encryption-provider-config-automatic-reload: "${h.L.encryptionProviderConfigAutomaticReload.value}"
                endpoint-reconciler-type: "${h.L.endpointReconcilerType.value}"
                etcd-cafile: "${h.L.etcdCafile.value}"
                etcd-certfile: "${h.L.etcdCertfile.value}"
                etcd-compaction-interval: "${h.L.etcdCompactionInterval.value}"
                etcd-count-metric-poll-period: "${h.L.etcdCountMetricPollPeriod.value}"
                etcd-db-metric-poll-interval: "${h.L.etcdDbMetricPollInterval.value}"
                etcd-healthcheck-timeout: "${h.L.etcdHealthcheckTimeout.value}"
                etcd-keyfile: "${h.L.etcdKeyfile.value}"
                etcd-prefix: "${h.L.etcdPrefix.value}"
                etcd-readycheck-timeout: "${h.L.etcdReadycheckTimeout.value}"
                etcd-servers: "${h.L.etcdServers.value}"
                event-ttl: "${h.L.eventTtl.value}"
                feature-gates: "${h.L.featureGates.value}"
                goaway-chance: "${h.L.goawayChance.value}"
                help: "${h.L.help.value}"
                http2-max-streams-per-connection: "${h.L.http2MaxStreamsPerConnection.value}"
                kubelet-client-certificate: "${h.L.kubeletClientCertificate.value}"
                kubelet-client-key: "${h.L.kubeletClientKey.value}"
                kubelet-port: "${h.L.kubeletPort.value}"
                kubelet-preferred-address-types: "${h.L.kubeletPreferredAddressTypes.value}"
                kubelet-read-only-port: "${h.L.kubeletReadOnlyPort.value}"
                kubelet-timeout: "${h.L.kubeletTimeout.value}"
                kubernetes-service-node-port: "${h.L.kubernetesServiceNodePort.value}"
                lease-reuse-duration-seconds: "${h.L.leaseReuseDurationSeconds.value}"
                livez-grace-period: "${h.L.livezGracePeriod.value}"
                log-flush-frequency: "${h.L.logFlushFrequency.value}"
                logging-format: "${h.L.loggingFormat.value}"
                log-json-info-buffer-size: "${h.L.logJsonInfoBufferSize.value}"
                log-json-split-stream: "${h.L.logJsonSplitStream.value}"
                log-text-info-buffer-size: "${h.L.logTextInfoBufferSize.value}"
                log-text-split-stream: "${h.L.logTextSplitStream.value}"
                max-connection-bytes-per-sec: "${h.L.maxConnectionBytesPerSec.value}"
                max-mutating-requests-inflight: "${h.L.maxMutatingRequestsInflight.value}"
                max-requests-inflight: "${h.L.maxRequestsInflight.value}"
                min-request-timeout: "${h.L.minRequestTimeout.value}"
                permit-address-sharing: "${h.L.permitAddressSharing.value}"
                permit-port-sharing: "${h.L.permitPortSharing.value}"
                profiling: "${h.L.profiling.value}"
                proxy-client-cert-file: "${h.L.proxyClientCertFile.value}"
                proxy-client-key-file: "${h.L.proxyClientKeyFile.value}"
                requestheader-allowed-names: "${h.L.requestheaderAllowedNames.value}"
                requestheader-client-ca-file: "${h.L.requestheaderClientCaFile.value}"
                requestheader-extra-headers-prefix: "${h.L.requestheaderExtraHeadersPrefix.value}"
                requestheader-group-headers: "${h.L.requestheaderGroupHeaders.value}"
                requestheader-username-headers: "${h.L.requestheaderUsernameHeaders.value}"
                request-timeout: "${h.L.requestTimeout.value}"
                runtime-config: "${h.L.runtimeConfig.value}"
                secure-port: "${h.L.securePort.value}"
                service-account-extend-token-expiration: "${h.L.serviceAccountExtendTokenExpiration.value}"

                # TODO
                # service-account-issuer: "${h.L.serviceAccountIssuer.value}"
                service-account-issuer: https://kubernetes.default.svc.cluster.local

                service-account-key-file: "${h.L.serviceAccountKeyFile.value}"
                service-account-lookup: "${h.L.serviceAccountLookup.value}"
                service-account-max-token-expiration: "${h.L.serviceAccountMaxTokenExpiration.value}"
                service-account-signing-key-file: "${h.L.serviceAccountSigningKeyFile.value}"
                service-cluster-ip-range: "${h.L.serviceClusterIpRange.value}"
                service-node-port-range: "${h.L.serviceNodePortRange.value}"
                shutdown-delay-duration: "${h.L.shutdownDelayDuration.value}"
                shutdown-send-retry-after: "${h.L.shutdownSendRetryAfter.value}"
                shutdown-watch-termination-grace-period: "${h.L.shutdownWatchTerminationGracePeriod.value}"
                storage-backend: "${h.L.storageBackend.value}"
                storage-media-type: "${h.L.storageMediaType.value}"
                tls-cert-file: "${h.L.tlsCertFile.value}"
                tls-private-key-file: "${h.L.tlsPrivateKeyFile.value}"
                v: "${h.L.v.value}"
                version: "${h.L.version.value}"
                watch-cache: "${h.L.watchCache.value}"

                # Не указывать если значение "" или undefined
                # cloud-config: "${h.L.cloudConfig.value}"
                # strict-transport-security-directives: "${h.L.strictTransportSecurityDirectives.value}"
                # disable-admission-plugins: "${h.L.disableAdmissionPlugins.value}"
                # disabled-metrics: "${h.L.disabledMetrics.value}"
                # egress-selector-config-file: "${h.L.egressSelectorConfigFile.value}"
                # encryption-provider-config: "${h.L.encryptionProviderConfig.value}"
                # etcd-servers-overrides: "${h.L.etcdServersOverrides.value}"
                # external-hostname: "${h.L.externalHostname.value}"
                # kubelet-certificate-authority: "${h.L.kubeletCertificateAuthority.value}"
                # oidc-ca-file: "${h.L.oidcCaFile.value}"
                # oidc-client-id: "${h.L.oidcClientId.value}"
                # oidc-groups-claim: "${h.L.oidcGroupsClaim.value}"
                # oidc-groups-prefix: "${h.L.oidcGroupsPrefix.value}"
                # oidc-issuer-url: "${h.L.oidcIssuerUrl.value}"
                # oidc-required-claim: "${h.L.oidcRequiredClaim.value}"
                # oidc-signing-algs: "${h.L.oidcSigningAlgs.value}"
                # oidc-username-claim: "${h.L.oidcUsernameClaim.value}"
                # oidc-username-prefix: "${h.L.oidcUsernamePrefix.value}"
                # peer-advertise-ip: "${h.L.peerAdvertiseIp.value}"
                # peer-advertise-port: "${h.L.peerAdvertisePort.value}"
                # peer-ca-file: "${h.L.peerCaFile.value}"
                # service-account-jwks-uri: "${h.L.serviceAccountJwksUri.value}"
                # show-hidden-metrics-for-version: "${h.L.showHiddenMetricsForVersion.value}"
                # tls-cipher-suites: "${h.L.tlsCipherSuites.value}"
                # tls-min-version: "${h.L.tlsMinVersion.value}"
                # tls-sni-cert-key: "${h.L.tlsSniCertKey.value}"
                # token-auth-file: "${h.L.tokenAuthFile.value}"
                # tracing-config-file: "${h.L.tracingConfigFile.value}"
                # vmodule: "${h.L.vmodule.value}"
                # watch-cache-sizes: "${h.L.watchCacheSizes.value}"
                # authorization-webhook-config-file: "${h.L.authorizationWebhookConfigFile.value}"
                # cors-allowed-origins: "${h.L.corsAllowedOrigins.value}"
                # debug-socket-path: "${h.L.debugSocketPath.value}"
                # authorization-policy-file: "${h.L.authorizationPolicyFile.value}"
                # authorization-config: "${h.L.authorizationConfig.value}"
                # authentication-token-webhook-config-file: "${h.L.authenticationTokenWebhookConfigFile.value}"
                # authentication-config: "${h.L.authenticationConfig.value}"
                # audit-webhook-config-file: "${h.L.auditWebhookConfigFile.value}"
                # audit-policy-file: "${h.L.auditPolicyFile.value}"
                # audit-log-path: "${h.L.auditLogPath.value}"
                # allow-metric-labels: "${h.L.allowMetricLabels.value}"
                # allow-metric-labels-manifest: "${h.L.allowMetricLabelsManifest.value}"
                # admission-control: "${h.L.admissionControl.value}"
                # admission-control-config-file: "${h.L.admissionControlConfigFile.value}"
                # advertise-address: "${h.L.advertiseAddress.value}"

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
                allocate-node-cidrs: "${g.allocateNodeCidrs.value}"
                allow-untagged-cloud: "${g.allowUntaggedCloud.value}"
                attach-detach-reconcile-sync-period: "${g.attachDetachReconcileSyncPeriod.value}"
                authentication-kubeconfig: "${g.authenticationKubeconfig.value}"
                authentication-skip-lookup: "${g.authenticationSkipLookup.value}"
                authentication-token-webhook-cache-ttl: "${g.authenticationTokenWebhookCacheTtl.value}"
                authentication-tolerate-lookup-failure: "${g.authenticationTolerateLookupFailure.value}"
                authorization-always-allow-paths: "${g.authorizationAlwaysAllowPaths.value}"
                authorization-kubeconfig: "${g.authorizationKubeconfig.value}"
                authorization-webhook-cache-authorized-ttl: "${g.authorizationWebhookCacheAuthorizedTtl.value}"
                authorization-webhook-cache-unauthorized-ttl: "${g.authorizationWebhookCacheUnauthorizedTtl.value}"
                bind-address: "${g.bindAddress.value}"

                cidr-allocator-type: "${g.cidrAllocatorType.value}"
                client-ca-file: "${g.clientCaFile.value}"

                cloud-provider: "${g.cloudProvider.value}"
                cloud-provider-gce-lb-src-cidrs: "${g.cloudProviderGceLbSrcCidrs.value}"

                # cluster-name: "${g.clusterName.value}"
                # TODO
                cluster-name: example

                cluster-signing-cert-file: "${g.clusterSigningCertFile.value}"
                cluster-signing-duration: "${g.clusterSigningDuration.value}"
                cluster-signing-key-file: "${g.clusterSigningKeyFile.value}"

                # Не указывать если значение "" или undefined
                # cluster-signing-kube-apiserver-client-cert-file: "${g.clusterSigningKubeApiserverClientCertFile.value}"
                # cluster-signing-kube-apiserver-client-key-file: "${g.clusterSigningKubeApiserverClientKeyFile.value}"
                # cluster-signing-kubelet-client-cert-file: "${g.clusterSigningKubeletClientCertFile.value}"
                # cluster-signing-kubelet-client-key-file: "${g.clusterSigningKubeletClientKeyFile.value}"
                # cluster-signing-kubelet-serving-cert-file: "${g.clusterSigningKubeletServingCertFile.value}"
                # cluster-signing-kubelet-serving-key-file: "${g.clusterSigningKubeletServingKeyFile.value}"
                # cluster-signing-legacy-unknown-cert-file: "${g.clusterSigningLegacyUnknownCertFile.value}"
                # cluster-signing-legacy-unknown-key-file: "${g.clusterSigningLegacyUnknownKeyFile.value}"
                # cluster-cidr: "${g.clusterCidr.value}"
                # cloud-config: "${g.cloudConfig.value}"
                # cert-dir: "${g.certDir.value}"
                # allow-metric-labels-manifest: "${g.allowMetricLabelsManifest.value}"
                # allow-metric-labels: "${g.allowMetricLabels.value}"
                # disabled-metrics: "${g.disabledMetrics.value}"
                # leader-migration-config: "${g.leaderMigrationConfig.value}"
                # master: "${g.master.value}"
                # pv-recycler-pod-template-filepath-hostpath: "${g.pvRecyclerPodTemplateFilepathHostpath.value}"
                # pv-recycler-pod-template-filepath-nfs: "${g.pvRecyclerPodTemplateFilepathNfs.value}"
                # service-cluster-ip-range: "${g.serviceClusterIpRange.value}"
                # show-hidden-metrics-for-version: "${g.showHiddenMetricsForVersion.value}"
                # tls-cert-file: "${g.tlsCertFile.value}"
                # tls-cipher-suites: "${g.tlsCipherSuites.value}"
                # tls-min-version: "${g.tlsMinVersion.value}"
                # tls-private-key-file: "${g.tlsPrivateKeyFile.value}"
                # tls-sni-cert-key: "${g.tlsSniCertKey.value}"
                # vmodule: "${g.vmodule.value}"
                # volume-host-cidr-denylist: "${g.volumeHostCidrDenylist.value}"
                # external-cloud-volume-plugin: "${g.externalCloudVolumePlugin.value}"
                # requestheader-allowed-names: "${g.requestheaderAllowedNames.value}"

                concurrent-cron-job-syncs: "${g.concurrentCronJobSyncs.value}"
                concurrent-deployment-syncs: "${g.concurrentDeploymentSyncs.value}"
                concurrent-endpoint-syncs: "${g.concurrentEndpointSyncs.value}"
                concurrent-ephemeralvolume-syncs: "${g.concurrentEphemeralvolumeSyncs.value}"
                concurrent-gc-syncs: "${g.concurrentGcSyncs.value}"
                concurrent-horizontal-pod-autoscaler-syncs: "${g.concurrentHorizontalPodAutoscalerSyncs.value}"
                concurrent-job-syncs: "${g.concurrentJobSyncs.value}"
                concurrent-namespace-syncs: "${g.concurrentNamespaceSyncs.value}"
                concurrent-rc-syncs: "${g.concurrentRcSyncs.value}"
                concurrent-replicaset-syncs: "${g.concurrentReplicasetSyncs.value}"
                concurrent-resource-quota-syncs: "${g.concurrentResourceQuotaSyncs.value}"
                concurrent-service-endpoint-syncs: "${g.concurrentServiceEndpointSyncs.value}"
                concurrent-service-syncs: "${g.concurrentServiceSyncs.value}"
                concurrent-serviceaccount-token-syncs: "${g.concurrentServiceaccountTokenSyncs.value}"
                concurrent-statefulset-syncs: "${g.concurrentStatefulsetSyncs.value}"
                concurrent-ttl-after-finished-syncs: "${g.concurrentTtlAfterFinishedSyncs.value}"
                concurrent-validating-admission-policy-status-syncs: "${g.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
                configure-cloud-routes: "${g.configureCloudRoutes.value}"
                contention-profiling: "${g.contentionProfiling.value}"
                controller-start-interval: "${g.controllerStartInterval.value}"
                controllers: "${g.controllers.value}"
                disable-attach-detach-reconcile-sync: "${g.disableAttachDetachReconcileSync.value}"
                disable-force-detach-on-timeout: "${g.disableForceDetachOnTimeout.value}"
                enable-dynamic-provisioning: "${g.enableDynamicProvisioning.value}"
                enable-garbage-collector: "${g.enableGarbageCollector.value}"
                enable-hostpath-provisioner: "${g.enableHostpathProvisioner.value}"
                enable-leader-migration: "${g.enableLeaderMigration.value}"
                endpoint-updates-batch-period: "${g.endpointUpdatesBatchPeriod.value}"
                endpointslice-updates-batch-period: "${g.endpointsliceUpdatesBatchPeriod.value}"
                feature-gates: "${g.featureGates.value}"
                flex-volume-plugin-dir: "${g.flexVolumePluginDir.value}"
                help: "${g.help.value}"
                horizontal-pod-autoscaler-cpu-initialization-period: "${g.horizontalPodAutoscalerCpuInitializationPeriod.value}"
                horizontal-pod-autoscaler-downscale-delay: "${g.horizontalPodAutoscalerDownscaleDelay.value}"
                horizontal-pod-autoscaler-downscale-stabilization: "${g.horizontalPodAutoscalerDownscaleStabilization.value}"
                horizontal-pod-autoscaler-initial-readiness-delay: "${g.horizontalPodAutoscalerInitialReadinessDelay.value}"
                horizontal-pod-autoscaler-sync-period: "${g.horizontalPodAutoscalerSyncPeriod.value}"
                horizontal-pod-autoscaler-tolerance: "${g.horizontalPodAutoscalerTolerance.value}"
                horizontal-pod-autoscaler-upscale-delay: "${g.horizontalPodAutoscalerUpscaleDelay.value}"
                http2-max-streams-per-connection: "${g.http2MaxStreamsPerConnection.value}"
                kube-api-burst: "${g.kubeApiBurst.value}"
                kube-api-content-type: "${g.kubeApiContentType.value}"
                kube-api-qps: "${g.kubeApiQps.value}"
                kubeconfig: "${g.kubeconfig.value}"
                large-cluster-size-threshold: "${g.largeClusterSizeThreshold.value}"
                leader-elect: "${g.leaderElect.value}"
                leader-elect-lease-duration: "${g.leaderElectLeaseDuration.value}"
                leader-elect-renew-deadline: "${g.leaderElectRenewDeadline.value}"
                leader-elect-resource-lock: "${g.leaderElectResourceLock.value}"
                leader-elect-resource-name: "${g.leaderElectResourceName.value}"
                leader-elect-resource-namespace: "${g.leaderElectResourceNamespace.value}"
                leader-elect-retry-period: "${g.leaderElectRetryPeriod.value}"
                legacy-service-account-token-clean-up-period: "${g.legacyServiceAccountTokenCleanUpPeriod.value}"
                log-flush-frequency: "${g.logFlushFrequency.value}"
                log-json-info-buffer-size: "${g.logJsonInfoBufferSize.value}"
                log-json-split-stream: "${g.logJsonSplitStream.value}"
                log-text-info-buffer-size: "${g.logTextInfoBufferSize.value}"
                log-text-split-stream: "${g.logTextSplitStream.value}"
                logging-format: "${g.loggingFormat.value}"
                max-endpoints-per-slice: "${g.maxEndpointsPerSlice.value}"
                min-resync-period: "${g.minResyncPeriod.value}"
                mirroring-concurrent-service-endpoint-syncs: "${g.mirroringConcurrentServiceEndpointSyncs.value}"
                mirroring-endpointslice-updates-batch-period: "${g.mirroringEndpointsliceUpdatesBatchPeriod.value}"
                mirroring-max-endpoints-per-subset: "${g.mirroringMaxEndpointsPerSubset.value}"
                namespace-sync-period: "${g.namespaceSyncPeriod.value}"
                node-cidr-mask-size: "${g.nodeCidrMaskSize.value}"
                node-cidr-mask-size-ipv4: "${g.nodeCidrMaskSizeIpv4.value}"
                node-cidr-mask-size-ipv6: "${g.nodeCidrMaskSizeIpv6.value}"
                node-eviction-rate: "${g.nodeEvictionRate.value}"
                node-monitor-grace-period: "${g.nodeMonitorGracePeriod.value}"
                node-monitor-period: "${g.nodeMonitorPeriod.value}"
                node-startup-grace-period: "${g.nodeStartupGracePeriod.value}"
                node-sync-period: "${g.nodeSyncPeriod.value}"
                permit-address-sharing: "${g.permitAddressSharing.value}"
                permit-port-sharing: "${g.permitPortSharing.value}"
                profiling: "${g.profiling.value}"
                pv-recycler-increment-timeout-nfs: "${g.pvRecyclerIncrementTimeoutNfs.value}"
                pv-recycler-minimum-timeout-hostpath: "${g.pvRecyclerMinimumTimeoutHostpath.value}"
                pv-recycler-minimum-timeout-nfs: "${g.pvRecyclerMinimumTimeoutNfs.value}"
                pv-recycler-timeout-increment-hostpath: "${g.pvRecyclerTimeoutIncrementHostpath.value}"
                pvclaimbinder-sync-period: "${g.pvclaimbinderSyncPeriod.value}"
                requestheader-client-ca-file: "${g.requestheaderClientCaFile.value}"
                requestheader-extra-headers-prefix: "${g.requestheaderExtraHeadersPrefix.value}"
                requestheader-group-headers: "${g.requestheaderGroupHeaders.value}"
                requestheader-username-headers: "${g.requestheaderUsernameHeaders.value}"
                resource-quota-sync-period: "${g.resourceQuotaSyncPeriod.value}"
                root-ca-file: "${g.rootCaFile.value}"
                route-reconciliation-period: "${g.routeReconciliationPeriod.value}"
                secondary-node-eviction-rate: "${g.secondaryNodeEvictionRate.value}"
                secure-port: "${g.securePort.value}"
                service-account-private-key-file: "${g.serviceAccountPrivateKeyFile.value}"
                terminated-pod-gc-threshold: "${g.terminatedPodGcThreshold.value}"
                unhealthy-zone-threshold: "${g.unhealthyZoneThreshold.value}"
                use-service-account-credentials: "${g.useServiceAccountCredentials.value}"
                v: "${g.v.value}"
                version: "${g.version.value}"
                volume-host-allow-local-loopback: "${g.volumeHostAllowLocalLoopback.value}"

            scheduler:
              extraArgs:
                bind-address: 0.0.0.0
                leader-elect: "true"

      `})})]})]})}function S(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(C,{...e})}):C(e)}},87464:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(34164);const l={tabItem:"tabItem_Ymn6"};var o=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a,children:t})}}}]);