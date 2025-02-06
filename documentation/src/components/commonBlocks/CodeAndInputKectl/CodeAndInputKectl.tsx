import React, { FC, useState } from 'react'
import { Flex, Input } from 'antd'
import CodeBlock from '@theme/CodeBlock'

export const CodeAndInputKectl: FC = () => {
  const [searchNamespace, setSearchNamespace] = useState()
  const [searchPodName, setSearchPodName] = useState()

  const code = `
kectlflagsearch() {
  ETCD_ARGS=$( \\
      kubectl get pod \\
      -n ${searchNamespace} \\
      ${searchPodName} \\
      -o yaml) ; \\
    echo -n \\
      '--cert='$(grep --\\
   '--peer-cert-file=' <<< $ETCD_ARGS |
        sed 's/[^=]*=//') \\
      '--key='$(grep --\\
   '--peer-key-file=' <<< $ETCD_ARGS |
        sed 's/[^=]*=//') \\
      '--cacert='$(grep --\\
   '--trusted-ca-file=' <<< $ETCD_ARGS |
        sed 's/[^=]*=//') \\
      '--endpoints='$(grep --\\
   '--advertise-client-urls=' <<< $ETCD_ARGS |
        sed 's/[^=]*=//' |
        sed 's/$(POD_NAME)/'${searchPodName}'/' |
        sed 's/$(POD_NAMESPACE)/'${searchNamespace}'/')
  }
        `

  return (
    <Flex vertical gap="small">
      <Input placeholder="namespace" value={searchNamespace} onChange={e => setSearchNamespace(e.target.value)} />
      <Input placeholder="pod" value={searchPodName} onChange={e => setSearchPodName(e.target.value)} />
      <CodeBlock>{code}</CodeBlock>
    </Flex>
  )
}
