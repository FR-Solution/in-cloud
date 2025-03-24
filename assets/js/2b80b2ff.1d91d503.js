"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210,495,876,889,1063,1121,1197,1200,1438,1507,1516,1579,1585,1597,1607,1608,1710,1736,1759,2082,2085,2262,2355,2393,2431,2459,2526,2528,2752,2758,2770,2983,3218,3515,3536,3537,3548,3605,3659,3728,3751,3843,4043,4048,4218,4311,4373,4582,4668,4742,4936,5253,5266,5405,5569,5618,5665,5769,5800,5876,5889,6622,6658,6846,7016,7160,7167,7224,7387,7389,7393,7562,7579,7981,8034,8053,8129,8261,8290,8426,8462,8492,8559,8743,9116,9249,9396,9548,9671,9689,9740],{535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs ca \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Create Kubernetes CA
  [certs] Generating "ca" certificate and key
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/configFiles","title":"configFiles","description":"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(7478),l=n(28702),u=n(87464),d=n(62774);const h={},m=void 0,p={},b=[];function v(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(u.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${l.D.data.value}
      EOF
    `})]}),(0,a.jsxs)(u.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
      - path: ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${l.D.data.value}
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v()}},3336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Kubernetes CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(47174),l=n(535);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,a.jsx)(t.code,{children:"Kubernetes CA"}),"."]})]}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(o.A,{language:"bash",children:c.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},6353:(e,t,n)=>{n.d(t,{$:()=>a});var r=n(7478);const a={etcdCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},6783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `ETCD CA`.","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/main.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/main","permalink":"/in-cloud/tech-docs/etcd/certificates/centerAuthority/etcdCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(83807),l=n(84778);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,a.jsx)(t.code,{children:"ETCD CA"}),"."]})]}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},6847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.kubectl.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/kubectl
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${c.m.kubectl.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${c.m.kubectl.baseUrl}"
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},7109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
  export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${o.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
`}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  mkdir -p ${o.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubeletClient.keyPath} ${i.$.kubeletClient.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${i.$.kubeletClient.keyPath} \\
    -out ${i.$.kubeletClient.csrPath} \\
    -config ${i.$.kubeletClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  cat ${i.$.kubeletClient.crtPath} ${i.$.kubeletClient.keyPath} >> ${i.$.kubeletNowClient.crtPath}
  ln -s ${i.$.kubeletNowClient.crtPath} ${i.$.kubeletCurrentClient.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"my-first-cluster"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_NAME}.${BASE_DOMAIN}"},kubernetesClusterExternalDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"}}},7915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){const t={p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME="${o.M.clusterName.value}"
      export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
  `}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${i.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${i.$.kubernetesSchedulerClient.crtPath} \\
    --client-key=${i.$.kubernetesSchedulerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/scheduler.conf

  kubectl config use-context default \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/scheduler.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>te,contentTitle:()=>ee,default:()=>ae,frontMatter:()=>Z,metadata:()=>r,toc:()=>ne});var r=n(90725),a=n(74848),s=n(28453),i=n(31798),o=n(7478),c=n(63770),l=n(84588),u=n(21880),d=n(83276),h=n(36417),m=n(6847),p=n(19513),b=n(87217),v=n(42847),k=n(85072),f=n(23538),g=n(65934),x=n(52672),$=n(67332),A=n(52315),y=n(863),C=n(86969),j=n(44772),P=n(14592),S=n(3336),L=n(80263),M=n(6783),N=n(52717),T=n(59968),E=n(23202),O=n(61805),I=n(47279),R=n(55609),w=n(17510),F=n(67069),_=n(81970),D=n(67716),B=n(68890),U=n(56721),z=n(99119),G=n(97786),K=n(21289),H=n(24557),q=n(48506),W=n(37796),V=n(84582),J=n(87464),Y=n(62774),Q=n(1775),X=n(60513);const Z={title:"Kubernetes The Hard Way",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-the-hard-way"},ee=void 0,te={authorsImageUrls:[]},ne=[{value:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes The Hard Way",id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-kubernetes-the-hard-way",level:4},{value:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u043e\u0447\u0435\u043c\u0443 &quot;The Hard Way&quot;?",id:"\u043f\u043e\u0447\u0435\u043c\u0443-the-hard-way",level:3},{value:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b Kubernetes",id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-kubernetes",level:3},{value:"\u0428\u0430\u0433\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f",id:"\u0448\u0430\u0433\u0438-\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f",level:3},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:3},{value:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435",id:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f-\u043e-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435",level:4},{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0448\u0438\u043d\u044b \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440",id:"\u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435-\u043c\u0430\u0448\u0438\u043d\u044b-\u043f\u043e\u0434-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439-\u043a\u043e\u043d\u0442\u0443\u0440",level:4},{value:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f kube-apiserver",id:"\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u043b\u044f-kube-apiserver",level:4},{value:"DNS \u0437\u0430\u043f\u0438\u0441\u0438",id:"dns-\u0437\u0430\u043f\u0438\u0441\u0438",level:4},{value:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u044b \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u0430\u0445",id:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435-\u043f\u043e\u0440\u0442\u044b-\u043d\u0430-\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430\u0445",level:4},{value:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432",id:"\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",level:3},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0443\u0437\u043b\u0430",level:4},...l.toc,{value:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430",id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0438\u043c\u0435\u043d\u0438-\u0443\u0437\u043b\u0430",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Sysctl",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-sysctl",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0442\u0438",level:4},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},...u.toc,...d.toc,...h.toc,...m.toc,...p.toc,...b.toc,...v.toc,{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},...g.toc,...f.toc,...k.toc,...x.toc,...j.toc,...C.toc,...A.toc,...$.toc,...y.toc,{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},...P.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},...S.toc,...L.toc,...M.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",level:3},...N.toc,...T.toc,...E.toc,...I.toc,...O.toc,...R.toc,...w.toc,...F.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 kubeconfigs \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-kubeconfigs-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",level:3},...D.toc,...U.toc,...B.toc,...z.toc,..._.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 Service Accounts",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043b\u044e\u0447\u0430-\u0434\u043b\u044f-\u043f\u043e\u0434\u043f\u0438\u0441\u0438-service-accounts",level:3},...G.toc,{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u0431\u043b\u043e\u043a\u0430-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},...K.toc,{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Static Pods",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-static-pods",level:3},...H.toc,...q.toc,...W.toc,...V.toc];function re(e){const t={admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h4,{id:"\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435-kubernetes-the-hard-way",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes The Hard Way"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"\u0412\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0441\u0435\u0440\u0438\u044e \u0441\u0442\u0430\u0442\u0435\u0439 \u043f\u043e Kubernetes \u0432 \u043d\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."})})}),"\n",(0,a.jsxs)(t.p,{children:["\u042d\u0442\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u043e\u043f\u044b\u0442 \u043f\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044e Kubernetes, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,a.jsx)(t.code,{children:"kubeadm"}),". \u0422\u0430\u043a\u0436\u0435 \u0434\u0430\u043d\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u0438\u043a ",(0,a.jsx)(t.code,{children:"IAC"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["\u0422\u0430\u043a\u0436\u0435 \u0432\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u0430\u044f \u0434\u0430\u043b\u044c\u0448\u0435, \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 ",(0,a.jsx)(t.code,{children:"kubeadm"}),", \u0433\u0434\u0435 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u043e\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u2014 \u0441\u043e\u0431\u0440\u0430\u043d \u043e\u043d \u0447\u0435\u0440\u0435\u0437 kub",(0,a.jsx)(t.code,{children:"eadm \u0438\u043b\u0438 "}),'"The Hard Way"`.']}),"\n","\n",(0,a.jsx)(t.h3,{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Kubernetes"})," \u0441\u0442\u0430\u043b \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043e\u043c \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438. \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0432\u0440\u043e\u0434\u0435 ",(0,a.jsx)(t.code,{children:"kubeadm"})," \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u044e\u0442 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435, \u043d\u043e \u0432\u0430\u0436\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u043a\u0430\u043a ",(0,a.jsx)(t.code,{children:"Kubernetes"})," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0438\u0437\u043d\u0443\u0442\u0440\u0438. \u0411\u0435\u0437 \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u043e\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u043e\u0434\u0445\u043e\u0434 ",(0,a.jsx)(t.code,{children:'"The Hard Way"'})," \u2014 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."]}),"\n",(0,a.jsx)(t.h3,{id:"\u043f\u043e\u0447\u0435\u043c\u0443-the-hard-way",children:'\u041f\u043e\u0447\u0435\u043c\u0443 "The Hard Way"?'}),"\n",(0,a.jsx)(t.p,{children:'\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes "The Hard Way" \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u043c, \u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0434\u0430\u0435\u0442 \u0440\u044f\u0434 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 Kubernetes "\u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c".'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"\u0413\u0438\u0431\u043a\u043e\u0441\u0442\u044c: \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u0430\u0448\u0438\u043c\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u043c\u0438."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-kubernetes",children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b Kubernetes"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"}),(0,a.jsx)("th",{children:"\u0412\u0435\u0440\u0441\u0438\u044f"}),(0,a.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"containerd"}),(0,a.jsx)("td",{children:c.M.containerd.value}),(0,a.jsx)("td",{children:"\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0437\u0430\u043f\u0443\u0441\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"runc"}),(0,a.jsx)("td",{children:c.M.runc.value}),(0,a.jsx)("td",{children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u044f\u0434\u0440\u0430 Linux."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"crictl"}),(0,a.jsx)("td",{children:c.M.crictl.value}),(0,a.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 CRI."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kubectl"}),(0,a.jsx)("td",{children:c.M.kubernetes.value}),(0,a.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 Kubernetes-API \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kubeadm"}),(0,a.jsx)("td",{children:c.M.kubernetes.value}),(0,a.jsx)("td",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Kubernetes. (*\u0411\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438)."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kubelet"}),(0,a.jsx)("td",{children:c.M.kubernetes.value}),(0,a.jsx)("td",{children:"\u0410\u0433\u0435\u043d\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0437\u0430\u043f\u0443\u0441\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 (\u043f\u043e\u0434\u0430\u043c\u0438), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0438\u0445 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"etcd"}),(0,a.jsx)("td",{children:c.M.etcd.value}),(0,a.jsx)("td",{children:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u043b\u044e\u0447\u0435\u0439-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kube-apiserver"}),(0,a.jsx)("td",{children:c.M.kubernetes.value}),(0,a.jsx)("td",{children:"RESTful API \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kube-controller-manager"}),(0,a.jsx)("td",{children:c.M.kubernetes.value}),(0,a.jsx)("td",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kube-scheduler"}),(0,a.jsx)("td",{children:c.M.kubernetes.value}),(0,a.jsx)("td",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043e\u0432 \u043f\u043e \u0443\u0437\u043b\u0430\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"conntrack"}),(0,a.jsx)("td",{children:"v1.4.+"}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"socat"}),(0,a.jsx)("td",{children:"1.8.+"}),(0,a.jsx)("td",{})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0448\u0430\u0433\u0438-\u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f",children:"\u0428\u0430\u0433\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f"}),"\n",(0,a.jsx)(t.p,{children:'\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes "The Hard Way" \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,a.jsx)(t.li,{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),"\n",(0,a.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Sysctl"}),"\n",(0,a.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 kubeconfigs \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 Service Accounts"}),"\n",(0,a.jsx)(t.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Static Pods"}),"\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a Kubelet"}),"\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 Kubernetes"}),"\n",(0,a.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 Kubernetes"}),"\n",(0,a.jsx)(t.li,{children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,a.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u043a\u0435\u043d\u043e\u0432"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,a.jsx)(t.p,{children:"\u0414\u043b\u044f \u043e\u0441\u043d\u043e\u0432\u044b \u043d\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f:"}),"\n",(0,a.jsx)(t.h4,{id:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f-\u043e-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"\u0418\u043c\u044f"}),(0,a.jsx)("th",{children:"\u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0434\u043e\u043c\u0435\u043d"}),(0,a.jsx)("th",{children:"\u0412\u0435\u0440\u0441\u0438\u044f"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:o.M.clusterName.value}),(0,a.jsx)("td",{children:o.M.kubernetesBaseDomain.value}),(0,a.jsx)("td",{children:c.M.kubernetes.value})]})})]}),"\n",(0,a.jsx)(t.h4,{id:"\u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435-\u043c\u0430\u0448\u0438\u043d\u044b-\u043f\u043e\u0434-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439-\u043a\u043e\u043d\u0442\u0443\u0440",children:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0448\u0438\u043d\u044b \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"\u0418\u043c\u044f"}),(0,a.jsx)("th",{children:"IP \u0410\u0434\u0440\u0435\u0441"}),(0,a.jsx)("th",{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u041e\u0421"}),(0,a.jsx)("th",{children:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["master-1.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.16"}),(0,a.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,a.jsx)("td",{children:"2CPU/2RAM/20Gb"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["master-2.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.22"}),(0,a.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,a.jsx)("td",{children:"2CPU/2RAM/20Gb"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["master-3.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.14"}),(0,a.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,a.jsx)("td",{children:"2CPU/2RAM/20Gb"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u043b\u044f-kube-apiserver",children:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f kube-apiserver"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"IP \u0410\u0434\u0440\u0435\u0441"}),(0,a.jsx)("th",{children:"\u0422\u0430\u0440\u0433\u0435\u0442 \u0433\u0440\u0443\u043f\u043f\u0430"}),(0,a.jsx)("th",{children:"\u041f\u043e\u0440\u0442"}),(0,a.jsx)("th",{children:"\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u0442"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"10.0.0.6"}),(0,a.jsx)("td",{children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"10.0.0.16"}),"\n",(0,a.jsx)(t.li,{children:"10.0.0.22"}),"\n",(0,a.jsx)(t.li,{children:"10.0.0.14"}),"\n"]})}),(0,a.jsx)("td",{children:"6443"}),(0,a.jsx)("td",{children:"6443"})]})})]}),"\n",(0,a.jsx)(t.h4,{id:"dns-\u0437\u0430\u043f\u0438\u0441\u0438",children:"DNS \u0437\u0430\u043f\u0438\u0441\u0438"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"A (Record)\u0441"}),(0,a.jsx)("th",{children:"IP \u0410\u0434\u0440\u0435\u0441"}),(0,a.jsx)("th",{children:"TTL"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["api.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.6"}),(0,a.jsx)("td",{children:"60s"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["master-1.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.16"}),(0,a.jsx)("td",{children:"60s"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["master-2.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.22"}),(0,a.jsx)("td",{children:"60s"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:["master-3.",o.M.clusterName.value,".",o.M.kubernetesBaseDomain.value]}),(0,a.jsx)("td",{children:"10.0.0.14"}),(0,a.jsx)("td",{children:"60s"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435-\u043f\u043e\u0440\u0442\u044b-\u043d\u0430-\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430\u0445",children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u044b \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u0430\u0445"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"}),(0,a.jsx)("th",{children:"\u041f\u043e\u0440\u0442"}),(0,a.jsx)("th",{children:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"etcd-server"}),(0,a.jsx)("td",{children:i.h.etcdServer.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"etcd-peer"}),(0,a.jsx)("td",{children:i.h.etcdPeer.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"etcd-metrics"}),(0,a.jsx)("td",{children:i.h.etcdMetricServer.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kube-apiserver"}),(0,a.jsx)("td",{children:i.h.kubeAPIServer.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kube-controller-manager"}),(0,a.jsx)("td",{children:i.h.kubeControllerManager.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kube-scheduler"}),(0,a.jsx)("td",{children:i.h.kubeScheduler.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kubelet-healthz"}),(0,a.jsx)("td",{children:i.h.kubeletHealthz.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kubelet-server"}),(0,a.jsx)("td",{children:i.h.kubeletServer.portNumber}),(0,a.jsx)("td",{children:"TCP"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"kubelet-read-only-port"}),(0,a.jsx)("td",{children:i.h.kubeletReadOnlyPort.portNumber}),(0,a.jsx)("td",{children:"TCP"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0431\u0430\u0437\u043e\u0432\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0437\u043b\u043e\u0432",children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,a.jsx)(t.h4,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0443\u0437\u043b\u0430",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      export CLUSTER_NAME="${o.M.clusterName.value}"
      export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
  `}),"\n",(0,a.jsx)(t.h4,{id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0438\u043c\u0435\u043d\u0438-\u0443\u0437\u043b\u0430",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430"}),"\n",(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      hostnamectl set-hostname $\{FULL_HOST_NAME}
  `}),"\n",(0,a.jsxs)(Y.A,{groupId:"install-pkg",children:[(0,a.jsx)(J.A,{value:"apt",children:(0,a.jsx)(Q.A,{language:"bash",children:X.A`
        sudo apt update
        sudo apt install conntrack socat
      `})}),(0,a.jsx)(J.A,{value:"yum",children:(0,a.jsx)(Q.A,{language:"bash",children:X.A`
        sudo yum update
        sudo yum install conntrack-tools socat
      `})}),(0,a.jsx)(J.A,{value:"dnf",children:(0,a.jsx)(Q.A,{language:"bash",children:X.A`
        sudo dnf update
        sudo dnf install conntrack-tools socat
      `})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-\u044f\u0434\u0440\u0430",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),"\n",(0,a.jsxs)(Y.A,{groupId:"install-type",children:[(0,a.jsxs)(J.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
        cat <<EOF > /etc/modules-load.d/k8s.conf
        overlay
        br_netfilter
        EOF
      `}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
            sudo -i
            modprobe overlay
            modprobe br_netfilter
        `})]}),(0,a.jsxs)(J.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      # write_files:
      - path: /etc/modules-load.d/k8s.conf
        owner: root:root
        permissions: '0644'
        content: |
          overlay
          br_netfilter
    `}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
        # runcmd:
        - modprobe overlay
        - modprobe br_netfilter
      `})]})]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsxs)(t.p,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,a.jsx)(t.code,{children:"overlay"})," \u0441\u0432\u044f\u0437\u0430\u043d \u0441 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 OverlayFS, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043b\u043e\u044f\u043c\u0438 \u0432 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439 (\u0441\u043b\u043e\u0451\u0432) \u0432 \u043e\u0434\u043d\u0443 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0422\u0430\u043a\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0435 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u044b, \u043a\u0430\u043a Docker \u0438 containerd (\u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Kubernetes), \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442 OverlayFS \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432."]}),(0,a.jsxs)(t.p,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,a.jsx)(t.code,{children:"br_netfilter"})," \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043c\u043e\u0441\u0442\u044b (bridges) \u0441 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 netfilter \u0432 \u044f\u0434\u0440\u0435 Linux. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0442\u0440\u0430\u0444\u0438\u043a, \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0441\u0442\u044b, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e iptables."]})]}),"\n",(0,a.jsx)(t.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-sysctl",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Sysctl"}),"\n",(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsx)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0442\u0438",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0438"}),(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043c\u043e\u0434\u0443\u043b\u044f br_netfilter \u0447\u0430\u0441\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0431\u0440\u0438\u0434\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u0444\u0438\u043a \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f iptables."}),(0,a.jsxs)(Y.A,{groupId:"install-type",children:[(0,a.jsxs)(J.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `})]}),(0,a.jsxs)(J.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `})]})]}),(0,a.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.jsx)(t.code,{children:"net.ipv4.ip_forward"})," \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d, \u044f\u0434\u0440\u043e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0442\u044c IP-\u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c\u0438, \u0447\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c \u0441 \u0441\u0435\u0442\u044c\u044e \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0434\u043e\u0432 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0438\u043b\u0438 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438."]}),(0,a.jsxs)(Y.A,{groupId:"install-type",children:[(0,a.jsxs)(J.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
    cat <<EOF > /etc/sysctl.d/99-network.conf
    net.ipv4.ip_forward=1
    EOF
  `}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      sysctl --system
    `})]}),(0,a.jsxs)(J.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
    # write_files:
    - path: /etc/sysctl.d/99-network.conf
      owner: root:root
      permissions: '0644'
      content: |
        net.ipv4.ip_forward=1
  `}),(0,a.jsx)(Q.A,{language:"bash",children:X.A`
      # runcmd:
      - sysctl --system
    `})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsxs)(Y.A,{groupId:"component",children:[(0,a.jsx)(J.A,{value:"containerd",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 containerd"}),(0,a.jsx)(u.default,{})]})}),(0,a.jsx)(J.A,{value:"runc",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 runc"}),(0,a.jsx)(d.default,{})]})}),(0,a.jsx)(J.A,{value:"crictl",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 crictl"}),(0,a.jsx)(h.default,{})]})}),(0,a.jsx)(J.A,{value:"kubectl",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubectl"}),(0,a.jsx)(m.default,{})]})}),(0,a.jsxs)(J.A,{value:"kubeadm",children:[(0,a.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,a.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."})}),(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubeadm"}),(0,a.jsx)(p.default,{})]})]}),(0,a.jsx)(J.A,{value:"kubelet",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubelet"}),(0,a.jsx)(b.default,{})]})}),(0,a.jsx)(J.A,{value:"etcd",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,a.jsx)(v.default,{})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsxs)(Y.A,{groupId:"component",children:[(0,a.jsx)(J.A,{value:"containerd",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 containerd"}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,a.jsx)(g.default,{}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,a.jsx)(f.default,{}),(0,a.jsx)("h4",{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),(0,a.jsx)(k.default,{})]})}),(0,a.jsx)(J.A,{value:"crictl",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 crictl"}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,a.jsx)(x.default,{})]})}),(0,a.jsxs)(J.A,{value:"kubeadm",children:[(0,a.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,a.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430."})}),(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubeadm"}),(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,a.jsx)(j.default,{}),(0,a.jsx)(C.default,{})]})]}),(0,a.jsx)(J.A,{value:"kubelet",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,a.jsx)(A.default,{}),(0,a.jsx)("h4",{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),(0,a.jsx)($.default,{}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,a.jsx)(y.default,{})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,a.jsx)(P.default,{}),"\n",(0,a.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsxs)(Y.A,{groupId:"CA",children:[(0,a.jsx)(J.A,{value:"Kubernetes \u0426\u0410",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kubernetes \u0426\u0410"}),(0,a.jsx)(S.default,{})]})}),(0,a.jsx)(J.A,{value:"FrontProxy \u0426\u0410",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"FrontProxy \u0426\u0410"}),(0,a.jsx)(L.default,{})]})}),(0,a.jsx)(J.A,{value:"ETCD \u0426\u0410",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"ETCD \u0426\u0410"}),(0,a.jsx)(M.default,{})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,a.jsxs)(Y.A,{groupId:"Certs-APPS",children:[(0,a.jsx)(J.A,{value:"Kubelet Server",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kubelet server"}),(0,a.jsx)(N.default,{})]})}),(0,a.jsx)(J.A,{value:"API > Etcd",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"K8S-API client > Etcd"}),(0,a.jsx)(T.default,{})]})}),(0,a.jsx)(J.A,{value:"API > Kubelet",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"K8S-API client > Kubelet"}),(0,a.jsx)(E.default,{})]})}),(0,a.jsx)(J.A,{value:"API Server",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"K8S-API server"}),(0,a.jsx)(I.default,{})]})}),(0,a.jsx)(J.A,{value:"Proxy > API",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"FrontProxy client > K8S-API"}),(0,a.jsx)(O.default,{})]})}),(0,a.jsx)(J.A,{value:"Etcd Client",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Etcd client > Etcd"}),(0,a.jsx)(R.default,{})]})}),(0,a.jsx)(J.A,{value:"Etcd Server",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Etcd server"}),(0,a.jsx)(w.default,{})]})}),(0,a.jsx)(J.A,{value:"Etcd Peer",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Etcd peer > Etcd"}),(0,a.jsx)(F.default,{})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-kubeconfigs-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 kubeconfigs \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,a.jsxs)(Y.A,{groupId:"Certs-APPS",children:[(0,a.jsx)(J.A,{value:"Kubelet",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kubelet client"}),(0,a.jsx)(D.default,{})]})}),(0,a.jsx)(J.A,{value:"Super Admin",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Super Admin"}),(0,a.jsx)(U.default,{})]})}),(0,a.jsx)(J.A,{value:"Admin",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Admin"}),(0,a.jsx)(B.default,{})]})}),(0,a.jsx)(J.A,{value:"Controller",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kube Controller Manager"}),(0,a.jsx)(z.default,{})]})}),(0,a.jsx)(J.A,{value:"Scheduler",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kube Scheduler"}),(0,a.jsx)(_.default,{})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043a\u043b\u044e\u0447\u0430-\u0434\u043b\u044f-\u043f\u043e\u0434\u043f\u0438\u0441\u0438-service-accounts",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 Service Accounts"}),"\n",(0,a.jsx)(G.default,{}),"\n",(0,a.jsx)(t.h3,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438-\u0431\u043b\u043e\u043a\u0430-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(K.default,{}),"\n",(0,a.jsx)(t.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-static-pods",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Static Pods"}),"\n",(0,a.jsxs)(Y.A,{groupId:"Componenet",children:[(0,a.jsx)(J.A,{value:"Kube-API",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kube-API"}),(0,a.jsx)(H.default,{})]})}),(0,a.jsx)(J.A,{value:"Kube Controller Manager",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kube Controller Manager"}),(0,a.jsx)(q.default,{})]})}),(0,a.jsx)(J.A,{value:"Kube Scheduler",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"Kube Controller Manager"}),(0,a.jsx)(W.default,{})]})}),(0,a.jsx)(J.A,{value:"ETCD",children:(0,a.jsxs)(n,{open:!0,children:[(0,a.jsx)("summary",{children:"ETCD"}),(0,a.jsx)(V.default,{})]})})]})]})}function ae(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(re,{...e})}):re(e)}},10119:(e,t,n)=>{n.d(t,{D:()=>s});var r=n(6353),a=n(31798);const s={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://127.0.0.1:${a.h.etcdServer.portNumber},https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://127.0.0.1:${a.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${a.h.etcdPeer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},11321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${i.$.kubernetesFrontProxyClient.keyPath} ${i.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key    ${i.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${i.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${i.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},11946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,a.jsx)("h4",{children:"\u0420\u043e\u0442\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
  #### Ротация сертификатов
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},14592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyComponent","title":"componentsReadyComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/componentsReadyComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyComponent","permalink":"/in-cloud/tech-docs/kubernetes/components/componentsReadyComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(62774),o=n(87464),c=n(1775),l=n(60513),u=n(7478);const d={},h=void 0,m={},p=[];function b(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(i.A,{groupId:"current-master",children:[(0,a.jsxs)(o.A,{value:"Init",children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm init phase preflight --dry-run \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),(0,a.jsx)(c.A,{language:"bash",children:l.A`
  [preflight] Running pre-flight checks
  [preflight] Would pull the required images (like 'kubeadm config images pull')
`})]}),(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"}),(0,a.jsx)(c.A,{language:"bash",children:l.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]}),(0,a.jsxs)(o.A,{value:"Join",children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm join phase preflight --dry-run \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),(0,a.jsx)(c.A,{language:"bash",children:l.A`
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a:"}),(0,a.jsx)(c.A,{language:"bash",children:l.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},16812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
    mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
    mkdir -p ${o.M.kuberneteBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesSuperAdminClient.keyPath} ${i.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${i.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${i.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},17150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775);const c={},l=void 0,u={},d=[];function h(e){return(0,a.jsx)(o.A,{language:"bash",children:i.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}},17510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(46567),l=n(49717);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},18727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.kubeadm.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${c.m.kubeadm.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${c.m.kubeadm.baseUrl}"
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},19529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${o.M.clusterName.value}
      export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.etcdPeer.keyPath} ${i.$.etcdPeer.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${i.$.etcdPeer.keyPath} \\
    -out ${i.$.etcdPeer.csrPath} \\
    -config ${i.$.etcdPeer.crtConf}
  `}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},21289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examinationComponent","title":"examinationComponent","description":"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm","source":"@site/docs/tech-docs/kubernetes/certificates/examinationComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/examinationComponent","permalink":"/in-cloud/tech-docs/kubernetes/certificates/examinationComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(1775),o=n(60513),c=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,a.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm certs check-expiration \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
    --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(i.A,{language:"bash",children:o.A`
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
`})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},21880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.containerd.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/containerd
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/containerd/download.env
            COMPONENT_VERSION="${l.M.containerd.value}"
            REPOSITORY="${c.m.containerd.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/containerd/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            chmod +x /etc/default/containerd/download-script.sh
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            systemctl enable containerd-install.service
            systemctl start containerd-install.service
          `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.containerd.value}"
                REPOSITORY="${c.m.containerd.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            - systemctl enable containerd-install.service
            - systemctl start containerd-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},23202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(38230),l=n(8790);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},23538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(87464),l=n(62774);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsx)(c.A,{value:"Bash",children:(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
          `})}),(0,a.jsxs)(c.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
          `})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},24557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupComponent","title":"setupComponent","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupComponent","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(79988),l=n(38229);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"Static Pod",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},24917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/etcd/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
      kubeadm init phase etcd local \\
        --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(o.A,{language:"bash",children:c.A`
      #### Kube API
      [etcd] Creating static Pod manifest for local etcd in "${i.M.kuberneteBaseFolderPath.value}"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},25292:(e,t,n)=>{n.d(t,{L:()=>i});var r=n(6353),a=n(31798),s=n(7478);const i={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${a.h.kubeletServer.portNumber}`},securePort:{value:`${a.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${a.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${a.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${s.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${s.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},27590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${o.M.clusterName.value}
      export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${o.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
      mkdir -p ${o.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubeletServer.keyPath} ${i.$.kubeletServer.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${i.$.kubeletServer.keyPath} \\
  -out ${i.$.kubeletServer.csrPath} \\
  -config ${i.$.kubeletServer.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  cat ${i.$.kubeletServer.crtPath} ${i.$.kubeletServer.keyPath} >> ${i.$.kubeletNowServer.crtPath}
  ln -s ${i.$.kubeletNowServer.crtPath} ${i.$.kubeletCurrentServer.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},28702:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(60513),a=n(6353),s=n(7478),i=n(31798);const o={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${a.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${s.M.criEndpoint.value}"
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
      staticPodPath: ${s.M.kuberneteBaseFolderPath.value}/manifests
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
    `}}},31773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){const t={p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${o.M.clusterName.value}"
  export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
`}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${i.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${i.$.kubeletClient.crtPath} \\
    --client-key=${i.$.kubeletClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/kubelet.conf

  kubectl config use-context default \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/kubelet.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},31798:(e,t,n)=>{n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},33901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesAdminClient.keyPath} ${i.$.kubernetesAdminClient.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesAdminClient.keyPath} \\
    -out    ${i.$.kubernetesAdminClient.csrPath} \\
    -config ${i.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},34759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",level:4}];function p(e){const t={code:"code",h4:"h4",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,a.jsx)(t.code,{children:"admin"})]}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${i.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${i.$.kubernetesAdminClient.crtPath} \\
    --client-key=${i.$.kubernetesAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/admin.conf

  kubectl config use-context default \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/admin.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},35825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(31798),c=n(63770),l=n(1775),u=n(60513),d=n(85421);const h={},m=void 0,p={},b=[];function v(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(l.A,{language:"bash",children:u.A`
  mkdir -p ${i.M.kuberneteBaseFolderPath.value}/manifests
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(l.A,{language:"bash",children:u.A`
  cat <<EOF > ${i.M.kuberneteBaseFolderPath.value}/manifests/kube-scheduler.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-scheduler
      tier: control-plane
    name: kube-scheduler
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-scheduler
      - --authentication-kubeconfig=${d.w.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${d.w.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${d.w.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${d.w.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${d.w.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${d.w.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${d.w.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${d.w.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${d.w.bindAddress.value}
      - --client-ca-file=${d.w.clientCaFile.value}
      - --contention-profiling=${d.w.contentionProfiling.value}
      - --help=${d.w.help.value}
      - --http2-max-streams-per-connection=${d.w.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${d.w.kubeApiBurst.value}
      - --kube-api-content-type=${d.w.kubeApiContentType.value}
      - --kube-api-qps=${d.w.kubeApiQps.value}
      - --kubeconfig=${d.w.kubeconfig.value}
      - --leader-elect=${d.w.leaderElect.value}
      - --leader-elect-lease-duration=${d.w.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${d.w.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${d.w.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${d.w.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${d.w.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${d.w.leaderElectRetryPeriod.value}
      - --log-flush-frequency=${d.w.logFlushFrequency.value}
      - --log-json-info-buffer-size=${d.w.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${d.w.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${d.w.logTextInfoBufferSize.value}
      - --log-text-split-stream=${d.w.logTextSplitStream.value}
      - --logging-format=${d.w.loggingFormat.value}
      - --permit-address-sharing=${d.w.permitAddressSharing.value}
      - --permit-port-sharing=${d.w.permitPortSharing.value}
      - --pod-max-in-unschedulable-pods-duration=${d.w.podMaxInUnschedulablePodsDuration.value}
      - --profiling=${d.w.profiling.value}
      - --requestheader-extra-headers-prefix=${d.w.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${d.w.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${d.w.requestheaderUsernameHeaders.value}
      - --secure-port=${d.w.securePort.value}
      - --v=${d.w.v.value}
      - --version=${d.w.version.value}
    # - --allow-metric-labels=${d.w.allowMetricLabels.value}
    # - --allow-metric-labels-manifest=${d.w.allowMetricLabelsManifest.value}
    # - --cert-dir=${d.w.certDir.value}
    # - --config=${d.w.config.value}
    # - --disabled-metrics=${d.w.disabledMetrics.value}
    # - --feature-gates=${d.w.featureGates.value}
    # - --master=${d.w.master.value}
    # - --requestheader-allowed-names=${d.w.requestheaderAllowedNames.value}
    # - --requestheader-client-ca-file=${d.w.requestheaderClientCaFile.value}
    # - --show-hidden-metrics-for-version=${d.w.showHiddenMetricsForVersion.value}
    # - --tls-cert-file=${d.w.tlsCertFile.value}
    # - --tls-cipher-suites=${d.w.tlsCipherSuites.value}
    # - --tls-min-version=${d.w.tlsMinVersion.value}
    # - --tls-private-key-file=${d.w.tlsPrivateKeyFile.value}
    # - --tls-sni-cert-key=${d.w.tlsSniCertKey.value}
    # - --vmodule=${d.w.vmodule.value}
    # - --write-config-to=${d.w.writeConfigTo.value}
      image: ${i.M.baseDockerRegistry.value}/kube-scheduler:${c.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${o.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-scheduler
      resources:
        requests:
          cpu: 100m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${o.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: ${i.M.kuberneteBaseFolderPath.value}/scheduler.conf
        name: kubeconfig
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${i.M.kuberneteBaseFolderPath.value}/scheduler.conf
        type: FileOrCreate
      name: kubeconfig
  status: {}
  EOF
`})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v()}},36189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki/etcd
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
        -out ${i.$.etcdClient.keyPath} ${i.$.etcdClient.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key ${i.$.etcdClient.keyPath} \\
      -out ${i.$.etcdClient.csrPath} \\
      -config ${i.$.etcdClient.crtConf}
  `}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},36417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.crictl.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/crictl
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${l.M.crictl.value}"
            REPOSITORY="${c.m.crictl.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.crictl.value}"
                REPOSITORY="${c.m.crictl.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},37796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupComponent","title":"setupComponent","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/scheduler/setupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupComponent","permalink":"/in-cloud/tech-docs/kubernetes/components/scheduler/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(35825),l=n(50488);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"Static Pod",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},38229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(o.A,{language:"bash",children:c.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},38230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${i.$.kubernetesKubeletClient.keyPath} ${i.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesKubeletClient.keyPath} \\
    -out    ${i.$.kubernetesKubeletClient.csrPath} \\
    -config ${i.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},38816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>controller-manager-client</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",level:4}];function p(e){const t={code:"code",h4:"h4",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${o.M.clusterName.value}"
  export BASE_DOMAIN="${o.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${o.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${o.M.virtualMachineFullName.value}"
`}),"\n",(0,a.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,a.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${i.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${i.$.kubernetesControllerManagerClient.crtPath} \\
    --client-key=${i.$.kubernetesControllerManagerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/controller-manager.conf

  kubectl config use-context default \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/controller-manager.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},42567:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},42847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/in-cloud/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.etcdctl.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/etcd
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/etcd/download.env
            COMPONENT_VERSION="${l.M.etcdctl.value}"
            REPOSITORY="${c.m.etcdctl.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/etcd/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            chmod +x /etc/default/etcd/download-script.sh
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          systemctl enable etcd-install.service
          systemctl start etcd-install.service
        `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            #write_files:
            - path: /etc/default/etcd/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.etcdctl.value}"
                REPOSITORY="${c.m.etcdctl.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/etcd/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          - systemctl enable etcd-install.service
          - systemctl start etcd-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},44772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775);const c={},l=void 0,u={},d=[];function h(e){return(0,a.jsx)(o.A,{language:"bash",children:i.A`
  mkdir -p /var/run/kubeadm/
`})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}},46567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
  export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
`}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.etcdServer.keyPath} ${i.$.etcdServer.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${i.$.etcdServer.keyPath} \\
    -out ${i.$.etcdServer.csrPath} \\
    -config ${i.$.etcdServer.crtConf}
  `}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},47174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/kubernetesCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
`}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesCA.keyPath} ${i.$.kubernetesCA.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${i.$.kubernetesCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${i.$.kubernetesCA.crtPath} \\
    -config ${i.$.kubernetesCA.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},47279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(66832),l=n(51835);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},47442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig admin \\
    --config=${i.M.kuberneteBaseFolderPath.value}/kubeadm.yaml
  `}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "admin.conf" kubeconfig file
  `})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},48506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupComponent","title":"setupComponent","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupComponent","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/setupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(85631),l=n(4898);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"Static Pod",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},49717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-server \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},50488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
      kubeadm init phase  control-plane scheduler \\
        --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${i.M.kuberneteBaseFolderPath.value}/super-admin.conf
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(o.A,{language:"bash",children:c.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-scheduler"
  `})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},51835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs apiserver \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [10.96.0.1 192.168.10.27]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},52315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(7478),l=n(87464),u=n(62774),d=n(17150),h=n(42567);const m={},p=void 0,b={},v=[...d.toc];function k(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)(d.default,{}),(0,a.jsx)("h4",{children:"Systemd Unit"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Config"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            # Note: This dropin only works with kubeadm and kubelet v1.11+
            [Service]
            Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${c.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf"
            Environment="KUBELET_CONFIG_ARGS=--config=${c.M.kuberneteKubeletFolderPath.value}/config.yaml"
            # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
            EnvironmentFile=-${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
            # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
            # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
            EnvironmentFile=-/etc/default/kubelet/extra-args.env
            ExecStart=
            ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
            EOF
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,a.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,a.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,a.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,a.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,a.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,a.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://${c.M.criEndpoint.value} \
      --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} \
      --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml \
      --cluster-domain=${c.M.kubernetesClusterDomain.value} \
      --cluster-dns=${c.M.kubernetesDNSAddress.value}
      "
      EOF
  `})]})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
            owner: root:root
            permissions: '0644'
            content: |
              # Note: This dropin only works with kubeadm and kubelet v1.11+
              [Service]
              Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${c.M.kuberneteBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${c.M.kuberneteBaseFolderPath.value}/kubelet.conf"
              Environment="KUBELET_CONFIG_ARGS=--config=${c.M.kuberneteKubeletFolderPath.value}/config.yaml"
              # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
              EnvironmentFile=-${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
              # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
              # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
              EnvironmentFile=-/etc/default/kubelet/extra-args.env
              ExecStart=
              ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARG $KUBELET_EXTRA_ARGS
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Download"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubelet/extra-args.env
            owner: root:root
            permissions: '0644'
            content: |
              KUBELET_EXTRA_ARGS=""
        `}),(0,a.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,a.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,a.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,a.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,a.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,a.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,a.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
    - path: ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      owner: root:root
      permissions: '0644'
      content: |
        KUBELET_KUBEADM_ARGS="\
        --container-runtime-endpoint=unix://${c.M.criEndpoint.value} \
        --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} \
        --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml \
        "
  `})]})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/configFiles","title":"configFiles","description":"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(7478),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/crictl.yaml
            runtime-endpoint: unix://${c.M.criEndpoint.value}
            EOF
          `})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            - path: /etc/crictl.yaml
              owner: root:root
              permissions: '0644'
              content: |
                runtime-endpoint: unix://${c.M.criEndpoint.value}
          `})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},52717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(27590);const l={},u=void 0,d={},h=[...c.toc];function m(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},55609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(36189),l=n(80614);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},56721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(16812),l=n(79971),u=n(87935);const d={},h=void 0,m={},p=[...c.toc,...u.toc,...l.toc];function b(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"HardWay",children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},59968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(74279),l=n(74124);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},60145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs front-proxy-ca \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Create Front Proxy CA
  [certs] Generating "front-proxy-ca" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},61805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(11321),l=n(18727);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},62376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesSchedulerClient.keyPath} ${i.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${i.$.kubernetesSchedulerClient.keyPath} \\
    -out ${i.$.kubernetesSchedulerClient.csrPath} \\
    -config ${i.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},62774:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(96540),a=n(34164),s=n(65627),i=n(56347),o=n(50372),c=n(30604),l=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,d]=p({queryString:n,groupId:a}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),k=(()=>{const e=l??b;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{k&&c(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(9136);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(l(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function $(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",k.tabList),children:[(0,f.jsx)(g,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function A(e){const t=(0,v.A)();return(0,f.jsx)($,{...e,children:d(e.children)},String(t))}},63770:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},65934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(7478),l=n(87464),u=n(62774);const d={},h=void 0,m={},p=[];function b(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/containerd/
            mkdir -p /etc/containerd/conf.d
            mkdir -p /etc/containerd/certs.d
          `}),(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/containerd/config.toml
            version = 2
            imports = ["/etc/containerd/conf.d/*.toml"]
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/containerd/conf.d/b-cloud.toml
            version = 2
            [plugins]
              [plugins."io.containerd.grpc.v1.cri"]
                sandbox_image = "${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                runtime_type = "io.containerd.runc.v2"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                SystemdCgroup = true
              [plugins."io.containerd.grpc.v1.cri".registry]
                config_path = "/etc/containerd/certs.d/"
            EOF
          `})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/containerd/config.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                imports = ["/etc/containerd/conf.d/*.toml"]
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/containerd/conf.d/b-cloud.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                [plugins]
                  [plugins."io.containerd.grpc.v1.cri"]
                    sandbox_image = "${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                    runtime_type = "io.containerd.runc.v2"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                    SystemdCgroup = true
                  [plugins."io.containerd.grpc.v1.cri".registry]
                    config_path = "/etc/containerd/certs.d/"
          `})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},66483:(e,t,n)=>{n.d(t,{L:()=>s});var r=n(6353),a=n(7478);const s={authenticationKubeconfig:{value:`${a.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${a.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${a.M.kuberneteBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},66685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesControllerManagerClient.keyPath} ${i.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${i.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${i.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${i.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},66832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
  export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${o.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}
`}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
`}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  IP.1  = ${o.M.virtualMachineLocalAddress.value}
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
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesServer.keyPath} ${i.$.kubernetesServer.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesServer.keyPath} \\
    -out    ${i.$.kubernetesServer.csrPath} \\
    -config ${i.$.kubernetesServer.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},67069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(19529),l=n(89982);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},67332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","title":"systemdUnitEnable","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitEnable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{language:"bash",children:i.A`
      systemctl enable kubelet
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(o.A,{language:"bash",children:i.A`
      Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service → /usr/lib/systemd/system/kubelet.service.
  `})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},67716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(7109),l=n(31773),u=n(11946);const d={},h=void 0,m={},p=[...c.toc,...l.toc,...u.toc];function b(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"HardWay",children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(l.default,{})]}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(u.default,{})})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},68890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/adminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(33901),l=n(47442),u=n(34759);const d={},h=void 0,m={},p=[...c.toc,...u.toc,...l.toc];function b(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"HardWay",children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},69423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=(n(6353),n(31798)),c=n(63770),l=n(10119),u=n(60513),d=n(1775);const h={},m=void 0,p={},b=[];function v(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
    export CLUSTER_NAME=${i.M.clusterName.value}
    export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
    export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
    export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
    export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${l.D.initialAdvertisePeerUrls.value}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${i.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${i.M.kuberneteBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${i.M.kuberneteBaseFolderPath.value}
    creationTimestamp: null
    labels:
      component: etcd
      tier: control-plane
    name: etcd
    namespace: kube-system
  spec:
    containers:
    - command:
      - etcd
      - --advertise-client-urls=${l.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${l.D.autoCompactionRetention.value}
      - --cert-file=${l.D.certFile.value}
      - --client-cert-auth=${l.D.clientCertAuth.value}
      - --data-dir=${l.D.dataDir.value}
      - --election-timeout=${l.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${l.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${l.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${l.D.initialCluster.value}
      - --key-file=${l.D.keyFile.value}
      - --listen-client-urls=${l.D.listenClientUrls.value}
      - --listen-metrics-urls=${l.D.listenMetricsUrls.value}
      - --listen-peer-urls=${l.D.listenPeerUrls.value}
      - --logger=${l.D.logger.value}
      - --max-snapshots=${l.D.maxSnapshots.value}
      - --max-wals=${l.D.maxWals.value}
      - --metrics=${l.D.metrics.value}
      - --name=${l.D.name.value}
      - --peer-cert-file=${l.D.peerCertFile.value}
      - --peer-client-cert-auth=${l.D.peerClientCertAuth.value}
      - --peer-key-file=${l.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${l.D.peerTrustedCAFile.value}
      - --snapshot-count=${l.D.snapshotCount.value}
      - --quota-backend-bytes=${l.D.quotaBackendBytes.value}
      - --trusted-ca-file=${l.D.trustedCAFile.value}
      image: ${i.M.baseDockerRegistry.value}/etcd:${c.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: ${o.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: etcd
      resources:
        requests:
          cpu: 100m
          memory: 100Mi
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: 127.0.0.1
          path: /health?serializable=false
          port: ${o.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${i.M.kuberneteBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${i.M.kuberneteBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v()}},71372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>$,frontMatter:()=>v,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(10119),l=n(25292),u=n(7478),d=n(63770),h=n(76519),m=n(86613),p=n(87464),b=n(62774);const v={},k=void 0,f={},g=[];function x(e){const t={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,a.jsxs)(b.A,{groupId:"install-type",children:[(0,a.jsxs)(p.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
        export CLUSTER_NAME='${u.M.clusterName.value}'
        export BASE_DOMAIN='${u.M.kubernetesBaseDomain.value}'
        export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
        export INTERNAL_API=api.${u.M.kubernetesClusterExternalDomain.value}
        export MACHINE_LOCAL_ADDRESS=${u.M.virtualMachineLocalAddress.value}
        export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${c.D.initialAdvertisePeerUrls.value}"
      `}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,a.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,a.jsx)(o.A,{children:i.A`
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
      `})]}),(0,a.jsx)(p.A,{value:"Cloud-init",children:(0,a.jsx)(o.A,{children:i.A`
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
            controlPlaneEndpoint: {{ local_hostname }}:${l.L.securePort.value}

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
      `})})]})]})}function $(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},72608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/secondaryMasters","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(60513),l=n(1775);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"master-2",children:(0,a.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-2
      `})}),(0,a.jsx)(i.A,{value:"master-3",children:(0,a.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},74124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},74279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.kubernetesEtcdClient.keyPath} ${i.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${i.$.kubernetesEtcdClient.keyPath} \\
    -out    ${i.$.kubernetesEtcdClient.csrPath} \\
    -config ${i.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,a.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},75478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/initMaster","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(60513),l=n(1775);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsx)(o.A,{children:(0,a.jsx)(i.A,{value:"master-1",children:(0,a.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-1
      `})})})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},76519:(e,t,n)=>{n.d(t,{Q:()=>c});var r=n(60513),a=n(25292),s=n(63770),i=n(86613),o=n(7478);const c={data:{value:r.A`
      clusterName: "$\{CLUSTER_NAME}"
      controlPlaneEndpoint: $\{INTERNAL_API}:${a.L.securePort.value}
      imageRepository: "${o.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${o.M.kubernetesServiceCIDR.value}
        dnsDomain: ${o.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${s.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${o.M.baseDockerRegistry.value}"
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
    `}}},79971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig super-admin \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},79988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(63770),c=n(25292),l=n(31798),u=n(1775),d=n(60513);const h={},m=void 0,p={},b=[];function v(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(u.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(u.A,{language:"bash",children:d.A`
      mkdir -p ${i.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(u.A,{language:"bash",children:d.A`
  ---
  cat <<EOF > ${i.M.kuberneteBaseFolderPath.value}/manifests/kube-apiserver.yaml
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
      - --aggregator-reject-forwarding-redirect=${c.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${c.L.allowPrivileged.value}
      - --anonymous-auth=${c.L.anonymousAuth.value}
      - --api-audiences=${c.L.apiAudiences.value}
      - --apiserver-count=${c.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${c.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${c.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${c.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${c.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${c.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${c.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${c.L.auditLogCompress.value}
      - --audit-log-format=${c.L.auditLogFormat.value}
      - --audit-log-maxage=${c.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${c.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${c.L.auditLogMaxsize.value}
      - --audit-log-mode=${c.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${c.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${c.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${c.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${c.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${c.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${c.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${c.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${c.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${c.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${c.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${c.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${c.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${c.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${c.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${c.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${c.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${c.L.auditWebhookVersion.value}
      - --authentication-token-webhook-cache-ttl=${c.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${c.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${c.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${c.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${c.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${c.L.authorizationWebhookVersion.value}
      - --bind-address=${c.L.bindAddress.value}
      - --cert-dir=${c.L.certDir.value}
      - --client-ca-file=${c.L.clientCaFile.value}
      - --cloud-provider=${c.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${c.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${c.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${c.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${c.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${c.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${c.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${c.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${c.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${c.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${c.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${c.L.enableGarbageCollector.value}
      - --enable-logs-handler=${c.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${c.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${c.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${c.L.endpointReconcilerType.value}
      - --etcd-cafile=${c.L.etcdCafile.value}
      - --etcd-certfile=${c.L.etcdCertfile.value}
      - --etcd-compaction-interval=${c.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${c.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${c.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${c.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${c.L.etcdKeyfile.value}
      - --etcd-prefix=${c.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${c.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${c.L.etcdServers.value}
      - --event-ttl=${c.L.eventTtl.value}
      - --feature-gates=${c.L.featureGates.value}
      - --goaway-chance=${c.L.goawayChance.value}
      - --help=${c.L.help.value}
      - --http2-max-streams-per-connection=${c.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${c.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${c.L.kubeletClientKey.value}
      - --kubelet-port=${c.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${c.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${c.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${c.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${c.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${c.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${c.L.livezGracePeriod.value}
      - --log-flush-frequency=${c.L.logFlushFrequency.value}
      - --logging-format=${c.L.loggingFormat.value}
      - --log-json-info-buffer-size=${c.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${c.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${c.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${c.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${c.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${c.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${c.L.maxRequestsInflight.value}
      - --min-request-timeout=${c.L.minRequestTimeout.value}
      - --permit-address-sharing=${c.L.permitAddressSharing.value}
      - --permit-port-sharing=${c.L.permitPortSharing.value}
      - --profiling=${c.L.profiling.value}
      - --proxy-client-cert-file=${c.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${c.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${c.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${c.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${c.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${c.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${c.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${c.L.requestTimeout.value}
      - --runtime-config=${c.L.runtimeConfig.value}
      - --secure-port=${c.L.securePort.value}
      - --service-account-extend-token-expiration=${c.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${c.L.serviceAccountIssuer.value}
      - --service-account-key-file=${c.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${c.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${c.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${c.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${c.L.serviceClusterIpRange.value}
      - --service-node-port-range=${c.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${c.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${c.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${c.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${c.L.storageBackend.value}
      - --storage-media-type=${c.L.storageMediaType.value}
      - --tls-cert-file=${c.L.tlsCertFile.value}
      - --tls-private-key-file=${c.L.tlsPrivateKeyFile.value}
      - --v=${c.L.v.value}
      - --version=${c.L.version.value}
      - --watch-cache=${c.L.watchCache.value}

      # Не указывать если значение "" или undefined
      # - --cloud-config=${c.L.cloudConfig.value}
      # - --strict-transport-security-directives=${c.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${c.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${c.L.disabledMetrics.value}
      # - --egress-selector-config-file=${c.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${c.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${c.L.etcdServersOverrides.value}
      # - --external-hostname=${c.L.externalHostname.value}
      # - --kubelet-certificate-authority=${c.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${c.L.oidcCaFile.value}
      # - --oidc-client-id=${c.L.oidcClientId.value}
      # - --oidc-groups-claim=${c.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${c.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${c.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${c.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${c.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${c.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${c.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${c.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${c.L.peerAdvertisePort.value}
      # - --peer-ca-file=${c.L.peerCaFile.value}
      # - --service-account-jwks-uri=${c.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${c.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${c.L.tlsCipherSuites.value}
      # - --tls-min-version=${c.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${c.L.tlsSniCertKey.value}
      # - --token-auth-file=${c.L.tokenAuthFile.value}
      # - --tracing-config-file=${c.L.tracingConfigFile.value}
      # - --vmodule=${c.L.vmodule.value}
      # - --watch-cache-sizes=${c.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${c.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${c.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${c.L.debugSocketPath.value}
      # - --authorization-policy-file=${c.L.authorizationPolicyFile.value}
      # - --authorization-config=${c.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${c.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${c.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${c.L.auditWebhookConfigFile.value}
      # - --audit-policy-file=${c.L.auditPolicyFile.value}
      # - --audit-log-path=${c.L.auditLogPath.value}
      # - --allow-metric-labels=${c.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${c.L.allowMetricLabelsManifest.value}
      # - --admission-control=${c.L.admissionControl.value}
      # - --admission-control-config-file=${c.L.admissionControlConfigFile.value}
      # - --advertise-address=${c.L.advertiseAddress.value}
      image: ${i.M.baseDockerRegistry.value}/kube-apiserver:${o.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${l.h.kubeAPIServer.portNumber}
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
          port: ${l.h.kubeAPIServer.portNumber}
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
          port: ${l.h.kubeAPIServer.portNumber}
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
      - mountPath: ${i.M.kuberneteBaseFolderPath.value}/pki
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
        path: ${i.M.kuberneteBaseFolderPath.value}/pki
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
`})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v()}},80263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Front Proxy CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(86260),l=n(60145);const u={},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,a.jsx)(t.code,{children:"Front Proxy CA"}),"."]})]}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"HardWay",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},80614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},80731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(7478);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig scheduler \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация Kube Scheduler сертификатов
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},81970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(82286);const o={},c=void 0,l={},u=[...i.toc];function d(e){return(0,a.jsx)(i.default,{})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d()}},82286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(62376),l=n(80731),u=n(7915);const d={},h=void 0,m={},p=[...c.toc,...u.toc,...l.toc];function b(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"HardWay",children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(u.default,{})]}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}},83276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/runc/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/runc/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${c.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.runc.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/runc
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/runc/download.env
            COMPONENT_VERSION="${l.M.runc.value}"
            REPOSITORY="${c.m.runc.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/runc/download-script.sh
            ${u.data.value}
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            chmod +x /etc/default/runc/download-script.sh
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            systemctl enable runc-install.service
            systemctl start runc-install.service
          `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/runc/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.runc.value}"
                REPOSITORY="${c.m.runc.baseUrl}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
            - path: /etc/default/runc/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.data.value}
          `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
          `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            - systemctl enable runc-install.service
            - systemctl start runc-install.service
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},83807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","permalink":"/in-cloud/tech-docs/etcd/certificates/centerAuthority/etcdCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki/etcd
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${i.$.etcdCA.keyPath} ${i.$.etcdCA.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
    openssl req \\
      -x509 \\
      -new \\
      -nodes \\
      -key ${i.$.etcdCA.keyPath} \\
      -sha256 \\
      -days 3650 \\
      -out ${i.$.etcdCA.crtPath} \\
      -config ${i.$.etcdCA.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},84582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/etcd-settings","title":"etcd-settings","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setupComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/etcd-settings","permalink":"/in-cloud/tech-docs/etcd/components/etcd/etcd-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"etcd-settings"},"sidebar":"techDocs","previous":{"title":"5.1.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/in-cloud/tech-docs/etcd/certificates/all-certificates"},"next":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/in-cloud/tech-docs/etcd/components/etcd/add-members"}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(69423),l=n(24917);const u={id:"etcd-settings"},d=void 0,h={},m=[...c.toc,...l.toc];function p(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsx)(i.A,{value:"Static Pod",children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},84588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setupEnvironments/allMasterTabs","title":"allMasterTabs","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setupEnvironments/allMasterTabs.mdx","sourceDirName":"tech-docs/kubernetes/setupEnvironments","slug":"/tech-docs/kubernetes/setupEnvironments/allMasterTabs","permalink":"/in-cloud/tech-docs/kubernetes/setupEnvironments/allMasterTabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(60513),l=n(1775);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"master-1",children:(0,a.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-1
      `})}),(0,a.jsx)(i.A,{value:"master-2",children:(0,a.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-2
      `})}),(0,a.jsx)(i.A,{value:"master-3",children:(0,a.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},84778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/centerAuthority/etcdCA","slug":"/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/centerAuthority/etcdCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-ca \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Create ETCD CA
  [certs] Generating "etcd/ca" certificate and key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/startSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775);const c={},l=void 0,u={},d=[];function h(e){return(0,a.jsx)(o.A,{language:"bash",children:i.A`
      systemctl enable containerd
      systemctl start containerd
  `})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}},85421:(e,t,n)=>{n.d(t,{w:()=>s});var r=n(31798),a=n(7478);const s={authenticationKubeconfig:{value:`${a.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${a.M.kuberneteBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${a.M.kuberneteBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},85631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=(n(6353),n(31798)),c=n(63770),l=n(66483),u=n(60513),d=n(1775);const h={},m=void 0,p={},b=[];function v(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${i.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(d.A,{language:"bash",children:u.A`
    cat <<EOF > ${i.M.kuberneteBaseFolderPath.value}/manifests/kube-controller-manager.yaml
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
        - --allocate-node-cidrs=${l.L.allocateNodeCidrs.value}
        - --allow-untagged-cloud=${l.L.allowUntaggedCloud.value}
        - --attach-detach-reconcile-sync-period=${l.L.attachDetachReconcileSyncPeriod.value}
        - --authentication-kubeconfig=${l.L.authenticationKubeconfig.value}
        - --authentication-skip-lookup=${l.L.authenticationSkipLookup.value}
        - --authentication-token-webhook-cache-ttl=${l.L.authenticationTokenWebhookCacheTtl.value}
        - --authentication-tolerate-lookup-failure=${l.L.authenticationTolerateLookupFailure.value}
        - --authorization-always-allow-paths=${l.L.authorizationAlwaysAllowPaths.value}
        - --authorization-kubeconfig=${l.L.authorizationKubeconfig.value}
        - --authorization-webhook-cache-authorized-ttl=${l.L.authorizationWebhookCacheAuthorizedTtl.value}
        - --authorization-webhook-cache-unauthorized-ttl=${l.L.authorizationWebhookCacheUnauthorizedTtl.value}
        - --bind-address=${l.L.bindAddress.value}
        - --cidr-allocator-type=${l.L.cidrAllocatorType.value}
        - --client-ca-file=${l.L.clientCaFile.value}
        - --cloud-provider=${l.L.cloudProvider.value}
        - --cloud-provider-gce-lb-src-cidrs=${l.L.cloudProviderGceLbSrcCidrs.value}
        - --cluster-signing-cert-file=${l.L.clusterSigningCertFile.value}
        - --cluster-signing-duration=${l.L.clusterSigningDuration.value}
        - --cluster-signing-key-file=${l.L.clusterSigningKeyFile.value}
        - --concurrent-cron-job-syncs=${l.L.concurrentCronJobSyncs.value}
        - --concurrent-deployment-syncs=${l.L.concurrentDeploymentSyncs.value}
        - --concurrent-endpoint-syncs=${l.L.concurrentEndpointSyncs.value}
        - --concurrent-ephemeralvolume-syncs=${l.L.concurrentEphemeralvolumeSyncs.value}
        - --concurrent-gc-syncs=${l.L.concurrentGcSyncs.value}
        - --concurrent-horizontal-pod-autoscaler-syncs=${l.L.concurrentHorizontalPodAutoscalerSyncs.value}
        - --concurrent-job-syncs=${l.L.concurrentJobSyncs.value}
        - --concurrent-namespace-syncs=${l.L.concurrentNamespaceSyncs.value}
        - --concurrent-rc-syncs=${l.L.concurrentRcSyncs.value}
        - --concurrent-replicaset-syncs=${l.L.concurrentReplicasetSyncs.value}
        - --concurrent-resource-quota-syncs=${l.L.concurrentResourceQuotaSyncs.value}
        - --concurrent-service-endpoint-syncs=${l.L.concurrentServiceEndpointSyncs.value}
        - --concurrent-service-syncs=${l.L.concurrentServiceSyncs.value}
        - --concurrent-serviceaccount-token-syncs=${l.L.concurrentServiceaccountTokenSyncs.value}
        - --concurrent-statefulset-syncs=${l.L.concurrentStatefulsetSyncs.value}
        - --concurrent-ttl-after-finished-syncs=${l.L.concurrentTtlAfterFinishedSyncs.value}
        - --concurrent-validating-admission-policy-status-syncs=${l.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
        - --configure-cloud-routes=${l.L.configureCloudRoutes.value}
        - --contention-profiling=${l.L.contentionProfiling.value}
        - --controller-start-interval=${l.L.controllerStartInterval.value}
        - --controllers=${l.L.controllers.value}
        - --disable-attach-detach-reconcile-sync=${l.L.disableAttachDetachReconcileSync.value}
        - --disable-force-detach-on-timeout=${l.L.disableForceDetachOnTimeout.value}
        - --enable-dynamic-provisioning=${l.L.enableDynamicProvisioning.value}
        - --enable-garbage-collector=${l.L.enableGarbageCollector.value}
        - --enable-hostpath-provisioner=${l.L.enableHostpathProvisioner.value}
        - --enable-leader-migration=${l.L.enableLeaderMigration.value}
        - --endpoint-updates-batch-period=${l.L.endpointUpdatesBatchPeriod.value}
        - --endpointslice-updates-batch-period=${l.L.endpointsliceUpdatesBatchPeriod.value}
        - --feature-gates=${l.L.featureGates.value}
        - --flex-volume-plugin-dir=${l.L.flexVolumePluginDir.value}
        - --help=${l.L.help.value}
        - --horizontal-pod-autoscaler-cpu-initialization-period=${l.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
        - --horizontal-pod-autoscaler-downscale-delay=${l.L.horizontalPodAutoscalerDownscaleDelay.value}
        - --horizontal-pod-autoscaler-downscale-stabilization=${l.L.horizontalPodAutoscalerDownscaleStabilization.value}
        - --horizontal-pod-autoscaler-initial-readiness-delay=${l.L.horizontalPodAutoscalerInitialReadinessDelay.value}
        - --horizontal-pod-autoscaler-sync-period=${l.L.horizontalPodAutoscalerSyncPeriod.value}
        - --horizontal-pod-autoscaler-tolerance=${l.L.horizontalPodAutoscalerTolerance.value}
        - --horizontal-pod-autoscaler-upscale-delay=${l.L.horizontalPodAutoscalerUpscaleDelay.value}
        - --http2-max-streams-per-connection=${l.L.http2MaxStreamsPerConnection.value}
        - --kube-api-burst=${l.L.kubeApiBurst.value}
        - --kube-api-content-type=${l.L.kubeApiContentType.value}
        - --kube-api-qps=${l.L.kubeApiQps.value}
        - --kubeconfig=${l.L.kubeconfig.value}
        - --large-cluster-size-threshold=${l.L.largeClusterSizeThreshold.value}
        - --leader-elect=${l.L.leaderElect.value}
        - --leader-elect-lease-duration=${l.L.leaderElectLeaseDuration.value}
        - --leader-elect-renew-deadline=${l.L.leaderElectRenewDeadline.value}
        - --leader-elect-resource-lock=${l.L.leaderElectResourceLock.value}
        - --leader-elect-resource-name=${l.L.leaderElectResourceName.value}
        - --leader-elect-resource-namespace=${l.L.leaderElectResourceNamespace.value}
        - --leader-elect-retry-period=${l.L.leaderElectRetryPeriod.value}
        - --legacy-service-account-token-clean-up-period=${l.L.legacyServiceAccountTokenCleanUpPeriod.value}
        - --log-flush-frequency=${l.L.logFlushFrequency.value}
        - --log-json-info-buffer-size=${l.L.logJsonInfoBufferSize.value}
        - --log-json-split-stream=${l.L.logJsonSplitStream.value}
        - --log-text-info-buffer-size=${l.L.logTextInfoBufferSize.value}
        - --log-text-split-stream=${l.L.logTextSplitStream.value}
        - --logging-format=${l.L.loggingFormat.value}
        - --max-endpoints-per-slice=${l.L.maxEndpointsPerSlice.value}
        - --min-resync-period=${l.L.minResyncPeriod.value}
        - --mirroring-concurrent-service-endpoint-syncs=${l.L.mirroringConcurrentServiceEndpointSyncs.value}
        - --mirroring-endpointslice-updates-batch-period=${l.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
        - --mirroring-max-endpoints-per-subset=${l.L.mirroringMaxEndpointsPerSubset.value}
        - --namespace-sync-period=${l.L.namespaceSyncPeriod.value}
        - --node-cidr-mask-size=${l.L.nodeCidrMaskSize.value}
        - --node-cidr-mask-size-ipv4=${l.L.nodeCidrMaskSizeIpv4.value}
        - --node-cidr-mask-size-ipv6=${l.L.nodeCidrMaskSizeIpv6.value}
        - --node-eviction-rate=${l.L.nodeEvictionRate.value}
        - --node-monitor-grace-period=${l.L.nodeMonitorGracePeriod.value}
        - --node-monitor-period=${l.L.nodeMonitorPeriod.value}
        - --node-startup-grace-period=${l.L.nodeStartupGracePeriod.value}
        - --node-sync-period=${l.L.nodeSyncPeriod.value}
        - --permit-address-sharing=${l.L.permitAddressSharing.value}
        - --permit-port-sharing=${l.L.permitPortSharing.value}
        - --profiling=${l.L.profiling.value}
        - --pv-recycler-increment-timeout-nfs=${l.L.pvRecyclerIncrementTimeoutNfs.value}
        - --pv-recycler-minimum-timeout-hostpath=${l.L.pvRecyclerMinimumTimeoutHostpath.value}
        - --pv-recycler-minimum-timeout-nfs=${l.L.pvRecyclerMinimumTimeoutNfs.value}
        - --pv-recycler-timeout-increment-hostpath=${l.L.pvRecyclerTimeoutIncrementHostpath.value}
        - --pvclaimbinder-sync-period=${l.L.pvclaimbinderSyncPeriod.value}
        - --requestheader-client-ca-file=${l.L.requestheaderClientCaFile.value}
        - --requestheader-extra-headers-prefix=${l.L.requestheaderExtraHeadersPrefix.value}
        - --requestheader-group-headers=${l.L.requestheaderGroupHeaders.value}
        - --requestheader-username-headers=${l.L.requestheaderUsernameHeaders.value}
        - --resource-quota-sync-period=${l.L.resourceQuotaSyncPeriod.value}
        - --root-ca-file=${l.L.rootCaFile.value}
        - --route-reconciliation-period=${l.L.routeReconciliationPeriod.value}
        - --secondary-node-eviction-rate=${l.L.secondaryNodeEvictionRate.value}
        - --secure-port=${l.L.securePort.value}
        - --service-account-private-key-file=${l.L.serviceAccountPrivateKeyFile.value}
        - --terminated-pod-gc-threshold=${l.L.terminatedPodGcThreshold.value}
        - --unhealthy-zone-threshold=${l.L.unhealthyZoneThreshold.value}
        - --use-service-account-credentials=${l.L.useServiceAccountCredentials.value}
        - --v=${l.L.v.value}
        - --version=${l.L.version.value}
        - --volume-host-allow-local-loopback=${l.L.volumeHostAllowLocalLoopback.value}

        # Не указывать если значение "" или undefined
        # - --cluster-signing-kube-apiserver-client-cert-file=${l.L.clusterSigningKubeApiserverClientCertFile.value}
        # - --cluster-signing-kube-apiserver-client-key-file=${l.L.clusterSigningKubeApiserverClientKeyFile.value}
        # - --cluster-signing-kubelet-client-cert-file=${l.L.clusterSigningKubeletClientCertFile.value}
        # - --cluster-signing-kubelet-client-key-file=${l.L.clusterSigningKubeletClientKeyFile.value}
        # - --cluster-signing-kubelet-serving-cert-file=${l.L.clusterSigningKubeletServingCertFile.value}
        # - --cluster-signing-kubelet-serving-key-file=${l.L.clusterSigningKubeletServingKeyFile.value}
        # - --cluster-signing-legacy-unknown-cert-file=${l.L.clusterSigningLegacyUnknownCertFile.value}
        # - --cluster-signing-legacy-unknown-key-file=${l.L.clusterSigningLegacyUnknownKeyFile.value}
        # - --cluster-cidr=${l.L.clusterCidr.value}
        # - --cloud-config=${l.L.cloudConfig.value}
        # - --cert-dir=${l.L.certDir.value}
        # - --allow-metric-labels-manifest=${l.L.allowMetricLabelsManifest.value}
        # - --allow-metric-labels=${l.L.allowMetricLabels.value}
        # - --disabled-metrics=${l.L.disabledMetrics.value}
        # - --leader-migration-config=${l.L.leaderMigrationConfig.value}
        # - --master=${l.L.master.value}
        # - --pv-recycler-pod-template-filepath-hostpath=${l.L.pvRecyclerPodTemplateFilepathHostpath.value}
        # - --pv-recycler-pod-template-filepath-nfs=${l.L.pvRecyclerPodTemplateFilepathNfs.value}
        # - --service-cluster-ip-range=${l.L.serviceClusterIpRange.value}
        # - --show-hidden-metrics-for-version=${l.L.showHiddenMetricsForVersion.value}
        # - --tls-cert-file=${l.L.tlsCertFile.value}
        # - --tls-cipher-suites=${l.L.tlsCipherSuites.value}
        # - --tls-min-version=${l.L.tlsMinVersion.value}
        # - --tls-private-key-file=${l.L.tlsPrivateKeyFile.value}
        # - --tls-sni-cert-key=${l.L.tlsSniCertKey.value}
        # - --vmodule=${l.L.vmodule.value}
        # - --volume-host-cidr-denylist=${l.L.volumeHostCidrDenylist.value}
        # - --external-cloud-volume-plugin=${l.L.externalCloudVolumePlugin.value}
        # - --requestheader-allowed-names=${l.L.requestheaderAllowedNames.value}
        image: ${i.M.baseDockerRegistry.value}/kube-controller-manager:${c.M.kubernetes.value}
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 8
          httpGet:
            path: /healthz
            port: ${o.h.kubeControllerManager.portNumber}
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
            port: ${o.h.kubeControllerManager.portNumber}
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
        - mountPath: ${i.M.kuberneteBaseFolderPath.value}/pki
          name: k8s-certs
          readOnly: true
        - mountPath: ${i.M.kuberneteBaseFolderPath.value}/controller-manager.conf
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
          path: ${i.M.kuberneteBaseFolderPath.value}/pki
          type: DirectoryOrCreate
        name: k8s-certs
      - hostPath:
          path: ${i.M.kuberneteBaseFolderPath.value}/controller-manager.conf
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
  `})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v()}},86260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","permalink":"/in-cloud/tech-docs/kubernetes/certificates/centerAuthority/frontProxyCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[];function p(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/openssl
      mkdir -p ${o.M.kuberneteBaseFolderPath.value}/pki
  `}),"\n",(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${i.$.frontProxyCA.keyPath} ${i.$.frontProxyCA.keySize}
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${i.$.frontProxyCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${i.$.frontProxyCA.crtPath} \\
    -config ${i.$.frontProxyCA.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},86613:(e,t,n)=>{n.d(t,{IL:()=>l,Nu:()=>c,Uj:()=>u,hZ:()=>d});var r=n(60513),a=n(10119),s=n(25292),i=n(66483),o=n(85421);const c={data:{value:r.A`
      advertise-client-urls: "${a.D.advertiseClientUrls.value}"
      auto-compaction-retention: "${a.D.autoCompactionRetention.value}"
      cert-file: "${a.D.certFile.value}"
      client-cert-auth: "${a.D.clientCertAuth.value}"
      data-dir: "${a.D.dataDir.value}"
      election-timeout: "${a.D.electionTimeout.value}"
      heartbeat-interval: "${a.D.heartbeatInterval.value}"
      initial-advertise-peer-urls: "${a.D.initialAdvertisePeerUrls.value}"
      initial-cluster: "${a.D.initialCluster.value}"
      key-file: "${a.D.keyFile.value}"
      listen-client-urls: "${a.D.listenClientUrls.value}"
      listen-metrics-urls: "${a.D.listenMetricsUrls.value}"
      listen-peer-urls: "${a.D.listenPeerUrls.value}"
      logger: "${a.D.logger.value}"
      max-snapshots: "${a.D.maxSnapshots.value}"
      max-wals: "${a.D.maxWals.value}"
      metrics: "${a.D.metrics.value}"
      name: "${a.D.name.value}"
      peer-cert-file: "${a.D.peerCertFile.value}"
      peer-client-cert-auth: "${a.D.peerClientCertAuth.value}"
      peer-key-file: "${a.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${a.D.peerTrustedCAFile.value}"
      snapshot-count: "${a.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${a.D.trustedCAFile.value}"
    `}},l={data:{value:r.A`
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
      authentication-kubeconfig: "${o.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${o.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${o.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${o.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${o.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${o.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${o.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${o.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${o.w.bindAddress.value}"
      client-ca-file: "${o.w.clientCaFile.value}"
      contention-profiling: "${o.w.contentionProfiling.value}"
      help: "${o.w.help.value}"
      http2-max-streams-per-connection: "${o.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${o.w.kubeApiBurst.value}"
      kube-api-content-type: "${o.w.kubeApiContentType.value}"
      kube-api-qps: "${o.w.kubeApiQps.value}"
      kubeconfig: "${o.w.kubeconfig.value}"
      leader-elect: "${o.w.leaderElect.value}"
      leader-elect-lease-duration: "${o.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${o.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${o.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${o.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${o.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${o.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${o.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${o.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${o.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${o.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${o.w.logTextSplitStream.value}"
      logging-format: "${o.w.loggingFormat.value}"
      permit-address-sharing: "${o.w.permitAddressSharing.value}"
      permit-port-sharing: "${o.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${o.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${o.w.profiling.value}"
      requestheader-extra-headers-prefix: "${o.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${o.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${o.w.requestheaderUsernameHeaders.value}"
      secure-port: "${o.w.securePort.value}"
      v: "${o.w.v.value}"
      version: "${o.w.version.value}"

      # allow-metric-labels: "${o.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${o.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${o.w.certDir.value}"
      # config: "${o.w.config.value}"
      # disabled-metrics: "${o.w.disabledMetrics.value}"
      # feature-gates: "${o.w.featureGates.value}"
      # master: "${o.w.master.value}"
      # requestheader-allowed-names: "${o.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${o.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${o.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${o.w.tlsCertFile.value}"
      # tls-cipher-suites: "${o.w.tlsCipherSuites.value}"
      # tls-min-version: "${o.w.tlsMinVersion.value}"
      # tls-private-key-file: "${o.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${o.w.tlsSniCertKey.value}"
      # vmodule: "${o.w.vmodule.value}"
      # write-config-to: "${o.w.writeConfigTo.value}"
    `}}},86969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configFiles","title":"configFiles","description":"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(98744),o=n(71372),c=n(75478),l=n(72608);const u={},d=void 0,h={},m=[{value:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:4},...c.toc,...o.toc,{value:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",level:4},...l.toc,...i.toc];function p(e){const t={h4:"h4",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h4,{id:"init-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(init) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(t.h4,{id:"join-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439-\u0444\u0430\u0439\u043b",children:"(join) \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(i.default,{})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},87217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/downloadBIN","permalink":"/in-cloud/tech-docs/kubernetes/components/kubelet/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(1775),c=n(42567),l=n(63770);const u={data:{value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.kubelet.path}"


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
    `}};var d=n(87464),h=n(62774);const m={},p=void 0,b={},v=[];function k(e){return(0,a.jsxs)(h.A,{groupId:"install-type",children:[(0,a.jsxs)(d.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            mkdir -p /etc/default/kubelet
          `}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${c.m.kubelet.baseUrl}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${u.data.value}
          EOF
        `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,a.jsxs)(d.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${c.m.kubelet.baseUrl}"
        `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.data.value}
        `}),(0,a.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,a.jsx)(o.A,{language:"yaml",children:i.A`
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
        `}),(0,a.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k()}},87464:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},87935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f super-admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(6353),o=n(7478),c=n(1775),l=n(60513);const u={},d=void 0,h={},m=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>super-admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",level:4}];function p(e){const t={code:"code",h4:"h4",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,a.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,a.jsx)(c.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${i.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${i.$.kubernetesSuperAdminClient.crtPath} \\
    --client-key=${i.$.kubernetesSuperAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf

  kubectl config use-context default \\
    --kubeconfig=${o.M.kuberneteBaseFolderPath.value}/super-admin.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},89982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","permalink":"/in-cloud/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-peer \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},90725:e=>{e.exports=JSON.parse('{"permalink":"/in-cloud/blog/kubernetes-the-hard-way","source":"@site/blog/kubernetes-the-hard-way.mdx","title":"Kubernetes The Hard Way","description":"\u0420\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 Kubernetes The Hard Way","date":"2025-03-23T00:00:00.000Z","tags":[],"readingTime":8.31,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Kubernetes The Hard Way","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-the-hard-way"},"unlisted":false}')},92374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(7478),o=n(1775),c=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,a.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig controller-manager \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(o.A,{language:"bash",children:c.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
`})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},97786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/serviceAccountComponent","title":"serviceAccountComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/serviceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/serviceAccountComponent","permalink":"/in-cloud/tech-docs/kubernetes/certificates/serviceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(1775),l=n(60513),u=n(6353);const d={},h=void 0,m={},p=[];function b(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"HardWay",children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
        openssl genpkey \\
          -algorithm RSA \\
          -out ${u.$.kubernetesSA.keyPath} \\
          -pkeyopt rsa_keygen_bits:2048
      `}),(0,a.jsx)(c.A,{language:"bash",children:l.A`
        openssl rsa \\
          -pubout \\
          -in ${u.$.kubernetesSA.keyPath} \\
          -out ${u.$.kubernetesSA.crtPath}
      `})]}),(0,a.jsxs)(i.A,{value:"Kubeadm",children:[(0,a.jsx)(c.A,{language:"bash",children:l.A`
        kubeadm init phase certs sa
      `}),(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,a.jsx)(c.A,{language:"bash",children:l.A`
  #### Генерация Kube API сертификатов
  [certs] Generating "sa" key and public key
`})]})]})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},98744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(1775),o=n(25292),c=n(60513),l=n(7478),u=n(31798);const d={},h=void 0,m={},p=[];function b(e){const{Details:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(i.A,{language:"bash",children:c.A`
      export MACHINE_LOCAL_ADDRESS="${l.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}

    `}),(0,a.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,a.jsx)(i.A,{children:c.A`cat <<EOF > ${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${u.h.kubeAPIServer.portNumber}
      certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${o.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},99119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","permalink":"/in-cloud/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(87464),o=n(62774),c=n(66685),l=n(38816),u=n(92374);const d={},h=void 0,m={},p=[...c.toc,...l.toc,...u.toc];function b(e){return(0,a.jsxs)(o.A,{groupId:"install-type",children:[(0,a.jsxs)(i.A,{value:"HardWay",children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(l.default,{})]}),(0,a.jsx)(i.A,{value:"Kubeadm",children:(0,a.jsx)(u.default,{})})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b()}}}]);