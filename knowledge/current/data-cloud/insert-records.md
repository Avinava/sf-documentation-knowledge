---
title: "Insert Records"
domain: data-cloud
topic: insert-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.293Z
estimatedTokens: 381
keywords: [Insert, Records, Load, new, objects, Data, Cloud, lake]
---

# Insert Records

> Load new objects and update existing objects into your Data Cloud data lake
  table.

# Insert Records

Load new objects and update existing objects into your Data Cloud data lake table.

URI

/api/v1/ingest/sources/{name}/{object-name}

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
| name | Name of the Ingest API data connector. |
| object-name | Name of the object configured in Ingest API data connector for payload. |

Response body

```

```

Returns a status code of 202 (Accepted), which indicates that the request is accepted and gets processed asynchronously.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

For more information on status codes, refer to **Status Codes and Error Responses** section in [Get Started with Ingestion API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.").

## Code Examples

```
curl --location --request POST
'https://{instance_url}/api/v1/ingest/sources/ntotest/exercises_734a9fa2' \
--header 'Authorization: Bearer {access_token}' \
--header 'Content-Type: application/json' \
--data-raw '{
"data": [
{"maid":1,"first_name":"Rachel","last_name":"Rodriquez","email":"rachel@nto.com","gender":"Female","city":"New York City","state":"NY","created":"2020-04-27T02:48:33Z"}
]
}
'
```

```
{
"accepted": true
}
```

## Related Topics

- Get Started with Ingestion API (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)
