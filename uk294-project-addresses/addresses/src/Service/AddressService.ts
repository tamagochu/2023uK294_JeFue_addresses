import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3NpQGVwaWNtYWlsLmNvbSIsImlhdCI6MTY4MTQ3ODE3NSwiZXhwIjoxNjgxNDgxNzc1LCJzdWIiOiIyIn0.dts8dGO1z7CIM3e_Xu3z9zzEGRdsKIHdJrGrJ3aZpUc'

const addressService = (api: AxiosInstance = defaultAxiosInstance) => ({

    getAllAddresses: async () => {
        const data = await api.get('address?_limit=20', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data["data"]
    },

    /*getAddressByIndex: async () =>{
        var id = 
        const data = await api.get(`address/${id}`)
        return data
    }*/
});

export default addressService;