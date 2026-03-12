---
title: "GET /api/v2/query/{nextBatchId}"
domain: data-cloud
topic: get-apiv2querynextbatchid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.309Z
estimatedTokens: 237
keywords: [GET, api, query, nextBatchId, next, batch, data, initial, POST, request., Syntax, Examples, Note, HTTP, Responses]
---

# GET /api/v2/query/{nextBatchId}

> Returns the next batch of data from the initial POST request.

# GET /api/v2/query/{nextBatchId}

Returns the next batch of data from the initial POST request.

## Syntax

HTTP method

GET

Availability

Data Cloud v2.0, Salesforce 54.0

Formats

REST

URI

/api/v2/query/{nextBatchId}

## Examples

Request Header

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

## Code Examples

```
Authorization: Bearer {{cdpAuthToken}}
```

```
{
"data": [
[
"1103658353",
"123",
"2020-09-28T00:00:00.000+00:00",


], [], [] ...
]
],  "startTime": "2024-05-08T13:30:31.241168Z",
    "endTime": "2024-05-08T13:30:35.571609Z",
    "rowCount": 2,
    "queryId": "20240508_133031_00088_p25a7",
    "nextBatchId": "09151b49-54ed-4948-8139-1f4c7c3a9581",
    "done": false,
    "metadata": {
        "state__c": {
            "type": "VARCHAR",
            "placeInOrder": 28,
            "typeCode": 12
        },
        "sales__c": {
            "type": "DECIMAL",
            "placeInOrder": 23,
            "typeCode": 3
        },
        "productid__c": {
            "type": "VARCHAR",
            "placeInOrder": 17,
            "typeCode": 12
        },
        "segment__c": {
            "type": "VARCHAR",
            "placeInOrder": 24,
            "typeCode": 12
        },
        "individualid__c": {
            "type": "VARCHAR",
            "placeInOrder": 12,
            "typeCode": 12
        },
        "shipdate1__c": {
            "type": "TIMESTAMP WITH TIME ZONE",
            "placeInOrder": 25,
            "typeCode": 2014
        },
        "shipmode__c": {
            "type": "VARCHAR",
            "placeInOrder": 27,
            "typeCode": 12
        },
        "rowid__c": {
            "type": "VARCHAR",
            "placeInOrder": 22,
            "typeCode": 12
        },
        "InternalOrganization__c": {
            "type": "VARCHAR",
            "placeInOrder": 2,
            "typeCode": 12
        },
        "orderdate1__c": {
            "type": "TIMESTAMP WITH TIME ZONE",
            "placeInOrder": 13,
            "typeCode": 2014
        },
        "customername__c": {
            "type": "VARCHAR",
            "placeInOrder": 10,
            "typeCode": 12
        },
        "quantity__c": {
            "type": "DECIMAL",
            "placeInOrder": 20,
            "typeCode": 3
        },
        "DataSource__c": {
            "type": "VARCHAR",
            "placeInOrder": 1,
            "typeCode": 12
        },
        "orderdate__c": {
            "type": "DATE",
            "placeInOrder": 14,
            "typeCode": 91
        },
        "cdp_sys_PartitionDate__c": {
            "type": "DATE",
            "placeInOrder": 5,
            "typeCode": 91
        },
        "orderid__c": {
            "type": "VARCHAR",
            "placeInOrder": 15,
            "typeCode": 12
        },
        "region__c": {
            "type": "VARCHAR",
            "placeInOrder": 21,
            "typeCode": 12
        },
        "KQ_orderid__c": {
            "type": "VARCHAR",
            "placeInOrder": 3,
            "typeCode": 12
        },
        "discount__c": {
            "type": "DECIMAL",
            "placeInOrder": 11,
            "typeCode": 3
        },
        "postalcode__c": {
            "type": "DECIMAL",
            "placeInOrder": 16,
            "typeCode": 3
        },
        "city__c": {
            "type": "VARCHAR",
            "placeInOrder": 7,
            "typeCode": 12
        },
        "profit__c": {
            "type": "DECIMAL",
            "placeInOrder": 19,
            "typeCode": 3
        },
        "customerid__c": {
            "type": "VARCHAR",
            "placeInOrder": 9,
            "typeCode": 12
        },
        "category__c": {
            "type": "VARCHAR",
            "placeInOrder": 4,
            "typeCode": 12
        },
        "sub_category__c": {
            "type": "VARCHAR",
            "placeInOrder": 29,
            "typeCode": 12
        },
        "cdp_sys_SourceVersion__c": {
            "type": "VARCHAR",
            "placeInOrder": 6,
            "typeCode": 12
        },
        "country__c": {
            "type": "VARCHAR",
            "placeInOrder": 8,
            "typeCode": 12
        },
        "shipdate__c": {
            "type": "DATE",
            "placeInOrder": 26,
            "typeCode": 91
        },
        "productname__c": {
            "type": "VARCHAR",
            "placeInOrder": 18,
            "typeCode": 12
        },
        "DataSourceObject__c": {
            "type": "VARCHAR",
            "placeInOrder": 0,
            "typeCode": 12
        }
    }
}
```

## Related Topics

- Query Services Status Codes (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_queryservices_statuscodes.htm)
