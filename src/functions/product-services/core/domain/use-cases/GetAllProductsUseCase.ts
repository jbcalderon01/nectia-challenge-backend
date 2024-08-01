import { IProduct, TPagination } from "@libs/entities";
import { GetProductsDto } from "../dto";
import { IUseCase } from "./IUseCase";

export type TGetAllProductsUseCaseInput = GetProductsDto;
export type TGetAllProductsUseCaseOutput = TPagination<IProduct>;

export type IGetAllProductsUseCase = IUseCase<
  TGetAllProductsUseCaseInput,
  TGetAllProductsUseCaseOutput
>;
