//your JS code here. If required.
function showAlert() {
            // Get the form values
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var phoneNumber = document.getElementById('phoneNumber').value;
            var emailId = document.getElementById('emailId').value;
            
            // Construct the alert message
            var message = 'First Name: ' + firstName + ' ' +
                          'Last Name: ' + lastName + ' ' +
                          'Phone Number: ' + phoneNumber + ' ' +
                          'Email ID: ' + emailId;

            // Show the alert
            alert(message);

            // Prevent form submission
            return false;
        }