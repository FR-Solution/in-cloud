import React, { FC, useState } from 'react'
import { Flex, Input, Alert } from 'antd'
import CodeBlock from '@theme/CodeBlock'
import dedent from 'dedent'

import { CERTIFICATES }         from '@site/src/constants/kubernetes/certs'
import { PORTS }                from '@site/src/constants/kubernetes/ports'
import { CUSTOM_VALUE }         from '@site/src/constants/kubernetes/customValue'
import TabItem                  from '@theme/TabItem'
import Tabs                     from '@theme/Tabs'
import { ETCD_ARGS }            from '@site/src/constants/kubernetes/etcdArgs'
import { CodeAndInputExportPods } from '@site/src/components/commonBlocks'

export const Master: FC = () => {
  const [nodeName1, setNodeName1] = useState<string>("etcd-main-1")
  const [nodeName2, setNodeName2] = useState<string>("etcd-main-2")
  const [nodeName3, setNodeName3] = useState<string>("etcd-main-3")
  const [nodeAddress1, setNodeAddress1] = useState<string>("10.10.10.3")
  const [nodeAddress2, setNodeAddress2] = useState<string>("10.10.10.4")
  const [nodeAddress3, setNodeAddress3] = useState<string>("10.10.10.5")
  const [k8sNodeAddress1, setK8sNodeAddress1] = useState<string>("10.10.10.3")
  const [k8sNodeAddress2, setK8sNodeAddress2] = useState<string>("10.10.10.4")
  const [k8sNodeAddress3, setK8sNodeAddress3] = useState<string>("10.10.10.5")
  const [clientPort, setClientPort] = useState<string>("2379")
  const [peerPort, setPeerPort] = useState<string>("2380")
  const [nodeUser, setNodeUser] = useState<string>("admin")

  return (
    <Flex vertical gap="small">
      Для начала задайте переменные:
      <Input placeholder="nodeName1" value={nodeName1} onChange={e => setNodeName1(e.target.value)} />
      <Input placeholder="nodeName2" value={nodeName2} onChange={e => setNodeName2(e.target.value)} />
      <Input placeholder="nodeName3" value={nodeName3} onChange={e => setNodeName3(e.target.value)} />
      <Input placeholder="nodeAddress1" value={nodeAddress1} onChange={e => setNodeAddress1(e.target.value)} />
      <Input placeholder="nodeAddress2" value={nodeAddress2} onChange={e => setNodeAddress2(e.target.value)} />
      <Input placeholder="nodeAddress3" value={nodeAddress3} onChange={e => setNodeAddress3(e.target.value)} />
      <Input placeholder="k8sNodeAddress1" value={k8sNodeAddress1} onChange={e => setK8sNodeAddress1(e.target.value)} />
      <Input placeholder="k8sNodeAddress2" value={k8sNodeAddress2} onChange={e => setK8sNodeAddress2(e.target.value)} />
      <Input placeholder="k8sNodeAddress3" value={k8sNodeAddress3} onChange={e => setK8sNodeAddress3(e.target.value)} />
      <Input placeholder="clientPort" value={clientPort} onChange={e => setClientPort(e.target.value)} />
      <Input placeholder="peerPort" value={peerPort} onChange={e => setPeerPort(e.target.value)} />
      <Input placeholder="nodeUser" value={nodeUser} onChange={e => setNodeUser(e.target.value)} />

      <CodeBlock language="bash">
        {dedent`
          export ETCD_NODE_NAME_1=${nodeName1}
          export ETCD_NODE_NAME_2=${nodeName2}
          export ETCD_NODE_NAME_3=${nodeName3}
          export ETCD_NODE_ADDRESS=${nodeAddress1}
          export ETCD_NODE_ADDRESS=${nodeAddress2}
          export ETCD_NODE_ADDRESS=${nodeAddress3}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress1}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress2}
          export K8S_NODE_ADDRESS_1=${k8sNodeAddress3}
          export ETCD_CLIENT_PORT=${clientPort}
          export ETCD_PEER_PORT=${peerPort}
          export K8S_NODE_USERNAME=${nodeUser}
          `}
      </CodeBlock>

      <Alert
        message="Warning"
        description="Если адрес первого узла указан в конфигурации других все еще работающих узлов, они упадут с ошибкой, пока не будут подключены к новому кластеру."
        type="warning"
        showIcon
      />

      <Tabs groupId="etcd-node">
        <TabItem value='Master-1'>
          1. Загрузите файл мгновенного снимка на ВМ первого узла кластера по пути <code>{ETCD_ARGS.workDir.value}/backup.db</code> при помощи rsync

          <CodeBlock language="bash">
            {dedent`
              ssh \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1} "mkdir -p ${ETCD_ARGS.workDir.value}"
              rsync --rsync-path="sudo rsync" \
              ${ETCD_ARGS.workDir.value}/backup.db \
                \${K8S_NODE_USERNAME}@$\{K8S_NODE_ADDRESS_1}:${ETCD_ARGS.workDir.value}/backup.db
            `}
          </CodeBlock>

          2. Подключитесь к ВМ первого узла кластера по ssh и переключитесь на суперпользователя.
          Затем остановите `kubelet`, чтобы не позволить ему запускать ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Остановите и удалите контейнер `etcd`:

          Выведите список запущенных контейнеров содержащих etcd в названии пода, контейнера, или неймспейса

          <CodeBlock language="bash">
            {dedent`
              crictl ps -o json |
              jq -r \
                '(["PODNAME","PODNAMESPACE","CONTAINERNAME","CONTAINERID"] | (., map(length*"-"))), (.containers[] | [.labels."io.kubernetes.pod.name", .labels."io.kubernetes.pod.namespace", .metadata.name, .id ])| @tsv' |
              grep -e "etcd" -e "PODNAME" -e "---"  |
              column -t
            `}
          </CodeBlock>

          Используя вывод предыдущей команды задайте неймспейс и имя пода, который нужно удалить:

          <CodeAndInputExportPods />

          Выполните команду:

          <CodeBlock language="bash">
            {dedent`
              crictl stop $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
              crictl rm $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
            `}
          </CodeBlock>

          4. Создайте [резервную копию](#создание-резервной-копии-файлов-бд).

          5. Удалите старые файлы из директории <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.dataDir.value}/*`}</CodeBlock>

          6. Подготовьте БД из снимка:
          <CodeBlock language="bash">
            {dedent`
              etcdctl snapshot restore ${ETCD_ARGS.workDir.value}/backup.db \
                --name=\${ETCD_NODE_NAME_1} \
                --data-dir ${ETCD_ARGS.dataDir.value} \
                --initial-advertise-peer-urls=https://\${K8S_NODE_ADDRESS_1}:\${ETCD_PEER_PORT} \
                --initial-cluster=\${ETCD_NODE_NAME_1}=https://\${K8S_NODE_ADDRESS_1}:\${ETCD_PEER_PORT}
            `}
          </CodeBlock>

          :::note
          Обратите внимание, что запускается локальный файл `etcdctl` и снимок так же расположен на мастере в директории <code>{ETCD_ARGS.workDir.value}</code>.
          В качестве `data-dir` указана директория, которая монтируется внутрь контейнера ETCD и будет использоваться в качестве хранения файлов БД.
          :::

          7. Проверьте и по необходимости отредактируйте параметры запуска ETCD в файле <code>${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests/etcd.yaml</code>
          указанные в разделе `spec.containers[0].command`.
          А именно проверьте наличие необходимых полей и их значения, поля не входящие в данный перечень удалять не нужно!

          <CodeBlock language="bash">
            {dedent`
              --advertise-client-urls=https://${nodeAddress1}:${clientPort}
              --cert-file=${CERTIFICATES.etcdServer.crtPath}
              --client-cert-auth=true
              --data-dir=${ETCD_ARGS.dataDir.value}
              --key-file=${CERTIFICATES.etcdServer.keyPath}
              --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${nodeAddress1}:${clientPort}
              --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
              --listen-peer-urls=https://${nodeAddress1}:${PORTS.etcdPeer.portNumber}
              --name=${nodeName1}
              --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
              --peer-client-cert-auth=true
              --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
              --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
              --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
            `}
          </CodeBlock>

          <table>
            <tr><th>Параметр</th><th>Описание</th></tr>
            <tr><td>`advertise-client-urls` </td><td>Анонсируемые точки подключения к узлу, для подключения клиентов. Совпадает с IP адресом узла k8s кластера</td></tr>
            <tr><td>`cert-file`             </td><td>Путь до сертификата ETCD кластера</td></tr>
            <tr><td>`client-cert-auth`      </td><td>Включить/выключить авторизацию пользователей по сертификату</td></tr>
            <tr><td>`data-dir`              </td><td>Директория в которой хранятся файлы БД ETCD</td></tr>
            <tr><td>`key-file`              </td><td>Путь до ключа сертификата ETCD кластера</td></tr>
            <tr><td>`listen-client-urls`    </td><td>Точка подключения, на которой ETCD будет принимать клиентские запросы (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-metrics-urls`   </td><td>Точка подключения, на которой ETCD будет принимать запросы к метрикам (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-peer-urls`      </td><td>Точка подключения, на которой ETCD будет принимать запросы от других узлов ETCD кластера (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`name`                  </td><td>Имя узла ETCD кластера</td></tr>
            <tr><td>`peer-cert-file`        </td><td>Путь до сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-client-cert-auth` </td><td>Путь до сертификата для авторизации подключений между узлами ETCD кластера</td></tr>
            <tr><td>`peer-key-file`         </td><td>Путь до ключа сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-trusted-ca-file`  </td><td>Путь до корневого доверенного сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`trusted-ca-file`       </td><td>Путь до корневого доверенного сертификата ETCD кластера</td></tr>
          </table>

          <Alert
            message="Warning"
            description="Если параметр `initial-cluster-state` равен значению `existing` или отсутствуют файлы БД и метаданных в ней, тогда все прочие параметры, имя которых начинается со слова `initial` будут игнорироваться. В нашем случае, мы уже восстановили файлы БД и внесли метаданные на этапе подготовки БД из снимка."
            type="warning"
            showIcon
          />

          8. Запустите kubelet:

          <CodeBlock language="bash">
            {dedent`
              systemctl start kubelet
            `}
          </CodeBlock>

          9. Проверьте состояние и логи контейнера

          Выведите список запущенных контейнеров содержащих etcd в названии пода, контейнера, или неймспейса

          <CodeBlock language="bash">
            {dedent`
              crictl ps -o json |
              jq -r \
                '(["PODNAME","PODNAMESPACE","CONTAINERNAME","CONTAINERID"] | (., map(length*"-"))), (.containers[] | [.labels."io.kubernetes.pod.name", .labels."io.kubernetes.pod.namespace", .metadata.name, .id ])| @tsv' |
              grep -e "etcd" -e "PODNAME" -e "---"  |
              column -t
            `}
          </CodeBlock>

          Используя вывод предыдущей команды задайте неймспейс и имя пода, который нужно просмотреть:

          <CodeAndInputExportPods />

          <CodeBlock language="bash">
            {dedent`
              crictl ps $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
              crictl logs $(cidsearch \${SEARCH_POD_NAME} \${SEARCH_NAMESPACE})
            `}
          </CodeBlock>

          11. При помощи команд `etcdctl member list` и `etcdctl endpoint status --cluster` проверьте состояние кластера.

          12. переходите к настройке второго узла.

        </TabItem>
        <TabItem value='Master-2'>

          1. На первом узле ETCD кластера добавьте второй узел кластера в режиме обучающегося:

          <CodeBlock language="bash">{`etcdctl member add \${ETCD_NODE_NAME_2} --peer-urls=https://\${K8S_NODE_ADDRESS_2}:${peerPort} --learner ;`}</CodeBlock>

          2. Подключитесь к ВМ  второго узла кластера по ssh и остановите `kubelet`, чтобы не позволить ему запускать ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Остановите и удалите контейнер `etcd`:

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"
              crictl stop \${CONTAINER_ID}
              crictl rm \${CONTAINER_ID}
            `}
          </CodeBlock>

          4. Создайте [резервную копию](#создание-резервной-копии-файлов-бд).

          5. Удалите старые файлы из директории <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.workDir.value}/*`}</CodeBlock>

          6. Откройте на редактирование файл <code>${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests/etcd.yaml</code>:
          Найдите и замените значение следующих ключей в разделе `spec.containers[0].command` аналогично примеру ниже
          в соответствии с вашими параметрамии таблицей с описанием:

          <CodeBlock language="bash">
            {dedent`
              --advertise-client-urls=https://${nodeAddress2}:${clientPort}
              --cert-file=${CERTIFICATES.etcdServer.crtPath}
              --client-cert-auth=true
              --data-dir=${ETCD_ARGS.dataDir.value}
              --initial-advertise-peer-urls=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber}
              --initial-cluster=${nodeName1}=https://${nodeAddress1}:${PORTS.etcdPeer.portNumber},${nodeName2}=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber}
              --key-file=${CERTIFICATES.etcdServer.keyPath}
              --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${nodeAddress2}:${clientPort}
              --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
              --listen-peer-urls=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber}
              --name=${nodeName2}
              --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
              --peer-client-cert-auth=true
              --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
              --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
              --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
            `}
          </CodeBlock>

          <table>
            <tr><th>Параметр</th><th>Описание</th></tr>
            <tr><td>`advertise-client-urls`       </td><td>Анонсируемые точки подключения к узлу, для подключения клиентов. Совпадает с IP адресом узла k8s кластера</td></tr>
            <tr><td>`cert-file`                   </td><td>Путь до сертификата ETCD кластера</td></tr>
            <tr><td>`client-cert-auth`            </td><td>Включить/выключить авторизацию пользователей по сертификату</td></tr>
            <tr><td>`data-dir`                    </td><td>Директория в которой хранятся файлы БД ETCD</td></tr>
            <tr><td>`key-file`                    </td><td>Путь до ключа сертификата ETCD кластера</td></tr>
            <tr><td>`initial-advertise-peer-urls` </td><td>Анонсируемые точки подключения к данному узлу для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`initial-cluster`             </td><td>Перечень узлов кластера ETCD и их точки подключения для взаимодействия между узлами ETCD кластера, которые будут добавлены в метаданные БД при запуске текущего узла.</td></tr>
            <tr><td>`listen-client-urls`          </td><td>Точка подключения, на которой ETCD будет принимать клиентские запросы (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-metrics-urls`         </td><td>Точка подключения, на которой ETCD будет принимать запросы к метрикам (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-peer-urls`            </td><td>Точка подключения, на которой ETCD будет принимать запросы от других узлов ETCD кластера (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`name`                        </td><td>Имя узла ETCD кластера</td></tr>
            <tr><td>`peer-cert-file`              </td><td>Путь до сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-client-cert-auth`       </td><td>Путь до сертификата для авторизации подключений между узлами ETCD кластера</td></tr>
            <tr><td>`peer-key-file`               </td><td>Путь до ключа сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-trusted-ca-file`        </td><td>Путь до корневого доверенного сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`trusted-ca-file`             </td><td>Путь до корневого доверенного сертификата ETCD кластера</td></tr>
          </table>

          7. Запустите kubelet:

          <CodeBlock language="bash">{`systemctl start kubelet`}</CodeBlock>

          8. Проверьте состояние контейнера и наличие ошибок

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"

              crictl ps --id $CONTAINER_ID

              crictl logs $CONTAINER_ID
            `}
          </CodeBlock>

          9. Вернитесь к первому узлу кластера и проверьте, что второй узел определился (Его состояние должно быть `started`):

          <CodeBlock language="bash">{`ectl member list -w table`}</CodeBlock>

          10. После этого переведите второй узел в рабочий режим:

          <CodeBlock language="bash">{`ectl member promote \${ETCD_NODE_NAME_2}`}</CodeBlock>

          11. При помощи команд `member list` и `endpoint status` описанных выше [проверьте состояние кластера](#проверка-подключения-и-состояния-кластера).

          12. Переходите к третьему узла кластера
        </TabItem>
        <TabItem value='Master-3'>

          1. Подключитесь к первому узлу ETCD кластера и добавьте третий узел кластера в режиме обучающегося:

          <CodeBlock language="bash">{`etcdctl member add \${ETCD_NODE_NAME_3} --peer-urls=https://\${K8S_NODE_ADDRESS_3}:${peerPort} --learner ;`}</CodeBlock>

          2. Подключитесь к ВМ  третьего узла кластера по ssh и остановите `kubelet`, чтобы не позволить ему запускать ETCD.

          <CodeBlock language="bash">{`systemctl stop kubelet`}</CodeBlock>

          3. Остановите и удалите контейнер `etcd`:

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"
              crictl stop \${CONTAINER_ID}
              crictl rm \${CONTAINER_ID}
            `}
          </CodeBlock>

          4. Создайте [резервную копию](#создание-резервной-копии-файлов-бд).

          5. Удалите старые файлы из директории <code>{ETCD_ARGS.dataDir.value}</code>

          <CodeBlock language="bash">{`rm -rf ${ETCD_ARGS.workDir.value}/*`}</CodeBlock>

          6. Откройте на редактирование файл <code>${CUSTOM_VALUE.kuberneteBaseFolderPath.value}/manifests/etcd.yaml</code>:
          Найдите и замените значение следующих ключей в разделе `spec.containers[0].command` аналогично примеру ниже
          в соответствии с вашими параметрамии таблицей с описанием:

          <CodeBlock language="bash">
            {dedent`
              --advertise-client-urls=https://${nodeAddress3}:${clientPort}
              --cert-file=${CERTIFICATES.etcdServer.crtPath}
              --client-cert-auth=true
              --data-dir=${ETCD_ARGS.dataDir.value}
              --initial-advertise-peer-urls=https://${nodeAddress3}:${PORTS.etcdPeer.portNumber}
              --initial-cluster=${nodeName1}=https://${nodeAddress1}:${PORTS.etcdPeer.portNumber},${nodeName2}=https://${nodeAddress2}:${PORTS.etcdPeer.portNumber},${nodeName3}=https://${nodeAddress3}:${PORTS.etcdPeer.portNumber}
              --key-file=${CERTIFICATES.etcdServer.keyPath}
              --listen-client-urls=https://127.0.0.1:${PORTS.etcdServer.portNumber},https://${nodeAddress3}:${clientPort}
              --listen-metrics-urls=http://0.0.0.0:${PORTS.etcdMetricServer.portNumber}
              --listen-peer-urls=https://${nodeAddress3}:${PORTS.etcdPeer.portNumber}
              --name=${nodeName3}
              --peer-cert-file=${CERTIFICATES.etcdPeer.crtPath}
              --peer-client-cert-auth=true
              --peer-key-file=${CERTIFICATES.etcdPeer.keyPath}
              --peer-trusted-ca-file=${CERTIFICATES.etcdCA.crtPath}
              --trusted-ca-file=${CERTIFICATES.etcdCA.keyPath}
            `}
          </CodeBlock>

          <table>
            <tr><th>Параметр</th><th>Описание</th></tr>
            <tr><td>`advertise-client-urls`       </td><td>Анонсируемые точки подключения к узлу, для подключения клиентов. Совпадает с IP адресом узла k8s кластера</td></tr>
            <tr><td>`cert-file`                   </td><td>Путь до сертификата ETCD кластера</td></tr>
            <tr><td>`client-cert-auth`            </td><td>Включить/выключить авторизацию пользователей по сертификату</td></tr>
            <tr><td>`data-dir`                    </td><td>Директория в которой хранятся файлы БД ETCD</td></tr>
            <tr><td>`key-file`                    </td><td>Путь до ключа сертификата ETCD кластера</td></tr>
            <tr><td>`initial-advertise-peer-urls` </td><td>Анонсируемые точки подключения к данному узлу для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`initial-cluster`             </td><td>Перечень узлов кластера ETCD и их точки подключения для взаимодействия между узлами ETCD кластера, которые будут добавлены в метаданные БД при запуске текущего узла.</td></tr>
            <tr><td>`listen-client-urls`          </td><td>Точка подключения, на которой ETCD будет принимать клиентские запросы (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-metrics-urls`         </td><td>Точка подключения, на которой ETCD будет принимать запросы к метрикам (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`listen-peer-urls`            </td><td>Точка подключения, на которой ETCD будет принимать запросы от других узлов ETCD кластера (`0.0.0.0`, `127.0.0.1` или IP адрес узла k8s кластера)</td></tr>
            <tr><td>`name`                        </td><td>Имя узла ETCD кластера</td></tr>
            <tr><td>`peer-cert-file`              </td><td>Путь до сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-client-cert-auth`       </td><td>Путь до сертификата для авторизации подключений между узлами ETCD кластера</td></tr>
            <tr><td>`peer-key-file`               </td><td>Путь до ключа сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`peer-trusted-ca-file`        </td><td>Путь до корневого доверенного сертификата для подключения между узлами ETCD кластера</td></tr>
            <tr><td>`trusted-ca-file`             </td><td>Путь до корневого доверенного сертификата ETCD кластера</td></tr>
          </table>


          7. Запустите kubelet:

          <CodeBlock language="bash">{`systemctl start kubelet`}</CodeBlock>

          8. Проверьте состояние контейнера и наличие ошибок

          <CodeBlock language="bash">
            {dedent`
              export CONTAINER_ID="$(crictl ps -a  \
                --label io.kubernetes.container.name=etcd \
                --label io.kubernetes.pod.namespace=kube-system \
                | awk 'NR>1{r=$1} $0~/Running/{exit} END{print r}')"

              crictl ps --id $CONTAINER_ID

              crictl logs $CONTAINER_ID
            `}
          </CodeBlock>

          9. Вернитесь к первому узлу кластера и проверьте, что третий узел определился (Его состояние должно быть `started`):

          <CodeBlock language="bash">{`ectl member list -w table`}</CodeBlock>

          10. После этого переведите третий узел в рабочий режим:

          <CodeBlock language="bash">{`ectl member promote \${ETCD_NODE_NAME_3}`}</CodeBlock>

          11. При помощи команд `member list` и `endpoint status` описанных выше [проверьте состояние кластера](#проверка-подключения-и-состояния-кластера).

        </TabItem>
      </Tabs>

      После выполнения работ на всех трех узлах ETCD кластера, кластер восстановлен и готов к работе.

    </Flex>
  )
}
