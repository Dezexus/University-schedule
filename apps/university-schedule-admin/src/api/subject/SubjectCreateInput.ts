import { ClassModelCreateNestedManyWithoutSubjectsInput } from "./ClassModelCreateNestedManyWithoutSubjectsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type SubjectCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutSubjectsInput;
  name?: string | null;
  department?: DepartmentWhereUniqueInput | null;
};
