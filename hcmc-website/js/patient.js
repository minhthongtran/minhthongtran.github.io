window.onload = (event) => {
  document.getElementById('formSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
  });
  document.getElementById('btnRegisterPatient').addEventListener('click', submitPatient);
  document.getElementById('chkShowOutPatients').addEventListener('click', function (e) {
    var dataRows = document.getElementsByClassName('data-row');
    var elderPatientChecked = document.getElementById('chkElderlyPatients').checked;
    displayTable(dataRows, e.target.checked, elderPatientChecked);
  });
  document.getElementById('chkElderlyPatients').addEventListener('click', function (e) {
    var dataRows = document.getElementsByClassName('data-row');
    var outPatientChecked = document.getElementById('chkShowOutPatients').checked;
    displayTable(dataRows, outPatientChecked, e.target.checked);
  });
};

function displayTable(dataRows, checkedOutpatient, checkedElder) {
  let currentYear = new Date().getFullYear();
  for (let data of dataRows) {
    let childDataOutpatient = data.childNodes[6].innerHTML;
    let childDataDob = data.childNodes[4].innerHTML;
    let patientDobYear = childDataDob.split('-')[0];
    if (
      checkedElder &&
      checkedOutpatient &&
      (childDataOutpatient === 'No' || currentYear - patientDobYear < 65) // both elder and outpatient
    ) {
      data.setAttribute('hidden', true);
    } else if (!checkedElder && checkedOutpatient) {
      if (childDataOutpatient == 'No') {
        data.setAttribute('hidden', true);
      } else {
        data.removeAttribute('hidden');
      }
    } else if (checkedElder && !checkedOutpatient) {
      if (currentYear - patientDobYear < 65) {
        data.setAttribute('hidden', true);
      } else {
        data.removeAttribute('hidden');
      }
    } else {
      data.removeAttribute('hidden');
    }
  }
}
function submitPatient() {
  var patientId = document.getElementById('patientIdNumber').value;
  var firstName = document.getElementById('firstName').value;
  var middleInitials = document.getElementById('middleInitials').value;
  var lastName = document.getElementById('lastName').value;
  var dateOfBirth = document.getElementById('dateOfBirth').value;
  var ddlDepartment = document.getElementById('ddlDepartment').value;
  var radioIsOutPatientYes = document.getElementById('radioIsOutPatientYes').checked;
  var radioIsOutPatientNo = document.getElementById('radioIsOutPatientNo').checked;
  var tbodyPatientsList = document.getElementById('tbodyPatientsList');

  addNewPatient(
    tbodyPatientsList,
    patientId,
    firstName,
    middleInitials,
    lastName,
    dateOfBirth,
    ddlDepartment,
    radioIsOutPatientYes ? 'Yes' : 'No'
  );
}

function addNewPatient(
  tbodyPatientsList,
  patientId,
  firstName,
  middleInitials,
  lastName,
  dateOfBirth,
  ddlDepartment,
  radioIsOutPatient
) {
  var newRow = document.createElement('tr');
  newRow.setAttribute('class', 'data-row');
  var patientIdCol = document.createElement('td');
  var firstNameCol = document.createElement('td');
  var middleInitialsCol = document.createElement('td');
  var lastNameCol = document.createElement('td');
  var dateOfBirthCol = document.createElement('td');
  var ddlDepartmentCol = document.createElement('td');
  var radioIsOutPatientCol = document.createElement('td');
  patientIdCol.innerHTML = patientId;
  firstNameCol.innerHTML = firstName;
  middleInitialsCol.innerHTML = middleInitials;
  lastNameCol.innerHTML = lastName;
  dateOfBirthCol.innerHTML = dateOfBirth;
  ddlDepartmentCol.innerHTML = ddlDepartment;
  radioIsOutPatientCol.innerHTML = radioIsOutPatient;
  newRow.append(patientIdCol);
  newRow.append(firstNameCol);
  newRow.append(middleInitialsCol);
  newRow.append(lastNameCol);
  newRow.append(dateOfBirthCol);
  newRow.append(ddlDepartmentCol);
  newRow.append(radioIsOutPatientCol);
  tbodyPatientsList.append(newRow);
}
