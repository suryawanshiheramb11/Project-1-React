import React from 'react';

const FilterControls = ({
  filterType,
  setFilterType,
  showLowAttendance,
  setShowLowAttendance,
  sortByAttendance,
  setSortByAttendance
}) => {
  return (
    <section className="controls-panel glass-panel">
      <div className="control-group filters">
        <h3>Status Filter</h3>
        <div className="chip-container">
          {['All', 'Present', 'Absent'].map(type => (
            <button 
              key={type}
              className={`chip ${filterType === type ? 'active' : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      <div className="control-group toggles">
        <h3>Quick Actions</h3>
        <label className="toggle-label">
          <div className={`custom-toggle ${showLowAttendance ? 'active' : ''}`}>
            <div className="toggle-thumb" />
          </div>
          <input 
            type="checkbox" 
            checked={showLowAttendance} 
            onChange={() => setShowLowAttendance(!showLowAttendance)} 
            hidden
          />
          Show &lt;75% Attendance
        </label>

        <label className="toggle-label">
          <div className={`custom-toggle ${sortByAttendance ? 'active' : ''}`}>
            <div className="toggle-thumb" />
          </div>
          <input 
            type="checkbox" 
            checked={sortByAttendance} 
            onChange={() => setSortByAttendance(!sortByAttendance)} 
            hidden
          />
          Sort by Attendance %
        </label>
      </div>
    </section>
  );
};

export default FilterControls;
