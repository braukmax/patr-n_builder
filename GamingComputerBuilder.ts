// Importa la clase Computer, que representa el producto que se va a construir
import { Computer } from "./Computer";

// Importa la interfaz ComputerBuilder que define los pasos de construcción
import { ComputerBuilder } from "./ComputerBuilder";

/**
 * Clase concreta que implementa el patrón Builder para construir una computadora de alto rendimiento (Gaming).
 */
export class GamingComputerBuilder implements ComputerBuilder {
    // Atributo privado que almacena la instancia en construcción
    private computer: Computer;

    /**
     * Constructor: inicializa un nuevo objeto Computer vacío.
     */
    constructor() {
        this.computer = new Computer();
    }

    /**
     * Reinicia el proceso de construcción creando una nueva instancia de Computer.
     */
    reset(): void {
        this.computer = new Computer();
    }

    /**
     * Asigna el procesador (CPU) a la computadora.
     * @param cpu - Descripción del procesador (por ejemplo, "Intel Core i9")
     */
    setCPU(cpu: string): void {
        this.computer.cpu = cpu;
    }

    /**
     * Asigna la cantidad de memoria RAM a la computadora.
     * @param ram - Memoria RAM en GB (por ejemplo, 32)
     */
    setRAM(ram: number): void {
        this.computer.ram = ram;
    }

    /**
     * Asigna el tipo y capacidad de almacenamiento a la computadora.
     * @param storage - Tipo de almacenamiento (por ejemplo, "1TB SSD")
     */
    setStorage(storage: string): void {
        this.computer.storage = storage;
    }

    /**
     * Asigna la tarjeta gráfica (GPU) a la computadora.
     * @param gpu - Modelo de la tarjeta gráfica (por ejemplo, "NVIDIA RTX 4090")
     */
    setGPU(gpu: string): void {
        this.computer.gpu = gpu;
    }

    /**
     * Devuelve el objeto Computer completamente construido.
     * @returns La instancia de Computer finalizada.
     */
    getResult(): Computer {
        return this.computer;
    }
}

