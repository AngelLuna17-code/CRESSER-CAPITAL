import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a donde sea necesario, como una API o realizar otras acciones con los datos
        console.log(formData);
    };

    return (
        <section>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <iframe
                            title="Mapa de Garay Arquitectos"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.468960221434!2d-104.89810813798556!3d21.504856622501443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737ad5ef58b63%3A0x29a086ee978a3aeb!2sGaray%20Arquitectos!5e0!3m2!1sen!2smx!4v1700590660418!5m2!1sen!2smx"
                            width="100%"
                            height="400"
                            loading="lazy"
                            style={{ filter: 'grayscale(100%) invert(92%) contrast(83%)' }}>
                        </iframe>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2'>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Asunto"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Mensaje"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;