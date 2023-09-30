<script>
	import expense_map from '$lib/images/expense_map.png';
	import income_map from '$lib/images/income_map.png';
</script>

<h2>Polish government expense 1145.2 billion PLN</h2>

<div class="container">
	<div class="row">
		<div class="col-4">
			<ul class="list-group list-group-flush">
				<li class="list-group-item fw-bold">Categories</li>
				<li class="list-group-item">Pensions 327 billion</li>
				<li class="list-group-item">Security 43.7 billion</li>
				<li class="list-group-item">Sports 8.5 billion</li>
				<li class="list-group-item">Local governments 24.9 billion</li>
				<li class="list-group-item">Economy 15.8 billion</li>
				<li class="list-group-item">Environment 33.5 billion</li>
				<li class="list-group-item">Culture 16.9 billion</li>
				<li class="list-group-item">Defense 49.3 billion</li>
				<li class="list-group-item">Finance 72.9 billion</li>
				<li class="list-group-item">Agriculture 15.5 billion</li>
				<li class="list-group-item">Science 27.3 billion</li>
				<li class="list-group-item">Aid 120.2 billion</li>
				<li class="list-group-item">Institutions 20.5 billion</li>
				<li class="list-group-item">Education 97.8 billion</li>
				<li class="list-group-item">Health 148.2 billion</li>
				<li class="list-group-item">Infrastructure 96.3 billion</li>
				<li class="list-group-item">Work 26.9 billion</li>
			</ul>
		</div>

		<div class="col-4">
			<img src={expense_map} alt="Polish government expense map in 2021" />
		</div>
	</div>
</div>

<h2>Polish government income 1033.4 billion PLN</h2>

<div class="container">
	<div class="row">
		<div class="col-4">
			<ul class="list-group list-group-flush">
				<li class="list-group-item fw-bold">Categories</li>
				<li class="list-group-item">Other income 125.9 billion</li>
				<li class="list-group-item">Labor taxes 415.8 billion</li>
				<li class="list-group-item">PIT according to the tax scale 83.8 billion</li>
				<li class="list-group-item">Business related taxes 67.8 billion</li>
				<li class="list-group-item">Estate taxes 32.6 billion</li>
				<li class="list-group-item">Taxes on consumption 307.5 billion</li>
			</ul>
		</div>

		<div class="col-4">
			<img src={income_map} alt="Polish government income map in 2021" />
		</div>
	</div>
</div>

<div class="mt-5">
	<h2>Statistics</h2>
</div>

<div class="progress" style="height: 20px;">
	<div class="progress-bar" role="progressbar" style="width: 53%">Expenses 53%</div>
</div>
<div class="progress" style="height: 20px;">
	<div class="progress-bar bg-success" role="progressbar" style="width: 47%">Incomes 47%</div>
</div>
