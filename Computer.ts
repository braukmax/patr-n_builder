
// Producto
export class Computer {
    cpu: string = "";
    ram: number = 0;
    storage: string = "";
    gpu: string = "";

    toString(): string {
        return \`Computer with CPU: \${this.cpu}, RAM: \${this.ram}GB, Storage: \${this.storage}, GPU: \${this.gpu}\`;
    }
}
