"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1710],{7478:(e,t,r)=>{r.d(t,{M:()=>n});const n={baseDockerRegistry:{value:"registry.k8s.io"},pausedImage:{value:"pause:3.9"},kubernetesBaseDomain:{value:"example.com"},clusterName:{value:"example"},kubernetesClusterDomain:{value:"${CLUSTER_NAME}.${BASE_DOMAIN}"},kuberneteBaseFolderPath:{value:"/etc/kubernetes"},kuberneteKubeletFolderPath:{value:"/var/lib/kubelet"},criEndpoint:{value:"/var/run/containerd/containerd.sock"},kubernetesServiceCIDR:{value:"29.64.0.0/16"},kubernetesDNSAddress:{value:"29.64.0.10"},kubernetesDefaultInternalAddress:{value:"29.64.0.1"},virtualMachineLocalAddress:{value:"$(ip -4 addr show scope global | awk '/inet/ {print $2; exit}' | cut -d/ -f1)"},virtualMachineFullName:{value:"${HOST_NAME}.${CLUSTER_DOMAIN}"}}},31798:(e,t,r)=>{r.d(t,{h:()=>n});const n={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},52315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>n,toc:()=>E});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/setupSystemdUnit","title":"setupSystemdUnit","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","permalink":"/infrastructure/bcloud-docs/tech-docs/kubernetes/components/kubelet/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),a=r(28453),u=r(53828),o=r(1775),l=r(31798),i=r(7478);const c={},d=void 0,b={},E=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:u.A`
      export BASE_K8S_PATH="${i.M.kuberneteBaseFolderPath.value}"
      export BASE_KUBELET_PATH="${i.M.kuberneteKubeletFolderPath.value}"
      export CRI_ENDPOINT="${i.M.criEndpoint.value}"
      export BASE_DOCKER_REGISTRY="${i.M.baseDockerRegistry.value}"
      export PAUSED_IMAGE="${i.M.pausedImage.value}"
      export KUBELET_SERVER_PORT=${l.h.kubeletServer.portNumber}
      export KUBELET_HEALTHZ_PORT=${l.h.kubeletHealthz.portNumber}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f systemd unit"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:u.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target
      After=network-online.target
      
      [Service]
      ExecStart=/usr/bin/kubelet
      Restart=always
      StartLimitInterval=0
      RestartSec=10
      
      [Install]
      WantedBy=multi-user.target
      EOF
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 systemd unit"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:u.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=$\{BASE_K8S_PATH}/bootstrap-kubelet.conf --kubeconfig=$\{BASE_K8S_PATH}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=$\{BASE_KUBELET_PATH}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-$\{BASE_KUBELET_PATH}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARG \\$KUBELET_EXTRA_ARGS
      EOF
  `}),"\n",(0,s.jsx)(o.A,{language:"bash",children:u.A`
      cat <<EOF > $\{BASE_KUBELET_PATH}/kubeadm-flags.env
      KUBELET_KUBEADM_ARGS="
      --container-runtime-endpoint=unix://$\{CRI_ENDPOINT} \
      --pod-infra-container-image=$\{BASE_DOCKER_REGISTRY}/$\{PAUSED_IMAGE}
      "
      EOF
  `}),"\n",(0,s.jsx)(o.A,{language:"bash",children:u.A`
      cat <<EOF > /etc/default/kubelet
      KUBELET_EXTRA_ARGS=""
      EOF
  `}),"\n"]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}}}]);