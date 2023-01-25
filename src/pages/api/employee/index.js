import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
    getAllSteaks,
    saveSteak,
} from "../../../controller/steak/steak";

const handler = nc(onError);
handler.get(getAllSteaks);
handler.post(saveSteak);

export default handler;