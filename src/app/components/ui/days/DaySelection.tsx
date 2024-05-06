'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function DaySelection() {
    const [daySelected, setDaySelected] = useState('');

    const handleDaySelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDaySelected(event.target.value);
        console.log(daySelected);
    };

    return (
        <>
            <div className='flex justify-center items-center animate-fadeIn py-4 text-gray-800'>
                <p className='max-w-xl my-2 animate-fadeIn text-center mx-2 text-xl'>
                    Days:
                </p>
                <select
                    value={daySelected}
                    onChange={handleDaySelection}
                    name='days'
                    id='days'
                    className='mx-2 text-lg text-gray-600 px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
                >
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
            </div>
            {Number(daySelected) > 0 && (
                <div className='flex flex-col'>
                    <p className='text-center mb-6 text-2xl text-gray-600'>{`${daySelected} Days of Magic coming up!`}</p>
                    <Link
                        href={'/'}
                        className='transition bg-gradient-to-r text-center from-lightblue to-lightblue-dark text-white px-8 py-3 rounded-full hover:shadow-md hover:shadow-sand mx-auto w-full max-w-[200px]'
                    >
                        Next
                    </Link>
                </div>
            )}
        </>
    );
}
