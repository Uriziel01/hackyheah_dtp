<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { appstate } from '../state.ts'
	import { get } from 'svelte/store'
</script>
  
  <main class="container-fluid">
	<div class="row text-center">
		<PageHeader/>
		<div class="col" style="margin-top: -100px;">
			<span class="h1">LEMUR VOTE</span>
			<div>We empower the youth to make decisions and take actions</div>
		</div>
	</div>
	{#if !$appstate.is_candidate && !$appstate.is_voter}
		<div class="row">
			<div class="col-md-6 text-center">
				<div role="button" tabindex="0" class="card mb-4 box-shadow h-100 pt-3 mt-3"
				style="background-color: rgba(255,255,255,0.1);"
				on:click={() => $appstate.is_voter = true}>
					<h1>I'm a voter</h1>
				</div>
			</div>
			<div class="col-md-6 text-center">
				<div role="button" tabindex="0" class="card mb-4 box-shadow h-100 pt-3 mt-3"
				style="background-color: rgba(255,255,255,0.1);"
				on:click={() => $appstate.is_candidate = true}>
					<h1>I'm a candidate</h1>
				</div>
			</div>
		</div>
	{/if}
	{#if $appstate.is_candidate}
	<div class="my-3 text-center">
		Here you would find multiple tools to maintain and promote your campaign, create articles, organize rallies, declare your values and opinions on popular topics.
		<div>
			<button class="btn btn-primary" on:click={() => $appstate.is_candidate = false}>Go back</button>
		</div>
	</div>
	{/if}
  </main>