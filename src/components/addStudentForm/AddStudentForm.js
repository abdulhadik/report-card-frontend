import React, { useState } from 'react';
import axios from 'axios';
import './AddStudentForm.css'
import { Link } from 'react-router-dom';

const AddStudentForm = () => {
  const [studentName, setStudentName] = useState('');
  const [subjectName, setSubjectName] = useState(''); // State to hold subjectKey
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newStudent = {
        studentName,
        subjectName, // Include subjectKey in the newStudent object
        grade
      };

      await axios.post('https://report-card-backend-3.onrender.com/api/students', newStudent);
      alert('Student added successfully!');
      setStudentName('');
      setSubjectName('');
      setGrade('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div class="add-student-form">
    <h2>Add New Student</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Student Name:
            <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
            />
        </label>
        <label>
            Subject Name:
            <input
                type="text"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                required
            />
        </label>
        <label>
            Grade:
            <input
                type="number"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
            />
        </label>
        <button type="submit">Add Student</button>
        <div className='b1'><Link to="/studentlist">Students List</Link></div>
    </form>
</div>
  );
};


export default AddStudentForm;