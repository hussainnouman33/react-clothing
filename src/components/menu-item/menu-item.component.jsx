import React from 'react';
import {withRouter} from 'react-router-dom';

// withRouter is higher order componennt, higher order component is a function that take an component as an argument and returns a modified component

import './menu-item.styles.scss';


const MenuItem=({title,imageUrl,size,history, match,linkUrl})=>(
    <div style={{
        backgroundImage:`url(${imageUrl})`
    }} className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='sub-title'>Shop Now</span>

        </div>
    </div>

)


export default withRouter(MenuItem);


