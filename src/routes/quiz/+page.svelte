<script>
	import QuizWizard from '$lib/components/QuizWizard.svelte';
	export let data;
</script>

<h1>Quiz helper panel</h1>

<QuizWizard quizQuestions={data.questions} politicalParties={data.parties} />
