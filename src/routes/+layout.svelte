<script>
	import '../app.scss'
	import Header from './Header.svelte'
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		Footer
	</footer>
</div>

<style>
</style>
