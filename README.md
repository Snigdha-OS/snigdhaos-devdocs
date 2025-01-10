# Snigdha OS Developer Documentation

[![License](https://img.shields.io/github/license/Snigdha-OS/snigdhaos-devdocs)](LICENSE)  
[![Build Status](https://img.shields.io/github/actions/workflow/status/Snigdha-OS/snigdhaos-devdocs/deploy.yml?branch=main)](https://github.com/Snigdha-OS/snigdhaos-devdocs/actions)  
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fsnigdha-os.github.io%2Fsnigdhaos-devdocs%2F)](https://snigdha-os.github.io/snigdhaos-devdocs/)

Welcome to the **Snigdha OS Developer Documentation** repository! This repository houses the official developer documentation for **Snigdha OS**, a highly customizable, Arch-based Linux distribution designed for developers, penetration testers, and general users.



## 📚 About

Snigdha OS Developer Documentation serves as a comprehensive guide for developers working on or with Snigdha OS. It includes detailed instructions, examples, and best practices to help users make the most of the OS and contribute to its ecosystem.

### Features:
- Detailed setup and configuration guides
- API references
- Contributing guidelines
- Localization support for multiple Indian languages
- Regularly updated content



## 🚀 Quick Start

To view the documentation:

1. Visit the [Snigdha OS Developer Docs](https://snigdha-os.github.io/snigdhaos-devdocs/).
2. Use the language switcher in the navbar to explore content in various supported languages.
3. Follow the detailed instructions to set up and customize Snigdha OS.



## 🛠️ Installation and Development

To run the documentation locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/Snigdha-OS/snigdhaos-devdocs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd snigdhaos-devdocs
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.



## 🌐 Supported Languages

Snigdha OS Developer Documentation is available in multiple Indian languages, including:

- English (`en`)
- Hindi (`hi`)
- Bengali (`bn`)
- Telugu (`te`)
- Marathi (`mr`)
- Tamil (`ta`)
- Urdu (`ur`)
- Gujarati (`gu`)
- Kannada (`kn`)
- Malayalam (`ml`)
- Odia (`or`)
- Punjabi (`pa`)
- Assamese (`as`)
- Nepali (`ne`)
- Sinhala (`si`)
- Kashmiri (`ks`)
- Sanskrit (`sa`)
- Tibetan (`bo`)



## 🌏 How to Translate

### Adding or Updating Translations

1. Navigate to the `i18n` directory in the project.  
   Each language has its own folder named after the language code (e.g., `hi` for Hindi, `bn` for Bengali).

2. Translate or edit the JSON files inside the corresponding folder.  
   For example:  
   - `i18n/hi/docusaurus-plugin-content-docs/current/<doc>.json` contains translations for Hindi.
   - Each JSON file corresponds to a specific documentation page.

3. Add your translations for the required fields. For example:
   ```json
   {
     "title": "शीर्षक", 
     "description": "यह एक हिंदी दस्तावेज़ है।"
   }
   ```

4. Test your translations by running the project locally:
   ```bash
   npm start
   ```

5. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add/Update translations for <language>"
   git push origin <branch-name>
   ```

6. Open a pull request to merge your changes into the main branch.



## 🖼️ Project Structure

- `/docs`: Main documentation content in markdown files.
- `/i18n`: Translations for different languages.
- `/src`: Custom CSS and theme-related modifications.
- `docusaurus.config.js`: Main configuration file for the Docusaurus framework.



## 🤝 Contributing

We welcome contributions to improve the Snigdha OS Developer Documentation! 

### How to Contribute:
1. Fork this repository.
2. Create a new branch for your feature, bug fix, or translation:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and test them locally.
4. Commit your changes:
   ```bash
   git commit -m "Add feature or fix description"
   ```
5. Push your changes:
   ```bash
   git push origin feature-name
   ```
6. Create a pull request on GitHub.



## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.



## 📞 Support

For questions, suggestions, or bug reports, please open an issue on the [GitHub Issues](https://github.com/Snigdha-OS/snigdhaos-devdocs/issues) page.



## 🛡️ Acknowledgements

Snigdha OS Developer Documentation is powered by:
- [Docusaurus](https://docusaurus.io/) for creating modern documentation websites.
- [Prism React Renderer](https://prism-react-renderer.netlify.app/) for syntax highlighting.

Special thanks to the **Snigdha OS Community** and contributors for making this documentation project possible.



Enjoy your experience with **Snigdha OS**! 🌟