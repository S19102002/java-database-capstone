/*package com.project.back_end.DTO;

public class Login {
    
// 1. 'email' field:
//    - Type: private String
//    - Description:
//      - Represents the email address used for logging into the system.
//      - The email field is expected to contain a valid email address for user authentication purposes.

// 2. 'password' field:
//    - Type: private String
//    - Description:
//      - Represents the password associated with the email address.
//      - The password field is used for verifying the user's identity during login.
//      - It is generally hashed before being stored and compared during authentication.

// 3. Constructor:
//    - No explicit constructor is defined for this class, as it relies on the default constructor provided by Java.
//    - This class can be initialized with setters or directly via reflection, as per the application's needs.

// 4. Getters and Setters:
//    - Standard getter and setter methods are provided for both 'email' and 'password' fields.
//    - The 'getEmail()' method allows access to the email value.
//    - The 'setEmail(String email)' method sets the email value.
//    - The 'getPassword()' method allows access to the password value.
//    - The 'setPassword(String password)' method sets the password value.


}*/
package com.project.back_end.DTO;

public class Login {

    // 1. Represents the email address used for logging into the system
    private String email;

    // 2. Represents the password associated with the email address
    private String password;

    // 3. Default constructor (implicitly provided, but can be declared for clarity)
    public Login() {
    }

    // 4. Getters and Setters

    // Gets the email value
    public String getEmail() {
        return email;
    }

    // Sets the email value
    public void setEmail(String email) {
        this.email = email;
    }

    // Gets the password value
    public String getPassword() {
        return password;
    }

    // Sets the password value
    public void setPassword(String password) {
        this.password = password;
    }
}
