import React, { Fragment } from "react";


//importing a local image into a react component
import mealImage from '../../assets/meals.jpg'


//using module.css
//to use this we write classes in import statement
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";



const Header = (props)=>{

    return  <Fragment>
        
        <header className={classes.header}>{/* writing className as classes.{classname} used in the css file */}
            <h1>
                Delicious Meals
            </h1>
         <HeaderCartButton onClick={props.onShowCart} />
        </header>
         
        <div className={classes['main-image']} > {/* here we cant use dot because the classname in the css file is separated with '-' so we need to use the following syntax */}
            
            <img src={mealImage} alt="food">{/*using the name of import as src of the image */}
            </img>
            
        </div>
    </Fragment>
}

export default Header;