import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const addressService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getAllAddresses: async () => {
        const data = api.get(`address?_limit=20`)
        return data
    },

    /*getAddressByIndex: async () =>{
        var id = 
        const data = await api.get(`address/${id}`)
        return data
    }*/
})