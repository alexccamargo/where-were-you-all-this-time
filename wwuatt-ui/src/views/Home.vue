<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      age="12"
    />
    <hello-debora
      getWhateverIhaveHere="Isso era pra ser um teste "
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HelloDebora from '@/components/HelloDebora.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    HelloDebora,
  },
};
</script>
