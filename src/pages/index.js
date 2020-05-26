import React from 'react';

import About from '../components/sections/about/about'
import Skills from '../components/sections/skills/skills'
import Projects from '../components/sections/projects/projects'
import Contact from '../components/sections/contact/contact'

import Layout from '../components/layout';

const IndexPage = () => {
    
    return (
        <Layout>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default IndexPage;
