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
            <div className='w-full py-[100px]'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5'>
                        {/* Cards */}
                        <div >
                            <div className='grid grid-cols-2 gap-5'>
                                {/* Card 1 */}
                                <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-5 flex items-center justify-center'>
                                    <div className=''>
                                        <div class="flex justify-center">
                                            <svg className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                            </svg>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <p>
                                                Ubiicación:
                                            </p>
                                            <p>
                                                Prolongación Queretaro 429, Int: A, Fray Junipero Serra
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 1 */}
                                {/* Card 2 */}
                                <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-5 flex items-center justify-center'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <svg className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
                                            </svg>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <p>
                                                Horario:
                                            </p>
                                            <p>
                                                Lunes a Viernes:
                                                8:00 AM - 4:30 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                {/* Card 3 */}
                                <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-5 flex items-center justify-center'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <svg className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                                            </svg>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <p>
                                                Correo:
                                            </p>
                                            <p>
                                                contacto@cressercapital.com.mx
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                {/* Card 4 */}
                                <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-5 flex items-center justify-center'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <svg className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <p>
                                                Llámanos:
                                            </p>
                                            <p>
                                                +523111189886
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4 */}
                            </div>
                        </div>
                        {/* Cards */}
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
            </div>
        </section>
    );
}

export default Form;