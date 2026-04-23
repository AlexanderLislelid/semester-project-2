const createdAt = new Date(listing.created);
const creationDiff = now - createdAt;
formattedCreationDate.textContent = formatMilliseconds(creationDiff);

https://docs.noroff.dev/docs/v2/pagination-sorting#sorting

Sorting
You can use the sort and sortOrder query parameters to sort the results of an API request. The sort parameter specifies the field to sort by, and the sortOrder parameter specifies the sort order (ascending or descending). For example, if you wanted to sort the results by the name field in ascending order, you would set sort to name and sortOrder to asc.

The sort parameter supports any of the properties of the model being queried.

The sortOrder parameter supports asc (ascending) or desc (descending). This field is optional, and defaults to desc if not otherwise specified.
