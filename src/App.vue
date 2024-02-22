<template>
  <main>
    <div class="mx-auto">
      <NavBar />
      <div class="flex flex-row w-full p-4">
        <div class="w-full mb-12">
          <Input />
        </div>
        <div class="w-64 flex justify-center items-center">
          <SolveButton />
        </div>
        <div class="w-full mb-12">
          <Output />
        </div>
      </div>
      <Footer />
    </div>
    <Notifications />
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue"
import Input from "@/components/Input.vue"
import SolveButton from "@/components/SolveButton.vue"
import Output from "@/components/Output.vue"
import Footer from "@/components/Footer.vue"
import Notifications from "@/components/Notifications.vue"
</script>
