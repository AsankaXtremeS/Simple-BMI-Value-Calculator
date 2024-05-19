document.getElementById('greetingForm')
    .addEventListener('submit', function(event) { //getting the values
        event.preventDefault();
        let height = document.getElementById('height').value;
        let mass = document.getElementById('mass').value;
        let bmiText = document.getElementById('bmiText');
        
        let bmi = (mass/(height**2)).toFixed(2); // calculate BMI and format to 2 decimal places

        if (height === null || height === "" || mass === null || mass === "") {
            bmiText.innerHTML = "Please enter values :(";
            bmiText.style.color = "yellow";
        } else {
            bmiText.innerHTML = "BMI  =   " + bmi;
            bmiText.style.color = 'green';
            bmiMsg.innerHTML = "Healthy";
            bmiMsg.style.color = 'green';
        }
});
