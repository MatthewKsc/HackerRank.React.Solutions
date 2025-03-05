import React from "react";

function Records({ selectedPatient, onNextPatientButtonClick }) {

  if (selectedPatient) {
    return (
        <div className="patient-profile-container" id="profile-view">
          <div className="layout-row justify-content-center">
            <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
              <h4 id="patient-name">{ selectedPatient?.patientName }</h4>
              <h5 id="patient-dob">DOB: { selectedPatient?.patientDob }</h5>
              <h5 id="patient-height">Height: { selectedPatient?.patientHeight } cm</h5>
            </div>
            <button className="mt-10 mr-10" data-testid="next-btn" onClick={onNextPatientButtonClick}>
              Next
            </button>
          </div>

          <table id="patient-records-table">
            <thead id="table-header">
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Diagnosis</th>
              <th>Weight</th>
              <th>Doctor</th>
            </tr>
            </thead>
            <tbody id="table-body" data-testid="patient-table">
            {selectedPatient.patientMedicalRecords.map((record, index) => (
                <tr key={record.sl}>
                  <td>{ ++index }</td>
                  <td>{ record.date }</td>
                  <td>{ record.diagnosis }</td>
                  <td>{ record.weight }</td>
                  <td>{ record.doctor }</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
    );
  } else {
    return (<div></div>);
  }
}

export default Records;
