import { Box, IconButton, Typography, styled } from "@mui/material"
import { type FC } from "react"
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const SFooterWrapper = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
    color: "#fafafa"
})

export const Footer: FC = () => {
    const smoothScrollUp = () => {
        console.log("todo smooth scoll up")
    }
    return (
        <SFooterWrapper>
            <Typography>
                &copy;2024.05.04~05 Obayashi Presents
            </Typography>
            <IconButton onClick={smoothScrollUp}>
                <ArrowCircleUpTwoToneIcon sx={{color: "#fff"}} />
            </IconButton>
        </SFooterWrapper>
    )
}