import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './Welcome.css'

export default function Welcome() {

    const location = useLocation();
    const [icons, setIcons] = useState(0);

    useEffect(
        function () {
            if (location.pathname === "/Objectives") {
                setIcons(2)
            }
            if (location.pathname === "/MedicalHistory") {
                setIcons(3)
            }
        },
        [location]
    );
  
    if (location.pathname === '/') {
        return (
          <div className="bienvenida">
            <img src="src\assets\person-circle-svgrepo-com.svg" alt="person-pic" className='usuario' />
            <div>
                <span className="saludo">¡Bienvenida</span>
                <br />
                <span className="nombre">Oscar Adan</span>
            </div>
          </div>
        );
    }
    
    return (
      <div className='nutricion'>
        <div>
            <img src="src\assets\person-circle-svgrepo-com.svg" alt="person-pic" className='usuario' />
            <div>
                <span className="saludo">Nutrición</span>
                <br />
                <span className="nombre">Hola Oscar Adan</span>
                <p className='texto-bienvenida'>Para brindarte una mejor atención, contesta las siguientes preguntas. 
                    La información es confidencial y esencial para crear tu perfil y 
                    que recibas la mejor atención.</p>
            </div>
        </div>
        <div className='iconos'>
            <div style={{ backgroundColor: icons > 1 ? '#FFD61B' : '#D9D9D9' }}>
                <img src="src\assets\Welcome\apple-diet-svgrepo-com.svg" alt="apple" />
            </div>
            <div style={{ backgroundColor: icons > 2 ? '#FFD61B' : '#D9D9D9' }}>
                <img src="src\assets\Welcome\health-care-love-svgrepo-com.svg" alt="hearth" />
            </div>
            <div>
                <img src="src\assets\Welcome\fruits-pear-svgrepo-com.svg" alt="fruits" />
            </div>
            <div>
                <img src="src\assets\Welcome\clock-svgrepo-com.svg" alt="clock" />
            </div>
            <div>
                <img src="src\assets\Welcome\date-svgrepo-com.svg" alt="date" />
            </div>
        </div>
      </div>
    );
}