import React from 'react';

const StudentCard = ({ student, isSelected, onClick }) => {
  const isLow = student.attendancePercentage < 75;

  return (
    <div 
      className={`student-card glass-panel ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(student)}
    >
      <div className="card-header">
        <div className="student-info">
          <div className="avatar">{student.name.charAt(0)}</div>
          <div>
            <h3 className="student-name">{student.name}</h3>
            <span className="student-username">@{student.username}</span>
          </div>
        </div>
        <span className={`status-badge ${student.todayStatus.toLowerCase()}`}>
          {student.todayStatus}
        </span>
      </div>

      <div className="card-body">
        <div className="attendance-indicator">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className={`circle ${isLow ? 'low' : 'good'}`}
              strokeDasharray={`${student.attendancePercentage}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">{student.attendancePercentage}%</text>
          </svg>
        </div>
        <div className="attendance-info">
          <p className={`attendance-text ${isLow ? 'text-danger' : 'text-success'}`}>
            {isLow ? 'Critical Attention Needed' : 'Attendance on track'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
