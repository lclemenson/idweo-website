interface GradeBadgeProps {
  grade: 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D' | 'F';
  size?: 'sm' | 'md' | 'lg';
}

const gradeColors: Record<string, string> = {
  'A': 'bg-green-500 text-white',
  'A-': 'bg-green-400 text-white',
  'B+': 'bg-blue-500 text-white',
  'B': 'bg-blue-400 text-white',
  'B-': 'bg-blue-300 text-white',
  'C+': 'bg-yellow-500 text-white',
  'C': 'bg-yellow-400 text-gray-900',
  'C-': 'bg-yellow-300 text-gray-900',
  'D': 'bg-orange-500 text-white',
  'F': 'bg-red-500 text-white',
};

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-14 h-14 text-xl',
};

export const GradeBadge = ({ grade, size = 'md' }: GradeBadgeProps) => {
  return (
    <div
      className={`${gradeColors[grade]} ${sizeClasses[size]} rounded-lg flex items-center justify-center font-bold shadow-md`}
    >
      {grade}
    </div>
  );
};

export const GradeBadgeRow = () => {
  const grades: Array<'A' | 'B+' | 'B' | 'C' | 'D'> = ['A', 'B+', 'B', 'C', 'D'];
  return (
    <div className="flex items-center space-x-2">
      {grades.map((grade) => (
        <GradeBadge key={grade} grade={grade} size="sm" />
      ))}
    </div>
  );
};

export default GradeBadge;
