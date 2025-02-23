<template>
  <div class="product-card">
    <img v-if="product.image" :src="product.image" :alt="product.title" class="product-image" />
	<img v-else src="https://t-bike.ru/images/products/no-image.jpg" :alt="product.title" class="product-image" />
	<h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p v-if="product.color!=null">Цвет: {{ product.color }}</p>
	<p v-else>Цвет: не указан</p>
    <p v-if="product.size!=null">Размер: {{ product.size }}</p>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types';

defineProps<{ product: Product }>();
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
}

.product-image {
  max-width: 14%;
  height: auto;
  margin-bottom: 0.5rem;
}
</style>

