//crear componente

/**
 * componente funcional => teclas rfc 
 * componente de clase => teclas rcc
 */

import React from 'react'

export default function Encabezado() {
    return (
        <header className='encabezado'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Lista</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}











