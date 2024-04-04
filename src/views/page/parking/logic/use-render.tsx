import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

export const useRender = () => {

    const createData = (
        name: string,
        distance: number,
        detail: string[]
      ) => {
        return {
          name,
          distance,
          detail,
        };
      }
      
    const Row = (props: { row: ReturnType<typeof createData> }) => {
        const { row } = props;
        const [open, setOpen] = useState(false);
      
        return (
          <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.distance}分
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography gutterBottom component="div">
                      詳細情報
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableBody>
                        {row.detail.map((detailRow, idx) => (
                          <TableRow key={`row-${idx}`}>
                            <TableCell component="th" scope="row">
                              {detailRow}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        );
      }
      
      const rows = [
        createData('壽駐車場', 10, ["〒111-0042 東京都台東区寿４丁目１６−１１", "¥1,630 / 日"]),
        createData('ホテルサンルート浅草駐車場', 7, ["〒111-0034 東京都台東区雷門１丁目８−５", "¥1,600 / 日"]),
        createData('サクラホステル浅草駐車場 / 1番', 4, ["〒111-0032 東京都台東区浅草２丁目２４−２ サクラホステル浅草", "¥1,800 / 日"]),
        createData('ホテルマンデー浅草', 5, ["〒111-0032 東京都台東区浅草２丁目２６−７", "¥980 / 日"]),
        createData('平邸駐車場', 7, ["〒111-0036 東京都台東区松が谷３丁目１１−３", "1,000 / 日"]),
        createData('ユアー・パーキング 松が谷第２', 7, ["〒111-0036 東京都台東区松が谷２丁目２４−８", "¥1,500 / 日"]),
      ];
      
      const CollapsibleTable = () => {
        return (
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>駐車場名</TableCell>
                  <TableCell>徒歩距離（分）</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }

    return {
        CollapsibleTable
    }
}