function calculateBMI(){
    var height = document.getElementById("height-button").value;
    var weight = document.getElementById("weight-button").value;

    var bmi = (weight / Math.pow(height / 100, 2));

    if(bmi < 18.5){
        document.getElementById("bmi-result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " You are Underweight!";
    } else if(bmi >= 18.5 && bmi < 25){
        document.getElementById("bmi-result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " Your weight is Normal!";
    } else if(bmi >= 25 && bmi < 30){
        document.getElementById("bmi-result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " You are Overweight!";
    } else if(bmi > 30){
        document.getElementById("bmi-result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " You are Obese!";
    } else{
        document.getElementById("bmi-result").innerHTML = "Enter the weight and height!";
    }
}