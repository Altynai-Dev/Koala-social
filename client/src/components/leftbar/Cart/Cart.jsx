import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ManProf from "../../../imgs/profile.png";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const trHeadStyle = {
    backgroundColor: "#666699 !important",
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Name
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Type
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Description
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Count
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Sub Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <img src={ManProf} alt="" width="70" />
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              name
            </StyledTableCell>
            <StyledTableCell align="right">ded</StyledTableCell>
            <StyledTableCell align="right">description</StyledTableCell>
            <StyledTableCell align="right">123</StyledTableCell>
            <StyledTableCell align="right">
              <TextField type="number" className="" />
            </StyledTableCell>

            <StyledTableCell align="right">1</StyledTableCell>
            <StyledTableCell align="right">
              <Button startIcon={<DeleteIcon sx={{ color: "#666699" }} />}>
                delete
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
      <Box sx={{ m: 5 }}>
        <Typography variant="h6" component="div">
          Total price:
          <Button>BUY NOW</Button>
        </Typography>
      </Box>
    </TableContainer>
  );
}
