import './badge.css';

interface BadgeProps {
    text: string;
}

const BadgeGlass = ({ text }: BadgeProps) => {
    return (
        <a className='btn btn-4'>
            <span>{text}</span>
        </a>
    );
};

export default BadgeGlass;
