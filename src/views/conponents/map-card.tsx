import { FC } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Paper } from "@mui/material";
import { AddressQrBox } from "./atoms/address-qr-box";


export type IMapCard = {
    cardTitle: string;
    locationFramePath: string;
    address: string;
    tel: string;
    qr: string;
    frameSize?: "large" | "middle" | "small" | undefined;
}

export const MapCard: FC<IMapCard> = (props) => {
    const { cardTitle, locationFramePath, frameSize, address, tel, qr } = props;
    let height: string = "auto";
    switch (frameSize) {
        case "large":
            height = "500px";
            break;
        case "middle":
            height = "300px";
            break;
        case "small":
            height = "200px"
            break;
        default:
            break;
    }
    
    return (
        <div style={{borderTop: "solid 2px #4caf50"}}>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography sx={{width: "100%", fontSize: "18px", fontWeight: 700, textAlign: "center"}}>{cardTitle}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgb(239 255 237) 50%, rgb(230 230 230 / 50%) 100%)"}}>
                    <Paper>
                        <iframe src={locationFramePath} width="100%" height={height} style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Paper>
                    <AddressQrBox qrImageName={qr} address={address} tel={tel} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}