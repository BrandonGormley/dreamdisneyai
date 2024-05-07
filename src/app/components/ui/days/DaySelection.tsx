'use client';
import Link from 'next/link';

interface DaySelectionProps {
    daySelected: String;
    handleDaySelection: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function DaySelection({
    daySelected,
    handleDaySelection,
}: DaySelectionProps) {
    return (
        <>
            <section className='w-full p-8 py-24 max-w-[1280px] mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center lg:text-left text-gray-800'>
                    <div className='grid gap-4 lg:px-8'>
                        <h2 className='animate-fadeIn text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-lightblue via-sand-dark to-yellow bg-clip-text text-transparent mb-4 text-center'>
                            Welcome Aboard!
                        </h2>
                        <p className='max-w-xl text-lg my-2 animate-fadeIn text-gray-800 text-center'>
                            Pack your imagination and get ready for a journey
                            like no other! Your Disney escape starts now.
                        </p>
                        <p className='max-w-xl text-lg my-2 animate-fadeIn text-gray-800 text-center'>
                            Before we embark on our adventure to the most
                            magical place on earth, let's determine how many
                            days we'll be there!
                        </p>
                        <div className='flex justify-center items-center animate-fadeIn py-4 text-gray-800'>
                            <p className='max-w-xl my-2 animate-fadeIn text-center mx-2 text-xl'>
                                Days:
                            </p>
                            <select
                                // @ts-ignore
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
                    </div>
                </div>
            </section>
        </>
    );
}
