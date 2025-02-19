"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8290],{23538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/setupSystemdUnit","permalink":"/in-cloud/tech-docs/kubernetes/components/containerd/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),i=n(28453),o=n(53828),c=n(1775);const a={},d=void 0,u={},m=[];function l(e){return(0,r.jsx)(c.A,{language:"bash",children:o.A`
      cat <<EOF > /usr/lib/systemd/system/containerd.service
      [Unit]
      Description=containerd container runtime
      Documentation=https://containerd.io
      After=network.target

      [Service]
      ExecStartPre=/sbin/modprobe overlay
      ExecStart=/usr/local/bin/containerd
      Restart=always
      RestartSec=5
      Delegate=yes
      KillMode=process
      OOMScoreAdjust=-999
      LimitNOFILE=1048576
      LimitNPROC=infinity
      LimitCORE=infinity

      [Install]
      WantedBy=multi-user.target
      EOF
  `})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l()}}}]);