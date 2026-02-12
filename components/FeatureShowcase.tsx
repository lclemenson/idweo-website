import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureShowcaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  badge?: string;
  children?: ReactNode;
}

export const FeatureShowcase = ({
  icon: Icon,
  title,
  description,
  highlight = false,
  badge,
  children
}: FeatureShowcaseProps) => {
  return (
    <div className={`group bg-white border rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
      highlight ? 'border-accent border-2' : 'border-gray-200 hover:border-accent'
    }`}>
      {badge && (
        <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
        highlight
          ? 'bg-accent text-white'
          : 'bg-accent/10 group-hover:bg-accent'
      }`}>
        <Icon className={`w-7 h-7 ${highlight ? 'text-white' : 'text-accent group-hover:text-white'}`} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
      {children}
    </div>
  );
};

export default FeatureShowcase;
