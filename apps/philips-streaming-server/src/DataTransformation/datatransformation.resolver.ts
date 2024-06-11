import * as graphql from "@nestjs/graphql";
import { TransformInsuranceDataInput } from "../dataTransformation/TransformInsuranceDataInput";
import { DataTransformationService } from "./datatransformation.service";

export class DataTransformationResolver {
  constructor(protected readonly service: DataTransformationService) {}

  @graphql.Mutation(() => TransformInsuranceDataInput)
  async TransformInsuranceData(
    @graphql.Args()
    args: TransformInsuranceDataInput
  ): Promise<TransformInsuranceDataInput> {
    return this.service.TransformInsuranceData(args);
  }
}
