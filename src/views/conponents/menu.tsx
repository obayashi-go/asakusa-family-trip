import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC, useState } from "react";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuColorCode } from "../../utils/constants/menu-color-code";
import { UrlMap } from "../../utils/constants/url-map";

export const Menu: FC = () => {
    const [open, setOpen] = useState(false);
    const [randomImg, setRandomImg] = useState("baba.JPG")

    const selectRandomImg = (): string => {
        const imgList = ["baba.JPG", "papa.JPG", "mama.JPG"];
        const randomIndex = Math.floor(Math.random() * 3);
        return imgList[randomIndex];
    }
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
      setRandomImg(selectRandomImg());
    };
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {[
                {label: 'トップ', icon: <ThunderstormIcon sx={{color: MenuColorCode.top}}/>, to: UrlMap.top},
                {label: 'スケジュール', icon: <AccessAlarmsIcon sx={{color: MenuColorCode.schedule}} />, to: UrlMap.schedules},
                {label: '地図情報', icon: <AddLocationAltIcon sx={{color: MenuColorCode.locations}}/>, to: UrlMap.locations},
                {label: '駐車場情報', icon: <LocalParkingIcon sx={{color: MenuColorCode.parking}} />, to: UrlMap.parking},
            ].map((item, idx) => (
                <a key={`menu-link-${idx}`} href={item.to}>
                <ListItem
                    key={`menu-item-${idx}`}
                    disablePadding
                    >
                    <ListItemButton>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
                </a>
            ))}
          </List>
          <Box
            margin="20px 0"
            display="flex"
            alignItems="center"
            boxShadow="0 4px 8px 4px #4d4d4d"
          >
            <Box
            component="img"
            src={`/${randomImg}`}
            width="100%"
            />
          </Box>
        </Box>
      );

      return (
        <div>
          <IconButton onClick={toggleDrawer(true)}><MenuIcon/></IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      );
}