"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1516,1710,3548,5769,9914],{863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>m,frontMatter:()=>v,metadata:()=>l,toc:()=>p});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/configFiles","title":"configFiles","description":"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),n=a(28453),o=a(60513),u=a(1775),i=a(7478),s=a(28702),c=a(87464),d=a(62774);const v={},h=void 0,b={},p=[];function k(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(c.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${s.D.data.value}
      EOF
    `})]}),(0,r.jsxs)(c.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      - path: ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${s.D.data.value}
    `})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},6353:(e,t,a)=>{a.d(t,{$:()=>r});var l=a(7478);const r={etcdCA:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${l.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${l.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${l.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${l.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>l});const l={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},10119:(e,t,a)=>{a.d(t,{D:()=>n});var l=a(6353),r=a(31798);const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${r.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${l.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${l.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${l.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${l.$.etcdServer.crtPath}`},keyFile:{value:`${l.$.etcdServer.keyPath}`},trustedCAFile:{value:`${l.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${r.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${r.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${r.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${r.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${r.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},17150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),n=a(28453),o=a(60513),u=a(1775);const i={},s=void 0,c={},d=[];function v(e){return(0,r.jsx)(u.A,{language:"bash",children:o.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v()}},25292:(e,t,a)=>{a.d(t,{L:()=>o});var l=a(6353),r=a(31798),n=a(7478);const o={etcdCafile:{value:`${l.$.etcdCA.crtPath}`},etcdCertfile:{value:`${l.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${l.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${l.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${l.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${l.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${l.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${l.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${l.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${l.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${l.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${l.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${l.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${l.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${r.h.kubeletServer.portNumber}`},securePort:{value:`${r.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${r.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${r.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${n.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${n.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},28702:(e,t,a)=>{a.d(t,{D:()=>c,Q:()=>d});var l=a(60513),r=a(6353),n=a(7478),o=a(31798),u=a(25292),i=a(63770),s=a(86613);const c={data:{value:l.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${r.$.kubernetesCA.crtPath}"
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
      # - "${n.M.kubernetesDNSAddress.value}"
      # clusterDomain: cluster.local
      # TODO нужны только при hardway
      # tlsCertFile: "${r.$.kubeletCurrentServer.crtPath}"
      # tlsPrivateKeyFile: "${r.$.kubeletCurrentServer.crtPath}"
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${n.M.criEndpoint.value}"
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
      staticPodPath: ${n.M.kuberneteBaseFolderPath.value}/manifests
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
    `}},d={data:{value:l.A`
      clusterName: "$\{CLUSTER_NAME}"
      controlPlaneEndpoint: $\{INTERNAL_API}:${u.L.securePort.value}
      imageRepository: "${n.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${n.M.kubernetesServiceCIDR.value}
        dnsDomain: ${n.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${i.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${n.M.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${s.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${s.IL.data.value}
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
          ${s.Uj.data.value}
      scheduler:
        extraArgs:
          ${s.hZ.data.value}
    `}}},31798:(e,t,a)=>{a.d(t,{h:()=>l});const l={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},42567:(e,t,a)=>{a.d(t,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},47075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>u,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycle","title":"5.2.1.2.6. Kubelet","description":"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleInstall.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycle","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle"},"sidebar":"techDocs","previous":{"title":"5.2.1.2.5. Kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle"},"next":{"title":"5.2.1.2.7. Etcd","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/lifecycle"}}');var r=a(74848),n=a(28453),o=a(87217);a(17150),a(52315),a(863);const u={id:"lifecycle"},i="5.2.1.2.6. Kubelet",s={},c=[{value:"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521261-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.2.6.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521262-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...o.toc];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"52126-kubelet",children:"5.2.1.2.6. Kubelet"})}),"\n",(0,r.jsx)(t.h2,{id:"521261-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.6.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"521262-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.2.6.2. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(o.default,{})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},52315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>g,frontMatter:()=>h,metadata:()=>l,toc:()=>k});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),n=a(28453),o=a(60513),u=a(1775),i=(a(31798),a(7478)),s=a(87464),c=a(62774),d=a(17150),v=a(42567);const h={},b=void 0,p={},k=[...d.toc];function m(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(s.A,{value:"Bash",children:[(0,r.jsx)(d.default,{}),(0,r.jsx)("h4",{children:"Systemd Unit"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service
            [Unit]
            Description=kubelet: The Kubernetes Node Agent
            Documentation=https://kubernetes.io/docs/
            Wants=network-online.target containerd.service
            After=network-online.target containerd.service

            [Service]
            ExecStart=${v.m.kubelet.path}
            Restart=always
            StartLimitInterval=0
            RestartSec=10

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,r.jsx)("h4",{children:"Systemd Unit Config"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            # Note: This dropin only works with kubeadm and kubelet v1.11+
            [Service]
            Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/kubelet.conf"
            Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
            # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
            EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
            # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
            # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
            EnvironmentFile=-/etc/default/kubelet/extra-args.env
            ExecStart=
            ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
            EOF
          `}),(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `}),(0,r.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://${i.M.criEndpoint.value} \
      --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} \
      --config=${i.M.kuberneteKubeletFolderPath.value}/custom-config.yaml \
      --cluster-domain=${i.M.kubernetesClusterDomain.value} \
      --cluster-dns=${i.M.kubernetesDNSAddress.value}
      "
      EOF
  `})]})]}),(0,r.jsxs)(s.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubelet.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=kubelet: The Kubernetes Node Agent
              Documentation=https://kubernetes.io/docs/
              Wants=network-online.target containerd.service
              After=network-online.target containerd.service

              [Service]
              ExecStart=${v.m.kubelet.path}
              Restart=always
              StartLimitInterval=0
              RestartSec=10

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            owner: root:root
            permissions: '0644'
            content: |
              # Note: This dropin only works with kubeadm and kubelet v1.11+
              [Service]
              Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/kubelet.conf"
              Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
              # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
              EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
              # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
              # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
              EnvironmentFile=-/etc/default/kubelet/extra-args.env
              ExecStart=
              ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARG $KUBELET_EXTRA_ARGS
        `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/extra-args.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBELET_EXTRA_ARGS=""
        `}),(0,r.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
    - path: ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      owner: root:root
      permissions: '0644'
      content: |
        KUBELET_KUBEADM_ARGS="\
        --container-runtime-endpoint=unix://${i.M.criEndpoint.value} \
        --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} \
        --config=${i.M.kuberneteKubeletFolderPath.value}/custom-config.yaml \
        "
  `})]})]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},62774:(e,t,a)=>{a.d(t,{A:()=>L});var l=a(96540),r=a(34164),n=a(65627),o=a(56347),u=a(50372),i=a(30604),s=a(11861),c=a(78749);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:r}}=e;return{value:t,label:a,attributes:l,default:r}}))}(a);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=v(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:n}))),[s,d]=b({queryString:a,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Dv)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),m=(()=>{const e=s??p;return h({value:e,tabValues:n})?e:null})();(0,u.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,n]),tabValues:n}}var k=a(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function $(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:s}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=u[a].value;r!==l&&(s(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...n,className:(0,r.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":l===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)($,{...t,...e}),(0,g.jsx)(f,{...t,...e})]})}function L(e){const t=(0,k.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},63770:(e,t,a)=>{a.d(t,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},66483:(e,t,a)=>{a.d(t,{L:()=>n});var l=a(6353),r=a(7478);const n={authenticationKubeconfig:{value:`${r.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${r.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${r.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${l.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${l.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${l.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${l.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${l.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},85421:(e,t,a)=>{a.d(t,{w:()=>n});var l=a(31798),r=a(7478);const n={authenticationKubeconfig:{value:`${r.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${r.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${r.M.kuberneteBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${l.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},86613:(e,t,a)=>{a.d(t,{IL:()=>s,Nu:()=>i,Uj:()=>c,hZ:()=>d});var l=a(60513),r=a(10119),n=a(25292),o=a(66483),u=a(85421);const i={data:{value:l.A`
      advertise-client-urls: "${r.D.advertiseClientUrls.value}"
      auto-compaction-retention: "${r.D.autoCompactionRetention.value}"
      cert-file: "${r.D.certFile.value}"
      client-cert-auth: "${r.D.clientCertAuth.value}"
      data-dir: "${r.D.dataDir.value}"
      election-timeout: "${r.D.electionTimeout.value}"
      heartbeat-interval: "${r.D.heartbeatInterval.value}"
      initial-advertise-peer-urls: "${r.D.initialAdvertisePeerUrls.value}"
      initial-cluster: "${r.D.initialCluster.value}"
      key-file: "${r.D.keyFile.value}"
      listen-client-urls: "${r.D.listenClientUrls.value}"
      listen-metrics-urls: "${r.D.listenMetricsUrls.value}"
      listen-peer-urls: "${r.D.listenPeerUrls.value}"
      logger: "${r.D.logger.value}"
      max-snapshots: "${r.D.maxSnapshots.value}"
      max-wals: "${r.D.maxWals.value}"
      metrics: "${r.D.metrics.value}"
      name: "${r.D.name.value}"
      peer-cert-file: "${r.D.peerCertFile.value}"
      peer-client-cert-auth: "${r.D.peerClientCertAuth.value}"
      peer-key-file: "${r.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${r.D.peerTrustedCAFile.value}"
      snapshot-count: "${r.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${r.D.trustedCAFile.value}"
    `}},s={data:{value:l.A`
      aggregator-reject-forwarding-redirect: "${n.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${n.L.allowPrivileged.value}"
      anonymous-auth: "${n.L.anonymousAuth.value}"
      api-audiences: "${n.L.apiAudiences.value}"
      apiserver-count: "${n.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${n.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${n.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${n.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${n.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${n.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${n.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${n.L.auditLogCompress.value}"
      audit-log-format: "${n.L.auditLogFormat.value}"
      audit-log-maxage: "${n.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${n.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${n.L.auditLogMaxsize.value}"
      audit-log-mode: "${n.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${n.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${n.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${n.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${n.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${n.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${n.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${n.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${n.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${n.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${n.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${n.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${n.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${n.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${n.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${n.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${n.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${n.L.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${n.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${n.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${n.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${n.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${n.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${n.L.authorizationWebhookVersion.value}"
      bind-address: "${n.L.bindAddress.value}"
      cert-dir: "${n.L.certDir.value}"
      client-ca-file: "${n.L.clientCaFile.value}"
      cloud-provider: "${n.L.cloudProvider.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${n.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${n.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${n.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${n.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${n.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${n.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${n.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${n.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${n.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${n.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${n.L.enableGarbageCollector.value}"
      enable-logs-handler: "${n.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${n.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${n.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${n.L.endpointReconcilerType.value}"
      etcd-cafile: "${n.L.etcdCafile.value}"
      etcd-certfile: "${n.L.etcdCertfile.value}"
      etcd-compaction-interval: "${n.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${n.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${n.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${n.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${n.L.etcdKeyfile.value}"
      etcd-prefix: "${n.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${n.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${n.L.etcdServers.value}"
      event-ttl: "${n.L.eventTtl.value}"
      feature-gates: "${n.L.featureGates.value}"
      goaway-chance: "${n.L.goawayChance.value}"
      help: "${n.L.help.value}"
      http2-max-streams-per-connection: "${n.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${n.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${n.L.kubeletClientKey.value}"
      kubelet-port: "${n.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${n.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${n.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${n.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${n.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${n.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${n.L.livezGracePeriod.value}"
      log-flush-frequency: "${n.L.logFlushFrequency.value}"
      logging-format: "${n.L.loggingFormat.value}"
      log-json-info-buffer-size: "${n.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${n.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${n.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${n.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${n.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${n.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${n.L.maxRequestsInflight.value}"
      min-request-timeout: "${n.L.minRequestTimeout.value}"
      permit-address-sharing: "${n.L.permitAddressSharing.value}"
      permit-port-sharing: "${n.L.permitPortSharing.value}"
      profiling: "${n.L.profiling.value}"
      proxy-client-cert-file: "${n.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${n.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${n.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${n.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${n.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${n.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${n.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${n.L.requestTimeout.value}"
      runtime-config: "${n.L.runtimeConfig.value}"
      secure-port: "${n.L.securePort.value}"
      service-account-extend-token-expiration: "${n.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${n.L.serviceAccountIssuer.value}"
      service-account-key-file: "${n.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${n.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${n.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${n.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${n.L.serviceClusterIpRange.value}"
      service-node-port-range: "${n.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${n.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${n.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${n.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${n.L.storageBackend.value}"
      storage-media-type: "${n.L.storageMediaType.value}"
      tls-cert-file: "${n.L.tlsCertFile.value}"
      tls-private-key-file: "${n.L.tlsPrivateKeyFile.value}"
      v: "${n.L.v.value}"
      version: "${n.L.version.value}"
      watch-cache: "${n.L.watchCache.value}"

      # Не указывать если значение "" или undefined
      # cloud-config: "${n.L.cloudConfig.value}"
      # strict-transport-security-directives: "${n.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${n.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${n.L.disabledMetrics.value}"
      # egress-selector-config-file: "${n.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${n.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${n.L.etcdServersOverrides.value}"
      # external-hostname: "${n.L.externalHostname.value}"
      # kubelet-certificate-authority: "${n.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${n.L.oidcCaFile.value}"
      # oidc-client-id: "${n.L.oidcClientId.value}"
      # oidc-groups-claim: "${n.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${n.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${n.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${n.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${n.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${n.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${n.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${n.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${n.L.peerAdvertisePort.value}"
      # peer-ca-file: "${n.L.peerCaFile.value}"
      # service-account-jwks-uri: "${n.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${n.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${n.L.tlsCipherSuites.value}"
      # tls-min-version: "${n.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${n.L.tlsSniCertKey.value}"
      # token-auth-file: "${n.L.tokenAuthFile.value}"
      # tracing-config-file: "${n.L.tracingConfigFile.value}"
      # vmodule: "${n.L.vmodule.value}"
      # watch-cache-sizes: "${n.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${n.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${n.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${n.L.debugSocketPath.value}"
      # authorization-policy-file: "${n.L.authorizationPolicyFile.value}"
      # authorization-config: "${n.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${n.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${n.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${n.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${n.L.auditPolicyFile.value}"
      # audit-log-path: "${n.L.auditLogPath.value}"
      # allow-metric-labels: "${n.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${n.L.allowMetricLabelsManifest.value}"
      # admission-control: "${n.L.admissionControl.value}"
      # admission-control-config-file: "${n.L.admissionControlConfigFile.value}"
      # advertise-address: "${n.L.advertiseAddress.value}"
    `}},c={data:{value:l.A`
      allocate-node-cidrs: "${o.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${o.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${o.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${o.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${o.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${o.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${o.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${o.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${o.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${o.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${o.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${o.L.bindAddress.value}"
      cidr-allocator-type: "${o.L.cidrAllocatorType.value}"
      client-ca-file: "${o.L.clientCaFile.value}"
      cloud-provider: "${o.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${o.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${o.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${o.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${o.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${o.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${o.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${o.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${o.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${o.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${o.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${o.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${o.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${o.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${o.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${o.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${o.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${o.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${o.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${o.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${o.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${o.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${o.L.configureCloudRoutes.value}"
      contention-profiling: "${o.L.contentionProfiling.value}"
      controller-start-interval: "${o.L.controllerStartInterval.value}"
      controllers: "${o.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${o.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${o.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${o.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${o.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${o.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${o.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${o.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${o.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${o.L.featureGates.value}"
      flex-volume-plugin-dir: "${o.L.flexVolumePluginDir.value}"
      help: "${o.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${o.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${o.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${o.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${o.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${o.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${o.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${o.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${o.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${o.L.kubeApiBurst.value}"
      kube-api-content-type: "${o.L.kubeApiContentType.value}"
      kube-api-qps: "${o.L.kubeApiQps.value}"
      kubeconfig: "${o.L.kubeconfig.value}"
      large-cluster-size-threshold: "${o.L.largeClusterSizeThreshold.value}"
      leader-elect: "${o.L.leaderElect.value}"
      leader-elect-lease-duration: "${o.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${o.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${o.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${o.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${o.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${o.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${o.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${o.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${o.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${o.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${o.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${o.L.logTextSplitStream.value}"
      logging-format: "${o.L.loggingFormat.value}"
      max-endpoints-per-slice: "${o.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${o.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${o.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${o.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${o.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${o.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${o.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${o.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${o.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${o.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${o.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${o.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${o.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${o.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${o.L.permitAddressSharing.value}"
      permit-port-sharing: "${o.L.permitPortSharing.value}"
      profiling: "${o.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${o.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${o.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${o.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${o.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${o.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${o.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${o.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${o.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${o.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${o.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${o.L.rootCaFile.value}"
      route-reconciliation-period: "${o.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${o.L.secondaryNodeEvictionRate.value}"
      secure-port: "${o.L.securePort.value}"
      service-account-private-key-file: "${o.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${o.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${o.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${o.L.useServiceAccountCredentials.value}"
      v: "${o.L.v.value}"
      version: "${o.L.version.value}"
      volume-host-allow-local-loopback: "${o.L.volumeHostAllowLocalLoopback.value}"

      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${o.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${o.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${o.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${o.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${o.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${o.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${o.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${o.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${o.L.clusterCidr.value}"
      # cloud-config: "${o.L.cloudConfig.value}"
      # cert-dir: "${o.L.certDir.value}"
      # allow-metric-labels-manifest: "${o.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${o.L.allowMetricLabels.value}"
      # disabled-metrics: "${o.L.disabledMetrics.value}"
      # leader-migration-config: "${o.L.leaderMigrationConfig.value}"
      # master: "${o.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${o.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${o.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${o.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${o.L.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${o.L.tlsCertFile.value}"
      # tls-cipher-suites: "${o.L.tlsCipherSuites.value}"
      # tls-min-version: "${o.L.tlsMinVersion.value}"
      # tls-private-key-file: "${o.L.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${o.L.tlsSniCertKey.value}"
      # vmodule: "${o.L.vmodule.value}"
      # volume-host-cidr-denylist: "${o.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${o.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${o.L.requestheaderAllowedNames.value}"
    `}},d={data:{value:l.A`
      authentication-kubeconfig: "${u.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${u.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${u.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${u.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${u.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${u.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${u.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${u.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${u.w.bindAddress.value}"
      client-ca-file: "${u.w.clientCaFile.value}"
      contention-profiling: "${u.w.contentionProfiling.value}"
      help: "${u.w.help.value}"
      http2-max-streams-per-connection: "${u.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${u.w.kubeApiBurst.value}"
      kube-api-content-type: "${u.w.kubeApiContentType.value}"
      kube-api-qps: "${u.w.kubeApiQps.value}"
      kubeconfig: "${u.w.kubeconfig.value}"
      leader-elect: "${u.w.leaderElect.value}"
      leader-elect-lease-duration: "${u.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${u.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${u.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${u.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${u.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${u.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${u.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${u.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${u.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${u.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${u.w.logTextSplitStream.value}"
      logging-format: "${u.w.loggingFormat.value}"
      permit-address-sharing: "${u.w.permitAddressSharing.value}"
      permit-port-sharing: "${u.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${u.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${u.w.profiling.value}"
      requestheader-extra-headers-prefix: "${u.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${u.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${u.w.requestheaderUsernameHeaders.value}"
      secure-port: "${u.w.securePort.value}"
      v: "${u.w.v.value}"
      version: "${u.w.version.value}"

      # allow-metric-labels: "${u.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${u.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${u.w.certDir.value}"
      # config: "${u.w.config.value}"
      # disabled-metrics: "${u.w.disabledMetrics.value}"
      # feature-gates: "${u.w.featureGates.value}"
      # master: "${u.w.master.value}"
      # requestheader-allowed-names: "${u.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${u.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${u.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${u.w.tlsCertFile.value}"
      # tls-cipher-suites: "${u.w.tlsCipherSuites.value}"
      # tls-min-version: "${u.w.tlsMinVersion.value}"
      # tls-private-key-file: "${u.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${u.w.tlsSniCertKey.value}"
      # vmodule: "${u.w.vmodule.value}"
      # write-config-to: "${u.w.writeConfigTo.value}"
    `}}},87217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>g,frontMatter:()=>h,metadata:()=>l,toc:()=>k});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),n=a(28453),o=a(60513),u=a(1775),i=a(42567),s=a(63770);const c={data:{value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${s.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubelet.path}"


      LOG_TAG="kubelet-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."

      CURRENT_VERSION=$(kubelet version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
        curl -fsSL -o kubelet "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubelet.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
        install -m 755 kubelet "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
      fi
    `}};var d=a(87464),v=a(62774);const h={},b=void 0,p={},k=[];function m(e){return(0,r.jsxs)(v.A,{groupId:"install-type",children:[(0,r.jsxs)(d.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/kubelet
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${s.M.kubernetes.value}"
            REPOSITORY="${i.m.kubelet.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${c.data.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
          cat <<EOF > /usr/lib/systemd/system/kubelet-install.service
          [Unit]
          Description=Install and update kubelet
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubelet/download.env
          ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,r.jsxs)(d.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${s.M.kubernetes.value}"
              REPOSITORY="${i.m.kubelet.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${c.data.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(u.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubelet-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubelet
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubelet/download.env
              ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(u.A,{language:"bash",children:o.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},87464:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var l=a(34164);const r={tabItem:"tabItem_Ymn6"};var n=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:a,children:t})}}}]);