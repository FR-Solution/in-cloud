"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4286],{7478:(e,t,a)=>{a.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},25292:(e,t,a)=>{a.d(t,{L:()=>r});const r={clientCAFile:{value:"${KUBERNETES_CA_CRT_PATH}"},tlsCertFile:{value:"${KUBERNETES_SERVER_CRT_PATH}"},tlsPrivateKeyFile:{value:"${KUBERNETES_SERVER_KEY_PATH}"},etcdCAFile:{value:"${ETCD_CA_CRT_PATH}"},etcdCertfile:{value:"${KUBERNETES_ETCD_CLIENT_CRT_PATH}"},etcdKeyfile:{value:"${KUBERNETES_ETCD_CLIENT_KEY_PATH}"},etcdServers:{value:"${ETCD_SERVERS}"},kubeletClientCertificate:{value:"${KUBERNETES_KUBELET_CLIENT_CRT_PATH}"},kubeletClientKey:{value:"${KUBERNETES_KUBELET_CLIENT_KEY_PATH}"},kubeletServerPort:{value:"${KUBELET_SERVER_PORT}"},kubeletReadOnlyPort:{value:"${KUBELET_READ_ONLY_PORT}"},proxyClientCertFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CRT_PATH}"},proxyClientKeyFile:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_KEY_PATH}"},requestheaderAllowedNames:{value:"${KUBERNETES_FRONT_PROXY_CLIENT_CN}"},requestheaderClientCAFile:{value:"${FRONT_PROXY_CA_CRT_PATH}"},serviceAccountIssuer:{value:"https://kubernetes.default.svc.${CLUSTER_DOMAIN}"},serviceAccountKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_CRT_PATH}"},serviceAccountSigningKeyFile:{value:"${KUBERNETES_SERVICE_ACCOUNT_KEY_PATH}"},serviceClusterIPRange:{value:"${SERVICE_CIDR}"},advertiseAddress:{value:"${MACHINE_LOCAL_ADDRESS}"},securePort:{value:"${KUBE_APISERVER_PORT}"},anonymousAuth:{value:"true"},authorizationMode:{value:"Node,RBAC"},allowPrivileged:{value:"true"},enableAdmissionPlugins:{value:"NodeRestriction"},enableBootstrapTokenAuth:{value:"true"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"}}},31798:(e,t,a)=>{a.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},62774:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(96540),o=a(34164),n=a(65627),i=a(56347),s=a(50372),u=a(30604),l=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}(a);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const o=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,n=b(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[l,d]=h({queryString:a,groupId:o}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,c.Dv)(a);return[o,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:o}),E=(()=>{const e=l??m;return p({value:e,tabValues:n})?e:null})();(0,s.A)((()=>{E&&u(E)}),[E]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),k(e)}),[d,k,n]),tabValues:n}}var k=a(9136);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),o=s[a].value;o!==r&&(l(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...n,className:(0,o.A)("tabs__item",E.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function T(e){const t=m(e);return(0,A.jsxs)("div",{className:(0,o.A)("tabs-container",E.tabList),children:[(0,A.jsx)(v,{...t,...e}),(0,A.jsx)(f,{...t,...e})]})}function _(e){const t=(0,k.A)();return(0,A.jsx)(T,{...e,children:d(e.children)},String(t))}},77221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>A,frontMatter:()=>p,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/additionalSetup/rbac","title":"5.2.4.1.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c \u0443\u0437\u043b\u0430\u043c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u043f\u0435\u0440\u0435\u0434 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f.","source":"@site/docs/tech-docs/kubernetes/additionalSetup/rbac.mdx","sourceDirName":"tech-docs/kubernetes/additionalSetup","slug":"/tech-docs/kubernetes/additionalSetup/rbac","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/rbac","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"rbac"},"sidebar":"techDocs","previous":{"title":"5.2.4.1.1.2. Join","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/marking-join"},"next":{"title":"5.2.4.1.3.1. Init","permalink":"/in-cloud/tech-docs/kubernetes/additionalSetup/upload-configs-all-init"}}');var o=a(74848),n=a(28453),i=a(87464),s=a(62774),u=a(1775),l=a(53828),c=a(7478),d=a(31798),b=a(25292);const p={id:"rbac"},h="5.2.4.1.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",m={},k=[{value:"5.2.4.1.2.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438",id:"524121-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0440\u043e\u043b\u0435\u0432\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438",level:2}];function E(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"52412-\u0440\u043e\u043b\u0435\u0432\u0430\u044f-\u043c\u043e\u0434\u0435\u043b\u044c",children:"5.2.4.1.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c \u0443\u0437\u043b\u0430\u043c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u043f\u0435\u0440\u0435\u0434 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."})}),"\n",(0,o.jsx)(t.h2,{id:"524121-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0440\u043e\u043b\u0435\u0432\u043e\u0439-\u043c\u043e\u0434\u0435\u043b\u0438",children:"5.2.4.1.2.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),"\n",(0,o.jsxs)(s.A,{groupId:"install-type",children:[(0,o.jsxs)(i.A,{value:"HardWay",children:[(0,o.jsxs)(a,{open:!0,children:[(0,o.jsx)("summary",{children:"Role bindings"}),(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(u.A,{language:"bash",children:l.A`
          export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
      `}),(0,o.jsx)("h4",{children:"\u0420\u043e\u043b\u0438 \u0438 \u0441\u0432\u044f\u0437\u0438"}),(0,o.jsx)(u.A,{language:"bash",children:l.A`
        kubectl --kubeconfig=$\{BASE_K8S_PATH}/super-admin.conf apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: kubeadm:get-nodes
        rules:
        - apiGroups:
          - ""
          resources:
          - nodes
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:bootstrap-signer-clusterinfo
          namespace: kube-public
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - cluster-info
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:bootstrap-signer-clusterinfo
          namespace: kube-public
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:bootstrap-signer-clusterinfo
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: User
          name: system:anonymous
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:cluster-admins
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: cluster-admin
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: kubeadm:cluster-admins
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:get-nodes
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: kubeadm:get-nodes
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:kubelet-bootstrap
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:node-bootstrapper
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:node-autoapprove-bootstrap
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:certificates.k8s.io:certificatesigningrequests:nodeclient
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kubeadm:node-autoapprove-certificate-rotation
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        EOF
      `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(u.A,{language:"bash",children:l.A`
      clusterrole.rbac.authorization.k8s.io/kubeadm:get-nodes created
      role.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      rolebinding.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:cluster-admins created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:get-nodes created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:kubelet-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-certificate-rotation created
  `})})]}),(0,o.jsxs)(a,{open:!0,children:[(0,o.jsx)("summary",{children:"Bootstrap tokens"}),(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(u.A,{language:"bash",children:l.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
      `}),(0,o.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),(0,o.jsx)(u.A,{children:l.A`
      kubectl apply -f - <<EOF
      ---
      apiVersion: v1
      kind: Secret
      metadata:
        name: bootstrap-token-$\{TOKEN_ID}
        namespace: kube-system
      data:
        auth-extra-groups: $(echo -n "$AUTH_EXTRA_GROUPS" | base64)
        description: $(echo -n "$DESCRIPTION" | base64)
        expiration: $(echo -n "$EXPIRATION" | base64)
        token-id: $(echo -n "$TOKEN_ID" | base64)
        token-secret: $(echo -n "$TOKEN_SECRET" | base64)
        usage-bootstrap-authentication: $(echo -n "$USAGE_BOOTSTRAP_AUTHENTIFICATION" | base64)
        usage-bootstrap-signing: $(echo -n "$USAGE_BOOTSTRAP_SIGNING" | base64)
      type: bootstrap.kubernetes.io/token
      EOF
    `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(u.A,{language:"bash",children:l.A`
      secret/bootstrap-token-fjt9ex configured
  `})})]}),(0,o.jsxs)(a,{open:!0,children:[(0,o.jsx)("summary",{children:"Cluster-Info"}),(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(u.A,{language:"bash",children:l.A`
          export KUBE_APISERVER_PORT=${d.h.kubeAPIServer.portNumber}
          export KUBE_CA_CRT_BASE64=$(base64 -w 0 /etc/kubernetes/pki/ca.crt)
          export CLUSTER_NAME="${c.M.clusterName.value}"
          export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
      `}),(0,o.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0421luster-info"}),(0,o.jsx)(u.A,{children:l.A`
      kubectl --kubeconfig=$\{BASE_K8S_PATH}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: v1
      data:
        kubeconfig: |
          apiVersion: v1
          clusters:
          - cluster:
              certificate-authority-data: $\{KUBE_CA_CRT_BASE64}
              server: https://api.$\{CLUSTER_NAME}.$\{BASE_DOMAIN}:${b.L.securePort.value}
            name: ""
          contexts: null
          current-context: ""
          kind: Config
          preferences: {}
          users: null
      kind: ConfigMap
      metadata:
        name: cluster-info
        namespace: kube-public

      EOF
    `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(u.A,{language:"bash",children:l.A`
      configmap/cluster-info created
  `})})]})]}),(0,o.jsxs)(i.A,{value:"Kubeadm",children:[(0,o.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,o.jsx)(u.A,{language:"bash",children:l.A`
          export BASE_K8S_PATH="${c.M.kuberneteBaseFolderPath.value}"
      `}),(0,o.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),(0,o.jsx)(u.A,{language:"bash",children:l.A`
          kubeadm init phase bootstrap-token --config=$\{BASE_K8S_PATH}/kubeadm.conf
      `}),(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(u.A,{language:"bash",children:l.A`
      [bootstrap-token] Using token: fjt9ex.lwzqgdlvoxtqk4yw
      [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
      [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
      [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
      [bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
      [bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
      [bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
  `})})]})]})]})}function A(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(E,{...e})}):E(e)}},87464:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(34164);const o={tabItem:"tabItem_Ymn6"};var n=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a,children:t})}}}]);