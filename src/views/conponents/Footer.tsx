import { Box, Typography, styled } from "@mui/material"
import { type FC } from "react"

const SFooterWrapper = styled(Box)({
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
    color: "#fafafa",
    position: "relative",
    bottom: 0,
})

export const Footer: FC = () => {
    return (
        <SFooterWrapper>
            <Typography>
                &copy;2024.05.04~05 Obayashi Presents
            </Typography>
        </SFooterWrapper>
    )
}