<script setup>
import TheHeader from './components/TheHeader.vue'
import { useCounterStore } from './stores/counter'

const counter = reactive(useCounterStore())

</script>

<template>
  <TheHeader />
  <div class="flex justify-center items-center gap-20px py-30px text-20px">
    {{ counter.count }}
    <button class="bg-gray-400 p-5px" @click="counter.increment">
      increment
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>
