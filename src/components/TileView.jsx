import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentTile from './StudentTile';

const TileView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ));
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  return (
    <div className="tile-view">
      {students.map(student => (
        <StudentTile 
          key={student.id} 
          student={student} 
          updateStudent={updateStudent} 
          deleteStudent={deleteStudent} 
        />
      ))}
    </div>
  );
};

export default TileView;
