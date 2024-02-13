import React from 'react';
import Hero from '../components/Hero';
import Cards from "../components/Cards";
import Counter from "../components/Counter"
import Accordion from '../components/Accordion';
import Form from '../components/Form';
import Mapa from '../components/Mapa';
import Calculadora from '../components/Calculadora';
import FloatingButton from '../components/FloattingButton';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Cards2 from '../components/Cards2';
import AboutUsSection from '../components/AboutUsSection';

const Home = () => {
    return (
        <section>
            {/* Hero */}
            <Hero />
            {/* Hero */}
<AboutUsSection/>


            {/* Cards */}
            <Cards />
            {/* Cards */}
            {/* Counter */}
            <Counter />
            {/* Counter */}
            <Cards2 />
            {/* Calculadora */}
            <Calculadora />
            {/* Calculadora */}
            {/* Accordion */}
            <Accordion />
            {/* Accordion */}
            {/* Formulatio */}
            <Form />
            {/* Formulatio */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
            {/* Floatting Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floatting Buttons */}
        </section>
    );
};

export default Home;