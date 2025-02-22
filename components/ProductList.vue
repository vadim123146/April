<template>
  <div :class="['product-list', viewMode]">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types';
import ProductCard from './ProductCard.vue';

defineProps<{ products: Product[]; viewMode: string }>();
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;

  &.grid-view {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  &.list-view {
    flex-direction: column;
  }
}
</style>

