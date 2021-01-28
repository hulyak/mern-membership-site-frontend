# Membership Site for Groups

- users should sign up before joining or creating a new group, users can't access to other pages if they are not signed in.
- users are generated with Firebase
- users and passwords
  - email: 'vhugo@gmail.com',
  - password: 'abc123!',

  - email: 'jsmith@gmail.com',
  - password: 'abc123!',

  - email: 'hjohns@gmail.com',
  - password: 'abc123!',

- users can see their groups and other groups created by other users, they can request to join the group and see the group page with messages and join requests. Owners of the group can see the requests and reject or accept users to join the group.
- sign in and logout functionality is through `Firebase Authentication`, admins have more access for creating, deleting or editing groups with `firebase-admin` package.
- [backend](https://github.com/hulyak/mern-membership-site-backend) is with Mongo Client and Express server.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

