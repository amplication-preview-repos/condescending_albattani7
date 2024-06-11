/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClaimantService } from "../claimant.service";
import { ClaimantCreateInput } from "./ClaimantCreateInput";
import { Claimant } from "./Claimant";
import { ClaimantFindManyArgs } from "./ClaimantFindManyArgs";
import { ClaimantWhereUniqueInput } from "./ClaimantWhereUniqueInput";
import { ClaimantUpdateInput } from "./ClaimantUpdateInput";

export class ClaimantControllerBase {
  constructor(protected readonly service: ClaimantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Claimant })
  async createClaimant(
    @common.Body() data: ClaimantCreateInput
  ): Promise<Claimant> {
    return await this.service.createClaimant({
      data: data,
      select: {
        address: true,
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Claimant] })
  @ApiNestedQuery(ClaimantFindManyArgs)
  async claimants(@common.Req() request: Request): Promise<Claimant[]> {
    const args = plainToClass(ClaimantFindManyArgs, request.query);
    return this.service.claimants({
      ...args,
      select: {
        address: true,
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Claimant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async claimant(
    @common.Param() params: ClaimantWhereUniqueInput
  ): Promise<Claimant | null> {
    const result = await this.service.claimant({
      where: params,
      select: {
        address: true,
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Claimant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClaimant(
    @common.Param() params: ClaimantWhereUniqueInput,
    @common.Body() data: ClaimantUpdateInput
  ): Promise<Claimant | null> {
    try {
      return await this.service.updateClaimant({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          email: true,
          fullName: true,
          id: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Claimant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClaimant(
    @common.Param() params: ClaimantWhereUniqueInput
  ): Promise<Claimant | null> {
    try {
      return await this.service.deleteClaimant({
        where: params,
        select: {
          address: true,
          createdAt: true,
          email: true,
          fullName: true,
          id: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}