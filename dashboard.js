document.getElementById('register-btn').addEventListener('click', function () {
    // Get the selected date and time
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;

    // Validate inputs
    if (!eventDate || !eventTime) {
        Swal.fire('Error', 'Please select both the event date and time.', 'error');
        return;
    }

    // Show confirmation dialog
    Swal.fire({
        title: 'Confirm Registration',
        text: `You are registering for an event on ${eventDate} at ${eventTime}. Are you sure?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, Register',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            // If user confirms, show success message
            Swal.fire('Success', 'You have successfully registered for the event!', 'success');
            console.log('Event Date:', eventDate);
            console.log('Event Time:', eventTime);
        }
    });
});