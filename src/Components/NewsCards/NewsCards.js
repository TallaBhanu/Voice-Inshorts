import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid,Grow,Typography,Card,CardHeader} from '@material-ui/core';
import useStyles from './styles.js';
import DisplayCard from './DisplayCard';

const infoCards = [
   {  title: 'News by LatestNews',info:'This are the Current Top 10 News of India.....', text: 'Give me the latest news',url:'https://t4.ftcdn.net/jpg/01/41/34/05/240_F_141340573_hv8A2IwzBXYSQILnXGtHZdmxhbPyUH52.jpg' },
   {  title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest news on <Categories>',url:'https://t4.ftcdn.net/jpg/01/56/07/11/240_F_156071130_ZWLRzdaw4GrpNpDgXx8lsVsbWERzxGPM.jpg'},
   {  title: 'News by Terms', info: 'IPL, Indian Army , Ban of Pubg in India, Coronovirus , Narendra Modi...', text: 'What\'s up with <Terms>',url:'https://t4.ftcdn.net/jpg/02/98/57/23/240_F_298572360_unyYKicS5agiWjEB1g6nTpHNvqksFia0.jpg'},
   {  title: 'News by Sources', info: 'CNN,The Times of India, BBC News, IGN, Buzzfeed', text: 'Give me the news from <Sources>',url:'https://t3.ftcdn.net/jpg/03/57/53/82/240_F_357538212_yhITSV3spSTiFySsON6Gbu9cPe8eQVNF.jpg' },
 ];


 const NewsCards=({articles,activeArticle})=>{ 
    const classes=useStyles();
      if (!articles.length) {
    return (
       <div>
          <div className={classes.info}>
          <Typography  variant="h6" component="h6">Interactive News Application made easy to Know News.</Typography>
          <Typography  variant="h7" component="h7">Click on Mic Button 🎙 (bottom-right) Try Saying Commands mentioned bottom of each Card. </Typography>
          </div>
          
          <div>
            <Grow in>
                  <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                     {infoCards.map((infoCard)=>(
                           <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                                 <DisplayCard infoCard={infoCard}/>
                           </Grid>
                        ))}
                  </Grid>
            </Grow>
          </div>
          
          <div className={classes.developerInfo}>
          <Typography  variant="h6" component="h6">Created By :<strong>Talla Bhanu Pratap Goud</strong> </Typography>
          <Typography  variant="h7" component="h7">Try Saying 🎙: "Who made this Application ?"  </Typography>
          </div>
         
       </div>
     
    );
  }
   

     return(
        <div>
          <div className={classes.directions}>

             <div className={classes.directionCard}>
                    <Card>
                     <Typography  className={classes.directionsC} variant="h6" component="h6"> To Go back : (Try Saying) Go back </Typography>
                     </Card>
             </div>

             <div className={classes.directionCard}>
                     <Card>
                     <Typography  className={classes.directionsC} variant="h6" component="h6"> To Stop Reading : Click on Mic Button 🎙</Typography>
                     </Card>

             </div>         

             <div className={classes.directionCard}>
                     <Card>
                     <Typography  className={classes.directionsC} variant="h6" component="h6"> To Open Article :Open Article [number]  </Typography>
                     </Card>
             </div>

          </div>
          <div>
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                  {articles.map((article,i)=>(
                     <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                     </Grid>
                  ))}
            </Grid>
         </Grow>
          </div>
          
        </div>
        
            
     );
 }

 export default NewsCards;