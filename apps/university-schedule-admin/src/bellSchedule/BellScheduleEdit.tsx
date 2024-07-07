import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BellScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="number" source="numberField" />
        <DateTimeInput label="end_time" source="endTime" />
        <DateTimeInput label="start_time" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
