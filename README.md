# HTML Conversion API

A simple, containerized REST API service to convert HTML content into PDF, Word (.docx), and Markdown documents.

## Features

-   Convert HTML to high-fidelity PDF.
-   Convert HTML to Microsoft Word (.docx).
-   (Coming Soon) Convert HTML to Markdown.
-   Fully containerized with Docker for easy deployment and scaling.
-   Automated CI/CD pipeline to build and publish the image to Docker Hub.

---

## Prerequisites

-   Docker and Docker Compose must be installed on your system.
-   An API client like [Postman](https://www.postman.com/) or a command-line tool like `curl`.

---

## Getting Started

This project uses a base Docker image from the GitHub Container Registry (`ghcr.io`), which requires authentication to pull.

### 1. Authenticate with GitHub Container Registry

You need to create a GitHub Personal Access Token (PAT) with the `read:packages` scope.

1.  Go to **GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)**.
2.  Click **Generate new token**.
3.  Give it a note (e.g., "Docker ghcr.io login").
4.  Set an expiration.
5.  Select the **`read:packages`** scope.
6.  Click **Generate token** and copy it.

Now, log in via your terminal:

```bash
export CR_PAT=YOUR_COPIED_TOKEN
echo $CR_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```

### 2. Run the Service

With authentication complete, the easiest way to run the service is with Docker Compose:

```bash
docker-compose up --build
```

The API will now be running and available at `http://localhost:8080`.

To stop the service, press `Ctrl+C` and then run `docker-compose down`.

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