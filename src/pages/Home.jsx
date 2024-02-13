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

const Home = () => {
    return (
        <section>
            {/* Hero */}
            <Hero />
            {/* Hero */}
            <div class='container mx-auto py-[100px]'>
                <div class='text-center'>
                    <h2 class='text-3xl font-bold text-[#a18144] mb-4'>
                        Quiénes somos
                    </h2>
                    <p class='text-lg text-[#a18144] leading-relaxed'>
                        CRESSER es una empresa especializada en el manejo de capital, donde nos enfocamos al 100% en colocar el capital en oportunidades únicas para obtener beneficios.
                    </p>
                </div>
            </div>


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