import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BellScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BellSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="number" source="numberField" />
        <TextField label="end_time" source="endTime" />
        <TextField label="start_time" source="startTime" />
      </Datagrid>
    </List>
  );
};
