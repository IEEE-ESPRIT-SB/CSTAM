import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
type Props = {
    name: string;
    description: string;
    imageUrl: string;
};

export default function SpeakerCard({ imageUrl, name, description }: Props) {
    return (
        <Card className='max-w-[280px] max-h-[430px] 	'>
            <CardBody>
                <Image
                    alt='image'
                    className='image flex flex-col justify-end  self-center '
                    src={imageUrl}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`
                    }}
                />
            </CardBody>
            <CardFooter>
                <div
                    className='flex flex-col gap-1 bg-gradient-to-l w-full	 py-3 rounded-b-xl'
                    style={{
                        background:
                            'linear-gradient(to left, rgba(110, 0, 253, 0.6), rgba(49, 16, 4, 0.6))'
                    }}>
                    <h4 className='loading-text m-2 text-xl font-bold uppercase'>
                        {name}
                        <span className='dots'> </span>
                    </h4>
                    <p className='text-sm ml-3 font-medium'>{description}</p>
                </div>
            </CardFooter>
        </Card>
    );
}
