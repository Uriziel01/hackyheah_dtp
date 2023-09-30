import { writable } from 'svelte/store';
import { tag } from "./tag.js"
import { area_of_interest } from "./area_of_interest.ts"

export const party = writable({
  name: '',
  slug: null,
  logo: '',
  areas_of_interest: [area_of_interest],
});