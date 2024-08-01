import { IProduct } from "@libs/entities";
import { CreateProductDto } from "../dto";
import { IUseCase } from "./IUseCase";

export type TCreateProductUseCaseInput = CreateProductDto;
export type TCreateProductUseCaseOutput = IProduct;

export type ICreateProductUseCase = IUseCase<
  TCreateProductUseCaseInput,
  TCreateProductUseCaseOutput
>;
