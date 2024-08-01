import { IProduct, TPagination } from "@libs/entities";
import {
  CreateProductDto,
  GetProductDto,
  GetProductsDto,
  UpdateProductDto,
} from "../dto";

export interface IProductServices {
  getProduct(dto: GetProductDto): Promise<IProduct | null>;
  getAllProducts(dto: GetProductsDto): Promise<TPagination<IProduct>>;
  createProduct(dto: CreateProductDto): Promise<IProduct>;
  updateProduct(dto: UpdateProductDto): Promise<IProduct | null>;
  deleteProduct(product_id: string): Promise<IProduct>;
}
