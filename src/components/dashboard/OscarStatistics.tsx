import Chart from 'react-apexcharts';
import { Award } from 'lucide-react';
import { OscarStatisticsProps } from './types';

const OscarStatistics = ({ options, theme }: OscarStatisticsProps) => {
  return (
    <div
      className={`rounded-xl p-6 mb-8 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Award className="mr-2" /> Oscar Statistics
      </h2>
      <Chart
        options={options.options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default OscarStatistics;
