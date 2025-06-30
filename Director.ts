// Importa la interfaz del constructor que define los pasos de construcción
import { ComputerBuilder } from "./ComputerBuilder";

/**
 * Clase Director.
 * Es responsable de dirigir el proceso de construcción de un producto
 * utilizando los métodos definidos en la interfaz ComputerBuilder.
 */
export class Director {
    // Referencia al builder que se utilizará para construir el producto
    private builder: ComputerBuilder;

    /**
     * Constructor de la clase Director.
     * @param builder - Instancia que implementa la interfaz ComputerBuilder
     */
    constructor(builder: ComputerBuilder) {
        this.builder = builder;
    }

    /**
     * Método que define los pasos específicos para construir una computadora de alto rendimiento (gaming).
     * El Director no conoce la implementación interna del builder,
     * solo llama a los pasos definidos por la interfaz.
     */
    constructGamingComputer(): void {
        this.builder.reset();                         // Inicializa el builder
        this.builder.setCPU("Intel Core i9");         // Establece el CPU
        this.builder.setRAM(32);                      // Establece la RAM (32 GB)
        this.builder.setStorage("1TB SSD");           // Establece el almacenamiento
        this.builder.setGPU("NVIDIA RTX 4090");       // Establece la tarjeta gráfica (GPU)
    }
}
