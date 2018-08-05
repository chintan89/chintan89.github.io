function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//javascript for BMR form
function Calculate() {


    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseFloat(document.getElementById("age").value);
    var activitylevel = document.getElementById("activitylevel").value;
    var MaintenanceCalories = 0;


    if (gender == "male")
        //English-BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
        //Metric-BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )
    {
        var val1 = 6.23 * weight;
        var val2 = 12.7 * height;
        var val3 = 6.8 * age;
        var result = 66 + val1 + val2 - val3;
        var val4 = activitylevel;
    }

    else if (gender == "female")
        //English-Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years)
        //Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
    {
        var val1 = 4.35 * weight;
        var val2 = 4.7 * height;
        var val3 = 4.7 * age;
        var result = 655 + val1 + val2 - val3;
        var val4 = activitylevel;
    }


    switch (val4) {
        case "l":
            MaintenanceCalories = result * 1.2;
            break;

        case "lm":
            MaintenanceCalories = result * 1.375;
            break;

        case "m":
            MaintenanceCalories = result * 1.55;
            break;

        case "mh":
            MaintenanceCalories = result * 1.725;
            break;

        case "h":
            MaintenanceCalories = result * 1.9;
            break;

        default: "m";
    }

    document.getElementById("IMBMR").innerHTML = "Your BMR : " + result;
    document.getElementById("im").innerHTML = "You need " + MaintenanceCalories.toFixed(2) + " calories/day";
}

//javascriipt for Matric
function Matrics() {

    var gender = document.getElementById("selGender").value;
    var weight = parseFloat(document.getElementById("txtkg").value);
    var height = parseFloat(document.getElementById("txtCm").value);
    var age = parseFloat(document.getElementById("txtAge").value);
    var activitylevel = document.getElementById("selActivityLevel").value;
    var MaintenanceCalories = 0;


    if (gender == "male")
        //English-BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
        //Metric-BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )
    {
        var val1 = 13.7 * weight;
        var val2 = 5 * height;
        var val3 = 6.8 * age;
        var result = 66 + val1 + val2 - val3;
        var val4 = activitylevel;
    }

    else if (gender == "female")
        //English-Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years)
        //Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
    {
        var val1 = 9.6 * weight;
        var val2 = 1.8 * height;
        var val3 = 4.7 * age;
        var result = 655 + val1 + val2 - val3;
        var val4 = activitylevel;
    }


    switch (val4) {
        case "l":
            MaintenanceCalories = result * 1.2;
            break;

        case "lm":
            MaintenanceCalories = result * 1.375;
            break;

        case "m":
            MaintenanceCalories = result * 1.55;
            break;

        case "mh":
            MaintenanceCalories = result * 1.725;
            break;

        case "h":
            MaintenanceCalories = result * 1.9;
            break;

        default: "m";
    }


    document.getElementById("BMR").innerHTML = "Your BMR : " + result;
    document.getElementById("mc").innerHTML = "You need " + MaintenanceCalories.toFixed(2) + " calories/day";
}
