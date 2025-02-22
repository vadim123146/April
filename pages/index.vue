<template>
  <div>
    <SearchBar @search="handleSearch" />
    <button @click="toggleViewMode">{{ viewMode === 'grid-view' ? 'Список' : 'Плитка' }}</button>
    <ProductList :products="filteredProducts" :viewMode="viewMode" />
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Назад</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Вперед</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '@/store/product';
import axios from 'axios';
import SearchBar from '@/components/SearchBar.vue';
import ProductList from '@/components/ProductList.vue';
import { Product } from '@/types';

const productStore = useProductStore();
const products = ref<Product[]>([]);
const searchQuery = ref('');
const viewMode = ref('grid-view');
const currentPage = ref(1);
const itemsPerPage = 10;

const filteredProducts = computed(() => {
  return products.value
    .filter((product) =>
      Object.values(product)
        .some((value) =>
          String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    )
    .slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage);
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
  currentPage.value = 1;
};

const toggleViewMode = () => {
  viewMode.value = viewMode.value === 'grid-view' ? 'list-view' : 'grid-view';
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(async () => {
  const response = await axios.get('https://dummyjson.com/products');
  products.value = response.data.products;
  productStore.setProducts(products.value);
});
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    margin: 0 0.5rem;
  }
}
</style>
