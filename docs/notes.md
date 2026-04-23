const createdAt = new Date(listing.created);
const creationDiff = now - createdAt;
formattedCreationDate.textContent = formatMilliseconds(creationDiff);
