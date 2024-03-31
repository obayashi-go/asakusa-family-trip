import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { type FC } from "react";
import { Menu } from "./menu";

export type IHeader = {
    isShow: boolean;
}

const HeaderBackgound = "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(167,45,108,0.8) 50%, rgba(254,218,255,0.8) 100%);"

export const Header: FC<IHeader> = (props) => {
    const { isShow } = props;
    return (
        isShow && (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                color="info"
                enableColorOnDark={true}
                sx={
                    {
                        background: HeaderBackgound
                    }
                }
                >
              <Toolbar>
                <Menu />
                <Typography variant="h6" component="div" width="100%" sx={{ flexGrow: 1, textAlign: "center" }}>
                  <span style={{textShadow: "4px 8px 2px #cc1f60"}}>Asakusa</span>
                  <span style={{textShadow: "#99deda 4px 8px 2px"}}> Family</span>
                  <span style={{textShadow: "#FFEB3B 4px 8px 2px"}}> Trip</span>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        )
    )
}