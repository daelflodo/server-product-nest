import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: String;

  @Prop()
  description: String;

  @Prop()
  image: String;

  @Prop()
  price: Number;

  @Prop({ default: Date.now }) // Cambiado de type: Date y default
  createdAt: Date; // Cambiado de { type: Date; default: Date.now } a Date
}
export const ProducSchema = SchemaFactory.createForClass(Product);