<template>
  <table class="table">
    <thead>
      <tr class="border-0">
        <th class="text-lg">Name</th>
        <th class="text-lg">Quantity</th>
        <th class="text-lg">Length</th>
        <th class="w-12 p-1">
          <button class="btn btn-ghost">
            <b-icon-trash width="24" height="24" />
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 2" class="border-0">
        <td class="p-1">
          <input type="text" placeholder="Part 1" class="input w-full" />
        </td>
        <td class="p-1">
          <input type="text" placeholder="2" class="input w-full" />
        </td>
        <td class="p-1">
          <input type="text" placeholder="500" class="input w-full" />
        </td>
        <td class="p-1">
          <button class="btn btn-ghost">
            <b-icon-backspace width="24" height="24" />
          </button>
        </td>
      </tr>
      <tr class="border-0">
        <td class="p-1">
          <input type="text" placeholder="Part 1" class="input w-full" />
        </td>
        <td class="p-1">
          <input type="text" placeholder="2" class="input w-full" />
        </td>
        <td class="p-1">
          <input type="text" placeholder="500" class="input w-full" />
        </td>
        <td class="p-1">
          <button class="btn btn-ghost">
            <b-icon-plus-circle width="24" height="24" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
