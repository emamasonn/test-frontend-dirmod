import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 20,
      border: '1px solid #81c784',
      boxShadow: '2px 2px 2px #81c784',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    contentPrice: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textPrice: {
      marginTop: 20,
      fontSize: 20,
      width: 80,
    },
    titleCoin: {
      textTransform: 'uppercase',
      marginBottom: 5,
    },
    dividerColor: { 
      background: '#81c784',
    },

  });

const CardCoin = (props) => {
    const classes = useStyles();
    let data = {}
    
    useEffect(()=>{

    }, [props])

    switch(props.coin){
        case 'usd':
            data =  {
              ...props.quote.dataUsd, 
              sig: '$'
            }
            break
        case 'eur': 
            data =  {
              ...props.quote.dataEur,
              sig:'€'
            }
            break
        case 'brl':
            data =  {
              ...props.quote.dataBrl,
              sig: 'R$'
            }
            break
        default:
            data = {}
            break 
    }

    return(
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="h5" className={classes.titleCoin}>
                {`${data.moneda} / pesos`}
            </Typography>
            <Divider className={classes.dividerColor}/>
            <div className={classes.contentPrice}>
              <Typography variant="body2" component="p" className={classes.textPrice}>
                {`${data.sig} 1`}
              </Typography>
              <Divider orientation="vertical" flexItem className={classes.dividerColor}/>
              <Typography variant="body2" component="p" className={classes.textPrice}>
                {`$ ${parseFloat(data.precio).toFixed(2)}`}
              </Typography>
            </div>
          </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return{
        quote: state.centerReducer
    }
}

export default connect(mapStateToProps)(CardCoin)