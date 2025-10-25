# HTML Conversion API

A simple, containerized REST API service to convert HTML content into PDF, Word (.docx), and Markdown documents.

[![Build and Push Docker Image](https://github.com/your-github-username/html-conversion-api/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-github-username/html-conversion-api/actions/workflows/deploy.yml)

**Docker Hub Image:** [https://hub.docker.com/r/your-dockerhub-username/html-conversion-api](https://hub.docker.com/r/your-dockerhub-username/html-conversion-api)

---

## Features

-   Convert HTML to high-fidelity PDF.
-   Convert HTML to Microsoft Word (.docx).
-   (Coming Soon) Convert HTML to Markdown.
-   Fully containerized with Docker for easy deployment and scaling.
-   Automated CI/CD pipeline to build and publish the image to Docker Hub.

---

## Getting Started

There are three ways to run this service: using a pre-built Docker image (recommended), building from source with Docker Compose, or running locally with Node.js.

### Option 1: Run with Pre-built Docker Image (Recommended)

This is the fastest way to get the service running.

1.  Pull the latest image from Docker Hub:
    ```bash
    docker pull your-dockerhub-username/html-conversion-api:latest
    ```

2.  Run the container:
    ```bash
    docker run --rm -p 8080:8080 your-dockerhub-username/html-conversion-api:latest
    ```

The API will now be running and available at `http://localhost:8080`.

### Option 2: Build and Run with Docker Compose

This method is ideal for developers who want to modify the code.

1.  **Authenticate with GitHub Container Registry:** The project's base image (`ghcr.io/puppeteer/puppeteer`) requires authentication. You need a Personal Access Token (PAT) with the `read:packages` scope. Follow the [official guide to create a PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

2.  Log in via your terminal:
    ```bash
    # Replace YOUR_PAT and YOUR_GITHUB_USERNAME
    export CR_PAT=YOUR_PERSONAL_ACCESS_TOKEN
    echo $CR_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
    ```

3.  Clone the repository and run the service:
    ```bash
    git clone https://github.com/your-github-username/html-conversion-api.git
    cd html-conversion-api
    docker-compose up --build
    ```

### Option 3: Run Locally with Node.js (For Development)

This method is for development and requires Node.js and `npm` installed on your machine. Note: This does **not** use Docker.

1.  Clone the repository:
    ```bash
    git clone https://github.com/Hemanth0411/html-conversion-api.git
    cd html-conversion-api
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
    *(This will download a local version of Chromium, which can be a large download.)*

3.  Start the server:
    ```bash
    node src/app.js
    ```
The API will be available at `http://localhost:8080`.

---

## API Endpoints

### Convert HTML to PDF

-   **URL:** `/api/convert/pdf`
-   **Method:** `POST`
-   **Body (raw JSON):**
    ```json
    {
      "html": "<h1>Hello PDF</h1><p>This is your content.</p>"
    }
    ```
-   **Success Response:**
    -   **Code:** `200 OK`
    -   **Content:** The binary data of the PDF file.

### Convert HTML to Word

-   **URL:** `/api/convert/word`
-   **Method:** `POST`
-   **Body (raw JSON):**
    ```json
    {
      "html": "<h1>Hello Word</h1><p>This is your content.</p>"
    }
    ```
-   **Success Response:**
    -   **Code:** `200 OK`
    -   **Content:** The binary data of the `.docx` file.


## License

This project is open-source and available under the [MIT License](LICENSE).

The project is built upon the official Puppeteer Docker image (`ghcr.io/puppeteer/puppeteer`), which is licensed under the Apache 2.0 License. The full text of this license, along with attribution, is included in the `LICENSE` file in this repository.