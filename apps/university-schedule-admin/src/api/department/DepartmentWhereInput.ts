import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { SubjectListRelationFilter } from "../subject/SubjectListRelationFilter";

export type DepartmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  groups?: GroupListRelationFilter;
  subjects?: SubjectListRelationFilter;
};
