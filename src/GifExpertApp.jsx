import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['DBZ'])

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />


            <ol>
                {
                    categorias.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>

        </div>
    )
}

export default GifExpertApp
