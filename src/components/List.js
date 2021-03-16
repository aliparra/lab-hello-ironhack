import React from 'react'
import Card from './Card'
import '../assets/css/List.css'

const data = [
    {
        title: 'Declarative',
        description: 'React makes it painless to create interactive UIs',
        image: {
            src: 'images/icon1.png',
            alt: 'Declarative icon'
        }
    },
    {
        title: 'Components',
        description: 'Build encapsulated components that manage their state',
        image: {
            src: 'images/icon2.png',
            alt: 'Components icon'
        }
    },
    {
        title: 'Single-Way',
        description: "A set of inmutable values are passed to the component's",
        image: {
            src: 'images/icon3.png',
            alt: 'Single-way icon'
        }
    },
    {
        title: 'JSX',
        description: 'Statically-typed, designed to run on modern browsers',
        image: {
            src: 'images/icon4.png',
            alt: 'JSX icon'
        }
    }
]

const List = () => {
    return(
       <div class='List'>
           {data.map((listCard) => {
               return (
                    <Card {...listCard}/>
               )
           })}
       </div>
    )
}

export default List