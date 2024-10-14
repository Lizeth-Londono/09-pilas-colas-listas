// Aqui se crea la clase para representar a una persona
class Person {
    constructor(name, amount, arrivalTime) {
        this.name = name;         // Aqui se debera ingresar el nombre de la persona
        this.amount = amount;     // Aqui se debera ingresar el monto a retirar
        this.arrivalTime = arrivalTime; // Aqui se debera ingresar el tiempo de llegada
    }
}

// Aqui se crea la clase para manejar la cola del ATM
class ATMQueue {
    constructor() {
        this.queue = []; // Aqui se inicializa la cola como un array vacío
    }

    // Aqui se utiliza el método para agregar una persona a la cola
    enqueue(person) {
        this.queue.push(person);
        console.log(`${person.name} ha sido agregado a la cola.`);
    }

    // Aqui se utiliza el método para atender a la siguiente persona en la cola
    dequeue() {
        if (this.queue.length === 0) {
            console.log("No hay personas en la cola.");
            return null;
        }
        const nextPerson = this.queue.shift();
        console.log(`Atendiendo a ${nextPerson.name}, quien desea retirar ${nextPerson.amount}.`);
        return nextPerson;
    }

    // Aqui se utiliza el método para mostrar el estado de la cola
    displayQueue() {
        if (this.queue.length === 0) {
            console.log("La cola está vacía.");
        } else {
            console.log("Estado de la cola:");
            this.queue.forEach((person, index) => {
                console.log(`${index + 1}: ${person.name}, Monto: ${person.amount}, Tiempo de llegada: ${person.arrivalTime}`);
            });
        }
    }
}

export { ATMQueue, Person };
