---
title: "Firing Platform Events from Batch Apex"
domain: apex-guide
topic: firing-platform-events-from-batch-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.324Z
keywords: [Firing, Platform, Events, Batch, Apex, Example, Testing, BatchApexErrorEvent, Messages, Published, Jobs, Note, See]
---

# Firing Platform Events from Batch Apex

# Firing Platform Events from Batch Apex

Batch Apex classes can fire platform events when encountering an error or exception. Clients listening on an event can obtain actionable information, such as how often the event failed and which records were in scope at the time of failure. Events are also fired for Salesforce Platform internal errors and other uncatchable Apex exceptions such as LimitExceptions, which are caused by reaching governor limits.

An event message provides more granular error tracking than the Apex Jobs UI. It includes the record IDs being processed, exception type, exception message, and stack trace. You can also incorporate custom handling and retry logic for failures. You can invoke custom Apex logic from any trigger on this type of event, so Apex developers can build functionality like custom logging or automated retry handling.

For information on subscribing to platform events, see [Subscribing to Platform Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_subscribe.htm).

The BatchApexErrorEvent object represents a platform event associated with a batch Apex class. This object is available in API version 44.0 and later. If the start, execute, or finish method of a batch Apex job encounters an unhandled exception, a BatchApexErrorEvent platform event is fired. For more details, see [BatchApexErrorEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_batchapexerrorevent.htm "HTML (New Window)") in the Platform Events Developer Guide.

To fire a platform event, a batch Apex class declaration must implement the Database.RaisesPlatformEvents interface.

```

```

## Example

This example creates a trigger to determine which accounts failed in the batch transaction. Custom field Dirty\_\_c indicates that the account was one of a failing batch and ExceptionType\_\_c indicates the exception that was encountered. JobScope and ExceptionType are fields in the BatchApexErrorEvent object.

```

```

## Testing BatchApexErrorEvent Messages Published from Batch Apex Jobs

Use the Test.getEventBus().deliver() method to deliver event messages that are published by failed batch Apex jobs. Use the Test.startTest() and Test.stopTest() statement block to execute the batch job.

This snippet shows how to execute a batch Apex job and deliver event messages. It executes the batch job after Test.stopTest(). This batch job publishes a BatchApexErrorEvent message when a failure occurs through the implementation of Database.RaisesPlatformEvents. After Test.stopTest() runs, a separate Test.getEventBus().deliver() statement is added so that it can deliver the BatchApexErrorEvent.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If further platform events are published by downstream processes, add Test.getEventBus().deliver(); to deliver the event messages for each process. For example, if a platform event trigger, which processes the event from the Apex job, publishes another platform event, add a Test.getEventBus().deliver(); statement to deliver the event message.

#### See Also

-   [*Platform Events Developer Guide*: Deliver Test Event Messages](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_test_deliver.htm "Platform Events Developer Guide: Deliver Test Event
    Messages - HTML (New Window)")
    
-   [*Platform Events Developer Guide*: Event and Event Bus Properties in Test Context](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_test_events.htm "Platform Events Developer Guide: Event and Event Bus
    Properties in Test Context - HTML (New Window)")