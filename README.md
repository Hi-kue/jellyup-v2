<br />
<div align="center">
  <a href="#">
  <img src="repo-assets/jellyup-logo.png" alt="JellyUp Logo" height="150">
  </a>

<h3 align="center">
    JellyUp
</h3>
  <p align="center">
    A collaborative project developed & aimed at fulfilling/replicating the requirements of <a>JellyJelly.com</a>
    <br />
    <div align="center">
        <a href="#">Report Bug</a>
        ✱
        <a href="#">Request Feature</a>
        ✱
        <a href="#">Documentation</a>
    </div>
  </p>
</div>
<br>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Architecture Diagram](#architecture-diagram)
- [Tech Stack](#tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Development Tools](#development-tools)
  - [Additional Tools](#additional-tools)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [License](#license)

## Architecture Diagram
![Architecture-Diagram](repo-assets/architecture.png)

The architecture diagram above illustrates the general structure of the application and how each component interacts with one another. Please note that the architecture is subject to change as the project progresses.

## Tech Stack

### Backend
- **Framework:** `Flask`
- **Language:** `Python`
- **Machine Learning:**
  - `Transformers`
  - `OpenAI`
  - `DeepFace`
- **Media Processing:**
  - `Pydub`
  - `MoviePy`
  - `FFmpeg`
- **Database:** `Supabase`

### Frontend
- **Framework:** `Next.js`
- **Styling:** `Tailwind CSS`, `Shadcn/UI`
- **Animation:** `Framer Motion`, `Drei (for 3D animations with React Fiber)`
- **Language:** `TypeScript`
- **Runtime:** `Node.js`

### Development Tools
- **Containerization:** `Docker`
- **Package Management:** `Poetry (Python)`, `npm (JavaScript)`
- **Deployment:** `Vercel`

### Additional Tools
- **Image Search:** `Pexels API (for retrieving images based on queries)`
- **Natural Language Processing:** `NLTK (for sentiment analysis)`

**Note**: These tools may not be implemented at the time of reading.

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Vercel CLI](https://vercel.com/download)
- [Next.js](https://nextjs.org/)
- [ffmpeg](https://ffmpeg.org/)
- [axios](https://axios-http.com/)
- [Prisma](https://www.prisma.io/)
- [ESLint](https://eslint.org/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NautilusAI/Customer-Support-AI.git .
```

> **Note**: The `.` at the end of the command clones the repository into the current directory instead of creating a new directory.

2. Navigate to the frontend directory and install the dependencies:
```bash
cd ./frontend
npm install
```

3. You can now run the application locally. It is recommended to use the `run.cmd` command to start the application:
```bash
.\run.cmd
```

Alternatively, you can start the application using:
```bash
npm run dev
```

If you prefer not to use `npm`, you can also use `yarn`, `pnpm`, or `bun`:
```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

   > **Note**: If you encounter issues, please check the `package.json` file for the correct command.

### Usage

To access the application, navigate to: 
```bash
http://localhost:3000
```

> **NOTE**: All applications build using Next.js will usually run on port `3000`, but this can be changed within the `next.config.js` file.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
