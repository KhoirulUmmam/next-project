import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/UpdateSteak.module.css';

export default function EditSteak({ steakUpdateData}){
    console.log("steakId", steakUpdateData);
    const router = useRouter();
    const [addSteak, setSteak] = useState({
        s_name: "" ,
        s_quality: "" ,
        s_shipment: "",
        s_village: "" ,
        s_district: "" ,
        s_city: "" ,
    });
    useEffect(() => {
        setSteak(steakUpdateData[0]);
    }, [steakUpdateData]);

    const onSubmit = async (e) => {
            e.preventDefault();
            let data = await axios.put(
                `http://localhost/api/steak${steakUpdateData[0].s_id}`, addSteak
        );
        if (data.data) router.push("/");
        setSteak({
            s_name: "" ,
            s_quality: "" ,
            s_shipment: "",
            s_village: "" ,
            s_district: "" ,
            s_city: "" ,
        });
    };

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
                            value={addSteak.s_city}
                        />
                    </div>
                    <div>
                        <button type="submit" className={styles.button}> Submit</button>
                        <button className={styles.button}>
                            <Link href={`/`}>Go Back</Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}