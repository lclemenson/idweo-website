import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  imagePlaceholder?: string;
}

interface TabShowcaseProps {
  tabs: Tab[];
}

export const TabShowcase = ({ tabs }: TabShowcaseProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-white text-accent border-b-2 border-accent'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-100'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-accent' : ''}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeContent && (
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">{activeContent.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{activeContent.description}</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border border-gray-300">
              {activeContent.imagePlaceholder ? (
                <img
                  src={activeContent.imagePlaceholder}
                  alt={activeContent.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center p-8">
                  <activeContent.icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Screenshot Coming Soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabShowcase;
