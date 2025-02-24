<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ product.title }}</h2>
      <img v-if="product.image" :src="product.image" :alt="product.title" class="modal-image" />
      <img v-else src="https://50koles.ru/image/cache/catalog/gruzovye_shiny/ge-catalog-nofoto-cat-1000x1000.png" :alt="product.title" class="modal-image" />
      <p>{{ product.description }}</p>
      <p>Цвет: {{ product.color || 'не указан' }}</p>
      <p>Размер: {{ product.size || 'не указан' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types';

const props = defineProps<{
  product: Product;
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const closeModal = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-image {
  max-width: 34%;
  height: 34%;
}
</style>
