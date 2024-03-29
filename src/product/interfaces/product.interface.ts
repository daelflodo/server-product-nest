import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    readonly price: number;
    readonly createdAt: Date;
}