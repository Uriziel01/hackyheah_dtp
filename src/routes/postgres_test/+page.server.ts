import { createPool } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

async function seed() {
	await sql`DROP TABLE IF EXISTS tags`;
	await sql`DROP TABLE IF EXISTS users`;
	await sql`DROP TABLE IF EXISTS articles`;
	await sql`DROP TABLE IF EXISTS questions`;
	await sql`DROP TABLE IF EXISTS parties`;

	const createTables = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      image VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
	await sql`
	CREATE TABLE IF NOT EXISTS articles (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255) NOT NULL,
		content TEXT,
		date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
		tags JSON
	);`;
	await sql`
	CREATE TABLE IF NOT EXISTS tags (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		icon VARCHAR(255) NOT NULL
	);`;
	await sql`	
	CREATE TABLE IF NOT EXISTS questions (
		id SERIAL PRIMARY KEY,
		text VARCHAR(255) NOT NULL
	);`;  
	await sql`
	CREATE TABLE IF NOT EXISTS parties (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		logo VARCHAR(255) NOT NULL
	);`;
	console.log(`Created "users, articles, tags, questions, parties" table`);

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

	 console.log('test2222');
	const articles = await Promise.all([
		sql`INSERT INTO articles (title, content, tags)
        VALUES($$Without women, you won't win these elections$$, $$On Thursday, a new podcast hosted by Arleta Zalewska from 'Fakty' TVN and Aleksandra Pawlicka from 'Newsweek' premiered, titled 'Women's Choices.'
         The next day, on TVN24, the journalists talked about their new project and also commented on the ongoing election campaign. - Women have finally been noticed - Pawlicka noted. - I have no doubt: without women, you won't win these elections - emphasized Zalewska.$$,
         '[1]')
         `,
		sql`INSERT INTO articles (title, content, tags)
        VALUES($$Latest Election Polls - Who Will Be the Third Force in the Parliament?$$,
        $$The latest poll in our compilation is the IBRiS survey for the Onet portal, the results of which were presented on Friday, September 29. Below it, we are publishing further opinion surveys before the October parliamentary elections - both new ones and earlier ones.
        In our compilation, we present the latest results of party preference surveys during the hottest period of the campaign for the Sejm (lower house of parliament) and the Senate. The list is updated with emerging poll results. We present them in the order of publication - the newest ones on top. What do they show? That two weeks before the start of the election silence, we cannot be sure who will govern Poland after October 15.
        A particularly fierce battle is taking place for the third place on the poll podium.$$,
        '[2,3,4]')`
	]);
	console.log(`Added ${articles.length} articles`);

	const questions = await Promise.all([
		sql`
			  INSERT INTO questions (text)
			  VALUES ('Oppression by corporations is more of a concern than oppression by governments.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('It is necessary for the government to intervene in the economy to protect consumers.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('The freer the markets, the freer the people.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('It is better to maintain a balanced budget than to ensure welfare for all citizens.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('Publicly-funded research is more beneficial to the people than leaving it to the market.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('Tariffs on international trade are important to encourage local production.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('From each according to his ability, to each according to his needs.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('It would be best if social programs were abolished in favor of private charity.');
		  `,
		sql`
			  INSERT INTO questions (text)
			  VALUES ('Taxes should be increased on the rich to provide for the poor.');
		  `,
	  ]);
	  console.log(`Added ${questions.length} questions`);

	  const parties = await Promise.all([
		sql`
			INSERT INTO parties (name, logo)
			VALUES ('Pizza Friends', '$lib/images/logo1.jpg');
		  `,
		sql`
			INSERT INTO parties (name, logo)
			VALUES ('Promise And Conquer', '$lib/images/logo2.jpg');
		  `,
		sql`
			INSERT INTO parties (name, logo)
			VALUES ('Do Whatever You Want', '$lib/images/logo3.jpg');
		  `,
		sql`
			INSERT INTO parties (name, logo)
			VALUES ('We Are The Champions', '$lib/images/logo4.jpg');
		  `,
		]);
		console.log(`Added ${parties.length} parties`);

	return {
		createTables
	};
}

export async function load() {
	const db = createPool();
	const startTime = Date.now();

	try {
		await seed();
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
