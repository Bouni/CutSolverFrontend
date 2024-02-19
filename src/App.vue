<template>
  <main>
    <div class="mx-auto">
      <NavBar />
      <div class="flex flex-row w-full p-4">
        <div class="w-full">
          <Input />
        </div>
        <div class="w-64 flex justify-center items-center">
          <SolveButton />
        </div>
        <div class="w-full">
          <Output />
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue"
import Input from "@/components/Input.vue"
import SolveButton from "@/components/SolveButton.vue"
import Output from "@/components/Output.vue"
import Footer from "@/components/Footer.vue"
</script>
