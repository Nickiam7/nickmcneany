import React from 'react';

export default ({pageContext}) => (
    <div>
        <h1>{pageContext.title}</h1>
        <p>This is from the home Template!</p>
        <p>{pageContext.content}</p>
    </div>
)