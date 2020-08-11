import React from 'react';

const Bucket = (props) => {
    return(
        <div className='stack' key={props.bucketKey}>
            <div className='stack__header'>
                <h3>{props.skillHeading}</h3>
                <p className='header-intro' dangerouslySetInnerHTML={{__html: props.skillIntro}} />                            
            </div>
            <div className='stack__body'>
                <p>{props.skillContent}</p>
            </div>
        </div>
    )
};

export default Bucket;
