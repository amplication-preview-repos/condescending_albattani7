import { Injectable } from "@nestjs/common";
import { TransformInsuranceDataInput } from "../dataTransformation/TransformInsuranceDataInput";

@Injectable()
export class DataTransformationService {
  constructor() {}
  async TransformInsuranceData(args: TransformInsuranceDataInput): Promise<TransformInsuranceDataInput> {
    throw new Error("Not implemented");
  }
}
