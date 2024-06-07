![cozy-threads](https://github.com/dgavigan/cozy-threads/assets/2365581/29300961-1936-4713-8fc1-6b50e256cdde)

# Cozy Threads

Cozy Threads is a direct-to-consumer ecommerce platform showcasing high-quality, ethically-sourced apparel and accessories. This demo application demonstrates the integration of Stripe for payment processing in a full-stack web application using React for the frontend and Node.js/Express for the backend, all within a TypeScript environment.

## Live Demo

You can view the live application [here](https://cozy-threads-31a4b4791247.herokuapp.com/).

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v20.x or later)
- npm (v6.x or later)

## Getting Started

To run this application locally and perform test transactions, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dgavigan/cozy-threads
   cd cozy-threads
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create two `.env` files: one in the `client` directory and one in the `server` directory.

   **Client `.env` file (client/.env):**

   ```env
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   API_BASE_URL=http://localhost:8080
   ```

   _API_BASE_URL is NOT required when building for production_

   **Server `.env` file (server/.env):**

   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the Application:**

   Use the unified script to start both the server and client:

   ```bash
   npm run start:dev
   ```

   This script will start both the Express server and the React client. Your application should now be running at `http://localhost:3000`.

### Performing Test Transactions

To perform test transactions, you can use Stripe's test cards. Visit [Stripe's Test Card Numbers](https://docs.stripe.com/testing?testing-method=card-numbers#use-test-cards) for a list of test card numbers.

Here are some example test cards you can use:

- **Visa:** 4242 4242 4242 4242
- **Mastercard:** 5555 5555 5555 4444
- **American Express:** 3782 822463 10005

When performing test transactions, use any future date for the expiration date and any three-digit CVC (four digits for American Express).

### Configuration with Your Stripe Account

To configure the application with your Stripe account:

1. **Log in to Your Stripe Dashboard:**

   Visit [Stripe Dashboard](https://dashboard.stripe.com/login) and log in to your account.

2. **Obtain API Keys:**

   Navigate to Developers > API keys. Copy the **Publishable key** and **Secret key**.

3. **Set Environment Variables:**

   Update your `.env` files with the keys you obtained from the Stripe Dashboard:

   **Client `.env` file (client/.env):**

   ```env
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   REACT_APP_SERVER_URL=http://localhost:8080
   ```

   **Server `.env` file (server/.env):**

   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Restart Your Application:**

   If your application is running, restart it to apply the changes.

### Conclusion

You should now have the application running locally with the ability to perform test transactions using Stripe's test cards. Follow the setup instructions carefully, and refer to Stripe's documentation for more detailed information on testing and configuring your Stripe account.

Feel free to reach out with any questions or issues you encounter while setting up the application. Happy coding!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the frontend and the backend in production mode. Ensure you have built both parts of the project with `npm run build-all` before running this command.

### `npm run start:dev`

Runs the backend in development mode with hot reloading and the frontend in its development mode. This is recommended for development to see immediate updates on code changes.

### `npm run install-all`

Installs dependencies for both the client and the server. This is a convenience script to simplify the initial setup.

### `npm run build-and-serve`

Builds a production version of the application where the express server directly host the built client app running on localhost:8080

## License

[MIT](https://choosealicense.com/licenses/mit/)
