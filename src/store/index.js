// store.js

import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
