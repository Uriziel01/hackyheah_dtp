<script>
	import Card from "$lib/components/Card.svelte";

	export let data;
</script>

<div class="container-fluid">
	<div class="row">
		{#each data?.parties as party, i}
			<div class="col-md-3 mt-3">
				<Card title={party.name} />
			</div>
		{/each}	
	</div>
</div>
