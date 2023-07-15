import React, { useState } from 'react';
import listado from './persona.json';

export default function Lista() {
    const [usuarios, setUsuarios] = useState(listado);

    const eliminarUsuarios = () => {
        setUsuarios([]);
        console.log("se vacio la lista");
    };

    const recuperarUsuarios = () => {
        setUsuarios(listado);
    }


    return (
        <>
        <h2>Listado de Usuarios</h2>
        <button onClick={eliminarUsuarios}>Eliminar Lista</button>
        <button onClick={recuperarUsuarios}>Recuperar Lista</button>
        <br />

        {usuarios.map((persona, index) => {
            return (
            <section key={index}>
                <article>
                <img src={persona.imagen} alt={persona.nombre} />
                <h5>Usuario: {persona.nombre}</h5>
                <p>Hola! Tengo {persona.edad} años de edad</p>
                </article>
            </section>
            );
        })}
        </>
    );
}





