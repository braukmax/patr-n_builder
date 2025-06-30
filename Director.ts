
import { ComputerBuilder } from "./ComputerBuilder";

export class Director {
    private builder: ComputerBuilder;

    constructor(builder: ComputerBuilder) {
        this.builder = builder;
    }

    constructGamingComputer(): void {
        this.builder.reset();
        this.builder.setCPU("Intel Core i9");
        this.builder.setRAM(32);
        this.builder.setStorage("1TB SSD");
        this.builder.setGPU("NVIDIA RTX 4090");
    }
}
