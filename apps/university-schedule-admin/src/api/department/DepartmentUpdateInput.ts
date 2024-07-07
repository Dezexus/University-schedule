import { GroupUpdateManyWithoutDepartmentsInput } from "./GroupUpdateManyWithoutDepartmentsInput";
import { SubjectUpdateManyWithoutDepartmentsInput } from "./SubjectUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  name?: string | null;
  groups?: GroupUpdateManyWithoutDepartmentsInput;
  subjects?: SubjectUpdateManyWithoutDepartmentsInput;
};
