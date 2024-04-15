import { Box, Collapse, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CopyToClipBoard from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import HailIcon from '@mui/icons-material/Hail';
import { useState } from "react";

const ParkingTitle = styled(Typography)({
    fontWeight: 700,
    borderBottom: "dotted 2px #03606d",
})

const ReservedParkingTitle = styled(Typography)({
    fontSize: "large",
    background: "#03606d",
    color: "#fff",
    margin: "0 auto",
    padding: "4px 8px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    textAlign: "center"
})

export const useRender = () => {

    const [openSnack, setOpenSnack] = useState<boolean>(false);

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpenSnack(false);
        };
    const handleClickButton = (): void => {
        setOpenSnack(true);
    };

    const ReservedParking = () => {
        return (
            <Box padding="10px">
                <ReservedParkingTitle>予約済駐車場</ReservedParkingTitle>
                <Paper sx={{padding:"10px"}}>
                    <Box display="flex" flexDirection="column" padding="4px 8px" gap="10px">
                        <ParkingTitle>駐車場名</ParkingTitle>
                        <CopyToClipBoard
                            text="古宇田パーキング向島No.11"
                            onCopy={handleClickButton}>
                            <IconButton sx={{display: "flex", padding: "0", gap: "6px", justifyContent: "space-between"}}>
                                <Typography color="#000" fontSize="0.875rem" textAlign="left">古宇田パーキング向島No.11</Typography>
                                <ContentCopyIcon />
                            </IconButton>
                        </CopyToClipBoard>
                        <ParkingTitle>住所</ParkingTitle>
                        <CopyToClipBoard
                            text="東京都墨田区向島1-26-15"
                            onCopy={handleClickButton}>
                            <IconButton sx={{display: "flex", padding: "0", gap: "6px", justifyContent: "space-between"}}>
                                <Typography color="#000" fontSize="0.875rem" textAlign="left">東京都墨田区向島1-26-15</Typography>
                                <ContentCopyIcon />
                            </IconButton>
                        </CopyToClipBoard>
                        <ParkingTitle><DirectionsWalkIcon/>ホテルまでの徒歩距離</ParkingTitle>
                        <Typography>18分</Typography>
                        <ParkingTitle><HailIcon/>ホテルまでの移動手段</ParkingTitle>
                        <Typography>タクシー：約9分</Typography>
                        <ParkingTitle><DirectionsWalkIcon/>雷門までの徒歩距離</ParkingTitle>
                        <Typography>18分</Typography>
                        <ParkingTitle><HailIcon/>雷門までの移動手段</ParkingTitle>
                        <Typography>タクシー：約6分</Typography>
                    </Box>
                </Paper>
                </Box>
        )
    }

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
                                {
                                idx === 0
                                ? (
                                    <CopyToClipBoard
                                        text={detailRow}
                                        onCopy={handleClickButton}>
                                        <IconButton sx={{display: "flex", padding: "0", gap: "6px"}}>
                                            <Typography color="#000" fontSize="0.875rem" textAlign="left">{detailRow}</Typography>
                                            <ContentCopyIcon />
                                        </IconButton>
                                    </CopyToClipBoard>
                                    )
                                : detailRow
                                }
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
            <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleClose}
            message="コピー！"
            action={
                (
                    <>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                    </>
                )
            }
            />
          </>
        );
      }
      
      const rows = [
        createData('壽駐車場', 10, ["〒111-0042 東京都台東区寿４丁目１６−１１", "¥1,630 / 日"]),
        createData('ホテルサンルート浅草駐車場', 7, ["〒111-0034 東京都台東区雷門１丁目８−５", "¥1,600 / 日"]),
        createData('サクラホステル浅草駐車場 / 1番', 4, ["〒111-0032 東京都台東区浅草２丁目２４−２ サクラホステル浅草", "¥1,800 / 日"]),
        createData('ホテルマンデー浅草', 5, ["〒111-0032 東京都台東区浅草２丁目２６−７", "¥980 / 日"]),
        createData('平邸駐車場', 7, ["〒111-0036 東京都台東区松が谷３丁目１１−３", "¥1,000 / 日"]),
        createData('ユアー・パーキング 松が谷第２', 7, ["〒111-0036 東京都台東区松が谷２丁目２４−８", "¥1,500 / 日"]),
      ];
      
      const CollapsibleTable = () => {
        return (
            <Box padding="0 8px">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{background: "#00606d"}}>
                    <TableCell />
                    <TableCell sx={{color: "#fff", borderRight: "solid 1px #fff"}}>駐車場名</TableCell>
                    <TableCell sx={{color: "#fff"}}>ホテルまでの徒歩距離</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <Row key={row.name} row={row} />
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
          </Box>
        );
    }

    return {
        ReservedParking,
        CollapsibleTable
    }
}