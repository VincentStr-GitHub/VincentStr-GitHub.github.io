import React from 'react';
import Footer from './footer';
import MainImage from './mainImage';
import MainText from './mainText';
import About from './about';
import Projects from './homeShowcase';


const Home = (props) => {
    return (
        <div>
            <MainImage />
            <MainText modeStyle={props.modeStyle} />
            <Projects modeStyle={props.modeStyle}/>
            <About modeStyle={props.modeStyle} />
            <Footer />
        </div>
    )
}


export default Home