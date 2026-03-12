---
title: "Resume a Platform Event Trigger After an Uncaught
    Exception"
domain: platform-events
topic: resume-a-platform-event-trigger-after-an-uncaught-exception
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.110Z
estimatedTokens: 1400
keywords: [Resume, Platform, Event, Trigger, Uncaught, Exception, checkpoint, stream, resumes, execution, new, invocation, Apex, governor, limit]
---

# Resume a Platform Event Trigger After an Uncaught
    Exception

> Set a checkpoint in the event stream for where the platform event
      trigger resumes execution in a new invocation. If an Apex governor limit is hit or another
      uncaught exception is thrown, the checkpoint is used during the next execution of the trigger.
      Trigger processing resumes after the last successfully checkpointed event message. You can
      also set a checkpoint to explicitly control the number of events processed in one trigger
      execution. However, you can configure the trigger batch size more easily by using Metadata API
      or Tooling API. For more information, see Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig.

# Resume a Platform Event Trigger After an Uncaught Exception

Set a checkpoint in the event stream for where the platform event trigger resumes execution in a new invocation. If an Apex governor limit is hit or another uncaught exception is thrown, the checkpoint is used during the next execution of the trigger. Trigger processing resumes after the last successfully checkpointed event message. You can also set a checkpoint to explicitly control the number of events processed in one trigger execution. However, you can configure the trigger batch size more easily by using Metadata API or Tooling API. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.").

By processing fewer event messages, your trigger is less likely to hit Apex governor limits. The maximum batch size of a platform event trigger is 2,000, while the maximum of an Apex object trigger is 200. Therefore, platform event triggers are more likely to reach limits and can benefit from this feature.

To set a checkpoint for trigger resumption, set the replay ID of the last successfully processed event message using this method call.

```

```

When the trigger stops its flow of execution, either intentionally or because of an unhandled exception, such as a limit exception, it fires again with a new batch (the sObject list in Trigger.New). The new batch starts with the event message after the one with the replay ID that you set. The events are resent in their original order based on the ReplayID field values, which are unchanged. The trigger processes the resent events and later batches sequentially. The setResumeCheckpoint(replayId) method doesn’t cause the trigger execution to stop, but you can end the execution explicitly. For example, to control the batch size, end the execution flow after some event messages are processed.

If the supplied Replay ID isn’t valid, the method throws an EventBus.InvalidReplayIdException. An invalid Replay ID is a replay ID that isn’t in the current trigger batch of events in the Trigger.new list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Resuming a batch in one trigger doesn’t affect another trigger on the same event object. However, having multiple triggers on the same object isn’t a best practice because we can’t guarantee the order of execution, so we recommend that you add only one trigger per object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

For best practices and more code examples, see "Apply Best Practices for Writing Platform Event Triggers" in the [Platform Events Debugging](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging) Trailhead module.

## Example

This example trigger sets the replay ID of the last processed event message in each iteration. If a limit exception occurs, the trigger is fired again and resumes processing starting with the event message after the one with the set replay ID.

```

```

## Example

This example controls the platform event trigger batch size and matches it with the 200 batch size of Apex object triggers. The trigger counts the number of event messages processed. The setResumeCheckpoint(replayId) is called in each iteration of the loop after each event message that is successfully processed. The loop is exited if you exceed the count of 200 events, and the trigger stops execution. If you have unprocessed event messages, the trigger fires again. The list of event messages sent to the new trigger invocation starts with the event message after the one with the set replay ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Starting in API version 51.0, you can configure the trigger batch size by using PlatformEventSubscriberConfig in Metadata API or Tooling API. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.").

```

```

The TestBatchSizeTriggerResumption test class contains a test for the ControlBatchSizeTrigger. The test method in the class publishes 201 event messages. Next, it calls the deliver() method twice to fire the trigger twice. The first invocation processes 200 event messages. The second invocation processes the last event message. The test verifies that the trigger was invoked by inspecting the EventBusSubscriber.Position property, which holds the replay ID of the last processed event message.

```

```

## Code Examples

```
EventBus.TriggerContext.currentContext().setResumeCheckpoint(replayId);
```

```
trigger ResumeEventProcessingTrigger on Low_Ink__e (after insert) {
    for (Low_Ink__e event : Trigger.New) {
        // Process the event message. 
        // ...        
        
        // Set the Replay ID of the last successfully processed event message. 
        // If a limit is hit, the trigger refires and processing starts with the 
        // event after the last one processed (the set Replay ID).
        EventBus.TriggerContext.currentContext().setResumeCheckpoint(event.replayId);
    }
}
```

```
trigger ControlBatchSizeTrigger on Low_Ink__e (after insert) {
    Integer counter = 0;
    for (Low_Ink__e event : Trigger.New) {
      // Increase batch counter.
      counter++;
      // Only process the first 200 event messages
      if (counter > 200) {
        // Resume after the last successfully processed event message
        // after the trigger stops running. 
        // Exit for loop.
        break;
      }

      // Process event message.
      // ....

      // Set Replay ID after which to resume event processing 
      // in new trigger execution.
      EventBus.TriggerContext.currentContext().setResumeCheckpoint(
          event.ReplayId);
    }
}
```

```apex
@isTest
public class TestBatchSizeTriggerResumption {

    @isTest static void testResumingBatchSizeTrigger() {

        Test.startTest();
        
        // Publish 201 test events
        List<Low_Ink__e> eventList = new List<Low_Ink__e>();
        for(Integer i=0;i<201;i++) {
            Low_Ink__e oneEvent = new Low_Ink__e(Serial_Number__c='X-' + i);
            eventList.add(oneEvent);
        }
        Database.SaveResult[] srs = EventBus.publish(eventList);
        for(Database.SaveResult sr : srs) {
            System.assertEquals(true, sr.isSuccess());
        }

        
        // Deliver the first 200 test event messages.
        // This will fire the associated event trigger.
        Test.getEventBus().deliver(); 
        
        // Get old position of this subscriber
        EventBusSubscriber subOld = 
            [SELECT Name, Position, Topic 
             FROM EventBusSubscriber 
             WHERE Topic='Low_Ink__e' AND Name='ControlBatchSizeTrigger'];
        System.debug(subOld);
        
        // Refire the trigger for the last event (201st).    
        Test.getEventBus().deliver(); 
        
        // VERIFICATION
        // Get new position of this subscriber
        EventBusSubscriber subNew = 
            [SELECT Name, Position, Topic
             FROM EventBusSubscriber 
             WHERE Topic='Low_Ink__e' AND Name='ControlBatchSizeTrigger'];
        System.debug(subNew);
                
        System.assertEquals(subOld.Position + 1, subNew.Position);
        
        Test.stopTest();    

    }
}
```

## Related Topics

- Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig (atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm)
