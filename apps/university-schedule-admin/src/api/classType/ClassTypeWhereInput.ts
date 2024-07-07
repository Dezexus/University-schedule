import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClassTypeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
