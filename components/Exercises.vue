<template>
  <section>
    <h3 class="font-semibold text-lg">Exercises</h3>

    <div
      class="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2"
    >
      <div
        class="col-span-full border-b mb-4"
        :class="store.darkTheme ? 'border-gray-600' : ''"
      >
        <h4 class="text-sm font-medium inline-flex items-center gap-2">
          <Icon name="uis:grids" />
          Board
        </h4>
        <div
          class="w-16 h-0.5"
          :class="store.darkTheme ? 'bg-white' : 'bg-black'"
        />
      </div>

      <!-- exercises by target muscles -->
      <div
        class="flex flex-col gap-2 mb-4"
        v-for="(exercises, bodyPart) in limitedExercises"
        :key="bodyPart"
      >
        <NuxtLink
          :to="'bodypart/' + bodyPart"
          class="font-bold text-sm capitalize"
        >
          {{ bodyPart }}
        </NuxtLink>

        <NuxtLink
          :to="'exercise/' + exercise.id"
          class="flex items-center gap-2 rounded-lg shadow px-2 py-1"
          :class="store.darkTheme ? 'bg-gray-900' : 'bg-white'"
          v-for="exercise in exercises"
          :key="exercise.id"
        >
          <Icon
            name="material-symbols:arrow-circle-right"
            class="text-rose-500"
          />
          <span class="font-semibold text-sm capitalize">{{
            exercise.name
          }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { limitedExercises } from '../data/exercises';
import { useAuthStore } from '../stores/user';

const store = useAuthStore();
</script>
