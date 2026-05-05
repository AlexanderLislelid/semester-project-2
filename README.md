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

- HTML
- Tailwind CSS v4
- Vanilla JavaScript

## Live Demo

Click this link for a live demo [Live Demo](https://alexanderlislelid.github.io/semester-project-2/)

## Getting Started

```bash
git clone https://github.com/AlexanderLislelid/semester-project-2.git
cd semester-project-2
npm install
npm run dev
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
│       └── tabs.js
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

## License

MIT
