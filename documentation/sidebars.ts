/* eslint-disable import/no-default-export */
import { kubernetesTHW } from './src/sidebars/technical-docs/kubernetes-thw'

const sidebars = {
  techDocs: [
    {
      type: 'category',
      label: 'Kubernetes-The-Hard-Way',
      collapsed: false,
      items: kubernetesTHW,
    },
  ],
}

export default sidebars
