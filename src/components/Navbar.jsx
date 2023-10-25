import {
  Mail,
  Notifications,
  SearchOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  alpha,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social Book
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none", fontSize: "1.5rem" }, border: '1px solid', borderRadius: '10px', px: 1 }}>
          SB
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchOutlined />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Badge
            badgeContent={5}
            color="error"
            sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={3}
            color="error"
            sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
          >
            <Notifications />
          </Badge>
          <Avatar
        onClick={handleOpen}
            sx={{ cursor: "pointer", display:{xs: 'none', sm: 'flex'} }}
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/363901471_1704865193273920_1167381455359626697_n.jpg?ccb=11-4&oh=01_AdRIRjQCn51qWVfTPOoRcNQaNaNBGJPYMMZxGq0sjKKnxQ&oe=653A95C4&_nc_sid=000000&_nc_cat=109"
          />
          <Box
            sx={{
              display:{xs: 'flex', sm: 'none'},
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              bgcolor: 'initial',
              p: 0.2,
              cursor: 'pointer',
            }}
          >
            <Avatar
            onClick={handleOpen}
              sx={{ cursor: "pointer" }}
              src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/363901471_1704865193273920_1167381455359626697_n.jpg?ccb=11-4&oh=01_AdRIRjQCn51qWVfTPOoRcNQaNaNBGJPYMMZxGq0sjKKnxQ&oe=653A95C4&_nc_sid=000000&_nc_cat=109"
            />
            <Typography variant="h6">
              Hycon
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
