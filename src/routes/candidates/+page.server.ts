import { createPool } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

	export async function load() {
	const db = createPool();
	const startTime = Date.now();
	const { rows: parties } = await db.query('SELECT * FROM parties');
	return {parties: parties};
}