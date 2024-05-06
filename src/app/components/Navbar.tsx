import Link from 'next/link';

export default function Navbar() {
    return (
        <header className='flex flex-row p-4 py-8 lg:p-6 w-full justify-between items-center max-w-[1280px] mx-auto'>
            <Link href={'/'} className='flex flex-row items-center'>
                <h1 className='text-lg tracking-tighter text-gray-800'>
                    DreamDisney{' '}
                    <span className='text-xs text-lightblue border-lightblue-dark'>
                        AI
                    </span>
                </h1>
            </Link>

            <nav className='flex flex-row items-center'>
                <ul className='flex items-center text-gray-600'>
                    <li>
                        <Link
                            className='transition bg-gradient-to-r bg-white text-lightblue px-4 py-1 rounded-full hover:shadow-m lg:max-w-[200px] border border-lightblue hover:bg-lightblue hover:text-white'
                            href={'/#'}
                            aria-disabled
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
