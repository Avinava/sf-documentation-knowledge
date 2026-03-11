---
title: "GET /api/v1/insight/metadata/(ci-name)"
domain: data-cloud
topic: get-apiv1insightmetadataci-name
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.361Z
keywords: [GET, api, insight, metadata, ci-name, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# GET /api/v1/insight/metadata/(ci-name)

# GET /api/v1/insight/metadata/(ci-name)

The metadata includes the dimension and measure that are part of the calculated insight.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/insight/metadata/(ci-name)

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| ci_name | string | Required. The calculated insight name. Example: IndividualChildrenCount__cio |

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
| 200 OK | Callback successfully verified |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | Attribute name used in fields/filter parameter doesn’t exist. |
| 500 Server Error | Internal error |