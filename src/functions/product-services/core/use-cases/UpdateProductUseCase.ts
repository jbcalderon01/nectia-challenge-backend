import { ApiError, ErrorStatusCodes } from "@libs/utils";
import {
  IProductRepository,
  IUseCase,
  TUpdateProductUseCaseInput,
  TUpdateProductUseCaseOutput,
} from "../domain";
import { PRODUCT_ERROR } from "../domain/interfaces";

export class UpdateProductUseCase
  implements IUseCase<TUpdateProductUseCaseInput, TUpdateProductUseCaseOutput>
{
  constructor(private readonly productRepository: IProductRepository) {}

  async validations(input: TUpdateProductUseCaseInput) {
    const product = await this.productRepository.getProduct({
      product_id: input._id,
    });

    if (!product) {
      throw new ApiError(
        PRODUCT_ERROR.PRODUCT_NOT_FOUND,
        ErrorStatusCodes.NotFound
      );
    }

    if (input.sku && input.sku !== product.sku) {
      const isExistProduct = await this.productRepository.getProduct({
        sku: input.sku,
      });

      if (isExistProduct) {
        throw new ApiError(
          PRODUCT_ERROR.PRODUCT_SKU_ALREADY_EXIST,
          ErrorStatusCodes.BadRequest
        );
      }
    }
  }

  async execute(
    input: TUpdateProductUseCaseInput
  ): Promise<TUpdateProductUseCaseOutput> {
    await this.validations(input);

    const product = await this.productRepository.updateProduct(input);

    return product!;
  }
}
