<template>
  <section
    class="grid grid-cols-1 items-center md:grid-cols-2 shadow gap-4 rounded-xl p-8 md:p-12 mb-8"
    :class="store.darkTheme ? 'bg-gray-900' : 'bg-white'"
  >
    <div>
      <a
        href="#"
        class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
      >
        <Icon
          name="material-symbols:arrow-circle-right-rounded"
          class="w-3 h-3 mr-1"
        />

        Tutorial
      </a>
      <h1 class="text-3xl md:text-5xl font-extrabold mb-2">
        Start your diet today.
      </h1>
      <p class="text-sm font-normal text-gray-400 mb-6">
        Static websites are now used to bootstrap lots of websites and are
        becoming the basis for a variety of tools that even influence both web
        designers and developers.
      </p>
      <button
        type="button"
        @click="openModal"
        class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300"
      >
        Get Started
        <Icon
          name="material-symbols:arrow-circle-right-rounded"
          class="ml-2 -mr-1 w-5 h-5"
        />
      </button>
    </div>

    <div class="hidden md:block">
      <img src="~/assets/images/fitness.svg" alt="" />
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <Stepper />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </section>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import { useAuthStore } from '../stores/user';

const store = useAuthStore();

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
