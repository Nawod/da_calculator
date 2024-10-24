<script setup lang="ts">
/**
 * @Component DCalculator
 * @description purpose of this component is to render main calculator wrapper
 * @author Nawod Madhuvantha
 */

import { useCalculatorStore } from '@/stores/calculatorSlice'
import DropdownInput from './DropdownInput.vue'
import DynamicButton from './DynamicButton.vue'
import person from '@/assets/img/person.png'
import calIcon from '@/assets/icons/calculator.png'
import { ref } from 'vue'
import type { NodeItem } from '@/shared/models/nodes'
import { Nodes } from '@/shared/constants/nodes'
import ResultView from './ResultView.vue'

const calculatorStates = useCalculatorStore()
const inputError = ref(false)

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
const calculateShortestPath = () => {
  const fromNode = calculatorStates.fromNode
  const toNode = calculatorStates.toNode
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

  calculatorStates.setPathData({ nodeNames: path, distance: distances[toNode] })
  inputError.value = false
  console.log(
    'mames',
    path,
    'distance',
    distances[toNode],
    distances,
    'parent',
    parentNodes,
    'unvisted',
    restNodes,
  )
}

/**
 * calculate button click action
 */
const calculateButtonAction = () => {
  if (!calculatorStates.fromNode || !calculatorStates.toNode) {
    inputError.value = true
  } else {
    calculateShortestPath()
  }
}

/**
 * clear the dropdown inputs
 */
const clearButtonAction = () => {
  calculatorStates.clearNodes()
  inputError.value = false
}
</script>

<template>
  <div
    class="flex w-[721px] bg-white rounded-lg shadow-[0_8px_22px_2px_#0000001F]"
  >
    <div class="w-1/2 p-8 pr-6">
      <p class="text-txt-blue text-xl font-semibold mb-6 text-nowrap">
        Select Path
      </p>
      <div class="mt-6 mb-6 flex flex-col gap-6">
        <DropdownInput
          title="From Node"
          :selectedValue="calculatorStates.fromNode"
          :onOptionSelect="calculatorStates.setFromNode"
          :error="inputError"
        />
        <DropdownInput
          title="To Node"
          :selectedValue="calculatorStates.toNode"
          :onOptionSelect="calculatorStates.setToNode"
          :error="inputError"
        />
      </div>
      <div class="flex gap-3">
        <DynamicButton title="Clear" :onClick="clearButtonAction" />
        <DynamicButton
          :icon="calIcon"
          title="Calculate"
          :onClick="calculateButtonAction"
        />
      </div>
    </div>
    <div
      :class="[
        'w-1/2',
        calculatorStates.pathData
          ? 'bg-bg-gray'
          : 'flex items-center justify-center',
      ]"
    >
      <ResultView v-if="calculatorStates.pathData" />
      <img class="w-[185px]" :src="person" alt="person" v-else />
    </div>
  </div>
</template>
