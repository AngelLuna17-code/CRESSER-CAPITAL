import React from 'react';
import Hero from '../components/Hero';
import Cards from "../components/Cards";
import Counter from "../components/Counter"
import Accordion from '../components/Accordion';
import Form from '../components/Form';
import Mapa from '../components/Mapa';

const Home = () => {
    return (
        <section>
            {/* Hero */}
            <Hero />
            {/* Hero */}
            {/* Cards */}
            <Cards />
            {/* Cards */}
            {/* Counter */}
            <Counter />
            {/* Counter */}
            {/* Accordion */}
            <Accordion />
            {/* Accordion */}
            {/* Formulatio */}
            <Form />
            {/* Formulatio */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
        </section>
    );
};

export default Home;