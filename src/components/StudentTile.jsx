import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentTile = ({ student, updateStudent, deleteStudent }) => {
  const navigate = useNavigate();
  const [isFlagged, setIsFlagged] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: student.name, email: student.email });

  const handleViewDetails = () => {
    navigate(`/student/${student.id}`, { state: { student } });
  };

  const handleSaveEdit = () => {
    updateStudent({ ...student, ...editData });
    setIsEditing(false);
  };

  const handleFlag = () => {
    setIsFlagged(!isFlagged);
  };

  const handleDelete = () => {
    deleteStudent(student.id);
  };

  return (
    <div className={`student-tile ${isFlagged ? 'flagged' : ''}`}>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={editData.name} 
            onChange={(e) => setEditData({ ...editData, name: e.target.value })} 
          />
          <input 
            type="email" 
            value={editData.email} 
            onChange={(e) => setEditData({ ...editData, email: e.target.value })} 
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <h3 class="student-name">{student.name}</h3>
          <span class="student-email">{student.email}</span>
          <button class="details" onClick={handleViewDetails}>View Details</button>
          <button class="edit" onClick={() => setIsEditing(true)}>Edit</button>
          <button class="flag" onClick={handleFlag}>{isFlagged ? 'Unflag' : 'Flag'}</button>
          <button class="delete" onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default StudentTile;
