import { writable } from 'svelte/store';
import { tag } from "./tag.js"

export const area_of_interest = writable({
  title: '',
  icon: '',
});