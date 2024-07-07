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
import { GroupCreateNestedManyWithoutDepartmentsInput } from "./GroupCreateNestedManyWithoutDepartmentsInput";
import { Type } from "class-transformer";
import { SubjectCreateNestedManyWithoutDepartmentsInput } from "./SubjectCreateNestedManyWithoutDepartmentsInput";

@InputType()
class DepartmentCreateInput {
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
    type: () => GroupCreateNestedManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => GroupCreateNestedManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => GroupCreateNestedManyWithoutDepartmentsInput, {
    nullable: true,
  })
  groups?: GroupCreateNestedManyWithoutDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () => SubjectCreateNestedManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => SubjectCreateNestedManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => SubjectCreateNestedManyWithoutDepartmentsInput, {
    nullable: true,
  })
  subjects?: SubjectCreateNestedManyWithoutDepartmentsInput;
}

export { DepartmentCreateInput as DepartmentCreateInput };
