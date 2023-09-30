<!-- Header.svelte -->
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
			  <a class="nav-link active no-outline text-white" aria-current="page" href="#">Home</a>
			</li>
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link no-outline text-white" href="#">Features</a>
			</li>
			<li class="nav-item">
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a class="nav-link no-outline text-white" href="#">Pricing</a>
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

	/* Dodaj styl dla przycisku custom-toggler */
	.custom-toggler {
	  background-color: white; /* Zmień kolor na biały */
	}

	/* Dodaj klasę no-outline */
	.no-outline {
	  outline: none !important;
	}
  </style>
