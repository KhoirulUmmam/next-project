import { executeQuery } from '../../config/db';
import steakValidation from '../../common/steakValidator';
import ErrorHandler from '../../common/errorHandler';
import next from 'next';

const getAllSteaks = async (req, res) => {
    try {
       console.log("all the steaks");
       let steakData = await executeQuery("select * from steaks", []);
       res.send(steakData); 
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSteakById = async (req, res) => {
    let id = req.query.id;
    try {
        console.log("steak by id");
        let steakData = await executeQuery(`select * from steaks where s_id=${id}`, []);
        if(steakData.length > 0) res.status(200).json(steakData);
        else{
            next(new ErrorHandler(`no steaks found with this id ${id}`, 404));
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const saveSteak = async (req, res) => {
    try {
        const result = req.body;
        const { 
            s_name,
            s_quality,
            s_shipment,
            s_village,
            s_district,
            s_city
         } = result;
         
         let { error } = steakValidation(result);
         if (error) {
            res.status(400).json(error.details[0].message);
         } else {
            console.log("post request");
            let steakData = await executeQuery(
                "insert into steaks(s_name, s_quality, s_shipment, s_village, s_district, s_city) values(?,?,?,?,?,?)", [s_name, s_quality, s_shipment, s_village, s_district,  s_city]
            );
            steakData = await executeQuery(
                `select * from steaks where s_id = ${steakData.insertId}`
            );
            res.status(201).json(steakData);
         }
    } catch (err) {
        res.status(400).json(err);
    }
};

const updateSteak = async (req, res) => {
    let id = req.query.id;
    console.log("id", id);
    const { s_name, s_quality, s_shipment, s_village, s_district,  s_city } = req.body;
    console.log("req body", req.body);
    try {
        let steakData = await executeQuery("select * from steaks where s_id=?", [id]
        );
        if (steakData.length > 0) {
            console.log("put request", steakData);
            steakData = await executeQuery(
                `update steaks set s_name=?, s_quality=?, s_shipment=?, s_village=?, s_district=?, s_city=? where s_id=${id}`, [s_name, s_quality, s_shipment, s_village, s_district, s_city]
            );
            res.status(200).json(steakData);
        } else {
            res.status(404).json(`steak not found on this id=${id}`);
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

const deleteSteakById = async (req, res) => {
    let id = req.query.id;
    try {
        let steakData = await executeQuery(
            `delete from steaks where s_id=?`, [id]
        );
        res.status(200).json("Steak Deleted Successfully");
    } catch (err) {
        res.status(500).json(err);
    }
};

export {
    getAllSteaks,
    getSteakById,
    saveSteak,
    updateSteak,
    deleteSteakById,
};