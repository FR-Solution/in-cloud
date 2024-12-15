/* eslint-disable import/no-default-export */
import { kubernetesTHW } from './src/sidebars/technical-docs/kubernetes-thw'
import { ETCDTHW } from './src/sidebars/technical-docs/etcd-thw'
import { kubernetesNetworks } from './src/sidebars/technical-docs/kubernetes-networks'
import { bcloudControllers } from './src/sidebars/technical-docs/b-cloud-controllers'

const sidebars = {
  techDocs: [
    {
      type: 'category',
      label: 'Kubernetes-The-Hard-Way',
      collapsed: false,
      items: kubernetesTHW,
    },
    {
      type: 'category',
      label: 'ETCD',
      collapsed: false,
      items: ETCDTHW,
    },
    {
      type: 'category',
      label: 'Сеть',
      collapsed: false,
      items: kubernetesNetworks,
    },
    {
      type: 'category',
      label: 'Контроллеры',
      collapsed: false,
      items: bcloudControllers,
    },
  ],
}

export default sidebars
