import React, { useState, useEffect } from 'react';
import { fetchStudents } from './api/studentApi';
import DashboardHeader from './components/DashboardHeader';
import FilterControls from './components/FilterControls';
import StudentList from './components/StudentList';
import './index.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // States as requested
  const [filterType, setFilterType] = useState('All'); // 'All', 'Present', 'Absent'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  
  // Bonus state
  const [sortByAttendance, setSortByAttendance] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const mockData = await fetchStudents();
        setStudents(mockData);
      } catch (error) {
        // error handling inside function
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Apply filters and sorting
  let filteredStudents = students.filter(student => {
    if (filterType !== 'All' && student.todayStatus !== filterType) {
      return false;
    }
    if (showLowAttendance && student.attendancePercentage >= 75) {
      return false;
    }
    return true;
  });

  if (sortByAttendance) {
    filteredStudents = [...filteredStudents].sort((a, b) => b.attendancePercentage - a.attendancePercentage);
  }

  return (
    <div className="dashboard-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <main className="dashboard-main">
        <DashboardHeader />

        <FilterControls 
          filterType={filterType}
          setFilterType={setFilterType}
          showLowAttendance={showLowAttendance}
          setShowLowAttendance={setShowLowAttendance}
          sortByAttendance={sortByAttendance}
          setSortByAttendance={setSortByAttendance}
        />

        <section className="student-list-container">
          <StudentList 
            loading={loading}
            students={filteredStudents}
            selectedStudent={selectedStudent}
            onSelectStudent={setSelectedStudent}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
