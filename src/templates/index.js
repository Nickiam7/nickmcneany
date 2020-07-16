import React from 'react';

import Layout from '../components/layout';
import Bucket from '../components/bucket';

import {
    Container,
    Row,
    Col4,
    Col6, 
    Col8,
    HeroSpotLight,
    Section 
} from '../components/styles/global';

export default ({ pageContext }) => (   
    <Layout>
        <Container>
            <Row>
                <Col6>
                    <h1>Skill, Creativity<br/> and <em>Passion</em></h1>                        
                    <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="subhead" />
                </Col6>
                <Col6>
                    <HeroSpotLight>
                        <img src={pageContext.featured_media.source_url} width="75%" alt={pageContext.title} />
                    </HeroSpotLight>
                </Col6>
            </Row>
        </Container>
        <Section>
            <Container>
                <h2>{pageContext.acf.heading}</h2>
                <p dangerouslySetInnerHTML={{__html: pageContext.acf.intro}} />
                <Row className="jc-between">
                    {pageContext.acf.skills_view.map(skill =>
                        <Bucket 
                            key={skill.heading}
                            skillHeading={skill.heading}
                            skillIntro={skill.intro}
                            skillContent={skill.content}
                        />
                    )}
                </Row>                
            </Container>
        </Section>
        <Section className='section--dark'>
            <Container>
                <Row>
                    <Col4>
                        <h2>Principles</h2>
                    </Col4>
                    <Col8>
                        <Row>
                            <Col6>a;ldksj;lajksdf</Col6>
                            <Col6>';aksdf;ajsdf</Col6>
                        </Row>
                    </Col8>   
                </Row>                
            </Container>
        </Section>
        <Section className='section--gradient'>
            <Container>
                <Row>
                    <Col4>
                        <h2>Principles</h2>
                    </Col4>
                    <Col8>
                        <Row>
                            <Col6>a;ldksj;lajksdf</Col6>
                            <Col6>';aksdf;ajsdf</Col6>
                        </Row>
                    </Col8>   
                </Row>                
            </Container>
        </Section>
    </Layout>
)