import OscarStatistics from '../dashboard/OscarStatistics';
import { OPTIONS } from '../dashboard/constants';
import useColorMode from '../../hooks/useColorMode';

const Dashboard = () => {
    const [colorMode] = useColorMode();

    return (
        <div
            className={`min-h-screen p-8 ${colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
                }`}
        >
            <OscarStatistics options={OPTIONS} theme={colorMode} />
        </div>
    );
};

export default Dashboard;
