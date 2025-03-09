"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1607],{7478:(e,t,n)=>{n.d(t,{M:()=>a});const a={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/configFiles","title":"configFiles","description":"Systemd Unit ENV","source":"@site/docs/tech-docs/kubernetes/components/crictl/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),l=n(28453),s=n(53828),c=n(1775),i=n(7478),u=n(87464),o=n(62774);const d={},h=void 0,f={},m=[];function p(e){const t={p:"p",...(0,l.R)(),...e.components};return(0,r.jsxs)(o.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
            cat <<"EOF" > /etc/default/crictl/config.env
            CRI_ENDPOINT="${i.M.criEndpoint.value}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
            cat <<"EOF" > /etc/default/crictl/crictl.yaml.template.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            export CRI_ENDPOINT="$\{CRI_ENDPOINT:-${i.M.criEndpoint.value}}"
            
            TEMPLATE_PATH="/etc/default/crictl/crictl.yaml.template"
            CONFIG_PATH="/etc/crictl.yaml"
            LOG_TAG="crictl-config"
            
            if [[ ! -f "$TEMPLATE_PATH" ]]; then
              logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
              exit 1
            fi
            
            logger -t "$LOG_TAG" "[INFO] Generating crictl config..."
            envsubst '$CRI_ENDPOINT' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
            
            if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
              logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
            else
              logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
              exit 1
            fi
            EOF
          `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
            chmod +x /etc/default/crictl/crictl.yaml.template.sh
          `}),(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
            cat <<"EOF" > /etc/default/crictl/crictl.yaml.template
            runtime-endpoint: unix://$\{CRI_ENDPOINT}
            EOF
          `}),(0,r.jsx)("h4",{children:"Systemd Unit Template"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
            cat <<"EOF" > /usr/lib/systemd/system/crictl-config-update.service
            [Unit]
            Description=Update crictl config
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/config.env
            ExecStart=/bin/bash /etc/default/crictl/crictl.yaml.template.sh
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(c.A,{language:"yaml",children:s.A`
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:s.A`
          `}),(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"yaml",children:(0,r.jsx)(t.p,{children:"`}"})}),(0,r.jsx)("h4",{children:"Systemd Unit Template"}),(0,r.jsx)(c.A,{language:"yaml",children:s.A`
          `})]})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},62774:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(96540),r=n(34164),l=n(65627),s=n(56347),c=n(50372),i=n(30604),u=n(11861),o=n(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??p;return f({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function A(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),o=e=>{const t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:o,...l,className:(0,r.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function E(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function x(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(A,{...t,...e}),(0,v.jsx)(E,{...t,...e})]})}function T(e){const t=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},87464:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}}}]);