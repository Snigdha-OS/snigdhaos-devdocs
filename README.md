# 🌐 Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.



### 📦 Installation

To get started, install the necessary dependencies using `pnpm` and clone the repository:

```
git clone https://github.com/Snigdha-OS/DevContrib.git
cd DevContrib
pnpm install
```


### 🚀 Local Development

To start a local development server, run the following command:

```
pnpm start
```

This command starts a local server and opens a browser window. Most changes are reflected live without the need to restart the server. 👨‍💻



### 🛠️ Build

To generate static content and prepare for deployment, use the following command:

```
pnpm build
```

This will generate static content into the `build` directory, which can be served using any static hosting service. 🌍



### 🚢 Deployment

#### Using SSH:

If you are using SSH to deploy, run:

```
USE_SSH=true pnpm deploy
```

#### Without SSH:

If you're not using SSH, you can deploy by specifying your GitHub username:

```
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using **GitHub Pages** for hosting, this command is a convenient way to build the website and push it to the `gh-pages` branch. 📦💻



### 👨‍💻 Developer

This project is developed and maintained by **d3v1l0n**. 🧑‍💻



🔧 **Technologies Used:**
- Docusaurus
- pnpm
- GitHub Pages



Happy coding! 🎉