import React, { useMemo, useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const convertTimestampIntoDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

const App = () => {
  const [selectedPatient, setSelectedPatient] = useState(undefined);

  const patientRecords = useMemo(() => {
      return Object.values(medical_records.flatMap(record => record.data)
          .reduce((acc, record) => {
              if (!acc[record.userId]) {
                  acc[record.userId] = {
                      patientId: record.userId,
                      patientName: record.userName,
                      patientHeight: record.meta.height,
                      patientDob: record.userDob,
                      patientMedicalRecords: [],
                  };
              }

              acc[record.userId].patientMedicalRecords.push({
                  sl: record.id,
                  date: convertTimestampIntoDate(record.timestamp),
                  diagnosis: record.diagnosis.name,
                  weight: record.meta.weight,
                  doctor: record.doctor.name,
              });

              return acc;
          }, {}));
      }, []);

  const onSelectedPatientId = (selectedPatientId) => {
      const selectedPatient = patientRecords.find((record) => record.patientId === selectedPatientId);
      setSelectedPatient(selectedPatient);
  }

  const onNextPatientButtonClicked = () => {
      const indexOfCurrentPatient = patientRecords.findIndex(record => record.patientId === selectedPatient?.patientId);
      let indexOfNextPatient = 0;

      if (indexOfCurrentPatient !== -1) {
          indexOfNextPatient = indexOfCurrentPatient >= patientRecords.length -1 ? 0 : indexOfCurrentPatient + 1;
      }

      setSelectedPatient(patientRecords[indexOfNextPatient]);
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search patientRecords={patientRecords} onSelectedPatientId={onSelectedPatientId} />
        <Records selectedPatient={selectedPatient} onNextPatientButtonClick={onNextPatientButtonClicked} />
      </div>
    </div>
  );
};

export default App;
