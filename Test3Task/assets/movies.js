function sendRequest(url, method, parameters) {
    return new Promise(function(success, fail) {
        var request = new XMLHttpRequest();

        request.open(method, url, true);
        request.send(parameters || null);

        request.addEventListener('load', function() {
            if (request.status >= 200 && request.status <= 299) {
                success(JSON.parse(this.responseText));
            } else {
                fail(new Error("Request failed: " + request.statusText));
            }
        }, false);

        request.addEventListener('error', function() {
            fail(new Error("Request failed: " + request.statusText));
        }, false);
    });
}
var url = 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=c7342b04f1cd416684d43de5c48c9431';
sendRequest(url, 'get').then(function(request) {

    for (var index = 0; index < request.articles.length; index++) {

        var firstNew = document.createElement("tr");
        firstNew.id = index;
        var title = document.createElement("td");
        var publishedAt = document.createElement("td");
        var description = document.createElement("td");
        var author = document.createElement("td");

        firstNew.appendChild(title);
        firstNew.appendChild(publishedAt);
        firstNew.appendChild(description);
        firstNew.appendChild(author);

        title.innerHTML = request.articles[index].title;
        publishedAt.innerHTML = request.articles[index].publishedAt;
        description.innerHTML = request.articles[index].description;
        author.innerHTML = request.articles[index].author;

        var wached = document.createElement("td");
        var loveIt = document.createElement("td");

        var inputW = document.createElement("input");
        inputW.type = "checkbox";
        inputW.name = "";
        inputW.value = "";
        inputW.className = "wached";
        var inputL = document.createElement("input");
        inputL.type = "checkbox";
        inputL.name = "";
        inputL.value = "";
        inputL.className = "loveIt";

        wached.appendChild(inputW);
        loveIt.appendChild(inputL);
        firstNew.appendChild(wached);
        firstNew.appendChild(loveIt);
        document.getElementsByTagName('tbody')[0].appendChild(firstNew);

    }

}, function(error) {
    console.log(error);

}).then(function() {
    ////////////////////
    //WACHED NEWS BUTTON
    ////////////////////
    if (document.readyState == 'complete') {

        var inputCBox = document.getElementsByClassName('wached');

        for (var iCheckbox = 0; iCheckbox < inputCBox.length; iCheckbox++) {
            inputCBox[iCheckbox].addEventListener('click', function() {
                this.id = "Don'tDelete";
            }, false);
        }

        document.getElementById('showSeenNews').addEventListener('click', function() {
            var seenTable = document.getElementById('tableSeenNews');
            var inputCBox = document.getElementsByClassName('wached');
            var lengthInputs = inputCBox.length;
            for (var btnIndex = 0; btnIndex < lengthInputs; btnIndex++) {
                var oldRow = document.getElementById(btnIndex);
                var cloneRow = oldRow.cloneNode(true);
                cloneRow.id = 'NEW' + btnIndex;
                if (document.getElementsByClassName('wached')[btnIndex].id === "Don'tDelete") {
                    seenTable.appendChild(cloneRow);
                }
            }

            var wachedElements = document.getElementsByClassName('wached');
            var loveItElements = document.getElementsByClassName('loveIt');
            for (var delIndex = 0; delIndex < wachedElements.length; delIndex++) {
                wachedElements[delIndex].type = "button";
                wachedElements[delIndex].style.backgroundColor = 'yellow';
                wachedElements[delIndex].style.width = '50px';
                var clonedRow = document.getElementById("NEW" + delIndex);
                loveItElements[delIndex].parentNode.style.display = 'none';
            }

            var mainContainer = document.getElementById('mainContainer');
            var seenNews = document.getElementById('seenNews');
            mainContainer.style.display = 'none';
            seenNews.style.display = 'block';
        }, false);

        ////////////////////
        //LOVED NEWS BUTTON
        ////////////////////

        var inputCBoxLove = document.getElementsByClassName('loveIt');

        for (var checkboxLove = 0; checkboxLove < inputCBoxLove.length; checkboxLove++) {
            inputCBoxLove[checkboxLove].addEventListener('click', function() {
                this.id = "Don'tDelete";
            }, false);
        }

        document.getElementById('showlovedNews').addEventListener('click', function() {
            var lovedTable = document.getElementById('tableLovedNews');
            var inputCBoxLove = document.getElementsByClassName('loveIt');
            var lengthInputs = inputCBoxLove.length;
            for (var btnIndex = 0; btnIndex < lengthInputs; btnIndex++) {
                var oldRow = document.getElementById(btnIndex);
                var cloneRow = oldRow.cloneNode(true);
                cloneRow.id = 'NEW' + btnIndex;
                if (document.getElementsByClassName('loveIt')[btnIndex].id === "Don'tDelete") {
                    lovedTable.appendChild(cloneRow);
                }
            }

            var wachedElements = document.getElementsByClassName('wached');
            var loveItElements = document.getElementsByClassName('loveIt');
            for (var delIndex = 0; delIndex < loveItElements.length; delIndex++) {
                loveItElements[delIndex].type = "button";
                loveItElements[delIndex].style.backgroundColor = 'yellow';
                loveItElements[delIndex].style.width = '50px';
                var clonedRow = document.getElementById("NEW" + delIndex);
                wachedElements[delIndex].parentNode.style.display = 'none';
            }

            var mainContainer = document.getElementById('mainContainer');
            var lovedNews = document.getElementById('lovedNews');
            mainContainer.style.display = 'none';
            lovedNews.style.display = 'block';
        }, false);
    };
});