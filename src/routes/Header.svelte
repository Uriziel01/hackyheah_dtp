<script>
	import { onMount } from 'svelte';
	import { appstate } from '../state.ts'
	import { get } from 'svelte/store'
	import { page } from '$app/stores';
	console.log({ page });
	onMount(() => {
			var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
				return new bootstrap.Tooltip(tooltipTriggerEl)
			})
	});
</script>

<!-- Header.svelte -->
<nav class="navbar navbar-expand-lg">
	<div class="container-fluid">
	<a class="navbar-brand me-2" href="/">
		<img src="logo_small.png" height="26" alt="Application logo" loading="lazy" style="margin-top: -1px;">
	</a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		{#if $appstate.is_voter}
		<ul class="navbar-nav ms-auto">
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/articles" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Acticles"><i class="fa-regular fa-newspaper"></i><span class="d-sm-inline d-md-none m-1">Acticles</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/candidates" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Candidates"><i class="fa-solid fa-person-rays"></i><span class="d-sm-inline d-md-none m-1">Candidates</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/maps" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Maps"><i class="fa-solid fa-location-dot"></i><span class="d-sm-inline d-md-none m-1">Maps</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/calendar" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Calendar"><i class="fa-regular fa-calendar"></i><span class="d-sm-inline d-md-none m-1">Calendar</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/quiz" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Quiz"><i class="fa-solid fa-question"></i><span class="d-sm-inline d-md-none m-1">Quiz</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/voter_helper" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voter helper"><i class="fa-regular fa-comment-dots"></i><span class="d-sm-inline d-md-none m-1">Voter Helper</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/my_vote" data-bs-toggle="tooltip" data-bs-placement="bottom" title="My vote"><i class="fa-solid fa-check-to-slot"></i><span class="d-sm-inline d-md-none m-1">My Vote</span></a>
			</li>
			<li class="nav-item">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link no-outline text-white" href="/rally_search" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Rally finder"><i class="fa-solid fa-person-walking-dashed-line-arrow-right"></i><span class="d-sm-inline d-md-none m-1">Rally finder</span></a>
			</li>
			<li class="nav-item dropdown">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Electoral process
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<li><a class="dropdown-item" href="/democracy">Democracy</a></li>
					<li><a class="dropdown-item" href="/elections">Elections</a></li>
					<li><a class="dropdown-item" href="/goverment">Goverment</a></li>
				</ul>
			</li>
		</ul>
		{/if}
	</div>
	</div>
</nav>
  <style>
	.nav-item .nav-link .fa-solid, .nav-item .nav-link .fa-regular {
		font-size:22px
	}
  </style>
