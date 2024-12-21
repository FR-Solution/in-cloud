export const kubernetesTHW = [
  {
    type: 'doc',
    label: 'Введение',
    id: 'tech-docs/kubernetes-thw/introduction',
  },
  {
    type: 'doc',
    label: 'Компоненты',
    id: 'tech-docs/kubernetes-thw/components',
  },
  {
    type: 'doc',
    label: 'Архитектура',
    id: 'tech-docs/kubernetes-thw/arch',
  },

  {
    type: 'category',
    label: 'Как начать',
    collapsed: false,
    items: [
      {
        type: 'category',
        label: 'Подготовка окружения',
        collapsed: false,
        items: [
          {
            type: 'doc',
            label: 'Настройка ОС',
            id: 'tech-docs/kubernetes/setupEnvironments/os-setup',
          },
          {
            type: 'doc',
            label: 'Загрузка компонентов',
            id: 'tech-docs/kubernetes-thw/step-by-step-os1',
          },
          {
            type: 'category',
            label: 'Установка компонентов',
            collapsed: false,
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
        collapsed: false,
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
