/**
 * Clase Computer
 * 
 * Representa el producto final que será construido utilizando el patrón Builder.
 * Contiene propiedades básicas de una computadora y un método para mostrar sus especificaciones.
 */
export class Computer {
    // Procesador de la computadora (CPU), por ejemplo: "Intel Core i9"
    cpu: string = "";

    // Cantidad de memoria RAM en gigabytes, por ejemplo: 16, 32
    ram: number = 0;

    // Tipo y tamaño de almacenamiento, por ejemplo: "1TB SSD"
    storage: string = "";

    // Tarjeta gráfica (GPU), por ejemplo: "NVIDIA RTX 4090"
    gpu: string = "";

    /**
     * Método para representar la información de la computadora como una cadena legible.
     * @returns Una cadena que describe la configuración completa de la computadora.
     */
    toString(): string {
        return `Computer with CPU: ${this.cpu}, RAM: ${this.ram}GB, Storage: ${this.storage}, GPU: ${this.gpu}`;
    }
}
