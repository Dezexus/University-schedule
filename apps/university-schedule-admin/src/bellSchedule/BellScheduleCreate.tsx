import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BellScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="number" source="numberField" />
        <DateTimeInput label="end_time" source="endTime" />
        <DateTimeInput label="start_time" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
