<script>
	export let answer = '';
</script>

{#if answer === 'Disagree'}
	<span class="badge bg-primary">{answer}</span>
{:else if answer === 'No opionion'}
	<span class="badge bg-secondary">{answer}</span>
{:else}
	<span class="badge bg-success">{answer}</span>
{/if}

<style>
</style>
