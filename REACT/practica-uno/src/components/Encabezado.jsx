//crear componente

/**
 * componente funcional => teclas rfc 
 * componente de clase => teclas rcc
 */

import React from 'react'

export default function Encabezado(props) {
    return (
        <header className='encabezado'>
            <h1> {props.usuario}, estas utilizando props</h1>
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











