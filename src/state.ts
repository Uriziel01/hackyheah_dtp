import { writable, get } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid';
import { persisted } from 'svelte-local-storage-store'

export const appstate = persisted('appstate', {
    user_id: uuidv4(),
    is_voter: false,
    is_candidate: false,
    is_dark_theme: false,
    is_high_contrast_mode: false,
    font_size:1
});