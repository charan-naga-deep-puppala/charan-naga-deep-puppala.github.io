function updateOptions(selectElement) {
    // Get the selected value
    var selectedValue = selectElement.value;

    // Hide the current label and select with slide-down effect
    selectElement.classList.add('hidden');
    selectElement.previousElementSibling.classList.add('hidden');

    // Find the next select element
    var nextSelect = selectElement.nextElementSibling;

    // Show the next label and select with slide-down effect
    if (nextSelect) {
        nextSelect.classList.add('visible');
        nextSelect.previousElementSibling.classList.add('visible');

        // Populate options based on selection from option 1
        populateOptions(nextSelect, selectedValue);
    }

    // Disable the selected option in the subsequent selects
    var allSelects = document.querySelectorAll('select');
    allSelects.forEach(function (select) {
        var optionToRemove = select.querySelector('option[value="' + selectedValue + '"]');
        if (optionToRemove) {
            optionToRemove.remove();
        }
    });
}

function populateOptions(selectElement, selectedValue)
