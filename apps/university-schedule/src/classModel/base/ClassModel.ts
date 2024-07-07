/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsOptional,
  ValidateNested,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Subject } from "../../subject/base/Subject";
import { Room } from "../../room/base/Room";
import { Subgroup } from "../../subgroup/base/Subgroup";
import { DayOfWeek } from "../../dayOfWeek/base/DayOfWeek";

@ObjectType()
class ClassModel {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Subject,
  })
  @ValidateNested()
  @Type(() => Subject)
  @IsOptional()
  subject?: Subject | null;

  @ApiProperty({
    required: false,
    type: () => Room,
  })
  @ValidateNested()
  @Type(() => Room)
  @IsOptional()
  room?: Room | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  teacher!: string | null;

  @ApiProperty({
    required: false,
    type: () => Subgroup,
  })
  @ValidateNested()
  @Type(() => Subgroup)
  @IsOptional()
  subgroup?: Subgroup | null;

  @ApiProperty({
    required: false,
    type: () => DayOfWeek,
  })
  @ValidateNested()
  @Type(() => DayOfWeek)
  @IsOptional()
  dayOfWeek?: DayOfWeek | null;
}

export { ClassModel as ClassModel };
