import React from 'react'
import { Outlet } from 'react-router'


export const Products = () => {
    
    return (
        <>
        <div>
            <h5>your Products</h5>
        </div>
        <hr/>
        <div style={{
        position: 'absolute', 
        left: '5%', 
        transform: 'translate(0%, 0%)',
        marginTop:'20px'
    }}>
            <Outlet/>
        </div>
        
        </>
    )
}
