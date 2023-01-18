
    var activityLevel;
    function clean(p){
        p.value = "";
    }
    function clearff() {
    
        let p = document.getElementById("input-f3").value;
        let q = document.getElementById("input-f4").value;
        let r = document.getElementById("input-f5").value;
    
        document.getElementById("input-f3").value = 0;
        document.getElementById("input-f4").value = 0;
        document.getElementById("input-f5").value = 0;
        console.log("here clr");
        if (document.getElementById("radio1").checked) {
            var gender = "male";
        }
        else {
            var gender = "female";
        }
    
        var result = document.getElementById("result-div");
        if ($("#result-div").find("div").length !== 0) {
    
            while (result.firstChild) {
                result.removeChild(result.lastChild);
            }
    
        }
    
    }
    
    function getSelectedValue() {
        var select = document.getElementById("mySelect");
        activityLevel = select.value;
        console.log(activityLevel);
    }
    
    [document.getElementById("cal")].forEach(function (element) {
    
        element.addEventListener('click', function () {
            var age = document.getElementById("input-f3").value;
            var height = document.getElementById("input-f4").value;
            var weight = document.getElementById("input-f5").value;
    
            if (document.getElementById("radio1").checked) {
                var gender = "male";
            }
            else {
                var gender = "female";
            }
    
    
    
    
            calculate(age, height, weight, gender);
    
        })
    })
    
    function calculate(age, height, weight, gender) {
        console.log(gender, activityLevel, height, weight, age);
        let BMR;
        if (gender == "male") {
            BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else if (gender == "female") {
            BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        } if (activityLevel == "Basal Metabollic Rate (BMR)") {
            BMR *= 1;
        }
        else if (activityLevel == "Little to No exercise") {
            BMR *= 1.2;
        } else if (activityLevel == "Exercise 1/3 times/week") {
            BMR *= 1.375;
        } else if (activityLevel == "Exercise 4/5 times/week") {
            BMR *= 1.465;
        } else if (activityLevel == "Daily exercise / intense exercise 3/4 times/week") {
            BMR *= 1.55;
        } else if (activityLevel == "Intense exercise 6/7 times/week") {
            BMR *= 1.725;
        } else if (activityLevel == "Very intense exercise daily, or physical job") {
            BMR *= 1.9;
        }
    
        BMR = Math.round(BMR);
        console.log(BMR);
    
    
        dynanmic_div(BMR);
    
    }
    
    function dynanmic_div(BMR) {
    
        var result = document.getElementById("result-div");
    
        var newDiv = document.createElement("div");
        var childdiv = document.createElement("div");
        var newlabel = document.createElement("label");
        var newlabel1 = document.createElement("label");
        var newlabel2 = document.createElement("label");
        var line = document.createElement("div");
    
        line.className = "vertical-line";
    
    
    
        childdiv.classList.add("sleek-box");
        newlabel.setAttribute("class", "result-label");
        newlabel1.setAttribute("class", "result-label");
        newlabel2.setAttribute("class", "result-label");
        newDiv.classList.add("new-div");
    
        if (activityLevel == "Basal Metabollic Rate (BMR)") {
            newlabel.innerHTML = "Rata Metabolica Bazala(RMB): " + BMR.toLocaleString('en-US') + " calorii/zi";
        } else {
            newlabel.innerHTML = "Mentine greutatea: " + BMR.toLocaleString('en-US') + " calorii/zi";
        }
    
        newlabel1.innerHTML = "Pierdere în greutate (~ 0.5kg/săpt) : " + (BMR - 500).toLocaleString('en-US') + " calorii/zi";
        newlabel2.innerHTML = "Creștere în greutate (~ 0.5 kg/săpt) : " + (BMR + 500).toLocaleString('en-US') + " calorii/zi";
    
        if ($("#result-div").find("div").length !== 0) {
    
            while (result.firstChild) {
                result.removeChild(result.lastChild);
            }
    
        }
        childdiv.appendChild(line);
    
        childdiv.appendChild(newlabel);
        childdiv.appendChild(newlabel1);
        childdiv.appendChild(newlabel2);
        newDiv.appendChild(childdiv);
        result.appendChild(newDiv);
    
    }
    