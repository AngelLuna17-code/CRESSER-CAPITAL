import React from 'react';
import Hero from '../components/Hero';
import AboutUsSection from '../components/AboutUsSection';
import Cards from "../components/Cards";
import Accordion from '../components/Accordion';
import Counter from "../components/Counter"
import Calculadora from '../components/Calculadora';
import Cards2 from '../components/Cards2';
import Form from '../components/Form';
import Mapa from '../components/Mapa';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloattingButton';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
    return (
        <section>
            {/* Hero */}
            <Hero />
            {/* About */}
            <AboutUsSection />
            {/* Cards */}
            <Cards />
            {/* Accordion */}
            <Accordion />
            {/* Counter */}
            <Counter />
            {/* Calculadora */}
            <Calculadora />
            {/* Cards 2 */}
            <Cards2 />
            {/* Formulatio */}
            <Form />
            {/* Mapa */}
            <Mapa />
            {/* Footer */}
            <Footer />
            {/* Floatting Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
        </section>
    );
};

export default Home;