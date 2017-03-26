function User(username, password, age) {
    this.username = username;
    this.password = Number(password);
    this.age = age;
}

var userManager = (function() {

    var users = JSON.parse(window.localStorage.getItem('users')) || [];

    return {
        addUser: function(user) {
            console.log("HELLOW");
            console.log(user);
            console.log(user instanceof User);

            if (user instanceof User) {
                console.log(users);

                users.push(user);
                console.log(users);

                window.localStorage.setItem('users', JSON.stringify(users));
                console.log(window.localStorage.getItem('users', JSON.stringify(users)));

            }
        },

        loginUser: function(username, password) {
            return users.some(function(element) {
                return (element.username === username) &&
                    (element.password === password);
            });
        },

        isUserNameExists: function(username) {
            return users.some(function(element) {
                return (element.username === username);
            });
        },

        getNumberOfUser: function() {
            return users.length;
        },

        isPasswordValid: function(password) {
            return password.length > 3;
        }

    }
})();