
# ReachInbox Project

Welcome to the ReachInbox project! This repository contains a web application designed for managing and interacting with email threads. The application features a variety of functionalities including user authentication, a customizable text editor, and a responsive interface. 

## Project Overview

The ReachInbox application is built using React and Tailwind CSS, with a focus on delivering a seamless user experience. Key features of the application include:

- **User Authentication**: Secure login and registration using Auth0.
- **Email Management**: View and manage email threads, with a focus on usability and responsiveness.
- **Custom Text Editor**: A rich text editor with specific buttons for enhanced email composition.
- **Dark and Light Modes**: A toggle feature to switch between light and dark themes.
- **Responsive Design**: Ensuring the application looks great on both desktop and mobile devices.

## Features

- **Login Page**: A secure login page integrated with Auth0 for authentication.
- **Email List**: Displays a list of emails with the ability to filter and search.
- **Thread View**: Detailed view of individual email threads, with scrollable content for easy navigation.
- **Custom Text Editor**: A text editor with buttons for formatting and other functionalities.
- **Reply Feature**: Ability to reply to emails with an enhanced user interface.
- **Responsive Sidebar**: A sidebar that adapts to different screen sizes and prevents horizontal scrolling.

## Implementation Details

### Project Structure

- **`src`**: Contains the main source code, including components, pages, and styling.
- **`public`**: Static assets such as images and the main HTML file.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`index.js`**: Entry point for the React application.
- **`App.js`**: Main application component that renders the app.

### Styling

The project uses Tailwind CSS for styling, allowing for rapid and responsive design adjustments. Custom styles are defined in the `Style` directory and are applied throughout the application.

### Authentication

The application integrates with Auth0 for user authentication. Ensure that the Auth0 domain and client ID are correctly configured in the project to enable secure login.

### Custom Text Editor

The custom text editor was implemented to provide a richer user experience for composing emails. Specific buttons were added to enhance functionality, and the editor supports both light and dark modes.

### Responsive Design

Efforts were made to ensure that the application is fully responsive. This includes adjustments to the sidebar and other UI elements to prevent horizontal scrolling and ensure a smooth experience on all devices.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reachinbox.git
   ```

2. Navigate to the project directory:
   ```bash
   cd reachinbox
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

