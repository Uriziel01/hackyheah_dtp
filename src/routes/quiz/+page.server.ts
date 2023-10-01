import { createPool } from '@vercel/postgres';

export async function load() {
	const db = createPool();
	const startTime = Date.now();

	try {
		const { rows: questions } = await db.query('SELECT * FROM questions');
		const { rows: parties } = await db.query('SELECT * FROM parties');

		const duration = Date.now() - startTime;

		return {
			questions: questions,
			parties: parties,
			duration: duration
		};
	} catch (error) {
		if (error?.message === `relation "questions" does not exist`) {
			console.log('Table does not exist, creating and seeding it with dummy data now...');
			// Table is not created yet
			const { rows: questions } = await db.query('SELECT * FROM questions');
			const duration = Date.now() - startTime;
			return {
				questions: questions,
				parties: parties,
				duration: duration
			};
		} else {
			throw error;
		}
	}
}
