import { defineStore } from 'pinia';
import { supabase } from '~/supabase';

let workoutsLs;

watchEffect(() => {
  if (window !== 'undefined') {
    const items = JSON.parse(localStorage.getItem('favoriteExercises'));
    if (!items) {
      localStorage.setItem('favoriteExercises', JSON.stringify([]));
      workoutsLs = items;
    }
  }
  return workoutsLs;
}, {});

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      darkTheme: false,
      favoritesExercises: [],
      user: null,
    };
  },
  getters: {},
  actions: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
    },

    loggedinUser(user) {
      this.user = user;
    },

    async logout() {
      try {
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
        this.user = null;
        useRouter().push('/register');
      } catch (error) {
        console.log(error);
      }
    },

    addWorkout(details) {
      const existingIndex = this.favoritesExercises.find(
        (workout) => workout.id === details.id
      );

      if (!existingIndex) {
        this.favoritesExercises.push(details);
        localStorage.setItem(
          'favoriteExercises',
          JSON.stringify(this.favoritesExercises)
        );
      }
    },
  },
});
