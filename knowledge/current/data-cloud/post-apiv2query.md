---
title: "POST /api/v2/query"
domain: data-cloud
topic: post-apiv2query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.453Z
keywords: [POST, api, query, Syntax, Examples, Note, HTTP, Responses]
---

# POST /api/v2/query

# POST /api/v2/query

Use the POST endpoint of Query API V2 to make the first request with the SQL query. The POST endpoint returns data along with batchId for the next batch.

## Syntax

HTTP method

POST

Availability

Data Cloud v2.0, Salesforce 54.0

Formats

REST

URI

/api/v2/query

## Examples

Request Header

```

```

Request

```

```

Response

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

The placeInOrder parameter indicates the position of the column in each data row. For example, in the following response InternalOrganization\_\_c is the second column in a data row. Similarly quantity\_\_c is the third column. For information on the typeCodes, refer to [SQL data type codes](https://docs.oracle.com/javase/8/docs/api/constant-values.html#java.sql.Types.ARRAY).

```

```

## HTTP Responses

[Query Services Status Codes](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_queryservices_statuscodes.htm "Status codes for Query API V1 and Query API V2.")