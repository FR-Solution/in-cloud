"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4218,5665,6340,8290,8937],{7478:(e,t,n)=>{n.d(t,{M:()=>r});const r={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"cluster.local"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},23538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),s=n(28453),o=n(60513),a=n(1775),c=n(87464),l=n(62774);const d={},u=void 0,m={},p=[];function h(e){return(0,i.jsxs)(l.A,{groupId:"install-type",children:[(0,i.jsx)(c.A,{value:"Bash",children:(0,i.jsx)(a.A,{language:"bash",children:o.A`
              cat <<EOF > /usr/lib/systemd/system/containerd.service
              [Unit]
              Description=containerd container runtime
              Documentation=https://containerd.io
              After=network.target local-fs.target
              Requires=containerd-install.service containerd-config-update.service runc-install.service
              
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
          `})}),(0,i.jsxs)(c.A,{value:"Cloud-init",children:[(0,i.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,i.jsx)(a.A,{language:"yaml",children:o.A`
            - path: /usr/lib/systemd/system/containerd.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=containerd container runtime
                Documentation=https://containerd.io
                After=network.target local-fs.target
                Requires=containerd-install.service containerd-config-update.service runc-install.service
            
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
          `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},50623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/dir","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),s=n(28453),o=n(60513),a=n(1775);const c={},l=void 0,d={},u=[];function m(e){return(0,i.jsx)(a.A,{language:"bash",children:o.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d/
      mkdir -p /etc/containerd/certs.d/
  `})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},62774:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(34164),s=n(65627),o=n(56347),a=n(50372),c=n(30604),l=n(11861),d=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=m(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=h({queryString:n,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),b=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function A(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),i=a[n].value;i!==r&&(l(t),o(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(A,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(t))}},65934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/configFiles","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),s=n(28453),o=n(60513),a=n(1775),c=n(7478),l=n(87464),d=n(62774);const u={},m=void 0,p={},h=[];function f(e){return(0,i.jsxs)(d.A,{groupId:"install-type",children:[(0,i.jsxs)(l.A,{value:"Bash",children:[(0,i.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
            mkdir -p /etc/containerd/
            mkdir -p /etc/containerd/conf.d
            mkdir -p /etc/containerd/certs.d
          `}),(0,i.jsx)("h4",{children:"Systemd Unit ENV"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/default/containerd/config.env
            SANDBOX_IMAGE="${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
            EOF
          `}),(0,i.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
            cat <<"EOF" > /etc/containerd/config.toml
            version = 2
            imports = ["/etc/containerd/conf.d/*.toml"]
            EOF
          `}),(0,i.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
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
          `}),(0,i.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
            chmod +x /etc/default/containerd/b-cloud-config.toml.template.sh
          `}),(0,i.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
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
          `}),(0,i.jsx)("h4",{children:"Systemd Unit Template"}),(0,i.jsx)(a.A,{language:"bash",children:o.A`
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
          `})]}),(0,i.jsxs)(l.A,{value:"Cloud-init",children:[(0,i.jsx)("h4",{children:"Systemd Unit ENV"}),(0,i.jsx)(a.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/config.env
              owner: root:root
              permissions: '0644'
              content: |
                SANDBOX_IMAGE="${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
          `}),(0,i.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,i.jsx)(a.A,{language:"yaml",children:o.A`
            - path: /etc/containerd/config.toml
              owner: root:root
              permissions: '0644'
              content: |
                version = 2
                imports = ["/etc/containerd/conf.d/*.toml"]
          `}),(0,i.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),(0,i.jsx)(a.A,{language:"yaml",children:o.A`
            - path: /etc/default/containerd/b-cloud-config.toml.template.sh
              owner: root:root
              permissions: '0755'
              content: |
                #!/bin/bash
                set -Eeuo pipefail
                
                export SANDBOX_IMAGE="$\{SANDBOX_IMAGE:-${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}}"
                
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
          `}),(0,i.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,i.jsx)(a.A,{language:"yaml",children:o.A`
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
          `}),(0,i.jsx)("h4",{children:"Systemd Unit Template"}),(0,i.jsx)(a.A,{language:"yaml",children:o.A`
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
          `})]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f()}},85072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/startSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),s=n(28453),o=n(60513),a=n(1775);const c={},l=void 0,d={},u=[];function m(e){return(0,i.jsx)(a.A,{language:"bash",children:o.A`
      systemctl enable containerd
      systemctl start containerd
  `})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},85434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycle-settings","title":"5.2.1.3.1. Containerd","description":"5.2.1.3.1.1. \u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleSettings.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycle-settings","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/lifecycle-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"lifecycle-settings"},"sidebar":"techDocs","previous":{"title":"5.2.1.2.7. Etcd","permalink":"/in-cloud/tech-docs/kubernetes/components/etcd/lifecycle"},"next":{"title":"5.2.1.3.2. Crictl","permalink":"/in-cloud/tech-docs/kubernetes/components/crictl/lifecycle-settings"}}');var i=n(74848),s=n(28453),o=(n(50623),n(85072)),a=n(23538),c=n(65934);const l={id:"lifecycle-settings"},d="5.2.1.3.1. Containerd",u={},m=[{value:"5.2.1.3.1.1. \u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521311-\u044d\u0442\u0430\u043f\u044b-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"5.2.1.3.1.2. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521312-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...c.toc,{value:"5.2.1.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"521313-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-systemd-unit-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},...a.toc,{value:"5.2.1.3.1.4. \u0421\u0442\u0430\u0440\u0442 Systemd Unit",id:"521314-\u0441\u0442\u0430\u0440\u0442-systemd-unit",level:2},...o.toc];function p(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"52131-containerd",children:"5.2.1.3.1. Containerd"})}),"\n",(0,i.jsx)(t.h2,{id:"521311-\u044d\u0442\u0430\u043f\u044b-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.1.1. \u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,i.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit (\u0441\u0435\u0440\u0432\u0438\u0441)."}),"\n",(0,i.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a."}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/in-cloud/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/in-cloud/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"521312-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.1.2. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsx)(t.h2,{id:"521313-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-systemd-unit-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"5.2.1.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(t.h2,{id:"521314-\u0441\u0442\u0430\u0440\u0442-systemd-unit",children:"5.2.1.3.1.4. \u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n",(0,i.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},87464:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:t})}}}]);