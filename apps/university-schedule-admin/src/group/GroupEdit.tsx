import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";
import { SubgroupTitle } from "../subgroup/SubgroupTitle";

export const GroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="subgroups"
          reference="Subgroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubgroupTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
