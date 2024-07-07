import { ClassType as TClassType } from "../api/classType/ClassType";

export const CLASSTYPE_TITLE_FIELD = "name";

export const ClassTypeTitle = (record: TClassType): string => {
  return record.name?.toString() || String(record.id);
};
