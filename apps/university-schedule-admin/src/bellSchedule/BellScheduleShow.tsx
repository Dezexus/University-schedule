import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BellScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="number" source="numberField" />
        <TextField label="end_time" source="endTime" />
        <TextField label="start_time" source="startTime" />
      </SimpleShowLayout>
    </Show>
  );
};
