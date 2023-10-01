import { createPool } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

async function seed(db: any) {
	const createTableUsers = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      image VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
	const createTableArticles = await sql`
	CREATE TABLE IF NOT EXISTS articles (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255) NOT NULL,
		content TEXT,
		date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
		tags JSON
	  );`;
	const createTableTags = await sql`
	  CREATE TABLE IF NOT EXISTS tags (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		icon VARCHAR(255) NOT NULL
	  );`;
	console.log(`Created "users, articles, tags" table`);
	// if exists -> bool false run script users

	await sql`TRUNCATE TABLE users`;
	await sql`TRUNCATE TABLE articles`;
	await sql`TRUNCATE TABLE tags`;

	const users = await Promise.all([
		sql`
          INSERT INTO users (name, email, image)
          VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
		sql`
          INSERT INTO users (name, email, image)
          VALUES ('Lee Robinson', 'lee@vercel.com', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
		sql`
          INSERT INTO users (name, email, image)
          VALUES ('Steven Tey', 'stey@vercel.com', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `
	]);
	console.log(`Seeded ${users.length} users`);
	await Promise.all([
		sql`INSERT INTO tags(name, icon)
         VALUES('women', 'fa-venus')`,
		sql`INSERT INTO tags(name, icon)
         VALUES('poll', 'fa-square-poll-vertical')`
	]);
	console.log(`Added articles`);

	const { rows: tags } = await db.query('SELECT * FROM tags');
	console.log(`tags:${JSON.stringify(tags)}`)

	const womenTags = tags.filter(row => row.name === 'women');
	const pollTags = tags.filter(row => row.name === 'poll');

	 console.log('test2222');
	const articles = await Promise.all([
		sql`INSERT INTO articles (title, content, tags)
        VALUES($$Without women, you won't win these elections$$, $$On Thursday, a new podcast hosted by Arleta Zalewska from 'Fakty' TVN and Aleksandra Pawlicka from 'Newsweek' premiered, titled 'Women's Choices.'
         The next day, on TVN24, the journalists talked about their new project and also commented on the ongoing election campaign. - Women have finally been noticed - Pawlicka noted. - I have no doubt: without women, you won't win these elections - emphasized Zalewska.$$,
         '[1,2,3]')
         `,
		sql`INSERT INTO articles (title, content, tags)
        VALUES($$Latest Election Polls - Who Will Be the Third Force in the Parliament?$$,
        $$The latest poll in our compilation is the IBRiS survey for the Onet portal, the results of which were presented on Friday, September 29. Below it, we are publishing further opinion surveys before the October parliamentary elections - both new ones and earlier ones.
        In our compilation, we present the latest results of party preference surveys during the hottest period of the campaign for the Sejm (lower house of parliament) and the Senate. The list is updated with emerging poll results. We present them in the order of publication - the newest ones on top. What do they show? That two weeks before the start of the election silence, we cannot be sure who will govern Poland after October 15.
        A particularly fierce battle is taking place for the third place on the poll podium.$$,
        '[2,3,4]')`
	]);
	console.log(`Added ${articles.length} articles`);

	return {
		createTableUsers
	};
}

export async function load() {
	const db = createPool();
	const startTime = Date.now();

	try {
		await seed(db);
		const { rows: users } = await db.query('SELECT * FROM users');
		
		const duration = Date.now() - startTime;
		return {
			users: users,
			duration: duration
		};
	} catch (error) {
		if (error?.message === `relation "users" does not exist`) {
			console.log('Table does not exist, creating and seeding it with dummy data now...');
			// Table is not created yet
			const { rows: users } = await db.query('SELECT * FROM users');
			const duration = Date.now() - startTime;
			return {
				users: users,
				duration: duration
			};
		} else {
			throw error;
		}
	}
}
