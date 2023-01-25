import nc from 'next-connect';
import onError from '../../../common/errormiddleware';
import {
    getEmployeeById,
    deleteEmployeeById,
    updateEmployee,
} from '../../../controller/employee/employee';

const handler = nc(onError);
handler.get(getEmployeeById);
handler.put(updateEmployee);
handler.delete(deleteEmployeeById);

export default handler;