<template>
  <div class="flex flex-row w-full gap-2 ml-1">
    <div class="basis-1/3">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Stock name
            <div class="tooltip tooltip-right" data-tip="An optional name for the stock">
              <b-icon-info-circle width="12px" height="12px" class="ml-1" />
            </div>
          </span>
        </div>
        <input type="text" placeholder="2x4 (optional)" class="input input-bordered w-full"
          v-model="store.stockData.name" />
      </label>
    </div>
    <div class="basis-1/3">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Stock length
            <div class="tooltip tooltip-right" data-tip="The length of your raw material">
              <b-icon-info-circle width="12px" height="12px" class="ml-1" />
            </div>
          </span>
        </div>
        <input type="number" placeholder="1200" class="input input-bordered w-full" v-model="store.stockData.length" />
      </label>
    </div>
    <div class="basis-1/3">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Kerf width
            <div class="tooltip tooltip-right" data-tip="The width of your saw blade for example ...">
              <b-icon-info-circle width="12px" height="12px" class="ml-1" />
            </div>
          </span>
        </div>
        <input type="number" placeholder="3" class="input input-bordered w-full" v-model="store.stockData.kerf" />
      </label>
    </div>
    <div class="w-16"></div>
  </div>
</template>

<script setup lang="ts">
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()
</script>
