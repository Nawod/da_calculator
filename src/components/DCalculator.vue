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

const calculatorStates = useCalculatorStore()
</script>

<template>
  <div
    class="flex w-[721px] p-8 bg-white rounded-lg shadow-[0_8px_22px_2px_#0000001F]"
  >
    <div class="flex-1">
      <p class="text-txt-blue text-xl font-semibold mb-6 text-nowrap">
        Select Path
      </p>
      <div class="mt-6 mb-6 pr-6 flex flex-col gap-6">
        <DropdownInput
          title="From Node"
          :selectedValue="calculatorStates.fromNode"
          :onOptionSelect="calculatorStates.setFromNode"
        />
        <DropdownInput
          title="To Node"
          :selectedValue="calculatorStates.toNode"
          :onOptionSelect="calculatorStates.setToNode"
        />
      </div>
      <div class="flex gap-3">
        <DynamicButton title="Clear" :onClick="calculatorStates.clearNodes" />
        <DynamicButton
          :icon="calIcon"
          title="Calculate"
          :onClick="calculatorStates.clearNodes"
        />
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <img class="w-[185px]" :src="person" alt="" />
    </div>
  </div>
</template>
