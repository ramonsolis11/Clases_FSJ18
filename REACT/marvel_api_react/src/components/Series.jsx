import React, { useState, useEffect } from 'react';
export default function Comics() {
    // Creamos dos estados, uno para guardar la lista de cómics y otro para el cómic seleccionado.
    const [comics, setComics] = useState([]);
    const [selectedComic, setSelectedComic] = useState(null);
    // Esta función se ejecuta cuando la página carga por primera vez.
    useEffect(() => {
        // Aquí estamos llamando a una página web que tiene información de cómics.
        // Pero primero, necesitamos tener una clave secreta (que no te voy a mostrar) para poder acceder a esa página.
        // Por eso, hemos comentado la línea que define la clave.
        // Si tú tuvieras una clave, la pondrías en lugar de '75a6f6212d2783848bb71801a2a38e3e' dentro de las comillas.
        // Esa clave es como una contraseña que nos permite acceder a la información de cómics.
        // Luego, estamos armando una dirección de página (apiUrl) donde podemos encontrar los cómics.
        // Cuando hacemos clic en un botón, se ejecutará la función fetchComics para buscar los cómics y guardarlos en el estado 'comics'.
        const fetchComics = async () => {
            const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=75a6f6212d2783848bb71801a2a38e3e&hash=53834aa41ae83326abe171badd17f683`;
            try {
                // Aquí es donde realmente buscamos los cómics en la página web usando la dirección que armamos antes.
                // Luego, convertimos la respuesta que recibimos (que está en un formato especial) en algo que podemos entender (usando response.json()).
                // Después, guardamos la lista de cómics en el estado 'comics'.
                const response = await fetch(apiUrl);
                const data = await response.json();
                setComics(data.data.results);
            } catch (error) {
                // Si hay un error al buscar los cómics, lo mostramos en la consola para que podamos arreglarlo.
                console.error('Error fetching comics:', error);
            }
        };
        // Llamamos a la función fetchComics para buscar los cómics apenas la página carga.
        fetchComics();
    }, []);
    // Esta función se llama cuando hacemos clic en el botón "Ver Historieta" de un cómic.
    const openModal = (comic) => {
        // Cuando hacemos clic en el botón, guardamos el cómic seleccionado en el estado 'selectedComic'.
        setSelectedComic(comic);
    };
    // Esta función se llama cuando hacemos clic en el botón "Cerrar" de la ventana modal.
    const closeModal = () => {
        // Cuando cerramos la ventana modal, actualizamos el estado 'selectedComic' para que sea null (vacío).
        // Esto hará que la ventana modal desaparezca de la pantalla.
        setSelectedComic(null);
    };
    // Ahora estamos mostrando todos los cómics que encontramos en la página web.
    // Recorremos la lista de cómics y por cada cómic, mostramos una tarjeta con su imagen, título y creador.
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Cómics</h1>
            <div className="row">
                {/* Aquí recorremos todos los cómics */}
                {comics.map((comic) => (
                    <div key={comic.id} className="col-md-4 mb-4">
                        <div className="card">
                            {/* Aquí mostramos la imagen del cómic */}
                            <img
                                src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                                className="card-img-top"
                                alt={comic.title}
                            />
                            <div className="card-body">
                                {/* Mostramos el título del cómic */}
                                <h5 className="card-title">{comic.title}</h5>
                                {/* Mostramos el nombre del creador del cómic, si hay uno */}
                                <p className="card-text">Creador: {comic.creators.items[0]?.name || 'N/A'}</p>
                                {/* Aquí tenemos un botón "Ver Historieta" que ejecutará la función openModal cuando hagamos clic */}
                                <button className="btn btn-primary" onClick={() => openModal(comic)}>Ver Historieta</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Si hay un cómic seleccionado, mostramos una ventana modal */}
            {selectedComic && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* Mostramos el título del cómic seleccionado */}
                                <h5 className="modal-title">{selectedComic.title}</h5>
                                {/* Aquí tenemos un botón "Cerrar" que ejecutará la función closeModal cuando hagamos clic */}
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Mostramos la descripción del cómic seleccionado, si hay una */}
                                <p>{selectedComic.description || 'No hay descripción disponible para esta historieta.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}







