import React, { useState, useEffect } from "react";

export default function Comics() {
    const [comics, setComics] = useState([]);
    const [selectedComic, setSelectedComic] = useState(null);

    useEffect(() => {
        const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`;

        const fetchComics = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data.data.results);
            setComics(data.data.results);
        } catch (error) {
            console.log('Error fetching:', error);
        }
        };

        fetchComics();
    }, []); // <-- Se cierra aquí el useEffect

    const openModal = (comic) => {
        setSelectedComic(comic);
        };
        
        const closeModal = () => {
            setSelectedComic(null);
        };
        
        return (
            <div className="container mt-4">
            <h1 className="mb-4">Comics</h1>
            <div className="row">
                {comics.map((comic) => (
                <div key={comic.id} className="col-md-3 mb-4">
                    <div className="card">
                    <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        className="card-img-top"
                        alt={comic.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{comic.title}</h5>
                        <button
                        className="btn btn-primary"
                        onClick={() => openModal(comic)}
                        >
                        Ver más
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        
            {/* Agregamos el componente Modal */}
            {selectedComic && (
                <div className="modal fade show" tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{selectedComic.title}</h5>
                        <button
                        type="button"
                        className="close"
                        onClick={closeModal}
                        >
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {selectedComic.description ? (
                        <p>{selectedComic.description}</p>
                        ) : (
                        <p>No hay descripción para este cómic</p>
                        )}
                        <img
                        src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`}
                        alt={selectedComic.title}
                        className="img-fluid"
                        />
                    </div>
                    </div>
                </div>
                </div>
            )}
            </div>
        );
    }

    








































































































































































































































