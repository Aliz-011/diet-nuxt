<script setup>
const step = ref(1);

const stepperProgress = computed(() => {
  return (100 / 3) * (step.value - 1) + '%';
});

const guides = ref([
  {
    id: 1,
    title: 'Sign in or sign up to start.',
    content:
      'If you already have an account, just sign in and if not please sign up first.',
  },
  {
    id: 2,
    title: 'Wanna exercise or diet?',
    content:
      'You can choose either one of em or both at the same time to help you maximize the results.',
  },
  {
    id: 3,
    title: 'Navigation bar is all you need.',
    content:
      'Create a schedule for exercise, setting up your profile and generate a meal plan.',
  },
  {
    id: 4,
    title: 'Thats all, good luck and happy diet.',
    content: 'Hope you satisfied with our helps.',
  },
]);
</script>

<template>
  <div class="mt-2">
    <div class="flex items-center justify-between w-full relative mb-6">
      <!-- stepper progress -->
      <div class="absolute bg-gray-200 h-0.5 -z-10 left-0 right-0 my-0 mx-auto">
        <div
          class="absolute left-0 h-full w-[0%] bg-rose-500 transition-colors duration-300 ease-in-out"
          :style="'width:' + stepperProgress"
        />
      </div>

      <!-- stepper item -->
      <div
        class="bg-white rounded-full w-12 h-12 border border-gray-300 flex items-center justify-center relative"
        :class="{
          'border-rose-500': step === item.id,
          'text-rose-500': step > item.id,
        }"
        v-for="item in guides"
        :key="item.id"
      >
        <Icon name="ic:round-check" class="w-6 h-6" v-if="step > item.id" />
        <span class="text-gray-700" v-else>{{ item.id }}</span>
      </div>
    </div>

    <div class="my-4" />

    <div class="flex flex-col" v-for="item in guides" :key="item.id">
      <h3 class="font-semibold text-lg">
        {{ step == item.id ? item.title : '' }}
      </h3>
      <span class="text-sm text-gray-400">{{
        step == item.id ? item.content : ''
      }}</span>
    </div>

    <div class="flex items-center justify-between mt-8">
      <button
        type="button"
        @click="step--"
        :disabled="step == 1"
        class="px-4 py-1.5 shadow bg-gray-50 hover:bg-gray-100 border font-medium rounded-lg cursor-pointer disabled:opacity-90 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button
        type="button"
        @click="step++"
        :disabled="step == 4"
        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-90 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>
