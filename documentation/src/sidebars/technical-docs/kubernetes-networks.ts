export const kubernetesNetworks = [
  {
    type: 'category',
    label: 'Сервисная сеть',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: 'Концепт',
        id: 'tech-docs/kubernetes-network/base-load-balancer-principal',
      },
      // {
      //   type: 'doc',
      //   label: 'LoadBalancer Citrix',
      //   id: 'tech-docs/kubernetes-network/base-load-balancer-citrix',
      // },
      {
        type: 'doc',
        label: 'LoadBalancer Metallb',
        id: 'tech-docs/kubernetes-network/metallb/base-load-balancer-metallb',
      },
      // {
      //   type: 'doc',
      //   label: 'LoadBalancer Cilium',
      //   id: 'tech-docs/kubernetes-network/base-load-balancer-cilium',
      // },

    ]
  },
  {
    type: 'category',
    label: 'Подовая сеть',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: 'Концепт',
        id: 'tech-docs/kubernetes-network/base-pod-principal',
      },
      {
        type: 'doc',
        label: 'CNI Cilium',
        id: 'tech-docs/kubernetes-network/base-pod-cni-cilium',
      },
    ]
  },
  {
    type: 'doc',
    label: 'Netwok Access Group',
    id: 'tech-docs/kubernetes-network/base-network-access-group-principal',
  }
]
