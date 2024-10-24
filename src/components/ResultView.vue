<script setup lang="ts">
import { useCalculatorStore } from '@/stores/calculatorSlice'

/**
 * @Component ResultView
 * @description purpose of this component is to visualize the result
 * @author Nawod Madhuvantha
 */

const calculatorStates = useCalculatorStore()
</script>

<template>
  <div class="m-8 mb-10 w-ful">
    <p class="text-txt-blue text-base font-semibold mb-6 text-nowrap">Result</p>
    <div class="w-full p-6 rounded-lg mt-4 bg-white h-[364px]">
      <p class="text-txt-black font-normal pb-4">
        From Node Name = "{{ calculatorStates.fromNode }}", To Node Name = "{{
          calculatorStates.toNode
        }}" : {{ calculatorStates.pathData?.nodeNames.join(',') }}
      </p>
      <p class="text-txt-black font-normal">
        Total Distance : {{ calculatorStates.pathData?.distance }}
      </p>
    </div>
  </div>
</template>
