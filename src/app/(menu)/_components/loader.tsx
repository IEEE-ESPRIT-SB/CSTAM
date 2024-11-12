import './loader.css';

export default function Loader() {
    return (
        <div className='absolute md:block hidden bottom-0 right-0 p-4'>
            <div className='spinny-loader'>
                <div className='spinny-circle'></div>
            </div>
        </div>
    );
}
