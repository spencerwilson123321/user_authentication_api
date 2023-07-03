# user_authentication_api
A JWT-based user authentication API created using JavaScript, Node.js, MongoDB, and Express. There are three endpoints: /login, /signup, and /verify. The login endpoint attempts to login a user given their email and password. The signup endpoint attempts to create a new user using the given credentials. The verify endpoint checks the JWT to ensure that it is valid.


# Endpoints

## POST /login

Input Parameters:

| Name  | Description |
| ------------- | ------------- |
| email  | The email of the account to login to.  |
| password  | The password of the account to login to.  |

Response:

| Name  | Description |
| ------------- | ------------- |
| success  | A boolean which represents whether the user was logged in successfully.  |
| message  | A human-readable message with possibly additional information.  |

## POST /signup

Input Parameters:

| Name  | Description |
| ------------- | ------------- |
| email  | The email to use for this account.  |
| username  | The username to use for this account.  |
| password  | The password to use for this account.  |

Response:

| Name  | Description |
| ------------- | ------------- |
| success  | A boolean which represents whether the user was created.  |
| message  | A human-readable message with possibly additional information.  |

## POST /verify

Input Parameters:
N/A

Response:

| Name  | Description |
| ------------- | ------------- |
| status  | A boolean which represents whether the session token is valid.  |
| username  | The username of the account associated with the session token.  |
