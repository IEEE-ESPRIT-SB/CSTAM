/* import './Stats.css';
 */
interface Stat {
    label: string;
    value: string;
}

interface StatsProps {
    stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
    return (
        <div className='stats-content inline-flex justify-between flex-wrap items-center w-full'>
            {stats.map((stat, index) => (
                <div
                    className='stats-item flex flex-col items-center'
                    key={index}>
                    <h1 className='text-6xl font-bold'>{stat.value}</h1>
                    <p className='text-primary text-lg'>{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Stats;
