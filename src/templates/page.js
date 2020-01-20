import React from 'react';
import Layout from '../components/Layout'
export default ({pageContext}) => (
    <Layout>
        <h1>{pageContext.title}</h1>
        <p>{pageContext.content}</p>
    </Layout>
)