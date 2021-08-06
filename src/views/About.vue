<template>
  <div class="bg-gray-50">
    <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        About Page
        <br />
        <span class="text-indigo-600">Vite 2.x + Vue 3.x + Tailwind 2.x</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <BackHomeButton/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackHomeButton from '@components/BackHomeButton.vue';

export default {
    name: 'About',
    components: {
        BackHomeButton,
    },
};
</script>
