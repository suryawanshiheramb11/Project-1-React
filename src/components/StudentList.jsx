import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ loading, students, selectedStudent, onSelectStudent }) => {
  if (loading) {
    return (
      <div className="loading-state glass-panel">
        <div className="spinner"></div>
        <p>Fetching student data...</p>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="empty-state glass-panel">
        <div className="empty-icon">📭</div>
        <h3>No students found</h3>
        <p>Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          isSelected={selectedStudent?.id === student.id}
          onClick={onSelectStudent}
        />
      ))}
    </div>
  );
};

export default StudentList;
