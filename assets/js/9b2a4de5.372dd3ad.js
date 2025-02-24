"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3728,5618,5935],{1313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>S,frontMatter:()=>u,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/etcd-settings","title":"5.1.3.1. ETCD","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setup.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/etcd-settings","permalink":"/in-cloud/tech-docs/etcd/components/etcd/etcd-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"etcd-settings"},"sidebar":"techDocs","previous":{"title":"5.1.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/in-cloud/tech-docs/etcd/certificates/all-certificates"},"next":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/in-cloud/tech-docs/etcd/components/etcd/add-members"}}');var a=r(74848),c=r(28453),s=r(87464),l=r(62774),i=r(69423),o=r(24917);const u={id:"etcd-settings"},d="5.1.3.1. ETCD",p={},h=[...i.toc,...o.toc];function A(e){const t={admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"5131-etcd",children:"5.1.3.1. ETCD"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,a.jsxs)(l.A,{groupId:"install-type",children:[(0,a.jsx)(s.A,{value:"Static Pod",children:(0,a.jsx)(i.default,{})}),(0,a.jsx)(s.A,{value:"Kubeadm",children:(0,a.jsx)(o.default,{})})]})]})}function S(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},6353:(e,t,r)=>{r.d(t,{$:()=>n});const n={etcdCA:{keyPath:"${BASE_K8S_PATH}/pki/etcd/ca.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/etcd-ca.conf",keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:"${BASE_K8S_PATH}/pki/ca.key",crtPath:"${BASE_K8S_PATH}/pki/ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/ca.conf",keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-ca.crt",csrPath:"",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-ca.conf",keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/controller-manager-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/controller-manager-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/controller-manager-client.conf",keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/healthcheck-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/healthcheck-client.conf",keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/server.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/server.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-server.conf",keySize:"2048",cname:""},etcdPeer:{keyPath:"${BASE_K8S_PATH}/pki/etcd/peer.key",crtPath:"${BASE_K8S_PATH}/pki/etcd/peer.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/etcd-peer.csr",crtConf:"${BASE_K8S_PATH}/openssl/etcd-peer.conf",keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-kubelet-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-kubelet-client.conf",keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:"${BASE_K8S_PATH}/pki/front-proxy-client.key",crtPath:"${BASE_K8S_PATH}/pki/front-proxy-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/front-proxy-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/front-proxy-client.conf",keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver-etcd-client.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver-etcd-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver-etcd-client.conf",keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:"${BASE_K8S_PATH}/pki/apiserver.key",crtPath:"${BASE_K8S_PATH}/pki/apiserver.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/apiserver.csr",crtConf:"${BASE_K8S_PATH}/openssl/apiserver.conf",keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/super-admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/super-admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/super-admin.conf",keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/admin.key",crtPath:"${BASE_K8S_PATH}/kubeconfig/admin.crt",csrPath:"${BASE_K8S_PATH}/openssl/csr/admin.csr",crtConf:"${BASE_K8S_PATH}/openssl/admin.conf",keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:"${BASE_K8S_PATH}/pki/sa.key",crtPath:"${BASE_K8S_PATH}/pki/sa.pub",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-client.conf",keySize:"2048",cname:""},kubeletServer:{keyPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-key.pem",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/kubelet-server.csr",crtConf:"${BASE_K8S_PATH}/openssl/kubelet-server.conf",keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-current.pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:"${BASE_KUBELET_PATH}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem",csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client-key.pem",crtPath:"${BASE_K8S_PATH}/kubeconfig/scheduler-client.pem",csrPath:"${BASE_K8S_PATH}/openssl/csr/scheduler-client.csr",crtConf:"${BASE_K8S_PATH}/openssl/scheduler-client.conf",keySize:"2048",cname:"system:kube-scheduler"}}},7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},10119:(e,t,r)=>{r.d(t,{D:()=>n});const n={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:"${ETCD_PEER_CRT_PATH}"},peerKeyFile:{value:"${ETCD_PEER_KEY_PATH}"},peerTrustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},peerClientCertAuth:{value:"true"},certFile:{value:"${ETCD_SERVER_CRT_PATH}"},keyFile:{value:"${ETCD_SERVER_KEY_PATH}"},trustedCAFile:{value:"${ETCD_CA_CRT_PATH}"},listenClientUrls:{value:"https://127.0.0.1:${ETCD_SERVER_PORT},https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},listenPeerUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_PEER_PORT}"},listenMetricsUrls:{value:"http://127.0.0.1:${ETCD_METRICS_PORT}"},dataDir:{value:"/var/lib/etcd"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:"https://${MACHINE_LOCAL_ADDRESS}:${ETCD_SERVER_PORT}"},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"}}},24917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>A,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/kubeadm","title":"kubeadm","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/kubeadm","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),c=r(28453),s=r(7478),l=r(1775),i=r(53828);const o={},u=void 0,d={},p=[];function h(e){const t={admonition:"admonition",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(l.A,{language:"bash",children:i.A`
      export BASE_K8S_PATH="${s.M.kuberneteBaseFolderPath.value}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(l.A,{language:"bash",children:i.A`
      kubeadm init phase etcd local \
        --config=$\{BASE_K8S_PATH}/kubeadm.conf
  `}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(l.A,{language:"bash",children:i.A`
      #### Kube API
      [etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
  `})})]})}function A(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),a=r(34164),c=r(65627),s=r(56347),l=r(50372),i=r(30604),o=r(11861),u=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function A(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),c=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(c),(0,n.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(a.location.search);t.set(c,e),a.replace({...a.location,search:t.toString()})}),[c,a])]}function S(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,c=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[o,d]=A({queryString:r,groupId:a}),[S,_]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,c]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:a}),m=(()=>{const e=o??S;return h({value:e,tabValues:c})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),_(e)}),[d,_,c]),tabValues:c}}var _=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function P(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(o(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:c}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...c,className:(0,a.A)("tabs__item",m.tabItem,c?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function E(e){let{lazy:t,children:r,selectedValue:c}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===c));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==c})))})}function b(e){const t=S(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,k.jsx)(P,{...t,...e}),(0,k.jsx)(E,{...t,...e})]})}function v(e){const t=(0,_.A)();return(0,k.jsx)(b,{...e,children:d(e.children)},String(t))}},63770:(e,t,r)=>{r.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.5"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},69423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>A,default:()=>k,frontMatter:()=>h,metadata:()=>n,toc:()=>_});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPod","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),c=r(28453),s=r(7478),l=r(6353),i=r(31798),o=r(63770),u=r(10119),d=r(53828),p=r(1775);const h={},A=void 0,S={},_=[];function m(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,a.jsx)(p.A,{language:"bash",children:d.A`
      export ETCD_METRICS_PORT=${i.h.etcdMetricServer.portNumber}
      export ETCD_PEER_PORT=${i.h.etcdPeer.portNumber}
      export ETCD_SERVER_PORT=${i.h.etcdServer.portNumber}
  `}),"\n",(0,a.jsx)(p.A,{language:"bash",children:d.A`
      export BASE_K8S_PATH="${s.M.kuberneteBaseFolderPath.value}"
      export MACHINE_LOCAL_ADDRESS=${s.M.virtualMachineLocalAddress.value}
      export FULL_HOST_NAME="${s.M.virtualMachineFullName.value}"
      export BASE_DOCKER_REGISTRY="${s.M.baseDockerRegistry.value}"
      export ETCD_VERSION="${o.M.etcd.value}"
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=https://$\{MACHINE_LOCAL_ADDRESS}:$\{ETCD_PEER_PORT}"
  `}),"\n",(0,a.jsx)(p.A,{language:"bash",children:d.A`
      export ETCD_SERVER_KEY_PATH="${l.$.etcdServer.keyPath}"
      export ETCD_SERVER_CRT_PATH="${l.$.etcdServer.crtPath}"
      export ETCD_PEER_KEY_PATH="${l.$.etcdPeer.keyPath}"
      export ETCD_PEER_CRT_PATH="${l.$.etcdPeer.crtPath}"
      export ETCD_CA_CRT_PATH="${l.$.etcdCA.crtPath}"
  `}),"\n",(0,a.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,a.jsx)(p.A,{language:"bash",children:d.A`
      mkdir -p $\{BASE_K8S_PATH}/manifests
  `}),"\n",(0,a.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,a.jsx)(p.A,{language:"bash",children:d.A`
  cat <<EOF > $\{BASE_K8S_PATH}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:$\{ETCD_SERVER_PORT}
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
      - --advertise-client-urls=${u.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${u.D.autoCompactionRetention.value}
      - --cert-file=${u.D.certFile.value}
      - --client-cert-auth=${u.D.clientCertAuth.value}
      - --data-dir=${u.D.dataDir.value}
      - --election-timeout=${u.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${u.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${u.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${u.D.initialCluster.value}
      - --key-file=${u.D.keyFile.value}
      - --listen-client-urls=${u.D.listenClientUrls.value}
      - --listen-metrics-urls=${u.D.listenMetricsUrls.value}
      - --listen-peer-urls=${u.D.listenPeerUrls.value}
      - --logger=${u.D.logger.value}
      - --max-snapshots=${u.D.maxSnapshots.value}
      - --max-wals=${u.D.maxWals.value}
      - --metrics=${u.D.metrics.value}
      - --name=${u.D.name.value}
      - --peer-cert-file=${u.D.peerCertFile.value}
      - --peer-client-cert-auth=${u.D.peerClientCertAuth.value}
      - --peer-key-file=${u.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${u.D.peerTrustedCAFile.value}
      - --snapshot-count=10000
      - --trusted-ca-file=${u.D.trustedCAFile.value}
      image: $\{BASE_DOCKER_REGISTRY}/etcd:$\{ETCD_VERSION}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: $\{ETCD_METRICS_PORT}
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
          port: $\{ETCD_METRICS_PORT}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: $\{BASE_K8S_PATH}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: $\{BASE_K8S_PATH}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},87464:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var c=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}}}]);