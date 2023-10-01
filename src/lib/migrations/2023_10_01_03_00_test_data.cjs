const { DataTypes } = require("sequelize");

// @ts-ignore
exports.up = async (queryInterface, _) => {
    await queryInterface.sequelize.query(`
    INSERT INTO users2 (name, email, image)
    VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg')
    ON CONFLICT (email) DO NOTHING;`);

    await queryInterface.sequelize.query(`
    INSERT INTO users2 (name, email, image)
    VALUES ('Lee Robinson', 'lee@vercel.com', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg')
    ON CONFLICT (email) DO NOTHING;`);

    await queryInterface.sequelize.query(`
    INSERT INTO users2 (name, email, image)
    VALUES ('Steven Tey', 'stey@vercel.com', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
    ON CONFLICT (email) DO NOTHING;`);

    await queryInterface.sequelize.query(`INSERT INTO tags2 (name, icon)
    VALUES('women', 'fa-venus')`);

    await queryInterface.sequelize.query(`INSERT INTO tags2 (name, icon)
    VALUES('poll', 'fa-square-poll-vertical')`);

    await queryInterface.sequelize.query(`
        INSERT INTO articles2 (title, content, tags)
        VALUES($$Without women, you won't win these elections$$, $$On Thursday, a new podcast hosted by Arleta Zalewska from 'Fakty' TVN and Aleksandra Pawlicka from 'Newsweek' premiered, titled 'Women's Choices.'
         The next day, on TVN24, the journalists talked about their new project and also commented on the ongoing election campaign. - Women have finally been noticed - Pawlicka noted. - I have no doubt: without women, you won't win these elections - emphasized Zalewska.$$,
    '[1]')`);

    await queryInterface.sequelize.query(`INSERT INTO articles2 (title, content, tags)
    VALUES($$Latest Election Polls - Who Will Be the Third Force in the Parliament?$$,
    $$The latest poll in our compilation is the IBRiS survey for the Onet portal, the results of which were presented on Friday, September 29. Below it, we are publishing further opinion surveys before the October parliamentary elections - both new ones and earlier ones.
    In our compilation, we present the latest results of party preference surveys during the hottest period of the campaign for the Sejm (lower house of parliament) and the Senate. The list is updated with emerging poll results. We present them in the order of publication - the newest ones on top. What do they show? That two weeks before the start of the election silence, we cannot be sure who will govern Poland after October 15.
    A particularly fierce battle is taking place for the third place on the poll podium.$$,
    '2')`);

    await queryInterface.sequelize.query(`
        INSERT INTO questions2 (text)
        VALUES ('Oppression by corporations is more of a concern than oppression by governments.');
    `);

    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('It is necessary for the government to intervene in the economy to protect consumers.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('The freer the markets, the freer the people.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('It is better to maintain a balanced budget than to ensure welfare for all citizens.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('Publicly-funded research is more beneficial to the people than leaving it to the market.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('Tariffs on international trade are important to encourage local production.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('From each according to his ability, to each according to his needs.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('It would be best if social programs were abolished in favor of private charity.');
		  `);
    await queryInterface.sequelize.query(`
			  INSERT INTO questions2 (text)
			  VALUES ('Taxes should be increased on the rich to provide for the poor.');
        `);
    
    await queryInterface.sequelize.query(`
        INSERT INTO parties2 (name, logo)
        VALUES ('Pizza Friends', '$lib/images/logo1.jpg');
      `);
    await queryInterface.sequelize.query(`
        INSERT INTO parties2 (name, logo)
        VALUES ('Promise And Conquer', '$lib/images/logo2.jpg');
      `);
    await queryInterface.sequelize.query(`
        INSERT INTO parties2 (name, logo)
        VALUES ('Do Whatever You Want', '$lib/images/logo3.jpg');
      `);
    await queryInterface.sequelize.query(`
        INSERT INTO parties2 (name, logo)
        VALUES ('We Are The Champions', '$lib/images/logo4.jpg');
      `);
};

exports.down = async (queryInterface, _) => {
    await queryInterface.sequelize.query(`DELETE FROM users2 WHERE email = rauchg@vercel.com`);
    await queryInterface.sequelize.query(`DELETE FROM users2 WHERE email = lee@vercel.com`);
    await queryInterface.sequelize.query(`DELETE FROM users2 WHERE email = stey@vercel.com`);
    await queryInterface.sequelize.query(`DELETE FROM tags2 WHERE name = women`);
    await queryInterface.sequelize.query(`DELETE FROM tags2 WHERE name = poll`);
    await queryInterface.sequelize.query(`DELETE FROM articles2 WHERE title = $$Without women, you won''t win these elections$$`);
    await queryInterface.sequelize.query('DELETE FROM articles2 WHERE title = $$Latest Election Polls - Who Will Be the Third Force in the Parliament?$$');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = Oppression by corporations is more of a concern than oppression by governments.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = It is necessary for the government to intervene in the economy to protect consumers.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = The freer the markets, the freer the people.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = It is better to maintain a balanced budget than to ensure welfare for all citizens.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = Publicly-funded research is more beneficial to the people than leaving it to the market.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = Tariffs on international trade are important to encourage local production.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = From each according to his ability, to each according to his needs.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = It would be best if social programs were abolished in favor of private charity.');
    await queryInterface.sequelize.query('DELETE FROM questions2 WHERE text = Taxes should be increased on the rich to provide for the poor.');
    await queryInterface.sequelize.query('DELETE FROM parties2 WHERE name = Pizza Friends');
    await queryInterface.sequelize.query('DELETE FROM parties2 WHERE name = Promise And Conquer');
    await queryInterface.sequelize.query('DELETE FROM parties2 WHERE name = Do Whatever You Want');
    await queryInterface.sequelize.query('DELETE FROM parties2 WHERE name = We Are The Champions');
};
