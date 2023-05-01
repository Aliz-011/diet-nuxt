<script setup>
import { useAuthStore } from '../stores/user';

const store = useAuthStore();
</script>

<template>
  <main
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
      <Navigation />
    </div>
  </main>
</template>
