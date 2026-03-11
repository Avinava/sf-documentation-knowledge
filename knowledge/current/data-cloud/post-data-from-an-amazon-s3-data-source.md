---
title: "Post Data from an Amazon S3 Data Source"
domain: data-cloud
topic: post-data-from-an-amazon-s3-data-source
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.401Z
keywords: [Post, Data, Amazon, Source, Syntax, Note, Example]
---

# Post Data from an Amazon S3 Data Source

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