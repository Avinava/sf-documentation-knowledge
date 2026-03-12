---
title: "Identify and Match Event Messages with the EventUuid Field"
domain: platform-events
topic: identify-and-match-event-messages-with-the-eventuuid-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.779Z
estimatedTokens: 1369
keywords: [Identify, Match, Event, Messages, EventUuid, Delivered, platform, include, identifies, message, published, received, comparing, universally, unique]
---

# Identify and Match Event Messages with the EventUuid Field

> Delivered platform event messages include the EventUuid field,
    which identifies an event message. Use this field to match published and received event messages
    by comparing the universally unique identifiers (UUIDs) of the received events with the UUIDs
    returned in the SaveResult of publish calls. This way, you can find any event messages that
    aren’t delivered and republish them.

# Identify and Match Event Messages with the EventUuid Field

Delivered platform event messages include the EventUuid field, which identifies an event message. Use this field to match published and received event messages by comparing the universally unique identifiers (UUIDs) of the received events with the UUIDs returned in the SaveResult of publish calls. This way, you can find any event messages that aren’t delivered and republish them.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

If you use Apex to publish events, use Apex publish callbacks to track the final result of the EventBus.publish call. For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm "Get the final result of an EventBus.publish call through an Apex publish callback that you implement. Without the callback, you can get only the intermediate queueing result in Database.SaveResult of an EventBus.publish call, not the final result.").

The EventUuid field is a universally unique identifier (UUID) that identifies a platform event message. The system populates the EventUuid field, and you can’t overwrite its value. The EventUuid field is available in CometD clients using API version 52.0 and later. The API version corresponds to the version that an Apex trigger is saved with or the version specified in a CometD subscriber endpoint. The EventUuid field isn’t part of the event schema, which is returned by the REST eventSchema resource or the describe call result. The EventUuid field is available for high-volume and standard-volume platform events.

For Pub/Sub API clients, the event id field contains the event UUID value. There’s no field named EventUuid. The id field is present in all Pub/Sub API clients, isn’t versioned, and can be overwritten. For more information, see the [PublishStream RPC Method](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/publishstream-rpc.html) in the Pub/Sub API documentation.

For all publishing methods except for Pub/Sub API, event publishing is asynchronous. A success status in an immediately returned SaveResult means that the publish operation is queued in Salesforce. The operation is carried out later when system resources are available. Some failures, such as validation or limit errors, are returned in the SaveResult, but not asynchronous errors. In rare cases, enqueued publish operations can fail due to a system error, and the event message isn’t delivered. You can use the EventUuid field to determine which enqueued event messages failed to publish and then republish them.

Publishing with Pub/Sub API is synchronous and the returned response contains the final publishing status.

## Get the Event UUID of Published Event Messages

Before you can compare the UUIDs of published and received event messages, first save the UUID of published event messages. Also, save the corresponding event field values so that you can republish the events if needed.

If you publish the event using Salesforce APIs, the SaveResult returned contains the UUID in the Error message field. This example contains the save result of an event inserted using a REST API POST request.

```

```

If you publish the event in Apex, you can obtain the UUID by calling this method: EventBus.getOperationId(saveResult).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

If the event publish request fails to be enqueued in Salesforce, no event UUID is returned in the SaveResult. As a result, the EventBus.getOperationId(result) Apex method returns null. This behavior applies even to events that have a prepopulated UUID and that were created via SObjectType.newSObject(recordTypeId, loadDefaults).

This example gets the UUID from the event publish call using Apex.

**Prerequisites:** Before you can run this example, define a platform event with the label of Order Event and these fields: Order Number of type Text(10) and Has Shipped of type Checkbox.

```

```

## Get the Event UUID from Received Event Messages in a CometD Client

In a CometD client, the received event message contains the event UUID in the EventUuid field in the event subsection, as shown in this JSON event example.

```

```

## Get the Event UUID from Received Event Messages in a Pub/Sub API Client

In a Pub/Sub API client, the received event message contains the event UUID value in the id field of the event instance. For example, you can retrieve the UUID value in your code by accessing the id field on the event instance as follows.

```

```

The returned value is a UUID similar to this example.

```

```

## Get the Event UUID from Received Event Messages in an Apex Trigger

In an Apex trigger, extract the event UUID by accessing the EventUuid field on the event object.

```

```

## Match UUIDs of Published and Received Event Messages

After you obtain the event UUIDs for both published and received event messages, match the UUIDs. Any UUIDs that don’t match can indicate that the event hasn’t been delivered. You can attempt to republish the unmatched event messages.

#### See Also

-   [Publish Event Messages with Apex](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_apex.htm "Use Apex to publish event messages from a Salesforce app.")

## Code Examples

```
{
  "id" : "e01xx0000000001AAA",
  "success" : true,
  "errors" : [ {
    "statusCode" : "OPERATION_ENQUEUED",
    "message" : "e981b488-81f3-4fcc-bd6f-f7033c9d7ac3",
    "fields" : [ ]
  } ]
}
```

```apex
// Publish a high-volume event message
Order_Event__e evt = new Order_Event__e(
    Order_Number__c='17',
    Has_Shipped__c = false);
Database.SaveResult sr = EventBus.publish(evt);
// Inspect immediate result
if (sr.isSuccess() == true) {
    System.debug('Successfully enqueued event for publishing.');
    // Get the UUID that uniquely identifies this event publish
    System.debug('UUID=' + EventBus.getOperationId(sr));
} else {
   for(Database.Error err : sr.getErrors()) {
       System.debug('Error returned: ' +
                    err.getStatusCode() +
                    ' - ' +
                    err.getMessage());
   }
}
 
// Debug message output:
//|DEBUG|Successfully enqueued event for publishing.
//|DEBUG|UUID=6ba5db7e-c27b-4a67-a3c5-cf425ffcaf53
```

```
{
  "schema": "UIovjRagY-xEDIJ1Ehzafg",
  "payload": {
    "CreatedDate": "2021-03-04T18:31:40.517Z",
    "CreatedById": "005RM00000231cZYAQ",
    "Order_Number__c": "17",
    "Has_Shipped__c": false
  },
  "event": {
     "EventUuid": "e981b488-81f3-4fcc-bd6f-f7033c9d7ac3",
     "replayId": 617
  }
}
```

```
4c45a27a-5d86-47ed-881a-878b9a9c0dcc
```

```apex
trigger OrderEventTrigger on Order_Event__e (after insert) {
    for(Order_Event__e evt: Trigger.New) {
        // Get the event UUID
        String EventUuid = evt.EventUuid;
        System.debug('Received event UUID=' + EventUuid);

        // Store the event UUID for matching with published event UUID
        // . . .
    }
}

// Debug message output:
//|DEBUG|Received event UUID=6ba5db7e-c27b-4a67-a3c5-cf425ffcaf53
```

## Related Topics

- Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm)
- Publish Event Messages with Apex (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_apex.htm)
