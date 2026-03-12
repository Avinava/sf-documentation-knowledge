---
title: "Example: Publish Callback Class That Creates Follow-Up Tasks for Failed Publishes"
domain: platform-events
topic: example-publish-callback-class-that-creates-follow-up-tasks-for-failed-publishes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.037Z
estimatedTokens: 67
keywords: [Publish, Callback, Creates, Follow-Up, Tasks, Failed, Publishes, task, event, publishing, fails, onFailure, inserted, includes, number]
---

# Example: Publish Callback Class That Creates Follow-Up Tasks for Failed Publishes

> This publish callback class creates a task when event publishing fails in the onFailure method. The inserted task includes the number
        of failed events and the event UUIDs.

# Example: Publish Callback Class That Creates Follow-Up Tasks for Failed Publishes

This publish callback class creates a task when event publishing fails in the onFailure method. The inserted task includes the number of failed events and the event UUIDs.

```

```

## Code Examples

```apex
public class FailureCallback implements EventBus.EventPublishFailureCallback {
    
    public void onFailure(EventBus.FailureResult result) {
        List<String> eventUuids = result.getEventUuids();
        System.debug(eventUuids.size() + ' events failed to publish.');      
        System.debug('FailureCallback eventUuids to match with event objects: ' +
            eventUuids);

        // Create a follow-up task
        insertTask(eventUuids, false);
    }
    
    private void insertTask(List<String> eventUuids, Boolean isSuccess) {
        String eventIdString = '';
        for (String evtId : eventUuids) {
            eventIdString += evtId + ' ';
        }
        Task t = new Task();
        if (isSuccess == false) {
            t.Subject = 'Follow up on event publishing failures.';
            t.Description = eventUuids.size() + 
                ' events failed to publish. Event UUIDs: '
            + eventIdString; 
        }

        // Set the due date
        t.ActivityDate = Date.today().addDays(3);
        // Set owner ID explicitly. 
        // Otherwise, the task assignee is the Automated Process User.
        // Change the user ID to a valid user ID in your org.
        t.OwnerId = '005RM000002QhQ1YAK';
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
