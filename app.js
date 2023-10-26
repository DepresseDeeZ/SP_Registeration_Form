const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const rl = readline.createInterface({ input, output });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'register',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});


// Ask the user to select a database operation
rl.question('Select a database operation (insert, update, delete, search): ', (operation) => {
  switch (operation) {
    case 'insert':
      app.set('view engine', 'ejs');
      app.engine('html', require('ejs').renderFile);
      // Serve the registration form
      app.get('/', (req, res) => {
        res.sendFile(__dirname + '/registration_form.html');
      });

      // Register a user
      app.post('/register', (req, res) => {
        const {
          first_name,
          last_name,
          email,
          password,
          birthdate,
          gender,
          enrollment,
        } = req.body;

        const insertQuery =
          'INSERT INTO student (first_name, last_name, email, password, birthdate, gender, enrollment) VALUES (?, ?, ?, ?, ?, ?, ?)';

        db.query(
          insertQuery,
          [first_name, last_name, email, password, birthdate, gender, enrollment],
          (err) => {
            if (err) {
              res.status(500).json({ error: 'Error registering user' });
              return;
            }

            // Fetch all records from the database
            const fetchAllQuery = 'SELECT * FROM student';

            db.query(fetchAllQuery, (err, allUsers) => {
              if (err) {
                res.status(500).json({ error: 'Error fetching all users' });
                return;
              }

              // Render the HTML table with all user records using the EJS template
              res.render('allUsers', { users: allUsers });
            });
          }
        );
      });


      break;

    case 'update':
      app.set('view engine', 'ejs');
      app.engine('html', require('ejs').renderFile); // Assuming you're using EJS for rendering
      // Redirect to the update form

      // Serve the update form
      app.get('/', (req, res) => {
        res.sendFile(__dirname + '/update_form.html');
      });

      // Update user information
      app.post('/update', (req, res) => {
        const {
          first_name,
          last_name,
          email,
          password,
          birthdate,
          gender,
          enrollment,
        } = req.body;

        const updateQuery =
          'UPDATE student SET first_name = ?, last_name = ?, email = ?, password = ?, birthdate = ?, gender = ? WHERE enrollment = ?';

        db.query(
          updateQuery,
          [first_name, last_name, email, password, birthdate, gender, enrollment],
          (err, results) => {
            if (err) {
              res.status(500).json({ error: 'Error updating user information' });
              return;
            }

            if (results.affectedRows === 0) {
              res.status(404).json({ error: 'User not found' });
            } else {
              // Fetch the updated data from the database
              const fetchQuery = 'SELECT * FROM student WHERE enrollment = ?';

              db.query(fetchQuery, [enrollment], (err, updatedResults) => {
                if (err) {
                  res.status(500).json({ error: 'Error fetching updated data' });
                  return;
                }

                // Render the updated data using the EJS template
                res.render('update_result', { students: updatedResults });
              });
            }
          }
        );
      });
      break;

    case 'delete':
      app.set('view engine', 'ejs');
      app.engine('html', require('ejs').renderFile); // Assuming you're using EJS for rendering
      // Redirect to the delete form


      // Serve the HTML form
      app.get('/', (req, res) => {
        res.sendFile(__dirname + '/delete_form.html');
      });

      // Handle the form submission to delete a user
      app.post('/delete', (req, res) => {
        const enrollment = req.body.search_enrollment;

        const deleteQuery = 'DELETE FROM student WHERE enrollment = ?';

        db.query(deleteQuery, [enrollment], (err, results) => {
          if (err) {
            res.status(500).json({ error: 'Error deleting user' });
            return;
          }

          if (results.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
          } else {
            res.status(200).json({ message: 'User deleted successfully' });
          }
        });
      });


      break;

    case 'search':
      // Set the view engine to EJS
      app.set('view engine', 'ejs');
      app.engine('html', require('ejs').renderFile); // Assuming you're using EJS for rendering
      app.get('/', (req, res) => {
        res.sendFile(__dirname + '/search.html');
      });

      app.post('/register', (req, res) => {
        const searchEnrollment = req.body.search_enrollment;

        const sql = 'SELECT * FROM student WHERE enrollment = ?';
        db.query(sql, [searchEnrollment], (error, results) => {
          if (error) {
            console.error('Database query error: ' + error);
            res.status(500).json({ error: 'Internal server error' });
          } else {
            if (results.length > 0) {
              const students = results;
              res.render('search_results', { user: students });
            } else {
              res.status(404).json({ error: 'Student not found' });
            }
          }
        });
      });
      break;

    default:
      console.log('Invalid choice. Please choose insert, update, delete, or search.');
  }



  app.listen(port, 'localhost', () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  rl.close();
});







