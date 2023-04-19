import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { address } from "../Interfaces/AddressInterface";

const addressService = (api: AxiosInstance = defaultAxiosInstance) => ({

    getAllAddresses: async () => {
        const data = await api.get('address?_limit=20')
        return data["data"]
    },

    getAddressByIndex: async (id: number) =>{
        const data = await api.get(`address/${id}`)
        return data["data"]
    },

    deleteAddress: async (id: number) =>{
        const data = await api.delete(`address/${id}`);
        return data["data"]
    },

    putAddress: async (myAddress : address) => {
        const data = await api.put(`address/${myAddress.id}`, myAddress)
        return data["data"]
    },

    postAddress: async (street_name : string, street_number : string, country_id : number, importdate : string, city:string) => {
        const data = await api.post('address', {"street_name" : street_name, "street_number" : street_number, "country_id" : country_id, "importdate" : importdate, "city" : city})
        return data["data"]
    }

});

export default addressService;