type Props = {
    eventName: string;
    eventTime: string;
    number: string;
    color1: string;
    color2: string;
};

const ProgCard = ({ eventName, eventTime, number, color1, color2 }: Props) => {
    return (
        <div
            className='w-[345px] h-[300px] ease-in-out hover:bg-contain duration-300 px-4 py-2 flex flex-col justify-end bg-cover bg-center bg-no-repeat self-center rounded-2xl mb-5'
            style={{
                background: `linear-gradient(-45deg, ${color1} 0%, ${color2} 100%)`
            }}>
            <div className='mb-28 ml-4'>
                <h2 className='font-bold	 text-3xl'>{eventName}</h2>
                <p className='ml-1 text-sm mt-1'>{eventTime}</p>
            </div>
            <div className='ml-48 mb-3 text-8xl font-bold text-gray-300'>
                {number}
            </div>
        </div>
    );
};

export default ProgCard;
