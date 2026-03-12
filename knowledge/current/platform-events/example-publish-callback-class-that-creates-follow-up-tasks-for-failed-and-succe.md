---
title: "Example: Publish Callback Class That Creates Follow-Up Tasks for Failed and Successful
        Publishes"
domain: platform-events
topic: example-publish-callback-class-that-creates-follow-up-tasks-for-failed-and-succe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.040Z
estimatedTokens: 393
keywords: [Publish, Callback, Creates, Follow-Up, Tasks, Failed, Successful, Publishes, modification, previous, example—it, implements, EventBus.EventPublishSuccessCallback, processes, success]
---

# Example: Publish Callback Class That Creates Follow-Up Tasks for Failed and Successful
        Publishes

> This publish callback class is a modification of the previous example—it also implements
        the EventBus.EventPublishSuccessCallback interface
        and processes both success and failure cases. It creates a task when event publishing fails
        or succeeds. The inserted task includes the number of failed events and the event
        UUIDs.

# Example: Publish Callback Class That Creates Follow-Up Tasks for Failed and Successful Publishes

This publish callback class is a modification of the previous example—it also implements the EventBus.EventPublishSuccessCallback interface and processes both success and failure cases. It creates a task when event publishing fails or succeeds. The inserted task includes the number of failed events and the event UUIDs.

Before running this example, change the email address in the example to an email address of a user who has permission to create tasks in your org. To view debug logs for the FailureCallback class, make sure that you set up user trace flags for the Automated Process user. For more information, see [Callback Running User and Debug Logs](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_user.htm "A publish callback runs under the Automated Process user. As a result, all records that are created in a callback have their system user fields, such as CreatedById and OwnerId, set to Automated Process.").

```

```

To publish events with the callback class, use the code snippet in [Example: Publish Events with a Callback Instance](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_publish.htm "To invoke the callback, perform an EventBus.publish call by passing it an instance of the FailureCallback class. You can publish one event or a batch of events with the callback.") and change the callback instance name in the EventBus.publish method to FailureAndSuccessCallback.

```

```

## Code Examples

```apex
public class FailureAndSuccessCallback implements EventBus.EventPublishFailureCallback,
    EventBus.EventPublishSuccessCallback {
    
    public void onFailure(EventBus.FailureResult result) {
        List<String> eventUuids = result.getEventUuids();
        System.debug(eventUuids.size() + ' events failed to publish.');      
        System.debug('Callback eventUuids to match with event objects: ' + eventUuids);

        // Create a follow-up task for failed events.
        insertTask(eventUuids, false);
    }

    public void onSuccess(EventBus.SuccessResult result) {
        List<String> eventUuids = result.getEventUuids();
        System.debug(eventUuids.size() + ' events were published successfully.');
        System.debug('Callback eventUuids to match with event objects: ' + eventUuids);

        // Create a follow-up task for successful events.
        insertTask(eventUuids, true);
    }
    
    private void insertTask(List<String> eventUuids, Boolean isSuccess) {
        String eventIdString = '';
        for (String evtId : eventUuids) {
            eventIdString += evtId + ' ';
        }
        Task t = new Task();
        if (isSuccess == true) {
            t.Subject = 'Follow up on successful event publishing.';
            t.Description = eventUuids.size() + 
                ' events published successfully. Event UUIDs: '
            + eventIdString;
        } else {
            t.Subject = 'Follow up on event publishing failures.';
            t.Description = eventUuids.size() + 
                ' events failed to publish. Event UUIDs: '
            + eventIdString; 
        }

        // Set the due date
        t.ActivityDate = Date.today().addDays(3);
        // Set owner ID explicitly. 
        // Otherwise, the task assignee is the Automated Process User.
        // ---
        // CHANGE EMAIL ADDRESS to the email of a valid user in your org.
        // ---
        User myUser = [SELECT Id from User WHERE Email='user@example.com'];
        t.OwnerId = myUser.Id;
        // Insert task
        Database.SaveResult sr = Database.insert(t);
        if (!sr.isSuccess()) {
            for(Database.Error err : sr.getErrors()) {
                System.debug('Error returned: ' +
                             err.getStatusCode() +
                             ' - ' +
                             err.getMessage());
            }
        }
    }
}
```

```apex
// Publish events with an instance of the callback.
List<Database.SaveResult> results = EventBus.publish(eventList,
    new FailureAndSuccessCallback());
```

## Related Topics

- Callback Running User and Debug Logs (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_user.htm)
- Example: Publish Events with a Callback Instance (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_publish.htm)
