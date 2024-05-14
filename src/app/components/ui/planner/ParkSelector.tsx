import Image from 'next/image';
import { useState } from 'react';

export default function ParkSelector({ setParksSelected, parksSelected }: any) {
    const [isMkSelected, setIsMkSelected] = useState(false);
    const [isEpcotSelected, setIsEpcotSelected] = useState(false);
    const [isAkSelected, setIsAkSelected] = useState(false);
    const [isHwsSelected, setIsHwsSelected] = useState(false);
    const [isDsSelected, setIsDsSelected] = useState(false);
    const [isCruiseSelected, setIsCruiseSelected] = useState(false);

    const handleIsMkSelected = () => {
        if (!isMkSelected) {
            setParksSelected([...parksSelected, 'Magic Kingdom']);
        } else {
            setParksSelected(
                parksSelected.filter((park: string) => park !== 'Magic Kingdom')
            );
        }

        setIsMkSelected(!isMkSelected);
    };

    const handleIsEpcotSelected = () => {
        if (!isEpcotSelected) {
            setParksSelected([...parksSelected, 'Epcot']);
        } else {
            setParksSelected(
                parksSelected.filter((park: string) => park !== 'Epcot')
            );
        }

        setIsEpcotSelected(!isEpcotSelected);
    };

    const handleIsAkSelected = () => {
        if (!isAkSelected) {
            setParksSelected([...parksSelected, 'Animal Kingdom']);
        } else {
            setParksSelected(
                parksSelected.filter(
                    (park: string) => park !== 'Animal Kingdom'
                )
            );
        }

        setIsAkSelected(!isAkSelected);
    };

    const handleIsHwsSelected = () => {
        if (!isHwsSelected) {
            setParksSelected([...parksSelected, 'Hollywood Studios']);
        } else {
            setParksSelected(
                parksSelected.filter(
                    (park: string) => park !== 'Hollywood Studios'
                )
            );
        }

        setIsHwsSelected(!isHwsSelected);
    };

    const handleIsDsSelected = () => {
        if (!isDsSelected) {
            setParksSelected([...parksSelected, 'Disney Springs']);
        } else {
            setParksSelected(
                parksSelected.filter(
                    (park: string) => park !== 'Disney Springs'
                )
            );
        }

        setIsDsSelected(!isDsSelected);
    };

    const handleIsCruiseSelected = () => {
        if (!isCruiseSelected) {
            setParksSelected([...parksSelected, 'Disney Cruise']);
        } else {
            setParksSelected(
                parksSelected.filter((park: string) => park !== 'Disney Cruise')
            );
        }

        setIsCruiseSelected(!isCruiseSelected);
    };

    return (
        <div className='flex flex-col items-center justify-center animate-fadeIn'>
            <p className='max-w-xl text-lg my-2 text-gray-800 text-center'>
                Get ready to dive into the Disney magic! It's decision time:
                will you explore the iconic parks or set sail on a Disney
                Cruise? Choose your adventure and let the enchantment begin!
            </p>

            <p className='max-w-xl text-sm my-2 text-gray-600 text-center'>
                Please select all that apply to your trip.
            </p>
            <div className='flex flex-row justify-center items-center flex-wrap w-full lg:max-w-[60%]'>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 ${
                        isMkSelected &&
                        'border-green-200 shadow-green-200 shadow-lg'
                    }`}
                    onClick={handleIsMkSelected}
                >
                    <Image
                        src={'/castle-icon.jpeg'}
                        alt='Magic Kingdom Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Magic Kingdom</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 ${
                        isEpcotSelected &&
                        'border-green-200 shadow-green-200 shadow-lg'
                    }`}
                    onClick={handleIsEpcotSelected}
                >
                    <Image
                        src={'/epcot-icon.jpeg'}
                        alt='Epcot Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Epcot</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 ${
                        isAkSelected &&
                        'border-green-200 shadow-green-200 shadow-lg'
                    }`}
                    onClick={handleIsAkSelected}
                >
                    <Image
                        src={'/animal-kingdom-icon.webp'}
                        alt='Animal Kingdom Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Animal Kingdom</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 ${
                        isHwsSelected &&
                        'border-green-200 shadow-green-200 shadow-lg'
                    }`}
                    onClick={handleIsHwsSelected}
                >
                    <Image
                        src={'/hollywood-studios-icon.jpeg'}
                        alt='Hollywood Studios Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Hollywood Studios</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 ${
                        isCruiseSelected &&
                        'border-green-200 shadow-green-200 shadow-lg'
                    }`}
                    onClick={handleIsCruiseSelected}
                >
                    <Image
                        src={'/cruise-icon.jpeg'}
                        alt='Disney Cruise Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Disney Cruise</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 ${
                        isDsSelected &&
                        'border-green-200 shadow-green-200 shadow-lg'
                    }`}
                    onClick={handleIsDsSelected}
                >
                    <Image
                        src={'/disney-springs-icon.png'}
                        alt='Disney Springs Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Disney Springs</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
                    <Image
                        src={'/disneyland-icon.png'}
                        alt='Disneyland Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Disneyland</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
                    <Image
                        src={'/disney-ca-icon.jpeg'}
                        alt='Disneyland California Adventure'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Disney Cal Adv.</p>
                </div>
            </div>
            {parksSelected.length > 0 && (
                <div className='flex flex-col w-full animate-fadeIn'>
                    <p className='text-center mb-6 text-2xl text-gray-600'>{``}</p>
                    <button className='transition bg-gradient-to-r text-center from-lightblue to-lightblue-dark text-white px-8 py-3 rounded-full hover:shadow-md hover:shadow-sand mx-auto w-full max-w-[200px]'>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
