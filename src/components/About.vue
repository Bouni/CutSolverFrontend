<template>
  <button class="btn btn-square btn-ghost" onclick="about_modal.showModal()">
    <b-icon-info-circle width="24" height="24" />
  </button>
  <dialog id="about_modal" class="modal">
    <div class="modal-box w-11/12 max-w-5xl ">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      <AboutText />
    </div>
  </dialog>
</template>

<style scoped></style>

<script setup lang="ts">
import AboutText from "@/components/AboutText.vue"
</script>

