import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

    // const categories = ['One Punch Man', 'Dragon Ball', 'Naruto'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'One Peace'] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={ category }
                            category = { category }
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GitExpertApp;