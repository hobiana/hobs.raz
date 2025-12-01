# Portfolio

This is a personal portfolio website built with React and Vite, featuring a backend component powered by Cloudflare Workers.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
- [Running the Project Locally](#running-the-project-locally)
  - [Frontend (Vite)](#frontend-vite)
  - [Backend (Cloudflare Worker)](#backend-cloudflare-worker)
- [Deployment](#deployment)
  - [Frontend](#frontend)
  - [Backend](#backend)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [Cloudflare account](https://dash.cloudflare.com/sign-up)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hobiana/hobs.raz.git
cd hobs.raz
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

## Running the Project Locally

This project has two main parts: the frontend application (built with Vite) and the backend (a Cloudflare Worker). Both need to be running for full functionality.

### Frontend (Vite)

To run the frontend development server:

```bash
npm run dev
```

This will start the Vite development server, typically on `http://localhost:5173`.

### Backend (Cloudflare Worker)

The backend is a Cloudflare Worker that handles specific logic (e.g., AI chat functionality).

#### a. Configure Wrangler

The project uses [Wrangler](https://developers.cloudflare.com/workers/wrangler/), the Cloudflare command-line tool.

1.  **Copy the example configuration:**
    Create a `wrangler.toml` file by copying the example file.

    ```bash
    cp wrangler.example.toml wrangler.toml
    ```

2.  **Create a KV Namespace:**
    The worker uses a Cloudflare KV Namespace to store chat history. You can create one using the Cloudflare dashboard or the command line.

    **Using the Cloudflare Dashboard:**
    - Go to your Cloudflare dashboard.
    - Navigate to **Workers & Pages** > **KV**.
    - Click **Create a namespace** and give it a name (e.g., `CHAT_HISTORY`).
    - Once created, copy the **ID** of the new namespace.

    **Using the Command Line:**
    You can also create a namespace using Wrangler.

    ```bash
    npx wrangler kv:namespace create "CHAT_HISTORY"
    ```
    This command will return the namespace ID that you need.

3.  **Update `wrangler.toml`:**
    Open your new `wrangler.toml` file and replace `"xxxxxxxxxxxxxxxxxx"` with the KV Namespace ID you just copied.

    ```toml
    # wrangler.toml

    name = "portfolio"
    main = "worker/gemini.ts"
    compatibility_date = "2024-11-01"

    kv_namespaces = [
      { binding = "CHAT_HISTORY", id = "YOUR_KV_NAMESPACE_ID_HERE" }
    ]
    ```

#### b. Run the Worker

To run the worker locally, use the following command:

```bash
npx wrangler dev
```

This will start a local server for your worker, typically on `http://localhost:8787`. The frontend is configured to proxy requests to this server.

## Deployment

### Frontend

The frontend is set up for easy deployment to GitHub Pages.

```bash
npm run deploy
```

This command will build the project and push the contents of the `dist` folder to the `gh-pages` branch of your repository.

### Backend

To deploy the Cloudflare Worker:

1.  **Login to Cloudflare (if you haven't already):**
    ```bash
    npx wrangler login
    ```

2.  **Deploy the worker:**
    ```bash
    npx wrangler deploy
    ```

This command will publish your worker to your Cloudflare account.