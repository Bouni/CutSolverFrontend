<template>
  <div class="navbar bg-base-100 bg-base-300">
    <div class="flex-none mx-2">
      <img src="@/assets/logo.svg">
    </div>
    <div class="flex-1">
      <span class="text-xl ">CutSolver</span>
    </div>
    <div class="flex-none">
      <ThemeToggle />
      <span>|</span>
      <a href="http://github.com/ModischFabrications" target="_blank" class="btn btn-square  btn-ghost">
        <b-icon-github width="24" height="24" />
      </a>
      <span>|</span>
      <a href="https://www.buymeacoffee.com/modisch" target="_blank" class="btn btn-square  btn-ghost">
        <b-icon-cup width="24" height="24" />
      </a>
      <span>|</span>
      <AboutModal />
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import AboutModal from "@/components/About.vue"
import ThemeToggle from "@/components/ThemeToggle.vue"
</script>
