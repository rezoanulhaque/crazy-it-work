import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Slider.css';
import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';
import carousel4 from '../../images/carousel4.jpg';
import carousel5 from '../../images/carousel5.jpg';


const items = [
    {id: 1, img: carousel1 },
    {id: 2, img: carousel2 },
    {id: 3, img: carousel3 },
    {id: 4, img: carousel4 },
    {id: 5, img: carousel5 }
  ]


const Slider = () => {
    const workStyle ={
        background : '#111430',
        padding: '100px',
    }
    const breakPoints = [
        {width : 480 , itemsToShow : 1},
        {width : 768 , itemsToShow : 2},
        {width : 991 , itemsToShow : 2},
        {width : 1200 , itemsToShow : 2},
    ]
    const imgStyles = {
        // width : '465.49px',
        height : '334.7px',
        borderRadius : '10px',
        margin :'15px'
    }

    return (
        <div style={workStyle}>
            <h1 className='text-center mb-4' style={{color:'#ffffff'}}>Here are some of <span style={{color:'#7AB259'}}> our Images </span> </h1>

            <Carousel breakPoints= {breakPoints} >
                {items.map(item => <div>
                                        <img style={imgStyles} src={item.img} alt=""/>
                                </div>)}
            </Carousel>

        </div>
    );
};

export default Slider;