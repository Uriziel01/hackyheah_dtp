<script>
	import { appstate } from '../../state.ts'
	import { get } from 'svelte/store'

	const onInput = e => ($appstate.user_id = e.target.value);

	export async function load() {
	}
</script>
  
<main class="relative flex flex-col items-center justify-center min-h-screen py-10">
	localstorage test {$appstate.user_id}
	<input bind:value={$appstate.user_id} on:input={onInput} />
</main>