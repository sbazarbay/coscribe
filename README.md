# CoScribe

CoScribe is a collaborative note-taking application built with Nx for monorepo management, Express for the backend, and Vite with Preact for the frontend.

## Overview

CoScribe aims to provide a collaborative environment where users can create, edit, and share notes in real-time.

## Setup Instructions

### Prerequisites

- Node.js v20.12.2
- pnpm v9.1.3
- MongoDB (running locally or accessible via network)

### Initial Setup

1. **Clone the repository:**

    ```bash
    git clone git@github.com:sbazarbay/coscribe.git
    cd coscribe
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

## Usage Instructions

### Running All Services

To run all backend and frontend services simultaneously, use the following command:

```bash
pnpm run serve-all
```

This command will start the Auth service, Notes service, and Frontend application in parallel. You can access them at the following addresses:

- Auth service: http://localhost:3000
- Notes service: http://localhost:3001
- Frontend application: http://localhost:4200

Logs for each service will be available in the `logs` directory.

### Running the Backend Services

1. **Auth Service:**

    ```bash
    pnpm nx serve auth
    ```

    - The Auth service will be running on `http://localhost:3000`.  

2. **Notes Service:**

    ```bash
    pnpm nx serve notes
    ```

    - The Notes service will be running on `http://localhost:3001`.

### Running the Frontend

1. **Frontend Application:**

    ```bash
    pnpm nx serve frontend
    ```

    - The frontend application will be running on `http://localhost:4200`.

## Future Plans

### Testing

- Unit and integration tests are planned for future implementation to ensure the reliability and correctness of the application.