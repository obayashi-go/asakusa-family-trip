import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC, useState } from "react";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import StadiumIcon from '@mui/icons-material/Stadium';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuColorCode } from "../../utils/constants/menu-color-code";
import { UrlMap } from "../../utils/constants/url-map";

export const Menu: FC = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {[
                {label: 'トップ', icon: <ThunderstormIcon sx={{color: MenuColorCode.top}}/>, to: UrlMap.top},
                {label: 'スケジュール', icon: <AccessAlarmsIcon sx={{color: MenuColorCode.schedule}} />, to: UrlMap.schedules},
                {label: 'イベント', icon: <StadiumIcon sx={{color: MenuColorCode.events}} />, to: UrlMap.events},
                {label: '地図情報', icon: <AddLocationAltIcon sx={{color: MenuColorCode.locations}}/>, to: UrlMap.locations}
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
            //   </Link>
            ))}
          </List>
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