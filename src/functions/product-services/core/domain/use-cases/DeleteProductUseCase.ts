import { IProduct } from "@libs/entities";
import { IUseCase } from "./IUseCase";

export type TDeleteProductUseCaseInput = {
  product_id: string;
};

export type TDeleteProductUseCaseOutput = IProduct;

export type IDeleteProductUseCase = IUseCase<
  TDeleteProductUseCaseInput,
  TDeleteProductUseCaseOutput
>;
