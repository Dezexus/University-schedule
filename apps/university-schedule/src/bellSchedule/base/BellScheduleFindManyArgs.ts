/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BellScheduleWhereInput } from "./BellScheduleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BellScheduleOrderByInput } from "./BellScheduleOrderByInput";

@ArgsType()
class BellScheduleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BellScheduleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BellScheduleWhereInput, { nullable: true })
  @Type(() => BellScheduleWhereInput)
  where?: BellScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: [BellScheduleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BellScheduleOrderByInput], { nullable: true })
  @Type(() => BellScheduleOrderByInput)
  orderBy?: Array<BellScheduleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BellScheduleFindManyArgs as BellScheduleFindManyArgs };
