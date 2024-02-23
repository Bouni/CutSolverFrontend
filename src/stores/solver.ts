import type { Item } from "@/models/Item"
import { defineStore } from 'pinia'
import { api } from "@/api"

export const useSolverStore = defineStore('solver', {
  state: () => ({
    inputData: [
      {
        id: 0,
        name: "Part1",
        quantity: 2,
        length: 500
      },
      {
        id: 1,
        name: "Part2",
        quantity: 4,
        length: 200
      },
      {
        id: 2,
        name: "Part3",
        quantity: 1,
        length: 1200
      },
      {
        id: 3,
        name: "Part4",
        quantity: 4,
        length: 250
      }
    ],
    stockData: {
      name: "",
      length: 1500,
      kerf: 3
    },
    solverResult: {
      lengths: []
    }
  }),
  actions: {
    dropItem(id: number) {
      this.inputData.splice(this.inputData.findIndex(i => i.id === id), 1)
    },
    removeAll() {
      this.inputData = []
    },
    addItem(item: Item) {
      const next_id = this.inputData.reduce((p, c) => ((p.id > c.id) ? p : c), 0)
      this.inputData.push({
        id: next_id,
        name: item.name,
        quantity: item.quantity,
        length: item.length
      })
    },
    solve() {
      const payload = {
        cut_width: this.stockData.kerf,
        max_length: this.stockData.length,
        target_sizes: this.inputData.map((item) => (delete item["id"], item))
      }
      api.post("solve", payload).then((result) => {
        this.solverResult = result.data
      }).catch((error) => {
        // TODO:display error properly
        console.log(error)
      })
    },
    getCSVData() {
      return this.solverResult.lengths.map((stock, i) => {
        return stock.map((item, j) => item[0])
      })
    }
  }
})
