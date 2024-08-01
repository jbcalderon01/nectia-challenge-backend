import { IProduct } from "@libs/entities";
import { UpdateProductDto } from "../dto";
import { IUseCase } from "./IUseCase";

export type TUpdateProductUseCaseInput = UpdateProductDto;
export type TUpdateProductUseCaseOutput = IProduct;
export type IUpdateProductUseCase = IUseCase<
  TUpdateProductUseCaseInput,
  TUpdateProductUseCaseOutput
>;
