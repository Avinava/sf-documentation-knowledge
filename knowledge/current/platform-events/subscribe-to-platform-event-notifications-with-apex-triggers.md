---
title: "Subscribe to Platform Event Notifications with Apex
    Triggers"
domain: platform-events
topic: subscribe-to-platform-event-notifications-with-apex-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.096Z
estimatedTokens: 3101
keywords: [Subscribe, Platform, Event, Notifications, Apex, Triggers, events, receive, regardless, how, they, were, published—through, APIs, provide]
---

# Subscribe to Platform Event Notifications with Apex
    Triggers

> Use Apex triggers to subscribe to events. You can receive event
      notifications in triggers regardless of how they were published—through Apex or APIs. Triggers
      provide an autosubscription mechanism. No need to explicitly create and listen to a channel in
      Apex.

# Subscribe to Platform Event Notifications with Apex Triggers

Use Apex triggers to subscribe to events. You can receive event notifications in triggers regardless of how they were published—through Apex or APIs. Triggers provide an autosubscription mechanism. No need to explicitly create and listen to a channel in Apex.

To subscribe to event notifications, write an after insert trigger on the event object type. The after insert trigger event corresponds to the time after a platform event is published. After an event message is published, the after insert trigger is fired.

## Example

This example shows a trigger for the Low Ink event. It iterates through each event and checks the Printer\_Model\_\_c field value. The trigger inspects each received notification and gets the printer model from the notification. If the printer model matches a certain value, other business logic is executed. For example, the trigger creates a case to order a new cartridge for this printer model.

```

```

An Apex trigger processes platform event notifications sequentially in the order they’re received. The order of events is based on the event replay ID. An Apex trigger can receive a batch of events at once. The maximum batch size in a platform event trigger is 2,000 event messages. The order of events is preserved within each batch. The events in a batch can originate from one or more publishers.

Unlike triggers on standard or custom objects, triggers on platform events don’t execute in the same Apex transaction as the one that published the event. The trigger runs asynchronously in its own process. As a result, there can be a delay between when an event is published and when the trigger processes the event.

The trigger runs under the Automated Process entity or the user you select in the trigger configuration. If no user is configured, debug logs corresponding to the trigger execution are created by Automated Process. System fields, such as CreatedById and LastModifiedById, reference the Automated Process entity. You can override the trigger's default running user so that the user for debug logs and records is set to the selected user. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The OwnerId field of records saved in the trigger is set to the trigger's running user. By default, it’s Automated Process. For more information on how to change the OwnerId, see [Considerations for Publishing and Subscribing to Platform Events with Apex and APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm "Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.").

Event triggers have many of the same limitations of custom and standard object triggers. For example, with some exceptions, you generally can’t make Apex callouts from triggers. For more information, see [Implementation Considerations for triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers.htm) in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/).

## Platform Event Triggers and Uncaught Exceptions

If an uncaught exception occurs during trigger execution, the trigger stops executing and doesn't process the remaining event messages in the current batch. Uncaught exceptions are exceptions that the trigger doesn't handle in a catch block or limit exceptions. As long as the trigger hasn’t exceeded the Apex execution-time limit, the DML operations that were carried out before the uncaught exception are committed and aren't rolled back. Committing the DML transactions enables you to use the setResumeCheckpoint() method to continue trigger execution from where it left off. With this method, the trigger resumes and picks up the unprocessed event messages from the previous batch. For more information, see [Resume a Platform Event Trigger After an Uncaught Exception](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_batch_resume.htm "Set a checkpoint in the event stream for where the platform event trigger resumes execution in a new invocation. If an Apex governor limit is hit or another uncaught exception is thrown, the checkpoint is used during the next execution of the trigger. Trigger processing resumes after the last successfully checkpointed event message. You can also set a checkpoint to explicitly control the number of events processed in one trigger execution. However, you can configure the trigger batch size more easily by using Metadata API or Tooling API. For more information, see Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig.").

DML transactions are rolled back only when:

-   The trigger throws the EventBus.RetryableException.
-   The trigger exceeds the Apex execution-time limit of 10 minutes. See Maximum execution time for each Apex transaction in [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm) in the Apex Developer Guide.

## Platform Event Triggers and Apex Governor Limits

Platform event triggers are subject to Apex governor limits.

Synchronous Governor Limits

When governor limits are different for synchronous and asynchronous Apex, the synchronous limits apply to platform event triggers. Asynchronous limits are for long-lived processes, such as Batch Apex and future methods. Synchronous limits are for short-lived processes that execute quickly. Although platform event triggers run asynchronously, they’re short-lived processes that execute in batches rather quickly.

Reset Limits

Because a platform event trigger runs in a separate transaction from the one that fired it, governor limits are reset, and the trigger gets its own set of limits.

-   **[Apex Trigger Best Practices](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_reco.htm)**
    Inefficient Apex platform event triggers cause the trigger event processing rate to not keep up with the event publishing rate. To make sure that your triggers run efficiently and avoid delays in event processing, use best practices for writing and configuring your triggers.
-   **[Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers](atlas.en-us.platform_events.meta/platform_events/platform_events_ps.htm)**
    To speed up platform event processing in an Apex trigger, use parallel subscriptions to process events simultaneously instead of in a single stream. With parallel subscriptions, you can scale your Apex platform event triggers to handle high volumes of events. Parallel subscriptions are available for custom high-volume platform events but not for standard events or change events.
-   **[Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm)**
    You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.
-   **[Find Uncaught Exceptions in Event Log Files](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_exception_log.htm)**
    If an unhandled exception occurs during the execution of your platform event Apex trigger, you can get information about the exception using event log files in Event Monitoring. Examples of an unhandled exception include an uncatchable limit exception or an exception that the trigger doesn’t catch.
-   **[Resume a Platform Event Trigger After an Uncaught Exception](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_batch_resume.htm)**
    Set a checkpoint in the event stream for where the platform event trigger resumes execution in a new invocation. If an Apex governor limit is hit or another uncaught exception is thrown, the checkpoint is used during the next execution of the trigger. Trigger processing resumes after the last successfully checkpointed event message. You can also set a checkpoint to explicitly control the number of events processed in one trigger execution. However, you can configure the trigger batch size more easily by using Metadata API or Tooling API. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.").
-   **[Retry Event Triggers with EventBus.RetryableException](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_refire.htm)**
    Get another chance to process event notifications. Retrying a trigger is helpful when a transient error occurs or when waiting for a condition to change. Retry a trigger if the error or condition is external to the event records and is likely to go away later.
-   **[Email Notifications for Triggers in Error State](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_email_notifications.htm)**
    When an Apex platform event trigger exceeds the maximum number of retries and is in the error state, you’re notified by email. When the trigger subscriber reaches the error state, it disconnects and stops receiving published events.
-   **[Comparing setResumeCheckpoint() and and EventBus.RetryableException](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_compare_checkpoint_retryable.htm)**
    Determine which method is most suitable for resuming a platform event trigger.

#### See Also

-   [*Apex Developer Guide*: Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm " Apex Developer Guide: Execution Governors and Limits - HTML (New Window)")

-   [Set Up Debug Logs for Event Subscriptions](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm "Debug logs for platform event triggers, event processes, and resumed flow interviews are created by Automated Process and are separate from their corresponding Apex code logs. For a platform event trigger with an overridden running user, debug logs are created by the specified user. The debug logs aren’t available in the Developer Console’s Log tab.")

-   [View and Manage an Event’s Subscribers on the Platform Event’s Detail Page](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm "View the triggers, flows, and processes that are subscribed to a platform event in the Subscriptions related list. Manage subscriptions for Apex triggers.")

-   [Considerations for Publishing and Subscribing to Platform Events with Apex and APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm "Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.")

## Code Examples

```apex
// Trigger for catching Low_Ink events.
trigger LowInkTrigger on Low_Ink__e (after insert) {    
    // List to hold all cases to be created.
    List<Case> cases = new List<Case>();
    
    // Get user Id for case owner. Replace username value with a valid value.
    User adminUser = [SELECT Id FROM User WHERE Username='admin@acme.org'];
       
    // Iterate through each notification.
    for (Low_Ink__e event : Trigger.New) {
        System.debug('Printer model: ' + event.Printer_Model__c);
        if (event.Printer_Model__c == 'MN-123') {
            // Create Case to order new printer cartridge.
            Case cs = new Case();
            cs.Priority = 'Medium';
            cs.Subject = 'Order new ink cartridge for SN ' + event.Serial_Number__c;
            // Optional: Set case owner ID so it is not Automated Process.
            // This step is not needed if the running user is overridden 
            // or if using assignment rules.
            cs.OwnerId = adminUser.Id;
            cases.add(cs);
        }
    }
    
    // Insert all cases in the list.
    if (cases.size() > 0) {
        insert cases;
    }
}
```

## Related Topics

- Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig (atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm)
- Considerations for Publishing and Subscribing to Platform Events with Apex and APIs (atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm)
- Resume a Platform Event Trigger After an Uncaught Exception (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_batch_resume.htm)
- Apex Trigger Best Practices (atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_reco.htm)
- Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers (atlas.en-us.platform_events.meta/platform_events/platform_events_ps.htm)
- Find Uncaught Exceptions in Event Log Files (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_exception_log.htm)
- Retry Event Triggers with EventBus.RetryableException (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_refire.htm)
- Email Notifications for Triggers in Error State (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex_email_notifications.htm)
- Comparing setResumeCheckpoint() and and EventBus.RetryableException (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_compare_checkpoint_retryable.htm)
- Set Up Debug Logs for Event Subscriptions (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm)
