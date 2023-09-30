import { writable } from 'svelte/store';
import { tag } from "./tag.js"

export const voter = writable({
  id: null,
  date: null,
  tags: [tag],
});