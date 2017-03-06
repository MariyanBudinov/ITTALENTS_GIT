// 2.	Да се създаде функция, която изкарва стойностите на всички инпут-и в нови параграфи.
// !!!!!!!!!!!!!!!!!!!!!!!!//
var paragraph = function() {
        console.log('1');

        var textPurvi = document.getElementsByName("purvi").value;
        console.log(textPurvi);
        var textVtori = document.getElementsByName("vtori").value;
        console.log(textVtori);

        var textPurviP = document.createElement('p');
        console.log('4');
        document.body.appendChild(textPurviP);
        console.log('5');
        textPurviP.innerHTML = textPurvi;
        console.log('6');

        var textVtoriP = document.createElement('p');
        console.log('7');
        document.body.appendChild(textVtoriP);
        console.log('8');
        textVtoriP.innerHTML = textVtori;
        console.log('9');

    }
    // paragraph();