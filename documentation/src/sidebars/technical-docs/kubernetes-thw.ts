export const kubernetesTHW = [
  {
    type: 'doc',
    label: '0. Введение',
    id: 'tech-docs/kubernetes/about',
  },
  {
    type: 'doc',
    label: '1. Общее описание',
    id: 'tech-docs/kubernetes/introduction',
  },
  {
    type: 'doc',
    label: '2. Требования',
    id: 'tech-docs/kubernetes/requirements',
  },
  {
    type: 'doc',
    label: '3. Архитектура',
    id: 'tech-docs/kubernetes/flowcharts/arch',
  },
  {
    type: 'doc',
    label: '4. Компоненты',
    id: 'tech-docs/kubernetes/components/components',
  },
  {
    type: 'category',
    label: 'Как начать',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Подготовка окружения',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: 'Настройка ОС',
            id: 'tech-docs/kubernetes/setupEnvironments/os-setup',
          },
          {
            type: 'category',
            label: 'Установка компонентов',
            collapsed: true,
            link: {
              type: 'doc',
              id: 'tech-docs/kubernetes/components/download'
            },
            items: [
              {
                type: 'doc',
                label: 'Containerd',
                id: 'tech-docs/kubernetes/components/containerd/lifecycle',
              },
              {
                type: 'doc',
                label: 'Runc',
                id: 'tech-docs/kubernetes/components/runc/lifecycle',
              },
              {
                type: 'doc',
                label: 'Crictl',
                id: 'tech-docs/kubernetes/components/crictl/lifecycle',
              },
              {
                type: 'doc',
                label: 'Kubectl',
                id: 'tech-docs/kubernetes/components/kubectl/lifecycle',
              },
              {
                type: 'doc',
                label: 'Kubeadm',
                id: 'tech-docs/kubernetes/components/kubeadm/lifecycle',
              },
              {
                type: 'doc',
                label: 'Kubelet',
                id: 'tech-docs/kubernetes/components/kubelet/lifecycle',
              },
              {
                type: 'doc',
                label: 'Etcd',
                id: 'tech-docs/etcd/components/etcd/lifecycle',
              },
              {
                type: 'doc',
                label: 'Etcdctl',
                id: 'tech-docs/etcd/components/etcdctl/lifecycle',
              },
              {
                type: 'doc',
                label: 'Etcdutl',
                id: 'tech-docs/etcd/components/etcdutl/lifecycle',
              },
            ]
          },
          {
            type: 'doc',
            label: 'Проверка',
            id: 'tech-docs/kubernetes-thw/step-by-step-os',
          },
        ]
      },
      {
        type: 'category',
        label: 'Kubeadm',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: 'Фазы',
            id: 'tech-docs/kubernetes-thw/phase-kubeadm',
          },
          {
            type: 'doc',
            label: 'Настройка',
            id: 'tech-docs/kubernetes-thw/phase-kubeadm',
          },
          {
            type: 'doc',
            label: 'Пост обработка',
            id: 'tech-docs/kubernetes-thw/step-by-step-kubeadm-aditional',
          },
        ],
      },
      {
        type: 'category',
        label: 'Аутентификация',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: 'ЦА',
            id: 'tech-docs/kubernetes/certificates/all-center-authority',
          },
          {
            type: 'doc',
            label: 'Сертификаты',
            id: 'tech-docs/kubernetes/certificates/all-certificates',
          },
        ],
      },
      {
        type: 'doc',
        label: 'Настройка УК',
        id: 'tech-docs/kubernetes-thw/step-by-step-static-pods',
      },
      {
        type: 'doc',
        label: 'Запуск УК',
        id: 'tech-docs/kubernetes-thw/k8s-start',
      },
    ]
  },
  {
    type: 'category',
    label: 'Диагностика',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: 'Диагностика',
        id: 'tech-docs/kubernetes-thw/k8s-troubleshooting',
      },
    ],
  },
]
