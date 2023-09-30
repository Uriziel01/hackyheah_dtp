import { writable } from 'svelte/store';

export const tag = writable({
  name: '',
  icon: null,
});