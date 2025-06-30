// Importamos las clases necesarias
import { GamingComputerBuilder } from "./GamingComputerBuilder";
import { Director } from "./Director";

/**
 * Función principal donde se ejecuta el patrón Builder
 */
function main() {
    // Creamos el builder concreto para computadoras gaming
    const builder = new GamingComputerBuilder();

    // Creamos el director y le asignamos el builder
    const director = new Director(builder);

    // Usamos el director para construir una computadora gaming
    director.constructGamingComputer();

    // Obtenemos el producto terminado desde el builder
    const computer = builder.getResult();

    // Mostramos la descripción de la computadora construida
    console.log(computer.toString());
}

// Ejecutamos la función principal
main();
