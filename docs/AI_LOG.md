# AI Usage Log

---

## Entry 1

- **Tool used:** Claude
- **Date:** 13 April 2026
- **Purpose:** Generating an image containing user stories and instructions for the assignment so that I can import it into Figma and use it as a quick reference
- **Outcome:** PNG imported into inspiration / mood board Figma page

---

## Entry 2

- **Tool used:** Claude
- **Date:** 13 April 2026
- **Purpose:** Brainstorm brand name ideas and generate logos to choose from based on a price tag and a coin
- **Outcome:** Landed on Marketeer as a brand name and imported both logos to Figma to see how they will look on the high-fidelity prototype later

---

## Entry 3

- **Tool used:** Claude
- **Date:** 20 April 2026
- **Purpose:** Check accessibility on mobile nav sub menu
- **Outcome:** Had forgotten to set aria-expanded when sub menu is not hidden

---

## Entry 4

- **Tool used:** Claude
- **Date:** 20 April 2026
- **Purpose:** Update paths after moving all HTML files to root
- **Outcome:** Issues with navbar paths. Easiest fix was moving HTML files to root and updating broken paths. AI also recommended making an environment-aware BASE_PATH constant that returns `/semester-project-2` on GitHub Pages and `""` locally so that live server still works. Ended up using this approach:

  ```js
  window.location.hostname === "me.github.io" ? "/semester-project-2" : "";
  ```

---

## Entry 5

- **Tool used:** Google search AI
- **Date:** 23 April 2026
- **Purpose:** Needed help converting milliseconds to readable units
- **Outcome:** Found this breakdown and used the formula for my countdown timer:

  ```js
  function formatMs(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  }
  ```

---

## Entry 6

- **Tool used:** Claude
- **Date:** 23 April 2026
- **Purpose:** Asked AI to explain sort parameters like I'm 10 years old
- **Outcome:** Got a simple explanation of how the sort callback works with positive/negative return values to determine order

---

## Entry 7

- **Tool used:** Claude
- **Date:** 27 April 2026
- **Purpose:** Debugging GitHub Pages issues after installing Vite
- **Outcome:** Got suggestions on how to set up `vite.config.js` and a deploy branch with a script to build and push changes directly to that branch

---

## Entry 8

- **Tool used:** Claude
- **Date:** 27 April 2026
- **Purpose:** Explain how to convert comma-separated user input to an array format like `["string", "string"]`
- **Outcome:** Got explanations of how `split`, `map`, and `filter` work together to achieve this

---

## Entry 9

- **Tool used:** Claude
- **Date:** 27 April 2026
- **Purpose:** Needed help figuring out how to remove an object from an array by clicking on it
- **Outcome:** Ended up doing the following to remove an image object from the images array by clicking on it:

  ```js
  img.addEventListener("click", () => {
    const index = images.indexOf(image);
    images.splice(index, 1);
    item.remove();
  });
  ```

---

## Entry 10

- **Tool used:** Claude
- **Date:** 27 April 2026
- **Purpose:** Refactor base path in all files to use `import.meta.env.BASE_URL` from Vite
- **Outcome:** Fixed paths across all files to work correctly with Vite's environment variable

---

## Entry 11

- **Tool used:** Claude
- **Date:** 28 April 2026
- **Purpose:** Debug bid modal crashing on new auctions that have no bids yet
- **Outcome:** Found that the code tried to access bid data on an empty array without a fallback. Fixed by adding a fallback to 0 when no bids exist in the listing

---

## Entry 12

- **Tool used:** Claude
- **Date:** 05 May 2026
- **Purpose:** Check all deployed pages with the W3C validator and get an error report
- **Outcome:** Got a full error report which I then used to fix the validation errors

---

## Entry 13

- **Tool used:** Claude
- **Date:** 05 May 2026
- **Purpose:** Set up ESLint and create a script to lint all JavaScript files in the project
- **Outcome:** Got ESLint installed and configured with a script that checks all files at once

---

## Entry 14

- **Tool used:** Claude
- **Date:** 06 May 2026
- **Purpose:** Find duplicated code and typos in my files
- **Outcome:** Identified some typos and duplicated code that ESLint did not spot

---

## Entry 15

- **Tool used:** Claude
- **Date:** 07 May 2026
- **Purpose:** Fix accessibility issues including contrast errors in navbar, footer and hero section, add meta descriptions for SEO, and fix footer links for screenreaders
- **Outcome:** Got specific colour and markup changes to meet contrast requirements and correct screenreader link patterns

---

## Entry 16

- **Tool used:** Claude
- **Date:** 09 May 2026
- **Purpose:** Help sorting bids by amount and updating the highest bid display logic in auction listings
- **Outcome:** Got the bids sorted in descending order so the highest bid always appears first and is correctly displayed

---

## Entry 17

- **Tool used:** Claude Code (CLI)
- **Date:** 11 May 2026
- **Purpose:** Fix inconsistent formatting in this AI log and add missing entries
- **Outcome:** Standardised all entries to use bullet list format so each field renders on its own line in markdown preview

---

## Note on AI usage

Throughout this project I have written the code myself. AI has been used as a helper tool for explanations, debugging hints, and suggestions, but not to generate or replace my own code.
