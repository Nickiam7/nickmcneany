import React from 'react';

import Layout from '../components/layout';

export default ({pageContext}) => (
    <Layout>
        <h1>Skill, Creativity,<br/> <em>Passion</em></h1>                        
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
)