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
            <div className='container mx-auto py-[100px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>

                    </div>
                    {/* Formularion */}
                    <div className=''>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2'>
                                {/* Nombre */}
                                <div className='px-[10px]'>
                                    <input
                                        className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a]'
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nombre"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {/* Nombre */}
                                {/* Correo */}
                                <div className='px-[10px]'>
                                    <input
                                        className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a]'
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Correo electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {/* Correo */}
                            </div>
                            {/* Asunto */}
                            <div className='px-[10px] mt-5'>
                                <input
                                    className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a]'
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Asunto"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Asunto */}
                            {/* Mensaje */}
                            <div className='px-[10px] mt-5'>
                                <textarea
                                    className='w-full h-[150px] p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a]'
                                    id="message"
                                    name="message"
                                    placeholder="Mensaje"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Mensaje */}
                            <div className='flex justify-center mt-5'>
                                <button type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Formularion */}
                </div>
            </div>
        </section>
    );
}

export default Form;