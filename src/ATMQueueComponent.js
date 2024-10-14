import React, { useState } from 'react'; // Aqui se importa el React y el hook useState para el estado en el componente
import { ATMQueue, Person } from './ATMQueue'; // Aqui que la importación sea la correcta

const ATMQueueComponent = () => {
    const atmQueue = new ATMQueue(); // Se inicializa una nueva instancia de la clase ATMQueue, que manejara la cola en el cajero automático

    // Aqui se declaran los estados para manejar los datos del formulario
    const [name, setName] = useState(""); // Se solicita ingresar el nombre de la persona
    const [amount, setAmount] = useState(""); // Se solicita ingresar el monto que la persona desea retirar
    const [arrivalTime, setArrivalTime] = useState(""); // Se solicita ingresar el tiempo de llegada de la persona
    const [queueState, setQueueState] = useState([]); // Aqui se visualizara los estados de almacenamiento actual de la cola

    // Función para agregar una persona a la cola
    const addPerson = () => {
        const newPerson = new Person(name, amount, arrivalTime); // Aqui se crea una nueva instancia de Person con los datos del formulario
        atmQueue.enqueue(newPerson); // Se agrega la nueva persona
        setQueueState([...atmQueue.queue]); // Se actualiza el estado y se vuelve a renderizar
        setName(""); // Se limpia el campo de entrada del nombre
        setAmount(""); // Se limpia el campo de entrada del monto
        setArrivalTime(""); // Se limpia el campo de entrada del tiempo de llegada
        atmQueue.displayQueue(); // Se muestra el estado actual de la cola en la consola para la depuración
    };

    // Aqui se renderiza el componente
    return (
        <div>
            <h2>Gestion de Cola de ATM</h2> {/* Título */}
            <input
                type="text"
                placeholder="Nombre" // Se indica el propósito del campo
                value={name} // Se vincula el valor del input al estado
                onChange={(e) => setName(e.target.value)} // Se actualiza el estado del nombre cuando se escribe
            />
            <input
                type="number"
                placeholder="Monto" // Se indica el propósito del campo
                value={amount} // Se vincula el valor del input al estado
                onChange={(e) => setAmount(e.target.value)} // Se actualiza el estado del nombre cuando se escribe
            />
            <input
                type="text"
                placeholder="Tiempo de llegada" // Se indica el propósito del campo
                value={arrivalTime} // Se vincula el valor del input al estado
                onChange={(e) => setArrivalTime(e.target.value)} // Se actualiza el estado del nombre cuando se escribe
            />
            <button onClick={addPerson}>Agregar a la cola</button> {/* Aqui es el botón para agregar a la cola */}

            <h3>Estado de la cola:</h3> {/* Aqui sera el título para la lista de personas en la cola */}
            <ul>
                {queueState.map((person, index) => ( // Aqui se mapeara a través del estado de la cola para mostrar cada persona
                    <li key={index}>{`${person.name}, Monto: ${person.amount}, Tiempo de llegada: ${person.arrivalTime}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default ATMQueueComponent; // Se exportara el componente para que pueda ser utilizado

