import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { sideBarLinks } from "../sideBarConstants";
import { ModeNight } from "@mui/icons-material";

function SideBar({mode, setMode}) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "none", md: 'block'} }}>
      <Box position="fixed">
        {sideBarLinks.map((sidelinks) => (
          <List key={sidelinks.link}>
            <ListItem disablePadding>
              <ListItemButton component="a" href={sidelinks.href}>
                <ListItemIcon>
                  <sidelinks.icon />
                </ListItemIcon>
                <ListItemText primary={sidelinks.link} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight sx={{ color: "black" }} />
              </ListItemIcon>
              <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
