<script setup>
const props = defineProps(['postsPerPage', 'totalPosts', 'currentPage']);
const emit = defineEmits(['previous', 'next', 'paginate']);

const pageNumbers = ref([]);

for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
  pageNumbers.value.push(i);
}

function previousPage() {
  emit('previous-page');
}
function nextPage() {
  emit('next-page');
}
function paginate(n) {
  emit('page-changed', n);
}
</script>

<template>
  <nav
    aria-label="Page navigation example"
    class="col-span-full mt-4 text-center"
  >
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button
          type="button"
          @click="previousPage"
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">Previous</span>
          <Icon name="heroicons-solid:chevron-left" class="w-5 h-5" />
        </button>
      </li>

      <li
        v-for="(item, index) in pageNumbers"
        :key="index"
        @click="() => paginate(item)"
      >
        <span
          class="px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >{{ item }}</span
        >
      </li>

      <li>
        <button
          type="button"
          @click="nextPage"
          class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">Next</span>
          <Icon name="heroicons-solid:chevron-right" class="w-5 h-5" />
        </button>
      </li>
    </ul>
  </nav>
</template>
