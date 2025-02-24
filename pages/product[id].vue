<template>
  <div v-if="product">
  {{product}}
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>Цвет: {{ product.color }}</p>
    <p>Размер: {{ product.size }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/product';
import { computed } from 'vue';

const route = useRoute();
const productStore = useProductStore();
const productId = route.params.id;

const product = computed(() => {
  return productStore.getProductById(productId as string);
});
</script>
