import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async getAllProducts(): Promise<any> {
    try {
      const products = await this.prismaService.shoes.findMany();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(id: number): Promise<any> {
    try {
      const product = await this.prismaService.shoes.findUnique({
        where: { id }
      });

      if (!product) {
        throw new NotFoundException(`Product not found with id: ${id}`)
      }

      return product;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(createProductDto: CreateProductDto): Promise<any> {
    try {
      const product = await this.prismaService.shoes.create({
        data: createProductDto
      });

      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    try {
      const checkProduct = await this.prismaService.shoes.findUnique({
        where: { id }
      });
      if (!checkProduct) {
        throw new NotFoundException(`Product not found with id: ${id}`);
      }

      const product = await this.prismaService.shoes.update({
        where: { id },
        data: updateProductDto
      });

      return product;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<any> {
    try {
      const product = await this.prismaService.shoes.findUnique({
        where: { id }
      });

      if (!product) {
        throw new NotFoundException(`Product not found with id: ${id}`)
      }

      // delete
      await this.prismaService.shoes.delete({
        where: { id }
      });

      return null;
    } catch (error) {
      throw error;
    }
  }
}
