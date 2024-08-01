import { FastifyRequest } from "fastify";
import {
  CreateProductDto,
  GetProductsDto,
  IProductServices,
  UpdateProductDto,
} from "../../../core";

export function ProductsController(productServices: IProductServices) {
  async function getProduct(
    req: FastifyRequest<{ Params: { productId: string } }>
  ) {
    const { productId } = req.params;

    const product = await productServices.getProduct({
      product_id: productId,
    });
    return product;
  }

  async function deleteProduct(
    req: FastifyRequest<{ Params: { productId: string } }>
  ) {
    const { productId } = req.params;

    const product = await productServices.deleteProduct(productId);

    return product;
  }

  async function getAllProducts(
    req: FastifyRequest<{ Querystring: GetProductsDto & { tags: string } }>
  ) {
    const {
      page = 0,
      per_page = 10,
      name,
      sku,
      price,
      quantity,
      sortBy = "createdAt",
      sortDirection = "desc",
      tags,
    } = req.query;

    const products = await productServices.getAllProducts({
      page: page,
      per_page: per_page,
      sortBy: sortBy as string,
      sortDirection: sortDirection as "asc" | "desc",
      tags: tags ? JSON.parse(tags as string) : undefined,
      name: name as string,
      sku: sku as string,
      price: price,
      quantity: quantity,
    });

    return products;
  }

  async function updateProduct(
    req: FastifyRequest<{
      Params: { productId: string };
      Body: UpdateProductDto;
    }>
  ) {
    const { name, price, description, image_url, quantity, sku, tags } =
      req.body;
    const { productId } = req.params;

    const product = await productServices.updateProduct({
      _id: productId,
      name,
      price,
      description,
      image_url,
      quantity,
      sku,
      tags,
    });

    return product;
  }

  async function createProduct(
    req: FastifyRequest<{
      Body: CreateProductDto;
    }>
  ) {
    const {
      name,
      price,
      created_at,
      description,
      tags,
      image_url,
      quantity,
      sku,
    } = req.body;

    const product = await productServices.createProduct({
      name,
      price,
      created_at,
      description,
      image_url,
      tags,
      quantity,
      sku,
    });

    return product;
  }

  return {
    createProduct,
    updateProduct,
    getAllProducts,
    deleteProduct,
    getProduct,
  };
}
