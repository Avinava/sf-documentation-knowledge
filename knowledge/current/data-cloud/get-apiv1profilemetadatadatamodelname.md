---
title: "GET /api/v1/profile/metadata/{dataModelName}"
domain: data-cloud
topic: get-apiv1profilemetadatadatamodelname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.434Z
keywords: [GET, api, profile, metadata, dataModelName, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# GET /api/v1/profile/metadata/{dataModelName}

# GET /api/v1/profile/metadata/{dataModelName}

Returns the metadata for the data model object. Metadata includes the list of fields, data types, and indexes available for lookup.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/metadata/{dataModelName}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataModelName | string | Required. Data model object API name. Example: UnifiedIndividual__dlm |

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