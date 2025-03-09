"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5665],{7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},62774:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(96540),a=n(34164),o=n(65627),i=n(56347),c=n(50372),s=n(30604),l=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,d]=f({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??m;return p({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==r&&(l(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function E(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function T(e){const t=m(e);return(0,A.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,A.jsx)(v,{...t,...e}),(0,A.jsx)(E,{...t,...e})]})}function x(e){const t=(0,h.A)();return(0,A.jsx)(T,{...e,children:d(e.children)},String(t))}},65934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),o=n(28453),i=n(60513),c=n(1775),s=n(7478),l=n(87464),u=n(62774);const d={},g=void 0,p={},f=[];function m(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            mkdir -p /etc/containerd/
            mkdir -p /etc/containerd/conf.d
            mkdir -p /etc/containerd/certs.d
          `}),(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/containerd/config.env
            SANDBOX_IMAGE="${s.M.baseDockerRegistry.value}/${s.M.pausedImage.value}"
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/containerd/config.toml
            version = 2
            imports = ["/etc/containerd/conf.d/*.toml"]
            EOF
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/containerd/b-cloud-config.toml.template.sh
            #!/bin/bash
            set -Eeuo pipefail
            
            export SANDBOX_IMAGE="$\{SANDBOX_IMAGE:-registry.k8s.io/pause:3.9}"
            
            TEMPLATE_PATH="/etc/default/containerd/b-cloud-config.toml.template"
            CONFIG_PATH="/etc/containerd/conf.d/b-cloud.toml"
            LOG_TAG="containerd-config"
            
            if [[ ! -f "$TEMPLATE_PATH" ]]; then
              logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
              exit 1
            fi
            
            logger -t "$LOG_TAG" "[INFO] Generating containerd config..."
            envsubst '$SANDBOX_IMAGE' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
            
            if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
              logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
            else
              logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
              exit 1
            fi
            EOF
          `}),(0,a.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            chmod +x /etc/default/containerd/b-cloud-config.toml.template.sh
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /etc/default/containerd/b-cloud-config.toml.template
            version = 2       
            [plugins]
              [plugins."io.containerd.grpc.v1.cri"]
                sandbox_image = "$\{SANDBOX_IMAGE}"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                runtime_type = "io.containerd.runc.v2"
              [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                SystemdCgroup = true
              [plugins."io.containerd.grpc.v1.cri".registry]
                config_path = "/etc/containerd/certs.d/"
            EOF
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Template"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
            cat <<"EOF" > /usr/lib/systemd/system/containerd-config-update.service
            [Unit]
            Description=Update containerd config
            After=network.target
            Wants=network-online.target
            
            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/containerd/config.env
            ExecStartPre=/bin/mkdir -p /etc/containerd/conf.d
            ExecStart=/bin/bash /etc/default/containerd/b-cloud-config.toml.template.sh
            RemainAfterExit=yes
            
            [Install]
            WantedBy=multi-user.target
            EOF
          `})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Systemd Unit ENV"}),(0,a.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/config.env
              owner: root:root
              permissions: '0644'
              content: |
                SANDBOX_IMAGE="${s.M.baseDockerRegistry.value}/${s.M.pausedImage.value}"
          `}),(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,a.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/containerd/config.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                imports = ["/etc/containerd/conf.d/*.toml"]
          `}),(0,a.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,a.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/b-cloud-config.toml.template.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                export SANDBOX_IMAGE="$\{SANDBOX_IMAGE:-${s.M.baseDockerRegistry.value}/${s.M.pausedImage.value}}"
                
                TEMPLATE_PATH="/etc/default/containerd/b-cloud-config.toml.template"
                CONFIG_PATH="/etc/containerd/conf.d/b-cloud.toml"
                LOG_TAG="containerd-config"
                
                if [[ ! -f "$TEMPLATE_PATH" ]]; then
                  logger -t "$LOG_TAG" "[ERROR] Template file $TEMPLATE_PATH not found!"
                  exit 1
                fi
                
                logger -t "$LOG_TAG" "[INFO] Generating containerd config..."
                envsubst '$SANDBOX_IMAGE' < "$TEMPLATE_PATH" > "$CONFIG_PATH"
                
                if [[ -f "$CONFIG_PATH" && -s "$CONFIG_PATH" ]]; then
                  logger -t "$LOG_TAG" "[INFO] Configuration generated successfully at $CONFIG_PATH"
                else
                  logger -t "$LOG_TAG" "[ERROR] Failed to generate configuration!"
                  exit 1
                fi
          `}),(0,a.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,a.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /etc/default/containerd/b-cloud-config.toml.template
              owner: root:root
              permissions: '0644'
              content: |
                version = 2       
                [plugins]
                  [plugins."io.containerd.grpc.v1.cri"]
                    sandbox_image = "$\{SANDBOX_IMAGE}"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                    runtime_type = "io.containerd.runc.v2"
                  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                    SystemdCgroup = true
                  [plugins."io.containerd.grpc.v1.cri".registry]
                    config_path = "/etc/containerd/certs.d/"
          `}),(0,a.jsx)("h4",{children:"Systemd Unit Template"}),(0,a.jsx)(c.A,{language:"yaml",children:i.A`
            - path: /usr/lib/systemd/system/containerd-config-update.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Update containerd config
                After=network.target
                Wants=network-online.target
                
                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/containerd/config.env
                ExecStartPre=/bin/mkdir -p /etc/containerd/conf.d
                ExecStart=/bin/bash /etc/default/containerd/b-cloud-config.toml.template.sh
                RemainAfterExit=yes
                
                [Install]
                WantedBy=multi-user.target
          `})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},87464:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}}}]);