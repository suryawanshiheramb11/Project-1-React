export const fetchStudents = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    return data.map((student) => {
      const attendance = Math.floor(Math.random() * 101);
      const todayStatus = Math.random() > 0.3 ? 'Present' : 'Absent';
      
      return {
        ...student,
        attendancePercentage: attendance,
        todayStatus
      };
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};
