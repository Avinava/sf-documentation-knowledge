---
title: "GET /api/v1/profile/metadata"
domain: data-cloud
topic: get-apiv1profilemetadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.428Z
keywords: [GET, api, profile, metadata, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# GET /api/v1/profile/metadata

# GET /api/v1/profile/metadata

Returns the list of data model objects, their fields, and category.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/metadata

## Request Parameters

None.

## Examples

Request

```

```

Response

```

```

## HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified. |
| 400 Bad Request | Invalid request. |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | Attribute name used in fields/filter parameter doesn’t exist. |
| 500 Server Error | Internal error. |