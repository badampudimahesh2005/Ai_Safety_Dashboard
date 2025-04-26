import React from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types';
import IncidentItem from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
  severityFilter: SeverityFilter;
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({
  incidents,
  severityFilter,
  sortOrder,
}) => {
  // Filter incidents by severity
  const filteredIncidents = incidents.filter((incident) => {
    if (severityFilter === 'All') return true;
    return incident.severity === severityFilter;
  });

  // Sort incidents by reported date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <h3 className="text-lg font-medium text-gray-800 mb-1">No incidents found</h3>
        <p className="text-gray-600">
          {severityFilter !== 'All'
            ? `No ${severityFilter} severity incidents found. Try changing your filter.`
            : 'There are no incidents to display.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;