---
title: "POST /api/v2/query"
domain: data-cloud
topic: post-apiv2query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.417Z
estimatedTokens: 258
keywords: [POST, api, query, endpoint, SQL, data, along, batchId, batch, Examples, HTTP, Responses]
---

# POST /api/v2/query

> Use the POST endpoint of Query API V2 to make the
    first request with the SQL query. The POST endpoint returns data along with batchId for the next
    batch.

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

## Code Examples

```
Authorization: Bearer {{cdpAuthToken}}
```

```
{
    "sql" : "select * from Orders__dll"
}
```

```
{
    "data": [
        [
            "s3://dev1-uswest2-cdp001-test-data/sbothra/Orders.csv",
            "aws",
            null,
            null,
            "Office Supplies",
            "0019-01-03",
            null,
            "Philadelphia",
            "United States",
            "MB-18085",
            "Mick Brown",
            "0.200000000000000000",
            "570907236",
            "0019-01-05 00:00:00.000 UTC",
            "0019-01-05",
            "CA-NEW-2014-141817",
            "19143.000000000000000000",
            "OFF-AR-10003478",
            "Avery Hi-Liter EverBold Pen Style Fluorescent Highlighters 4/Pack",
            "4.884000000000000000",
            "3.000000000000000000",
            "East",
            "1760",
            "19.536000000000000000",
            "Consumer",
            "0019-01-12 00:00:00.000 UTC",
            "0019-01-12",
            "Standard Class",
            "Pennsylvania",
            "Art"
        ],
        [
            "s3://dev1-uswest2-cdp001-test-data/sbothra/Orders.csv",
            "aws",
            null,
            null,
            "Furniture",
            "0021-01-06",
            null,
            "Seattle",
            "United States",
            "RS-19420",
            "Ricardo Sperren",
            "0.000000000000000000",
            "307077322",
            "0021-01-08 00:00:00.000 UTC",
            "0021-01-08",
            "CA-NEW-2017-115154",
            "98115.000000000000000000",
            "FUR-TA-10001950",
            "Balt Solid Wood Round Tables",
            "80.368200000000000000",
            "2.000000000000000000",
            "West",
            "2290",
            "892.980000000000000000",
            "Corporate",
            "0021-01-11 00:00:00.000 UTC",
            "0021-01-11",
            "First Class",
            "Washington",
            "Tables"
        ]
    ],
    "startTime": "2024-05-08T13:30:31.241168Z",
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
