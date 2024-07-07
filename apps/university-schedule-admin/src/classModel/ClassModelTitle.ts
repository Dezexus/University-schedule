import { ClassModel as TClassModel } from "../api/classModel/ClassModel";

export const CLASSMODEL_TITLE_FIELD = "typeField";

export const ClassModelTitle = (record: TClassModel): string => {
  return record.typeField?.toString() || String(record.id);
};
