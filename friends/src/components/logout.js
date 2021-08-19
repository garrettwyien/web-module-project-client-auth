import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout =(props)=>{
    useEffect(()=>{
        axiosWithAuth()
            .post('/logout')
            .then(res=> {
                localStorage.removeItem("token");
                localStorage
            })
    })
}