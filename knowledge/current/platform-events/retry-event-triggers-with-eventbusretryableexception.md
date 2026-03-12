---
title: "Retry Event Triggers with  EventBus.RetryableException"
domain: platform-events
topic: retry-event-triggers-with-eventbusretryableexception
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.105Z
estimatedTokens: 757
keywords: [Retry, Event, Triggers, EventBus.RetryableException, another, chance, process, notifications, Retrying, trigger, helpful, transient, error, occurs, waiting]
---

# Retry Event Triggers with  EventBus.RetryableException

> Get another chance to process event notifications. Retrying a
      trigger is helpful when a transient error occurs or when waiting for a condition to change.
      Retry a trigger if the error or condition is external to the event records and is likely to go
      away later.

# Retry Event Triggers with EventBus.RetryableException

Get another chance to process event notifications. Retrying a trigger is helpful when a transient error occurs or when waiting for a condition to change. Retry a trigger if the error or condition is external to the event records and is likely to go away later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

An example of a transient condition: A trigger adds a related record to a master record if a field on the master record equals a certain value. It’s possible that in a subsequent try, the field value changes and the trigger can perform the operation.

To retry the event trigger, throw EventBus.RetryableException. Events are resent after a small delay. The delay increases in subsequent retries. If the trigger receives a batch of events, retrying the trigger causes all events in the batch to be resent. The events are resent in their original order based on the ReplayID field values, which are unchanged. The trigger processes the resent events and later batches sequentially. Resent events have the same field values as the original events, but the batch sizes of the events can differ. For example, the initial trigger can receive events with replay ID 10 to 20. The resent batch can be larger, containing events with replay ID 10 to 40. When the trigger is retried, the DML operations performed in the trigger before the retry are rolled back and no changes are saved.

## Limit the Number of Retry Attempts

You can run a trigger up to 10 times when it’s retried (the initial run plus 9 retries). After the trigger is retried 9 times, it moves to the error state and stops processing new events. Events sent after the trigger moves to the error state and before it returns to the running state aren’t resent to the trigger. To resume event processing, fix the trigger and save it.

We recommend limiting the retries to less than 9 times. Use the EventBus.TriggerContext.currentContext().retries property to check how many times the trigger has been retried. Alternatively, you can query the EventBusSubscriber.retries field in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

For more code examples, see "Apply Best Practices for Writing Platform Event Triggers" in the [Platform Events Debugging](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging) Trailhead module.

## Example

This example is a skeletal trigger that gives you an idea of how to throw EventBus.RetryableException and limit the number of retries. The trigger uses an if statement to check whether a certain condition is true. Alternatively, you can use a try-catch block and throw EventBus.RetryableException in the catch block.

```

```

## Code Examples

```
trigger ResendEventsTrigger on Low_Ink__e (after insert) {
    if (condition == true) {        
        // Process platform events.        
    } else {
        // Ensure we don't retry the trigger more than 4 times
        if (EventBus.TriggerContext.currentContext().retries < 4) {
            // Condition isn't met, so try again later.
            throw new EventBus.RetryableException(
                     'Condition is not met, so retrying the trigger again.');
        } else {
            // Trigger was retried enough times so give up and
            // resort to alternative action.
            // For example, send email to user.
        }
    }
}
```
