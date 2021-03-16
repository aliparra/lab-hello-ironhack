import React from 'react'
import '../assets/css/Content.css'
import Button from './Button'

const Content = () => {
    return(
        <div className='Content'>
          <h1>Say Hello to ReactJS</h1> 
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <Button />
        </div>
    )
}

export default Content