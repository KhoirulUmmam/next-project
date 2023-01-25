import nc from 'next-connect';
import onError from '../../../common/errormiddleware';
import {
    getSteakById,
    deleteSteakById,
    updateSteak,
} from '../../../controller/steak/steak';

const handler = nc(onError);
handler.get(getSteakById);
handler.put(updateSteak);
handler.delete(deleteSteakById);

export default handler;