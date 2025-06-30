
import { Computer } from "../Computer";
import { ComputerBuilder } from "../ComputerBuilder";

export class GamingComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    reset(): void {
        this.computer = new Computer();
    }

    setCPU(cpu: string): void {
        this.computer.cpu = cpu;
    }

    setRAM(ram: number): void {
        this.computer.ram = ram;
    }

    setStorage(storage: string): void {
        this.computer.storage = storage;
    }

    setGPU(gpu: string): void {
        this.computer.gpu = gpu;
    }

    getResult(): Computer {
        return this.computer;
    }
}
