<script setup lang="ts">
/**
 * @Component DCalculator
 * @description purpose of this component is to render main calculator wrapper
 * @author Nawod Madhuvantha
 */

import { useCalculatorStore } from '@/stores/calculatorSlice'
import DropdownInput from '../DropdownInput/DropdownInput.vue'
import DynamicButton from '../DynamicButton/DynamicButton.vue'
import person from '@/assets/img/person.png'
import calIcon from '@/assets/icons/calculator.png'
import { ref } from 'vue'
import ResultView from '../ResultView/ResultView.vue'
import { calculateShortestPath } from './CalculateShortestPath'

const calculatorStates = useCalculatorStore()
const inputError = ref(false)

/**
 * calculate button click action
 */
const calculateButtonAction = () => {
  if (!calculatorStates.fromNode || !calculatorStates.toNode) {
    inputError.value = true
  } else {
    const shortestPathData = calculateShortestPath(
      calculatorStates.fromNode,
      calculatorStates.toNode,
    )
    if (shortestPathData) {
      calculatorStates.setPathData(shortestPathData)
      console.log('update')
      inputError.value = false
    }
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
          ? 'bg-bg-gray rounded-tr-lg rounded-br-lg'
          : 'flex items-center justify-center',
      ]"
    >
      <ResultView v-if="calculatorStates.pathData" />
      <img class="w-[185px]" :src="person" alt="person" v-else />
    </div>
  </div>
</template>
