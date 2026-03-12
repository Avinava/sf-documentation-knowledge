---
title: "Differences Between Change Events Received with Streaming API vs. Pub/Sub API"
domain: api-streaming
topic: differences-between-change-events-received-with-streaming-api-vs-pubsub-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.175Z
estimatedTokens: 785
keywords: [Differences, Change, Events, Received, Streaming, API, Pub, Sub, differs, delivers, entire, event, message, JSON, payload]
---

# Differences Between Change Events Received with Streaming API vs. Pub/Sub API

> The format of change events received with Streaming API differs from change events
    received with Pub/Sub API. Streaming API delivers the entire event message in JSON format while
    Pub/Sub API delivers the event payload in the Apache Avro binary format.

# Differences Between Change Events Received with Streaming API vs. Pub/Sub API

The format of change events received with Streaming API differs from change events received with Pub/Sub API. Streaming API delivers the entire event message in JSON format while Pub/Sub API delivers the event payload in the Apache Avro binary format.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

If you're writing an app for publishing and subscribing to platform events and change data capture events, we recommend you use [Pub/Sub API](https://developer.salesforce.com/docs/platform/pub-sub-api/overview) instead of Streaming API. Pub/Sub API is a newer API. Based on gRPC API and HTTP/2, Pub/Sub API efficiently publishes and delivers binary event messages.

| Event Message Content | Streaming API | Pub/Sub API |
| --- | --- | --- |
| Event message format | The entire event message is in JSON format. | The event payload is in the Apache Avro binary format.The client can retrieve the schema, replay ID, and payload from the received event separately and decode the payload to obtain the ChangeEventHeader and record fields. For more information, see Event Data Serialization with Apache Avro in the Pub/Sub API documentation. |
| Record fields | Null fields and unchanged fields are excluded from the event message. | All the record fields, including the unchanged fields. Unchanged fields are null even if they have a value in the Salesforce record. Unpopulated fields are also null. |
| ChangeEventHeader fields | All the fields in ChangeEventHeader Fields except for changedFields and nulledFields. | In addition to the fields that are sent in Streaming API, Pub/Sub API includes these fields:changedFieldsnulledFieldsSee ChangeEventHeader Fields in the Change Data Capture Developer Guide.Also, nulledFields, diffFields, and changedFields require further processing. For more information, see Event Deserialization Considerations in the Pub/Sub API documentation. |
| Date field format | Date fields contain the date in UTC format. | Date fields are in Epoch time. They can be converted to another date format for readability. |

## Change Event Example in Streaming API (CometD)

This event message is sent for a new account in a CometD client.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

The order of the fields in the JSON event message received in a Streaming (CometD) isn’t guaranteed. The order is based on the underlying Apache Avro schema that change events are based on. When an event is expanded into JSON format, the order of the fields doesn’t always match the schema depending on the client used to receive the event.

## Change Event Example in Pub/Sub API

This event message is sent for a new account in a Pub/Sub API client.

```

```

#### See Also

-   [*Change Data Capture Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm "
    Change Data Capture Developer Guide
    - HTML (New Window)")

## Code Examples

```
{
  "schema": "V2MGwDA2aIP0yQS98S2L6Q",
  "payload": {
    "LastModifiedDate": "2024-04-09T20:26:27.000Z",
    "Description": "Sample account record.",
    "CleanStatus": "Pending",
    "OwnerId": "0055f000005mc66AAA",
    "CreatedById": "0055f000005mc66AAA",
    "ChangeEventHeader": {
      "commitNumber": 1082990428293,
      "commitUser": "0055f000005mc66AAA",
      "sequenceNumber": 1,
      "entityName": "Account",
      "changeType": "CREATE",
      "changedFields": [],
      "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/",
      "transactionKey": "0001ae4b-7024-a64a-87f0-f2c8cebdca76",
      "commitTimestamp": 1712694387000,
      "recordIds": [
        "0015f00002J9YaUAAV"
      ]
    },
    "CreatedDate": "2024-04-09T20:26:27.000Z",
    "LastModifiedById": "0055f000005mc66AAA",
    "Name": "Acme"
  },
  "event": {
    "replayId": 37904280
  }
}
```

```
{
  "ChangeEventHeader": {
    "entityName": "Account",
    "recordIds": [
      "0015f00002J9YYEAA3"
    ],
    "changeType": "CREATE",
    "changeOrigin": "com/salesforce/api/soap/60.0;client=SfdcInternalAPI/",
    "transactionKey": "0001ade9-3f74-0b99-dbc4-42e73424b774",
    "sequenceNumber": 1,
    "commitTimestamp": 1712693965000,
    "commitNumber": 1082985383811,
    "commitUser": "0055f000005mc66AAA",
    "nulledFields": [],
    "diffFields": [],
    "changedFields": []
  },
  "Name": "Acme",
  "Type": null,
  "ParentId": null,
  "BillingAddress": null,
  "ShippingAddress": null,
  "Phone": null,
  "Fax": null,
  "AccountNumber": null,
  "Website": null,
  "Sic": null,
  "Industry": null,
  "AnnualRevenue": null,
  "NumberOfEmployees": null,
  "Ownership": null,
  "TickerSymbol": null,
  "Description": "Sample account record.",
  "Rating": null,
  "Site": null,
  "OwnerId": "0055f000005mc66AAA",
  "CreatedDate": 1712693965000,
  "CreatedById": "0055f000005mc66AAA",
  "LastModifiedDate": 1712693965000,
  "LastModifiedById": "0055f000005mc66AAA",
  "Jigsaw": null,
  "JigsawCompanyId": null,
  "CleanStatus": "Pending",
  "AccountSource": null,
  "DunsNumber": null,
  "Tradestyle": null,
  "NaicsCode": null,
  "NaicsDesc": null,
  "YearStarted": null,
  "SicDesc": null,
  "DandbCompanyId": null,
  "OperatingHoursId": null,
  "CustomerPriority__c": null,
  "SLA__c": null,
  "Active__c": null,
  "NumberofLocations__c": null,
  "UpsellOpportunity__c": null,
  "SLASerialNumber__c": null,
  "SLAExpirationDate__c": null
}
```
