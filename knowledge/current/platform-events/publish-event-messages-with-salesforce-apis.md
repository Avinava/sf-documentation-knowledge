---
title: "Publish Event Messages with Salesforce APIs"
domain: platform-events
topic: publish-event-messages-with-salesforce-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.022Z
estimatedTokens: 1010
keywords: [Publish, Event, Messages, Salesforce, APIs, External, apps, API, platform, Status, Code, Asynchronous, Publishing, REST, Composite]
---

# Publish Event Messages with Salesforce APIs

> External apps use an API to publish platform event
        messages.

# Publish Event Messages with Salesforce APIs

External apps use an API to publish platform event messages.

Publish events by inserting events in the same way that you insert sObjects. You can use any Salesforce API to create platform events, such as SOAP API, REST API, or Bulk API 2.0.

When publishing an event message, the result that the API returns contains information about whether the operation was successful and the errors encountered. If the success field is true, the publish request is queued in Salesforce and the event message is published asynchronously. If the success field is false, the event publish operation resulted in errors, which are returned in the errors field.

The returned result also contains the Id system field. The Id field value isn’t included in the event message delivered to subscribers. It isn’t used to identify an event message, and it isn’t always unique. Subscribers can use the ReplayId system field, which is included in the delivered message, to identify the position of the event in the stream.

## Status Code Returned for Asynchronous Publishing

To indicate that the publish operation is asynchronous, the OPERATION\_ENQUEUED status code is returned for a successful call in the response’s error field, in addition to the event UUID. This example response shows the statusCode field containing OPERATION\_ENQUEUED and the message field containing the event UUID.

```

```

The examples in the next sections are based on a high-volume platform event.

## REST API

To publish a platform event message using REST API, send a POST request to this endpoint.

```

```

## Example

If you defined a platform event named Low Ink, publish event notifications by inserting Low\_Ink\_\_e data. This example creates one event of type Low\_Ink\_\_e in REST API.

REST endpoint:

```

```

Request body:

```

```

After the platform event message is published, the REST response looks like this output. Headers are deleted for brevity.

```

```

## REST API Composite Resource

To publish multiple platform event messages in one REST API request, use the composite resource. Send a POST request to this endpoint.

```

```

Add each platform event as a subrequest in the composite request body.

## Example

This composite request contains two platform events in the request body.

```

```

After the platform event messages are published, the REST response looks like this output. Headers are deleted from this sample response.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The allOrNone header in the composite REST request and in SOAP API applies only to platform events defined with the Publish After Commit option.

## SOAP API

To publish a platform event message using SOAP API, use the create() call.

## Example

This example shows the SOAP message (using Partner API) of a request to create three platform event messages in one call. Each event has one custom field named Printer\_Model\_\_c.

```

```

The response of the Partner SOAP API request looks something like this response. Headers are deleted for brevity.

```

```

#### See Also

-   [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/)

-   [REST API Developer Guide : Using Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_composite_resources.htm)

-   [SOAP API Developer Guide: create() call](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_create.htm)

-   [Bulk API 2.0 Bulk API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/asynch_api_intro.htm " Bulk API 2.0 Bulk API Developer Guide  - HTML (New Window)")

-   [Platform Event Error Status Codes](atlas.en-us.platform_events.meta/platform_events/platform_events_error_status_codes.htm "When publishing an event message results in an error, a status code is returned in the SaveResult.")

## Code Examples

```
HTTP/1.1 201 Created 

{
  "id" : "e01xx0000000001AAA",
  "success" : true,
  "errors" : [ {
    "statusCode" : "OPERATION_ENQUEUED",
    "message" : "232fd30e-0a71-42bd-a97b-be0e329b2ded",
    "fields" : [ ]
  } ]
}
```

```
/services/data/v66.0/sobjects/Event_Name__e/
```

```
/services/data/v66.0/sobjects/Low_Ink__e/
```

```
{
   "Printer_Model__c" : "XZO-5"
}
```

```
HTTP/1.1 201 Created 

{
  "id" : "e01xx0000000001AAA",
  "success" : true,
  "errors" : [ {
    "statusCode" : "OPERATION_ENQUEUED",
    "message" : "232fd30e-0a71-42bd-a97b-be0e329b2ded",
    "fields" : [ ]
  } ]
}
```

## Related Topics

- Platform Event Error Status Codes (atlas.en-us.platform_events.meta/platform_events/platform_events_error_status_codes.htm)
