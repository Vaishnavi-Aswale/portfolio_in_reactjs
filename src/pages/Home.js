import React from 'react'
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import VolunteerSection from '../components/VolunteerSection';
import WorkEx from '../components/WorkEx';


export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <ProjectSection/>
            <WorkEx/>
            <VolunteerSection/>
            <ContactBanner/>
            <Footer/>
        </div>
    )
}
