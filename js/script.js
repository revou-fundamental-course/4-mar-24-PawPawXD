function calculate() {
    try {
        let weightInput = document .getElementById('weight-input').value;
        console.log(weightInput);

        if (weightInput.value == '') {
            alert('Harap isi berat badan Anda')
        } else {
            console.log('Ada Isi')
        }
    } catch (error) {
        console.log(error);
    }
}