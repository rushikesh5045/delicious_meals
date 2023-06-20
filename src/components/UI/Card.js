import classes from './Card.module.css'

const Card =(props)=>{

        return <div className={classes.card}>
            {props.children}
             {/*this is used because whatever is passed between the openening and closing tags of the card will be used inside of the card*/}
        </div>
}

export default Card;