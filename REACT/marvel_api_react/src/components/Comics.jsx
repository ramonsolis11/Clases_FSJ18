import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comics() {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        getComicsData();
    }, []);

    const getComicsData = () => {
        axios
        .get(
            `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`
        )
        .then((response) => {
            setComics(response.data.data.results);
        })
        .catch((error) => {
            console.log(error);
            setComics([]);
        });
    };

    return (
        <div className='bg-dark text-white'>
            <div className='container'>
                <h1 className='text-center pt-4'>Lista de Comics</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {comics.map((comic, index) => (
                        <div key={index} className='col'>
                            <div className='card h-100'>
                                <img
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    className='card-img-top'
                                    alt={comic.title}
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>{comic.title}</h5>
                                    {comic.creators && comic.creators.items && comic.creators.items.length > 0 && (
                                        <>
                                            <h6 className='card-subtitle mb-2 text-muted'>Creador</h6>
                                            <p className='card-text'>{comic.creators.items[0].name}</p>
                                        </>
                                    )}
                                    {comic.description && (
                                        <>
                                            <h6 className='card-subtitle mb-2 text-muted'>Historieta</h6>
                                            <p className='card-text'>{comic.description}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}




























































































































































































































