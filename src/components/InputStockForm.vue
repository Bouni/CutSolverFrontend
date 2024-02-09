<template>
  <div class="flex flex-row w-full gap-4">
    <div class="basis-1/2">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Stock length</span>
        </div>
        <input type="number" placeholder="The length of your raw material" class="input input-bordered w-full" />
      </label>
    </div>
    <div class="basis-1/2">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Kerf width</span>
        </div>
        <input type="number" placeholder="The width of your saw blade for example ..."
          class="input input-bordered w-full" />
      </label>
    </div>
    <div class="w-14"></div>
  </div>
</template>
