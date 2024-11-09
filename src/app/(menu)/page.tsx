'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './_components/button.css';
import Loader from './_components/loader';
import './_components/logo.css';
export default function Home() {
    const router = useRouter();
    return (
        <>
            {/* Conteneur de la vidéo en arrière-plan */}
            <main className='relative w-full h-screen main-background'>
                <Loader />
                <div className='main md:ml-20 md:w-1/4 relative flex flex-col items-center justify-center h-full z-10'>
                    <Image
                        className='mb-14'
                        width={800}
                        height={800}
                        alt='logo CSTAM'
                        src='/images/colored_version.webp'></Image>
                    <div className='relative flex justify-center md:w-1/2 w-full'>
                        <div className='flex flex-col space-y-6'>
                            <Button
                                onClick={() => router.push('/home')}
                                className='cybr-btn'>
                                New Game<span aria-hidden>_</span>
                                <span aria-hidden className='cybr-btn__glitch'>
                                    16 & 17 November
                                </span>
                                <span aria-hidden className='cybr-btn__tag'>
                                    R25
                                </span>
                            </Button>
                            <Button className='cybr-btn'>
                                Load Game<span aria-hidden>_</span>
                                <span aria-hidden className='cybr-btn__glitch'>
                                    Load Game_
                                </span>
                                <span aria-hidden className='cybr-btn__tag'>
                                    R25
                                </span>
                            </Button>

                            <Button
                                onClick={() => router.push('/about-us')}
                                className='cybr-btn'>
                                Tutorial<span aria-hidden>_</span>
                                <span aria-hidden className='cybr-btn__glitch'>
                                    Tutorial_
                                </span>
                                <span aria-hidden className='cybr-btn__tag'>
                                    R25
                                </span>
                            </Button>
                            <Button
                                onClick={() => router.push('/home#Credits')}
                                className='cybr-btn'>
                                Credits<span aria-hidden>_</span>
                                <span aria-hidden className='cybr-btn__glitch'>
                                    Credits_
                                </span>
                                <span aria-hidden className='cybr-btn__tag'>
                                    R25
                                </span>
                            </Button>
                            <Button
                                onClick={() =>
                                    router.push('https://google.com')
                                }
                                className='cybr-btn'>
                                Quit Game<span aria-hidden>_</span>
                                <span aria-hidden className='cybr-btn__glitch'>
                                    Quit Game_
                                </span>
                                <span aria-hidden className='cybr-btn__tag'>
                                    R25
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
