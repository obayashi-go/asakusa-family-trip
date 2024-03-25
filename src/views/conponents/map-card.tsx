import { FC } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Paper, Switch } from "@mui/material";
import { AddressQrBox } from "./atoms/address-qr-box";


export type IMapCard = {
    locationFramePath: string;
    frameSize?: "large" | "middle" | "small" | undefined;
}

export const MapCard: FC<IMapCard> = (props) => {
    const { locationFramePath, frameSize } = props;
    let height: string = "auto";
    switch (frameSize) {
        case "large":
            height = "500px";
            break;
        case "middle":
            height = "auto";
            break;
        case "small":
            height = "200px"
            break;
        default:
            break;
    }

    const handleZoom = (e: { target: { value: any; }; }) => {
        console.log(e.target.value)
    }


    return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Box display="flex" width="100%" alignItems="center" justifyContent="space-between">
                <Typography>雷門</Typography>
                <Box display="flex" alignItems="center">
                    <Typography fontSize="16px">拡大</Typography>
                    <Switch onChange={handleZoom} />
                </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
            <Paper>
                <iframe src={locationFramePath} width="100%" height={height} style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>QR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddressQrBox qrImageName="QR_kaminarimon.png" address="〒111-0032 東京都台東区浅草２丁目３−１" tel="0338420181" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}