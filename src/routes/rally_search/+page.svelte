<script>
	import SvelteTable from 'svelte-table';

	const rows = [
		{ party: 'Pizza Friends', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'Promise And Conquer', city: 'Gorzów Wlkp.', voivodeship: 'lubuskie' },
		{ party: 'Do Whatever You Want', city: 'Wrocław', voivodeship: 'dolnośląskie' },
		{ party: 'We Are The Champions', city: 'Gorzów Wlkp.', voivodeship: 'lubuskie' },
		{ party: 'Pizza Friends', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'Promise And Conquer', city: 'Warszawa', voivodeship: 'mazowieckie' },
		{ party: 'Do Whatever You Want', city: 'Warszawa', voivodeship: 'mazowieckie' },
		{ party: 'We Are The Champions', city: 'Gubin', voivodeship: 'lubuskie' },
		{ party: 'Pizza Friends', city: 'Zielona Góra', voivodeship: 'lubuskie' },
		{ party: 'Promise And Conquer', city: 'Gdańsk', voivodeship: 'pomorskie' }
	];

	const columns = [
		{
			key: 'party',
			title: 'party',
			value: (v) => v.party,
			renderValue: (v) => v.party,
			sortable: true,
			filterOptions: [
				'Pizza Friends',
				'Promise And Conquer',
				'Do Whatever You Want',
				'We Are The Champions',
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
