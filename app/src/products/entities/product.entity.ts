import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @Prop()
    nome: string;

    @Prop()
    descricao: string;

    @Prop()
    preco: number;

    @Prop()
    username: string;

    @Prop()
    isPublished : boolean = false;
}

export const ProductSchema =
SchemaFactory.createForClass(Product);