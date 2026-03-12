---
title: "Test Retried Event Messages"
domain: platform-events
topic: test-retried-event-messages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.163Z
estimatedTokens: 547
keywords: [Test, Retried, Event, Messages, Apex, trigger, retry, processing, message, throwing, EventBus.RetryableException, API, version, 43.0, later]
---

# Test Retried Event Messages

> An Apex trigger can retry processing of an event message by throwing EventBus.RetryableException. In API version 43.0 and
        later, you can test retried event messages by calling Test.EventBus.deliver() and inspecting EventBusSubscriber fields.

# Test Retried Event Messages

An Apex trigger can retry processing of an event message by throwing EventBus.RetryableException. In API version 43.0 and later, you can test retried event messages by calling Test.EventBus.deliver() and inspecting EventBusSubscriber fields.

To force redelivery of a retried event message in an Apex test, call Test.EventBus.deliver(). This method also delivers other event messages that have been published after the last deliver() call.

In API version 43.0 or later, you can check these new EventBusSubscriber fields to test retried triggers.

-   Retries
-   LastError

The EventBusSubscriber.Retries field indicates how many times a trigger was retried.

EventBusSubscriber.LastError indicates the error message that was passed to the throw statement that executed last (throw new EventBus.RetryableException('Error Message')).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

When EventBus.RetryableException is thrown, EventBusSubscriber.Position isn’t incremented because the trigger didn’t successfully process the event message.

## Example

This test method delivers a test event message that fires a trigger. The associated event trigger throws EventBus.RetryableException twice. The test verifies that the trigger was retried twice by querying EventBusSubscriber and checking the Retries field value.

Before you can run this test class, define a platform event with the name of Order\_Event\_\_e and the following fields: Order\_Number\_\_c of type Text and Has\_Shipped\_\_c of type Checkbox. This test class assumes there is an associated trigger called OrderTriggerRetry that retries the event. The trigger is not provided in this example.

```

```

#### See Also

-   [Retry Event Triggers with EventBus.RetryableException](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_refire.htm "Get another chance to process event notifications. Retrying a trigger is helpful when a transient error occurs or when waiting for a condition to change. Retry a trigger if the error or condition is external to the event records and is likely to go away later.")

## Code Examples

```apex
@isTest
public class MyTestClassRetryDoc {

    @isTest static void doSomeTesting() {

        Test.startTest();
        
        // Publish a test event
        Order_Event__e event = new Order_Event__e(
              Order_Number__c='12345', Has_Shipped__c=true);
        Database.SaveResult sr = EventBus.publish(event);
        // Deliver the initial event message.
        // This will fire the associated event trigger.
        Test.getEventBus().deliver(); 
        
        // Trigger retries event twice, so loop twice               
        for(Integer i=0;i<2;i++) {                           
            // Get info about all subscribers to the event
            EventBusSubscriber[] subscribers = 
                [SELECT Name, Type, Position, Retries, LastError 
                 FROM EventBusSubscriber WHERE Topic='Order_Event__e'];
            
            for (EventBusSubscriber sub : subscribers) {  
                System.debug('sub.Retries=' + sub.Retries);
                System.debug('sub.lastError=' + sub.lastError);
                if (sub.Name == 'OrderTriggerRetry') {
                    System.assertEquals(i+1, sub.Retries);
                } 
            }
            
            // Deliver the retried event
            Test.getEventBus().deliver(); 
        }
        
        Test.stopTest();    

    }
}
```

## Related Topics

- Retry Event Triggers with EventBus.RetryableException (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_refire.htm)
