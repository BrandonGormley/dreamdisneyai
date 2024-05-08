import Image from 'next/image';

export default function ParkSelector() {
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
            <div className='flex flex-row justify-center items-cente flex-wrap w-full lg:max-w-[60%]'>
                <div className='flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300 '>
                    <Image
                        src={'/castle-icon.jpeg'}
                        alt='Magic Kingdom Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Magic Kingdom</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
                    <Image
                        src={'/epcot-icon.jpeg'}
                        alt='Epcot Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Epcot</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
                    <Image
                        src={'/animal-kingdom-icon.webp'}
                        alt='Animal Kingdom Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Animal Kingdom</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
                    <Image
                        src={'/hollywood-studios-icon.jpeg'}
                        alt='Hollywood Studios Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Hollywood Studios</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
                    <Image
                        src={'/cruise-icon.jpeg'}
                        alt='Disney Cruise Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Disney Cruise</p>
                </div>
                <div className='flex flex-col justify-center items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300'>
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
        </div>
    );
}
