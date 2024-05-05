export default function Home() {
    return (
        <>
            <section className='relative h-[80vh] w-full overflow-hidden'>
                <img
                    alt='Disney Castle'
                    className='h-full w-full object-cover object-center'
                    height={1080}
                    src='/hero-image.avif'
                    style={{
                        aspectRatio: '1920/1080',
                        objectFit: 'cover',
                    }}
                    width={1920}
                />

                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent' />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center text-white'>
                    <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                        Plan Your Disney Vacation
                    </h1>
                    <p className='max-w-xl text-lg md:text-xl'>
                        Our AI-powered app helps you plan the perfect Disney
                        trip, optimize your park visits, and manage your budget.
                    </p>
                    <button>Get Started</button>
                </div>
            </section>
            <section className='container mx-auto py-12 md:py-16 lg:py-20'>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-lg '>
                        <CalendarIcon className='h-12 w-12 text-primary' />
                        <h3 className='text-xl font-semibold'>Trip Planning</h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                            Our AI-powered trip planner helps you create the
                            perfect Disney itinerary, complete with park
                            reservations, FastPasses, and more.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-lg '>
                        <CompassIcon className='h-12 w-12 text-primary' />
                        <h3 className='text-xl font-semibold'>
                            Park Optimization
                        </h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                            Maximize your time in the parks with our AI-powered
                            park optimization tool, which suggests the best
                            routes and times to visit attractions.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-lg '>
                        <WalletIcon className='h-12 w-12 text-primary' />
                        <h3 className='text-xl font-semibold'>
                            Budget Management
                        </h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                            Stay on top of your Disney vacation budget with our
                            comprehensive tracking and forecasting tools.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-gray-100 py-12 md:py-16 lg:py-2'>
                <div className='container mx-auto text-center'>
                    <div className='mx-auto max-w-xl space-y-4'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Start Planning Your Disney Vacation
                        </h2>
                        <p className='text-gray-500'>
                            Our AI-powered app takes the stress out of planning
                            your Disney trip. Get started today and enjoy a
                            magical vacation.
                        </p>
                        <button>Get Started</button>
                    </div>
                </div>
            </section>
        </>
    );
}

function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M8 2v4' />
            <path d='M16 2v4' />
            <rect width='18' height='18' x='3' y='4' rx='2' />
            <path d='M3 10h18' />
        </svg>
    );
}

function CompassIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <circle cx='12' cy='12' r='10' />
            <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' />
        </svg>
    );
}

function WalletIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1' />
            <path d='M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4' />
        </svg>
    );
}
