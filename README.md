
# React Scientific Calculator

This is a revamped and improved version of a scientific calculator built using React. It provides advanced mathematical functions and a responsive user interface, ensuring compatibility across various devices.

[Try the calculator](https://liuyuelintop.github.io/scientific-calculator-react/)

## Features

- **Basic Arithmetic**: Addition, subtraction, multiplication, and division.
- **Advanced Math Functions**: Trigonometric calculations, square root, square, cube, exponential, logarithms, and more.
- **Responsive Design**: Adapts to both mobile and desktop views for a seamless user experience.
- **Keyboard Support**: The input focus feature enhances user interaction through keyboard inputs.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/[your-github-username]/[your-repo-name].git
   ```
2. **Navigate to the Directory**:

   ```bash
   cd [your-repo-name]
   ```
3. **Install Dependencies**:

   ```bash
   npm install
   ```
4. **Start the Development Server**:

   ```bash
   npm start
   ```

The app will open in a new browser tab. You can also access it at [http://localhost:3000](http://localhost:3000).

## Deployment to GitHub Pages

### Prerequisites

Ensure you have the `gh-pages` package installed. If not, you can add it via:

```bash
npm install gh-pages --save-dev
```

### Steps for Deployment

1. **Add Homepage**: In the `package.json` file, add a `homepage` field:

```json
"homepage": "https://[your-github-username].github.io/[your-repo-name]/"
```

2. **Add Scripts**: In the same `package.json` file, add:

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy**:

```bash
npm run deploy
```

### View Deployed App

Access the deployed app at: [https://[your-github-username].github.io/[your-repo-name]/](https://[your-github-username].github.io/[your-repo-name]/)

## Credits

This project was inspired by the original work done by [sofiamfernandez](https://github.com/sofiamfernandez/react-scientific-calculator). Enhancements and additional features were added to further improve the application's capabilities.

---

Remember to replace `[your-github-username]` and `[your-repo-name]` with your actual GitHub username and repository name, respectively.
