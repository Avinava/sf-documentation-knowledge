---
title: "Synchronous Record Validation"
domain: data-cloud
topic: synchronous-record-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.468Z
estimatedTokens: 382
keywords: [Synchronous, Record, Validation, Quickly, validate, payloads, synchronously, development, mode, commit, records, lake]
---

# Synchronous Record Validation

> Quickly validate your payloads synchronously in development mode before you commit
  records to the lake.

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

## Code Examples

```
curl --location --request POST 'https://{instance_url}/api/v1/ingest/sources/ntotest/exercises/actions/test' \
--header 'Authorization: Bearer {access_token}' \
--header 'Content-Type: application/json' \
--data-raw '{
"data": [
{"id": "f19cae7e-5cdb-41ce-92ba-539afea04f9d","contact_name": "Joe Smith","created_date": "2021-07-22T08:57:08.118Z","tax_exempt": false,"ship_address": "9818 Main","total": 77506,"tax_rate": 84,"modified_date": "2021-07-05T09:31:44.457Z"},{"id": "48c8b6a6-8179-4a15-ba19-ec5c8206ce28","contact_name": "Tina Smith","created_date":"2021-07-08T22:57:02.008Z","tax_exempt": false,"ship_address": "245 Main","total": 16986,"tax_rate": 61,"modified_date": "2021-07-03T06:20:52.886Z"}

]
}
'
```

```
{
       "timestamp": "2021-08-20T16:34:26.047666Z",
       "error": "Bad Request",
       "message": "Bad Request: JSON is properly formatted but has a mismatch with Schema.",
       "path": "uri=/api/v1/ingest/sources/ecomm/Orders/actions/test",
       "tenantId": "{tenantId}",
       "internalErrorCode": "COMMON_ERROR_GENERIC",
       "details": {
              "validationReport": [{
                     "record": "{"contact_name":"Joe Smith","total":77506,"tax_exempt":false,"id":"f19cae7e-5cdb-41ce-92ba-539afea04f9d","created_date":"2021-07-22T08:57:08.118Z","ship_address":"9818 Main","modified_date":"2021-07-05T09:31:44.457Z","tax_rate":84}",
                     "causingExceptions": ["#/id: expected type: Number, found: String"]
              }, {
                     "record": "{"contact_name":"Tina Smith","total":16986,"tax_exempt":false,"id":"48c8b6a6-8179-4a15-ba19-ec5c8206ce28","created_date":"2021-07-08T22:57:02.008Z","ship_address":"245 Main","modified_date":"2021-07-03T06:20:52.886Z","tax_rate":61}",
                     "causingExceptions": ["#/id: expected type: Number, found: String"]
              }]
       }
}
```
