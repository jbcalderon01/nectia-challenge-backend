import { Db } from "mongodb";
import { ProductRepository } from "./adapters";
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  GetAllProductsUseCase,
  GetProductUseCase,
  ProductServices,
  UpdateProductUseCase,
} from "../core";
import { ProductsController } from "./presentations/controllers";
import { DatabaseEnum, mongoClient } from "@libs/database";

// Db Instance
const dbClient = new Db(mongoClient, DatabaseEnum.NECTIA);

// Repositories
const productRepository = new ProductRepository(dbClient);

// Use cases
const createProductUseCase = new CreateProductUseCase(productRepository);
const updateProductUseCase = new UpdateProductUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase(productRepository);
const getProductUseCase = new GetProductUseCase(productRepository);
const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);

// Services
const productServices = new ProductServices({
  createProductUseCase,
  updateProductUseCase,
  deleteProductUseCase,
  getProductUseCase,
  getAllProductsUseCase,
});

// Controllers
export const productsController = ProductsController(productServices);
