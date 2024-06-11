/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InsuranceClaimWhereInput } from "./InsuranceClaimWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InsuranceClaimListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InsuranceClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceClaimWhereInput)
  @IsOptional()
  @Field(() => InsuranceClaimWhereInput, {
    nullable: true,
  })
  every?: InsuranceClaimWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceClaimWhereInput)
  @IsOptional()
  @Field(() => InsuranceClaimWhereInput, {
    nullable: true,
  })
  some?: InsuranceClaimWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceClaimWhereInput)
  @IsOptional()
  @Field(() => InsuranceClaimWhereInput, {
    nullable: true,
  })
  none?: InsuranceClaimWhereInput;
}
export { InsuranceClaimListRelationFilter as InsuranceClaimListRelationFilter };