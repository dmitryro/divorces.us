import React, {useEffect, useState} from 'react';
import Carousel from 'nuka-carousel';
import image1 from "assets/img/slides/family-law.jpg";
import image2 from "assets/img/slides/child-custody.jpg";
import image3 from "assets/img/slides/property-division.jpg";
import image4 from "assets/img/slides/alimony.jpg";
import image5 from "assets/img/slides/contested-divorce.jpg";


const sliderStyle = {
    position:'relative',
    marginTop: "170px"
};



function Slider(options) {
    const [slideIndex, setSlideIndex] = useState(0); 

    useEffect(() =>  {
    });
    
    return(
        <Carousel autoplay="true" style={sliderStyle}>
            <img alt='ASD'  data-u="image1" src={image1} />
            <img alt='ASD'  data-u="image2" src={image2} />
            <img alt='ASD'  data-u="image3" src={image3} />
            <img alt='ASD'  data-u="image4" src={image4} />
            <img alt='ASD'  data-u="image5" src={image5} />
        </Carousel>
    );
}

export default Slider;
