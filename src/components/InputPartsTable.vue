<template>
  <table class="table">
    <thead>
      <tr class="border-0">
        <th class="text-lg">Name</th>
        <th class="text-lg">Quantity</th>
        <th class="text-lg">Length</th>
        <th class="w-12 p-1">
          <div class="tooltip tooltip-right" data-tip="Remove all items">
            <button class="btn btn-ghost">
              <b-icon-trash width="24" height="24" @click="store.removeAll()" />
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in store.inputData" class="border-0">
        <td class="p-1">
          <input type="text" class="input input-bordered w-full" v-model="item.name" />
        </td>
        <td class="p-1">
          <input type="number" class="input input-bordered w-full" :class="item.quantity > 0 ? '' : 'input-error'"
            v-model="item.quantity" />
        </td>
        <td class="p-1">
          <input type="number" class="input input-bordered w-full"
            :class="item.length <= store.stockData.length ? '' : 'input-error'" v-model="item.length" />
        </td>
        <td class="p-1">
          <div class="tooltip tooltip-right" data-tip="Remove this item">
            <button class="btn btn-ghost">
              <b-icon-backspace width="24" height="24" @click="store.dropItem(item.id)" />
            </button>
          </div>
        </td>
      </tr>
      <tr class="border-0 bottom_row">
        <td class="p-1">
          <input type="text" placeholder="Part" class="input input-bordered w-full" v-model="new_item.name" />
        </td>
        <td class="p-1">
          <input type="number" min="1" placeholder="1" class="input input-bordered w-full" v-model="new_item.quantity" />
        </td>
        <td class="p-1">
          <input type="number" min="1" placeholder="100" class="input input-bordered w-full" v-model="new_item.length" />
        </td>
        <td class="p-1">
          <div class="tooltip tooltip-right" data-tip="Add this item">
            <button class="btn btn-ghost" :class="isNewItemValid ? '' : 'btn-disabled'">
              <b-icon-plus-circle width="24" height="24" @click="addItem()" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Import />
</template>

<style scoped>
.bottom_row {
  border-top: solid #ffffff00 1em;
}
</style>

<script setup lang="ts">
import Import from "@/components/Import.vue"
import { ref, computed } from 'vue'
import type { Item } from '@/models/Item'
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

const new_item = ref<Item>({ name: '', quantity: 0, length: 0 })

const isNewItemValid = computed(() => {
  return new_item.value.quantity > 0 && new_item.value.length > 0 && new_item.value.length <= store.stockData.length
})

const addItem = () => {
  if (isNewItemValid.value) {
    store.addItem(new_item.value)
    new_item.value = { name: '', quantity: 0, length: 0 }
  }
}
</script>
