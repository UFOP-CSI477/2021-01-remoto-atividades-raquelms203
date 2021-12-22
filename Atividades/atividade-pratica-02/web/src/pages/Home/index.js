import { DataGrid, GridCellParams, GridColDef } from "@material-ui/data-grid";
import { useEffect, useCallback, useState } from "react";
import subjectService from "../../services/cityManagerService";

export default function Home() {
  const [rows, setRows] = useState([]);
  const columns = [
    {
      field: "name",
      headerName: "Nome",
      align: "center",
      headerAlign: "center",
    },

    {
      field: "price",
      headerName: "Preço",
      align: "center",
      headerAlign: "center",
    },
  ];

  const fetchSubjects = useCallback(async () => {
    const response = await subjectService.getList();
    if (response !== null) {
      setRows(response.data);
    }
  }, []);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  return (
    <>
      <DataGrid rows={rows} columns={columns} />
    </>
  );
}
