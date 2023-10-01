import { createPool } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

	export async function load() {
	const db = createPool();
	const startTime = Date.now();
	const { rows: articles } = await db.query('SELECT * FROM articles');
	return {articles: articles};
}