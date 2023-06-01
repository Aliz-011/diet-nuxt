<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { supabase } from '../supabase';
import { useAuthStore } from '~/stores/user';

definePageMeta({
  layout: 'auth',
});

const store = useAuthStore();

const email = ref('');
const password = ref('');
const cPassword = ref('');
const loading = ref(null);
const err = ref(null);
const errMsg = ref('');

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) throw error;
}

async function register() {
  try {
    if (
      password.value !== cPassword.value ||
      !password.value ||
      !cPassword.value
    ) {
      return setTimeout(() => {
        err.value = true;
        errMsg.value = 'password not match!';
      }, 5000);
    }

    const { data } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (data) {
      store.loggedinUser(user);
    }
  } catch (error) {
    console.log(error);
  }
}

async function login() {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (data) {
      store.loggedinUser(data.user);
      useRouter().push('/');
    }

    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}

if (store.user) {
  useRouter().push('/');
}
</script>

<template>
  <TabGroup>
    <TabList class="flex space-x-1 rounded-3xl bg-gray-50 shadow-sm p-1">
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="[
            'w-full rounded-3xl py-0.5 text-sm font-semibold leading-5',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
            selected
              ? 'bg-gray-200 text-gray-700 shadow'
              : 'text-gray-100 hover:bg-white/[0.12] hover:text-gray-500',
          ]"
        >
          Register
        </button>
      </Tab>
      <Tab as="template" v-slot="{ selected }">
        <button
          :class="[
            'w-full rounded-3xl py-0.5 text-sm font-semibold leading-5',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
            selected
              ? 'bg-gray-200 text-gray-700 shadow'
              : 'text-gray-100 hover:bg-white/[0.12] hover:text-gray-500',
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

        <form class="flex flex-col gap-4" @submit.prevent="register">
          <div class="relative mb-2">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-mail" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="email"
              v-model="email"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              :class="err ? 'border-red-600' : 'border-gray-300'"
              placeholder="youremail@gmail.com"
            />
          </div>

          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-lock" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="password"
              v-model="password"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              :class="err ? 'border-red-600' : 'border-gray-300'"
              placeholder="Password"
            />
          </div>

          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-lock" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="password"
              v-model="cPassword"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              :class="err ? 'border-red-600' : 'border-gray-300'"
              placeholder="Confirm password"
            />
          </div>

          <p class="text-xs text-red-600 text-center capitalize" v-show="err">
            <span class="font-medium">Oh, snapp!</span> {{ errMsg }}.
          </p>

          <div>
            <button
              type="submit"
              class="text-white w-full bg-gradient-to-r from-rose-600 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-semibold font-manrope rounded-lg text-sm px-5 py-2.5 shadow text-center inline-flex justify-center items-center mr-2"
              :class="
                loading
                  ? 'disabled:pointer-events-none opacity-50 cursor-not-allowed'
                  : ''
              "
            >
              <span class="inline-flex items-center gap-2" v-if="loading">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </span>
              <span v-else> Register </span>
            </button>
          </div>
        </form>
      </TabPanel>

      <TabPanel>
        <h2
          class="px-3 text-2xl text-center mb-4 md:mb-8 font-manrope font-bold text-gray-900"
        >
          Login
        </h2>

        <!-- form -->
        <form class="flex flex-col gap-4" @submit.prevent="login">
          <div class="relative mb-2">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-mail" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="email"
              v-model="email"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              :class="err ? 'border-red-600' : 'border-gray-300'"
              placeholder="youremail@gmail.com"
            />
          </div>

          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-lock" class="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="password"
              v-model="password"
              class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              :class="err ? 'border-red-600' : 'border-gray-300'"
              placeholder="password"
            />
          </div>

          <p class="text-xs text-red-600 text-center capitalize" v-show="err">
            <span class="font-medium">Oh, snapp!</span> {{ errMsg }}.
          </p>

          <div>
            <button
              type="submit"
              class="text-white w-full bg-gradient-to-r from-rose-600 to-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-semibold font-manrope rounded-lg text-sm px-5 py-2.5 shadow text-center inline-flex justify-center items-center mr-2"
              :class="
                loading
                  ? 'disabled:pointer-events-none opacity-50 cursor-not-allowed'
                  : ''
              "
            >
              <span class="inline-flex items-center gap-2" v-if="loading">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </span>
              <span v-else> Login </span>
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
            @click="signInWithGoogle"
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
