import { defineStore } from 'pinia';
import { Product } from '@/types';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    setProducts(products: Product[]) {
      this.products = products;
    },
    getProductById(id: string) {
      return this.products.find((product) => product.id === id);
    },
  },
});
