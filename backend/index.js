const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Google's public DNS

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { verifyToken } = require("./Middlewares/AuthMiddleware");


const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;


app.use(cors({
            origin: [
                "http://localhost:3000",
                "http://localhost:3001",
                "https://main.ds4x7296ouwgw.amplifyapp.com",
                "https://main.dzjt2ik5hywct.amplifyapp.com"
            ],
            methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(bodyParser.json());

app.use('/', authRoute);

app.get('/allHoldings',verifyToken, async (req, res) => {
    try {
        const holdings = await HoldingsModel.find();
        res.json(holdings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/allPositions',verifyToken, async (req, res) => {
    try {
        const positions = await PositionsModel.find();
        res.json(positions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get('/allOrders',verifyToken, async (req, res) => {
    try {
        const orders = await OrdersModel.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/newOrder',verifyToken, async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
mongoose.connect(uri)
    .then(() => {
        console.log('✅ MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.error('❌ MongoDB connection error:', err));