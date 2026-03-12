---
title: "Post Data from an Amazon S3 Data Source"
domain: data-cloud
topic: post-data-from-an-amazon-s3-data-source
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.354Z
estimatedTokens: 261
keywords: [Post, Data, Amazon, Source, stream]
---

# Post Data from an Amazon S3 Data Source

> Use the POST method to stream data from an Amazon S3 data source.

# Post Data from an Amazon S3 Data Source

Use the POST method to stream data from an Amazon S3 data source.

## Syntax

HTTP method

POST

Availability

Version 51.0 and later.

Formats

REST

URI

/services/data/<vZZ.0>/ui-api/records

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Substitute ZZ with the version of the API.

## Example

URI

```

```

Request Body

```

```

Request parameters

| Parameter | Description |
| --- | --- |
| apiName | Name of the entity that you’re creating. |
| Name | The name of the data stream. |
| DataStreamDefinitionId | The id of the data stream definition that must be associated with the data stream. This id must be available when you create the setup entities via metadata api CRUD or deploy. |
| RefreshFrequency | None, Hourly, Weekly. You must provide the day of the week via:RefreshDayOfWeekMonthly. You must provide the day of the month via:RefreshDayOfMonth |
| RefreshMode | Upsert and Full_Refresh are supported. |

Response

```

```

## Code Examples

```
Post /services/data/v51.0/ui-api/records
```

```
{
  "apiName": "DataStream",
  "fields": {
    "Name": "{DATA STREAM NAME}",
    "DataStreamDefinitionId" : "{DATA STREAM DEFINITION ID}",
    "RefreshFrequency": "Hourly",
    "RefreshMode" : "Upsert"
  }
}
```

```
{
    "apiName": "DataStream",
    "childRelationships": {},
    "eTag": "9e9cb5c9a3e9db2e75918fa9b5b20815",
    "fields": {
        "CreatedBy": {
            "displayValue": "Admin User",
            "value": {
                "apiName": "User",
                "childRelationships": {},
                "eTag": "8941f8da5501cf307f51e59c936e434b",
                "fields": {
                    "Id": {
                        "displayValue": null,
                        "value": "005R0000000d9SfIAI"
                    },
                    "Name": {
                        "displayValue": null,
                        "value": "Admin User"
                    }
                },
                "id": "005R0000000d9SfIAI",
                "lastModifiedById": "005R0000000d9SfIAI",
                "lastModifiedDate": "2021-03-24T19:03:56.000Z",
                "recordTypeId": null,
                "recordTypeInfo": null,
                "systemModstamp": "2021-03-31T22:47:39.000Z",
                "weakEtag": 1617230859000
            }
        },
        "CreatedById": {
            "displayValue": null,
            "value": "005R0000000d9SfIAI"
        },
        "CreatedDate": {
            "displayValue": "4/2/2021, 2:50 PM",
            "value": "2021-04-02T21:50:23.000Z"
        },
        "DataStreamStatus": {
            "displayValue": "Processing",
            "value": "PROCESSING"
        },
        "ImportRunStatus": {
            "displayValue": "None",
            "value": "NONE"
        },
        "IsRefreshDeliveryHourAutomatic": {
            "displayValue": null,
            "value": false
        },
        "LastNumberOfRowsAddedCount": {
            "displayValue": null,
            "value": null
        },
        "LastRefreshDate": {
            "displayValue": null,
            "value": null
        },
        "Name": {
            "displayValue": null,
            "value": "s3-ui-api"
        },
        "RefreshDayOfMonth": {
            "displayValue": null,
            "value": null
        },
        "RefreshDayOfWeek": {
            "displayValue": null,
            "value": null
        },
        "RefreshFrequency": {
            "displayValue": "Hourly",
            "value": "HOURLY"
        },
        "RefreshHours": {
            "displayValue": null,
            "value": null
        },
        "RefreshMode": {
            "displayValue": "Upsert",
            "value": "UPSERT"
        },
        "TotalNumberOfRowsAdded": {
            "displayValue": null,
            "value": null
        },
        "TotalRowsProcessed": {
            "displayValue": null,
            "value": null
        }
    },
    "id": "1dsR000000002zzIAA",
    "lastModifiedById": "005R0000000d9SfIAI",
    "lastModifiedDate": "2021-04-02T21:50:23.000Z",
    "recordTypeId": "012000000000000AAA",
    "recordTypeInfo": null,
    "systemModstamp": "2021-04-02T21:50:23.000Z",
    "weakEtag": 1617400223000
}
```
