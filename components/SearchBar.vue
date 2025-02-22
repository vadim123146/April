<template>
  <input type="text" v-model="searchQuery" placeholder="Поиск..." />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const searchQuery = ref('');
const emit = defineEmits<{ (e: 'search', query: string): void }>();

watch(searchQuery, (query) => {
  emit('search', query);
});
</script>

<style scoped lang="scss">
input {
  width: 96%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
