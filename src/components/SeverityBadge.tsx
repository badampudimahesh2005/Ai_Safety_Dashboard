import React from 'react';
import { Incident } from '../types';

interface SeverityBadgeProps {
  severity: Incident['severity'];
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getBadgeStyles = () => {
    switch (severity) {
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${getBadgeStyles()} inline-flex items-center`}>
      {severity}
    </span>
  );
};

export default SeverityBadge;