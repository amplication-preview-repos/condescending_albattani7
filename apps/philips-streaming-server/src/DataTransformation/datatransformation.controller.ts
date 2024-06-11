import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataTransformationService } from "./datatransformation.service";
import { TransformInsuranceDataInput } from "../dataTransformation/TransformInsuranceDataInput";

@swagger.ApiTags("dataTransformations")
@common.Controller("dataTransformations")
export class DataTransformationController {
  constructor(protected readonly service: DataTransformationService) {}

  @common.Post("/transformInsuranceData")
  @swagger.ApiOkResponse({
    type: TransformInsuranceDataInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TransformInsuranceData(
    @common.Body()
    body: TransformInsuranceDataInput
  ): Promise<TransformInsuranceDataInput> {
        return this.service.TransformInsuranceData(body);
      }
}
