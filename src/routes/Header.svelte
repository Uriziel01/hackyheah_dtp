<!-- Header.svelte -->
<script>
	let activeLink = null; // Zmienna przechowująca aktywny element
	// Funkcja do obsługi kliknięcia na elemencie nawigacji
	function setActive(link) {
    activeLink = link;
  }
  </script>

<header class="header">
	<div class="logo">
	  <img src="logo.jpg" alt="Logo" />
	</div>
	<nav class="navbar navbar-expand-lg">
	  <div class="container-fluid">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
		  <ul class="navbar-nav">
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link {activeLink === 'home' ? 'active' : ''} no-outline text-white" on:click={() => setActive('home')} href="/">Home</a>
			</li>
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link {activeLink === 'maps' ? 'active' : ''} no-outline text-white" on:click={() => setActive('maps')} href="/maps">Maps</a>
			</li>
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link {activeLink === 'calendar' ? 'active' : ''} no-outline text-white" on:click={() => setActive('calendar')} href="/calendar">Meeting Calendar</a>
			</li>
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link {activeLink === 'quiz' ? 'active' : ''} no-outline text-white" on:click={() => setActive('quiz')} href="/quiz">Quiz</a>
			</li>
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link no-outline text-white" href="/voter_helper">Candidates</a>
			</li>
    	    <li class="nav-item dropdown">
			  	<!-- svelte-ignore a11y-invalid-attribute -->
				  <a class="nav-link dropdown-toggle {activeLink === 'electoral' ? 'active' : ''} text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" on:click={() => setActive('electoral')}>
				  Electoral process
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<li><a class="dropdown-item" href="/democracy">Democracy</a></li>
					<li><a class="dropdown-item" href="/elections">Elections</a></li>
					<li><a class="dropdown-item" href="/goverment">Goverment</a></li>
				</ul>
			</li>
			<li class="nav-item">
				<a class="nav-link {activeLink === 'voting' ? 'active' : ''} no-outline text-white" href="/voting" on:click={() => setActive('voting')}>Voting</a>
			</li>
			<li class="nav-item dropdown">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <ul class="dropdown-menu">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<li><a class="dropdown-item no-outline" href="#">Action</a></li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<li><a class="dropdown-item no-outline" href="#">Another action</a></li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<li><a class="dropdown-item no-outline" href="#">Something else here</a></li>
			  </ul>
			</li>
		  </ul>
		</div>
	  </div>
	</nav>
  </header>




  <style>
	.header {
	  display: flex;
	  align-items: center;
	  padding: 0.5rem;
	  background-color: #333;
	}

	.logo img {
	  max-width: 60px;
	  margin-right: 20px;
	}

	.custom-toggler {
	  background-color: white;
	}

	.no-outline {
	  outline: none !important;
	}

.nav-link.active {
  text-decoration: underline;
  font-weight: bold; 
}



  </style>
