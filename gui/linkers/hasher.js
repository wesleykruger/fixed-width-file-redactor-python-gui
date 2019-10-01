function redact_file(input_file_location, output_file_location, record_values, record_type_start_positions, redact_start_positions, redact_lengths, data_types) {
    const {PythonShell} = require('python-shell');
    const path = require('path')

    let options = {
        scriptPath: path.join(__dirname, '/../engine/'),
        args: [input_file_location, output_file_location, record_type_start_positions, record_values, redact_start_positions, redact_lengths, data_types]
    }

    let script = new PythonShell('file-redactor.py', options);

    script.on('message', function(message) {
        alert(message)
    })
}

function clone_row() {
    let p = document.getElementById('clone-row');
    let p_cloned = p.cloneNode(true);
    document.getElementById('form-holder').append(p_cloned);
}

function whats_here(){
    els = document.querySelectorAll('.recordIndicatorValue')
    recordIndicatorValues = []
    console.log([].map.call(els, el => el.value))
}