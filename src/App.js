import React from 'react'; // Se importa la librería React para construir los componentes
import './App.css'; // Se importan los estilos CSS para el componente
import ATMQueueComponent from './ATMQueueComponent'; // Se importa el componente de gestión de la cola de ATM

function App() {
    return (
        <div className="App"> {/* Este es el contenedor principal de la aplicación */}
            <header className="App-header"> {/* Este sera el encabezado de la aplicación */}
                <h1>ATM Queue Management</h1> {/* Este sera el título de la página */}
                <ATMQueueComponent /> {/* Aqui se renderizara el componente de gestión de cola */}
            </header>
        </div>
    );
}

export default App; // Aqui finalmente se exporta el componente App

