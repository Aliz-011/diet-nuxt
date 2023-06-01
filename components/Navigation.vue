<template>
  <div
    class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2"
  >
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
      <button
        data-tooltip-target="tooltip-home"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 group"
      >
        <Icon
          name="ph:house-fill"
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-rose-600"
        />

        <span class="sr-only">Home</span>
      </button>
      <div
        id="tooltip-home"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Home
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <button
        data-tooltip-target="tooltip-wallet"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
      >
        <Icon
          name="fluent:payment-28-filled"
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-rose-600"
        />

        <span class="sr-only">Wallet</span>
      </button>
      <div
        id="tooltip-wallet"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Wallet
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <div class="flex items-center justify-center">
        <button
          data-tooltip-target="tooltip-new"
          type="button"
          class="inline-flex items-center justify-center w-10 h-10 font-medium bg-rose-600 rounded-full hover:bg-rose-700 group focus:ring-4 focus:ring-rose-300 focus:outline-none"
        >
          <Icon name="ic:baseline-plus" class="w-6 h-6 text-white" />

          <span class="sr-only">New item</span>
        </button>
      </div>
      <div
        id="tooltip-new"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Create new item
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <button
        data-tooltip-target="tooltip-settings"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
      >
        <Icon
          name="bi:calendar-heart-fill"
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-rose-600"
        />

        <span class="sr-only">Settings</span>
      </button>
      <div
        id="tooltip-settings"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Settings
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <NuxtLink
        href="/profile"
        class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 group"
      >
        <Icon
          name="solar:user-circle-bold"
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-rose-600"
        />

        <span class="sr-only">Profile</span>
      </NuxtLink>
      <div
        id="tooltip-profile"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Profile
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>
