import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MenuColorCode } from "../../utils/constants/menu-color-code";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import QuizIcon from '@mui/icons-material/Quiz';

export type IPageTitle = {
    title: string;
    pageType: "top" | "schedule" | "parking" | "locations" | "go"
}

export const PageTitle: FC<IPageTitle> = (props) => {
    const { title, pageType } = props;
    const borderColor = MenuColorCode[pageType];
    let icon = null;
    switch(pageType) {
        case "schedule":
            icon = <AccessAlarmsIcon />
            break;
        case "locations":
            icon = <AddLocationAltIcon />
            break;
        case "parking":
            icon = <LocalParkingIcon />
            break;
        case "go":
            icon = <QuizIcon />
            break;
        default:
            icon = <ThunderstormIcon />
            break;
    }
    return (
        <>
            <Box width="100%" height="10px"></Box>
            <Typography sx={{
                borderTop: `solid 1px ${borderColor}`,
                borderLeft: `solid 1px ${borderColor}`,
                borderRight: `solid 4px ${borderColor}`,
                borderBottom: `solid 4px ${borderColor}`,
                padding: "10px",
                fontSize: "20px",
                margin: "10px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                {icon}{title}
            </Typography>
        </>
    )
}