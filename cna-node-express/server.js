//Code to allow Express.js application to connect to the cnainventory db
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.listen(port, () => console.log(`Sample app is listening on port ${port}`));

const Sequelize = require('sequelize');
const db = 'cnainventory';
const sequelize = new Sequelize(db, 'root', '*******************', {
    dialect: 'mysql', host: 'localhost', port: 3306
})

//map the data objects in the Express.js code to the data records in the database table
const Inventory = sequelize.define(
    'inventory', {
        id        : {type: Sequelize.INTEGER, allowNull: true, primaryKey: true},
        name      : {type: Sequelize.STRING, allowNull: false},
        quantity  : {type: Sequelize.INTEGER, defaultValue: 0},
        date      : {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
        createdAt : {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
    }, {
        freezeTableName : true,
        timestamps      : false
    }
);


// --- The two express REST API endpoints:

//add a route that accepts HTTP POST requests to create a new inventory record
app.post('/inventory', async (req, res) => {
    console.log(`Creating new inventory record with body: ${req.body}`);
    try{
        const newItem = await Inventory.create(req.body);
        // const newItem = new Inventory.create(req.body);
        // await newItem.save();
        res.json({inventory : newItem});
    }catch(error){
        console.error(error);
        res.status(500).send(`Error creating inventory record: \n${error.parent}`);
    }
});

//add a route that accepts HTTP GET requests to fetch an inventory record
app.get('/inventory/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`Fetching inventory record with id: ${id}`);
    try{
        const inventory = await Inventory.findAll({
            attributes : ['id', 'name', 'quantity', 'date', 'createdAt'],
            where : {id : id}
        });
        res.json({inventory});
    }catch(error){
        console.error(error);
        res.status(500).send('Error fetching inventory record');
    }
});