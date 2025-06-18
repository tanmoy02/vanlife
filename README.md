# vanlife

A project by Tanmoy Adhikary, built to demonstrate routing capabilities using React Router 6. This application is themed around the "van life" lifestyle, allowing users to explore different van options and learn more about the concept.

## Technologies Used

- React
- React Router 6
- Vite
- JavaScript
- HTML
- CSS

## Features

- **Client-Side Routing:** Utilizes React Router 6 for seamless navigation between different sections of the application:
  - Home page
  - About page
  - Vans page (placeholder for future van listings)
- **Basic Page Structure:** Provides a foundational structure for a multi-page application.

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd van-life
    ```

    _(Replace `<repository-url>` with the actual URL of the repository once it's available.)_

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, usually at `http://localhost:5173/` (Vite's default).

### Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. Prettier is integrated with ESLint so that JavaScript/JSX files are formatted according to Prettier rules via ESLint.

Available scripts:

*   `npm run lint`: Checks the codebase for ESLint errors and warnings.
*   `npm run lint:fix`: Attempts to automatically fix ESLint errors and warnings. This also applies Prettier formatting to JS/JSX files.
*   `npm run format:check`: Checks all files for Prettier formatting consistency.
*   `npm run format:fix`: Automatically formats all files using Prettier.

It's recommended to run `npm run lint:fix` and `npm run format:fix` before committing your changes to ensure code consistency.

## Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This command will generate a `dist` folder containing the optimized static assets for deployment.

## Deployment

This project includes a GitHub Actions workflow (`.github/workflows/vite-github-pages-deploy.yml`) that automates the deployment of the application to GitHub Pages.

Upon pushing to the `main` branch (or the specified branch in the workflow), the action will:

1.  Build the application.
2.  Deploy the contents of the `dist` folder to the `gh-pages` branch, making it live on GitHub Pages.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](<repository-url>/issues) if you want to contribute.
_(Replace `<repository-url>` with the actual URL of the repository.)_

## License

This project is currently not licensed. Consider adding an open-source license like MIT if you intend to share it widely.
