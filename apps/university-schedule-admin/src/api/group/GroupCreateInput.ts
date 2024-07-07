import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { SubgroupCreateNestedManyWithoutGroupsInput } from "./SubgroupCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  name?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  subgroups?: SubgroupCreateNestedManyWithoutGroupsInput;
};
