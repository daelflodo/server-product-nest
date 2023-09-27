export class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    readonly price: number;
    readonly createdAt: Date;
}