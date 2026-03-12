---
title: "Search Scope and Order"
domain: knowledge-dev
topic: search-scope-and-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.703Z
estimatedTokens: 200
keywords: [Search, Scope, Order, ordered, objects, logged-in, user, keeps, track, interacts, how, often, arranges, results, accordingly]
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

See Get the Default Search Scope and Order.
