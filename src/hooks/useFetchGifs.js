import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
 
                     setstate({
                    data: imgs,
                    loading: false
                })
                }, 1000);

               
            })

    }, [category] )


return state;
}

//useEffect(() => {
      //  getGifs(category)
        //.then( imgs => setImages(imgs))
    //}, [category])