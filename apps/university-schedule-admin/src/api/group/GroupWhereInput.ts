import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { SubgroupListRelationFilter } from "../subgroup/SubgroupListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
  subgroups?: SubgroupListRelationFilter;
};
