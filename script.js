function OnsubmitFrom() {
    var fromData = ReadFormData();
    newInsertRecord(fromData);



}

function ReadFormData() {
    var formData = {};
    formData["First Name"] = document.getElementById("firstname").value;
    formData["Last Name"] = document.getElementById("lastname").value;
    formData["Mother Name"] = document.getElementById("mothername").value;
    formData["Father Name"] = document.getElementById("fathername").value;
    formData["Address"] = document.getElementById("address").value;
    formData["DOB"] = document.getElementById("dob").value;
    formData["Pincode"] = document.getElementById("pincode").value;
    formData["Course"] = document.getElementById("course").value;
    formData["Emailid"] = document.getElementById("emailid").value;

    return fromData();


}

function newInsertRecord(data) {
    var table = document.getElementById(formlist).getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mothername;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fathername;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.address;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.pincode;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.dob;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.course;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.emailid;
    cell1 = newRow.insertCell(9);
    cell1.innerHTML = '<a>Edit</a> <a>Delete</a>'; //"" '' ''


}