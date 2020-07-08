import React, {useEffect, useState} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import image1 from "assets/img/slides/family-law.jpg";
import image2 from "assets/img/slides/child-custody.jpg";
import image3 from "assets/img/slides/property-division.jpg";
import image4 from "assets/img/slides/alimony.jpg";
import image5 from "assets/img/slides/contested-divorce.jpg";
import layoutStore from 'store/layoutStore/index.ts';

const slideStyle = {
   marginTop: '1.5em',
   marginLeft: '20%',
   marginRight: '20%',
   fontSize: '15px',
   color: '#FFFFF0',
   textAlign: 'left',
   width: '60%'
};

const slideStyleDark = {
   marginTop: '1.5em',
   marginLeft: '20%',
   marginRight: '20%',
   fontSize: '15px',
   color: '#000000',
   textAlign: 'left',
   width: '60%'
};

const readmeStyle = {
    fontSize: '1.0em',
    color: "inherit",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
};

const descStyle = {
   fontSize: '25px'
};

export default function AnimatedSlider() {
    var content = [];
    var innerStyle = descStyle;
    var outerStyle = slideStyle;
    layoutStore.readSlides();

    for(var i=0; i < layoutStore.slides.length; i++) { 
        if (i===3) {
           innerStyle = descStyle;
           outerStyle = slideStyleDark
            
        } else {
           innerStyle = descStyle;
           outerStyle = slideStyle;
        }
        content.push({'image':layoutStore.slides[i].slide, 
                      'title': layoutStore.slides[i].title, 
                      'innerStyle': innerStyle,
                      'outerStyle': outerStyle,
                      'action': layoutStore.slides[i].action,
                      'description':layoutStore.slides[i].text, 'button':'Read more>>'});
    }

    useEffect(() =>  {
        content = [];
        layoutStore.readSlides();

        for(var i=0; i < layoutStore.slides.length; i++) {
            if (i===3) {
                innerStyle = descStyle;
                outerStyle = slideStyle;       
            } else {
                innerStyle = descStyle;
                outerStyle = slideStyleDark;
            }

            content.push({'image':layoutStore.slides[i].slide,
                          'title': layoutStore.slides[i].title,
                          'innerStyle': innerStyle,
                          'outerStyle': outerStyle,
                          'action': layoutStore.slides[i].action,
                          'description':layoutStore.slides[i].text, 'button':'Read more>>'});
        }

 
    });    


    return(<Slider autoplay={2000}>
            {content.map((item, index) => (
                     <div
                          key={index}
                          className="slider-content"
                          style={{ background: `url('${item.image}') no-repeat center center` }}
                     >
                     <div className="center" style={item.outerStyle}>
                         <div><h3>{item.title}</h3></div>
                         <div style={item.innerStyle}><p><h4>{item.description} <a href={item.action} style={readmeStyle}>Read more>></a></h4></p></div>
                     </div>
                 </div>
            ))}
            </Slider>);
}
