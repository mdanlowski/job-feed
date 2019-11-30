import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ShareIcon from '@material-ui/icons/ShareRounded';

const useStyles = makeStyles(theme => ({
  spacing: { padding: theme.spacing(2) }})
);

export default function Offer(props) {
  const data = props.data;
  const classes = useStyles();

  return (
    <div className={"job-offer root"}>
      <Paper className={`${classes.spacing} content`}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className="img-wrapper">
              <img className="img" alt="complex" src={data.company_logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {data.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {data.company}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  jaja
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={"utils clickable"}>
                  <ShareIcon></ShareIcon>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$39.00 / hr</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


// }
// export default function Offer(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.card}>
//       <CardHeader
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={data.title}
//         subheader={data.company}
//       />
//       <CardMedia
//         className={classes.media}
//         image={data.company_logo}
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>

//       <CardActions disableSpacing>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>

//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>

//     </Card>
//   );
// }
