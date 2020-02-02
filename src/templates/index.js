import React from 'react';

import Layout from '../components/layout';

import {Container} from '../components/styles/global';
import globalClasses from '../components/styles/globalClasses.module.css';
import indexCSS from '../components/styles/index/index.css';

export default ({pageContext}) => (
    <Layout>
        <Container className={[globalClasses.introGradient, globalClasses.flexDirectionColumn, globalClasses.pyHeader]}>
            <div className={globalClasses.col_2_3}>
                <h1>Skill, Creativity,<br/> <em>Passion</em></h1>                        
                <div className={globalClasses.header__intro} dangerouslySetInnerHTML={{__html: pageContext.content}} />
            </div>         
        </Container>
    </Layout>
)