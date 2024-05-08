import Planner from '../components/ui/planner/Planner';

export default function page() {
    return (
        <>
            <section className='w-full p-8 py-24 max-w-[1280px] mx-auto flex flex-col justify-center items-center'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center lg:text-left text-gray-800'>
                    <div className='grid gap-4 lg:px-8'>
                        <h2 className='animate-fadeIn text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-lightblue via-sand-dark to-yellow bg-clip-text text-transparent mb-4 text-center'>
                            Welcome Aboard!
                        </h2>
                        <p className='max-w-xl text-xl my-2 animate-fadeIn text-gray-800 text-center'>
                            Pack your imagination and get ready for a journey
                            like no other! Your Disney escape starts now.
                        </p>
                    </div>
                </div>
                <Planner />
            </section>
        </>
    );
}
