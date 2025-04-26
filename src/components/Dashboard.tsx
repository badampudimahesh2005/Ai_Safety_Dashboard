import React, { useState } from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types';
import { initialIncidents } from '../data/initialData';
import FilterControls from './FilterControls';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import Header from './Header';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');


  // Function to handle adding a new incident
  const handleAddIncident = (newIncident: Omit<Incident, 'id'>) => {
    const id = Math.max(0, ...incidents.map((inc) => inc.id)) + 1;
    
    const incidentWithId: Incident = {
      ...newIncident,
      id,
    };
    
    setIncidents([incidentWithId, ...incidents]);
  };

  return (
    <>
   <Header />
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
     
      {/* <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold text-indigo-800 mb-2">Monitor AI Safety Incidents</h2>
        <p className="text-indigo-700">
          Track, report, and manage AI safety incidents across your organization. Use the dashboard to filter incidents
          by severity and monitor the latest reports.
        </p>
      </div> */}
      
      <IncidentForm onSubmit={handleAddIncident} />
      
      <FilterControls
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      <IncidentList
        incidents={incidents}
        severityFilter={severityFilter}
        sortOrder={sortOrder}
      />
    </div>
    </>
  );
};

export default Dashboard;