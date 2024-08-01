import { IProduct } from "@libs/entities";
import { IUseCase } from "./IUseCase";

export type TGetProductUseCaseInput = {
  product_id: string;
};

export type TGetProductUseCaseOutput = IProduct;
export type IGetProductUseCase = IUseCase<
  TGetProductUseCaseInput,
  TGetProductUseCaseOutput
>;
