import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data:img, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p> }
            <div className="card-grid">


                {img.map(imagen => (
                    <GifGridItem
                        key={imagen.id}
                        {...imagen}
                    />
                ))}

            </div>
        </>
    )

}

export default GifGrid
