import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';

const navItems = [
    {
        name: 'Home',
        link: '/home'
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
    }
];

const Navbar = () => {
    return (
        <div className='fixed inline-flex items-center justify-between w-full xl:px-14 px-10 py-4 bg-background z-[999]'>
            <div className='inline-flex items-center gap-20'>
                <Image
                    src='/images/logo.svg'
                    alt='logo CSTAM'
                    width={150}
                    height={40}
                />
                <div className='items-center gap-10 xl:flex hidden'>
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className='text-foreground hover:text-white duration-200 font-medium'>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='xl:hidden block z-[999]'>
                <Drawer direction='right'>
                    <DrawerTrigger>
                        <MenuIcon size={35} />
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className='flex flex-col p-10 gap-20 '>
                            <Image
                                src='/images/logo.svg'
                                alt='logo CSTAM'
                                className='self-center'
                                width={200}
                                height={40}
                            />
                            <div className='flex flex-col gap-10 '>
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
                    </DrawerContent>
                </Drawer>
            </div>
            <Button variant='secondary' className='xl:block hidden' disabled>
                Registration Closed
            </Button>
        </div>
    );
};
export default Navbar;
