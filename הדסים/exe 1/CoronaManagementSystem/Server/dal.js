
const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: 'a1b2c3d4',
  database: 'corona_database',
  port: '3306'
});

// Create
 function createUser(firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1, vaccineDate2, vaccineManufacturer2, vaccineDate3, vaccineManufacturer3, vaccineDate4, vaccineManufacturer4, positiveTestDate, recoveryDate) {
    return new Promise(async (resolve, reject) => {
      try {
         connection.beginTransaction();
  
        const insertPersonalInfoSql = `
          INSERT INTO personal_info (first_name, last_name, id_number, address, date_of_birth, phone_number, mobile_phone_number)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const personalInfoResult = connection.query(insertPersonalInfoSql, [
          firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber
        ]);
  
        console.log(personalInfoResult);
        const personalInfoId = personalInfoResult.insertId;
  
        const insertCoronaInfoSql = `
          INSERT INTO corona_info (personal_info_id, vaccine_date1, vaccine_manufacturer1, vaccine_date2, vaccine_manufacturer2, 
            vaccine_date3, vaccine_manufacturer3, vaccine_date4, vaccine_manufacturer4, positive_test_date, recovery_date)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
         connection.query(insertCoronaInfoSql, [
            idNumber, vaccineDate1, vaccineManufacturer1, vaccineDate2, vaccineManufacturer2, vaccineDate3, vaccineManufacturer3, vaccineDate4, vaccineManufacturer4, positiveTestDate, recoveryDate
        ]);
  
         connection.commit();
  
        resolve({ message: 'User created successfully!' });
      } catch (err) {
         connection.rollback();
        reject(err);
      }
    });
  }
  
  // Read
  const getAllUsers = () => {
    const sql = `
        SELECT personal_info.*, corona_info.*
        FROM personal_info
        LEFT JOIN corona_info ON personal_info.id_number = corona_info.personal_info_id
    `;
    
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
  
const getUserById = (id) => {
    const sql = `
        SELECT personal_info.*, corona_info.*
        FROM personal_info
        LEFT JOIN corona_info ON personal_info.id_number = corona_info.personal_info_id
        WHERE personal_info.id_number = ?
    `;
    
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0]);
            }
        });
    });
};
  
  // Update
  const updateUser = (firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1, vaccineDate2, vaccineManufacturer2, vaccineDate3, vaccineManufacturer3, vaccineDate4, vaccineManufacturer4, positiveTestDate, recoveryDate) => {
    const sql = `
        UPDATE personal_info, corona_info
        SET personal_info.first_name = ?, personal_info.last_name = ?, personal_info.address = ?, personal_info.phone_number = ?,
        personal_info.mobile_phone_number = ?,corona_info.vaccine_date1=?,corona_info.vaccine_manufacturer1=?,
        corona_info.vaccine_date2=?,corona_info.vaccine_manufacturer2=?,corona_info.vaccine_date3=?,corona_info.vaccine_manufacturer3=?,
        corona_info.vaccine_date4=?,corona_info.vaccine_manufacturer4=?,corona_info.positive_test_date=?,corona_info.recovery_date=?
        WHERE personal_info.id_number = ? AND corona_info.personal_info_id = personal_info.id_number
    `;
    
    return new Promise((resolve, reject) => {
        connection.query(sql, [ 
            firstName, lastName, address, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1,
            vaccineDate2, vaccineManufacturer2, vaccineDate3, vaccineManufacturer3, vaccineDate4, vaccineManufacturer4,
            positiveTestDate, recoveryDate, idNumber
        ], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

  
  // Delete
  const deleteUser = (id) => {
    const sql = `
        DELETE personal_info, corona_info
        FROM personal_info
        LEFT JOIN corona_info ON personal_info.id_number = corona_info.personal_info_id
        WHERE personal_info.id_number = ?
    `;
    
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

  const crudFunctions = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  };
  
  module.exports = crudFunctions;