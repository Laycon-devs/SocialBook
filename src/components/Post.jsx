import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

function Post() {
  return (
    <>
    <Card sx={{mb: '10px'}}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ cursor: "pointer" }}
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/363901471_1704865193273920_1167381455359626697_n.jpg?ccb=11-4&oh=01_AdRIRjQCn51qWVfTPOoRcNQaNaNBGJPYMMZxGq0sjKKnxQ&oe=653A95C4&_nc_sid=000000&_nc_cat=109"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Hycon Interior render"
        subheader="October 19, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1697162103256-dad37889d979?auto=format&fit=crop&q=80&w=1891&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="blog-image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This stunning centerpiece dining table arrangement is ideal for
          hosting a memorable soirée with your friends and family. Enhance the
          ambiance by introducing a touch of whimsy and creativity, such as
          incorporating a vibrant centerpiece or unique tableware. And if you're
          seeking to add a delightful twist to the experience, consider the
          option of incorporating fresh floral arrangements that evoke the
          feeling of a garden party.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{mb: '10px'}}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ cursor: "pointer" }}
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/363901471_1704865193273920_1167381455359626697_n.jpg?ccb=11-4&oh=01_AdRIRjQCn51qWVfTPOoRcNQaNaNBGJPYMMZxGq0sjKKnxQ&oe=653A95C4&_nc_sid=000000&_nc_cat=109"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Hycon Interior render"
        subheader="October 19, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="blog-image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This stunning centerpiece dining table arrangement is ideal for
          hosting a memorable soirée with your friends and family. Enhance the
          ambiance by introducing a touch of whimsy and creativity, such as
          incorporating a vibrant centerpiece or unique tableware. And if you're
          seeking to add a delightful twist to the experience, consider the
          option of incorporating fresh floral arrangements that evoke the
          feeling of a garden party.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{mb: '10px'}}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ cursor: "pointer" }}
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/363901471_1704865193273920_1167381455359626697_n.jpg?ccb=11-4&oh=01_AdRIRjQCn51qWVfTPOoRcNQaNaNBGJPYMMZxGq0sjKKnxQ&oe=653A95C4&_nc_sid=000000&_nc_cat=109"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Hycon Interior render"
        subheader="October 19, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/8657160/pexels-photo-8657160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="blog-image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This stunning centerpiece dining table arrangement is ideal for
          hosting a memorable soirée with your friends and family. Enhance the
          ambiance by introducing a touch of whimsy and creativity, such as
          incorporating a vibrant centerpiece or unique tableware. And if you're
          seeking to add a delightful twist to the experience, consider the
          option of incorporating fresh floral arrangements that evoke the
          feeling of a garden party.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{mb: '10px'}}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ cursor: "pointer" }}
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/363901471_1704865193273920_1167381455359626697_n.jpg?ccb=11-4&oh=01_AdRIRjQCn51qWVfTPOoRcNQaNaNBGJPYMMZxGq0sjKKnxQ&oe=653A95C4&_nc_sid=000000&_nc_cat=109"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Hycon Interior render"
        subheader="October 19, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/8657665/pexels-photo-8657665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="blog-image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This stunning centerpiece dining table arrangement is ideal for
          hosting a memorable soirée with your friends and family. Enhance the
          ambiance by introducing a touch of whimsy and creativity, such as
          incorporating a vibrant centerpiece or unique tableware. And if you're
          seeking to add a delightful twist to the experience, consider the
          option of incorporating fresh floral arrangements that evoke the
          feeling of a garden party.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
}

export default Post;
