<script setup lang="ts">
/**
 * @Component DynamicButton
 * @description purpose of this component is to render dynamic button
 * @author Nawod Madhuvantha
 */
import type { ButtonProps } from '@/shared/models/calculator'
import { defineProps } from 'vue'

const props = defineProps<ButtonProps>()
</script>

<template>
  <div
    :class="[
      'rounded-lg px-4 py-3 text-base font-normal cursor-pointer w-fit',
      props.icon
        ? 'flex items-center gap-4 text-white bg-btn-orange hover:opacity-80'
        : 'text-btn-orange border border-btn-orange hover:bg-gray-100',
    ]"
    @click="props.onClick"
  >
    {{ props.title }}
    <img :src="props.icon" alt="calculator icon" v-if="props.icon" />
  </div>
</template>
