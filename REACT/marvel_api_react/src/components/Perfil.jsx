import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export default function Perfil() {
    const { isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated && (
            <div className='bg-dark text-white text-center'>
                <div className='container'>
                    <img src={user.picture} alt={user.name} className='img-fluid rounded-circle w-25 mb-3' />
                    <h2>Usuario: {user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>
    )
    )
}
