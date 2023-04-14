import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3NpQGVwaWNtYWlsLmNvbSIsImlhdCI6MTY4MTQ2MTg0MSwiZXhwIjoxNjgxNDY1NDQxLCJzdWIiOiIyIn0.5ReL40sM_g9Ay2HgH95GW5fmYXOhzlKjugHcsGmWn-4'

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