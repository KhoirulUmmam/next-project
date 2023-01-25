import EditSteak from '../EditSteak';

export default function updateSteak({ steaks }) {
    console.log("steak", steaks);
    return <EditSteak steakUpdateData={steaks} />;
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/steak/${params.id}`);
    const steaks = await res.json();

    return {
        props: { steaks },
    };
}