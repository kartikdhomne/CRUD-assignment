import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const StudentDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [student, setStudent] = useState(location.state?.student || null);

  useEffect(() => {
    if (!student) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => setStudent(response.data))
        .catch((error) =>
          console.error("Error fetching student details:", error)
        );
    }
  }, [id, student]);

  if (!student) return <p>Loading...</p>;

  return (
    <div className="student-detail-page">
      <h2>{student.name}</h2>
      <p>
        <strong>Email</strong>: {student.email}
      </p>
      <p>
        <strong>Phone</strong>: {student.phone}
      </p>
      <p>
        <strong>Website</strong>: {student.website}
      </p>
      <p>
        <strong>Company</strong>: {student.company?.name}
      </p>
      <button className="back-button" onClick={() => navigate(-1)}>Back to Tiles</button>
    </div>
  );
};

export default StudentDetailPage;
