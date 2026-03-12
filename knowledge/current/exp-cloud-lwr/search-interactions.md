---
title: "Search Interactions"
domain: exp-cloud-lwr
topic: search-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.670Z
estimatedTokens: 204
keywords: [Search, Interactions, interaction, occurs, user, performs, site, Event]
---

# Search Interactions

> A search interaction occurs when a user performs a search on your
			site.

# Search Interactions

A search interaction occurs when a user performs a search on your site.

| Interaction Name | Description |
| --- | --- |
| category-search | Captures an event that occurs when a user selects a category during a search. Available in package version 1.3 and later. |
| search | Captures a search event on your site. |

## Fields

| Field | Details |
| --- | --- |
| attributes | TypeobjectDescriptionA dictionary of values that you supply. |
| categoryId | TypestringDescriptionThe ID of a category from a commerce site that the site visitor selects. Must be classified as a category-based search. |
| name | TypestringDescriptionRequired. The event name. |
| searchQuery | TypestringDescriptionA value that the site visitor supplies representing a search query. |

## Search Event

```

```

## Code Examples

```
event.target.dispatchEvent(
   new CustomEvent('experience_interaction', {
      bubbles: true,
      composed: true,
      detail: {
         name: 'search',
         searchQuery: input7.value,
         attributes: {
            searchFacetList: ['color', 'size'],
            searchType: ['product'],
            numberOfResultsRequested: 12,
            resultPageOffset: 10,
            sortType: 'asc',
            correlationId: 'X-239-22-0',
         },
      },
   })
);
```
