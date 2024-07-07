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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { GroupUpdateManyWithoutDepartmentsInput } from "./GroupUpdateManyWithoutDepartmentsInput";
import { Type } from "class-transformer";
import { SubjectUpdateManyWithoutDepartmentsInput } from "./SubjectUpdateManyWithoutDepartmentsInput";

@InputType()
class DepartmentUpdateInput {
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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => GroupUpdateManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => GroupUpdateManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => GroupUpdateManyWithoutDepartmentsInput, {
    nullable: true,
  })
  groups?: GroupUpdateManyWithoutDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () => SubjectUpdateManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => SubjectUpdateManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => SubjectUpdateManyWithoutDepartmentsInput, {
    nullable: true,
  })
  subjects?: SubjectUpdateManyWithoutDepartmentsInput;
}

export { DepartmentUpdateInput as DepartmentUpdateInput };
