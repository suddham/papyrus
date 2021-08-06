<template>
  <div class="bg-gray-50">
    <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center
        lg:justify-between"
    >
      <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl
          sm:leading-10"
      >
        Login Page
        <br />
        <span class="text-indigo-600">Use Your Duo Login or Use App Defaults</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <button
              @click.prevent="login"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium
              leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border
              border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
            Login As Suddha
          </button>

          <BackHomeButton/>
        </div>
      </div>

    </div>
    <pre>
      {{duo}}
    </pre>
  </div>
</template>

<script>
import BackHomeButton from '@components/BackHomeButton.vue';
import Duolingo from '@/utils/duo-api-client';

export default {
    components: {
        BackHomeButton
    },
    data() {
        return {
            users: null,
            duo: null
        };
    },
    methods: {
        login() {
            this.duo = new Duolingo({ userName: process.env.VUE_APP_ROOT_USER, password: process.env.VUE_APP_ROOT_PASSWORD });

            this.duo.logIn()
                .then((result) => {
                    console.log('login success', result);
                    this.duo.getData()
                        .then((data) => {
                            console.log('getData success', data);
                            // use returned data or use userData on duo instance
                            console.log(this.duo.userData);
                            console.log(this.duo.getUserData());
                            console.log(this.duo.getVocabulary());
                        })
                        .catch((e) => {
                            // handle error
                            console.error(e);
                        });
                })
                .catch();
        }
    }
};
</script>

<style scoped>

</style>
