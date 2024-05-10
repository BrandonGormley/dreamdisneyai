import Planner from '../components/ui/planner/Planner';

export default function page() {
    return (
        <main className='w-full p-2 py-24 max-w-[1280px] mx-auto flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4 text-center text-gray-800 mx-auto'>
                <div className='grid gap-4 lg:px-8 w-full mx-auto'>
                    <h2 className='animate-fadeIn text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-lightblue via-sand-dark to-yellow bg-clip-text text-transparent mb-4 text-center'>
                        Welcome Aboard!
                    </h2>
                    <p className='max-w-xl text-xl my-2 animate-fadeIn text-gray-800 text-center mx-auto'>
                        Pack your imagination and get ready for a journey like
                        no other! Your Disney escape starts now.
                    </p>
                </div>
            </div>
            <Planner />
        </main>
    );
}
