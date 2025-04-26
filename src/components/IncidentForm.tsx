import React, { useState } from 'react';
import { Incident } from '../types';
import { IoMdCreate } from "react-icons/io";

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id'>) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Incident['severity']>('Medium');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newIncident: Omit<Incident, 'id'> = {
        title,
        description,
        severity,
        reported_at: new Date().toISOString(),
      };
      
      onSubmit(newIncident);
      
      // Reset form
      setTitle('');
      setDescription('');
      setSeverity('Medium');
      setErrors({});
      
      // Collapse form after submission
      setIsExpanded(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 mb-8">
      <div className="border-b border-gray-100 p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Report New Incident</h2>
        <button
          onClick={toggleForm}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1 transition-all duration-200"
        >
         {isExpanded 
         ? 
         <>cancel </> 
         :
         <> <IoMdCreate /> Create report</>}
        </button>
      </div>
      
      {isExpanded && (
        <form onSubmit={handleSubmit} className="p-4 animate-fadeIn">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-2 border ${
                errors.title ? 'border-red-300' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
              placeholder="Enter incident title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.title}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={`w-full p-2 border ${
                errors.description ? 'border-red-300' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
              placeholder="Provide detailed information about the incident"
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.description}
              </p>
            )}
          </div>
          
          <div className="mb-6">
            <span className="block text-sm font-medium text-gray-700 mb-1">Severity</span>
            <div className="flex gap-4">
              {(['Low', 'Medium', 'High'] as const).map((level) => (
                <label
                  key={level}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="severity"
                    value={level}
                    checked={severity === level}
                    onChange={() => setSeverity(level)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 mr-2 rounded-full border ${
                      severity === level
                        ? level === 'Low'
                          ? 'bg-green-500 border-green-500'
                          : level === 'Medium'
                          ? 'bg-amber-500 border-amber-500'
                          : 'bg-red-500 border-red-500'
                        : 'bg-white'
                    } border-gray-300 flex items-center justify-center transition-all duration-200`}
                  >
                    {severity === level && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#7353BA] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
            >
              Submit Report
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default IncidentForm;