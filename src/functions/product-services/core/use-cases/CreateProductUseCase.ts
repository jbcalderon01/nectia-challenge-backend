import { ApiError, ErrorStatusCodes } from "@libs/utils";
import {
  IProductRepository,
  IUseCase,
  TCreateProductUseCaseInput,
  TCreateProductUseCaseOutput,
} from "../domain";
import { PRODUCT_ERROR } from "../domain/interfaces";

export class CreateProductUseCase
  implements IUseCase<TCreateProductUseCaseInput, TCreateProductUseCaseOutput>
{
  constructor(private readonly productRepository: IProductRepository) {}
  async execute(
    input: TCreateProductUseCaseInput
  ): Promise<TCreateProductUseCaseOutput> {
    const isExistProduct = await this.productRepository.getProduct({
      sku: input.sku,
    });

    if (isExistProduct) {
      throw new ApiError(
        PRODUCT_ERROR.PRODUCT_ALREADY_EXIST,
        ErrorStatusCodes.BadRequest
      );
    }

    const product = await this.productRepository.createProduct(input);

    return product;
  }
}
