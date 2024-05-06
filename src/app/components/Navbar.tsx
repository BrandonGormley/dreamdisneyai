import Link from 'next/link';

export default function Navbar() {
    return (
        <header className='flex flex-row p-4 py-8 lg:p-6 w-full justify-between items-center max-w-[1280px] mx-auto'>
            <Link href={'/'} className='flex flex-row items-center'>
                <h1 className='text-lg tracking-tighter text-gray-800'>
                    DreamDisney{' '}
                    <span className='text-sm text-lightblue'>AI</span>
                </h1>
            </Link>

            <nav className='flex flex-row items-center'>
                <ul className='flex items-center text-gray-600'>
                    <li className='mx-2'>
                        <Link className='hover:text-gray-800' href={'/parks'}>
                            Item 1
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
