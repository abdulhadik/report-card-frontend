import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'
import { Link } from 'react-router-dom';
const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://report-card-backend-3.onrender.com/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const studentName = student.studentName.toLowerCase();
    const filterPass = student.grade >= 75 ? 'pass' : 'fail';

    return (
      studentName.includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || filter === filterPass)
    );
  });

  return (
    <div>
      <h2>Student Grade</h2>
      <input
        type="text"
        placeholder="Search by student name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All Students</option>
        <option value="pass">Passing Students</option>
        <option value="fail">Failing Students</option>
      </select>
      <div><Link to="/addstudent"> Add Student</Link></div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject Name</th>
            <th>Grade</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.studentKey}>
              <td>{student.studentName}</td>
              <td>{student.subjectName}</td>
              <td>{student.grade}</td>
              <td>{student.grade >= 75 ? 'PASS' : 'FAIL'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
