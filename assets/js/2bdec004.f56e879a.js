"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1607],{7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},52672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/configFiles","title":"configFiles","description":"Systemd Unit ENV","source":"@site/docs/tech-docs/kubernetes/components/crictl/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),l=n(28453),i=n(60513),s=n(1775),c=n(7478),o=n(87464),u=n(62774);const d={},f=void 0,h={},p=[];function m(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(o.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/crictl/config.env
            CRI_ENDPOINT="${c.M.criEndpoint.value}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/crictl/crictl.yaml.template.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            export CRI_ENDPOINT="$\{CRI_ENDPOINT:-${c.M.criEndpoint.value}}"
            
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
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            chmod +x /etc/default/crictl/crictl.yaml.template.sh
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/crictl/crictl.yaml.template
            runtime-endpoint: unix://$\{CRI_ENDPOINT}
            EOF
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Template"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
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
          `})]}),(0,a.jsxs)(o.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            - path: /etc/default/crictl/config.env
              owner: root:root
              permissions: '0644'
              content: |
                CRI_ENDPOINT="${c.M.criEndpoint.value}"
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            - path: /etc/default/crictl/crictl.yaml.template.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                export CRI_ENDPOINT="$\{CRI_ENDPOINT:-${c.M.criEndpoint.value}}"
                
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
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            - path: /etc/default/crictl/crictl.yaml.template
              owner: root:root
              permissions: '0644'
              content: |
                runtime-endpoint: unix://$\{CRI_ENDPOINT}
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Template"}),(0,a.jsx)(s.A,{language:"bash",children:i.A`
            - path: /usr/lib/systemd/system/crictl-config-update.service
              owner: root:root
              permissions: '0644'
              content: |
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
          `})]})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},62774:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),a=n(34164),l=n(65627),i=n(56347),s=n(50372),c=n(30604),o=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=f(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,d]=p({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=o??m;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function A(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(o(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function T(e){let{lazy:t,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function E(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(A,{...t,...e}),(0,v.jsx)(T,{...t,...e})]})}function I(e){const t=(0,g.A)();return(0,v.jsx)(E,{...e,children:d(e.children)},String(t))}},87464:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}}}]);