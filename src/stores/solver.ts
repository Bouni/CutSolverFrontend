import type { Item } from "@/models/Item"
import { defineStore } from 'pinia'

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
    ]
  }),
  actions: {
    dropItem(id: number) {
      console.log(id)
      this.inputData.splice(this.inputData.findIndex(i => i.id === id), 1)
    },
    addItem(item: Item) {
      const next_id = this.inputData.reduce((p, c) => ((p.id > c.id) ? p : c), 0)
      this.inputData.push({
        id: next_id,
        name: item.name,
        quantity: item.quantity,
        length: item.length
      })
    }
  }
})
