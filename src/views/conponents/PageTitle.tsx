import { Typography } from "@mui/material";
import { FC } from "react";
import { MenuColorCode } from "../../utils/constants/menu-color-code";

export type IPageTitle = {
    title: string;
    pageType: "top" | "schedule" | "events" | "locations"
}

export const PageTitle: FC<IPageTitle> = (props) => {
    const { title, pageType } = props;
    const borderColor = MenuColorCode[pageType];
    return (
        <Typography sx={{
            borderTop: `solid 1px ${borderColor}`,
            borderLeft: `solid 1px ${borderColor}`,
            borderRight: `solid 4px ${borderColor}`,
            borderBottom: `solid 4px ${borderColor}`,
            padding: "10px",
            fontSize: "20px",
            margin: "10px",
            background: "#fff"
        }}>
            {title}
        </Typography>
    )
}