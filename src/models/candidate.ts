import { writable } from 'svelte/store';
import { area_of_interest } from "./area_of_interest.ts"

export const article = writable({
  name: '',
  surname: '',
  content: '',
  areas_of_interest: [area_of_interest],
});