"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210,1507,2571],{136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>k});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/controller-settings","title":"5.2.1.3.5.1.2. Kube-Controller-Manager","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setup.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/controller-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/controller-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"controller-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.3.5.1.1. API","permalink":"/in-cloud/tech-docs/kubernetes/components/kubeAPI/api-settings"},"next":{"title":"5.2.1.3.5.1.3. Scheduler","permalink":"/in-cloud/tech-docs/kubernetes/components/scheduler/scheduler-settings"}}');var n=r(74848),l=r(28453),s=r(87464),c=r(62774),o=r(85631),u=r(4898);const i={id:"controller-settings"},d="5.2.1.3.5.1.2. Kube-Controller-Manager",h={},k=[...o.toc,...u.toc];function b(e){const t={admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"5213512-kube-controller-manager",children:"5.2.1.3.5.1.2. Kube-Controller-Manager"})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,n.jsxs)(c.A,{groupId:"install-type",children:[(0,n.jsx)(s.A,{value:"Static Pod",children:(0,n.jsx)(o.default,{})}),(0,n.jsx)(s.A,{value:"Kubeadm",children:(0,n.jsx)(u.default,{})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},4898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),s=r(7478),c=r(1775),o=r(60513);const u={},i=void 0,d={},h=[];function k(e){const t={admonition:"admonition",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(c.A,{language:"bash",children:o.A`
      kubeadm init phase  control-plane controller-manager --config=${s.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(c.A,{language:"bash",children:o.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},6353:(e,t,r)=>{r.d(t,{$:()=>n});var a=r(7478);const n={etcdCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kuberneteBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kuberneteBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kuberneteBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>a});const a={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kubeadmBaseConfigPath:{value:"/var/run/kubeadm"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},31798:(e,t,r)=>{r.d(t,{h:()=>a});const a={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,r)=>{r.d(t,{A:()=>M});var a=r(96540),n=r(34164),l=r(65627),s=r(56347),c=r(50372),o=r(30604),u=r(11861),i=r(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:r,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=u??p;return k({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=r(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var P=r(74848);function f(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),i=e=>{const t=e.currentTarget,r=o.indexOf(t),n=c[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,P.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,P.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:i,...l,className:(0,n.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,P.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function g(e){const t=p(e);return(0,P.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,P.jsx)(f,{...t,...e}),(0,P.jsx)(y,{...t,...e})]})}function M(e){const t=(0,m.A)();return(0,P.jsx)(g,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},85631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>v,frontMatter:()=>h,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=r(74848),l=r(28453),s=r(7478),c=r(6353),o=r(31798),u=r(63770),i=r(60513),d=r(1775);const h={},k=void 0,b={},p=[];function m(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:i.A`
      mkdir -p ${s.M.kuberneteBaseFolderPath.value}/manifests
  `}),"\n",(0,n.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,n.jsx)(d.A,{language:"bash",children:i.A`
    cat <<EOF > ${s.M.kuberneteBaseFolderPath.value}/manifests/kube-controller-manager.yaml
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
        - --authentication-kubeconfig=${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf
        - --authorization-always-allow-paths=/healthz,/readyz,/livez,/metrics
        - --authorization-kubeconfig=${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf
        - --bind-address=0.0.0.0
        - --client-ca-file=${c.$.kubernetesCA.crtPath}
        - --cluster-name=${s.M.clusterName.value}
        - --cluster-signing-cert-file=${c.$.kubernetesCA.crtPath}
        - --cluster-signing-duration=720h
        - --cluster-signing-key-file=${c.$.kubernetesCA.keyPath}
        - --concurrent-replicaset-syncs=20
        - --controllers=*,bootstrapsigner,tokencleaner
        - --feature-gates=RotateKubeletServerCertificate=true
        - --kube-api-burst=120
        - --kube-api-qps=100
        - --kubeconfig=${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf
        - --leader-elect=true
        - --namespace-sync-period=2m0s
        - --node-startup-grace-period=10s
        - --requestheader-client-ca-file=${c.$.frontProxyCA.crtPath}
        - --root-ca-file=${c.$.kubernetesCA.crtPath}
        - --service-account-private-key-file=${c.$.kubernetesSA.keyPath}
        - --terminated-pod-gc-threshold=12500
        - --use-service-account-credentials=true
        - --v=2
        image: ${s.M.baseDockerRegistry.value}/kube-controller-manager:${u.M.kubernetes.value}
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
        - mountPath: ${s.M.kuberneteBaseFolderPath.value}/pki
          name: k8s-certs
          readOnly: true
        - mountPath: ${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf
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
          path: ${s.M.kuberneteBaseFolderPath.value}/pki
          type: DirectoryOrCreate
        name: k8s-certs
      - hostPath:
          path: ${s.M.kuberneteBaseFolderPath.value}/controller-manager.conf
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
  `})]})}function v(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},87464:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var l=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}}}]);