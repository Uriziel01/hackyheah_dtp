<script>
	import Calendar from '@event-calendar/core';
	import DayGrid from '@event-calendar/day-grid';
	import '@event-calendar/core/index.css';

	let plugins = [DayGrid];
	let options = {
		view: 'dayGridMonth',
		firstDay: 1,
		events: [
			{
				id: 'id2',
				allDay: false,
				start: new Date(2023, 8, 23, 15, 0, 0),
				end: new Date(2023, 8, 23, 20, 0, 0),
				title: 'Pizza Friends Party - family picnic',
				editable: false,
				display: 'auto'
			},
			{
				id: 'id1',
				allDay: false,
				start: new Date(2023, 9, 14, 15, 0, 0),
				end: new Date(2023, 9, 14, 20, 0, 0),
				title: 'Do Whatever You Want - free beer',
				editable: false,
				display: 'auto'
			},
			{
				id: 'id3',
				allDay: false,
				start: new Date(2023, 10, 1, 15, 0, 0),
				end: new Date(2023, 10, 1, 20, 0, 0),
				title: 'We Are The Champions - HackYeah',
				editable: false,
				display: 'auto'
			}
		]
	};
</script>

<Calendar {plugins} {options} />
