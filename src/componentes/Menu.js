import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
//import 'bootstrap/dist/css/bootstrap.css';
function Menu(){
return <>
    <Nav className="navbar fixed-top navbar-expand-md navbar-dark">

        <div className="container">
        <Link href="/">
            <a className="navbar-brand">
                <img src="Images/logo.png" alt="" height="28" />
            </a>
        </Link>

            <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link" aria-current="page" >Home</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/processos">
                        <a className="nav-link" aria-current="page" >Features</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/clientes">
                        <a className="nav-link" aria-current="page" >Clientes</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/prazos">
                        <a className="nav-link" aria-current="page">Prazos</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/consulta">
                        <a className="nav-link" aria-current="page">Consulta</a>
                    </Link>
                    </li>
                </ul>
            </div>

        </div>
    </Nav> 
</>


}

export default Menu;