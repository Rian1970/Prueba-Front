// import React, { createContext, useContext, useState } from 'react';

// // Crear el contexto
// const PasoContext = createContext();

// // Proveedor del contexto
// export function PasoProvider({ children }) {

//   const [paso, setPaso] = useState(1);

//   const siguientePaso = () => {
//     if (paso < 3) setPaso(paso + 1);
//   };

//   const enviarFormulario = () => {
//     alert('Formulario enviado');
//   };

//   return (
//     <PasoContext.Provider value={{ paso, siguientePaso, enviarFormulario }}>
//       {children}
//     </PasoContext.Provider>
//   );
// }

// // Hook personalizado para usar el contexto
// export function usePaso() {
//   return useContext(PasoContext);
// }
