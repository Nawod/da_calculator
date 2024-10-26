<script setup lang="ts">
/**
 * @Component ResultView
 * @description purpose of this component is to visualize the result
 * @author Nawod Madhuvantha
 */
import { useCalculatorStore } from '@/stores/calculatorSlice'
import { onMounted, watch } from 'vue'
import { useToast } from 'vue-toastification'

const calculatorStates = useCalculatorStore()
const toast = useToast()

/**
 * make post request to http echo endpoint
 */
const sendPathData = async () => {
  try {
    const response = await fetch('https://echo.free.beeceptor.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shortestPathData: calculatorStates.pathData }),
    })

    if (!response.ok) {
      toast.error(`Network response was not ok! - ${response.status}`)
    } else {
      toast.success(`Http request successfully echoed! - ${response.status}`)
    }
  } catch (error) {
    toast.error(`Http echo request error! - ${error}`)
  }
}

onMounted(() => {
  sendPathData()
})

/**
 * trigger sendPathData function when the path calculation done
 */
watch(
  () => calculatorStates.pathData,
  newValue => {
    if (newValue) {
      sendPathData()
    }
  },
  { deep: true },
)
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
