<script setup>
import TheHeader from './components/TheHeader.vue';
import {useCounterStore} from './stores/counter';

const counter  = reactive(useCounterStore())

 
</script>

<template>
     
    <TheHeader></TheHeader>
    <div class="flex justify-center items-center gap-20px py-30px text-20px">
      {{ counter.count }}
      <button class="bg-gray-400 p-5px" @click="counter.increment"> increment</button>
    </div>

</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
