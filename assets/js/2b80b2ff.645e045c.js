"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[495,876,889,1063,1121,1197,1200,1438,1516,1579,1585,1597,1607,1608,1710,1736,1759,2082,2085,2262,2355,2393,2431,2526,2528,2752,2770,2983,3218,3515,3537,3548,3605,3751,3843,4043,4048,4218,4311,4373,4582,4668,4742,4936,5253,5266,5405,5569,5665,5769,5800,5876,5889,6622,6846,7016,7160,7167,7224,7387,7389,7393,7562,7579,7981,8053,8129,8261,8290,8426,8462,8492,8743,9116,9249,9548,9671,9689,9740],{535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs ca \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Create Kubernetes CA
  [certs] Generating "ca" certificate and key
  `})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>v,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/configFiles","title":"configFiles","description":"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(7478),o=n(28702),u=n(87464),d=n(62774);const h={},m=void 0,b={},p=[];function k(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
      cat <<EOF > ${l.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${o.D.data.value}
      EOF
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
      - path: ${l.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${o.D.data.value}
    `})]})]})}function v(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},3336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Kubernetes CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(47174),o=n(535);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"Kubernetes CA"}),"."]})]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},6353:(e,t,n)=>{n.d(t,{$:()=>s});var r=n(7478);const s={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},6783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `ETCD CA`.","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/main.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/main","permalink":"/in-cloud/tech-docs/etcd/certificates/centerAuthority/etcdCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(83807),o=n(84778);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"ETCD CA"}),"."]})]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},6847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${l.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${l.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.kubectl.path}"


      LOG_TAG="kubectl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."

      CURRENT_VERSION=$(kubectl version --client --short 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
        curl -fsSL -o kubectl "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubectl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
        install -m 755 kubectl "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/kubectl
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${o.M.kubernetes.value}"
            REPOSITORY="${l.m.kubectl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          cat <<EOF > /usr/lib/systemd/system/kubectl-install.service
          [Unit]
          Description=Install and update kubectl
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubectl/download.env
          ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${o.M.kubernetes.value}"
              REPOSITORY="${l.m.kubectl.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /usr/lib/systemd/system/kubectl-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubectl
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubectl/download.env
              ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},7109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  mkdir -p ${c.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubeletClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = system:node:$\{FULL_HOST_NAME}
  O  = system:nodes

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubeletClient.keyPath} ${i.$.kubeletClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${i.$.kubeletClient.keyPath} \\
    -out ${i.$.kubeletClient.csrPath} \\
    -config ${i.$.kubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubeletClient.csrPath} \\
    -out ${i.$.kubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubeletClient.crtConf}
`}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat ${i.$.kubeletClient.crtPath} ${i.$.kubeletClient.keyPath} >> ${i.$.kubeletNowClient.crtPath}
  ln -s ${i.$.kubeletNowClient.crtPath} ${i.$.kubeletCurrentClient.crtPath}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},7915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){const t={p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
      export CLUSTER_NAME="${c.M.clusterName.value}"
      export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
  `}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${i.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${i.$.kubernetesSchedulerClient.crtPath} \\
    --client-key=${i.$.kubernetesSchedulerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/scheduler.conf
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},8790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>Q,contentTitle:()=>Y,default:()=>ee,frontMatter:()=>J,metadata:()=>r,toc:()=>X});var r=n(90725),s=n(74848),a=n(28453),i=n(31798),c=n(7478),l=n(63770),o=n(84588),u=n(21880),d=n(83276),h=n(36417),m=n(6847),b=n(19513),p=n(87217),k=n(42847),v=n(85072),f=n(23538),g=n(65934),x=n(52672),A=n(67332),$=n(52315),j=n(863),y=n(86969),C=n(44772),P=n(14592),S=n(3336),N=n(80263),E=n(6783),O=n(52717),M=n(59968),T=n(23202),I=n(61805),L=n(47279),R=n(55609),F=n(17510),_=n(67069),w=n(81970),D=n(67716),B=n(68890),U=n(56721),G=n(99119),z=n(97786),K=n(21289),H=n(87464),V=n(62774),W=n(1775),q=n(60513);const J={title:"Kubernetes The Hard Way",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-the-hard-way"},Y=void 0,Q={authorsImageUrls:[]},X=[{value:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes The Hard Way",id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-kubernetes-the-hard-way",level:4},{value:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u043e\u0447\u0435\u043c\u0443 &quot;The Hard Way&quot;?",id:"\u043f\u043e\u0447\u0435\u043c\u0443-the-hard-way",level:3},{value:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b Kubernetes",id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-kubernetes",level:3},{value:"\u0428\u0430\u0433\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f",id:"\u0448\u0430\u0433\u0438-\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f",level:3},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:3},{value:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435",id:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f-\u043e-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435",level:4},{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0448\u0438\u043d\u044b \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440",id:"\u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435-\u043c\u0430\u0448\u0438\u043d\u044b-\u043f\u043e\u0434-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439-\u043a\u043e\u043d\u0442\u0443\u0440",level:4},{value:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f kube-apiserver",id:"\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u043b\u044f-kube-apiserver",level:4},{value:"DNS \u0437\u0430\u043f\u0438\u0441\u0438",id:"dns-\u0437\u0430\u043f\u0438\u0441\u0438",level:4},{value:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u044b \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u0430\u0445",id:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435-\u043f\u043e\u0440\u0442\u044b-\u043d\u0430-\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430\u0445",level:4},{value:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432",id:"\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",level:3},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0443\u0437\u043b\u0430",level:4},...o.toc,{value:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430",id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0438\u043c\u0435\u043d\u0438-\u0443\u0437\u043b\u0430",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Sysctl",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-sysctl",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0442\u0438",level:4},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},...u.toc,...d.toc,...h.toc,...m.toc,...b.toc,...p.toc,...k.toc,{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},...g.toc,...f.toc,...v.toc,...x.toc,...C.toc,...y.toc,...$.toc,...A.toc,...j.toc,{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},...P.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},...S.toc,...N.toc,...E.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",level:3},...O.toc,...M.toc,...T.toc,...L.toc,...I.toc,...R.toc,...F.toc,..._.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 kubeconfigs \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-kubeconfigs-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",level:3},...D.toc,...U.toc,...B.toc,...G.toc,...w.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 Service Accounts",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043b\u044e\u0447\u0430-\u0434\u043b\u044f-\u043f\u043e\u0434\u043f\u0438\u0441\u0438-service-accounts",level:3},...z.toc,{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u0431\u043b\u043e\u043a\u0430-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},...K.toc];function Z(e){const t={admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-kubernetes-the-hard-way",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes The Hard Way"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"\u0412\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0441\u0435\u0440\u0438\u044e \u0441\u0442\u0430\u0442\u0435\u0439 \u043f\u043e Kubernetes \u0432 \u043d\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."})})}),"\n",(0,s.jsxs)(t.p,{children:["\u042d\u0442\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u043e\u043f\u044b\u0442 \u043f\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044e Kubernetes, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,s.jsx)(t.code,{children:"kubeadm"}),". \u0422\u0430\u043a\u0436\u0435 \u0434\u0430\u043d\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u0438\u043a ",(0,s.jsx)(t.code,{children:"IAC"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["\u0422\u0430\u043a\u0436\u0435 \u0432\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u0430\u044f \u0434\u0430\u043b\u044c\u0448\u0435, \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 ",(0,s.jsx)(t.code,{children:"kubeadm"}),", \u0433\u0434\u0435 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u043e\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u2014 \u0441\u043e\u0431\u0440\u0430\u043d \u043e\u043d \u0447\u0435\u0440\u0435\u0437 kub",(0,s.jsx)(t.code,{children:"eadm \u0438\u043b\u0438 "}),'"The Hard Way"`.']}),"\n","\n",(0,s.jsx)(t.h3,{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Kubernetes"})," \u0441\u0442\u0430\u043b \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043e\u043c \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438. \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0432\u0440\u043e\u0434\u0435 ",(0,s.jsx)(t.code,{children:"kubeadm"})," \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u044e\u0442 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435, \u043d\u043e \u0432\u0430\u0436\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u043a\u0430\u043a ",(0,s.jsx)(t.code,{children:"Kubernetes"})," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0438\u0437\u043d\u0443\u0442\u0440\u0438. \u0411\u0435\u0437 \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u043e\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u043e\u0434\u0445\u043e\u0434 ",(0,s.jsx)(t.code,{children:'"The Hard Way"'})," \u2014 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."]}),"\n",(0,s.jsx)(t.h3,{id:"\u043f\u043e\u0447\u0435\u043c\u0443-the-hard-way",children:'\u041f\u043e\u0447\u0435\u043c\u0443 "The Hard Way"?'}),"\n",(0,s.jsx)(t.p,{children:'\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes "The Hard Way" \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u043c, \u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0434\u0430\u0435\u0442 \u0440\u044f\u0434 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 Kubernetes "\u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c".'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u0413\u0438\u0431\u043a\u043e\u0441\u0442\u044c: \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u0430\u0448\u0438\u043c\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u043c\u0438."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-kubernetes",children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b Kubernetes"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"}),(0,s.jsx)("th",{children:"\u0412\u0435\u0440\u0441\u0438\u044f"}),(0,s.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"containerd"}),(0,s.jsx)("td",{children:l.M.containerd.value}),(0,s.jsx)("td",{children:"\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0437\u0430\u043f\u0443\u0441\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"runc"}),(0,s.jsx)("td",{children:l.M.runc.value}),(0,s.jsx)("td",{children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u044f\u0434\u0440\u0430 Linux."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"crictl"}),(0,s.jsx)("td",{children:l.M.crictl.value}),(0,s.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 CRI."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubectl"}),(0,s.jsx)("td",{children:l.M.kubernetes.value}),(0,s.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 Kubernetes-API \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubeadm"}),(0,s.jsx)("td",{children:l.M.kubernetes.value}),(0,s.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Kubernetes. (*\u0411\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438)."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet"}),(0,s.jsx)("td",{children:l.M.kubernetes.value}),(0,s.jsx)("td",{children:"\u0410\u0433\u0435\u043d\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0437\u0430\u043f\u0443\u0441\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 (\u043f\u043e\u0434\u0430\u043c\u0438), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0438\u0445 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd"}),(0,s.jsx)("td",{children:l.M.etcd.value}),(0,s.jsx)("td",{children:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u043b\u044e\u0447\u0435\u0439-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-apiserver"}),(0,s.jsx)("td",{children:l.M.kubernetes.value}),(0,s.jsx)("td",{children:"RESTful API \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-controller-manager"}),(0,s.jsx)("td",{children:l.M.kubernetes.value}),(0,s.jsx)("td",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-scheduler"}),(0,s.jsx)("td",{children:l.M.kubernetes.value}),(0,s.jsx)("td",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043e\u0432 \u043f\u043e \u0443\u0437\u043b\u0430\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"conntrack"}),(0,s.jsx)("td",{children:"v1.4.+"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"socat"}),(0,s.jsx)("td",{children:"1.8.+"}),(0,s.jsx)("td",{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0448\u0430\u0433\u0438-\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f",children:"\u0428\u0430\u0433\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,s.jsx)(t.p,{children:'\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes "The Hard Way" \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,s.jsx)(t.li,{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Sysctl"}),"\n",(0,s.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 kubeconfigs \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 Service Accounts"}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Static Pods"}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a Kubelet"}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 Kubernetes"}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 Kubernetes"}),"\n",(0,s.jsx)(t.li,{children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u043a\u0435\u043d\u043e\u0432"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,s.jsx)(t.p,{children:"\u0414\u043b\u044f \u043e\u0441\u043d\u043e\u0432\u044b \u043d\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f:"}),"\n",(0,s.jsx)(t.h4,{id:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f-\u043e-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u0418\u043c\u044f"}),(0,s.jsx)("th",{children:"\u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0434\u043e\u043c\u0435\u043d"}),(0,s.jsx)("th",{children:"\u0412\u0435\u0440\u0441\u0438\u044f"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:c.M.clusterName.value}),(0,s.jsx)("td",{children:c.M.kubernetesBaseDomain.value}),(0,s.jsx)("td",{children:l.M.kubernetes.value})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"\u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435-\u043c\u0430\u0448\u0438\u043d\u044b-\u043f\u043e\u0434-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439-\u043a\u043e\u043d\u0442\u0443\u0440",children:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0448\u0438\u043d\u044b \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u0418\u043c\u044f"}),(0,s.jsx)("th",{children:"IP \u0410\u0434\u0440\u0435\u0441"}),(0,s.jsx)("th",{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u041e\u0421"}),(0,s.jsx)("th",{children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["master-1.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.16"}),(0,s.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,s.jsx)("td",{children:"2CPU/2RAM/20Gb"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["master-2.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.22"}),(0,s.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,s.jsx)("td",{children:"2CPU/2RAM/20Gb"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["master-3.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.14"}),(0,s.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,s.jsx)("td",{children:"2CPU/2RAM/20Gb"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u043b\u044f-kube-apiserver",children:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f kube-apiserver"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"IP \u0410\u0434\u0440\u0435\u0441"}),(0,s.jsx)("th",{children:"\u0422\u0430\u0440\u0433\u0435\u0442 \u0433\u0440\u0443\u043f\u043f\u0430"}),(0,s.jsx)("th",{children:"\u041f\u043e\u0440\u0442"}),(0,s.jsx)("th",{children:"\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u0442"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"10.0.0.6"}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"10.0.0.16"}),"\n",(0,s.jsx)(t.li,{children:"10.0.0.22"}),"\n",(0,s.jsx)(t.li,{children:"10.0.0.14"}),"\n"]})}),(0,s.jsx)("td",{children:"6443"}),(0,s.jsx)("td",{children:"6443"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"dns-\u0437\u0430\u043f\u0438\u0441\u0438",children:"DNS \u0437\u0430\u043f\u0438\u0441\u0438"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"A (Record)\u0441"}),(0,s.jsx)("th",{children:"IP \u0410\u0434\u0440\u0435\u0441"}),(0,s.jsx)("th",{children:"TTL"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["api.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.6"}),(0,s.jsx)("td",{children:"60s"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["master-1.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.16"}),(0,s.jsx)("td",{children:"60s"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["master-2.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.22"}),(0,s.jsx)("td",{children:"60s"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["master-3.",c.M.clusterName.value,".",c.M.kubernetesBaseDomain.value]}),(0,s.jsx)("td",{children:"10.0.0.14"}),(0,s.jsx)("td",{children:"60s"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435-\u043f\u043e\u0440\u0442\u044b-\u043d\u0430-\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430\u0445",children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u044b \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u0430\u0445"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"}),(0,s.jsx)("th",{children:"\u041f\u043e\u0440\u0442"}),(0,s.jsx)("th",{children:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd-server"}),(0,s.jsx)("td",{children:i.h.etcdServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd-peer"}),(0,s.jsx)("td",{children:i.h.etcdPeer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd-metrics"}),(0,s.jsx)("td",{children:i.h.etcdMetricServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-apiserver"}),(0,s.jsx)("td",{children:i.h.kubeAPIServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-controller-manager"}),(0,s.jsx)("td",{children:i.h.kubeControllerManager.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-scheduler"}),(0,s.jsx)("td",{children:i.h.kubeScheduler.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet-healthz"}),(0,s.jsx)("td",{children:i.h.kubeletHealthz.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet-server"}),(0,s.jsx)("td",{children:i.h.kubeletServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet-read-only-port"}),(0,s.jsx)("td",{children:i.h.kubeletReadOnlyPort.portNumber}),(0,s.jsx)("td",{children:"TCP"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,s.jsx)(t.h4,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0443\u0437\u043b\u0430",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430"}),"\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)(W.A,{language:"bash",children:q.A`
      export CLUSTER_NAME="${c.M.clusterName.value}"
      export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
  `}),"\n",(0,s.jsx)(t.h4,{id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0438\u043c\u0435\u043d\u0438-\u0443\u0437\u043b\u0430",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430"}),"\n",(0,s.jsx)(W.A,{language:"bash",children:q.A`
      hostnamectl set-hostname $\{FULL_HOST_NAME}
  `}),"\n",(0,s.jsxs)(V.A,{groupId:"install-pkg",children:[(0,s.jsx)(H.A,{value:"apt",children:(0,s.jsx)(W.A,{language:"bash",children:q.A`
        sudo apt update
        sudo apt install conntrack socat
      `})}),(0,s.jsx)(H.A,{value:"yum",children:(0,s.jsx)(W.A,{language:"bash",children:q.A`
        sudo yum update
        sudo yum install conntrack-tools socat
      `})}),(0,s.jsx)(H.A,{value:"dnf",children:(0,s.jsx)(W.A,{language:"bash",children:q.A`
        sudo dnf update
        sudo dnf install conntrack-tools socat
      `})})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),"\n",(0,s.jsxs)(V.A,{groupId:"install-type",children:[(0,s.jsxs)(H.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
        cat <<EOF > /etc/modules-load.d/k8s.conf
        overlay
        br_netfilter
        EOF
      `}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
            sudo -i
            modprobe overlay
            modprobe br_netfilter
        `})]}),(0,s.jsxs)(H.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
      # write_files:
      - path: /etc/modules-load.d/k8s.conf
        owner: root:root
        permissions: '0644'
        content: |
          overlay
          br_netfilter
    `}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
        # runcmd:
        - modprobe overlay
        - modprobe br_netfilter
      `})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,s.jsx)(t.code,{children:"overlay"})," \u0441\u0432\u044f\u0437\u0430\u043d \u0441 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 OverlayFS, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043b\u043e\u044f\u043c\u0438 \u0432 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439 (\u0441\u043b\u043e\u0451\u0432) \u0432 \u043e\u0434\u043d\u0443 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0422\u0430\u043a\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0435 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u044b, \u043a\u0430\u043a Docker \u0438 containerd (\u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Kubernetes), \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442 OverlayFS \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432."]}),(0,s.jsxs)(t.p,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,s.jsx)(t.code,{children:"br_netfilter"})," \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043c\u043e\u0441\u0442\u044b (bridges) \u0441 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 netfilter \u0432 \u044f\u0434\u0440\u0435 Linux. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0442\u0440\u0430\u0444\u0438\u043a, \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0441\u0442\u044b, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e iptables."]})]}),"\n",(0,s.jsx)(t.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-sysctl",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Sysctl"}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0442\u0438",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438"}),(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043c\u043e\u0434\u0443\u043b\u044f br_netfilter \u0447\u0430\u0441\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0431\u0440\u0438\u0434\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u0444\u0438\u043a \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f iptables."}),(0,s.jsxs)(V.A,{groupId:"install-type",children:[(0,s.jsxs)(H.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `})]}),(0,s.jsxs)(H.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `})]})]}),(0,s.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,s.jsx)(t.code,{children:"net.ipv4.ip_forward"})," \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d, \u044f\u0434\u0440\u043e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0442\u044c IP-\u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c\u0438, \u0447\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c \u0441 \u0441\u0435\u0442\u044c\u044e \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0434\u043e\u0432 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0438\u043b\u0438 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438."]}),(0,s.jsxs)(V.A,{groupId:"install-type",children:[(0,s.jsxs)(H.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
    cat <<EOF > /etc/sysctl.d/99-network.conf
    net.ipv4.ip_forward=1
    EOF
  `}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
      sysctl --system
    `})]}),(0,s.jsxs)(H.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
    # write_files:
    - path: /etc/sysctl.d/99-network.conf
      owner: root:root
      permissions: '0644'
      content: |
        net.ipv4.ip_forward=1
  `}),(0,s.jsx)(W.A,{language:"bash",children:q.A`
      # runcmd:
      - sysctl --system
    `})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(V.A,{groupId:"component",children:[(0,s.jsx)(H.A,{value:"containerd",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 containerd"}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(H.A,{value:"runc",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 runc"}),(0,s.jsx)(d.default,{})]})}),(0,s.jsx)(H.A,{value:"crictl",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 crictl"}),(0,s.jsx)(h.default,{})]})}),(0,s.jsx)(H.A,{value:"kubectl",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubectl"}),(0,s.jsx)(m.default,{})]})}),(0,s.jsxs)(H.A,{value:"kubeadm",children:[(0,s.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,s.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."})}),(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubeadm"}),(0,s.jsx)(b.default,{})]})]}),(0,s.jsx)(H.A,{value:"kubelet",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubelet"}),(0,s.jsx)(p.default,{})]})}),(0,s.jsx)(H.A,{value:"etcd",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,s.jsx)(k.default,{})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(V.A,{groupId:"component",children:[(0,s.jsx)(H.A,{value:"containerd",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 containerd"}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsx)(g.default,{}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsx)(f.default,{}),(0,s.jsx)("h4",{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),(0,s.jsx)(v.default,{})]})}),(0,s.jsx)(H.A,{value:"crictl",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 crictl"}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsx)(x.default,{})]})}),(0,s.jsxs)(H.A,{value:"kubeadm",children:[(0,s.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,s.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."})}),(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubeadm"}),(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsx)(C.default,{}),(0,s.jsx)(y.default,{})]})]}),(0,s.jsx)(H.A,{value:"kubelet",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsx)($.default,{}),(0,s.jsx)("h4",{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),(0,s.jsx)(A.default,{}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsx)(j.default,{})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsx)(P.default,{}),"\n",(0,s.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(V.A,{groupId:"CA",children:[(0,s.jsx)(H.A,{value:"Kubernetes \u0426\u0410",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Kubernetes \u0426\u0410"}),(0,s.jsx)(S.default,{})]})}),(0,s.jsx)(H.A,{value:"FrontProxy \u0426\u0410",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"FrontProxy \u0426\u0410"}),(0,s.jsx)(N.default,{})]})}),(0,s.jsx)(H.A,{value:"ETCD \u0426\u0410",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"ETCD \u0426\u0410"}),(0,s.jsx)(E.default,{})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,s.jsxs)(V.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(H.A,{value:"Kubelet Server",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Kubelet server"}),(0,s.jsx)(O.default,{})]})}),(0,s.jsx)(H.A,{value:"API > Etcd",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"K8S-API client > Etcd"}),(0,s.jsx)(M.default,{})]})}),(0,s.jsx)(H.A,{value:"API > Kubelet",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"K8S-API client > Kubelet"}),(0,s.jsx)(T.default,{})]})}),(0,s.jsx)(H.A,{value:"API Server",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"K8S-API server"}),(0,s.jsx)(L.default,{})]})}),(0,s.jsx)(H.A,{value:"Proxy > API",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"FrontProxy client > K8S-API"}),(0,s.jsx)(I.default,{})]})}),(0,s.jsx)(H.A,{value:"Etcd Client",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Etcd client > Etcd"}),(0,s.jsx)(R.default,{})]})}),(0,s.jsx)(H.A,{value:"Etcd Server",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Etcd server"}),(0,s.jsx)(F.default,{})]})}),(0,s.jsx)(H.A,{value:"Etcd Peer",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Etcd peer > Etcd"}),(0,s.jsx)(_.default,{})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-kubeconfigs-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 kubeconfigs \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,s.jsxs)(V.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(H.A,{value:"Kubelet",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Kubelet client"}),(0,s.jsx)(D.default,{})]})}),(0,s.jsx)(H.A,{value:"Super Admin",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Super Admin"}),(0,s.jsx)(U.default,{})]})}),(0,s.jsx)(H.A,{value:"Admin",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Admin"}),(0,s.jsx)(B.default,{})]})}),(0,s.jsx)(H.A,{value:"Controller",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Kube Controller Manager"}),(0,s.jsx)(G.default,{})]})}),(0,s.jsx)(H.A,{value:"Scheduler",children:(0,s.jsxs)(n,{open:!0,children:[(0,s.jsx)("summary",{children:"Kube Scheduler"}),(0,s.jsx)(w.default,{})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043b\u044e\u0447\u0430-\u0434\u043b\u044f-\u043f\u043e\u0434\u043f\u0438\u0441\u0438-service-accounts",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 Service Accounts"}),"\n",(0,s.jsx)(z.default,{}),"\n",(0,s.jsx)(t.h3,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u0431\u043b\u043e\u043a\u0430-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(K.default,{})]})}function ee(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(Z,{...e})}):Z(e)}},10119:(e,t,n)=>{n.d(t,{D:()=>a});var r=n(6353),s=n(31798);const a={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${s.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${s.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},11321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesFrontProxyClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesFrontProxyClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${i.$.kubernetesFrontProxyClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl genrsa \\
      -out ${i.$.kubernetesFrontProxyClient.keyPath} ${i.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl req \\
      -new \\
      -key    ${i.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${i.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${i.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.frontProxyCA.crtPath} \\
    -CAkey ${i.$.frontProxyCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesFrontProxyClient.csrPath} \\
    -out ${i.$.kubernetesFrontProxyClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesFrontProxyClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},11946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(7478);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,s.jsx)("h4",{children:"\u0420\u043e\u0442\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Ротация сертификатов
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},14592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyComponent","title":"componentsReadyComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/componentsReadyComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyComponent","permalink":"/in-cloud/tech-docs/kubernetes/components/componentsReadyComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(62774),c=n(87464),l=n(1775),o=n(60513),u=n(7478);const d={},h=void 0,m={},b=[];function p(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(i.A,{groupId:"current-master",children:[(0,s.jsxs)(c.A,{value:"Init",children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
      kubeadm init phase preflight --dry-run \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),(0,s.jsx)(l.A,{language:"bash",children:o.A`
  [preflight] Running pre-flight checks
  [preflight] Would pull the required images (like 'kubeadm config images pull')
`})]}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"}),(0,s.jsx)(l.A,{language:"bash",children:o.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]}),(0,s.jsxs)(c.A,{value:"Join",children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
      kubeadm join phase preflight --dry-run \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),(0,s.jsx)(l.A,{language:"bash",children:o.A`
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"}),(0,s.jsx)(l.A,{language:"bash",children:o.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},16812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
    mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
    mkdir -p ${c.M.kuberneteBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesSuperAdminClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesSuperAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${i.$.kubernetesSuperAdminClient.cname}
  O  = system:masters

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesSuperAdminClient.keyPath} ${i.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${i.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${i.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesSuperAdminClient.csrPath} \\
    -out ${i.$.kubernetesSuperAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesSuperAdminClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},17150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775);const l={},o=void 0,u={},d=[];function h(e){return(0,s.jsx)(c.A,{language:"bash",children:i.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},17510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(46567),o=n(49717);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},18727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${l.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${l.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.kubeadm.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${o.M.kubernetes.value}"
            REPOSITORY="${l.m.kubeadm.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
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
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${o.M.kubernetes.value}"
              REPOSITORY="${l.m.kubeadm.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
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
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},19529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      export CLUSTER_NAME=${c.M.clusterName.value}
      export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.etcdPeer.crtConf}
  [ req ]
  default_bits        = ${i.$.etcdPeer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = \${MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = $\{FULL_HOST_NAME}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth,clientAuth
  subjectAltName=@alt_names
  EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.etcdPeer.keyPath} ${i.$.etcdPeer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${i.$.etcdPeer.keyPath} \\
    -out ${i.$.etcdPeer.csrPath} \\
    -config ${i.$.etcdPeer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.etcdCA.crtPath} \\
    -CAkey ${i.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.etcdPeer.csrPath} \\
    -out ${i.$.etcdPeer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.etcdPeer.crtConf}
  `})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},21289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examinationComponent","title":"examinationComponent","description":"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm","source":"@site/docs/tech-docs/kubernetes/certificates/examinationComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/examinationComponent","permalink":"/in-cloud/tech-docs/kubernetes/certificates/examinationComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(1775),c=n(60513),l=n(7478);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm certs check-expiration \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
    --kubeconfig=${l.M.kuberneteBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},21880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${l.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${l.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.containerd.path}"


      LOG_TAG="containerd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."

      CURRENT_VERSION=$(containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating containerd to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
        curl -fsSL -o "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "containerd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/containerd
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/containerd/download.env
            COMPONENT_VERSION="${o.M.containerd.value}"
            REPOSITORY="${l.m.containerd.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/containerd/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            chmod +x /etc/default/containerd/download-script.sh
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/containerd-install.service
            [Unit]
            Description=Install and update b-cloud component containerd
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/containerd/download.env
            ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            systemctl enable containerd-install.service
            systemctl start containerd-install.service
          `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${o.M.containerd.value}"
                REPOSITORY="${l.m.containerd.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /usr/lib/systemd/system/containerd-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component containerd
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/containerd/download.env
                ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            - systemctl enable containerd-install.service
            - systemctl start containerd-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},23202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(38230),o=n(8790);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},23538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(87464),o=n(62774);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsx)(l.A,{value:"Bash",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
              cat <<EOF > /usr/lib/systemd/system/containerd.service
              [Unit]
              Description=containerd container runtime
              Documentation=https://containerd.io
              After=network.target local-fs.target containerd-install.service runc-install.service
              Wants=containerd-install.service runc-install.service

              [Service]
              ExecStartPre=-/sbin/modprobe overlay
              ExecStart=/usr/local/bin/containerd

              Type=notify
              Delegate=yes
              KillMode=process
              Restart=always
              RestartSec=5
              LimitNPROC=infinity
              LimitCORE=infinity
              LimitNOFILE=infinity
              TasksMax=infinity
              OOMScoreAdjust=-999

              [Install]
              WantedBy=multi-user.target
              EOF
          `})}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /usr/lib/systemd/system/containerd.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=containerd container runtime
                Documentation=https://containerd.io
                After=network.target local-fs.target containerd-install.service runc-install.service
                Wants=containerd-install.service runc-install.service

                [Service]
                ExecStartPre=-/sbin/modprobe overlay
                ExecStart=/usr/local/bin/containerd

                Type=notify
                Delegate=yes
                KillMode=process
                Restart=always
                RestartSec=5
                LimitNPROC=infinity
                LimitCORE=infinity
                LimitNOFILE=infinity
                TasksMax=infinity
                OOMScoreAdjust=-999

                [Install]
                WantedBy=multi-user.target
          `})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},25292:(e,t,n)=>{n.d(t,{L:()=>i});var r=n(6353),s=n(31798),a=n(7478);const i={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${s.h.kubeletServer.portNumber}`},securePort:{value:`${s.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${s.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${s.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${a.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${a.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},27590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      export CLUSTER_NAME=${c.M.clusterName.value}
      export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
      mkdir -p ${c.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubeletServer.crtConf}
  [ req ]
  default_bits        = ${i.$.kubeletServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = "system:node:$\{FULL_HOST_NAME}
  O  = "system:nodes"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubeletServer.keyPath} ${i.$.kubeletServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
  -new \\
  -key ${i.$.kubeletServer.keyPath} \\
  -out ${i.$.kubeletServer.csrPath} \\
  -config ${i.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubeletServer.csrPath} \\
    -out ${i.$.kubeletServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat ${i.$.kubeletServer.crtPath} ${i.$.kubeletServer.keyPath} >> ${i.$.kubeletNowServer.crtPath}
  ln -s ${i.$.kubeletNowServer.crtPath} ${i.$.kubeletCurrentServer.crtPath}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},28702:(e,t,n)=>{n.d(t,{D:()=>c});var r=n(60513),s=n(6353),a=n(7478),i=n(31798);const c={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${s.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${a.M.criEndpoint.value}"
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
      staticPodPath: ${a.M.kuberneteBaseFolderPath.value}/manifests
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
    `}}},31773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){const t={p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
  export CLUSTER_NAME="${c.M.clusterName.value}"
  export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${i.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${i.$.kubeletClient.crtPath} \\
    --client-key=${i.$.kubeletClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},31798:(e,t,n)=>{n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},33901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesAdminClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${i.$.kubernetesAdminClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesAdminClient.keyPath} ${i.$.kubernetesAdminClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesAdminClient.keyPath} \\
    -out    ${i.$.kubernetesAdminClient.csrPath} \\
    -config ${i.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesAdminClient.csrPath} \\
    -out ${i.$.kubernetesAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesAdminClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},34759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",level:4}];function b(e){const t={code:"code",h4:"h4",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"admin"})]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${i.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${i.$.kubernetesAdminClient.crtPath} \\
    --client-key=${i.$.kubernetesAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/admin.conf
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},36189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki/etcd
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    cat <<EOF > ${i.$.etcdClient.crtConf}
    [ req ]
    default_bits        = ${i.$.etcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${i.$.etcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl genrsa \\
        -out ${i.$.etcdClient.keyPath} ${i.$.etcdClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl req \\
      -new \\
      -key ${i.$.etcdClient.keyPath} \\
      -out ${i.$.etcdClient.csrPath} \\
      -config ${i.$.etcdClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl x509 \\
      -req \\
      -days 365 \\
      -sha256 \\
      -CA ${i.$.etcdCA.crtPath} \\
      -CAkey ${i.$.etcdCA.keyPath} \\
      -CAcreateserial \\
      -in ${i.$.etcdClient.csrPath} \\
      -out ${i.$.etcdClient.crtPath} \\
      -extensions v3_ext \\
      -extfile ${i.$.etcdClient.crtConf}
  `})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},36417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${l.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${l.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.crictl.path}"


      LOG_TAG="crictl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."

      CURRENT_VERSION=$(crictl --version 2>/dev/null | awk '{print $3}') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating crictl to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
        curl -fsSL -o crictl.tar.gz "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o crictl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf crictl.tar.gz

        logger -t "$LOG_TAG" "[INFO] Installing crictl..."
        install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/crictl
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${o.M.crictl.value}"
            REPOSITORY="${l.m.crictl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/crictl-install.service
            [Unit]
            Description=Install and update b-cloud component crictl
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/download.env
            ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${o.M.crictl.value}"
                REPOSITORY="${l.m.crictl.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /usr/lib/systemd/system/crictl-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component crictl
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/download.env
                ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},38230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesKubeletClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesKubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${i.$.kubernetesKubeletClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl genrsa \\
      -out ${i.$.kubernetesKubeletClient.keyPath} ${i.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesKubeletClient.keyPath} \\
    -out    ${i.$.kubernetesKubeletClient.csrPath} \\
    -config ${i.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesKubeletClient.csrPath} \\
    -out ${i.$.kubernetesKubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesKubeletClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},38816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>controller-manager-client</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",level:4}];function b(e){const t={code:"code",h4:"h4",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
  export CLUSTER_NAME="${c.M.clusterName.value}"
  export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${i.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${i.$.kubernetesControllerManagerClient.crtPath} \\
    --client-key=${i.$.kubernetesControllerManagerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/controller-manager.conf
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},42847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/in-cloud/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${l.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${l.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.etcdctl.path}"


      LOG_TAG="etcd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."

      CURRENT_VERSION=$(etcd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating etcd to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
        curl -fsSL -o "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "etcd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/etcd
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/etcd/download.env
            COMPONENT_VERSION="${o.M.etcdctl.value}"
            REPOSITORY="${l.m.etcdctl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/etcd/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            chmod +x /etc/default/etcd/download-script.sh
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/etcd-install.service
            [Unit]
            Description=Install and update b-cloud component etcd
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/etcd/download.env
            ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          systemctl enable etcd-install.service
          systemctl start etcd-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            #write_files:
            - path: /etc/default/etcd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${o.M.etcdctl.value}"
                REPOSITORY="${l.m.etcdctl.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/etcd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /usr/lib/systemd/system/etcd-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component etcd
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/etcd/download.env
                ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          - systemctl enable etcd-install.service
          - systemctl start etcd-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},44772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775);const l={},o=void 0,u={},d=[];function h(e){return(0,s.jsx)(c.A,{language:"bash",children:i.A`
  mkdir -p /var/run/kubeadm/
`})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},46567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.etcdServer.crtConf}
  [ req ]
  default_bits        = ${i.$.etcdServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = $\{FULL_HOST_NAME}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth,clientAuth
  subjectAltName=@alt_names
  EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.etcdServer.keyPath} ${i.$.etcdServer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${i.$.etcdServer.keyPath} \\
    -out ${i.$.etcdServer.csrPath} \\
    -config ${i.$.etcdServer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.etcdCA.crtPath} \\
    -CAkey ${i.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.etcdServer.csrPath} \\
    -out ${i.$.etcdServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.etcdServer.crtConf}
  `})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},47174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesCA.crtConf}
  [req]
  distinguished_name = req_distinguished_name
  x509_extensions    = v3_ca
  prompt             = no

  [req_distinguished_name]
  CN = ${i.$.kubernetesCA.cname}

  [v3_ca]
  keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
  basicConstraints = critical,CA:TRUE
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesCA.keyPath} ${i.$.kubernetesCA.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${i.$.kubernetesCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${i.$.kubernetesCA.crtPath} \\
    -config ${i.$.kubernetesCA.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},47279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(66832),o=n(51835);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},47442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase kubeconfig admin \\
    --config=${i.M.kuberneteBaseFolderPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "admin.conf" kubeconfig file
  `})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},49717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-server \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},51835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs apiserver \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [10.96.0.1 192.168.10.27]
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},52315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(7478),o=n(87464),u=n(62774),d=n(17150),h=n(42567);const m={},b=void 0,p={},k=[...d.toc];function v(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"Bash",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)("h4",{children:"Systemd Unit"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service
            [Unit]
            Description=kubelet: The Kubernetes Node Agent
            Documentation=https://kubernetes.io/docs/
            Wants=network-online.target containerd.service
            After=network-online.target containerd.service

            [Service]
            ExecStart=${h.m.kubelet.path}
            Restart=always
            StartLimitInterval=0
            RestartSec=10

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"Systemd Unit Config"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            # Note: This dropin only works with kubeadm and kubelet v1.11+
            [Service]
            Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${l.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${l.M.kuberneteBaseFolderPath.value}/kubelet.conf"
            Environment="KUBELET_CONFIG_ARGS=--config=${l.M.kuberneteKubeletFolderPath.value}/config.yaml"
            # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
            EnvironmentFile=-${l.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
            # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
            # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
            EnvironmentFile=-/etc/default/kubelet/extra-args.env
            ExecStart=
            ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
            EOF
          `}),(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,s.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,s.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,s.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,s.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,s.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
      cat <<EOF > ${l.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://${l.M.criEndpoint.value} \
      --pod-infra-container-image=${l.M.baseDockerRegistry.value}/${l.M.pausedImage.value} \
      --config=${l.M.kuberneteKubeletFolderPath.value}/custom-config.yaml \
      --cluster-domain=${l.M.kubernetesClusterDomain.value} \
      --cluster-dns=${l.M.kubernetesDNSAddress.value}
      "
      EOF
  `})]})]}),(0,s.jsxs)(o.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
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
              ExecStart=${h.m.kubelet.path}
              Restart=always
              StartLimitInterval=0
              RestartSec=10

              [Install]
              WantedBy=multi-user.target
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            owner: root:root
            permissions: '0644'
            content: |
              # Note: This dropin only works with kubeadm and kubelet v1.11+
              [Service]
              Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${l.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${l.M.kuberneteBaseFolderPath.value}/kubelet.conf"
              Environment="KUBELET_CONFIG_ARGS=--config=${l.M.kuberneteKubeletFolderPath.value}/config.yaml"
              # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
              EnvironmentFile=-${l.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
              # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
              # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
              EnvironmentFile=-/etc/default/kubelet/extra-args.env
              ExecStart=
              ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARG $KUBELET_EXTRA_ARGS
        `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubelet/extra-args.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBELET_EXTRA_ARGS=""
        `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,s.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,s.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,s.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,s.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,s.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
    - path: ${l.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      owner: root:root
      permissions: '0644'
      content: |
        KUBELET_KUBEADM_ARGS="\
        --container-runtime-endpoint=unix://${l.M.criEndpoint.value} \
        --pod-infra-container-image=${l.M.baseDockerRegistry.value}/${l.M.pausedImage.value} \
        --config=${l.M.kuberneteKubeletFolderPath.value}/custom-config.yaml \
        "
  `})]})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/configFiles","title":"configFiles","description":"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(7478),o=n(87464),u=n(62774);const d={},h=void 0,m={},b=[];function p(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/crictl.yaml
            runtime-endpoint: unix://${l.M.criEndpoint.value}
            EOF
          `})]}),(0,s.jsxs)(o.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            - path: /etc/crictl.yaml
              owner: root:root
              permissions: '0644'
              content: |
                runtime-endpoint: unix://${l.M.criEndpoint.value}
          `})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},52717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(27590);const o={},u=void 0,d={},h=[...l.toc];function m(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm"})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},55609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(36189),o=n(80614);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},56721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(16812),o=n(79971),u=n(87935);const d={},h=void 0,m={},b=[...l.toc,...u.toc,...o.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.default,{})]}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},59968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(74279),o=n(74124);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},60145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs front-proxy-ca \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Create Front Proxy CA
  [certs] Generating "front-proxy-ca" certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},61805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(11321),o=n(18727);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},62376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesSchedulerClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesSchedulerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${i.$.kubernetesSchedulerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesSchedulerClient.keyPath} ${i.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${i.$.kubernetesSchedulerClient.keyPath} \\
    -out ${i.$.kubernetesSchedulerClient.csrPath} \\
    -config ${i.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesSchedulerClient.csrPath} \\
    -out ${i.$.kubernetesSchedulerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesSchedulerClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},62774:(e,t,n)=>{n.d(t,{A:()=>$});var r=n(96540),s=n(34164),a=n(65627),i=n(56347),c=n(50372),l=n(30604),o=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,d]=b({queryString:n,groupId:s}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=o??p;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),k(e)}),[d,k,a]),tabValues:a}}var k=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=c[n].value;s!==r&&(o(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function $(e){const t=(0,k.A)();return(0,f.jsx)(A,{...e,children:d(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},65934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(7478),o=n(87464),u=n(62774);const d={},h=void 0,m={},b=[];function p(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/containerd/
            mkdir -p /etc/containerd/conf.d
            mkdir -p /etc/containerd/certs.d
          `}),(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/containerd/config.toml
            version = 2
            imports = ["/etc/containerd/conf.d/*.toml"]
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/containerd/conf.d/b-cloud.toml
            version = 2
            [plugins]
              [plugins."io.containerd.grpc.v1.cri"]
                sandbox_image = "${l.M.baseDockerRegistry.value}/${l.M.pausedImage.value}"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                runtime_type = "io.containerd.runc.v2"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                SystemdCgroup = true
              [plugins."io.containerd.grpc.v1.cri".registry]
                config_path = "/etc/containerd/certs.d/"
            EOF
          `})]}),(0,s.jsxs)(o.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/containerd/config.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                imports = ["/etc/containerd/conf.d/*.toml"]
          `}),(0,s.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/containerd/conf.d/b-cloud.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                [plugins]
                  [plugins."io.containerd.grpc.v1.cri"]
                    sandbox_image = "${l.M.baseDockerRegistry.value}/${l.M.pausedImage.value}"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                    runtime_type = "io.containerd.runc.v2"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                    SystemdCgroup = true
                  [plugins."io.containerd.grpc.v1.cri".registry]
                    config_path = "/etc/containerd/certs.d/"
          `})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},66483:(e,t,n)=>{n.d(t,{L:()=>a});var r=n(6353),s=n(7478);const a={authenticationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${s.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},66685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesControllerManagerClient.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesControllerManagerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${i.$.kubernetesControllerManagerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesControllerManagerClient.keyPath} ${i.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${i.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${i.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${i.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesControllerManagerClient.csrPath} \\
    -out ${i.$.kubernetesControllerManagerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesControllerManagerClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},66832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${c.M.clusterName.value}.${c.M.kubernetesBaseDomain.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  cat <<EOF > ${i.$.kubernetesServer.crtConf}
  [ req ]
  default_bits        = ${i.$.kubernetesServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = kubernetes
  DNS.2 = kubernetes.default
  DNS.3 = kubernetes.default.svc
  DNS.4 = kubernetes.default.svc.$\{CLUSTER_DOMAIN}
  DNS.5 = $\{FULL_HOST_NAME}
  DNS.6 = $\{CLUSTER_API_ENDPOINT}
  IP.1  = ${c.M.virtualMachineLocalAddress.value}
  IP.2  = 127.0.0.1

  [ dn ]
  CN = ${i.$.kubernetesServer.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesServer.keyPath} ${i.$.kubernetesServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesServer.keyPath} \\
    -out    ${i.$.kubernetesServer.csrPath} \\
    -config ${i.$.kubernetesServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.kubernetesCA.crtPath} \\
    -CAkey ${i.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesServer.csrPath} \\
    -out ${i.$.kubernetesServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesServer.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},67069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(19529),o=n(89982);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},67332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","title":"systemdUnitEnable","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775);const l={},o=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:i.A`
      systemctl enable kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:i.A`
      Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service → /usr/lib/systemd/system/kubelet.service.
  `})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},67716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(7109),o=n(31773),u=n(11946);const d={},h=void 0,m={},b=[...l.toc,...o.toc,...u.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(o.default,{})]}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(u.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},68890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(33901),o=n(47442),u=n(34759);const d={},h=void 0,m={},b=[...l.toc,...u.toc,...o.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.default,{})]}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},71372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>A,frontMatter:()=>k,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(10119),o=n(25292),u=n(7478),d=n(63770),h=n(76519),m=n(86613),b=n(87464),p=n(62774);const k={},v=void 0,f={},g=[];function x(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,s.jsxs)(p.A,{groupId:"install-type",children:[(0,s.jsxs)(b.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
        export CLUSTER_NAME='${u.M.clusterName.value}'
        export BASE_DOMAIN='${u.M.kubernetesBaseDomain.value}'
        export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
        export INTERNAL_API=api.${u.M.kubernetesClusterExternalDomain.value}
        export MACHINE_LOCAL_ADDRESS=${u.M.virtualMachineLocalAddress.value}
        export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${l.D.initialAdvertisePeerUrls.value}"
      `}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,s.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,s.jsx)(c.A,{children:i.A`
        cat <<EOF > ${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
            config: "${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${u.M.kubernetesClusterDomain.value}
            cluster-dns: "${u.M.kubernetesDNSAddress.value}"
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
        ${h.Q.data.value}
        EOF
      `})]}),(0,s.jsx)(b.A,{value:"Cloud-init",children:(0,s.jsx)(c.A,{children:i.A`
        - path: ${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
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
                config: "${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${u.M.kubernetesDNSAddress.value}"

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

            clusterName: "${u.M.clusterName.value}"
            # TODO нужно указывать VIP LoadBalancer
            controlPlaneEndpoint: {{ local_hostname }}:${o.L.securePort.value}

            imageRepository: "${u.M.baseDockerRegistry.value}"

            networking:
              serviceSubnet: ${u.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${d.M.kubernetes.value}

            dns: {}
            etcd:
              local:
                imageRepository: "${u.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  ${m.Nu.data.value}
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1

            apiServer:
              extraArgs:
                ${m.IL.data.value}

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
                cluster-name: "${u.M.clusterName.value}"
                ${m.Uj.data.value}

            scheduler:
              extraArgs:
                ${m.hZ.data.value}
      `})})]})]})}function A(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},72608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(60513),o=n(1775);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(c.A,{children:[(0,s.jsx)(i.A,{value:"master-2",children:(0,s.jsx)(o.A,{language:"bash",children:l.A`
        export HOST_NAME=master-2
      `})}),(0,s.jsx)(i.A,{value:"master-3",children:(0,s.jsx)(o.A,{language:"bash",children:l.A`
        export HOST_NAME=master-3
      `})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},74124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},74279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    cat <<EOF > ${i.$.kubernetesEtcdClient.crtConf}
    [ req ]
    default_bits        = ${i.$.kubernetesEtcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${i.$.kubernetesEtcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.kubernetesEtcdClient.keyPath} ${i.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesEtcdClient.keyPath} \\
    -out    ${i.$.kubernetesEtcdClient.csrPath} \\
    -config ${i.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${i.$.etcdCA.crtPath} \\
    -CAkey ${i.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${i.$.kubernetesEtcdClient.csrPath} \\
    -out ${i.$.kubernetesEtcdClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${i.$.kubernetesEtcdClient.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},75478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/initMaster","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(60513),o=n(1775);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsx)(c.A,{children:(0,s.jsx)(i.A,{value:"master-1",children:(0,s.jsx)(o.A,{language:"bash",children:l.A`
        export HOST_NAME=master-1
      `})})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},76519:(e,t,n)=>{n.d(t,{Q:()=>l});var r=n(60513),s=n(25292),a=n(63770),i=n(86613),c=n(7478);const l={data:{value:r.A`
      clusterName: "$\{CLUSTER_NAME}"
      controlPlaneEndpoint: $\{INTERNAL_API}:${s.L.securePort.value}
      imageRepository: "${c.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${c.M.kubernetesServiceCIDR.value}
        dnsDomain: ${c.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${a.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${c.M.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${i.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${i.IL.data.value}
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
          ${i.Uj.data.value}
      scheduler:
        extraArgs:
          ${i.hZ.data.value}
    `}}},79971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase kubeconfig super-admin \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},80263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Front Proxy CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(86260),o=n(60145);const u={},d=void 0,h={},m=[...l.toc,...o.toc];function b(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"Front Proxy CA"}),"."]})]}),"\n",(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(l.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},80614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},80731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(7478);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig scheduler \\
    --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация Kube Scheduler сертификатов
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},81970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(82286);const c={},l=void 0,o={},u=[...i.toc];function d(e){return(0,s.jsx)(i.default,{})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},82286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(62376),o=n(80731),u=n(7915);const d={},h=void 0,m={},b=[...l.toc,...u.toc,...o.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.default,{})]}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},83276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/runc/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/runc/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${l.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.runc.path}"


      LOG_TAG="runc-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current runc version..."

      CURRENT_VERSION=$("$INSTALL_PATH" --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION"
      logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"

      if [[ "$CURRENT_VERSION" != "$\{COMPONENT_VERSION#v}" ]]; then
        logger -t "$LOG_TAG" "[INFO] Updating runc to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading runc..."
        curl -fsSL -o runc.amd64 "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o runc.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing runc..."
        install -m 755 runc.amd64 "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] runc successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
      fi
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/runc
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/runc/download.env
            COMPONENT_VERSION="${o.M.runc.value}"
            REPOSITORY="${l.m.runc.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/runc/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            chmod +x /etc/default/runc/download-script.sh
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/runc-install.service
            [Unit]
            Description=Install and update b-cloud component runc
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/runc/download.env
            ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            systemctl enable runc-install.service
            systemctl start runc-install.service
          `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/runc/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${o.M.runc.value}"
                REPOSITORY="${l.m.runc.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/runc/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /usr/lib/systemd/system/runc-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update b-cloud component runc
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/runc/download.env
                ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            - systemctl enable runc-install.service
            - systemctl start runc-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},83807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki/etcd
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    cat <<EOF > ${i.$.etcdCA.crtConf}
    [req]
    distinguished_name = req_distinguished_name
    x509_extensions    = v3_ca
    prompt             = no

    [req_distinguished_name]
    CN = "${i.$.etcdCA.cname}"

    [v3_ca]
    keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
    basicConstraints = critical,CA:TRUE
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl genrsa \\
      -out ${i.$.etcdCA.keyPath} ${i.$.etcdCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    openssl req \\
      -x509 \\
      -new \\
      -nodes \\
      -key ${i.$.etcdCA.keyPath} \\
      -sha256 \\
      -days 3650 \\
      -out ${i.$.etcdCA.crtPath} \\
      -config ${i.$.etcdCA.crtConf}
  `})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},84588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/allMasterTabs","title":"allMasterTabs","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/allMasterTabs.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/allMasterTabs","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/allMasterTabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(60513),o=n(1775);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(c.A,{children:[(0,s.jsx)(i.A,{value:"master-1",children:(0,s.jsx)(o.A,{language:"bash",children:l.A`
        export HOST_NAME=master-1
      `})}),(0,s.jsx)(i.A,{value:"master-2",children:(0,s.jsx)(o.A,{language:"bash",children:l.A`
        export HOST_NAME=master-2
      `})}),(0,s.jsx)(i.A,{value:"master-3",children:(0,s.jsx)(o.A,{language:"bash",children:l.A`
        export HOST_NAME=master-3
      `})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},84778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-ca \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Create ETCD CA
  [certs] Generating "etcd/ca" certificate and key
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},85072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/startSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775);const l={},o=void 0,u={},d=[];function h(e){return(0,s.jsx)(c.A,{language:"bash",children:i.A`
      systemctl enable containerd
      systemctl start containerd
  `})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},85421:(e,t,n)=>{n.d(t,{w:()=>a});var r=n(31798),s=n(7478);const a={authenticationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${s.M.kuberneteBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},86260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[];function b(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/openssl
      mkdir -p ${c.M.kuberneteBaseFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
    cat <<EOF > ${i.$.frontProxyCA.crtConf}
    [req]
    distinguished_name = req_distinguished_name
    x509_extensions    = v3_ca
    prompt             = no

    [req_distinguished_name]
    CN = ${i.$.frontProxyCA.cname}

    [v3_ca]
    keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
    basicConstraints = critical,CA:TRUE
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${i.$.frontProxyCA.keyPath} ${i.$.frontProxyCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${i.$.frontProxyCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${i.$.frontProxyCA.crtPath} \\
    -config ${i.$.frontProxyCA.crtConf}
  `})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},86613:(e,t,n)=>{n.d(t,{IL:()=>o,Nu:()=>l,Uj:()=>u,hZ:()=>d});var r=n(60513),s=n(10119),a=n(25292),i=n(66483),c=n(85421);const l={data:{value:r.A`
      advertise-client-urls: "${s.D.advertiseClientUrls.value}"
      auto-compaction-retention: "${s.D.autoCompactionRetention.value}"
      cert-file: "${s.D.certFile.value}"
      client-cert-auth: "${s.D.clientCertAuth.value}"
      data-dir: "${s.D.dataDir.value}"
      election-timeout: "${s.D.electionTimeout.value}"
      heartbeat-interval: "${s.D.heartbeatInterval.value}"
      initial-advertise-peer-urls: "${s.D.initialAdvertisePeerUrls.value}"
      initial-cluster: "${s.D.initialCluster.value}"
      key-file: "${s.D.keyFile.value}"
      listen-client-urls: "${s.D.listenClientUrls.value}"
      listen-metrics-urls: "${s.D.listenMetricsUrls.value}"
      listen-peer-urls: "${s.D.listenPeerUrls.value}"
      logger: "${s.D.logger.value}"
      max-snapshots: "${s.D.maxSnapshots.value}"
      max-wals: "${s.D.maxWals.value}"
      metrics: "${s.D.metrics.value}"
      name: "${s.D.name.value}"
      peer-cert-file: "${s.D.peerCertFile.value}"
      peer-client-cert-auth: "${s.D.peerClientCertAuth.value}"
      peer-key-file: "${s.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${s.D.peerTrustedCAFile.value}"
      snapshot-count: "${s.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${s.D.trustedCAFile.value}"
    `}},o={data:{value:r.A`
      aggregator-reject-forwarding-redirect: "${a.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${a.L.allowPrivileged.value}"
      anonymous-auth: "${a.L.anonymousAuth.value}"
      api-audiences: "${a.L.apiAudiences.value}"
      apiserver-count: "${a.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${a.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${a.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${a.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${a.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${a.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${a.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${a.L.auditLogCompress.value}"
      audit-log-format: "${a.L.auditLogFormat.value}"
      audit-log-maxage: "${a.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${a.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${a.L.auditLogMaxsize.value}"
      audit-log-mode: "${a.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${a.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${a.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${a.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${a.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${a.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${a.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${a.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${a.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${a.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${a.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${a.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${a.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${a.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${a.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${a.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${a.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${a.L.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${a.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${a.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${a.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${a.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${a.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${a.L.authorizationWebhookVersion.value}"
      bind-address: "${a.L.bindAddress.value}"
      cert-dir: "${a.L.certDir.value}"
      client-ca-file: "${a.L.clientCaFile.value}"
      cloud-provider: "${a.L.cloudProvider.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${a.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${a.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${a.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${a.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${a.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${a.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${a.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${a.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${a.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${a.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${a.L.enableGarbageCollector.value}"
      enable-logs-handler: "${a.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${a.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${a.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${a.L.endpointReconcilerType.value}"
      etcd-cafile: "${a.L.etcdCafile.value}"
      etcd-certfile: "${a.L.etcdCertfile.value}"
      etcd-compaction-interval: "${a.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${a.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${a.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${a.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${a.L.etcdKeyfile.value}"
      etcd-prefix: "${a.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${a.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${a.L.etcdServers.value}"
      event-ttl: "${a.L.eventTtl.value}"
      feature-gates: "${a.L.featureGates.value}"
      goaway-chance: "${a.L.goawayChance.value}"
      help: "${a.L.help.value}"
      http2-max-streams-per-connection: "${a.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${a.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${a.L.kubeletClientKey.value}"
      kubelet-port: "${a.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${a.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${a.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${a.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${a.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${a.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${a.L.livezGracePeriod.value}"
      log-flush-frequency: "${a.L.logFlushFrequency.value}"
      logging-format: "${a.L.loggingFormat.value}"
      log-json-info-buffer-size: "${a.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${a.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${a.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${a.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${a.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${a.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${a.L.maxRequestsInflight.value}"
      min-request-timeout: "${a.L.minRequestTimeout.value}"
      permit-address-sharing: "${a.L.permitAddressSharing.value}"
      permit-port-sharing: "${a.L.permitPortSharing.value}"
      profiling: "${a.L.profiling.value}"
      proxy-client-cert-file: "${a.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${a.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${a.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${a.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${a.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${a.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${a.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${a.L.requestTimeout.value}"
      runtime-config: "${a.L.runtimeConfig.value}"
      secure-port: "${a.L.securePort.value}"
      service-account-extend-token-expiration: "${a.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${a.L.serviceAccountIssuer.value}"
      service-account-key-file: "${a.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${a.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${a.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${a.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${a.L.serviceClusterIpRange.value}"
      service-node-port-range: "${a.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${a.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${a.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${a.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${a.L.storageBackend.value}"
      storage-media-type: "${a.L.storageMediaType.value}"
      tls-cert-file: "${a.L.tlsCertFile.value}"
      tls-private-key-file: "${a.L.tlsPrivateKeyFile.value}"
      v: "${a.L.v.value}"
      version: "${a.L.version.value}"
      watch-cache: "${a.L.watchCache.value}"

      # Не указывать если значение "" или undefined
      # cloud-config: "${a.L.cloudConfig.value}"
      # strict-transport-security-directives: "${a.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${a.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${a.L.disabledMetrics.value}"
      # egress-selector-config-file: "${a.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${a.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${a.L.etcdServersOverrides.value}"
      # external-hostname: "${a.L.externalHostname.value}"
      # kubelet-certificate-authority: "${a.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${a.L.oidcCaFile.value}"
      # oidc-client-id: "${a.L.oidcClientId.value}"
      # oidc-groups-claim: "${a.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${a.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${a.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${a.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${a.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${a.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${a.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${a.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${a.L.peerAdvertisePort.value}"
      # peer-ca-file: "${a.L.peerCaFile.value}"
      # service-account-jwks-uri: "${a.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${a.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${a.L.tlsCipherSuites.value}"
      # tls-min-version: "${a.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${a.L.tlsSniCertKey.value}"
      # token-auth-file: "${a.L.tokenAuthFile.value}"
      # tracing-config-file: "${a.L.tracingConfigFile.value}"
      # vmodule: "${a.L.vmodule.value}"
      # watch-cache-sizes: "${a.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${a.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${a.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${a.L.debugSocketPath.value}"
      # authorization-policy-file: "${a.L.authorizationPolicyFile.value}"
      # authorization-config: "${a.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${a.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${a.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${a.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${a.L.auditPolicyFile.value}"
      # audit-log-path: "${a.L.auditLogPath.value}"
      # allow-metric-labels: "${a.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${a.L.allowMetricLabelsManifest.value}"
      # admission-control: "${a.L.admissionControl.value}"
      # admission-control-config-file: "${a.L.admissionControlConfigFile.value}"
      # advertise-address: "${a.L.advertiseAddress.value}"
    `}},u={data:{value:r.A`
      allocate-node-cidrs: "${i.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${i.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${i.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${i.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${i.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${i.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${i.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${i.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${i.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${i.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${i.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${i.L.bindAddress.value}"
      cidr-allocator-type: "${i.L.cidrAllocatorType.value}"
      client-ca-file: "${i.L.clientCaFile.value}"
      cloud-provider: "${i.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${i.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${i.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${i.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${i.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${i.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${i.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${i.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${i.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${i.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${i.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${i.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${i.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${i.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${i.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${i.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${i.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${i.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${i.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${i.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${i.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${i.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${i.L.configureCloudRoutes.value}"
      contention-profiling: "${i.L.contentionProfiling.value}"
      controller-start-interval: "${i.L.controllerStartInterval.value}"
      controllers: "${i.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${i.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${i.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${i.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${i.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${i.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${i.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${i.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${i.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${i.L.featureGates.value}"
      flex-volume-plugin-dir: "${i.L.flexVolumePluginDir.value}"
      help: "${i.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${i.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${i.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${i.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${i.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${i.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${i.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${i.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${i.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${i.L.kubeApiBurst.value}"
      kube-api-content-type: "${i.L.kubeApiContentType.value}"
      kube-api-qps: "${i.L.kubeApiQps.value}"
      kubeconfig: "${i.L.kubeconfig.value}"
      large-cluster-size-threshold: "${i.L.largeClusterSizeThreshold.value}"
      leader-elect: "${i.L.leaderElect.value}"
      leader-elect-lease-duration: "${i.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${i.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${i.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${i.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${i.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${i.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${i.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${i.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${i.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${i.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${i.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${i.L.logTextSplitStream.value}"
      logging-format: "${i.L.loggingFormat.value}"
      max-endpoints-per-slice: "${i.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${i.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${i.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${i.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${i.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${i.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${i.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${i.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${i.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${i.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${i.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${i.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${i.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${i.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${i.L.permitAddressSharing.value}"
      permit-port-sharing: "${i.L.permitPortSharing.value}"
      profiling: "${i.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${i.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${i.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${i.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${i.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${i.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${i.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${i.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${i.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${i.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${i.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${i.L.rootCaFile.value}"
      route-reconciliation-period: "${i.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${i.L.secondaryNodeEvictionRate.value}"
      secure-port: "${i.L.securePort.value}"
      service-account-private-key-file: "${i.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${i.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${i.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${i.L.useServiceAccountCredentials.value}"
      v: "${i.L.v.value}"
      version: "${i.L.version.value}"
      volume-host-allow-local-loopback: "${i.L.volumeHostAllowLocalLoopback.value}"

      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${i.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${i.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${i.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${i.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${i.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${i.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${i.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${i.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${i.L.clusterCidr.value}"
      # cloud-config: "${i.L.cloudConfig.value}"
      # cert-dir: "${i.L.certDir.value}"
      # allow-metric-labels-manifest: "${i.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${i.L.allowMetricLabels.value}"
      # disabled-metrics: "${i.L.disabledMetrics.value}"
      # leader-migration-config: "${i.L.leaderMigrationConfig.value}"
      # master: "${i.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${i.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${i.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${i.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${i.L.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${i.L.tlsCertFile.value}"
      # tls-cipher-suites: "${i.L.tlsCipherSuites.value}"
      # tls-min-version: "${i.L.tlsMinVersion.value}"
      # tls-private-key-file: "${i.L.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${i.L.tlsSniCertKey.value}"
      # vmodule: "${i.L.vmodule.value}"
      # volume-host-cidr-denylist: "${i.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${i.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${i.L.requestheaderAllowedNames.value}"
    `}},d={data:{value:r.A`
      authentication-kubeconfig: "${c.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${c.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${c.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${c.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${c.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${c.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${c.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${c.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${c.w.bindAddress.value}"
      client-ca-file: "${c.w.clientCaFile.value}"
      contention-profiling: "${c.w.contentionProfiling.value}"
      help: "${c.w.help.value}"
      http2-max-streams-per-connection: "${c.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${c.w.kubeApiBurst.value}"
      kube-api-content-type: "${c.w.kubeApiContentType.value}"
      kube-api-qps: "${c.w.kubeApiQps.value}"
      kubeconfig: "${c.w.kubeconfig.value}"
      leader-elect: "${c.w.leaderElect.value}"
      leader-elect-lease-duration: "${c.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${c.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${c.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${c.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${c.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${c.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${c.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${c.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${c.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${c.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${c.w.logTextSplitStream.value}"
      logging-format: "${c.w.loggingFormat.value}"
      permit-address-sharing: "${c.w.permitAddressSharing.value}"
      permit-port-sharing: "${c.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${c.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${c.w.profiling.value}"
      requestheader-extra-headers-prefix: "${c.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${c.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${c.w.requestheaderUsernameHeaders.value}"
      secure-port: "${c.w.securePort.value}"
      v: "${c.w.v.value}"
      version: "${c.w.version.value}"

      # allow-metric-labels: "${c.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${c.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${c.w.certDir.value}"
      # config: "${c.w.config.value}"
      # disabled-metrics: "${c.w.disabledMetrics.value}"
      # feature-gates: "${c.w.featureGates.value}"
      # master: "${c.w.master.value}"
      # requestheader-allowed-names: "${c.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${c.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${c.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${c.w.tlsCertFile.value}"
      # tls-cipher-suites: "${c.w.tlsCipherSuites.value}"
      # tls-min-version: "${c.w.tlsMinVersion.value}"
      # tls-private-key-file: "${c.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${c.w.tlsSniCertKey.value}"
      # vmodule: "${c.w.vmodule.value}"
      # write-config-to: "${c.w.writeConfigTo.value}"
    `}}},86969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configFiles","title":"configFiles","description":"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(98744),c=n(71372),l=n(75478),o=n(72608);const u={},d=void 0,h={},m=[{value:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:4},...l.toc,...c.toc,{value:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:4},...o.toc,...i.toc];function b(e){const t={h4:"h4",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(t.h4,{id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)(i.default,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},87217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(60513),c=n(1775),l=n(42567),o=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${l.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${l.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${l.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${l.m.kubelet.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},b=void 0,p={},k=[];function v(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/kubelet
          `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${o.M.kubernetes.value}"
            REPOSITORY="${l.m.kubelet.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
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
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${o.M.kubernetes.value}"
              REPOSITORY="${l.m.kubelet.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(c.A,{language:"yaml",children:i.A`
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
        `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(c.A,{language:"bash",children:i.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},87464:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},87935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f super-admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(6353),c=n(7478),l=n(1775),o=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>super-admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",level:4}];function b(e){const t={code:"code",h4:"h4",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${i.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${i.$.kubernetesSuperAdminClient.crtPath} \\
    --client-key=${i.$.kubernetesSuperAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf
`})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},89982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs etcd-peer \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},90725:e=>{e.exports=JSON.parse('{"permalink":"/in-cloud/blog/kubernetes-the-hard-way","source":"@site/blog/kubernetes-the-hard-way.mdx","title":"Kubernetes The Hard Way","description":"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes The Hard Way","date":"2025-03-23T00:00:00.000Z","tags":[],"readingTime":8,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Kubernetes The Hard Way","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-the-hard-way"},"unlisted":false}')},92374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(7478),c=n(1775),l=n(60513);const o={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase kubeconfig controller-manager \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
`})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},97786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/serviceAccountComponent","title":"serviceAccountComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/serviceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/serviceAccountComponent","permalink":"/in-cloud/tech-docs/kubernetes/certificates/serviceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(1775),o=n(60513),u=n(6353);const d={},h=void 0,m={},b=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"HardWay",children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
        openssl genpkey \\
          -algorithm RSA \\
          -out ${u.$.kubernetesSA.keyPath} \\
          -pkeyopt rsa_keygen_bits:2048
      `}),(0,s.jsx)(l.A,{language:"bash",children:o.A`
        openssl rsa \\
          -pubout \\
          -in ${u.$.kubernetesSA.keyPath} \\
          -out ${u.$.kubernetesSA.crtPath}
      `})]}),(0,s.jsxs)(i.A,{value:"Kubeadm",children:[(0,s.jsx)(l.A,{language:"bash",children:o.A`
        kubeadm init phase certs sa
      `}),(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'#### \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f Kube API \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432\n[certs] Generating "sa" key and public key\n'})})]})]})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},98744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(1775),c=n(25292),l=n(60513),o=n(7478),u=n(31798);const d={},h=void 0,m={},b=[];function p(e){const{Details:t}={...(0,a.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS="${o.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}

    `}),(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,s.jsx)(i.A,{children:l.A`cat <<EOF > ${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${u.h.kubeAPIServer.portNumber}
      certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${c.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},99119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),i=n(87464),c=n(62774),l=n(66685),o=n(38816),u=n(92374);const d={},h=void 0,m={},b=[...l.toc,...o.toc,...u.toc];function p(e){return(0,s.jsxs)(c.A,{groupId:"install-type",children:[(0,s.jsxs)(i.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(o.default,{})]}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(u.default,{})})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}}}]);