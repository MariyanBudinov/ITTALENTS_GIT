// 2.	Да се създаде функция, която изкарва стойностите на всички инпут-и в нови параграфи.

function paragraph() {
    var inputArr = document.getElementsByTagName("input");
    for (var index = 0; index < inputArr.length; index++) {
        if (inputArr[index].value != "") {
            var pElement = document.createElement("P");
            var textElement = document.createTextNode(inputArr[index].value);
            pElement.appendChild(textElement);
            document.getElementById("newP").appendChild(pElement);
            pElement.style.color = "#" + Math.round(Math.random() * 1000000);
            pElement.style.fontWeight = "bold";
            pElement.style.backgroundColor = "#" + Math.round(Math.random() * 1000000);
            pElement.style.display = "block"
        }
    }
}

// paragraph();