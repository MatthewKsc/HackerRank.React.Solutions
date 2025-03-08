import React, {useState} from "react";

function EmployeeValidationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [joiningDate, setJoiningDate] = useState("");

    const [nameError, setNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [employeeIdError, setEmployeeIdError] = useState(true);
    const [joinDateError, setJoinDateError] = useState(true);

    const isFormValid = () => {
        return !nameError && !emailError && !employeeIdError && !joinDateError;
    };

    const clearFormInputs = () => {
        setName("");
        setEmail("");
        setEmployeeId("");
        setJoiningDate("");
    };

    const resetErrorsState = () => {
        setNameError(true);
        setEmailError(true);
        setEmployeeIdError(true);
        setJoinDateError(true);
    };

    const validateName = name => {
        const isValid = name.length >= 4 && /^[a-zA-Z\s]+$/.test(name);
        setNameError(!isValid);
    };

    const validateEmail = email => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = regex.test(String(email).toLowerCase());
        setEmailError(!isValid);
    };

    const validateEmployeeId = employeeId => {
        const isValid = /^\d{6}$/.test(employeeId);
        setEmployeeIdError(!isValid);
    }

    const validateJoiningDate = date => {
        const today = new Date().toISOString().split("T")[0];
        const isValid = date && date <= today;
        setJoinDateError(!isValid);
    };

    const onNameChange = (event) => {
        const name = event.target.value;
        setName(name);
        validateName(name);
    };

    const onEmailChange = (event) => {
        const email = event.target.value;
        setEmail(email);
        validateEmail(email);
    }

    const onEmployeeIdChange = (event) => {
        const employeeId = event.target.value;
        setEmployeeId(employeeId);
        validateEmployeeId(employeeId);
    }

    const onJoinDateChange = (event) => {
        const date = event.target.value;
        setJoiningDate(date);
        validateJoiningDate(date);
    }

    const onEmployeeFormSubmit = () => {
        clearFormInputs();
        resetErrorsState();
    }

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={onNameChange}
        />
        {nameError && <p className="error mt-2">
          Name must be at least 4 characters long and only contain letters and spaces
        </p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name={email}
          placeholder="Email"
          onChange={onEmailChange}
        />
        {emailError && <p className="error mt-2">Email must be a valid email address</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={employeeId}
          placeholder="Employee ID"
          onChange={onEmployeeIdChange}
        />
        {employeeIdError &&  <p className="error mt-2">Employee ID must be exactly 6 digits</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={joiningDate}
          placeholder="Joining Date"
          onChange={onJoinDateChange}
        />

        {joinDateError && <p className="error mt-2">Joining Date cannot be in the future</p>}
      </div>
        <button data-testid="submit-btn" type="submit" disabled={!isFormValid()} onClick={onEmployeeFormSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
