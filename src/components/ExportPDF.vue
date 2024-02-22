<template>
  <button class="btn btn-outline mr-4" :class="store.solverResult.lengths.length == 0 ? 'btn-disabled' : ''"
    @click="downloadPDF()">
    Export <b-icon-filetype-pdf width="24" height="24" />
  </button>
</template>

<script setup lang="ts">
import jsPDF from 'jspdf';
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

let yoffset = 20

const downloadPDF = () => {
  yoffset = 20
  if (store.solverResult.lengths.length > 0) {
    var pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true
    });
    store.solverResult.lengths.forEach((stock) => {
      drawStock(pdf, stock, store.solverResult.job.max_length)
    })
    pdf.save('Cutsolver.pdf');
  }
}

const drawStock = (pdf, stock, stock_length) => {
  if (yoffset > 250) {
    pdf.addPage()
    yoffset = 20
  }
  pdf.setDrawColor("#5e81ac")
  pdf.setFillColor("#d8dee9")
  pdf.setLineWidth(.25);
  pdf.rect(20, yoffset, 170, 8, "FD")
  let xoffset = 20
  stock.forEach((item) => {
    let item_length = item[0] / stock_length * 170
    pdf.setFillColor("#81a1c1")
    pdf.rect(xoffset, yoffset + 0.1, item_length, 7.8, "FD")
    pdf.setFontSize(8)
    pdf.text(item[1], xoffset + item_length / 2, yoffset + 1, { align: "center", baseline: "top" })
    pdf.text(item[0].toString(), xoffset + item_length / 2, yoffset + 4, { align: "center", baseline: "top" })
    xoffset += item_length
  })
  yoffset += 10
}
</script>


