import { Box } from "@mui/material";
import { ReactNode, type FC } from "react";

export type IContentsInnerWrap = {
    children: ReactNode;
}

export const ContentsInnerWrap: FC<IContentsInnerWrap> = (props) => {
    const { children } = props;
    return (
        <Box padding="10px 6px">
            {children}
        </Box>
    )
}