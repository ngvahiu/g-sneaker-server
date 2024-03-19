import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, Put, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@Controller('products')
@UseInterceptors(ResponseInterceptor)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<any> {
    try {
      return await this.productsService.getAllProducts();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async getProduct(@Param('id', ParseIntPipe) id: number): Promise<any> {
    try {
      return await this.productsService.getProduct(id);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<any> {
    try {
      const product = await this.productsService.createProduct(createProductDto);
      return product;
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto): Promise<any> {
    try {
      const product = await this.productsService.updateProduct(id, updateProductDto);
      return product;
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<any> {
    try {
      return await this.productsService.deleteProduct(id);
    } catch (error) {
      throw error;
    }
  }
}
