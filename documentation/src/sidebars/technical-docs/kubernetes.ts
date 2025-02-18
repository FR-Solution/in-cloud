export const kubernetes = [
  {
    type: 'category',
    label: '5.2.1. Окружение',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.2.1.1. Настройка ОС',
        id: 'tech-docs/kubernetes/setupEnvironments/os-setup',
      },
      {
        type: 'category',
        label: '5.2.1.2. Установка ПО',
        collapsed: true,
        link: {
          type: 'doc',
          id: 'tech-docs/kubernetes/components/download',
        },
        items: [
          {
            type: 'doc',
            label: '5.2.1.2.1. Containerd',
            id: 'tech-docs/kubernetes/components/containerd/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.2. Runc',
            id: 'tech-docs/kubernetes/components/runc/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.3. Crictl',
            id: 'tech-docs/kubernetes/components/crictl/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.4. Kubectl',
            id: 'tech-docs/kubernetes/components/kubectl/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.5. Kubeadm',
            id: 'tech-docs/kubernetes/components/kubeadm/lifecycle',
          },

          {
            type: 'doc',
            label: '5.2.1.2.6. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/lifecycle',
          },
          {
            type: 'doc',
            label: '5.2.1.2.7. Etcd',
            id: 'tech-docs/kubernetes/components/etcd/lifecycle',
          },
        ],
      },
      {
        type: 'category',
        label: '5.2.1.3. Настройка ПО',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.1.3.1. Containerd',
            id: 'tech-docs/kubernetes/components/containerd/lifecycle-settings',
          },
          {
            type: 'doc',
            label: '5.2.1.3.2. Crictl',
            id: 'tech-docs/kubernetes/components/crictl/lifecycle-settings',
          },
          {
            type: 'doc',
            label: '5.2.1.3.3. Kubeadm',
            id: 'tech-docs/kubernetes/components/kubeadm/lifecycle-settings',
          },

          {
            type: 'doc',
            label: '5.2.1.3.4. Kubelet',
            id: 'tech-docs/kubernetes/components/kubelet/lifecycle-settings',
          },
          {
            type: 'doc',
            label: '5.2.1.3.5. Kube-API',
            id: 'tech-docs/kubernetes/components/kubeAPI/api-static-pods',
          },
          {
            type: 'doc',
            label: '5.2.1.3.6. Kube-Controller',
            id: 'tech-docs/kubernetes/components/controllerManager/controller-static-pods',
          },
          {
            type: 'doc',
            label: '5.2.1.3.7. Kube-Scheduler',
            id: 'tech-docs/kubernetes/components/scheduler/scheduler-static-pods',
          },
        ],
      },
      {
        type: 'doc',
        label: '5.2.1.4. Проверка',
        id: 'tech-docs/kubernetes/components/components-ready',
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.3. Аутентификация',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.2.3.1. Иниц-я ЦА',
        id: 'tech-docs/kubernetes/certificates/all-center-authority',
      },
      {
        type: 'doc',
        label: '5.2.3.1.  Тираж-е ЦА',
        id: 'tech-docs/kubernetes/certificates/download-center-authority',
      },

      {
        type: 'doc',
        label: '5.2.3.2. Сертификаты',
        id: 'tech-docs/kubernetes/certificates/all-certificates',
      },
      {
        type: 'doc',
        label: '5.2.3.3. Сервис Аккаунт',
        id: 'tech-docs/kubernetes/certificates/service-account',
      },
      {
        type: 'doc',
        label: '5.2.3.4. Проверка',
        id: 'tech-docs/kubernetes/certificates/examination',
      },
    ],
  },
  {
    type: 'category',
    label: '5.2.4. Настройка УК',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.2.4.1. Пост обработка',
        id: 'tech-docs/kubernetes-thw/step-by-step-kubeadm-aditional',
      },

    ],
  },
  {
    type: 'doc',
    label: '5.2.5. Запуск УК',
    id: 'tech-docs/kubernetes-thw/k8s-start',
  },
  {
    type: 'category',
    label: '5.2.6. Сеть',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: '5.2.6.1. Сервисная',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.6.1.1. Концепт',
            id: 'tech-docs/kubernetes-network/base-load-balancer-principal',
          },
          // {
          //   type: 'doc',
          //   label: 'LoadBalancer Citrix',
          //   id: 'tech-docs/kubernetes-network/base-load-balancer-citrix',
          // },
          {
            type: 'doc',
            label: '5.2.6.1.2. Metallb',
            id: 'tech-docs/kubernetes-network/metallb/base-load-balancer-metallb',
          },
          // {
          //   type: 'doc',
          //   label: 'LoadBalancer Cilium',
          //   id: 'tech-docs/kubernetes-network/base-load-balancer-cilium',
          // },
        ],
      },
      {
        type: 'category',
        label: '5.2.6.2. Подовая',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.2.6.2.1. Концепт',
            id: 'tech-docs/kubernetes-network/base-pod-principal',
          },
          {
            type: 'doc',
            label: '5.2.6.2.2. CNI Cilium',
            id: 'tech-docs/kubernetes-network/base-pod-cni-cilium',
          },
        ],
      },
      {
        type: 'doc',
        label: '5.2.6.3. NAG',
        id: 'tech-docs/kubernetes-network/base-network-access-group-principal',
      },
    ],
  },
  {
    type: 'doc',
    label: '5.2.6. Диагностика',
    id: 'tech-docs/kubernetes-thw/k8s-troubleshooting',
  },
]
