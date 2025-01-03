export const etcd = [
  {
    type: 'category',
    label: '5.2.1. Окружение',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.2.1.1. Настройка ОС',
        id: 'tech-docs/etcd/setupEnvironments/os-setup',
      },
      {
        type: 'category',
        label: '5.1.1.2. Установка ПО',
        collapsed: true,
        items: [
          {
            type: 'doc',
            label: '5.1.1.2.1. Etcd',
            id: 'tech-docs/etcd/components/etcd/lifecycle',
          },
          {
            type: 'doc',
            label: '5.1.1.2.2. Etcdctl',
            id: 'tech-docs/etcd/components/etcdctl/lifecycle',
          },
          {
            type: 'doc',
            label: '5.1.1.2.3. Etcdutl',
            id: 'tech-docs/etcd/components/etcdutl/lifecycle',
          },
        ]
      },
      {
        type: 'doc',
        label: '5.1.1.3. Проверка',
        id: 'tech-docs/etcd/components/components-ready',
      },
    ]
  },
  {
    type: 'category',
    label: '5.1.2. Аутентификация',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.1.2.1. ЦА',
        id: 'tech-docs/etcd/certificates/all-center-authority',
      },
      {
        type: 'doc',
        label: '5.1.2.2. Сертификаты',
        id: 'tech-docs/etcd/certificates/all-certificates',
      },
    ],
  },
  {
    type: 'category',
    label: '5.1.3. Настройка',
    collapsed: true,
    items: [
      {
        type: 'doc',
        label: '5.1.3.1. Инициализация',
        id: 'tech-docs/kubernetes/components/etcd/etcd-init-static-pods',
      },
    ]
  },
  {
    type: 'doc',
    label: '5.1.4. Тюнинг',
    id: 'tech-docs/etcd/etcd-tuning',
  },
  {
    type: 'category',
    label: '5.1.5. Диагностика',
    collapsed: true,
    link: {
      type: 'doc',
      id: 'tech-docs/etcd/etcd-main',
    },
    items: [
      {
        type: 'doc',
        label: '5.1.5.1. Алиасы',
        id: 'tech-docs/etcd/trubleshooting/aliace',
      },
      {
        type: 'doc',
        label: '5.1.5.2. Команды',
        id: 'tech-docs/etcd/trubleshooting/commands',
      },
      {
        type: 'doc',
        label: '5.1.5.3. Дефрагментация',
        id: 'tech-docs/etcd/trubleshooting/defrag',
      },
      {
        type: 'doc',
        label: '5.1.5.3. Бекапы',
        id: 'tech-docs/etcd/trubleshooting/backups',
      },
      {
        type: 'doc',
        label: '5.1.5.4. Восстановление',
        id: 'tech-docs/etcd/trubleshooting/restore',
      },
    ]
  },
]
