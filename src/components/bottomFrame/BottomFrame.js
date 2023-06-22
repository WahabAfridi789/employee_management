import React, { useState } from "react";
import "./bottomFrame.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const BottomFrame = ({ employees, deleteEmployee }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);

  const handleDelete = (employeeId) => {
    setEmployeeIdToDelete(employeeId);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteEmployee(employeeIdToDelete);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bottom__frame">
      <div className="bottomFrame__container">
        <div className="employeeData__container__header">
          <span>Current Employees</span>
        </div>
        <div className="employeeData__container">
          {employees.length === 0 ? (
            <div className="employeeData__container__body">
              <div className="employeeData__container__body__item">
                <span>No records found.</span>
              </div>
            </div>
          ) : (
            <div className="employeeData__container__body">
              {employees.map((employee) => (
                <div
                  className="employeeData__container__body__item"
                  key={employee.id}
                >
                  <div className="employee__details">
                    <span>{`${employee.firstName} ${employee.lastName}`}</span>
                    <p>{employee.email}</p>
                    <p>{employee.phone}</p>
                  </div>

                  <div
                    className="delete__icon"
                    onClick={() => handleDelete(employee.id)}
                  >
                    <AiOutlineCloseCircle />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation__modal">
          <div className="confirmation__modal__content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this employee?</p>
            <div className="confirmation__modal__buttons">
              <button className="btn" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="btn btn-confirm" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomFrame;
