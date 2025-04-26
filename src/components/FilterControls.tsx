import React from 'react';
import { SeverityFilter, SortOrder } from '../types';
import { CiFilter } from "react-icons/ci";
import { FaSortAmountUp ,FaSortAmountDown} from "react-icons/fa";

interface FilterControlsProps {
  severityFilter: SeverityFilter;
  setSeverityFilter: (filter: SeverityFilter) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  severityFilter,
  setSeverityFilter,
  sortOrder,
  setSortOrder,
}) => {
  const severityOptions: SeverityFilter[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-6">
      <div className="flex items-center gap-2">
      <CiFilter size={20} className='text-[#7353BA] font-bold' />
        <h3 className="text-sm font-semibold text-gray-700">Filter incidents:</h3>
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as SeverityFilter)}
          className="px-2 py-1 text-sm rounded-md bg-[#7353BA] text-white hover:bg-gray-200 hover:text-gray-500 transition-all duration-200 focus:outline-none "
        >
          {severityOptions.map((severity) => (
            <option key={severity} value={severity}> 
              {severity}
            </option>
          ))}

          </select>
      </div>
      
      <div className="flex items-center gap-2">
        {sortOrder === 'newest' ? (
        <FaSortAmountDown size={18} className='text-[#7353BA]' />
        ) : (
          <FaSortAmountUp size={18} className='text-[#7353BA]' />
        )}
        <h3 className="text-sm font-semibold text-gray-700">Sort by date:</h3>
        <button
          onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
          className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200"
        >
          {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
        </button>
      </div>
    </div>
  );
};

export default FilterControls;