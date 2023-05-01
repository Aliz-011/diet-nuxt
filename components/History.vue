<script setup>
import { useAuthStore } from '../stores/user';

const store = useAuthStore();
</script>

<template>
  <section>
    <h3 class="font-semibold text-lg">History</h3>

    <div class="px-2 gap-4 mt-2">
      <div
        class="border-b mb-4"
        :class="store.darkTheme ? 'border-gray-600' : ''"
      >
        <h4 class="text-sm font-medium inline-flex items-center gap-2">
          <Icon name="ph:grid-nine-bold" />
          Table
        </h4>
        <div
          class="w-16 h-0.5"
          :class="store.darkTheme ? 'bg-white' : 'bg-black'"
        />
      </div>

      <!-- exercises by target muscles -->

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead
            class="text-xs uppercase"
            :class="
              store.darkTheme
                ? 'bg-gray-900 text-gray-100'
                : 'bg-white text-gray-700'
            "
          >
            <tr>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Exercise</th>
              <th scope="col" class="px-6 py-3">Muscle Group</th>
              <th scope="col" class="px-6 py-3">Sets</th>
              <th scope="col" class="px-6 py-3">Reps</th>
            </tr>
          </thead>
          <tbody
            :class="
              store.darkTheme
                ? 'bg-gray-900 text-gray-100'
                : 'bg-white text-gray-700'
            "
          >
            <tr class="border-b border-gray-200">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                1 May 2023
              </th>
              <td class="px-6 py-4">Dumbbell Curls</td>
              <td class="px-6 py-4">Biceps</td>
              <td class="px-6 py-4">3</td>
              <td class="px-6 py-4">15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
