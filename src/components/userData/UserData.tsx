import React, { useState } from 'react';
import './UserData.css'
// import { usePaso } from '../UserContext/UserContext';

export default function UserData() {
    const [inputName, setInputName] = useState('Oscar Adan Reyes Lozada');
    const [inputAge, setInputAge] = useState('38 años');
    const [inputMail, setInputMail] = useState('osadan12@gmail.com');
    const [inputPhone, setInputPhone] = useState('01 55 553036 7508');
    const [inputJob, setInputJob] = useState('Mega Serviplaza El Rosario Cdmx');
    // const { siguientePaso } = usePaso();

    function handleSubmit(e) {
        e.preventDefault();
        window.history.pushState({}, '', '/Objectives');  // Change the URL without reloading the page
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);  // Dispatch a navigation event
    }

    return (
      <main>
        <form className='user-data' onSubmit={handleSubmit}>
            <p>Para comenzar, ayúdanos a verificar tus datos.</p>
            <div>
                <label htmlFor="name">
                    <img src="src/assets/UserData/person-svgrepo-com.svg" alt="person" />
                    Nombre
                </label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={inputName}
                    placeholder='Oscar Adan Reyes Lozada'
                    onChange={(e)=>setInputName(e.target.value)} 
                    required
                />
            </div>
            <div className='input-edad'>
                <label htmlFor="age">
                    <img src="src/assets/UserData/birthday-cake-celebration-festival-party-svgrepo-com.svg" alt="birthday" />
                    Edad
                </label>
                <input 
                    type="text" 
                    name="edad" 
                    placeholder='38 años'
                    value={inputAge}
                    onChange={(e)=>setInputAge(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label htmlFor="mail">
                    <img src="src/assets/UserData/mail-svgrepo-com.svg" alt="mail" />
                    Correo electrónico
                </label>
                <input 
                    type="text" 
                    name="mail" 
                    placeholder='osadan12@gmail.com'
                    value={inputMail}
                    onChange={(e)=>setInputMail(e.target.value)} 
                    required
                />
            </div>
            <div className='input-telefono'>
                <label htmlFor="phone">
                    <img src="src/assets/UserData/smartphone-svgrepo-com.svg" alt="smartphone" />
                    Teléfono celular
                </label>
                <input 
                    type="text" 
                    name="telefono" 
                    placeholder='01 55 553036 7508'
                    value={inputPhone}
                    onChange={(e)=>setInputPhone(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label htmlFor="job">
                    <img src="src/assets/UserData/location-pin-alt-1-svgrepo-com.svg" alt="location" />
                    Lugar de trabajo
                </label>
                <input 
                    type="text" 
                    name="trabajo" 
                    placeholder='Mega Serviplaza El Rosario Cdmx'
                    value={inputJob}
                    onChange={(e)=>setInputJob(e.target.value)} 
                    required
                />
            </div>
            <div id="button-container">
                <button type="submit">Continuar</button>
            </div>
        </form>
      </main>
    );
}