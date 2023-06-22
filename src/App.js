// App.jsx
import React, { useState } from "react";
import Header from "./components/header/Header";
import AddForm from "./components/addForm/AddForm";
import BottomFrame from "./components/bottomFrame/BottomFrame";


const App = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee };
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <Header />
      <AddForm addEmployee={addEmployee} />
      <BottomFrame employees={employees} deleteEmployee={deleteEmployee} />
     
    </div>
  );
};

export default App;
