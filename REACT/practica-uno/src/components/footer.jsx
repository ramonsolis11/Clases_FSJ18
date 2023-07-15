import React from 'react';

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <p className="footer-text">
            &copy; {currentYear} Creado por MonDev. Todos los derechos reservados.
            </p>
        </div>
        </footer>
    );
}
