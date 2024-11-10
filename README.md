# Fashion Commerce

A high-performance, server-rendered Next.js 15 App Router ecommerce application.

This project uses React Server Components, Server Actions, Suspense, useOptimistic, and more.

![Screenshot](./fashion-commerce.png)

## Features

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- React Server Components (RSCs) and Suspense for improved performance
- Server Actions for mutations
- Edge Runtime for faster rendering
- New fetching and caching paradigms
- Dynamic OG Images
- Styling with Tailwind CSS
- Automatic light/dark mode based on system settings
- Comprehensive test suite using Vitest to ensure code quality and reliability

### Project Structure

- `app`: Contains the main application code, including pages, components, and layouts.
- `components`: Reusable UI components, including layout components, product components, and more.
- `lib`: Utility functions and constants used throughout the application.
- `pages`: Next.js pages, including the homepage, product pages, and more.

### Key Components

- `ProductGrid`: A reusable component for displaying product grids.
- `ProductDescription`: A component for displaying product descriptions.
- `FilterList`: A component for displaying filter lists.
- `Navbar`: A component for displaying the navigation bar.

### Styling

- Tailwind CSS is used for styling, with a custom configuration file (`tailwind.config.js`).
- Automatic light/dark mode is enabled based on system settings.

### Getting Started

To get started with the application, follow these steps:

1. Clone the repository: `git clone https://github.com/armanabkar/fashion-commerce.git`
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`

### Deployment

- The application is deployed using Next.js's built-in deployment features.
- The `runtime` configuration is set to `edge` for faster rendering.

### Contributing

To contribute to the project, follow these steps:

1. Fork the repository: `git fork https://github.com/your-username/your-repo-name.git`
2. Make changes: `git add .` and `git commit -m "your commit message"`
3. Submit a pull request: `git push origin your-branch-name`

### License

The project is released under the MIT license.
