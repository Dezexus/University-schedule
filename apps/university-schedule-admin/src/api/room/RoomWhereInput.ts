import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  capacity?: IntNullableFilter;
  classes?: ClassModelListRelationFilter;
};
