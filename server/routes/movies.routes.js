const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/');
    pool.query('SELECT * FROM "movies" ORDER BY "id";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/', error)
        res.sendStatus(500);
    });
})

router.get('/:id', (req, res) => {
    console.log('GET /api/:id');
    queryText = `SELECT "movies"."id", "title", "poster", "description", "name"
                FROM "movie_genre"
                    JOIN "movies" ON "movie_id" = "movies"."id"
                    JOIN "genres" ON "genre_id" = "genres"."id"
                WHERE "movies"."id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/', error)
        res.sendStatus(500);
    });
})

module.exports = router;