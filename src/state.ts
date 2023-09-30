import { writable, get } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid';
import { persisted } from 'svelte-local-storage-store'


export const appstate = persisted('appstate', {
    user_id: uuidv4(),
    is_dark_theme: false,
    is_high_contrast_mode: false,
    font_size:1
});
// export const user_id = storable('user_id', uuidv4());
// export const is_dark_theme = storable('is_dark_theme', false);
// export const is_high_contrast_mode = storable('is_high_contrast_mode', false);
// export const font_size = storable('font_size', 1);