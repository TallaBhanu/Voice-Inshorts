import React from 'react';
import {Card,CardMedia,Typography,CardHeader} from '@material-ui/core';
import useStyles from './displaystyles.js';

const DisplayCard=({infoCard})=>{

    const classes=useStyles();
     return(
        <Card className={classes.card}>
            
            <CardHeader
              title={infoCard.title.split(' ')[2]}
              subheader={infoCard.info}
            />
            <CardMedia className={classes.media} image={ infoCard.url || 'https://t3.ftcdn.net/jpg/02/71/79/60/240_F_271796004_pZ8DY5uXRDN03j27mVJrfrXl4Yi3b7gH.jpg'}/>        
            <Typography className={classes.details} variant="h6" component="h6"><strong>Try saying:</strong> <br />{infoCard.text}</Typography>
            
           
        </Card>
     );
}

export default DisplayCard;