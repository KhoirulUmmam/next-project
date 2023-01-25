import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/SteakList.module.css';
import Link from 'next/link';

export default function Home({ data }) {
    console.log("data", data);
    const router = useRouter();
    const deleteSteak = async(id) => {
        let data = await axios.delete(`http://localhost:3000/api/steak/${id}`);
        router.push("/");
    };
    return (
        <div className={styles.cols}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.th}>SteakId</th>
                        <th className={styles.th}>SteakName</th>
                        <th className={styles.th}>SteakQuality</th>
                        <th className={styles.th}>SteakShipment</th>
                        <th className={styles.th}>SteakVillage</th>
                        <th className={styles.th}>SteakDistrict</th>
                        <th className={styles.th}>SteakCity</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {data.map((sData, index) => (
                        <tr key={index}>
                            <th className={styles.th}>{index + 1}</th>
                            <td className={styles.th}>{sData.s_name}</td>
                            <td className={styles.th}>{sData.s_quality}</td>
                            <td className={styles.th}>{sData.s_shipment}</td>
                            <td className={styles.th}>{sData.s_village}</td>
                            <td className={styles.th}>{sData.s_district}</td>
                            <td className={styles.th}>{sData.s_city}</td>
                            <td className={styles.btn__cols}>
                                <button 
                                    clasName={styles.delete}
                                    onClick={() => deleteSteak(sData.s_id)}
                                    > Delete
                                </button>
                                <button className={styles.update}>
                                    <Link href={`/steak/${sData.s_id}`}>Update</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.addSteakCenter}>
                <button className={styles.addSteak}>
                    <Link href={`/addSteak`}>AddSteak</Link>
                </button>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/steak");
    const data = await res.json();
    return {
        props: { data },
    };
}