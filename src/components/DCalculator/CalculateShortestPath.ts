/**
 * @Class calculateShortestPath
 * @description purpose of this function is to calculate the shortest path
 * @author Nawod Madhuvantha
 */

import { Nodes } from '@/shared/constants/nodes'
import type { NodeItem, ShortestPathData } from '@/shared/models/nodes'

/**
 * retrieve node data item
 * @param value
 */
const getNodeDataItem = (value: string): NodeItem | undefined => {
  return Nodes.list.find(item => item.node === value)
}

/**
 * calculate the shortest path between two node
 * using Dijktra’s algorithm
 */
export const calculateShortestPath = (
  fromNode: string,
  toNode: string,
): ShortestPathData | undefined => {
  const distances: { [key: string]: number } = {}
  const parentNodes: { [key: string]: string | null } = {}
  const restNodes: string[] = []

  //set initial values
  Nodes.list.forEach(node => {
    distances[node.node] = Infinity
    parentNodes[node.node] = null
    restNodes.push(node.node)
  })

  distances[fromNode] = 0

  while (restNodes.length > 0) {
    //get the node with min value from the rest of nodes
    const currentNode = restNodes.reduce((prevNode, node) =>
      distances[node] < distances[prevNode] ? node : prevNode,
    )

    //check whether found the end node
    if (currentNode === toNode) break

    const currentNodeIndex = restNodes.indexOf(currentNode)
    if (currentNodeIndex !== -1) {
      restNodes.splice(currentNodeIndex, 1)
    }

    const currentNodeItem = getNodeDataItem(currentNode)

    if (currentNodeItem) {
      currentNodeItem.connectedNodes.forEach(connectedNode => {
        const currentDistance = distances[currentNode] + connectedNode.distance

        if (currentDistance < distances[connectedNode.node]) {
          distances[connectedNode.node] = currentDistance
          parentNodes[connectedNode.node] = currentNode
        }
      })
    }
  }

  //revise the path
  const path: string[] = []
  let currentNode: string | null = toNode

  while (currentNode) {
    path.unshift(currentNode)
    currentNode = parentNodes[currentNode]
  }
  return { nodeNames: path, distance: distances[toNode] }
}
