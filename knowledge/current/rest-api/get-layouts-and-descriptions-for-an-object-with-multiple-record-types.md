---
title: "Get Layouts and Descriptions for an Object With Multiple Record
      Types"
domain: rest-api
topic: get-layouts-and-descriptions-for-an-object-with-multiple-record-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.674Z
keywords: [Get, Layouts, Descriptions, Object, Multiple, Record, Types, Syntax, Example]
---

# Get Layouts and Descriptions for an Object With Multiple Record
      Types

# Get Layouts and Descriptions for an Object With Multiple Record Types

Retrieves lists of layouts and their descriptions.

For a layout description for objects that have more than one record type defined, the recordTypeId can be obtained from the result from /services/data/vXX.X/sobjects/sObject/describe/layouts/

A GET request for objects that have more than one record type defined returns null for the layouts section of the response.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/layouts/recordTypeId

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```