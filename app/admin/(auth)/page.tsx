"use client"

import React from 'react'
import AdminSignIn from '@/components/template/Admin/SignIn'

const Auth = () => {
    return (
        <div className="h-screen bg-cover  bg-[url('/admin.jpg')]">
            <AdminSignIn />
        </div>
    )
}

export default Auth
