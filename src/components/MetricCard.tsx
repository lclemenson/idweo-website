import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'accent' | 'blue' | 'green' | 'yellow' | 'red';
}

const colorClasses = {
  accent: 'bg-accent/10 text-accent',
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  red: 'bg-red-100 text-red-600',
};

export const MetricCard = ({
  icon: Icon,
  label,
  value,
  subtext,
  color = 'accent',
}: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
      <div className="flex items-center space-x-3">
        {Icon && (
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <p className="text-xl font-bold text-primary">{value}</p>
          {subtext && <p className="text-xs text-gray-400">{subtext}</p>}
        </div>
      </div>
    </div>
  );
};

interface AIUsageBarProps {
  percentage: number;
  label?: string;
}

export const AIUsageBar = ({ percentage, label = 'AI Usage' }: AIUsageBarProps) => {
  const getColor = (pct: number) => {
    if (pct < 30) return 'bg-green-500';
    if (pct < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="font-bold text-primary">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${getColor(percentage)}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default MetricCard;
