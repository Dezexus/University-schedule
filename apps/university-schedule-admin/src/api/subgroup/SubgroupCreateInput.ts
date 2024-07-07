import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { ClassModelCreateNestedManyWithoutSubgroupsInput } from "./ClassModelCreateNestedManyWithoutSubgroupsInput";

export type SubgroupCreateInput = {
  name?: string | null;
  group?: GroupWhereUniqueInput | null;
  classes?: ClassModelCreateNestedManyWithoutSubgroupsInput;
};
