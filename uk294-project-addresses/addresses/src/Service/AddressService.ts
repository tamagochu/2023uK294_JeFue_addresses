import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const addressService = (api: AxiosInstance = defaultAxiosInstance) => ({

    getAllAddresses: async () => {
        const data = await api.get('address?_limit=20')
        return data["data"]
    },

    getAddressByIndex: async (id: number) =>{
        const data = await api.get(`address/${id}`)
        return data["data"]
    }
});

export default addressService;