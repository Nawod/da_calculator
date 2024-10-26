<script setup lang="ts">
/**
 * @Component DropdownInput
 * @description purpose of this component is to render dynamic dropdown selector
 * @author Nawod Madhuvantha
 */
import { Nodes } from '@/shared/constants/nodes'
import { ref, defineProps } from 'vue'
import dropdownIcon from '@/assets/icons/drop-down.png'
import type { DropdownProps } from '@/shared/models/calculator'

const props = defineProps<DropdownProps>()

const isOpen = ref(false)

/**
 * handel drop down toggle
 */
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

/**
 * set selected value from the option menu
 * @param value
 */
const setSelectedValue = (value: string) => {
  props.onOptionSelect(value)
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block text-left w-full">
    <p class="text-sm text-txt-black font-normal mb-2">From Node</p>
    <div
      @click="toggleDropdown"
      :class="[
        'inline-flex justify-between w-full rounded-lg border px-3 py-2 bg-white gap-3 text-sm font-normal hover:bg-gray-50 cursor-pointer',
        isOpen ? 'border-txt-blue' : 'border-border-gray ',
        props.selectedValue ? 'text-txt-black' : 'text-disable-gray',
        props.error && !selectedValue && 'border-red-500',
      ]"
    >
      {{ props.selectedValue ? props.selectedValue : 'Select' }}
      <img
        :src="dropdownIcon"
        alt="dropdown"
        :class="[isOpen && 'rotate-180']"
      />
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute z-10 right-0 mt-2 w-full rounded-md shadow-lg bg-white h-48 overflow-y-auto"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          class="block px-4 py-2 text-sm text-txt-black hover:bg-gray-100"
          role="menuitem"
          v-for="node in Nodes.list"
          :key="node.node"
          @click="setSelectedValue(node.node)"
        >
          {{ node.node }}
        </div>
      </div>
    </div>
  </div>
</template>
