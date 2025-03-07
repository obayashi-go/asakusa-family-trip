import { Box, Typography } from "@mui/material";
import { type FC } from "react";
import CallIcon from '@mui/icons-material/Call';

export type IAddressQrBox = {
    qrImageName: string,
    address?: string,
    tel?: string,
}

export const AddressQrBox: FC<IAddressQrBox> = (props) => {
    const {qrImageName, address, tel} = props;
    return (
        <Box
            width="100%"
            mt={2}
            padding="10px"
            display="flex"
            flexDirection="column"
        >
            <Typography sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <span>{address}</span>
                <Box display="flex">
                    <CallIcon sx={{color: "#29298d", paddingRight: "10px"}} /><a href={`tel:${tel}`}>{tel}</a>
                </Box>
            </Typography>
            <Box
                width="200px"
                margin="0 auto"
                component="img"
                src={`/${qrImageName}`}
            />
        </Box>
    )
}