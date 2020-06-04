import React, { useEffect } from 'react'
import CardCoin from './CardCoin'
import Axios from 'axios'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {quoteUsd, quoteEur, quoteBrl} from '../redux/actions'

const useStyles = makeStyles({
    contentCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        ['@media (max-width:500px)']: {
            flexDirection: 'column',
        }
    },
    titleQuote: {
        width: 'max-content',
        margin: '45px auto',
        fontSize: 30,
    }

})

const ContentCard = (props) => {
    const classes = useStyles();
    
    const urlDolar = 'https://api-rest-cotizador.herokuapp.com/cotizacion/dolar'
    const urlEuro = 'https://api-rest-cotizador.herokuapp.com/cotizacion/euro'
    const urlReal = 'https://api-rest-cotizador.herokuapp.com/cotizacion/real'
    
    const handleCallApis = ()=>{

        Axios.get(urlDolar)
            .then(res => props.quoteUsd(res.data))
            .catch(err => console.log(err))
        
        Axios.get(urlEuro)
            .then(res => props.quoteEur(res.data))
            .catch(err => console.log(err))
            
        Axios.get(urlReal)
            .then(res => props.quoteBrl(res.data))
            .catch(err => console.log(err))
        
    }

    useEffect(() => {
        const interval = setInterval(handleCallApis, 5000);
        return () => clearInterval(interval);
    }, []);

    return(
        <Container maxWidth="md" >
            <Typography variant="h4" component="h2" className={classes.titleQuote}>
                Cotizador de Monedas
            </Typography>
            <div className={classes.contentCard}>
                <CardCoin coin='usd'/>
                <CardCoin coin='eur'/>
                <CardCoin coin='brl'/>
            </div>
        </Container>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        quoteUsd: (data) => {
            dispatch(quoteUsd(data))
        },
        quoteEur: (data) => {
            dispatch(quoteEur(data))
        },
        quoteBrl: (data) => {
            dispatch(quoteBrl(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(ContentCard)