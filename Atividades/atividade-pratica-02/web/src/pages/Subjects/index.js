import { IconButton } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useCallback, useState } from "react";
import subjectService from "../../services/subjectService";
import { formatDate, formatPrice } from "../../utils/functions";
import { Add, Delete, Edit } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      field: "name",
      headerName: "Nome",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth * 0.17,
    },
    {
      field: "price",
      headerName: "Preço",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth * 0.17,
      renderCell: (gridParams) => {
        const { price } = gridParams.row;
        return <div>{formatPrice(price)}</div>;
      },
    },
    {
      field: "created_at",
      headerName: "Criado em",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth * 0.17,
      renderCell: (gridParams) => {
        const { created_at } = gridParams.row;
        return <div>{formatDate(created_at)}</div>;
      },
    },
    {
      field: "update_at",
      headerName: "Atualizado em",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth * 0.17,
      renderCell: (gridParams) => {
        const { update_at } = gridParams.row;
        return <div>{formatDate(update_at)}</div>;
      },
    },
    {
      field: "options",
      headerName: "Opções",
      width: window.innerWidth * 0.17,
      renderCell: (gridParams) => {
        const { id } = gridParams.row;
        return (
          <div>
            <IconButton onClick={() => handleEdit(id)}>
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => {
                if (window.confirm("Deseja apagar esse item?")) {
                  handleDelete(id);
                }
              }}
            >
              {" "}
              <Delete />
            </IconButton>
          </div>
        );
      },
    },
  ];

  const fetchSubjects = useCallback(async () => {
    const response = await subjectService.getList();
    if (response !== null) {
      setRows(response.data || []);
    }
  }, []);

  function handleEdit(id) {
    navigate(`/subject/${id}`);
  }

  async function handleDelete(id) {
    const response = await subjectService.deleteSubject(id);
    if (response !== null) {
      await fetchSubjects();
    }
  }
  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        style={{ height: "80vh", width: "90vw" }}
        hideFooter
      />
    </>
  );
}
