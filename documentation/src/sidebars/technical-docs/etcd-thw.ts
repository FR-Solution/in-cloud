export const ETCDTHW = [
  {
    type: 'doc',
    label: 'Введение',
    id: 'tech-docs/etcd/etcd-about',
  },
  {
    type: 'doc',
    label: 'Компоненты',
    id: 'tech-docs/etcd/etcd-components',
  },
  {
    type: 'doc',
    label: 'Архитектура',
    id: 'tech-docs/etcd/etcd-architecture',
  },
  {
    type: 'category',
    label: 'Как начать',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: 'Пререквизиты',
        id: 'tech-docs/etcd/etcd-environments',
      },
      {
        type: 'category',
        label: 'Аутентификация',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: 'ЦА',
            id: 'tech-docs/etcd/certificates/all-center-authority',
          },
          {
            type: 'doc',
            label: 'Сертификаты',
            id: 'tech-docs/etcd/certificates/all-certificates',
          },
        ],
      },
      {
        type: 'doc',
        label: 'Установка',
        id: 'tech-docs/etcd/etcd-get-started',
      },
      {
        type: 'doc',
        label: 'Тюнинг',
        id: 'tech-docs/etcd/etcd-tuning',
      },
      {
        type: 'doc',
        label: 'Диагностика',
        id: 'tech-docs/etcd/etcd-main',
      },
    ],
  },
]
