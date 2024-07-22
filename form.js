$(document).ready(function() {
    $('#submitForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'message': $('#message').val()
        };

        // Submit form via AJAX
        $.ajax({
            type: 'POST',
            url: 'submit.php', // Replace with your backend endpoint
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            // On success, show success message
            $('#responseMessage').html('<div class="alert alert-success">' + data.message + '</div>');
            
            // Clear form inputs
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // On failure, show error message
            $('#responseMessage').html('<div class="alert alert-danger">Oops! An error occurred.</div>');
        });

    });
});
