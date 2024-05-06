import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section className='w-full p-8 max-w-[1280px] mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 px-4 text-center lg:text-left text-gray-800'>
                    <div className='grid gap-4 px-8'>
                        <p className='bg-lightblue-light rounded-full max-w-[200px] text-center px-4 py-1 border mx-auto text-xs lg:mr-auto lg:ml-0 text-lightblue-dark border-lightblue'>
                            🌟 Elimnates all stress
                        </p>
                        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                            Plan Your Next
                            <br />
                            <span className='bg-gradient-to-r from-lightblue via-sand-dark to-yellow bg-clip-text text-transparent mb-4'>
                                Disney Vacation
                            </span>
                        </h1>
                        <p className='max-w-xl text-lg my-2'>
                            Our AI-powered app helps you plan the perfect Disney
                            trip, optimize your park visits, and manage your
                            budget.
                        </p>
                        <Link
                            href={'/#'}
                            className='transition bg-gradient-to-r from-lightblue to-lightblue-dark text-white px-8 py-3 rounded-full hover:shadow-md hover:shadow-sand lg:max-w-[200px]'
                        >
                            Let's Make Magic
                        </Link>
                    </div>
                    <Image
                        src='/hero-image2.webp'
                        alt='Disney Hero Image'
                        width={768}
                        height={768}
                        className='w-full md:w-1/2'
                    />
                </div>
            </section>
        </>
    );
}
