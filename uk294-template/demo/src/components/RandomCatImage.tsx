import { useEffect, useState } from "react";
import CatImageService from "../service/CatImageService";

export default function CatImage(){
    const [catImageUrl, setCatImageUrl] = useState<string>("")

    useEffect(() => {
        CatImageService().getRandomCatImage()
        .then((catImageUrl) => setCatImageUrl(catImageUrl))
    }, []);

    return (
        <img src={catImageUrl} alt="" />
    )
}