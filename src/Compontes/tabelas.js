import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Checkbox from "@material-ui/core/Checkbox";
import { SelectedContext } from "../hooks/SelectedContext";
import { useForm } from "react-hook-form";
import Typography from "@material-ui/core/Typography";

const useRowStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
      margin: theme.spacing(1),
    },
  },
}));

function createData(name, arr, background) {
  return {
    name,
    background,
    arr,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const classes = useRowStyles();

  const {
    SelectAllList,
    SelectAllDetailList,
    SelectAllCreateList,
    SelectAllEditList,
    selecionartudoListagem,
    selecionartudoDetail,
    selecionartudoCreate,
    selecionartudoEdit,
    SelectAllDeleteList,
    selecionartudoDelete,
  } = useContext(SelectedContext);

  const { register } = useForm();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell
          component="th"
          scope="row"
          style={{ background: row.background ? row.background : "#F1EFEF" }}
        >
          {row.name}
          {row.arr ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          ) : null}
        </TableCell>
        {row.name === "Todos" ? (
          <>
            <TableCell
              padding="checkbox"
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoListagem}
                onClick={SelectAllList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoDetail}
                onClick={SelectAllDetailList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                checked={selecionartudoCreate}
                onClick={SelectAllCreateList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoEdit}
                onClick={SelectAllEditList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoDelete}
                onClick={SelectAllDeleteList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
          </>
        ) : (
          <>
            <TableCell
              padding="checkbox"
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                value={row.name}
                indeterminate={false}
                checked={selecionartudoListagem}
                name={row.name}
                onChange={() => SelectAllList(row.name)}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoDetail}
                onClick={SelectAllDetailList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                checked={selecionartudoCreate}
                onClick={SelectAllCreateList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoEdit}
                onClick={SelectAllEditList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
            <TableCell
              align="right"
              style={{
                background: row.background ? row.background : "#F1EFEF",
              }}
            >
              <Checkbox
                indeterminate={false}
                checked={selecionartudoDelete}
                onClick={SelectAllDeleteList}
                color="default"
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </TableCell>
          </>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell width="260" />
                  </TableRow>
                </TableHead>
                {row.arr?.map((item, i) => (
                  <TableBody key={i}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {item}
                      </TableCell>
                      <TableCell align="right">
                        <Checkbox
                          indeterminate={false}
                          color="default"
                          checked={selecionartudoListagem}
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Checkbox
                          indeterminate={false}
                          style={{ left: 51 }}
                          checked={selecionartudoDetail}
                          color="default"
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Checkbox
                          ref={register}
                          indeterminate={false}
                          style={{ left: 30 }}
                          checked={selecionartudoCreate}
                          color="default"
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Checkbox
                          indeterminate={false}
                          style={{ left: 15 }}
                          checked={selecionartudoEdit}
                          color="default"
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          indeterminate={false}
                          color="default"
                          style={{ left: 73 }}
                          checked={selecionartudoDelete}
                          inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData("Todos"),
  createData(
    "Análise",
    ["Análise de contas", "Análisá de transações"],
    "#f8f8f8"
  ),
  createData("Contas", ["Cliente", "Transações", "Contas digitais"], "#f8f8f8"),
  createData(
    "Customização",
    ["Limites e horários", "Tarifas", "Tarifas personalizadas", "Conta"],
    "#f8f8f8"
  ),
  createData("Financeiro", ["Entradas"], "#f8f8f8"),
];

export default function CollapsibleTable() {
  const { handleSubmit } = useForm();

  const {
    selecionartudoListagem,
    selecionartudoDetail,
    selecionartudoCreate,
    selecionartudoEdit,
    selecionartudoDelete,
  } = useContext(SelectedContext);
  const onSubmit = () =>
    console.log([
      {
        VerLista: selecionartudoListagem,
        VerDetalhe: selecionartudoDetail,
        Criar: selecionartudoCreate,
        Editar: selecionartudoEdit,
        Deletar: selecionartudoDelete,
      },
    ]);

  return (
    <form style={{ padding: 20 }} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Typography className=".MuiTypography-h1" style={{ fontSize: 40 }}>
          Tabela de Permissões
        </Typography>
      </header>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right" width="90">
                Ver listagem
              </TableCell>
              <TableCell align="right">Ver detalhes</TableCell>
              <TableCell align="right">Criar</TableCell>
              <TableCell align="right">Editar</TableCell>
              <TableCell align="right">Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          flex: 1,
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <button
          style={{
            width: 216,
            height: 42,
            backgroundColor: "#756B6B",
            borderRadius: "200px",
            color: "#ffff",
            border: "none",
          }}
        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}
