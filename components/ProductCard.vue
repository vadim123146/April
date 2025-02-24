<template>
  <div class="product-card" @click="openModal">
    <img v-if="product.image" :src="product.image" :alt="product.title" class="product-image" />
    <img v-else src="https://t-bike.ru/images/products/no-image.jpg" :alt="product.title" class="product-image" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p v-if="product.color != null">Цвет: {{ product.color }}</p>
    <p v-else>Цвет: не указан</p>
    <p v-if="product.size != null">Размер: {{ product.size }}</p>
  </div>
  <ProductModal :product="product" :show="showModal" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Product } from '@/types';
import ProductModal from '@/components/ProductModal.vue';

const props = defineProps<{ product: Product }>();
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
}

.product-image {
  max-width: 14%;
  height: auto;
  margin-bottom: 0.5rem;
}
</style>
