import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from '../styles/AddSteak.module.css';

export default function AddSteak(){
    const router = useRouter();
    const [addSteak, setSteak] = useState({
        s_name: "" ,
        s_quality: "" ,
        s_shipment: "",
        s_village: "" ,
        s_district: "" ,
        s_city: "" ,
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = await axios.post(`http://localhost/api/steak`, addSteak)
    };
    if (data.data) router.push("/");
    setSteak({
        s_name: "" ,
        s_quality: "" ,
        s_shipment: "",
        s_village: "" ,
        s_district: "" ,
        s_city: "" ,
    });

    const handleChange = (e) => {
        const value = e.target.value;
        console.log("value", value);
        setSteak({ ...addSteak, [e.target.name]: value});
    };

    return (
        <>
            <div className={styles.addform}>
                <h1>ADD STEAK</h1>
                <form onSubmit={onSubmit}>
                    {/* Name of Steak */}
                    <div>
                        <input
                            type="text"
                            className={styles.input}
                            name="s_name"
                            placeholder="Enter Steak Name"
                            onChange={handleChange}
                            value={addSteak.s_name}
                        />
                    </div>
                    {/* Quality */}
                    <div>
                        <input
                            type="text"
                            className={styles.input}
                            name="s_quality"
                            placeholder="Enter Quality"
                            onChange={handleChange}
                            value={addSteak.s_quality}
                        />
                    </div>
                    {/* Shipment */}
                    <div>
                        <input
                            type="date"
                            className={styles.input}
                            name="s_shipment"
                            placeholder="Enter Date"
                            onChange={handleChange}
                            value={addSteak.s_shipment}
                        />
                    </div>
                    {/* Village */}
                    <div>
                        <input
                            type="text"
                            className={styles.input}
                            name="s_village"
                            placeholder="Enter Village"
                            onChange={handleChange}
                            value={addSteak.s_village}
                        />
                    </div>
                    {/* District */}
                    <div>
                        <input
                            type="text"
                            className={styles.input}
                            name="s_district"
                            placeholder="Enter District"
                            onChange={handleChange}
                            value={addSteak.s_district}
                        />
                    </div>
                    {/* City */}
                    <div>
                        <input
                            type="text"
                            className={styles.input}
                            name="s_city"
                            placeholder="Enter City"
                            onChange={handleChange}
                            value={addSteak.s_shipment}
                        />
                    </div>
                    <div>
                        <button type='submit'> Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}