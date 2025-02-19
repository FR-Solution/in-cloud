"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8290],{23538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/setupSystemdUnit","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/containerd/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),c=n(53828),i=n(1775);const a={},d=void 0,u={},m=[];function l(t){return(0,r.jsx)(i.A,{language:"bash",children:c.A`
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
  `})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l()}}}]);