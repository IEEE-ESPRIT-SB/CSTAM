interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <section className='header flex flex-col items-center justify-center md:h-[50svh] h-[30svh] w-full gap-5 bg-center bg-[linear-gradient(0deg,rgba(20,20,20,0.80)_0%,rgba(20,20,20,0.80)_100%),url("/assets/bg.webp")] bg-cover bg-no-repeat bg-lightgray-50'>
            <h1 className='text-6xl font-bold text-white'>{title}</h1>
        </section>
    );
};

export default Header;
