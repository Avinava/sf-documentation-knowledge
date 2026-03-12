---
title: "Search Scope and Order"
domain: rest-api
topic: search-scope-and-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.916Z
estimatedTokens: 260
keywords: [Search, Scope, Order, ordered, list, objects, default, search, scope, logged-in, user., keeps, track, which, user, interacts, how, often, arranges, results]
---

# Search Scope and Order

> Returns an ordered list of objects in the default global
   search scope of a logged-in user. Global search keeps track of which objects the user interacts
   with and how often, and arranges the search results accordingly. Objects used most frequently
   appear at the top of the list.

# Search Scope and Order

Returns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often, and arranges the search results accordingly. Objects used most frequently appear at the top of the list.

The returned list reflects the object order in the user’s default search scope, including any pinned objects on the user’s search results page. This call is useful if you want to implement a custom search results page using the optimized global search scope. The search string must be URL-encoded.

## Syntax

URI

/services/data/vXX.X/search/scopeOrder

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

## Example

See [Get the Default Search Scope and Order](atlas.en-us.api_rest.meta/api_rest/dome_retrieve_search_scope_order.htm "Use the *** resource to retrieve the default global search scope and order for the logged-in user, including any pinned objects in the user’s search results page.").

## Related Topics

- Get the Default Search Scope and Order (atlas.en-us.api_rest.meta/api_rest/dome_retrieve_search_scope_order.htm)
