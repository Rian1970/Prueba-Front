import React, { useState } from 'react';
import './Objectives.css'

export default function Objectives() {

    const [inputCurrentWeight, setInputCurrentWeight] = useState('72.0 kg');
    const [inputHeight, setInputHeight] = useState('158 cm');
    const [inputIdealWeight, setInputIdealWeight] = useState('58.0 kg');
    const [inputMinWeight, setInputMinWeight] = useState('72.0 kg');
    const [inputMaxWeight, setInputMaxWeight] = useState('58.0 kg');

    function handleSubmit(e) {
        e.preventDefault();
        window.history.pushState({}, '', '/MedicalHistory');  // Change the URL without reloading the page
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);  // Dispatch a navigation event
    }

  return (
    <main className='objectives'>
        <div className='title'>
            <img src="src\assets\apple-diet-svgrepo-com.svg" alt="apple" />
            <h2>Objetivos</h2>
        </div>
        <form className='user-info' onSubmit={handleSubmit}>
            <div className='first-form'>
                <div>
                    <label htmlFor="weight">¿Cuál es tu peso actual?</label>
                    <input 
                        type="text" 
                        name="peso" 
                        value={inputCurrentWeight}
                        placeholder='72.0 kg'
                        onChange={(e)=>setInputCurrentWeight(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="height">¿Cuánto mides?</label>
                    <input 
                        type="text" 
                        name="estatura" 
                        placeholder='158 cm'
                        value={inputHeight}
                        onChange={(e)=>setInputHeight(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="idealWeight">¿Cuál es tu peso ideal?</label>
                    <input 
                        type="text" 
                        name="pesoIdeal" 
                        placeholder='58.0 kg'
                        value={inputIdealWeight}
                        onChange={(e)=>setInputIdealWeight(e.target.value)} 
                        required
                    />
                </div>
            </div>
                <p>¿Qué buscas al mejorar tu alimentación?</p>
            <div className="options">
                <label className="radio-button">
                    <input type="radio" name="option" value="perdida de peso" />
                    <img src="src\assets\Objective\weight-scales-svgrepo-com.svg" alt="scales" />
                    <p>Pérdida de peso</p>
                </label>
                <label className="radio-button">
                    <input type="radio" name="option" value="alimentacion saludable" />
                    <img src="src\assets\Objective\vegetables-salad-svgrepo-com.svg" alt="vegetables" />
                    <p>Alimentación saludable</p>
                </label>
                <label className="radio-button">
                    <input type="radio" name="option" value="Aumento de masa muscular" />
                    <img src="src\assets\Objective\weight-gym-svgrepo-com.svg" alt="gym" />
                    <p>Aumento de mas muscular</p>
                </label>
                <label className="radio-button">
                    <input type="radio" name="option" value="Control de enfermedades" />
                    <img src="src\assets\Objective\heart-rate-1-svgrepo-com.svg" alt="heart" />
                    <p>Control de enfermedades</p>
                </label>
            </div>
            <div className='first-form'>
                <div className='min-weight'>
                    <label htmlFor="minWeight">¿Cuál ha sido tu peso mínimo en los últimos 5 años?</label>
                    <input 
                        type="text" 
                        name="pesoMin" 
                        value={inputMinWeight}
                        placeholder='72.0 kg'
                        onChange={(e)=>setInputMinWeight(e.target.value)} 
                        required
                    />
                </div>
                <div className='max-weight'>
                    <label htmlFor="maxWeight">¿Cuál ha sido tu peso máximo en los últimos 5 años?</label>
                    <input 
                        type="text" 
                        name="pesoMax" 
                        placeholder='38.0 kg'
                        value={inputMaxWeight}
                        onChange={(e)=>setInputMaxWeight(e.target.value)} 
                        required
                    />
                </div>
            </div>
            <div id="button-container">
                <button type="submit">Continuar</button>
            </div>
        </form>
    </main>
  );
}