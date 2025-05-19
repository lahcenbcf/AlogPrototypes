# E-Commerce Platform Frontend Prototype

This repository contains the frontend prototypes for the Admin and Vendor applications of our E-Commerce Platform. The primary goal of this prototype is to demonstrate a decoupled, modular architecture using ReactJS, with a clear separation between UI components and backend API interactions.

## Guiding Architectural Principles Demonstrated

*   **Decoupling:** Frontend applications are decoupled from direct backend knowledge via an API service abstraction layer.
*   **Modularity:**
    *   Separate React applications for Admin and Vendor roles.
    *   Component-based UI design within each application.
    *   A (basic) shared UI library concept.
*   **Abstraction:** API interactions are abstracted into service modules. UI components are unaware of `axios` or specific endpoint URLs.
*   **Program to an Interface:** UI components interact with defined functions in service modules rather than directly with HTTP implementation details.

## Project Structure

The project is organized as follows:


## Key Files and Concepts

### 1. API Client (`apps/<app-name>/src/apiClient.js`)
*   **Purpose:** Centralized Axios instance configuration for each application.
*   **Key Features:**
    *   Sets the `baseURL` for the API Gateway (either mock `json-server` or your real API Gateway).
    *   Includes Axios interceptors to automatically add the JWT `Authorization` header to requests.
    *   Can include common error handling (e.g., for 401 Unauthorized responses).
*   **Importance:** Ensures all API calls are configured consistently and abstracts away token management from individual service calls.

### 2. Service Modules (`apps/<app-name>/src/services/`)
*   **Examples:** `authService.js`, `productService.js`, `userService.js`, `orderService.js`.
*   **Purpose:** This is the **API abstraction layer**. Each module encapsulates functions that correspond to backend API operations for a specific domain.
*   **Key Features:**
    *   Uses the `apiClient` to make HTTP requests.
    *   Handles promise resolution/rejection and basic error logging.
    *   Returns data in a format expected by the UI components.
*   **Importance:** **Decouples UI components from backend communication details.** Components call functions like `productService.getAllProducts()` without knowing about HTTP methods, URLs, headers, or `axios`. This makes the UI more resilient to backend API changes (as long as the service function interface remains stable).

### 3. Page Components (`apps/<app-name>/src/pages/`)
*   **Examples:** `ProductsListPage.js`, `LoginPage.js`, `CreateProductPage.js`.
*   **Purpose:** Represent distinct views or screens in the application.
*   **Key Features:**
    *   Typically responsible for fetching data (by calling functions from the service modules) when the component mounts (using `useEffect`).
    *   Manage local component state (e.g., fetched data, loading status, errors, form inputs).
    *   Pass data down to presentational/common UI components (like `Table.js` or `ProductForm.js`).
    *   Handle user interactions and trigger actions (e.g., form submissions calling service module functions).

### 4. Common/Shared UI Components
*   **`apps/<app-name>/src/components/common/Table.js`**: A reusable component to display tabular data. It accepts `columns` definitions and `data` as props.
*   **`packages/shared-ui/src/components/Button.js`**: A basic example of a component that could be shared across multiple applications via the `shared-ui` library.
*   **Importance:** Promotes UI consistency and reduces code duplication. Adheres to the Component-Based Architecture principle.

### 5. Authentication and Routing
*   **`ProtectedRoute.js`**: A higher-order component that checks if a user is authenticated (using `authService.isAuthenticated()`) before allowing access to certain routes. Redirects to `/login` if not authenticated.
*   **`App.js`**: Configures `react-router-dom` to define public routes (like `/login`) and protected routes wrapped by `ProtectedRoute`.
*   **`authService.js`**: Handles login API calls and manages the authentication token (e.g., in `localStorage`).

### 6. Mock API (`mock-api/`)
*   **`db.json`**: Contains sample data for users, products, orders, etc., used by `json-server`.
    *   **Mock Login:** The `users` array includes plain-text passwords **for mock purposes only**. The `authService.js` (when configured for mock) fetches a user by username/role and then performs a client-side password comparison.
*   **`routes.json`**: (Optional) Can be used to map custom URL paths in `json-server` to resources in `db.json`.
*   **Purpose:** Allows frontend development and demonstration to proceed independently of a fully functional backend API Gateway and microservices, particularly for initial features like login.

## Getting Started

### Prerequisites
*   Node.js and npm (or Yarn)

### Running the Mock API (json-server)
1.  Navigate to the `ecommerce-prototype/mock-api/` directory.
2. run `npm i`
3.  Run `npx json-server --watch db.json --routes routes.json --port 3001` (or your preferred port).

### Running a Client Application (e.g., Admin App)
1.  **Link Shared UI (if not using workspaces):**
    *   In `ecommerce-prototype/packages/shared-ui/`, run `npm link`.
    *   In `ecommerce-prototype/apps/admin-app/`, run `npm link shared-ui`.
2.  Navigate to the `ecommerce-prototype/apps/admin-app/` directory.
3.  Run `npm install` (or `yarn install`).
4.  Run `npm start` (or `yarn start`).
5.  The application will typically open on `http://localhost:3000`.

**Important:**
*   Ensure the `baseURL` in `apps/admin-app/src/apiClient.js` (and `vendor-app`) is correctly set to either the `json-server` URL (e.g., `http://localhost:3001`) for mock mode, or your actual API Gateway URL.
*   For mock login, use credentials defined in `mock-api/db.json`. For example:
    *   Admin: `username: admin.root`, `password: a_password123`
    *   Vendor: `username: vendor.jane`, `password: password123` (or as defined)

## Current Functionality Implemented

*   **Admin App:**
    *   Login/Logout
    *   Protected Routes
    *   Listing all Products
    *   Listing all Users
    *   Listing all Orders
*   **Vendor App:**
    *   Login/Logout
    *   Protected Routes
    *   Dashboard
    *   Listing vendor-specific Products
    *   Creating a new Product

This prototype demonstrates the core frontend architectural decisions and provides a base for further development.