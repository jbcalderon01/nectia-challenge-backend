import { IProduct } from "@libs/entities";

export type CreateProductDto = Omit<IProduct, "_id">;

export type UpdateProductDto = Partial<Omit<IProduct, "_id">> & {
  _id: string;
};

export type GetProductDto =
  | { product_id: string; sku?: string }
  | { sku: string; product_id?: string };

export type GetProductsDto = {
  per_page: number;
  page: number;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
};
