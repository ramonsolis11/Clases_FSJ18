import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Series() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        getSeriesData();
    }, []);

    const getSeriesData = () => {
        axios
        .get(
            `https://gateway.marvel.com/v1/public/series?ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`
        )
        .then((response) => {
            setSeries(response.data.data.results);
        })
        .catch((error) => {
            console.log(error);
            setSeries([]);
        });
    };

    return (
        <div className='bg-dark text-white'>
            <div className='container py-4'>
                <h1 className='text-center mb-4'>Lista de Series</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {series.map((serie, index) => (
                        <div key={index} className='col'>
                            <div className='card h-100'>
                                <img
                                    src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                                    className='card-img-top'
                                    alt={serie.title}
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>{serie.title}</h5>
                                    {serie.description && (
                                        <div>
                                            <h6 className='card-subtitle mb-2 text-muted'>Descripción</h6>
                                            <p className='card-text'>{serie.description}</p>
                                        </div>
                                    )}
                                    {serie.type && (
                                        <div>
                                            <h6 className='card-subtitle mb-2 text-muted'>Tipo</h6>
                                            <p className='card-text'>{serie.type}</p>
                                        </div>
                                    )}
                                    {serie.startYear && (
                                        <div>
                                            <h6 className='card-subtitle mb-2 text-muted'>Año de inicio</h6>
                                            <p className='card-text'>{serie.startYear}</p>
                                        </div>
                                    )}
                                    {serie.creators && serie.creators.items && serie.creators.items.length > 0 && (
                                        <div>
                                            <h6 className='card-subtitle mb-2 text-muted'>Creadores</h6>
                                            <ul className='list-unstyled'>
                                                {serie.creators.items.map((creator, index) => (
                                                    <li key={index}>{creator.name}</li>
                                                ))}
                                            </ul>
                                        </div>
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







