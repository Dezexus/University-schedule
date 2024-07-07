import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";

export type SubgroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  group?: GroupWhereUniqueInput;
  classes?: ClassModelListRelationFilter;
};
