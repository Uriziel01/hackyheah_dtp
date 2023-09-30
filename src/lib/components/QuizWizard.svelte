<script>
	import QuizBadge from './QuizBadge.svelte';

	export let questionIndex = 0;
	export let quizQuestion;
	export let quizResult = false;

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

	const partiesResultsArray = [];
	const resultsArray = [];
	const quizQuestions = [];
	quizQuestions.push({
		id: 1,
		text: 'Some question no 1 ?'
	});
	quizQuestions.push({
		id: 2,
		text: 'Some question no 2 ?'
	});
	quizQuestions.push({
		id: 3,
		text: 'Some question no 3 ?'
	});
	quizQuestions.push({
		id: 4,
		text: 'Some question no 4 ?'
	});
	quizQuestions.push({
		id: 5,
		text: 'Some question no 5 ?'
	});

	function askAQuestion() {
		quizQuestion = quizQuestions[questionIndex];
		questionIndex++;
		if (quizQuestion) {
		} else {
			quizResult = true;
		}
	}

	function answeredDisagree() {
		resultsArray.push({ id: quizQuestion.id, question: quizQuestion.text, answer: 'Disagree' });
		askAQuestion();
	}

	function answeredNoOpionion() {
		resultsArray.push({
			id: quizQuestion.id,
			question: quizQuestion.text,
			answer: 'No opionion'
		});
		askAQuestion();
	}

	function answeredAgree() {
		resultsArray.push({ id: quizQuestion.id, question: quizQuestion.text, answer: 'Agree' });
		askAQuestion();
	}

	function randomisePartiesAnswer() {
		politicalParties.forEach((party) => {
			quizQuestions.forEach((question) => {
				const random = Math.floor(Math.random() * 3);

				let answer;
				switch (random) {
					case 0:
						answer = 'Disagree';
						break;
					case 1:
						answer = 'No opionion';
						break;
					default:
						answer = 'Agree';
				}

				partiesResultsArray.push({
					partyId: party.id,
					questionsId: question.id,
					question: question.text,
					answer: answer
				});
			});
		});

		console.log(partiesResultsArray);
	}

	randomisePartiesAnswer();

	askAQuestion();
</script>

{#if quizQuestion}
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col">
				<div class="card">
					<div class="card-body">
						<p id="question" class="text-uppercase">
							{quizQuestion.text}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container mt-5">
		<div class="row justify-content-evenly">
			<div class="col-4 text-center">
				<button type="button" class="btn btn-primary" on:click={answeredDisagree}>Disagree</button>
			</div>
			<div class="col-4 text-center">
				<button type="button" class="btn btn-secondary" on:click={answeredNoOpionion}>
					No opionion
				</button>
			</div>
			<div class="col-4 text-center">
				<button type="button" class="btn btn-success" on:click={answeredAgree}>Agree</button>
			</div>
		</div>
	</div>
{:else if quizResult}
	<div class="container">
		<div class="row">
			<div class="col-2">Question</div>
			<div class="col-2">Your answer</div>

			{#each politicalParties as party}
				<div class="col-1">
					{party.name}
				</div>
			{/each}
		</div>

		{#each resultsArray as result}
			<div class="row">
				<div class="col-2">{result.question}</div>
				<div class="col-2">
					<QuizBadge answer={result.answer} />
				</div>

				{#each partiesResultsArray as partyResult}
					{#if partyResult.questionsId === result.id}
						<div class="col-1">
							<QuizBadge answer={partyResult.answer} />
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
{/if}

<style>
</style>
