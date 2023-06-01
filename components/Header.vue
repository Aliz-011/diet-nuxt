<script setup>
import { Switch } from '@headlessui/vue';
import { useAuthStore } from '../stores/user';

useHead({
  title: 'Weight Monitoring and Management',
});

const enabled = ref(false);
const isActive = ref(null);
const store = useAuthStore();
</script>

<template>
  <header class="py-4 relative">
    <nav
      class="shadow flex items-center justify-between rounded-full px-4 py-2"
      :class="store.darkTheme ? 'bg-gray-900' : 'bg-white'"
    >
      <NuxtLink to="/" class="text-rose-600">
        <Icon name="solar:dumbbell-large-linear" class="w-6 h-6" />
      </NuxtLink>

      <div class="flex items-center gap-4">
        <Switch
          v-model="enabled"
          :class="enabled ? 'bg-gray-800' : 'bg-gray-300'"
          class="relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          @click="() => store.changeTheme()"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="enabled ? 'translate-x-5' : 'translate-x-0'"
            class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </Switch>

        <div class="w-6 h-6 overflow-hidden bg-gray-100 rounded-full">
          <Icon
            name="material-symbols:account-circle"
            class="absolute w-6 h-6 text-gray-400 cursor-pointer"
            @click="($event) => (isActive = !isActive)"
          />
        </div>
      </div>
    </nav>

    <!-- dropdown -->
    <div
      id="dropdownDivider"
      class="z-10 absolute right-4 sm:right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      :class="isActive ? 'block' : 'hidden'"
    >
      <div class="py-2">
        <button
          @click="async () => await store.logout()"
          class="inline-flex w-full justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          v-if="store.user"
        >
          Logout
        </button>
        <NuxtLink
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          href="/register"
          v-else
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
