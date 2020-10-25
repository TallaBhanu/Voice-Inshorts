import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    media:{
        height:250,
        objectFit:'contain',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
      },
      details: {
        justifyContent: 'space-between',
        margin: '20px',
      },
});