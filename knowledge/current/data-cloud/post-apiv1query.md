---
title: "POST /api/v1/query"
domain: data-cloud
topic: post-apiv1query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.466Z
estimatedTokens: 230
keywords: [POST, api, query, Query, API, Data, Cloud, data, lake, across, model, unified, linked, objects., Syntax, Request, Examples, HTTP, Responses]
---

# POST /api/v1/query

> Use Query API V1 to query Data Cloud data lake across data model, data lake,
    unified, and linked objects.

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

## Code Examples

```
Authorization: Bearer {{cdpAuthToken}}
```

```
{
        "sql": "select BirthDate__c, DataSourceId__c, DataSourceObjectId__c, ExternalRecordId__c, FirstName__c, GenderId__c, Id__c, InternalOrganizationId__c, LastName__c from Individual__dlm where Id__c='100470169'”
        }
```

```
{
  "data": [
    {
      "Id__c": "100470169",
      "GenderId__c": "M",
      "FirstName__c": "Joshua",
      "LastName__c": "Carrier",
      "BirthDate__c": "2022-07-12T06:41:47.865044Z",
      "ExternalRecordId__c": "003f200002a3227163",
      "DataSourceId__c": "SubscribedUsers",
      "InternalOrganizationId__c": "",
      "DataSourceObjectId__c": "Subscribers_for_CDP"
    }
  ],
  "startTime": "2020-12-19T06:50:05.251Z",
  "endTime": "2020-12-19T06:50:05.251Z",
  "rowCount": 1,
  "queryId": "3442db1a-ecef-42b3-b0d8-971ee459efa4",
  "done": true,
  "metadata": 
    {
    "BirthDate__c": 
      {
        "type": "TIMESTAMP WITH TIME ZONE",
        "placeInOrder": 3,
        "typeCode": 93
      },
    "LastName__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 2,
        "typeCode": 12
      },
    "FirstName__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 1,
        "typeCode": 12
      },
    "InternalOrganizationId__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 5,
        "typeCode": 12
      },
    "Id__c":
      {
        "type": "VARCHAR",
        "placeInOrder": 0,
        "typeCode": 12
      },
    "DataSourceObjectId__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 6,
        "typeCode": 12
      },
    "DataSourceId__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 4,
        "typeCode": 12
      },
    "GenderId__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 7,
        "typeCode": 12
      },
    "ExternalRecordId__c": 
      {
        "type": "VARCHAR",
        "placeInOrder": 8,
        "typeCode": 12
      }
 }
}
```

## Related Topics

- Query Services Status Codes (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_queryservices_statuscodes.htm)
