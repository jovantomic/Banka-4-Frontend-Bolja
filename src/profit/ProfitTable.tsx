import { Profit } from "utils/types";
import { Table, TableBody, TableRow } from "@mui/material";
import {
  ScrollContainer,
  StyledHeadTableCell,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
} from "utils/tableStyles";

function formatDate(date: string | null): string {
  if (date == null) {
    return "";
  }

  const dateObj = /^\d+$/.test(date) ? new Date(Number(date)) : new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', 
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false  
  };
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}

type Props = {
  profits: Profit[];
};

const ProfitTable = ({ profits }: Props) => {
  return (
    <ScrollContainer style={{ marginTop: 100 }}>
      <Table sx={{ minWidth: 250, marginTop: 0 }}>
        <StyledTableHead>
          <TableRow>
            <StyledHeadTableCell>Racun posiljaoca</StyledHeadTableCell>
            <StyledHeadTableCell align="right">
              Racun primaoca
            </StyledHeadTableCell>
            <StyledHeadTableCell align="right">
              Iznos koji se salje
            </StyledHeadTableCell>

            <StyledHeadTableCell align="right">
              Valuta koja se salje
            </StyledHeadTableCell>
            <StyledHeadTableCell align="right">
              Valuta u koju se prebacuje
            </StyledHeadTableCell>
            <StyledHeadTableCell align="right">Kurs</StyledHeadTableCell>
            <StyledHeadTableCell align="right">Profit</StyledHeadTableCell>
            <StyledHeadTableCell align="right">
              Datum i vreme
            </StyledHeadTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {profits?.map((profit: Profit) => (
            <StyledTableRow key={profit.senderAccount}>
              <StyledTableCell component="th" scope="row">
                {profit.senderAccount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {profit.toAccount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {profit.senderAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {profit.senderCurrency}
              </StyledTableCell>
              <StyledTableCell align="right">
                {profit.toCurrency}
              </StyledTableCell>
              <StyledTableCell align="right">
                {profit.exchangeRate}
              </StyledTableCell>
              <StyledTableCell align="right">{profit.profit}</StyledTableCell>
              <StyledTableCell align="right">
                {formatDate(profit.dateAndTime.toString())}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollContainer>
  );
};
export default ProfitTable;
