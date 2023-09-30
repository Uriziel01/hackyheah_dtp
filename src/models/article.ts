import { writable } from 'svelte/store';
import { tag } from "./tag.ts"

export const article = writable({
  title: '',
  date: null,
  tags: [tag],
});