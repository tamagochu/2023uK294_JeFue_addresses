import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3NpQGVwaWNtYWlsLmNvbSIsImlhdCI6MTY4MTQ2NjA0NiwiZXhwIjoxNjgxNDY5NjQ2LCJzdWIiOiIyIn0.svd7R2M4K4lRPZizAG427usJodHhs-MnA4ZcaXoJAyc'

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