import React from 'react';

interface DaysSelectorProps {
    daysSelected: String;
    monthSelected: String;
    handleDaySelection: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleMonthSelection: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleShowFamilySelector: () => void;
}

export default function DaysSelector({
    daysSelected,
    monthSelected,
    handleDaySelection,
    handleShowFamilySelector,
    handleMonthSelection,
}: DaysSelectorProps) {
    return (
        <div className='flex flex-col items-center justify-center relative animate-fadeIn'>
            <p className='max-w-xl text-lg my-2 text-gray-800 text-center'>
                Before we embark on our adventure to the most magical place on
                earth, let's determine how many days we'll be there & which
                month!
            </p>

            <div className='flex flex-row justify-center items-center'>
                <div className='flex justify-center items-center py-4 text-gray-800'>
                    <p className='max-w-xl my-2 text-center mx-2 text-xl'>
                        Month:
                    </p>
                    <select
                        // @ts-ignore
                        value={monthSelected}
                        onChange={handleMonthSelection}
                        name='month'
                        id='month'
                        className='mx-2 text-lg text-gray-600 px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
                    >
                        <option value='0'>Month</option>
                        <option value='January'>January</option>
                        <option value='February'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='Sepetember'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                    </select>
                </div>{' '}
                <div className='flex justify-center items-center py-4 text-gray-800'>
                    <p className='max-w-xl my-2 text-center mx-2 text-xl'>
                        Days:
                    </p>
                    <select
                        // @ts-ignore
                        value={daysSelected}
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

            {Number(daysSelected) > 0 && (
                <div className='flex flex-col animate-fadeIn'>
                    <p className='text-center mb-6 text-2xl text-gray-600'>{`${daysSelected} Days of Magic coming up for your trip in ${monthSelected}!`}</p>
                    <button
                        onClick={handleShowFamilySelector}
                        className='transition bg-gradient-to-r text-center from-lightblue to-lightblue-dark text-white px-8 py-3 rounded-full hover:shadow-md hover:shadow-sand mx-auto w-full max-w-[200px]'
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
