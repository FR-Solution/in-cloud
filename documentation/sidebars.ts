/* eslint-disable import/no-default-export */
import { kubernetesTHW }      from './src/sidebars/technical-docs/kubernetes-thw'
import { kubernetesNetworks } from './src/sidebars/technical-docs/kubernetes-networks'
import { bcloudControllers }  from './src/sidebars/technical-docs/b-cloud-controllers'

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
  ]
}

export default sidebars
