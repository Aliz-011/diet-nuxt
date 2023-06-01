<template>
  <main
    class="pb-20"
    :class="[
      store.darkTheme
        ? 'bg-gray-950 text-gray-100'
        : 'bg-gray-50 text-gray-900',
    ]"
  >
    <div class="container mx-auto max-w-5xl relative">
      <Header />
      <NuxtPage>
        <slot />
      </NuxtPage>
      <Navigation
        :class="[
          isVisible
            ? 'transition-all ease-in-out duration-500 opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-1',
        ]"
      />
    </div>
  </main>
</template>

<script>
import { useAuthStore } from '../stores/user';

export default {
  data() {
    return {
      isVisible: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight) {
        this.isVisible = true;
      } else if (scrollPosition == 0) {
        this.isVisible = false;
      }
    },
  },
  setup() {
    const store = useAuthStore();

    return { store };
  },
};
</script>
