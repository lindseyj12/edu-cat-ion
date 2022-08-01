const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Gord4665',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);

// Acceptance Criteria
// It's done when movie_db is created and contains a movies and reviews table.

// It's done when movie_db has been seeded with data.

// It's done when the /api/movies route renders a list of all movies.

// It's done when the /api/add-movie route successfully adds a movie when tested using Insomnia.

// It's done when the /api/update-review route successfully updates a movie when tested using Insomnia.

// It's done when the /api/movie/:id route deletes a route when tested using Insomnia.

// Query database
db.query('SELECT * FROM movies', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
