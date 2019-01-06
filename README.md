SPA

TODO
- implement redux
- Tests
- show loading spinner etc.
- Mobile friendly
- Local storage
- Styling
- Extra - favourites
- SSR
- CSR implementation
- Quantity editable directly
- update README to explain how it is using the product API (diagram)

## Description
- A shopping cart SPA made using Create React App. It has two views, a product page and a cart page. The product page consumes eiher mock data or a Product API (https://github.com/RobynBlanchard/api-gateway-lambda-cloudformation) to display products.

## Setup

- Copy and rename config.js.dist to config.js

### Using AWS Product API
- Follow the steps in the README to deploy the API https://github.com/RobynBlanchard/api-gateway-lambda-cloudformation
- Deploy the API and copy the API key and API URL into `config.js`
- Set `USING_AWS_API` to `true`
- Populate the rest of the credentials in `config.js` (for the retrieval of images hosted on S3)

### Using mock data
- Set `USING_AWS_API` to `false`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
