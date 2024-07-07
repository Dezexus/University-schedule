import { StringFilter } from "../../util/StringFilter";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type SubjectWhereInput = {
  id?: StringFilter;
  classes?: ClassModelListRelationFilter;
  name?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
};
