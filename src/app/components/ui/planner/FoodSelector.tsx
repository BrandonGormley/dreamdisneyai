import Image from 'next/image';

export default function FoodSelector() {
    return (
        <div className='flex flex-col items-center justify-center animate-fadeIn'>
            <p className='max-w-xl text-lg my-2 text-gray-800 text-center'>
                To ensure everyone enjoys the culinary magic of Disney World,
                let's first explore the types of food you're craving. Are you in
                the mood for classic American fare, international cuisines, or
                delightful Disney-themed treats?
            </p>

            <p className='max-w-xl text-sm my-2 text-gray-600 text-center'>
                Please select all the food types that apply to your trip.
            </p>
            <div className='flex flex-row justify-center items-center flex-wrap w-full lg:max-w-[60%]'>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/italian-food.png'}
                        alt='Italian Food Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Italian</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/asian-food.png'}
                        alt='Asian Food Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Asian</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/barbeque-food.png'}
                        alt='Barbeque Food Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>BBQ</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/seafood-food.png'}
                        alt='Seafood Food Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Seafood</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/snacks-food.png'}
                        alt='Snacks Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Snacks</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/sweets-food.png'}
                        alt='Sweets Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Sweets</p>
                </div>
                <div
                    className={`flex flex-col justify-start items-center p-2 rounded-lg border border-gray-200 shadow-md m-2 w-32 hover:scale-105 transition-all cursor-pointer duration-300`}
                >
                    <Image
                        src={'/drinks.png'}
                        alt='Drinks Icon'
                        width={50}
                        height={50}
                    />
                    <p className='text-xs my-2'>Drinks</p>
                </div>
            </div>
        </div>
    );
}
