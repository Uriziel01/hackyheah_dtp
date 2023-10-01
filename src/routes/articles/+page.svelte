<script>
	import Card from "$lib/components/Card.svelte";

	export let data;
</script>
<div class="container-fluid">
	<div class="row">
		{#each data?.articles as article, i}
			<div class="col-md-6 mt-3">
				<Card title={article.title} description={article.content} />
			</div>
		{/each}	
	</div>
</div>
