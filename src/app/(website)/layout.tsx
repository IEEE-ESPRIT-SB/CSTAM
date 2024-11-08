import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';

export default function WebsiteLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <main className='flex flex-col md:gap-32 gap-20 py-20'>
                {children}
            </main>
            <Footer />
        </>
    );
}
