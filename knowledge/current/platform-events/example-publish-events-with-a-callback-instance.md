---
title: "Example: Publish Events with a Callback Instance"
domain: platform-events
topic: example-publish-events-with-a-callback-instance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.054Z
estimatedTokens: 240
keywords: [Publish, Events, Callback, Instance, invoke, perform, EventBus.publish, call, passing, FailureCallback, event, batch]
---

# Example: Publish Events with a Callback Instance

> To invoke the callback, perform an EventBus.publish call by passing it an instance of the FailureCallback class. You can publish one event or a batch of events with the
  callback.

# Example: Publish Events with a Callback Instance

To invoke the callback, perform an EventBus.publish call by passing it an instance of the FailureCallback class. You can publish one event or a batch of events with the callback.

This example publishes two event messages. This example requires a platform event, Order Event, to be defined with a Text(18) field of Order Id. To view debug logs for the FailureCallback class, make sure that you set up user trace flags for the Automated Process user. For more information, see [Callback Running User and Debug Logs](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_user.htm "A publish callback runs under the Automated Process user. As a result, all records that are created in a callback have their system user fields, such as CreatedById and OwnerId, set to Automated Process."). In this case, if all publishing is successful, the onFailure() method isn’t invoked.

```

```

## Code Examples

```apex
List<Order_Event__e> eventList = new List<Order_Event__e>();

// Create event objects with prepopulated EventUuid fields.
Order_Event__e event1 = (Order_Event__e)Order_Event__e.sObjectType.newSObject(null, true);
event1.Order_Id__c='Order1 ID';
System.debug('event1 EventUuid: ' + event1.EventUuid);


Order_Event__e event2 = (Order_Event__e)Order_Event__e.sObjectType.newSObject(null, true);
event2.Order_Id__c='Order2 ID';
System.debug('event2 EventUuid: ' + event2.EventUuid);

// Add event objects to the list.
eventList.add(event1);
eventList.add(event2);

// Publish events with an instance of the failure callback.
List<Database.SaveResult> results = EventBus.publish(eventList, new FailureCallback());

// Inspect synchronous publishing result for each event.
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

## Related Topics

- Callback Running User and Debug Logs (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_user.htm)
