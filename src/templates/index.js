import React from 'react';

import Layout from '../components/layout';
import Bucket from '../components/bucket';
import Principle from '../components/principle';
import CtaButton from '../components/cta-button';

import {
    Container,
    Row,
    Col,
    Col4,
    Col6, 
    Col8,
    HeroSpotLight,
    Section 
} from '../components/styles/global';
import IndexStyles from '../components/styles/index-styles';

export default ({ pageContext }) => (   
    <Layout>
        <IndexStyles />
        <Container>
            <Row>
                <Col6>
                    <h1>Skill, Creativity<br/> and <em>Passion</em></h1>                        
                    <div dangerouslySetInnerHTML={{__html: pageContext.content}} className='subhead' />
                </Col6>
                <Col6>
                    <HeroSpotLight>
                        <img src={pageContext.featured_media.source_url} width='75%' alt={pageContext.title} />
                    </HeroSpotLight>
                </Col6>
            </Row>
        </Container>
        <Section>
            <Container>
                <h2>{pageContext.acf.heading}</h2>
                <p dangerouslySetInnerHTML={{__html: pageContext.acf.intro}} />
                <Row className='jc-between'>
                    {pageContext.acf.skills_view.map(({ heading, intro, content }) =>
                        <Bucket 
                            bucketKey={heading}
                            skillHeading={heading}
                            skillIntro={intro}
                            skillContent={content}
                        />
                    )}
                </Row>                
            </Container>
        </Section>
        <Section className='section--dark'>
            <Container>
                <Row className='row--stack-md'>
                    <Col4 className='align-items-start'>
                        <h2 className='principle-heading'>Principles</h2>
                    </Col4>
                    <Col8 className='col-8-full-md'>
                        <Row>                            
                            {pageContext.acf.principles.map(({ principle, content }) => 
                                <Principle
                                    principleKey={principle}
                                    principle={principle}
                                    content={content}
                                />
                            )}
                        </Row>
                    </Col8>   
                </Row>                
            </Container>
        </Section>
        <Section className='section--gradient'>
            <Container>
                <Row>                    
                    <Col>
                        <h2 className='text-center' dangerouslySetInnerHTML={{ __html: pageContext.acf.heading_intro }} />                        
                    </Col>   
                </Row>
                <Row className='jc-center'>                    
                    <Col4 className='ai-center'>
                        <CtaButton 
                            title='View My Work'
                            url='/work'
                        />
                    </Col4>
                    <Col4 className='ai-center'>
                        <CtaButton 
                            title='About Me'
                            url='/about'
                            modifier='secondary-cta'
                        />
                    </Col4>   
                </Row>                
            </Container>
        </Section>
    </Layout>
)
