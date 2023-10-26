const mysql = require('mysql');

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

// Connect to the MySQL server
// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.stack);
      return;
    }
    console.log('Connected to the MySQL server as ID ' + connection.threadId);
  });
  
  // Create a new database (Change 'register' to the desired database name)
  const databaseName = 'register';
  connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (error) => {
    if (error) {
      console.error('Error creating the database: ' + error);
    } else {
      console.log(`Database "${databaseName}" created successfully.`);
    }
  
    // Use the newly created database
    connection.query(`USE ${databaseName}`, (useError) => {
      if (useError) {
        console.error('Error using the database: ' + useError);
      } else {
        console.log(`Using database "${databaseName}".`);
      }
  
      // Create a table for students
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS student (
          id INT AUTO_INCREMENT PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
          confirm_password VARCHAR(255) NOT NULL,
          birthdate DATE,
          gender ENUM('Male', 'Female', 'Other'),
          enrollment VARCHAR(255) NOT NULL
        )`;
  
      connection.query(createTableQuery, (tableError) => {
        if (tableError) {
          console.error('Error creating the table: ' + tableError);
        } else {
          console.log('Table "student" created successfully.');
        }
  
        // Close the database connection
        connection.end();
      });
    });
  });
