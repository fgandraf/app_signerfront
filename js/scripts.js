document.getElementById('uploadButton').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Selecione um arquivo';
    document.getElementById('fileText').textContent = fileName;
});