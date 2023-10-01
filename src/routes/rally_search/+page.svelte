<script>
	import SvelteTable from 'svelte-table';

	const rows = [
		{ party: 'political party #1', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'political party #2', city: 'Gorzów Wlkp.', voivodeship: 'lubuskie' },
		{ party: 'political party #3', city: 'Wrocław', voivodeship: 'dolnośląskie' },
		{ party: 'political party #4', city: 'Gorzów Wlkp.', voivodeship: 'lubuskie' },
		{ party: 'political party #5', city: 'Gorzów Wlkp.', voivodeship: 'lubuskie' },
		{ party: 'political party #6', city: 'Wrocław', voivodeship: 'dolnośląskie' },
		{ party: 'political party #7', city: 'Wrocław', voivodeship: 'dolnośląskie' },
		{ party: 'political party #8', city: 'Warszawa', voivodeship: 'mazowieckie' },
		{ party: 'political party #9', city: 'Wrocław', voivodeship: 'dolnośląskie' },
		{ party: 'political party #1', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'political party #2', city: 'Warszawa', voivodeship: 'mazowieckie' },
		{ party: 'political party #3', city: 'Warszawa', voivodeship: 'mazowieckie' },
		{ party: 'political party #4', city: 'Gubin', voivodeship: 'lubuskie' },
		{ party: 'political party #5', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'political party #6', city: 'Gubin', voivodeship: 'lubuskie' },
		{ party: 'political party #7', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'political party #8', city: 'Gdańsk', voivodeship: 'pomorskie' },
		{ party: 'political party #1', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'political party #2', city: 'Gdańsk', voivodeship: 'pomorskie' }
	];

	const columns = [
		{
			key: 'party',
			title: 'party',
			value: (v) => v.party,
			renderValue: (v) => v.party,
			sortable: true,
			filterOptions: [
				'political party #1',
				'political party #2',
				'political party #3',
				'political party #4',
				'political party #5',
				'political party #6',
				'political party #7',
				'political party #8',
				'political party #9'
			]
		},
		{
			key: 'city',
			title: 'city',
			value: (v) => v.city,
			renderValue: (v) => v.city,
			sortable: true,
			filterOptions: ['Zielona Góra', 'Gdańsk', 'Gubin']
		},
		{
			key: 'voivodeship',
			title: 'voivodeship',
			value: (v) => v.voivodeship,
			renderValue: (v) => v.voivodeship,
			sortable: true,
			filterOptions: ['lubuskie', 'dolnośląskie', 'mazowieckie']
		}
	];
</script>

<SvelteTable {columns} {rows} />
