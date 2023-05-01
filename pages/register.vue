<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <TabGroup>
    <TabList class="flex space-x-1 rounded-3xl bg-gray-50 shadow-sm p-1">
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="[
            'w-full rounded-3xl py-0.5 text-sm font-semibold leading-5',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected
              ? 'bg-gray-400 text-gray-100 shadow'
              : 'text-gray-800 hover:bg-white/[0.12] hover:text-gray-500',
          ]"
        >
          Register
        </button>
      </Tab>
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="[
            'w-full rounded-3xl py-0.5 text-sm font-semibold leading-5',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected
              ? 'bg-gray-400 text-gray-100 shadow'
              : 'text-gray-800 hover:bg-white/[0.12] hover:text-gray-500',
          ]"
        >
          Login
        </button>
      </Tab>
    </TabList>

    <TabPanels class="mt-4 lg:mt-12">
      <TabPanel>
        <h2
          class="px-3 text-2xl text-center mb-4 md:mb-8 font-manrope font-bold text-gray-900"
        >
          Register
        </h2>

        <form class="flex flex-col gap-4"></form>
      </TabPanel>

      <TabPanel>
        <h2
          class="px-3 text-2xl text-center mb-4 md:mb-8 font-manrope font-bold text-gray-900"
        >
          Login
        </h2>

        <!-- form -->
        <form class="flex flex-col gap-4">
          <div class="relative mb-2">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-mail" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-lock" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="password"
            />
          </div>

          <div>
            <button
              type="submit"
              class="text-white w-full bg-gradient-to-r from-rose-600 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-semibold font-manrope rounded-lg text-sm px-5 py-2.5 shadow text-center inline-flex justify-center items-center mr-2"
            >
              Login
            </button>
          </div>
        </form>

        <div class="inline-flex items-center justify-center w-full relative">
          <hr class="w-64 h-px my-8 bg-gray-200 border-0" />
          <span
            class="absolute px-3 text-lg font-manrope font-bold text-gray-900 -translate-x-1/2 bg-white left-1/2"
          >
            or
          </span>
        </div>

        <div class="flex flex-col gap-4">
          <button
            type="button"
            class="w-full text-gray-700 bg-gray-50 hover:bg-gray-100 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md border text-sm px-5 py-2.5 inline-flex items-center justify-center mr-2"
          >
            <Icon name="logos:google-icon" class="w-5 h-5 mr-2 -ml-1" />

            Login with Google
          </button>

          <button
            type="button"
            class="w-full text-gray-700 bg-gray-50 hover:bg-gray-100 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md border text-sm px-5 py-2.5 inline-flex items-center justify-center mr-2"
          >
            <Icon name="logos:facebook" class="w-5 h-5 mr-2 -ml-1" />

            Login with Facebook
          </button>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>
