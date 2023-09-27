import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getProducts() {
    const product = await this.productModel.find();
    return product;
  }

  async getProduct(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }

  async createProduct(createProductDTO: CreateProductDTO) {
    const product = new this.productModel(createProductDTO);
    await product.save();
    return product;
  }

  async deleteProduct(id: string) {
    const deleteproduct = await this.productModel.findOneAndDelete({ _id: id });
    if (!deleteproduct) throw new NotFoundException('Product does not exist!');
    return deleteproduct;
  }

  async putProduct(id: string, createProductDTO: CreateProductDTO) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }
}
