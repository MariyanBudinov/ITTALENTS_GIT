(function() {

    function getById(id) {
        return document.getElementById(id);
    }

    var login = document.getElementById('loginBut');
    login.addEventListener('click', function(event) {
        event = event || window.event;

        var inputs = document.querySelectorAll("#loginForm > input");
        var username = inputs[0].value.trim();
        var password = Number(inputs[1].value.trim());

        inputs[0].addEventListener('focus', function() {
            if (getById('WARNING')) {
                getById('WARNING').parentNode.removeChild(getById("WARNING"));
            }
        }, false)
        inputs[1].addEventListener('focus', function() {
            if (getById('WARNING')) {
                getById('WARNING').parentNode.removeChild(getById("WARNING"));
            }
        }, false)
        if (userManager.loginUser(username, password)) {
            window.location = 'assets/movies.html';
        } else {
            var warrningDiv = getById('loginForm');
            var warrningP = document.createElement('p');
            warrningP.style.color = "white";
            warrningP.id = "WARNING"
            warrningP.innerHTML = 'Sorry you are not in register!'
            warrningDiv.appendChild(warrningP);
        }
        event.preventDefault();
    }, false);



    getById('registerForm').addEventListener('submit', function(event) {
        var inputs = document.querySelectorAll("#registerForm > form > input");
        var username = inputs[0].value.trim();
        var password = inputs[1].value.trim();
        var age = Number(inputs[2].value.trim());

        inputs[0].addEventListener('focus', function() {
            if (getById('WARNING')) {
                getById('WARNING').parentNode.removeChild(getById("WARNING"));
            }
        }, false);
        inputs[1].addEventListener('focus', function() {
            if (getById('WARNING')) {
                getById('WARNING').parentNode.removeChild(getById("WARNING"));
            }
        }, false);
        inputs[2].addEventListener('focus', function() {
            if (getById('WARNING')) {
                getById('WARNING').parentNode.removeChild(getById("WARNING"));
            }
        }, false);

        if (userManager.isPasswordValid(password) &&
            !userManager.isUserNameExists(username)) {
            userManager.addUser(new User(username, password, age));
        } else {
            var warrningForm = getById('registration');
            var warrningP = document.createElement('p');
            warrningP.style.color = "white";
            warrningP.id = "WARNING"
            warrningP.innerHTML = 'Username is used or password is < 3 simbols!'
            warrningForm.appendChild(warrningP);
        }

        event.preventDefault();
    }, false);

})();