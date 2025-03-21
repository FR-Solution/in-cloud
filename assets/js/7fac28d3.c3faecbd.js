"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1121],{6353:(e,a,t)=>{t.d(a,{$:()=>l});var r=t(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,a,t)=>{t.d(a,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,a,t)=>{t.d(a,{D:()=>u});var r=t(6353),l=t(31798);const u={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},25292:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(6353),l=t(31798),u=t(7478);const o={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${u.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${u.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},28702:(e,a,t)=>{t.d(a,{D:()=>i});var r=t(60513),l=t(6353),u=t(7478),o=t(31798);const i={data:{value:r.A`
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
      # - "${u.M.kubernetesDNSAddress.value}"
      # clusterDomain: cluster.local
      # TODO нужны только при hardway
      # tlsCertFile: "${l.$.kubeletCurrentServer.crtPath}"
      # tlsPrivateKeyFile: "${l.$.kubeletCurrentServer.crtPath}"
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${u.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${o.h.kubeletHealthz.portNumber}
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
      staticPodPath: ${u.M.kuberneteBaseFolderPath.value}/manifests
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
    `}}},31798:(e,a,t)=>{t.d(a,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},51084:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>lt,contentTitle:()=>rt,default:()=>it,frontMatter:()=>tt,metadata:()=>r,toc:()=>ut});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=t(74848),u=t(28453),o=t(60513),i=t(1775),n=t(10119),s=t(25292),c=t(6353),v=t(7478);const d={value:`${v.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},h={value:`${v.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},b={value:`${v.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},k={value:`${c.$.kubernetesCA.crtPath}`},p={value:`${c.$.kubernetesCA.crtPath}`},$={value:`${c.$.kubernetesCA.keyPath}`},m={value:`${c.$.frontProxyCA.crtPath}`},f={value:`${c.$.kubernetesCA.crtPath}`},g={value:`${v.M.kuberneteBaseFolderPath.value}/pki/sa.key`},y={value:"${CLUSTER_NAME}"},P={value:"false"},C={value:""},L={value:""},S={value:"false"},A={value:"false"},x={value:"10s"},M={value:"false"},F={value:"/healthz,/readyz,/livez,/metrics"},T={value:"10s"},B={value:"10s"},w={value:"0.0.0.0"},z={value:""},D={value:"RangeAllocator"},E={value:""},I={value:"external"},N={value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},R={value:""},_={value:"720h0m0s"},q={value:""},W={value:""},H={value:""},V={value:""},O={value:""},j={value:""},K={value:""},U={value:""},G={value:"5"},J={value:"5"},Q={value:"5"},Y={value:"5"},X={value:"20"},Z={value:"5"},ee={value:"5"},ae={value:"10"},te={value:"5"},re={value:"20"},le={value:"5"},ue={value:"5"},oe={value:"1"},ie={value:"5"},ne={value:"5"},se={value:"5"},ce={value:"5"},ve={value:"true"},de={value:"false"},he={value:"0s"},be={value:"*,bootstrapsigner,tokencleaner"},ke={value:"false"},pe={value:"false"},$e={value:""},me={value:"true"},fe={value:"true"},ge={value:"false"},ye={value:"false"},Pe={value:"0s"},Ce={value:"0s"},Le={value:""},Se={value:"RotateKubeletServerCertificate=true"},Ae={value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},xe={value:"false"},Me={value:"5m0s"},Fe={value:"5m0s"},Te={value:"5m0s"},Be={value:"30s"},we={value:"30s"},ze={value:"0.1"},De={value:"3m0s"},Ee={value:"0"},Ie={value:"120"},Ne={value:"application/vnd.kubernetes.protobuf"},Re={value:"100"},_e={value:"50"},qe={value:"true"},We={value:"15s"},He={value:"10s"},Ve={value:"leases"},Oe={value:"kube-controller-manager"},je={value:"kube-system"},Ke={value:"2s"},Ue={value:""},Ge={value:"8760h0m0s"},Je={value:"5s"},Qe={value:"0"},Ye={value:"false"},Xe={value:"0"},Ze={value:"false"},ea={value:"text"},aa={value:"1m0s"},ta={value:""},ra={value:"100"},la={value:"12h0m0s"},ua={value:"5"},oa={value:"0s"},ia={value:"1000"},na={value:"2m0s"},sa={value:"0"},ca={value:"0"},va={value:"0"},da={value:"0.1"},ha={value:"40s"},ba={value:"5s"},ka={value:"10s"},pa={value:"0s"},$a={value:"false"},ma={value:"false"},fa={value:"false"},ga={value:"30"},ya={value:"60"},Pa={value:"300"},Ca={value:""},La={value:""},Sa={value:"30"},Aa={value:"15s"},xa={value:""},Ma={value:"x-remote-extra-"},Fa={value:"x-remote-group"},Ta={value:"x-remote-user"},Ba={value:"5m0s"},wa={value:"10s"},za={value:"0.01"},Da={value:"10257"},Ea={value:""},Ia={value:""},Na={value:"0"},Ra={value:""},_a={value:""},qa={value:""},Wa={value:""},Ha={value:""},Va={value:"0.55"},Oa={value:"true"},ja={value:"8"},Ka={value:"false"},Ua={value:""},Ga={value:"true"},Ja={value:""};t(31798);var Qa=t(63770);t(28702);o.A`

    `;var Ya=t(87464),Xa=t(62774);const Za={data:{value:o.A`
      auto-compaction-retention: "${n.D.autoCompactionRetention.value}"
      cert-file: "${n.D.certFile.value}"
      client-cert-auth: "${n.D.clientCertAuth.value}"
      data-dir: "${n.D.dataDir.value}"
      election-timeout: "${n.D.electionTimeout.value}"
      experimental-initial-corrupt-check: "${n.D.experimentalInitialCorruptCheck.value}"
      experimental-watch-progress-notify-interval: "${n.D.experimentalWatchProgressNotifyInterval.value}"
      heartbeat-interval: "${n.D.heartbeatInterval.value}"
      key-file: "${n.D.keyFile.value}"
      logger: "${n.D.logger.value}"
      max-snapshots: "${n.D.maxSnapshots.value}"
      max-wals: "${n.D.maxWals.value}"
      metrics: "${n.D.metrics.value}"
      peer-cert-file: "${n.D.peerCertFile.value}"
      peer-client-cert-auth: "${n.D.peerClientCertAuth.value}"
      peer-key-file: "${n.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${n.D.peerTrustedCAFile.value}"
      snapshot-count: "${n.D.snapshotCount.value}"
      trusted-ca-file: "${n.D.trustedCAFile.value}"
      listen-metrics-urls: "http://0.0.0.0:2381" # TODO
      quota-backend-bytes: "10737418240" # TODO
    `}},et={data:{value:o.A`
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
    `}},at={data:{value:o.A`
      allocate-node-cidrs: "${P.value}"
      allow-untagged-cloud: "${S.value}"
      attach-detach-reconcile-sync-period: "${aa.value}"
      authentication-kubeconfig: "${d.value}"
      authentication-skip-lookup: "${A.value}"
      authentication-token-webhook-cache-ttl: "${x.value}"
      authentication-tolerate-lookup-failure: "${M.value}"
      authorization-always-allow-paths: "${F.value}"
      authorization-kubeconfig: "${h.value}"
      authorization-webhook-cache-authorized-ttl: "${T.value}"
      authorization-webhook-cache-unauthorized-ttl: "${B.value}"
      bind-address: "${w.value}"

      cidr-allocator-type: "${D.value}"
      client-ca-file: "${k.value}"

      cloud-provider: "${I.value}"
      cloud-provider-gce-lb-src-cidrs: "${N.value}"
      cluster-name: "${y.value}"

      cluster-signing-cert-file: "${p.value}"
      cluster-signing-duration: "${_.value}"
      cluster-signing-key-file: "${$.value}"

      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${q.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${W.value}"
      # cluster-signing-kubelet-client-cert-file: "${H.value}"
      # cluster-signing-kubelet-client-key-file: "${V.value}"
      # cluster-signing-kubelet-serving-cert-file: "${O.value}"
      # cluster-signing-kubelet-serving-key-file: "${j.value}"
      # cluster-signing-legacy-unknown-cert-file: "${K.value}"
      # cluster-signing-legacy-unknown-key-file: "${U.value}"
      # cluster-cidr: "${R.value}"
      # cloud-config: "${E.value}"
      # cert-dir: "${z.value}"
      # allow-metric-labels-manifest: "${L.value}"
      # allow-metric-labels: "${C.value}"
      # disabled-metrics: "${$e.value}"
      # leader-migration-config: "${Ue.value}"
      # master: "${ta.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${Ca.value}"
      # pv-recycler-pod-template-filepath-nfs: "${La.value}"
      # service-cluster-ip-range: "${Ea.value}"
      # show-hidden-metrics-for-version: "${Ia.value}"
      # tls-cert-file: "${Ra.value}"
      # tls-cipher-suites: "${_a.value}"
      # tls-min-version: "${qa.value}"
      # tls-private-key-file: "${Wa.value}"
      # tls-sni-cert-key: "${Ha.value}"
      # vmodule: "${Ua.value}"
      # volume-host-cidr-denylist: "${Ja.value}"
      # external-cloud-volume-plugin: "${Le.value}"
      # requestheader-allowed-names: "${xa.value}"

      concurrent-cron-job-syncs: "${G.value}"
      concurrent-deployment-syncs: "${J.value}"
      concurrent-endpoint-syncs: "${Q.value}"
      concurrent-ephemeralvolume-syncs: "${Y.value}"
      concurrent-gc-syncs: "${X.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${Z.value}"
      concurrent-job-syncs: "${ee.value}"
      concurrent-namespace-syncs: "${ae.value}"
      concurrent-rc-syncs: "${te.value}"
      concurrent-replicaset-syncs: "${re.value}"
      concurrent-resource-quota-syncs: "${le.value}"
      concurrent-service-endpoint-syncs: "${ue.value}"
      concurrent-service-syncs: "${oe.value}"
      concurrent-serviceaccount-token-syncs: "${ie.value}"
      concurrent-statefulset-syncs: "${ne.value}"
      concurrent-ttl-after-finished-syncs: "${se.value}"
      concurrent-validating-admission-policy-status-syncs: "${ce.value}"
      configure-cloud-routes: "${ve.value}"
      contention-profiling: "${de.value}"
      controller-start-interval: "${he.value}"
      controllers: "${be.value}"
      disable-attach-detach-reconcile-sync: "${ke.value}"
      disable-force-detach-on-timeout: "${pe.value}"
      enable-dynamic-provisioning: "${me.value}"
      enable-garbage-collector: "${fe.value}"
      enable-hostpath-provisioner: "${ge.value}"
      enable-leader-migration: "${ye.value}"
      endpoint-updates-batch-period: "${Pe.value}"
      endpointslice-updates-batch-period: "${Ce.value}"
      feature-gates: "${Se.value}"
      flex-volume-plugin-dir: "${Ae.value}"
      help: "${xe.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${Me.value}"
      horizontal-pod-autoscaler-downscale-delay: "${Fe.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${Te.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${Be.value}"
      horizontal-pod-autoscaler-sync-period: "${we.value}"
      horizontal-pod-autoscaler-tolerance: "${ze.value}"
      horizontal-pod-autoscaler-upscale-delay: "${De.value}"
      http2-max-streams-per-connection: "${Ee.value}"
      kube-api-burst: "${Ie.value}"
      kube-api-content-type: "${Ne.value}"
      kube-api-qps: "${Re.value}"
      kubeconfig: "${b.value}"
      large-cluster-size-threshold: "${_e.value}"
      leader-elect: "${qe.value}"
      leader-elect-lease-duration: "${We.value}"
      leader-elect-renew-deadline: "${He.value}"
      leader-elect-resource-lock: "${Ve.value}"
      leader-elect-resource-name: "${Oe.value}"
      leader-elect-resource-namespace: "${je.value}"
      leader-elect-retry-period: "${Ke.value}"
      legacy-service-account-token-clean-up-period: "${Ge.value}"
      log-flush-frequency: "${Je.value}"
      log-json-info-buffer-size: "${Qe.value}"
      log-json-split-stream: "${Ye.value}"
      log-text-info-buffer-size: "${Xe.value}"
      log-text-split-stream: "${Ze.value}"
      logging-format: "${ea.value}"
      max-endpoints-per-slice: "${ra.value}"
      min-resync-period: "${la.value}"
      mirroring-concurrent-service-endpoint-syncs: "${ua.value}"
      mirroring-endpointslice-updates-batch-period: "${oa.value}"
      mirroring-max-endpoints-per-subset: "${ia.value}"
      namespace-sync-period: "${na.value}"
      node-cidr-mask-size: "${sa.value}"
      node-cidr-mask-size-ipv4: "${ca.value}"
      node-cidr-mask-size-ipv6: "${va.value}"
      node-eviction-rate: "${da.value}"
      node-monitor-grace-period: "${ha.value}"
      node-monitor-period: "${ba.value}"
      node-startup-grace-period: "${ka.value}"
      node-sync-period: "${pa.value}"
      permit-address-sharing: "${$a.value}"
      permit-port-sharing: "${ma.value}"
      profiling: "${fa.value}"
      pv-recycler-increment-timeout-nfs: "${ga.value}"
      pv-recycler-minimum-timeout-hostpath: "${ya.value}"
      pv-recycler-minimum-timeout-nfs: "${Pa.value}"
      pv-recycler-timeout-increment-hostpath: "${Sa.value}"
      pvclaimbinder-sync-period: "${Aa.value}"
      requestheader-client-ca-file: "${m.value}"
      requestheader-extra-headers-prefix: "${Ma.value}"
      requestheader-group-headers: "${Fa.value}"
      requestheader-username-headers: "${Ta.value}"
      resource-quota-sync-period: "${Ba.value}"
      root-ca-file: "${f.value}"
      route-reconciliation-period: "${wa.value}"
      secondary-node-eviction-rate: "${za.value}"
      secure-port: "${Da.value}"
      service-account-private-key-file: "${g.value}"
      terminated-pod-gc-threshold: "${Na.value}"
      unhealthy-zone-threshold: "${Va.value}"
      use-service-account-credentials: "${Oa.value}"
      v: "${ja.value}"
      version: "${Ka.value}"
      volume-host-allow-local-loopback: "${Ga.value}"
    `}},tt={},rt=void 0,lt={},ut=[];function ot(e){const a={admonition:"admonition",code:"code",p:"p",...(0,u.R)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsxs)(Xa.A,{groupId:"install-type",children:[(0,l.jsxs)(Ya.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:o.A`
          export CLUSTER_NAME='${v.M.clusterName.value}'
          export BASE_DOMAIN='${v.M.kubernetesBaseDomain.value}'
          export CLUSTER_DOMAIN=${v.M.kubernetesClusterDomain.value}
          export FULL_HOST_NAME=${v.M.virtualMachineFullName.value}
          export INTERNAL_API=api.${v.M.kubernetesClusterDomain.value}
        `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsx)(a.admonition,{type:"warning",children:(0,l.jsxs)(a.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.jsx)(a.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,l.jsx)(i.A,{children:o.A`
        cat <<EOF > ${v.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
            config: "${v.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${v.M.kubernetesClusterDomain.value}
            cluster-dns: "${v.M.kubernetesDNSAddress.value}"
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
        imageRepository: "${v.M.baseDockerRegistry.value}"
        networking:
          serviceSubnet: ${v.M.kubernetesServiceCIDR.value}
          dnsDomain: ${v.M.kubernetesClusterDomain.value}
        kubernetesVersion: ${Qa.M.kubernetes.value}
        dns: {}
        etcd:
          local:
            imageRepository: "${v.M.baseDockerRegistry.value}"
            dataDir: "/var/lib/etcd"
            extraArgs:
              ${Za.data.value}
            peerCertSANs:
              - 127.0.0.1
            serverCertSANs:
              - 127.0.0.1
        apiServer:
          extraArgs:
            ${et.data.value}
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
            ${at.data.value}
        scheduler:
          extraArgs:
            bind-address: 0.0.0.0
            leader-elect: "true"
        EOF
      `})]}),(0,l.jsx)(Ya.A,{value:"Cloud-init",children:(0,l.jsx)(i.A,{children:o.A`
        - path: ${v.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
                config: "${v.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${v.M.kubernetesDNSAddress.value}"

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
            controlPlaneEndpoint: {{ local_hostname }}:${s.L.securePort.value}

            imageRepository: "${v.M.baseDockerRegistry.value}"
            networking:
              serviceSubnet: ${v.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${Qa.M.kubernetes.value}
            dns: {}
            etcd:
              local:
                imageRepository: "${v.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  ${Za.data.value}
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1
            apiServer:
              extraArgs:
                ${et.data.value}
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
                ${at.data.value}
            scheduler:
              extraArgs:
                bind-address: 0.0.0.0
                leader-elect: "true"

      `})})]})]})}function it(e={}){const{wrapper:a}={...(0,u.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(ot,{...e})}):ot(e)}},62774:(e,a,t)=>{t.d(a,{A:()=>P});var r=t(96540),l=t(34164),u=t(65627),o=t(56347),i=t(50372),n=t(30604),s=t(11861),c=t(78749);function v(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return v(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:l}}=e;return{value:a,label:t,attributes:r,default:l}}))}(t);return function(e){const a=(0,s.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const l=(0,o.W6)(),u=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,n.aZ)(u),(0,r.useCallback)((e=>{if(!u)return;const a=new URLSearchParams(l.location.search);a.set(u,e),l.replace({...l.location,search:a.toString()})}),[u,l])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,u=d(e),[o,n]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:u}))),[s,v]=b({queryString:t,groupId:l}),[k,p]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,u]=(0,c.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&u.set(e)}),[t,u])]}({groupId:l}),$=(()=>{const e=s??k;return h({value:e,tabValues:u})?e:null})();(0,i.A)((()=>{$&&n($)}),[$]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);n(e),v(e),p(e)}),[v,p,u]),tabValues:u}}var p=t(9136);const $={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function f(e){let{className:a,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const n=[],{blockElementScrollPositionUntilNextRender:s}=(0,u.a_)(),c=e=>{const a=e.currentTarget,t=n.indexOf(a),l=i[t].value;l!==r&&(s(a),o(l))},v=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=n.indexOf(e.currentTarget)+1;a=n[t]??n[0];break}case"ArrowLeft":{const t=n.indexOf(e.currentTarget)-1;a=n[t]??n[n.length-1];break}}a?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:u}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>{n.push(e)},onKeyDown:v,onClick:c,...u,className:(0,l.A)("tabs__item",$.tabItem,u?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function g(e){let{lazy:a,children:t,selectedValue:u}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===u));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==u})))})}function y(e){const a=k(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",$.tabList),children:[(0,m.jsx)(f,{...a,...e}),(0,m.jsx)(g,{...a,...e})]})}function P(e){const a=(0,p.A)();return(0,m.jsx)(y,{...e,children:v(e.children)},String(a))}},63770:(e,a,t)=>{t.d(a,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},87464:(e,a,t)=>{t.d(a,{A:()=>o});t(96540);var r=t(34164);const l={tabItem:"tabItem_Ymn6"};var u=t(74848);function o(e){let{children:a,hidden:t,className:o}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t,children:a})}}}]);