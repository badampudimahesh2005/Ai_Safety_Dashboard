import React, { useState } from 'react';
import { Incident } from '../types';
import SeverityBadge from './SeverityBadge';
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

interface IncidentItemProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentItemProps> = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md mb-4">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
          <div className="flex items-center gap-2">
            <SeverityBadge severity={incident.severity} />
            <div className="flex items-center text-xs text-gray-500">
                  <MdDateRange />
              {formatDate(incident.reported_at)}
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={toggleDetails}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1 transition-all duration-200"
          >
            {showDetails ? (
              <>
                Hide Details
                <FaChevronUp />
              </>
            ) : (
              <>
                View Details
                <FaAngleDown />
              </>
            )}
          </button>
        </div>
      </div>
      
      {showDetails && (
        <div className="px-4 pb-4 bg-gray-50 border-t border-gray-100 animate-fadeIn">
          <p className="py-3 text-gray-700 text-sm leading-relaxed">{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentCard;