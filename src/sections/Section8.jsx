
import React from 'react';
import Submit from '../assets/vectors/submit-white.png';
import { useDispatch, useSelector } from 'react-redux';
import { setFormStage, resetFormStage } from '../store/formSlice/formVisibilitySlice';
import { setFormData, resetFormData } from '../store/formSlice/formDataSlice';

const SectionEight = () => {
    const dispatch = useDispatch();
    const formStage = useSelector((state) => state.formVisibility.formStage);
    const formData = useSelector((state) => state.formData);

    const handleSubmit = () => {
        alert(`Form submitted with data: ${JSON.stringify(formData)}`);
        dispatch(resetFormStage());
        dispatch(resetFormData());
    };

    const handleButtonClick = () => {
        if (formStage === 'hidden') {
            dispatch(setFormStage('visible'));
        } else if (formStage === 'visible') {
            handleSubmit();
            dispatch(resetFormStage());
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ [name]: value }));
    };

    return (
        <div className='transform skew-container bg-[#0C0C0C] px-8 py-8  md:px-16 md:py-16 relative'>
            <div className='transform inner-skew-container bg-[#525AA0] px-4 py-4  md:px-16 md:py-16'>
                <div className="transform skew-content px-4 py-4  md:px-16 md:py-16 w-full flex flex-col items-center justify-center gap-8">
                    <h1 className='text-white text-[30px] lg:text-[54px] font-switzer w-full md:w-[680px] font-semibold text-center'>
                        Need a job done, and done well? Get started
                    </h1>
                    <div className={`transition-all duration-300 ${formStage === 'visible' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <form className='w-full p-0 md:p-8 mb-4'>
                            <div className='flex flex-col lg:flex-row gap-8 w-full'>
                                <div className='mb-4'>
                                    <input
                                        className='bg-[#525AA0] w-full md:w-[500px] border-b-[1px] text-md md:text-[16px] outline-none border-[#D8D2FF]  py-4 font-switzer font-semibold text-white leading-tight placeholder-white'
                                        name='name'
                                        type='text'
                                        placeholder='Enter your name...'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        className='bg-[#525AA0] w-full md:w-[500px] border-b-[1px] text-md md:text-[16px] outline-none border-[#D8D2FF]  py-4 font-switzer font-semibold text-white leading-tight placeholder-white'
                                        name='email'
                                        type='text'
                                        placeholder='Enter your Email...'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='my-8 w-full'>
                                <input
                                    className='bg-[#525AA0] w-full md:w-full border-b-[1px] text-center text-md md:text-[16px] outline-none border-[#D8D2FF]  py-4 font-switzer font-semibold text-white leading-tight placeholder-white'
                                    name='message'
                                    type='text'
                                    placeholder='Enter your Message...'
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div
                        className={`w-[74px] h-[74px] bg-[#202229] rounded-[30px] flex items-center justify-center transform transition-transform duration-300 cursor-pointer ${formStage === 'visible' ? 'translate-y-0' : ''}`}
                        onClick={handleButtonClick}
                    >
                        <img
                            src={Submit}
                            alt='submit'
                            className={`w-[25px] h-[15px] object-cover transform transition-transform duration-300 ${formStage === 'visible' ? 'rotate-0' : 'rotate-90'}`}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionEight;
