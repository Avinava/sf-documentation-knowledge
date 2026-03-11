---
title: "POST /api/v1/query"
domain: data-cloud
topic: post-apiv1query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.446Z
keywords: [POST, api, query, Syntax, Request, Parameters, Examples, HTTP, Responses]
---

# POST /api/v1/query

# POST /api/v1/query

Use Query API V1 to query Data Cloud data lake across data model, data lake, unified, and linked objects.

## Syntax

HTTP method

POST

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/query

## Request Parameters

| Field Name | Description |
| --- | --- |
| limit | Field TypeintDescriptionThe numbers of records to be returned. Example: 10 |
| offset | Field TypeintDescriptionNumber of rows to skip before starting to return. Example: 100 |
| orderby | Field TypestringDescriptionComma-separated values to sort the results in ascending or descending order. Example: GenderId__c ASC, Occupation__c DESC |

## Examples

Request Header

```

```

Request

```

```

Response

```

```

## HTTP Responses

[Query Services Status Codes](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_queryservices_statuscodes.htm "Status codes for Query API V1 and Query API V2.")