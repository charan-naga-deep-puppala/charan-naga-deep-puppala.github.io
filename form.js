function updateOptions(selectElement) {
    var selectedValue = selectElement.value;

    // Disable the selected option in the subsequent selects
    var allSelects = document.querySelectorAll('select');
    allSelects.forEach(function (select) {
        var options = select.querySelectorAll('option');
        options.forEach(function (option) {
            option.disabled = false;
            if (option.value === selectedValue) {
                option.disabled = true;
            }
        });
    });

    // Hide the current label and select with slide-down effect
    selectElement.classList.add('hidden');
    selectElement.previousElementSibling.classList.add('hidden');

    // Find the next select element
    var nextSelect = selectElement.nextElementSibling;

    // Show the next label and select with slide-down effect
    if (nextSelect) {
        nextSelect.classList.remove('hidden');
        nextSelect.previousElementSibling.classList.remove('hidden');

        // Populate options based on selection from option 1
        populateOptions(nextSelect, selectedValue);
    }
}

function populateOptions(selectElement, selectedValue) {
    // Remove existing options
    selectElement.innerHTML = '<option value="" disabled selected>Select Subject</option>';

    // Add new options based on selectedValue
    for (var i = 1; i <= 10; i++) {
        var subject = 'subject' + i;
        if (subject !== selectedValue) {
            selectElement.innerHTML += '<option value="' + subject + '">' + 'Subject ' + i + '</option>';
        }
    }
}
