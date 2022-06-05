import React from 'react'
import  CardItem  from './CardItem'
import './Cards.css'
import red from '../Images/1785-wwdc-2019-wallpaper.png';
import second from '../Images/plane.jpg'
import two from '../Images/1825094_9ab0-750x405.jpg'

const Cards = (proops) => {


  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        pics={two}
                        text='Explore the hidden waterfall dep inside the Amazon Jungle'
                        label='Adventure'
                        path='/Services'
                    />
                    <CardItem 
                        pics={red}
                        text='Travel through the Island of Bali in a Private Cruise'
                        label='Luxury'
                        path='/Services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        pics={second}
                        text='Explore the hidden waterfall dep inside the Amazon Jungle'
                        label='Adventure'
                        path='/products'
                    />
                    <CardItem 
                        pics={second}
                        text='Travel through the Island of Bali in a Private Cruise'
                        label='Luxury'
                        path='/products'
                    />
                    <CardItem 
                        pics={red}
                        text='Travel through the Island of Bali in a Private Cruise'
                        label='Luxury'
                        path='/Services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards