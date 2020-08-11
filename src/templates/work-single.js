import React from 'react';
import Layout from '../components/layout';
import { Container } from '../components/styles/global';

const WorkSingle = ({ pageContext }) => (
    <Layout>
        <Container>
            <h1>{pageContext.title}</h1>
            <img src={pageContext.featured_media.source_url} width="25%" alt={pageContext.title} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />      
        </Container>  
    </Layout>
);

export default WorkSingle;