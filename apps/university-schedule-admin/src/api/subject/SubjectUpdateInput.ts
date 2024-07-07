import { ClassModelUpdateManyWithoutSubjectsInput } from "./ClassModelUpdateManyWithoutSubjectsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type SubjectUpdateInput = {
  classes?: ClassModelUpdateManyWithoutSubjectsInput;
  name?: string | null;
  department?: DepartmentWhereUniqueInput | null;
};
