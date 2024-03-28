const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: 'a1b2c3d4',
  database: 'corona_database',
  port: '3306'
});

//create db
connection.query('CREATE DATABASE IF NOT EXISTS  corona_database', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Database created successfully');
});


const createPersonalInfoTable = `
CREATE TABLE IF NOT EXISTS personal_info (
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  id_number VARCHAR(255) PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  mobile_phone_number VARCHAR(255) NOT NULL
);
`;

const createCoronaInfoTable = `
CREATE TABLE IF NOT EXISTS corona_info (
  personal_info_id VARCHAR(255) PRIMARY KEY,
  vaccine_date1 DATE,
  vaccine_manufacturer1 VARCHAR(255),
  vaccine_date2 DATE,
  vaccine_manufacturer2 VARCHAR(255),
  vaccine_date3 DATE,
  vaccine_manufacturer3 VARCHAR(255),
  vaccine_date4 DATE,
  vaccine_manufacturer4 VARCHAR(255),
  positive_test_date DATE,
  recovery_date DATE,
  FOREIGN KEY (personal_info_id) REFERENCES personal_info(id_number) ON DELETE CASCADE
);
`;

connection.query(createPersonalInfoTable, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Personal info table created successfully');
});

connection.query(createCoronaInfoTable, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Corona info table created successfully');
});

connection.end();