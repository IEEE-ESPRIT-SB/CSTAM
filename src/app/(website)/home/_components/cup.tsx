// components/ImageWithHoverEffect.js

import Image from 'next/image';
import styles from './cup.module.css';

const ImageWithHoverEffect = () => {
    return (
        <div className={styles.imageContainer}>
            <Image
                src='/images/coupe.webp'
                alt='My Image'
                width={300} // Définissez la largeur de l'image
                height={300} // Définissez la hauteur de l'image
                className={styles.image}
            />
        </div>
    );
};

export default ImageWithHoverEffect;
