// Access modifiers are used in classes to control access.

class Credential { // Created a class named Credential.
    #password; // This is a private access modifier.

    constructor(username, password) {
        this.username = username;
        this.#password = password; // Here, we store the private password in the #password variable.
    }
}

const account = new Credential("konain", "Password123");
console.log(account.username, account.password); // Here, username prints, but password doesn't show because password is private and cannot be accessed directly from outside the class.

// By default, all properties and methods in a class are public.
// We learn about protected access modifier in inheritance.
