// Importa la clase Computer que será el producto final construido
import { Computer } from "./Computer";

/**
 * Interfaz ComputerBuilder
 * 
 * Define los pasos necesarios para construir una computadora.
 * Cualquier clase que implemente esta interfaz debe proporcionar
 * una implementación concreta de estos métodos.
 */
export interface ComputerBuilder {
    /**
     * Reinicia el proceso de construcción. Se debe crear una nueva instancia de Computer.
     */
    reset(): void;

    /**
     * Establece el procesador (CPU) de la computadora.
     * @param cpu - Modelo del CPU (por ejemplo, "Intel Core i7", "AMD Ryzen 9")
     */
    setCPU(cpu: string): void;

    /**
     * Establece la cantidad de memoria RAM de la computadora.
     * @param ram - Cantidad de RAM en GB (por ejemplo, 16, 32)
     */
    setRAM(ram: number): void;

    /**
     * Establece el tipo y tamaño de almacenamiento de la computadora.
     * @param storage - Descripción del almacenamiento (por ejemplo, "1TB SSD", "512GB NVMe")
     */
    setStorage(storage: string): void;

    /**
     * Establece la tarjeta gráfica (GPU) de la computadora.
     * @param gpu - Modelo de la tarjeta gráfica (por ejemplo, "NVIDIA RTX 3080", "AMD Radeon RX 6800")
     */
    setGPU(gpu: string): void;

    /**
     * Devuelve la computadora completamente construida.
     * @returns Una instancia del objeto Computer.
     */
    getResult(): Computer;
}
