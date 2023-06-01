<script setup>
import { supabase } from './supabase';
import { useAuthStore } from '~/stores/user';

const session = ref();
const store = useAuthStore();

onMounted(() => {
  supabase.auth
    .getSession()
    .then(({ data }) => {
      session.value = data.session;
      store.loggedinUser(data.session.user);
      if (!data.session || store.user === null) {
        useRouter().push('/register');
      }
    })
    .catch((error) => console.log(error.message));

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<template>
  <VitePwaManifest />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
