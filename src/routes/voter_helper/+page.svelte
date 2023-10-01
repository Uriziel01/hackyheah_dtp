<script>
	import Card from '$lib/components/Card.svelte';

	const politicalParties = [
		{ id: 1, name: 'political party #1' },
		{ id: 2, name: 'political party #2' },
		{ id: 3, name: 'political party #3' },
		{ id: 4, name: 'political party #4' },
		{ id: 5, name: 'political party #5' },
		{ id: 6, name: 'political party #6' },
		{ id: 7, name: 'political party #7' },
		{ id: 8, name: 'political party #8' }
	];

	const partyCandidates = [
		{
			id: 1,
			name: 'political party #1',
			divorced: true,
			familly: true,
			lgtb: true,
			university: true
		},
		{
			id: 2,
			name: 'political party #2',
			divorced: true,
			familly: true,
			lgtb: true,
			university: false
		},
		{
			id: 3,
			name: 'political party #3',
			divorced: true,
			familly: true,
			lgtb: false,
			university: false
		},
		{
			id: 4,
			name: 'political party #4',
			divorced: true,
			familly: false,
			lgtb: false,
			university: false
		},
		{
			id: 5,
			name: 'political party #5',
			divorced: false,
			familly: false,
			lgtb: false,
			university: false
		},
		{
			id: 6,
			name: 'political party #6',
			divorced: true,
			familly: true,
			lgtb: false,
			university: false
		},
		{
			id: 7,
			name: 'political party #7',
			divorced: false,
			familly: true,
			lgtb: false,
			university: false
		},
		{
			id: 8,
			name: 'political party #8',
			divorced: true,
			familly: true,
			lgtb: false,
			university: false
		}
	];

	function sortCandidates() {
		const divorced = document.getElementById('divorced').checked;
		const university = document.getElementById('university').checked;
		const familly = document.getElementById('familly').checked;
		const lgtb = document.getElementById('lgtb').checked;

		selectedCandidates = partyCandidates.filter((candidate) => {
			return (
				(!divorced || candidate.divorced === divorced) &&
				(!familly || candidate.familly === familly) &&
				(!university || candidate.university === university) &&
				(!lgtb || candidate.lgtb === lgtb)
			);
		});
	}

	let selectedCandidates = partyCandidates;
</script>

<h1>candidates</h1>

<ul class="list-group mb-5">
	<li class="list-group-item">
		<input id="divorced" class="form-check-input me-1" type="checkbox" on:click={sortCandidates} />
		Divorced
	</li>
	<li class="list-group-item">
		<input
			id="university"
			class="form-check-input me-1"
			type="checkbox"
			on:click={sortCandidates}
		/>
		University graduated
	</li>
	<li class="list-group-item">
		<input id="familly" class="form-check-input me-1" type="checkbox" on:click={sortCandidates} />
		Has familly
	</li>
	<li class="list-group-item">
		<input id="lgtb" class="form-check-input me-1" type="checkbox" on:click={sortCandidates} />
		Belongs to sexual minority
	</li>
</ul>

{#each selectedCandidates as candidate}
	<Card
		title={candidate.name}
		description={politicalParties[Math.floor(Math.random() * politicalParties.length)].name}
	/>
{/each}
