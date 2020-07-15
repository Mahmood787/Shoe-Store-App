import React from 'react'
import {data} from './ProductDetail'
import { useParams } from 'react-router'
//card starts

export const TheShoe= () => {
    const {shoe} = useParams()
    const shoess= data[shoe];
    if (!shoess){
        return <h1>Shoe not found</h1>
    }
    const {pImage,pPrice}=shoess;
    return (
        <h1>{pPrice}</h1>
        <h1>{pImage}</h1>
    )
}

