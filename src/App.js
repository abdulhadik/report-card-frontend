
import React from "react";
import HomePage from './components/homePage/HomePage';
import StudentList from './components/studentList/StudentList'
import AddStudentForm from './components/addStudentForm/AddStudentForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/studentlist" exact element={<StudentList />} />
      <Route path="/addstudent" exact element={<AddStudentForm />} />
     
    </Routes>
  </Router>
 
  );
}

export default App;
