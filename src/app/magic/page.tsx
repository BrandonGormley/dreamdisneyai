'use client';
import { useState } from 'react';
import DaySelection from '@/app/components/ui/days/DaySelection';

export default function page() {
    const [showDaySelector, setShowDaySelector] = useState(true);
    const [daySelected, setDaySelected] = useState('');
    const [showFamilySelector, setShowFamilySelector] = useState(false);
    const [kidsSelected, setKidsSelected] = useState('');
    const [adultsSelected, setAdultsSelected] = useState('');

    const handleDaySelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDaySelected(event.target.value);
    };
    const handleKidsSelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setKidsSelected(event.target.value);
    };
    const handleAdultsSelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAdultsSelected(event.target.value);
    };

    const handleShowFamilySelection = () => {
        setShowFamilySelector(true);
        setShowDaySelector(false);
    };
    return (
        <>
            {showDaySelector && (
                <DaySelection
                    daySelected={daySelected}
                    handleDaySelection={handleDaySelection}
                />
            )}
            {Number(daySelected) > 0 && (
                <div className='flex flex-col'>
                    <p className='text-center mb-6 text-2xl text-gray-600'>{`${daySelected} Days of Magic coming up!`}</p>
                    <button
                        onClick={handleShowFamilySelection}
                        className='transition bg-gradient-to-r text-center from-lightblue to-lightblue-dark text-white px-8 py-3 rounded-full hover:shadow-md hover:shadow-sand mx-auto w-full max-w-[200px]'
                    >
                        Next
                    </button>
                </div>
            )}
            {showFamilySelector && <p>Family Time</p>}
        </>
    );
}
