---
title: "Get Compact Layouts Using sObject CompactLayouts"
domain: rest-api
topic: get-compact-layouts-using-sobject-compactlayouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.648Z
keywords: [Get, Compact, Layouts, sObject, CompactLayouts, Syntax, Example]
---

# Get Compact Layouts Using sObject CompactLayouts

# Get Compact Layouts Using sObject CompactLayouts

Retrieves a list of compact layouts for a specific object. This resource is available in REST API version 29.0 and later.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/compactLayouts/

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

None required

## Example

Example Request

```

```

Example Response Body

This sample JSON response is for compact layouts created on the Account object. In this example, only one custom compact layout was created for Account. The custom compact layout is assigned as the primary compact layout for the object, and it contains two fields: Account Name and Phone.

```

```

If you haven’t defined any compact layouts for an object, the compactLayoutId returns as Null.