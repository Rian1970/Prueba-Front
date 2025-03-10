import React, { useState, useEffect } from 'react';
import './UserData.css'

export default function UserData() {
    const [inputName, setInputName] = useState('Oscar Adan Reyes Lozada');
    const [inputAge, setInputAge] = useState('38 años')
    const [inputMail, setInputMail] = useState('osadan12@gmail.com');
    const [inputPhone, setInputPhone] = useState('01 55 553036 7508');
    const [inputJob, setInputJob] = useState('Mega Serviplaza El Rosario Cdmx');
    const [error, setError] = useState("");

    useEffect(() => {
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    
        if (inputMail && !emailRegex.test(inputMail)) {
        setError("Correo inválido");
        } else {
        setError("");
        }
    }, [inputMail]);

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
                    <img src="/assets/UserData/person.svg" alt="person" />
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
            <div id='input-edad'>
                <label htmlFor="age">
                    <img src="/assets/UserData/birthday.svg" alt="birthday" />
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
                    <img src="/assets/UserData/mail.svg" alt="mail" />
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
                {error && <p style={{ color: "red", margin: 0, fontSize: 10}}>{error}</p>}
            </div>
            <div id='input-telefono'>
                <label htmlFor="phone">
                    <img src="/assets/UserData/smartphone.svg" alt="smartphone" />
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
                    <img src="/assets/UserData/location.svg" alt="location" />
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