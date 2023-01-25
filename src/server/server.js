const express = require("express");
const { executeQuery } = require('../config/db');
const port = 9000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/steak', async (req, res) => {
    try {
        let steakData = await executeQuery("select * from steaks");
        res.status(200).json(steakData);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/steak/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let steakData = await executeQuery("select * from steaks s_id=?", [id]);
        res.status(200).json(steakData);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/saveSteak", async (req, res) => {
    try {
        const { s_name, s_quality, s_shipment, s_village, s_district, s_city } = req.body;
        let steakData = await executeQuery(
            "insert into steak(s_name, s_quality, s_shipment, s_village, s_district, s_city) values(?,?,?,?,?,?)", [s_name, s_quality, s_shipment, s_village, s_district, s_city]
        );
        res.status(200).json(steakData);
    } catch (err) {
        res.status(400).json(err);
    }
});

app.listen(port, () => console.log(`server is running on ${port}`));