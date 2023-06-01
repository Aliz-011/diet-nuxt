<script setup>
import { exerciseOptions } from '../../composables/fetchData';
import { useAuthStore } from '../../stores/user';

const store = useAuthStore();
const route = useRoute();

const { data, pending } = await useFetch(
  `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${route.params.name}`,
  exerciseOptions
);

const currentPage = ref(1);
const postsPerPage = ref(8);

const indexOfLastPost = currentPage.value * postsPerPage.value;
const indexOfFirstPost = indexOfLastPost - postsPerPage.value;
const currentPosts = data?.value.slice(indexOfFirstPost, indexOfLastPost);

function handlePageChange(page) {
  currentPage.value = page;
  useFetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${route.params.name}`,
    exerciseOptions
  )
    .then((res) => res.data)
    .catch((e) => console.log(e));
}

function previousPage() {
  if (currentPage.value !== 1) {
    currentPage.value = currentPage.value - 1;
  }
}

function nextPage() {
  if (currentPage.value !== Math.ceil(data.value.length / postsPerPage.value)) {
    currentPage.value = currentPage.value + 1;
  }
}
</script>

<template>
  <div
    v-if="pending"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-screen py-8"
  >
    <div
      role="status"
      class="max-w-lg h-96 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6"
      v-for="i in 4"
    >
      <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div
        class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded"
      >
        <svg
          class="w-12 h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path
            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
          />
        </svg>
      </div>

      <div class="h-2 bg-gray-200 rounded-full"></div>

      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <section
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8"
  >
    <h1
      class="text-2xl col-span-full font-bold mb-8 capitalize"
      :class="store.darkTheme ? ' text-gray-100' : ' text-gray-800'"
    >
      Exercises for {{ route.params.name }}
    </h1>

    <!-- card -->
    <div
      v-for="(exercise, index) in currentPosts"
      :key="index"
      class="rounded-xl p-8 flex flex-col justify-between items-center"
      :class="
        store.darkTheme ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      "
    >
      <div class="">
        <h2 class="text-lg font-medium capitalize">{{ exercise?.name }}</h2>
        <p class="text-xl font-semibold mt-2"></p>
      </div>

      <!--  -->
      <div class="flex justify-center items-center mt-8 md:mt-12">
        <img
          class=""
          :src="exercise?.gifUrl"
          :alt="exercise?.name"
          role="img"
        />
      </div>

      <div class="flex justify-end items-center space-x-2 mt-16 md:mt-24">
        <button
          aria-label="show in red color"
          class="bg-rose-500 text-xs uppercase text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded-full px-4 py-1.5"
        >
          {{ exercise?.target }}
        </button>
        <button
          aria-label="show in red color"
          class="bg-orange-500 text-xs uppercase text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded-full px-4 py-1.5"
        >
          {{ exercise?.equipment }}
        </button>
      </div>
    </div>

    <Pagination
      :postsPerPage="postsPerPage"
      :totalPosts="data?.length"
      :currentPage="currentPage"
      @page-changed="handlePageChange"
      @next-page="nextPage"
      @previous-page="previousPage"
    />
  </section>
</template>
