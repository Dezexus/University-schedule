/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SubgroupWhereUniqueInput } from "../../subgroup/base/SubgroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SubgroupUpdateManyWithoutGroupsInput {
  @Field(() => [SubgroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubgroupWhereUniqueInput],
  })
  connect?: Array<SubgroupWhereUniqueInput>;

  @Field(() => [SubgroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubgroupWhereUniqueInput],
  })
  disconnect?: Array<SubgroupWhereUniqueInput>;

  @Field(() => [SubgroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubgroupWhereUniqueInput],
  })
  set?: Array<SubgroupWhereUniqueInput>;
}

export { SubgroupUpdateManyWithoutGroupsInput as SubgroupUpdateManyWithoutGroupsInput };
