import { StringFilter } from "../../util/StringFilter";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DayOfWeekWhereInput = {
  id?: StringFilter;
  classes?: ClassModelListRelationFilter;
  name?: StringNullableFilter;
};
