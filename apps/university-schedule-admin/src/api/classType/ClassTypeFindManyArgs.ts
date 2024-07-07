import { ClassTypeWhereInput } from "./ClassTypeWhereInput";
import { ClassTypeOrderByInput } from "./ClassTypeOrderByInput";

export type ClassTypeFindManyArgs = {
  where?: ClassTypeWhereInput;
  orderBy?: Array<ClassTypeOrderByInput>;
  skip?: number;
  take?: number;
};
