---
title: "Publish Event Messages with Apex"
domain: platform-events
topic: publish-event-messages-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.014Z
estimatedTokens: 1481
keywords: [Publish, Event, Messages, Apex, Salesforce, app, Events, Immediate, Result, Database.SaveResult, Status, Code, Asynchronous, Publishing, Behavior]
---

# Publish Event Messages with Apex

> Use Apex to publish event messages from a Salesforce
        app.

# Publish Event Messages with Apex

Use Apex to publish event messages from a Salesforce app.

## Create Events in Apex

Before you can publish event messages, create platform event instances.

Create Events Using the Event API Name:

Create an event instance the same way that you create a Salesforce or custom object instance. Use the new operator with the event API name.

```

```

Create Events With a Prepopulated EventUuid Field:

If you want to have the standard EventUuid field prepopulated in the event variable, use the Apex sobjectType.newSobject method to create an event.

The EventUuid field holds a universally unique identifier (UUID) that identifies an event message. You can use the EventUuid field to track the delivery of event messages. For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm "Get the final result of an EventBus.publish call through an Apex publish callback that you implement. Without the callback, you can get only the intermediate queueing result in Database.SaveResult of an EventBus.publish call, not the final result.").

```

```

To publish event messages, call the EventBus.publish method. For example, if you defined a custom platform event called Low Ink, reference this event type as Low\_Ink\_\_e. Next, create instances of this event, and then pass them to the Apex method.

## Example

This example creates two events of type Low\_Ink\_\_e, publishes them, and then checks whether the publishing was successful or errors were encountered.

Before you can run this snippet, define a platform event with the name of Low\_Ink\_\_e and these fields: Printer\_Model\_\_c of type Text, Serial\_Number\_\_c of type Text (marked as required), Ink\_Percentage\_\_c of type Number(16, 2).

```

```

## Immediate Publish Result in Database.SaveResult

For each event, Database.SaveResult contains information about whether the operation was successful and the errors encountered. If the isSuccess() method returns true, the publish request is queued in Salesforce and the event message is published asynchronously. For more information, see [High-Volume Platform Event Persistence](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm#pe_async_publish_errors). If isSuccess() returns false, the event publish operation resulted in errors, which are returned in the Database.Error object. EventBus.publish() can publish some passed-in events, even when other events can’t be published due to errors. The EventBus.publish() method doesn’t throw exceptions caused by an unsuccessful publish operation. It’s similar in behavior to the Apex Database.insert method when called with the partial success option.

Database.SaveResult also contains the Id system field. The Id field value isn’t included in the event message delivered to subscribers. It isn’t used to identify an event message, and isn’t always unique.

## Status Code Returned for Asynchronous Publishing

To indicate that the publish operation is asynchronous, the OPERATION\_ENQUEUED status code is returned for a successful EventBus.publish call in Database.SaveResult, in addition to the event UUID. You can get the status code and event UUID after checking for a successful result. This example is a printout of the contents of Database.SaveResult after a successful publish call. The getStatusCode method of Database.Error returns the status code of OPERATION\_ENQUEUED. The getMessage method returns the event UUID value for the published event message.

```

```

## Publish Behavior

The platform event message is published either immediately or after a transaction is committed, depending on the publish behavior that you set in the platform event definition. For more information, see [Platform Event Fields](atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm "Platform events contain standard fields. Add custom fields for your custom data."). Apex governor limits apply. For events configured with the **Publish After Commit** behavior, each method execution is counted as one DML statement against the Apex DML statement limit. You can check limit usage using the Apex Limits.getDMLStatements() method. For events configured with the **Publish Immediately** behavior, each method execution is counted against a separate event publishing limit of 150 EventBus.publish() calls. You can check limit usage using the Apex Limits.getPublishImmediateDML() method.

-   **[Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm)**
    Get the final result of an EventBus.publish call through an Apex publish callback that you implement. Without the callback, you can get only the intermediate queueing result in Database.SaveResult of an EventBus.publish call, not the final result.

#### See Also

-   [*Apex Developer Guide*: EventBus Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_eventbus.htm "Apex Developer Guide: EventBus Class - HTML (New Window)")

-   [Platform Event Error Status Codes](atlas.en-us.platform_events.meta/platform_events/platform_events_error_status_codes.htm "When publishing an event message results in an error, a status code is returned in the SaveResult.")

-   [*Apex Developer Guide*: Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "Apex Developer Guide: Execution Governors and Limits - HTML (New Window)")

-   [*Apex Developer Guide*: Limits Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_limits.htm "Apex Developer Guide: Limits Class - HTML (New Window)")

## Code Examples

```
// Create event 
Event_Name__e event = new Event_Name__e();
// Set field values
event.field1__c = 'value';
...

// Or create event with fields
Event_Name__e event = new Event_Name__e(field1__c='value', …);
```

```apex
// Create event 
Event_Name__e event = (Event_Name__e)Event_Name__e.sObjectType.newSObject(null, true);
// Set field values
event.field1__c = 'value';
...
// Display the prepopulated EventUuid
System.debug(‘EventUuid: ’ + event.EventUuid);
```

```apex
List<Low_Ink__e> inkEvents = new List<Low_Ink__e>();
inkEvents.add(new Low_Ink__e(Printer_Model__c='XZO-5', Serial_Number__c='12345', 
              Ink_Percentage__c=0.2));
inkEvents.add(new Low_Ink__e(Printer_Model__c='MN-123', Serial_Number__c='10013', 
              Ink_Percentage__c=0.15));


// Call method to publish events
List<Database.SaveResult> results = EventBus.publish(inkEvents);

// Inspect publishing result for each event
for (Database.SaveResult sr : results) {
    if (sr.isSuccess()) {
        System.debug('Successfully published event.');
    } else {
        for(Database.Error err : sr.getErrors()) {
            System.debug('Error returned: ' +
                        err.getStatusCode() +
                        ' - ' +
                        err.getMessage());
        }
    }       
}
```

```apex
Database.SaveResult[getErrors=(
    Database.Error[getFields=();
    getMessage=d65ae914-2488-414a-85d4-4df93ea9a05c;
    getStatusCode=OPERATION_ENQUEUED;]);
getId=e02xx0000000001AAA;isSuccess=true;]
```

## Related Topics

- Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm)
- High-Volume
                    Platform Event Persistence (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm)
- Platform Event Fields (atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm)
- Platform Event Error Status Codes (atlas.en-us.platform_events.meta/platform_events/platform_events_error_status_codes.htm)
