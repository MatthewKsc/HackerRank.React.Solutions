import React, { useState } from "react";

function Search({ patientRecords, onSelectedPatientId }) {
  const [localPatientId, setLocalPatientId] = useState(undefined);

  const onShowPatientRecordsClick = () => {
      if (!!localPatientId) {
          onSelectedPatientId(parseInt(localPatientId));
      } else {
          alert("Please select a patient name");
      }
  };

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={(e) => setLocalPatientId(e.target.value)}>
          <option value="0" disabled>
            Select Patient
          </option>
          { patientRecords.map(record => (
              <option key={record.patientId} value={record.patientId}>{record.patientName}</option>
          ))}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={onShowPatientRecordsClick} disable={!localPatientId}>
        Show
      </button>
    </div>
  );
}

export default Search;
