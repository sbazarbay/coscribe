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

## Deployment Plans

To deploy CoScribe into a production environment, the following steps will be undertaken:

### Dockerization

Each service (`auth`, `notes`, `frontend`) will be containerized using Docker to ensure consistency and ease of deployment across different environments.

### Kubernetes Deployment

For scalability and reliability, Kubernetes will be used to orchestrate the deployment. This involves creating Kubernetes manifests for each service to manage deployments, services, and ingress configurations.

### CI/CD Pipeline

A Continuous Integration and Continuous Deployment (CI/CD) pipeline will be set up using tools such as GitHub Actions. This pipeline will automate the building, testing, and deployment of the application to the production environment.

### Environment Variables and Secrets Management

Environment variables and sensitive information will be managed securely using tools like Kubernetes Secrets or AWS Secrets Manager.

### Networking and Security

Ingress controllers and load balancers will be configured to manage traffic to the services. SSL/TLS certificates will be set up to secure communications. Firewall rules will be established to restrict access to the necessary services only.

### Monitoring and Logging

Monitoring tools like Prometheus and Grafana will be implemented to track the performance and health of the application. Logging will be centralized using solutions such as the ELK Stack (Elasticsearch, Logstash, Kibana) to facilitate debugging and monitoring.

### Database Management

Managed database services will be used to host MongoDB instances. Backup strategies and migration tools will be implemented to ensure data integrity and availability.

### Testing in Staging Environment

Before deploying to production, the entire setup will be tested in a staging environment that mirrors the production setup to ensure everything works as expected.
