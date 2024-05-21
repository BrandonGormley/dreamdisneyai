import React from 'react';

interface FamilySelectorProps {
    adultsSelected: String;
    childrenSelected: String;
    handleAdultsSelection: (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
    handleChildrenSelection: (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
    handleShowParkSelector: () => void;
}

export default function FamilySelector({
    adultsSelected,
    childrenSelected,
    handleAdultsSelection,
    handleChildrenSelection,
    handleShowParkSelector,
}: FamilySelectorProps) {
    return (
        <div className='flex flex-col items-center justify-center animate-fadeIn'>
            <p className='max-w-xl text-lg my-2 text-gray-800 text-center'>
                To ensure everyone experiences the wonder and excitement of our
                journey, let's first determine the composition of our group. Are
                we traveling with just adults, or do we have little adventurers
                joining us as well?
            </p>
            <div className='flex flex-col md:flex-row justify-center items-center my-2'>
                <div className='flex justify-center items-center py-4 text-gray-800'>
                    <p className='max-w-xl my-2 text-center mx-2 text-xl'>
                        Adults:
                    </p>
                    <select
                        // @ts-ignore
                        value={adultsSelected}
                        onChange={handleAdultsSelection}
                        name='adults'
                        id='adults'
                        className='mx-2 text-lg text-gray-600 px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
                    >
                        <option value='amount'>adults</option>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                </div>
                <div className='flex justify-center items-center py-4 text-gray-800'>
                    <p className='max-w-xl my-2 text-center mx-2 text-xl'>
                        Children:
                    </p>
                    <select
                        // @ts-ignore
                        value={childrenSelected}
                        onChange={handleChildrenSelection}
                        name='children'
                        id=''
                        className='mx-2 text-lg text-gray-600 px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
                    >
                        <option value='amount'>children</option>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                </div>
            </div>
            {Number(adultsSelected) > 0 && (
                <div className='flex flex-col animate-fadeIn'>
                    <p className='text-center mb-6 text-2xl text-gray-600'>{`${adultsSelected} adults & ${
                        childrenSelected === '1'
                            ? '1 child'
                            : `${childrenSelected} children`
                    } how exciting!`}</p>
                    <button
                        onClick={handleShowParkSelector}
                        className='transition bg-gradient-to-r text-center from-lightblue to-lightblue-dark text-white px-8 py-3 rounded-full hover:shadow-md hover:shadow-sand mx-auto w-full max-w-[200px]'
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
