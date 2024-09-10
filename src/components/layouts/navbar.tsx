import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About us',
        link: '/about-us'
    },
    {
        name: 'Agenda',
        link: '/agenda'
    },
    {
        name: 'Sponsors',
        link: '/sponsors'
    },
    {
        name: 'Contact us',
        link: '/contact-us'
    }
];

const Navbar = () => {
    return (
        <div className='fixed inline-flex items-center justify-between w-full px-20 py-10'>
            <div className='inline-flex items-center gap-20'>
                <Image
                    src='/images/logo.svg'
                    alt='logo CSTAM'
                    width={200}
                    height={40}
                />
                <div className='flex items-center gap-10'>
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className='text-foreground hover:text-white duration-200 font-medium text-xl'>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <Button variant='secondary' size='lg'>
                Register Now
            </Button>
        </div>
    );
};
export default Navbar;
