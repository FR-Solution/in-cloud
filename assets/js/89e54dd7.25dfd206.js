"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1507],{6353:(e,t,r)=>{r.d(t,{$:()=>n});var a=r(7478);const n={etcdCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>a});const a={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},31798:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},63770:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},85631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>v,frontMatter:()=>h,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),c=r(7478),s=r(6353),u=r(31798),o=r(63770),i=r(60513),k=r(1775);const h={},d=void 0,b={},p=[];function P(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(k.A,{language:"bash",children:i.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(k.A,{language:"bash",children:i.A`
    cat <<EOF > ${c.M.kuberneteBaseFolderPath.value}/manifests/kube-controller-manager.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      creationTimestamp: null
      labels:
        component: kube-controller-manager
        tier: control-plane
      name: kube-controller-manager
      namespace: kube-system
    spec:
      containers:
      - command:
        - kube-controller-manager
        - --authentication-kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
        - --authorization-always-allow-paths=/healthz,/readyz,/livez,/metrics
        - --authorization-kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
        - --bind-address=0.0.0.0
        - --client-ca-file=${s.$.kubernetesCA.crtPath}
        - --cluster-name=${c.M.clusterName.value}
        - --cluster-signing-cert-file=${s.$.kubernetesCA.crtPath}
        - --cluster-signing-duration=720h
        - --cluster-signing-key-file=${s.$.kubernetesCA.keyPath}
        - --concurrent-replicaset-syncs=20
        - --controllers=*,bootstrapsigner,tokencleaner
        - --feature-gates=RotateKubeletServerCertificate=true
        - --kube-api-burst=120
        - --kube-api-qps=100
        - --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
        - --leader-elect=true
        - --namespace-sync-period=2m0s
        - --node-startup-grace-period=10s
        - --requestheader-client-ca-file=${s.$.frontProxyCA.crtPath}
        - --root-ca-file=${s.$.kubernetesCA.crtPath}
        - --service-account-private-key-file=${s.$.kubernetesSA.keyPath}
        - --terminated-pod-gc-threshold=12500
        - --use-service-account-credentials=true
        - --v=2
        image: ${c.M.baseDockerRegistry.value}/kube-controller-manager:${o.M.kubernetes.value}
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 8
          httpGet:
            path: /healthz
            port: ${u.h.kubeControllerManager.portNumber}
            scheme: HTTPS
          initialDelaySeconds: 10
          periodSeconds: 10
          timeoutSeconds: 15
        name: kube-controller-manager
        resources:
          requests:
            cpu: 200m
        startupProbe:
          failureThreshold: 24
          httpGet:
            path: /healthz
            port: ${u.h.kubeControllerManager.portNumber}
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
        - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
          name: flexvolume-dir
        - mountPath: ${c.M.kuberneteBaseFolderPath.value}/pki
          name: k8s-certs
          readOnly: true
        - mountPath: ${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
          name: kubeconfig
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
          path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
          type: DirectoryOrCreate
        name: flexvolume-dir
      - hostPath:
          path: ${c.M.kuberneteBaseFolderPath.value}/pki
          type: DirectoryOrCreate
        name: k8s-certs
      - hostPath:
          path: ${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
          type: FileOrCreate
        name: kubeconfig
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
  `})]})}function v(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(P,{...e})}):P()}}}]);