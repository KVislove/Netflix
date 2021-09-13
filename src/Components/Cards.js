import React from 'react'

function Cards(props){
    return(
            <div className='card'>
                <img src={props.imgsrc} alt='my pic' className='card_image'/>
                <div className='card_info'>
                    <span className='card_category'> {props.title} </span>
                    <h3 className='card_title'> {props.sname} </h3>
                    <a href={props.link} target='_blank'>
                        <button>Watch now</button>
                    </a>
                </div>
            </div>
    )
}

export default Cards