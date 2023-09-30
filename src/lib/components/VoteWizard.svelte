<script>
	export let wizardQuestion = '';

	export let response = '';
	export let wizardEnded = false;
	export let finalResponseOK = 'Everything is correct. Please go to your Election commission.';
	export let finalResponseVotingWithPermission =
		'You can vote in other Election commission but firstly you have to make a request to join the voter list eg. via webpage www.obywatel.gov.pl.';
	export let finalResponseTooYouth = 'You are to youth to vote';
	export let finalResponseNotAllowedToVoteLawReason =
		'You are are not allowed to vote with a law reason';
	export let finalResponseTooFarFromCommission =
		'Sorry are not able to help you. Please consider to be at place where voting is possible e.g. your place of residence.';

	const votingWizard = [];

	votingWizard.push({
		id: 1,
		question: 'Arey you at least 18 yesars old?',
		routeYes: 2,
		routeNo: 100
	});
	votingWizard.push({
		id: 2,
		question: 'Are you incapacitated person?',
		routeYes: 200,
		routeNo: 3
	});
	votingWizard.push({
		id: 3,
		question:
			'Are you a person convicted by a final court decision deprivation of public rights or voting rights?',
		routeYes: 200,
		routeNo: 4
	});
	votingWizard.push({
		id: 4,
		question: 'Will you be present during the elections in your place of residence?',
		routeYes: 6,
		routeNo: 5
	});
	votingWizard.push({
		id: 5,
		question:
			'Will you be able to vote outside your place of residence, e.g. another commune, Polish consulate, Polish embassy?',
		routeYes: 7,
		routeNo: 300
	});

	function askAQuestion(questionIndex) {
		wizardQuestion = votingWizard[questionIndex];
	}

	function answeredYes() {
		validateRoute(wizardQuestion.routeYes);
		if (!wizardEnded) {
			console.log(wizardQuestion.routeYes);

			wizardQuestion = votingWizard.filter((q) => {
				return q.id === wizardQuestion.routeYes;
			})[0];
		}
	}

	function answeredNo() {
		validateRoute(wizardQuestion.routeNo);
		if (!wizardEnded) {
			wizardQuestion = votingWizard.filter((q) => {
				return q.id === wizardQuestion.routeNo;
			})[0];
        }
	}

	function validateRoute(routeTo) {
		wizardEnded = true;

		switch (routeTo) {
			case 6:
				response = finalResponseOK;
				break;
			case 7:
				response = finalResponseVotingWithPermission;
				break;
			case 100:
				response = finalResponseTooYouth;
				break;
			case 200:
				response = finalResponseNotAllowedToVoteLawReason;
				break;
			case 300:
				response = finalResponseTooFarFromCommission;
				break;
			case 400:
			default:
				wizardEnded = false;
		}
	}

	askAQuestion(0);
</script>

{#if wizardEnded}
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col">
				<div class="card">
					<div class="card-body">
						<p id="question" class="text-uppercase">
							{response}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col">
				{#if wizardQuestion}
					<div class="card">
						<div class="card-body">
							<p id="question" class="text-uppercase">
								{wizardQuestion.question}
							</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="container mt-5">
		<div class="row justify-content-evenly">
			<div class="col-4 text-center">
				<button type="button" class="btn btn-secondary" on:click={answeredYes}>Yes</button>
			</div>
			<div class="col-4 text-center">
				<button type="button" class="btn btn-success" on:click={answeredNo}>No</button>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
