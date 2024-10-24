/**
 * @Component useCalculatorStore
 * @description purpose of this store is to manage calculator store
 * @author Nawod Madhuvantha
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ShortestPathData } from '@/shared/models/nodes'

export const useCalculatorStore = defineStore('calculatorStore', () => {
  const fromNode = ref()
  const toNode = ref()
  const pathData = ref<ShortestPathData | undefined>(undefined)

  /**
   * set from node value
   * @param value
   */
  const setFromNode = (value: string) => {
    fromNode.value = value
  }

  /**
   * set to node value
   * @param value
   */
  const setToNode = (value: string) => {
    toNode.value = value
  }

  /**
   * clear both nodes value
   */
  const clearNodes = () => {
    toNode.value = undefined
    fromNode.value = undefined
    pathData.value = undefined
  }

  /**
   * set shortest path data
   * @param value
   */
  const setPathData = (value: ShortestPathData) => {
    pathData.value = value
  }

  return {
    fromNode,
    toNode,
    setFromNode,
    setToNode,
    clearNodes,
    pathData,
    setPathData,
  }
})
