import React from 'react';
import Layout from '../components/layout';
import { Container, Row, Col6, HeroSpotLight } from '../components/styles/global';
import WorkItems from '../components/work-items';

const Work = ({ pageContext }) => (
    <Layout>
        <Container>
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />      
            <WorkItems />
        </Container>  
    </Layout>
);

export default Work;