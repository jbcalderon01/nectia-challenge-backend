import { TPagination, IProduct } from "@libs/entities";
import {
  GetProductDto,
  GetProductsDto,
  ICreateProductUseCase,
  IDeleteProductUseCase,
  IGetAllProductsUseCase,
  IGetProductUseCase,
  IProductServices,
  IUpdateProductUseCase,
  TCreateProductUseCaseInput,
  TUpdateProductUseCaseInput,
} from "../domain";

export class ProductServices implements IProductServices {
  constructor(
    private deps: {
      createProductUseCase: ICreateProductUseCase;
      updateProductUseCase: IUpdateProductUseCase;
      deleteProductUseCase: IDeleteProductUseCase;
      getAllProductsUseCase: IGetAllProductsUseCase;
      getProductUseCase: IGetProductUseCase;
    }
  ) {}

  async createProduct(input: TCreateProductUseCaseInput) {
    return this.deps.createProductUseCase.execute(input);
  }

  async updateProduct(input: TUpdateProductUseCaseInput) {
    return this.deps.updateProductUseCase.execute(input);
  }

  async deleteProduct(product_id: string) {
    return this.deps.deleteProductUseCase.execute({
      product_id,
    });
  }
  getAllProducts(dto: GetProductsDto): Promise<TPagination<IProduct>> {
    return this.deps.getAllProductsUseCase.execute(dto);
  }

  getProduct(dto: GetProductDto): Promise<IProduct | null> {
    return this.deps.getProductUseCase.execute({
      product_id: dto.product_id,
    });
  }
}
