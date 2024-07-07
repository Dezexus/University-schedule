import { GroupCreateNestedManyWithoutDepartmentsInput } from "./GroupCreateNestedManyWithoutDepartmentsInput";
import { SubjectCreateNestedManyWithoutDepartmentsInput } from "./SubjectCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  name?: string | null;
  groups?: GroupCreateNestedManyWithoutDepartmentsInput;
  subjects?: SubjectCreateNestedManyWithoutDepartmentsInput;
};
