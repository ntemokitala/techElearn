function addHouseNumber() {
    const houseNumberInput = document.getElementById('houseNumber');
    const houseNumber = houseNumberInput.value;

    if (houseNumber.trim() !== '') {
        fetch('/houses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
