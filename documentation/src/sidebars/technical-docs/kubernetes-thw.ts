

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
    type: 'category',
    label: '2. Требования',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '2.1. Оркестрация',
        id: 'tech-docs/kubernetes/requirements/orkestrations',
      },
      {
        type: 'doc',
        label: '2.2. Контейнеризация',
        id: 'tech-docs/kubernetes/requirements/containerization',
      },
      {
        type: 'doc',
        label: '2.3. Сеть',
        id: 'tech-docs/kubernetes/requirements/network',
      },
      {
        type: 'doc',
        label: '2.4. Данные',
        id: 'tech-docs/kubernetes/requirements/data-storage-management',
      },
      {
        type: 'doc',
        label: '2.5. Квота',
        id: 'tech-docs/kubernetes/requirements/quota-resource-management',
      },
      {
        type: 'doc',
        label: '2.6. Ресурсы',
        id: 'tech-docs/kubernetes/requirements/compute-resource-management',
      },
      {
        type: 'doc',
        label: '2.7. Портал',
        id: 'tech-docs/kubernetes/requirements/portal',
      },
      {
        type: 'doc',
        label: '2.8. Мониторинг',
        id: 'tech-docs/kubernetes/requirements/monitoring',
      },
      {
        type: 'doc',
        label: '2.9. Логирование',
        id: 'tech-docs/kubernetes/requirements/logging',
      },
      {
        type: 'doc',
        label: '2.10. Безопасность',
        id: 'tech-docs/kubernetes/requirements/security',
      },
      {
        type: 'doc',
        label: '2.11. Интеграции',
        id: 'tech-docs/kubernetes/requirements/integrations',
      },
    ]
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
    label: '5. Настройка',
    collapsed: false,
    items: [
      {
        type: 'category',
        label: '5.1. Kubernetes',
        collapsed: false,
        items: [
          {
            type: 'category',
            label: '5.1.1. Окружение',
            collapsed: true,
            items: [
              {
                type: 'doc',
                label: '5.1.1.1. Настройка ОС',
                id: 'tech-docs/kubernetes/setupEnvironments/os-setup',
              },
              {
                type: 'category',
                label: '5.1.1.2. Установка ПО',
                collapsed: true,
                link: {
                  type: 'doc',
                  id: 'tech-docs/kubernetes/components/download'
                },
                items: [
                  {
                    type: 'doc',
                    label: '5.1.1.2.1. Containerd',
                    id: 'tech-docs/kubernetes/components/containerd/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.2. Runc',
                    id: 'tech-docs/kubernetes/components/runc/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.3. Crictl',
                    id: 'tech-docs/kubernetes/components/crictl/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.4. Kubectl',
                    id: 'tech-docs/kubernetes/components/kubectl/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.5. Kubeadm',
                    id: 'tech-docs/kubernetes/components/kubeadm/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.6. Kubelet',
                    id: 'tech-docs/kubernetes/components/kubelet/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.7. Etcd',
                    id: 'tech-docs/etcd/components/etcd/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.8. Etcdctl',
                    id: 'tech-docs/etcd/components/etcdctl/lifecycle',
                  },
                  {
                    type: 'doc',
                    label: '5.1.1.2.9. Etcdutl',
                    id: 'tech-docs/etcd/components/etcdutl/lifecycle',
                  },
                ]
              },
              {
                type: 'doc',
                label: '5.1.1.3. Проверка',
                id: 'tech-docs/kubernetes/components/components-ready',
              },
            ]
          },
          {
            type: 'category',
            label: '5.1.2. Kubeadm',
            collapsed: true,
            items: [
              {
                type: 'doc',
                label: '5.1.2.1. Фазы',
                id: 'tech-docs/kubernetes/components/kubeadm/phases/phases',
              },
              {
                type: 'doc',
                label: '5.1.2.2. Настройка',
                id: 'tech-docs/kubernetes/components/kubeadm/configs/init',
              },
              {
                type: 'doc',
                label: '5.1.2.3. Пост обработка',
                id: 'tech-docs/kubernetes-thw/step-by-step-kubeadm-aditional',
              },
            ],
          },
          {
            type: 'category',
            label: '5.1.3. Аутентификация',
            collapsed: true,
            items: [
              {
                type: 'doc',
                label: '5.1.3.1. ЦА',
                id: 'tech-docs/kubernetes/certificates/all-center-authority',
              },
              {
                type: 'doc',
                label: '5.1.3.2. Сертификаты',
                id: 'tech-docs/kubernetes/certificates/all-certificates',
              },
              {
                type: 'doc',
                label: '5.1.3.3. Проверка',
                id: 'tech-docs/kubernetes/certificates/examination',
              },
            ],
          },
          {
            type: 'doc',
            label: '5.1.4. Настройка УК',
            id: 'tech-docs/kubernetes-thw/step-by-step-static-pods',
          },
          {
            type: 'doc',
            label: '5.1.5. Запуск УК',
            id: 'tech-docs/kubernetes-thw/k8s-start',
          },
          {
            type: 'category',
            label: '5.1.6. Сеть',
            collapsed: true,
            items: [
              {
                type: 'category',
                label: '5.1.6.1. Сервисная',
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    label: '5.1.6.1.1. Концепт',
                    id: 'tech-docs/kubernetes-network/base-load-balancer-principal',
                  },
                  // {
                  //   type: 'doc',
                  //   label: 'LoadBalancer Citrix',
                  //   id: 'tech-docs/kubernetes-network/base-load-balancer-citrix',
                  // },
                  {
                    type: 'doc',
                    label: '5.1.6.1.2. Metallb',
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
                label: '5.1.6.2. Подовая',
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    label: '5.1.6.2.1. Концепт',
                    id: 'tech-docs/kubernetes-network/base-pod-principal',
                  },
                  {
                    type: 'doc',
                    label: '5.1.6.2.2. CNI Cilium',
                    id: 'tech-docs/kubernetes-network/base-pod-cni-cilium',
                  },
                ],
              },
              {
                type: 'doc',
                label: '5.1.6.3. NAG',
                id: 'tech-docs/kubernetes-network/base-network-access-group-principal',
              },
            ],
          },

          {
            type: 'doc',
            label: '5.1.6. Диагностика',
            id: 'tech-docs/kubernetes-thw/k8s-troubleshooting',
          },
        ]
      },
      {
        type: 'category',
        label: '5.2. Etcd',
        collapsed: false,
        items: [
          {
            type: 'doc',
            label: '5.2.1. Окружение',
            id: 'tech-docs/etcd/etcd-environments',
          },
          {
            type: 'category',
            label: '5.2.2. Аутентификация',
            collapsed: true,
            items: [
              {
                type: 'doc',
                label: '5.2.2.1. ЦА',
                id: 'tech-docs/etcd/certificates/all-center-authority',
              },
              {
                type: 'doc',
                label: '5.2.2.2. Сертификаты',
                id: 'tech-docs/etcd/certificates/all-certificates',
              },
            ],
          },
          {
            type: 'doc',
            label: '5.2.3. Настройка',
            id: 'tech-docs/etcd/etcd-get-started',
          },
          {
            type: 'doc',
            label: '5.2.4. Тюнинг',
            id: 'tech-docs/etcd/etcd-tuning',
          },
          {
            type: 'doc',
            label: '5.2.5. Диагностика',
            id: 'tech-docs/etcd/etcd-main',
          },
  
        ]
      },
      {
        type: 'category',
        label: '5.3. B-Cloud',
        collapsed: false,
        items: [
          {
            type: 'category',
            label: '5.3.1. Контроллеры',
            collapsed: true,
            items: [
              {
                type: 'category',
                label: '5.3.1.1. Project',
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    label: '5.3.1.1.1. Ресурс',
                    id: 'tech-docs/b-cloud/project/resource',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.1.2. Контроллер',
                    id: 'tech-docs/b-cloud/project/resource-controller',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.1.3. Установка',
                    id: 'tech-docs/b-cloud/project/install',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.1.4. Диагностика',
                    id: 'tech-docs/b-cloud/project/troubleshooting',
                  },
                ],
              },
              {
                type: 'category',
                label: '5.3.1.2. Instance',
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    label: '5.3.1.2.1. Ресурс',
                    id: 'tech-docs/b-cloud/instance/resource',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.2.2. Контроллер',
                    id: 'tech-docs/b-cloud/instance/resource-controller',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.2.3. Установка',
                    id: 'tech-docs/b-cloud/instance/install',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.2.4. Диагностика',
                    id: 'tech-docs/b-cloud/instance/troubleshooting',
                  },
                ],
              },
              {
                type: 'category',
                label: '5.3.1.3. ProjectQuota',
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    label: '5.3.1.3.1. Ресурс',
                    id: 'tech-docs/b-cloud/project-quota/resource',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.3.2. Контроллер',
                    id: 'tech-docs/b-cloud/project-quota/resource-controller',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.3.3. Установка',
                    id: 'tech-docs/b-cloud/project-quota/install',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.3.4. Диагностика',
                    id: 'tech-docs/b-cloud/project-quota/troubleshooting',
                  },
                ],
              },
              {
                type: 'category',
                label: '5.3.1.4. ProjectLegacy',
                collapsed: true,
                items: [
                  {
                    type: 'doc',
                    label: '5.3.1.4.1. Ресурс',
                    id: 'tech-docs/b-cloud/project-legacy/resource',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.4.2. Контроллер',
                    id: 'tech-docs/b-cloud/project-legacy/resource-controller',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.4.3. Установка',
                    id: 'tech-docs/b-cloud/project-legacy/install',
                  },
                  {
                    type: 'doc',
                    label: '5.3.1.4.4. Диагностика',
                    id: 'tech-docs/b-cloud/project-legacy/troubleshooting',
                  },
                ],
              },
            ],
          },
        ]
      }
    ]
  },

]
