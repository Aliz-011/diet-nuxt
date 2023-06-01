<script setup>
import { supabase } from '../supabase';
import { useAuthStore } from '~/stores/user';

const userInfo = reactive({
  username: '',
  website: '',
  firstName: '',
  lastName: '',
});
const weight = ref(0);
const height = ref(0);

const loading = ref(null);
const store = useAuthStore();

async function updateProfile() {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert(
        {
          id: store.user.id,
          username: userInfo.username,
          website: userInfo.website,
          first_name: userInfo.firstName,
          last_name: userInfo.lastName,
        },
        {
          returning: 'minimal',
        }
      )
      .eq('id', store.user.id);

    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}

async function updateBodyProfile() {
  try {
    const { error } = await supabase
      .from('profiles')
      .upsert(
        { id: store.user.id, weight: weight.value, height: height.value },
        { returning: 'minimal' }
      )
      .eq('id', store.user.id);

    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  loading.value = true;

  let { data } = await supabase
    .from('profiles')
    .select(`username, first_name, last_name`)
    .eq('id', store.user.id)
    .single();

  if (data) {
    userInfo.email = store.user.email;
    userInfo.username = data.username;
    userInfo.firstName = data.first_name;
    userInfo.lastName = data.last_name;
  }

  loading.value = false;
});

if (!store.user) {
  useRouter().push('/register');
}
</script>

<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">My account</h6>
      </div>
    </div>

    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="updateProfile">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Username
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="diniabshari"
                v-model="userInfo.username"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Website
              </label>
              <input
                type="url"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="instagram.com/diniabshari"
                v-model="userInfo.website"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                First Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="userInfo.firstName"
                placeholder="Dini"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Last Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="userInfo.lastName"
                placeholder="Abshari"
              />
            </div>
          </div>

          <div class="px-4">
            <button
              class="bg-rose-600 text-white active:bg-rose-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>

      <hr class="mt-6 border-b-1 border-blueGray-300" />

      <form @submit.prevent="updateBodyProfile">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Body Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Weight(Kg)
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="weight"
                placeholder="example: 30"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Height(cm)
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="height"
                placeholder="example: 180"
              />
            </div>
          </div>

          <div class="px-4">
            <button
              class="bg-rose-600 text-white active:bg-rose-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
