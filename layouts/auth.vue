<script setup>
useHead({
  title: 'Register Page',
});
</script>

<template>
  <main class="flex h-screen bg-gradient-to-r from-slate-300 to-gray-200">
    <div
      class="m-auto bg-white shadow-md rounded-3xl w-3/5 h-3/4 grid grid-cols-1 lg:grid-cols-2"
    >
      <div class="p-8 hidden lg:block">
        <div
          class="h-full w-full flex items-center rounded-3xl bg-red-400 px-4"
        >
          <img src="~/assets/images/indoor_fitness.svg" alt="indoor_fitness" />
        </div>
      </div>

      <div class="flex flex-col px-8 md:pr-8 py-8">
        <slot />
      </div>
    </div>
  </main>
</template>
