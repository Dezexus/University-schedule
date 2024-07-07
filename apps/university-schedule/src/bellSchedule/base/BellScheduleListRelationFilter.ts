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
import { BellScheduleWhereInput } from "./BellScheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BellScheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BellScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => BellScheduleWhereInput)
  @IsOptional()
  @Field(() => BellScheduleWhereInput, {
    nullable: true,
  })
  every?: BellScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => BellScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => BellScheduleWhereInput)
  @IsOptional()
  @Field(() => BellScheduleWhereInput, {
    nullable: true,
  })
  some?: BellScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => BellScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => BellScheduleWhereInput)
  @IsOptional()
  @Field(() => BellScheduleWhereInput, {
    nullable: true,
  })
  none?: BellScheduleWhereInput;
}
export { BellScheduleListRelationFilter as BellScheduleListRelationFilter };