---
title: "Recipe File Resource"
domain: salesforce-recipes-api
topic: recipe-file-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.588Z
estimatedTokens: 127
keywords: [Recipe, File, Resource, Data, Prep, recipe's, content, JSON, API, endpoint, internal, debugging, purposes, Modification, URL]
---

# Recipe File Resource

> Returns a Data Prep recipe's file content as JSON. This API endpoint is internal for the 
  recipe UI and is available for debugging and reference purposes only. Modification of this content is not supported.

# Recipe File Resource

Returns a Data Prep recipe's file content as JSON. This API endpoint is internal for the recipe UI and is available for debugging and reference purposes only. Modification of this content is not supported.

## Resource URL

```

```

## Formats

JSON

## Available Version

38.0

## HTTP Methods

GET

## Response Body for GET

Streamed Representation. Returns a binary stream of the JSON contents of the specified file. This representation is different for recipe 2.0 and recipe 3.0.

## Code Examples

```
/wave/recipes/<id>/file
```
