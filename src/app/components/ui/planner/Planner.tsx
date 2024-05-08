'use client';
import { useState } from 'react';
import DaysSelector from './DaysSelector';
import FamilySelector from './FamilySelector';
import ParkSelector from './ParkSelector';

export default function Planner() {
    const [daysSelected, setDaysSelected] = useState('');
    const [monthSelected, setMonthSelected] = useState('');
    const [adultsSelected, setAdultsSelected] = useState('');
    const [childrenSelected, setChildrenSelected] = useState('');
    const [parksSelected, setParksSelected] = useState([]);

    const [showDaySelector, setShowDaySelector] = useState(true);
    const [showFamilySelector, setShowFamilySelector] = useState(false);
    const [showParkSelected, setShowParkSelector] = useState(false);

    const handleDaySelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDaysSelected(event.target.value);
    };
    const handleMonthSelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setMonthSelected(event.target.value);
    };
    const handleAdultsSelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAdultsSelected(event.target.value);
    };
    const handleChildrenSelection = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setChildrenSelected(event.target.value);
    };
    const handleShowFamilySelector = () => {
        setShowDaySelector(false);
        setShowFamilySelector(true);
    };
    const handleShowParkSelector = () => {
        setShowDaySelector(false);
        setShowFamilySelector(false);
        setShowParkSelector(true);
    };

    return (
        <section className='my-8'>
            {showDaySelector && (
                <DaysSelector
                    daysSelected={daysSelected}
                    monthSelected={monthSelected}
                    handleMonthSelection={handleMonthSelection}
                    handleDaySelection={handleDaySelection}
                    handleShowFamilySelector={handleShowFamilySelector}
                />
            )}
            {showFamilySelector && (
                <FamilySelector
                    adultsSelected={adultsSelected}
                    childrenSelected={childrenSelected}
                    handleAdultsSelection={handleAdultsSelection}
                    handleChildrenSelection={handleChildrenSelection}
                    handleShowParkSelector={handleShowParkSelector}
                />
            )}
            {showParkSelected && <ParkSelector />}
        </section>
    );
}
