import React, { createRef, useEffect, useState } from 'react';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import useStyles from './styles.js';
import classNames from 'classnames';



const NewsCard=({article:{description,publishedAt,source,title,url,urlToImage},activeArticle,i})=>{

    const classes=useStyles();
    const [elRefs,setElRefs]=useState([]);
    const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-50);

    useEffect(()=>{
        setElRefs((refs)=>Array(20).fill().map((_,j)=>refs[j] || createRef()));
    },[]);

    useEffect(()=>{
          if(i===activeArticle && elRefs[activeArticle]){
              scrollToRef(elRefs[activeArticle]);
          }
    },[i,activeArticle,elRefs]);

    return(
        //Each Card
        //Clickable Area
        //Image
        //cardContent
        //CardActions Buttons
        //gutter at bottom 
        <Card ref={elRefs[i]} className={ classNames(classes.card,activeArticle===i?classes.activeCard:null) }>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://t3.ftcdn.net/jpg/02/71/79/60/240_F_271796004_pZ8DY5uXRDN03j27mVJrfrXl4Yi3b7gH.jpg'}/>
                 <div className={classes.details}>
                     <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                     <Typography variant="body2" color="textSecondary" component="h2">{ source.name}</Typography>
                 </div>
                 <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                 <CardContent>
                     <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                 </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn more</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;