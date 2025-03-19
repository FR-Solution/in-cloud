"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[447,1121,1736,2262,4048,4936,7562,9249,9816],{1245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/status","title":"status","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/status.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/status","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/status","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(60513),i=a(1775);const u={},s=void 0,c={},d=[];function v(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{language:"bash",children:n.A`
      kubeadm version
  `}),"\n",(0,l.jsxs)(t.admonition,{type:"note",children:[(0,l.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0441\u044f, \u0442\u043e \u043f\u0440\u0438 \u0432\u044b\u0432\u043e\u0434\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
      kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}
  `})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},6353:(e,t,a)=>{a.d(t,{$:()=>l});var r=a(7478);const l={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,a)=>{a.d(t,{D:()=>o});var r=a(6353),l=a(31798);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${l.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${l.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${PORTS.etcdPeer.portNumber}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},11020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycle-settings","title":"5.2.1.3.3. Kubeadm","description":"5.2.1.3.3.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/lifecycleSettings.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/lifecycle-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.3.2. Crictl","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/lifecycle-settings"},"next":{"title":"5.2.1.3.4. Kubelet","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/lifecycle-settings"}}');var l=a(74848),o=a(28453),n=(a(19513),a(86969)),i=(a(1245),a(44772));const u={id:"lifecycle-settings"},s="5.2.1.3.3. Kubeadm",c={},d=[{value:"5.2.1.3.3.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521331-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.3.3.2. \u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521332-\u0440\u0430\u0431\u043e\u0447\u0438\u0435-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...i.toc,{value:"5.2.1.3.3.3. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521333-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...n.toc];function v(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"52133-kubeadm",children:"5.2.1.3.3. Kubeadm"})}),"\n",(0,l.jsx)(t.h2,{id:"521331-\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.3.1. \u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,l.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,l.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"521332-\u0440\u0430\u0431\u043e\u0447\u0438\u0435-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.3.2. \u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsx)(i.default,{}),"\n",(0,l.jsx)(t.h2,{id:"521333-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.3.3. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,l.jsx)(n.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},19513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(60513),i=a(1775),u=a(42567),s=a(63770);const c={data:{value:n.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${s.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${u.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${u.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${u.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${u.m.kubeadm.path}"


      LOG_TAG="kubeadm-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."

      CURRENT_VERSION=$(kubeadm version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
        curl -fsSL -o kubeadm "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubeadm.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
        install -m 755 kubeadm "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
      fi
    `}};var d=a(87464),v=a(62774);const h={},p=void 0,b={},m=[];function g(e){return(0,l.jsxs)(v.A,{groupId:"install-type",children:[(0,l.jsxs)(d.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${s.M.kubernetes.value}"
            REPOSITORY="${u.m.kubeadm.baseUrl}"
            EOF
          `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${c.data.value}
          EOF
        `}),(0,l.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,l.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
          cat <<EOF > /usr/lib/systemd/system/kubeadm-install.service
          [Unit]
          Description=Install and update kubeadm
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubeadm/download.env
          ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,l.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,l.jsxs)(d.A,{value:"Cloud-init",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,l.jsx)(i.A,{language:"yaml",children:n.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${s.M.kubernetes.value}"
              REPOSITORY="${u.m.kubeadm.baseUrl}"
        `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,l.jsx)(i.A,{language:"yaml",children:n.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${c.data.value}
        `}),(0,l.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(i.A,{language:"yaml",children:n.A`
          - path: /usr/lib/systemd/system/kubeadm-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubeadm
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubeadm/download.env
              ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,l.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,l.jsx)(i.A,{language:"bash",children:n.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g()}},25292:(e,t,a)=>{a.d(t,{L:()=>n});var r=a(6353),l=a(31798),o=a(7478);const n={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${l.h.kubeletServer.portNumber}`},securePort:{value:`${l.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${l.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${l.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},28702:(e,t,a)=>{a.d(t,{D:()=>i});var r=a(60513),l=a(6353),o=a(7478),n=a(31798);const i={data:{value:r.A`
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
      healthzPort: ${n.h.kubeletHealthz.portNumber}
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
    `}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},42567:(e,t,a)=>{a.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},44772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(60513),i=a(1775);const u={},s=void 0,c={},d=[];function v(e){return(0,l.jsx)(i.A,{language:"bash",children:n.A`
      mkdir -p /etc/kubernetes/
  `})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v()}},62774:(e,t,a)=>{a.d(t,{A:()=>S});var r=a(96540),l=a(34164),o=a(65627),n=a(56347),i=a(50372),u=a(30604),s=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:l}}=e;return{value:t,label:a,attributes:r,default:l}}))}(a);return function(e){const t=(0,s.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const l=(0,n.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,o=v(e),[n,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,d]=p({queryString:a,groupId:l}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,c.Dv)(a);return[l,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:l}),g=(()=>{const e=s??b;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&u(g)}),[g]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=a(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=a(74848);function $(e){let{className:t,block:a,selectedValue:r,selectValue:n,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),l=i[a].value;l!==r&&(s(t),n(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...o,className:(0,l.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:o}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=b(e);return(0,k.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,k.jsx)($,{...t,...e}),(0,k.jsx)(f,{...t,...e})]})}function S(e){const t=(0,m.A)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(t))}},63770:(e,t,a)=>{a.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},72608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/secondaryMasters","title":"secondaryMasters","description":"","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(87464),i=a(62774);const u={},s=void 0,c={},d=[];function v(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsxs)(i.A,{children:[(0,l.jsx)(n.A,{value:"master-2",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"export HOST_NAME=master-2\n"})})}),(0,l.jsx)(n.A,{value:"master-3",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"export HOST_NAME=master-3\n"})})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},75478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/initMaster","title":"initMaster","description":"","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/initMaster","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(87464),i=a(62774);const u={},s=void 0,c={},d=[];function v(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsx)(i.A,{children:(0,l.jsx)(n.A,{value:"master-1",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"export HOST_NAME=master-1\n"})})})})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},77420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>S,contentTitle:()=>y,default:()=>L,frontMatter:()=>f,metadata:()=>r,toc:()=>P});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const s=function e(t){return a.withOptions=a=>e(i(i({},t),a)),a;function a(e,...a){const r="string"==typeof e?[e]:e.raw,{escapeSpecialCharacters:l=Array.isArray(e)}=t;let o="";for(let t=0;t<r.length;t++){let e=r[t];l&&(e=e.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),o+=e,t<a.length&&(o+=a[t])}const n=o.split("\n");let i=null;for(const t of n){const e=t.match(/^(\s+)\S+/);if(e){const t=e[1].length;i=i?Math.min(i,t):t}}if(null!==i){const e=i;o=n.map((t=>" "===t[0]||"\t"===t[0]?t.slice(e):t)).join("\n")}return o=o.trim(),l&&(o=o.replace(/\\n/g,"\n")),o}}({}),c=s;var d=a(1775),v=a(10119),h=a(25292),p=a(6353),b=a(7478);const m={authenticationKubeconfig:{value:`${b.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${b.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${b.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${p.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${p.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${p.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${p.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${p.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${b.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"8"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}};a(31798);var g=a(63770);a(28702);a(60513).A`

    `;var k=a(87464),$=a(62774);const f={},y=void 0,S={},P=[];function C(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(a,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsxs)($.A,{groupId:"install-type",children:[(0,l.jsxs)(k.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(d.A,{language:"bash",children:c`
          export CLUSTER_NAME='${b.M.clusterName.value}'
          export BASE_DOMAIN='${b.M.kubernetesBaseDomain.value}'
          export CLUSTER_DOMAIN=${b.M.kubernetesClusterDomain.value}
          export FULL_HOST_NAME=${b.M.virtualMachineFullName.value}
          export INTERNAL_API=api.${b.M.kubernetesClusterDomain.value}
        `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,l.jsx)(d.A,{children:c`
        cat <<EOF > ${b.M.kuberneteBaseFolderPath.value}/kubeadm.conf
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
        kubernetesVersion: ${g.M.kubernetes.value}
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
            allocate-node-cidrs: "${m.allocateNodeCidrs.value}"
            allow-untagged-cloud: "${m.allowUntaggedCloud.value}"
            attach-detach-reconcile-sync-period: "${m.attachDetachReconcileSyncPeriod.value}"
            authentication-kubeconfig: "${m.authenticationKubeconfig.value}"
            authentication-skip-lookup: "${m.authenticationSkipLookup.value}"
            authentication-token-webhook-cache-ttl: "${m.authenticationTokenWebhookCacheTtl.value}"
            authentication-tolerate-lookup-failure: "${m.authenticationTolerateLookupFailure.value}"
            authorization-always-allow-paths: "${m.authorizationAlwaysAllowPaths.value}"
            authorization-kubeconfig: "${m.authorizationKubeconfig.value}"
            authorization-webhook-cache-authorized-ttl: "${m.authorizationWebhookCacheAuthorizedTtl.value}"
            authorization-webhook-cache-unauthorized-ttl: "${m.authorizationWebhookCacheUnauthorizedTtl.value}"
            bind-address: "${m.bindAddress.value}"

            cidr-allocator-type: "${m.cidrAllocatorType.value}"
            client-ca-file: "${m.clientCaFile.value}"

            cloud-provider: "${m.cloudProvider.value}"
            cloud-provider-gce-lb-src-cidrs: "${m.cloudProviderGceLbSrcCidrs.value}"
            cluster-name: "${m.clusterName.value}"

            cluster-signing-cert-file: "${m.clusterSigningCertFile.value}"
            cluster-signing-duration: "${m.clusterSigningDuration.value}"
            cluster-signing-key-file: "${m.clusterSigningKeyFile.value}"

            # Не указывать если значение "" или undefined
            # cluster-signing-kube-apiserver-client-cert-file: "${m.clusterSigningKubeApiserverClientCertFile.value}"
            # cluster-signing-kube-apiserver-client-key-file: "${m.clusterSigningKubeApiserverClientKeyFile.value}"
            # cluster-signing-kubelet-client-cert-file: "${m.clusterSigningKubeletClientCertFile.value}"
            # cluster-signing-kubelet-client-key-file: "${m.clusterSigningKubeletClientKeyFile.value}"
            # cluster-signing-kubelet-serving-cert-file: "${m.clusterSigningKubeletServingCertFile.value}"
            # cluster-signing-kubelet-serving-key-file: "${m.clusterSigningKubeletServingKeyFile.value}"
            # cluster-signing-legacy-unknown-cert-file: "${m.clusterSigningLegacyUnknownCertFile.value}"
            # cluster-signing-legacy-unknown-key-file: "${m.clusterSigningLegacyUnknownKeyFile.value}"
            # cluster-cidr: "${m.clusterCidr.value}"
            # cloud-config: "${m.cloudConfig.value}"
            # cert-dir: "${m.certDir.value}"
            # allow-metric-labels-manifest: "${m.allowMetricLabelsManifest.value}"
            # allow-metric-labels: "${m.allowMetricLabels.value}"
            # disabled-metrics: "${m.disabledMetrics.value}"
            # leader-migration-config: "${m.leaderMigrationConfig.value}"
            # master: "${m.master.value}"
            # pv-recycler-pod-template-filepath-hostpath: "${m.pvRecyclerPodTemplateFilepathHostpath.value}"
            # pv-recycler-pod-template-filepath-nfs: "${m.pvRecyclerPodTemplateFilepathNfs.value}"
            # service-cluster-ip-range: "${m.serviceClusterIpRange.value}"
            # show-hidden-metrics-for-version: "${m.showHiddenMetricsForVersion.value}"
            # tls-cert-file: "${m.tlsCertFile.value}"
            # tls-cipher-suites: "${m.tlsCipherSuites.value}"
            # tls-min-version: "${m.tlsMinVersion.value}"
            # tls-private-key-file: "${m.tlsPrivateKeyFile.value}"
            # tls-sni-cert-key: "${m.tlsSniCertKey.value}"
            # vmodule: "${m.vmodule.value}"
            # volume-host-cidr-denylist: "${m.volumeHostCidrDenylist.value}"
            # external-cloud-volume-plugin: "${m.externalCloudVolumePlugin.value}"
            # requestheader-allowed-names: "${m.requestheaderAllowedNames.value}"

            concurrent-cron-job-syncs: "${m.concurrentCronJobSyncs.value}"
            concurrent-deployment-syncs: "${m.concurrentDeploymentSyncs.value}"
            concurrent-endpoint-syncs: "${m.concurrentEndpointSyncs.value}"
            concurrent-ephemeralvolume-syncs: "${m.concurrentEphemeralvolumeSyncs.value}"
            concurrent-gc-syncs: "${m.concurrentGcSyncs.value}"
            concurrent-horizontal-pod-autoscaler-syncs: "${m.concurrentHorizontalPodAutoscalerSyncs.value}"
            concurrent-job-syncs: "${m.concurrentJobSyncs.value}"
            concurrent-namespace-syncs: "${m.concurrentNamespaceSyncs.value}"
            concurrent-rc-syncs: "${m.concurrentRcSyncs.value}"
            concurrent-replicaset-syncs: "${m.concurrentReplicasetSyncs.value}"
            concurrent-resource-quota-syncs: "${m.concurrentResourceQuotaSyncs.value}"
            concurrent-service-endpoint-syncs: "${m.concurrentServiceEndpointSyncs.value}"
            concurrent-service-syncs: "${m.concurrentServiceSyncs.value}"
            concurrent-serviceaccount-token-syncs: "${m.concurrentServiceaccountTokenSyncs.value}"
            concurrent-statefulset-syncs: "${m.concurrentStatefulsetSyncs.value}"
            concurrent-ttl-after-finished-syncs: "${m.concurrentTtlAfterFinishedSyncs.value}"
            concurrent-validating-admission-policy-status-syncs: "${m.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
            configure-cloud-routes: "${m.configureCloudRoutes.value}"
            contention-profiling: "${m.contentionProfiling.value}"
            controller-start-interval: "${m.controllerStartInterval.value}"
            controllers: "${m.controllers.value}"
            disable-attach-detach-reconcile-sync: "${m.disableAttachDetachReconcileSync.value}"
            disable-force-detach-on-timeout: "${m.disableForceDetachOnTimeout.value}"
            enable-dynamic-provisioning: "${m.enableDynamicProvisioning.value}"
            enable-garbage-collector: "${m.enableGarbageCollector.value}"
            enable-hostpath-provisioner: "${m.enableHostpathProvisioner.value}"
            enable-leader-migration: "${m.enableLeaderMigration.value}"
            endpoint-updates-batch-period: "${m.endpointUpdatesBatchPeriod.value}"
            endpointslice-updates-batch-period: "${m.endpointsliceUpdatesBatchPeriod.value}"
            feature-gates: "${m.featureGates.value}"
            flex-volume-plugin-dir: "${m.flexVolumePluginDir.value}"
            help: "${m.help.value}"
            horizontal-pod-autoscaler-cpu-initialization-period: "${m.horizontalPodAutoscalerCpuInitializationPeriod.value}"
            horizontal-pod-autoscaler-downscale-delay: "${m.horizontalPodAutoscalerDownscaleDelay.value}"
            horizontal-pod-autoscaler-downscale-stabilization: "${m.horizontalPodAutoscalerDownscaleStabilization.value}"
            horizontal-pod-autoscaler-initial-readiness-delay: "${m.horizontalPodAutoscalerInitialReadinessDelay.value}"
            horizontal-pod-autoscaler-sync-period: "${m.horizontalPodAutoscalerSyncPeriod.value}"
            horizontal-pod-autoscaler-tolerance: "${m.horizontalPodAutoscalerTolerance.value}"
            horizontal-pod-autoscaler-upscale-delay: "${m.horizontalPodAutoscalerUpscaleDelay.value}"
            http2-max-streams-per-connection: "${m.http2MaxStreamsPerConnection.value}"
            kube-api-burst: "${m.kubeApiBurst.value}"
            kube-api-content-type: "${m.kubeApiContentType.value}"
            kube-api-qps: "${m.kubeApiQps.value}"
            kubeconfig: "${m.kubeconfig.value}"
            large-cluster-size-threshold: "${m.largeClusterSizeThreshold.value}"
            leader-elect: "${m.leaderElect.value}"
            leader-elect-lease-duration: "${m.leaderElectLeaseDuration.value}"
            leader-elect-renew-deadline: "${m.leaderElectRenewDeadline.value}"
            leader-elect-resource-lock: "${m.leaderElectResourceLock.value}"
            leader-elect-resource-name: "${m.leaderElectResourceName.value}"
            leader-elect-resource-namespace: "${m.leaderElectResourceNamespace.value}"
            leader-elect-retry-period: "${m.leaderElectRetryPeriod.value}"
            legacy-service-account-token-clean-up-period: "${m.legacyServiceAccountTokenCleanUpPeriod.value}"
            log-flush-frequency: "${m.logFlushFrequency.value}"
            log-json-info-buffer-size: "${m.logJsonInfoBufferSize.value}"
            log-json-split-stream: "${m.logJsonSplitStream.value}"
            log-text-info-buffer-size: "${m.logTextInfoBufferSize.value}"
            log-text-split-stream: "${m.logTextSplitStream.value}"
            logging-format: "${m.loggingFormat.value}"
            max-endpoints-per-slice: "${m.maxEndpointsPerSlice.value}"
            min-resync-period: "${m.minResyncPeriod.value}"
            mirroring-concurrent-service-endpoint-syncs: "${m.mirroringConcurrentServiceEndpointSyncs.value}"
            mirroring-endpointslice-updates-batch-period: "${m.mirroringEndpointsliceUpdatesBatchPeriod.value}"
            mirroring-max-endpoints-per-subset: "${m.mirroringMaxEndpointsPerSubset.value}"
            namespace-sync-period: "${m.namespaceSyncPeriod.value}"
            node-cidr-mask-size: "${m.nodeCidrMaskSize.value}"
            node-cidr-mask-size-ipv4: "${m.nodeCidrMaskSizeIpv4.value}"
            node-cidr-mask-size-ipv6: "${m.nodeCidrMaskSizeIpv6.value}"
            node-eviction-rate: "${m.nodeEvictionRate.value}"
            node-monitor-grace-period: "${m.nodeMonitorGracePeriod.value}"
            node-monitor-period: "${m.nodeMonitorPeriod.value}"
            node-startup-grace-period: "${m.nodeStartupGracePeriod.value}"
            node-sync-period: "${m.nodeSyncPeriod.value}"
            permit-address-sharing: "${m.permitAddressSharing.value}"
            permit-port-sharing: "${m.permitPortSharing.value}"
            profiling: "${m.profiling.value}"
            pv-recycler-increment-timeout-nfs: "${m.pvRecyclerIncrementTimeoutNfs.value}"
            pv-recycler-minimum-timeout-hostpath: "${m.pvRecyclerMinimumTimeoutHostpath.value}"
            pv-recycler-minimum-timeout-nfs: "${m.pvRecyclerMinimumTimeoutNfs.value}"
            pv-recycler-timeout-increment-hostpath: "${m.pvRecyclerTimeoutIncrementHostpath.value}"
            pvclaimbinder-sync-period: "${m.pvclaimbinderSyncPeriod.value}"
            requestheader-client-ca-file: "${m.requestheaderClientCaFile.value}"
            requestheader-extra-headers-prefix: "${m.requestheaderExtraHeadersPrefix.value}"
            requestheader-group-headers: "${m.requestheaderGroupHeaders.value}"
            requestheader-username-headers: "${m.requestheaderUsernameHeaders.value}"
            resource-quota-sync-period: "${m.resourceQuotaSyncPeriod.value}"
            root-ca-file: "${m.rootCaFile.value}"
            route-reconciliation-period: "${m.routeReconciliationPeriod.value}"
            secondary-node-eviction-rate: "${m.secondaryNodeEvictionRate.value}"
            secure-port: "${m.securePort.value}"
            service-account-private-key-file: "${m.serviceAccountPrivateKeyFile.value}"
            terminated-pod-gc-threshold: "${m.terminatedPodGcThreshold.value}"
            unhealthy-zone-threshold: "${m.unhealthyZoneThreshold.value}"
            use-service-account-credentials: "${m.useServiceAccountCredentials.value}"
            v: "${m.v.value}"
            version: "${m.version.value}"
            volume-host-allow-local-loopback: "${m.volumeHostAllowLocalLoopback.value}"

        scheduler:
          extraArgs:
            bind-address: 0.0.0.0
            leader-elect: "true"
        EOF
      `})]}),(0,l.jsx)(k.A,{value:"Cloud-init",children:(0,l.jsx)(d.A,{children:c`
        - path: ${b.M.kuberneteBaseFolderPath.value}/kubeadm.conf
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
            kubernetesVersion: ${g.M.kubernetes.value}
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
                allocate-node-cidrs: "${m.allocateNodeCidrs.value}"
                allow-untagged-cloud: "${m.allowUntaggedCloud.value}"
                attach-detach-reconcile-sync-period: "${m.attachDetachReconcileSyncPeriod.value}"
                authentication-kubeconfig: "${m.authenticationKubeconfig.value}"
                authentication-skip-lookup: "${m.authenticationSkipLookup.value}"
                authentication-token-webhook-cache-ttl: "${m.authenticationTokenWebhookCacheTtl.value}"
                authentication-tolerate-lookup-failure: "${m.authenticationTolerateLookupFailure.value}"
                authorization-always-allow-paths: "${m.authorizationAlwaysAllowPaths.value}"
                authorization-kubeconfig: "${m.authorizationKubeconfig.value}"
                authorization-webhook-cache-authorized-ttl: "${m.authorizationWebhookCacheAuthorizedTtl.value}"
                authorization-webhook-cache-unauthorized-ttl: "${m.authorizationWebhookCacheUnauthorizedTtl.value}"
                bind-address: "${m.bindAddress.value}"

                cidr-allocator-type: "${m.cidrAllocatorType.value}"
                client-ca-file: "${m.clientCaFile.value}"

                cloud-provider: "${m.cloudProvider.value}"
                cloud-provider-gce-lb-src-cidrs: "${m.cloudProviderGceLbSrcCidrs.value}"

                # cluster-name: "${m.clusterName.value}"
                # TODO
                cluster-name: example

                cluster-signing-cert-file: "${m.clusterSigningCertFile.value}"
                cluster-signing-duration: "${m.clusterSigningDuration.value}"
                cluster-signing-key-file: "${m.clusterSigningKeyFile.value}"

                # Не указывать если значение "" или undefined
                # cluster-signing-kube-apiserver-client-cert-file: "${m.clusterSigningKubeApiserverClientCertFile.value}"
                # cluster-signing-kube-apiserver-client-key-file: "${m.clusterSigningKubeApiserverClientKeyFile.value}"
                # cluster-signing-kubelet-client-cert-file: "${m.clusterSigningKubeletClientCertFile.value}"
                # cluster-signing-kubelet-client-key-file: "${m.clusterSigningKubeletClientKeyFile.value}"
                # cluster-signing-kubelet-serving-cert-file: "${m.clusterSigningKubeletServingCertFile.value}"
                # cluster-signing-kubelet-serving-key-file: "${m.clusterSigningKubeletServingKeyFile.value}"
                # cluster-signing-legacy-unknown-cert-file: "${m.clusterSigningLegacyUnknownCertFile.value}"
                # cluster-signing-legacy-unknown-key-file: "${m.clusterSigningLegacyUnknownKeyFile.value}"
                # cluster-cidr: "${m.clusterCidr.value}"
                # cloud-config: "${m.cloudConfig.value}"
                # cert-dir: "${m.certDir.value}"
                # allow-metric-labels-manifest: "${m.allowMetricLabelsManifest.value}"
                # allow-metric-labels: "${m.allowMetricLabels.value}"
                # disabled-metrics: "${m.disabledMetrics.value}"
                # leader-migration-config: "${m.leaderMigrationConfig.value}"
                # master: "${m.master.value}"
                # pv-recycler-pod-template-filepath-hostpath: "${m.pvRecyclerPodTemplateFilepathHostpath.value}"
                # pv-recycler-pod-template-filepath-nfs: "${m.pvRecyclerPodTemplateFilepathNfs.value}"
                # service-cluster-ip-range: "${m.serviceClusterIpRange.value}"
                # show-hidden-metrics-for-version: "${m.showHiddenMetricsForVersion.value}"
                # tls-cert-file: "${m.tlsCertFile.value}"
                # tls-cipher-suites: "${m.tlsCipherSuites.value}"
                # tls-min-version: "${m.tlsMinVersion.value}"
                # tls-private-key-file: "${m.tlsPrivateKeyFile.value}"
                # tls-sni-cert-key: "${m.tlsSniCertKey.value}"
                # vmodule: "${m.vmodule.value}"
                # volume-host-cidr-denylist: "${m.volumeHostCidrDenylist.value}"
                # external-cloud-volume-plugin: "${m.externalCloudVolumePlugin.value}"
                # requestheader-allowed-names: "${m.requestheaderAllowedNames.value}"

                concurrent-cron-job-syncs: "${m.concurrentCronJobSyncs.value}"
                concurrent-deployment-syncs: "${m.concurrentDeploymentSyncs.value}"
                concurrent-endpoint-syncs: "${m.concurrentEndpointSyncs.value}"
                concurrent-ephemeralvolume-syncs: "${m.concurrentEphemeralvolumeSyncs.value}"
                concurrent-gc-syncs: "${m.concurrentGcSyncs.value}"
                concurrent-horizontal-pod-autoscaler-syncs: "${m.concurrentHorizontalPodAutoscalerSyncs.value}"
                concurrent-job-syncs: "${m.concurrentJobSyncs.value}"
                concurrent-namespace-syncs: "${m.concurrentNamespaceSyncs.value}"
                concurrent-rc-syncs: "${m.concurrentRcSyncs.value}"
                concurrent-replicaset-syncs: "${m.concurrentReplicasetSyncs.value}"
                concurrent-resource-quota-syncs: "${m.concurrentResourceQuotaSyncs.value}"
                concurrent-service-endpoint-syncs: "${m.concurrentServiceEndpointSyncs.value}"
                concurrent-service-syncs: "${m.concurrentServiceSyncs.value}"
                concurrent-serviceaccount-token-syncs: "${m.concurrentServiceaccountTokenSyncs.value}"
                concurrent-statefulset-syncs: "${m.concurrentStatefulsetSyncs.value}"
                concurrent-ttl-after-finished-syncs: "${m.concurrentTtlAfterFinishedSyncs.value}"
                concurrent-validating-admission-policy-status-syncs: "${m.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
                configure-cloud-routes: "${m.configureCloudRoutes.value}"
                contention-profiling: "${m.contentionProfiling.value}"
                controller-start-interval: "${m.controllerStartInterval.value}"
                controllers: "${m.controllers.value}"
                disable-attach-detach-reconcile-sync: "${m.disableAttachDetachReconcileSync.value}"
                disable-force-detach-on-timeout: "${m.disableForceDetachOnTimeout.value}"
                enable-dynamic-provisioning: "${m.enableDynamicProvisioning.value}"
                enable-garbage-collector: "${m.enableGarbageCollector.value}"
                enable-hostpath-provisioner: "${m.enableHostpathProvisioner.value}"
                enable-leader-migration: "${m.enableLeaderMigration.value}"
                endpoint-updates-batch-period: "${m.endpointUpdatesBatchPeriod.value}"
                endpointslice-updates-batch-period: "${m.endpointsliceUpdatesBatchPeriod.value}"
                feature-gates: "${m.featureGates.value}"
                flex-volume-plugin-dir: "${m.flexVolumePluginDir.value}"
                help: "${m.help.value}"
                horizontal-pod-autoscaler-cpu-initialization-period: "${m.horizontalPodAutoscalerCpuInitializationPeriod.value}"
                horizontal-pod-autoscaler-downscale-delay: "${m.horizontalPodAutoscalerDownscaleDelay.value}"
                horizontal-pod-autoscaler-downscale-stabilization: "${m.horizontalPodAutoscalerDownscaleStabilization.value}"
                horizontal-pod-autoscaler-initial-readiness-delay: "${m.horizontalPodAutoscalerInitialReadinessDelay.value}"
                horizontal-pod-autoscaler-sync-period: "${m.horizontalPodAutoscalerSyncPeriod.value}"
                horizontal-pod-autoscaler-tolerance: "${m.horizontalPodAutoscalerTolerance.value}"
                horizontal-pod-autoscaler-upscale-delay: "${m.horizontalPodAutoscalerUpscaleDelay.value}"
                http2-max-streams-per-connection: "${m.http2MaxStreamsPerConnection.value}"
                kube-api-burst: "${m.kubeApiBurst.value}"
                kube-api-content-type: "${m.kubeApiContentType.value}"
                kube-api-qps: "${m.kubeApiQps.value}"
                kubeconfig: "${m.kubeconfig.value}"
                large-cluster-size-threshold: "${m.largeClusterSizeThreshold.value}"
                leader-elect: "${m.leaderElect.value}"
                leader-elect-lease-duration: "${m.leaderElectLeaseDuration.value}"
                leader-elect-renew-deadline: "${m.leaderElectRenewDeadline.value}"
                leader-elect-resource-lock: "${m.leaderElectResourceLock.value}"
                leader-elect-resource-name: "${m.leaderElectResourceName.value}"
                leader-elect-resource-namespace: "${m.leaderElectResourceNamespace.value}"
                leader-elect-retry-period: "${m.leaderElectRetryPeriod.value}"
                legacy-service-account-token-clean-up-period: "${m.legacyServiceAccountTokenCleanUpPeriod.value}"
                log-flush-frequency: "${m.logFlushFrequency.value}"
                log-json-info-buffer-size: "${m.logJsonInfoBufferSize.value}"
                log-json-split-stream: "${m.logJsonSplitStream.value}"
                log-text-info-buffer-size: "${m.logTextInfoBufferSize.value}"
                log-text-split-stream: "${m.logTextSplitStream.value}"
                logging-format: "${m.loggingFormat.value}"
                max-endpoints-per-slice: "${m.maxEndpointsPerSlice.value}"
                min-resync-period: "${m.minResyncPeriod.value}"
                mirroring-concurrent-service-endpoint-syncs: "${m.mirroringConcurrentServiceEndpointSyncs.value}"
                mirroring-endpointslice-updates-batch-period: "${m.mirroringEndpointsliceUpdatesBatchPeriod.value}"
                mirroring-max-endpoints-per-subset: "${m.mirroringMaxEndpointsPerSubset.value}"
                namespace-sync-period: "${m.namespaceSyncPeriod.value}"
                node-cidr-mask-size: "${m.nodeCidrMaskSize.value}"
                node-cidr-mask-size-ipv4: "${m.nodeCidrMaskSizeIpv4.value}"
                node-cidr-mask-size-ipv6: "${m.nodeCidrMaskSizeIpv6.value}"
                node-eviction-rate: "${m.nodeEvictionRate.value}"
                node-monitor-grace-period: "${m.nodeMonitorGracePeriod.value}"
                node-monitor-period: "${m.nodeMonitorPeriod.value}"
                node-startup-grace-period: "${m.nodeStartupGracePeriod.value}"
                node-sync-period: "${m.nodeSyncPeriod.value}"
                permit-address-sharing: "${m.permitAddressSharing.value}"
                permit-port-sharing: "${m.permitPortSharing.value}"
                profiling: "${m.profiling.value}"
                pv-recycler-increment-timeout-nfs: "${m.pvRecyclerIncrementTimeoutNfs.value}"
                pv-recycler-minimum-timeout-hostpath: "${m.pvRecyclerMinimumTimeoutHostpath.value}"
                pv-recycler-minimum-timeout-nfs: "${m.pvRecyclerMinimumTimeoutNfs.value}"
                pv-recycler-timeout-increment-hostpath: "${m.pvRecyclerTimeoutIncrementHostpath.value}"
                pvclaimbinder-sync-period: "${m.pvclaimbinderSyncPeriod.value}"
                requestheader-client-ca-file: "${m.requestheaderClientCaFile.value}"
                requestheader-extra-headers-prefix: "${m.requestheaderExtraHeadersPrefix.value}"
                requestheader-group-headers: "${m.requestheaderGroupHeaders.value}"
                requestheader-username-headers: "${m.requestheaderUsernameHeaders.value}"
                resource-quota-sync-period: "${m.resourceQuotaSyncPeriod.value}"
                root-ca-file: "${m.rootCaFile.value}"
                route-reconciliation-period: "${m.routeReconciliationPeriod.value}"
                secondary-node-eviction-rate: "${m.secondaryNodeEvictionRate.value}"
                secure-port: "${m.securePort.value}"
                service-account-private-key-file: "${m.serviceAccountPrivateKeyFile.value}"
                terminated-pod-gc-threshold: "${m.terminatedPodGcThreshold.value}"
                unhealthy-zone-threshold: "${m.unhealthyZoneThreshold.value}"
                use-service-account-credentials: "${m.useServiceAccountCredentials.value}"
                v: "${m.v.value}"
                version: "${m.version.value}"
                volume-host-allow-local-loopback: "${m.volumeHostAllowLocalLoopback.value}"

            scheduler:
              extraArgs:
                bind-address: 0.0.0.0
                leader-elect: "true"

      `})})]})]})}function L(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(C,{...e})}):C(e)}},86969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configFiles","title":"configFiles","description":"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(98744),i=a(77420),u=a(75478),s=a(72608);const c={},d=void 0,v={},h=[{value:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:3},...u.toc,...i.toc,{value:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:3},...s.toc,...n.toc];function p(e){const t={h3:"h3",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h3,{id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,l.jsx)(u.default,{}),"\n",(0,l.jsx)(i.default,{}),"\n",(0,l.jsx)(t.h3,{id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,l.jsx)(s.default,{}),"\n",(0,l.jsx)(n.default,{})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},87464:(e,t,a)=>{a.d(t,{A:()=>n});a(96540);var r=a(34164);const l={tabItem:"tabItem_Ymn6"};var o=a(74848);function n(e){let{children:t,hidden:a,className:n}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,n),hidden:a,children:t})}},98744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),o=a(28453),n=a(1775),i=a(25292),u=a(60513),s=a(7478),c=a(31798);const d={},v=void 0,h={},p=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,l.jsx)(n.A,{language:"bash",children:u.A`
      export BASE_K8S_PATH="${s.M.kuberneteBaseFolderPath.value}"
      export CLUSTER_NAME="${s.M.clusterName.value}"
      export BASE_DOMAIN="${s.M.kubernetesBaseDomain.value}"
      export KUBE_APISERVER_PORT=${c.h.kubeAPIServer.portNumber}
      export CLUSTER_DOMAIN="${s.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${s.M.virtualMachineFullName.value}"
      export MACHINE_LOCAL_ADDRESS="${s.M.virtualMachineLocalAddress.value}"
      export KUBE_APISERVER_PORT=${c.h.kubeAPIServer.portNumber}

    `}),(0,l.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,l.jsx)(n.A,{children:u.A`cat <<EOF > ${s.M.kuberneteBaseFolderPath.value}/kubeadm.conf
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: $\{KUBE_APISERVER_PORT}
      certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    discovery:
      bootstrapToken:
        apiServerEndpoint: api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${i.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}}}]);