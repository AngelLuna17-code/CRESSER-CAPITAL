import React from 'react';

function Mapa() {

    return (
        <section>
            {/* Mapa */}
            <div className='w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.876752866501!2d-104.90312942512313!3d21.50037088026961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842736e4e6cb1897%3A0x86afa3963ae304db!2sQuer%C3%A9taro%20429-a%2C%20Fray%20Jun%C3%ADpero%20Serra%2C%2063169%20Tepic%2C%20Nay.!5e0!3m2!1sen!2smx!4v1707773683648!5m2!1sen!2smx"
                    title="Dirección"
                    width="100%"
                    height="300"
                    loading="lazy"
                    style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)' }}>
                </iframe>
            </div>
            {/* Mapa */}
        </section>
    );
}

export default Mapa;