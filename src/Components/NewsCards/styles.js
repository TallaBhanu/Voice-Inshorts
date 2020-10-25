//NewsCardsss
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
     container:{
        padding:'0 5%',
        width:'100%',
        margin:0,
     },
     card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '50vh',
      padding: '10%',
      borderRadius: 10,
      color: 'white',
    },
    infoCard: {
      display: 'flex', flexDirection: 'column', textAlign: 'center',
    },
    info:{
      textAlign:'center',
      width: '100%',
      padding:'0px 20px 30px 20px',
    },
    developerInfo:{
      textAlign:'center',
      width: '100%',
      padding:'20px 20px 30px 20px',
      borderRadius:2,
    },
    directions:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:20,
      justifyContent:'space-evenly',
    },
    directionCard:{
      marginBottom:5,
    }
});