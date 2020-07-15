import React from 'react'
import { Outlet } from 'react-router'


export const Products = () => {
    
    return (
        <>
        
        <hr/>
        <div style={{
        position: 'absolute', 
        left: '5%', 
        transform: 'translate(0%, 0%)',
        marginTop:'20px',
        width:'90%'
    }}>
            <Outlet/>
        </div>
        
        </>
    )
}
