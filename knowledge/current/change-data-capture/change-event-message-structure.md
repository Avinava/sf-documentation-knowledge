---
title: "Change Event Message Structure"
domain: change-data-capture
topic: change-event-message-structure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.625Z
estimatedTokens: 1091
keywords: [Change, Event, Message, Structure, record, API, Version, Schema, Pub, Sub]
---

# Change Event Message Structure

> A change event message contains header fields and record fields.

# Change Event Message Structure

A change event message contains header fields and record fields.

This event example shows the structure of the payload of an event message received in a Pub/Sub API client.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

In a Pub/Sub API client, the received event message is in binary Apache Avro format. You can retrieve the schema, replay ID, and payload from the received event separately and decode the payload to obtain the ChangeEventHeader and record fields. This example shows the payload field only. For more information, see [Pub/Sub API as a gRPC API](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/grpc-api.html) in the Pub/Sub API documentation. Also, the received event in Pub/Sub API contains these ChangeEventHeader fields: nulledfields and diffFields.

## Change Event Fields

The fields that a change event can include correspond to the fields on the associated parent Salesforce object, with a few exceptions. For example, AccountChangeEvent fields correspond to the fields on Account.

The fields that a change event doesn’t include are:

-   The IsDeleted system field.
-   The SystemModStamp system field.
-   Any field whose value isn’t on the record and is derived from another record or from a formula, except roll-up summary fields and custom formula fields, which are included. Examples are derived formula fields. Examples of fields with derived values include LastActivityDate and PhotoUrl.

Each change event also contains header fields. The header fields are included inside the ChangeEventHeader field. They contain information about the event, such as whether the change was an update or delete and the name of the object, like Account.

## API Version and Event Schema

When you subscribe to change events, the subscription uses the latest API version regardless of the API version that the client uses. The event messages received reflect the latest field definitions of the corresponding Salesforce object. When the object schema changes, such as when a field is added or a field type is changed, the schema ID changes. The change event contains the new schema ID in the schema field.

You can get the event schema through REST API or Pub/Sub API.

If using Pub/Sub API to subscribe to events, get the event schema with the GetSchema RPC method.

```

```

For more information, see [GetSchema RPC Method](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/getschema-rpc.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

If using a CometD client, get the event schema with REST API. To get the full schema of a change event message, make a GET request to REST API that includes the schema ID sent in the event message:

```

```

Or make a GET request to this resource.

```

```

<EventName> is the name of a change event, such as AccountChangeEvent.

The event schema REST API resources return the schema ID in the uuid field. To compare the schema with a previous version, retrieve the schema with a previous schema ID and the current schema ID.

The event schema REST API resources are also used for platform events. For more information, see [Platform Event Schema by Event Name](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_eventschema.htm "HTML (New Window)") and [Platform Event Schema by Schema ID](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_event_eventschema.htm "HTML (New Window)") in the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm "HTML (New Window)").

## Change Event Example in Pub/Sub API

This event message is sent for a new account in a Pub/Sub API client.

```

```

-   **[ChangeEventHeader Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)**
    Check out the descriptions of the fields that the change event header contains.
-   **[Change Event Body Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_body.htm)**
    The body of a change event message includes the fields and values for the corresponding Salesforce record.

## Code Examples

```
{
  "ChangeEventHeader": {
    "entityName": "...",
    "recordIds": [...],
    "changeType": "   ",
    "changeOrigin": "   ",
    "transactionKey": "   ",
    "sequenceNumber": ,
    "commitTimestamp": ,
    "commitNumber": ,
    "commitUser": "   ",
    "nulledFields": [...],
    "diffFields": [...],
    "changedFields": [...]
  },
  "field1": "...",
  "field2": "...",
  ...
}
```

```
rpc GetSchema (SchemaRequest) returns (SchemaInfo);
```

```
/vXX.X/event/eventSchema/<Schema_ID>?payloadFormat=COMPACT
```

```
/vXX.X/sobjects/<EventName>/eventSchema?payloadFormat=COMPACT
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
  "Custom_Formula_Field_Example_Priority__c": "Low Priority",
  "Custom_Formula_Field_Example_Number__c": 1,
  "Custom_Formula_Field_Example_Email__c": "example@salesforce.com"}

}
```

## Related Topics

- ChangeEventHeader Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_header.htm)
- Change Event Body Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields_body.htm)
