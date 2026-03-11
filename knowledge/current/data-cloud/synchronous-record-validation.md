---
title: "Synchronous Record Validation"
domain: data-cloud
topic: synchronous-record-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.493Z
keywords: [Synchronous, Record, Validation, Note]
---

# Synchronous Record Validation

# Synchronous Record Validation

Quickly validate your payloads synchronously in development mode before you commit records to the lake.

This method provides synchronous validation of object payloads in order to give immediate feedback about the API integration. The feature is intended to be used during the development phase only. For requests that fail validation, the API response provides the necessary details to fix the request payload. For requests that pass validation, payloads aren’t persisted downstream.

URI

/api/v1/ingest/sources/{name}/{object-name}/actions/test

Available since release

Data Cloud v1.0, Salesforce v51.0

Formats

JSON

HTTP methods

POST

Authentication

Authorization: Bearer access\_token

Request body

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

All fields defined in the schema must be present in the request payload. This condition holds regardless of whether the Value Required is set to true or not. If there’s no data available for a certain field on a record, send in a blank value.

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| Content-Type | application/json |
| name | Name of the Ingest API data connector |
| object-name | Name of the object configured in Ingest API data connector for payload |

Response body

```

```

If the request body fails validation, examine the validationReport in the response body to figure out which records failed and what the reasons were for the failure.