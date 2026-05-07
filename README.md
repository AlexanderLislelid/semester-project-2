# Gavel

An online auction house where users can list items for bidding and place bids on listings.

Built as part of Semester Project 2 at Noroff.

## Features

- Register and log in with a Noroff student email
- Create, edit, and delete your own listings
- Place bids on other users' listings
- View bid history on any listing
- Search and browse all active listings
- Profile page with credit balance and listing history

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

## Live Demo

Click this link for a live demo [Live Demo](https://alexanderlislelid.github.io/semester-project-2/)

## Getting Started

```bash
git clone https://github.com/AlexanderLislelid/semester-project-2.git
cd semester-project-2
npm install
```

Create a `.env` file in the root of the project with the following content, and replace `your-api-key` with your Noroff API key:

```env
VITE_API_KEY=your-api-key
```

Then start the dev server:

```bash
npm run dev
```

## Scripts

Start local dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Build and deploy to GitHub Pages

```bash
npm run deploy
```

Lint the codebase

```bash
npm run lint
```

Lint and auto-fix issues

```bash
npm run lint:fix
```

## Project Structure

```
semester-project-2/
├── index.html
├── vite.config.js
├── eslint.config.mjs
├── package.json
├── .prettierrc
├── .env.example
│
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── profile.html
│   ├── single-listing.html
│   ├── create-listing.html
│   ├── edit-listing.html
│   └── edit-profile.html
│
├── js/
│   ├── api/
│   │   ├── apiClient.js
│   │   ├── fetchAuctions.js
│   │   ├── fetchSingleAuction.js
│   │   ├── fetchAndRenderProfile.js
│   │   ├── createListing.js
│   │   ├── editListing.js
│   │   └── editProfile.js
│   │
│   ├── auth/
│   │   ├── login.js
│   │   └── register.js
│   │
│   ├── components/
│   │   ├── listingCard.js
│   │   ├── bidModal.js
│   │   ├── nav.js
│   │   ├── renderNav.js
│   │   ├── footer.js
│   │   ├── loader.js
│   │   └── toasts.js
│   │
│   └── utils/
│       ├── formatter.js
│       ├── storage.js
│       ├── tabs.js
│       └── timeout.js
│
├── css/
│   └── input.css
│
├── images/
│   ├── gavel-hero.jpg
│   └── gavel-hero-2.jpg
│
├── public/
│   └── images/
│       └── placeholder.png
│
└── favicon_io/
    ├── favicon.ico
    ├── favicon-32x32.png
    └── about.txt
```

## API

Uses the [Noroff Auction API](https://docs.noroff.dev/docs/v2/auction-house/listings).

## Figma

[Figma design files](https://www.figma.com/design/FenRtXGZdgtGz5zPXx3y8X/Auction-House-Semester-Project?node-id=1-10&t=aaLcCzIKLRJXSLL5-1)
[Figma desktop prototype](https://www.figma.com/proto/FenRtXGZdgtGz5zPXx3y8X/Auction-House-Semester-Project?node-id=1-3&t=aaLcCzIKLRJXSLL5-1)
[Figma mobile prototype](https://www.figma.com/proto/FenRtXGZdgtGz5zPXx3y8X/Auction-House-Semester-Project?node-id=1-10&t=aaLcCzIKLRJXSLL5-1)
