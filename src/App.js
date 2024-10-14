import React from 'react'; // Se importa la librer�a React para construir los componentes
import './App.css'; // Se importan los estilos CSS para el componente
import ATMQueueComponent from './ATMQueueComponent'; // Se importa el componente de gesti�n de la cola de ATM

function App() {
    return (
        <div className="App"> {/* Este es el contenedor principal de la aplicaci�n */}
            <header className="App-header"> {/* Este sera el encabezado de la aplicaci�n */}
                <h1>ATM Queue Management</h1> {/* Este sera el t�tulo de la p�gina */}
                <ATMQueueComponent /> {/* Aqui se renderizara el componente de gesti�n de cola */}
            </header>
        </div>
    );
}

export default App; // Aqui finalmente se exporta el componente App

