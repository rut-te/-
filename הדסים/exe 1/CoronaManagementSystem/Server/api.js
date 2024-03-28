const express = require('express');
const app = express();
const cors = require('cors');
const crudFunctions = require('./dal');


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await crudFunctions.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(400).send('Invalid ID');
        return;
    }

    try {
        const user = await crudFunctions.getUserById(id);
        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1,
            vaccine_date2, vaccine_manufacturer2, vaccine_date3, vaccine_manufacturer3, vaccine_date4, vaccine_manufacturer4, positive_test_date, recovery_date } = req.body;
        if (idNumber == null) {
            res.status(400).send('Missing required fields');
            return;
        }
        const user = await crudFunctions.createUser(firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1,
            vaccine_date2, vaccine_manufacturer2, vaccine_date3, vaccine_manufacturer3, vaccine_date4, vaccine_manufacturer4, positive_test_date, recovery_date);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

app.put('/users/:id', async (req, res) => {
    console.log(req.body);
    try {
        const { firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1,
            vaccine_date2, vaccine_manufacturer2, vaccine_date3, vaccine_manufacturer3, vaccine_date4, vaccine_manufacturer4, positive_test_date, recovery_date } = req.body;
        if (idNumber == null) {
            res.status(400).send('Missing required fields');
            return;
        }
        const user = await crudFunctions.updateUser(firstName, lastName, idNumber, address, dateOfBirth, phoneNumber, mobilePhoneNumber, vaccineDate1, vaccineManufacturer1,
            vaccine_date2, vaccine_manufacturer2, vaccine_date3, vaccine_manufacturer3, vaccine_date4, vaccine_manufacturer4, positive_test_date, recovery_date);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(400).send('Invalid ID');
        return;
    }

    try {
        const user = await crudFunctions.deleteUser(id);
        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(2024, () => { console.log("hi"); })