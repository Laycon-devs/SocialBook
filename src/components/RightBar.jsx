import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  ListItemAvatar,
  styled,
  Badge,
} from "@mui/material";
function RightBar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online friends
        </Typography>
        <AvatarGroup max={5}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Esther"
              src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/347635465_1503439517058067_8948879558794508150_n.jpg?ccb=11-4&oh=01_AdSMdIWnAU2IpG0GEZx7oMtWG7bC2-YeuYIgPFkH5RXdKQ&oe=6544A873&_nc_sid=000000&_nc_cat=100"
            />
          </StyledBadge>
          <Avatar
            alt="GDG"
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/377268015_1481337079309644_5662047042876202543_n.jpg?ccb=11-4&oh=01_AdR97fuvmosmwJ8i_djJ0pqhODp3xP2GP0fYejqCbknoUQ&oe=6544AED7&_nc_sid=000000&_nc_cat=101"
          />
          <Avatar
            alt="Bouesti"
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/336364454_589438679803135_1067526892211637965_n.jpg?ccb=11-4&oh=01_AdS55Ksqr67VE_XaHJWFOOY-b1Cr8E4fygicDVQES6nUfQ&oe=6544A743&_nc_sid=000000&_nc_cat=101"
          />
          <Avatar
            alt="GDG NAU"
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/230325056_5346525405429824_3969426973003812837_n.jpg?ccb=11-4&oh=01_AdQmbM4QcevpvXZL257VdXpYP3oI-ZRsNYTFYI4Ue-BSGw&oe=6544870A&_nc_sid=000000&_nc_cat=101"
          />
          <Avatar
            alt="Teni"
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/221319171_1018676685749547_642331318311979784_n.jpg?ccb=11-4&oh=01_AdRPu3JuZyvorYHLp55hXWT5bHTUOAA99DuPf5dyrYw7yA&oe=654495FC&_nc_sid=000000&_nc_cat=109"
          />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/18075152/pexels-photo-18075152/free-photo-of-man-in-textured-brown-t-shirt-lying-on-flower-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Teni"
                src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/221319171_1018676685749547_642331318311979784_n.jpg?ccb=11-4&oh=01_AdRPu3JuZyvorYHLp55hXWT5bHTUOAA99DuPf5dyrYw7yA&oe=654495FC&_nc_sid=000000&_nc_cat=109"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Mobolaji"
              secondary={
                <Box>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    You
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </Box>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Elon Support"
                  src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/364518639_6338961196159413_8980136225549963195_n.jpg?ccb=11-4&oh=01_AdT6jI_5IqBd-BIfaS197WUIXoMtLIRg2Sni-cnLkEXYdA&oe=65449BC6&_nc_sid=000000&_nc_cat=108"
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Elon Support"
              secondary={
                <Box>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </Box>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="darasmy"
                src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/371020216_1248223022507375_8293574469748841949_n.jpg?ccb=11-4&oh=01_AdTnN8fzgUjvgnDj_4iZZ9oOoiYuRLHyga_mDrat35BR3A&oe=65454CFF&_nc_sid=000000&_nc_cat=110"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Darasmy"
              secondary={
                <Box>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    You
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </Box>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
