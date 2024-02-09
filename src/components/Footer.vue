<template>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content absolute bottom-0">
    <aside>
      <p>CutSolver v{{ version }}, made with <b-icon-heart-fill class="inline" /> by
        <a href="http://modisch.me" target="_blank" class="hover:text-sky-600">Modisch Fabrications</a> |
        <a href="https://legal.modisch.me/en/privacy" target="_blank" class="hover:text-sky-600">Privacy Policy</a>
      </p>
    </aside>
  </footer>
</template>

<script setup lang="ts">
import { version } from '@/../package.json'
</script>
