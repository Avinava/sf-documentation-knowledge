---
title: "Considerations for Publishing and Subscribing to Platform Events with Apex and APIs"
domain: platform-events
topic: considerations-for-publishing-and-subscribing-to-platform-events-with-apex-and-a
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.703Z
estimatedTokens: 2287
keywords: [Considerations, Publishing, Subscribing, Platform, Events, Apex, APIs, Salesforce, publish, subscribe, familiarize, yourself]
---

# Considerations for Publishing and Subscribing to Platform Events with Apex and APIs

> Before you use Apex or Salesforce APIs to publish and subscribe to
      platform events, familiarize yourself with these considerations.

# Considerations for Publishing and Subscribing to Platform Events with Apex and APIs

Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.

Support Only for after insert Triggers

Only after insert triggers are supported for platform events because event notifications can’t be updated. They’re only inserted (published).

Infinite Trigger Loop and Limits

Be careful when publishing events from triggers because you could get into an infinite trigger loop and exceed limits. For example, if you publish an event from a trigger that’s associated with the same event object, the trigger is fired in an infinite loop.

Publishing Events in Apex with Text Fields Set to Empty Strings

If you publish an event in Apex with a Text field set to an empty string, the field value in the delivered event message is null instead of empty string. The Text field value of empty string is preserved when publishing through other methods, including APIs, flows, and processes.

Platform Event Triggers: OwnerId Fields of New Records

In platform event triggers, if you create a Salesforce record that contains an ownerId field, the system populates the field with Automated Process by default. To set this field to another value, you can configure the trigger to run as another user. That way, the OwnerId field references the selected user. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger."). Alternatively, if you don’t change the running user, you can set the ownerId field explicitly to the appropriate user when you create the record. This example explicitly populates the ownerId field for an opportunity with an ID obtained from another record.

```

```

For cases and leads, you can alternatively use assignment rules for setting the owner. For more information, see [AssignmentRuleHeader](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_assignmentruleheader.htm "HTML (New Window)") for SOAP API or [Setting DML Options](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_dml_database_dmloptions.htm "HTML (New Window)") for Apex.

Platform Event Triggers: Changing the Opportunity OwnerId Field

If a platform event trigger updates the opportunity OwnerId field when opportunity splits are enabled, the trigger runs as the default Automated Process system user. A set of opportunity splits is created that totals 0%. The 0% split is invalid and must be 100% when an opportunity owner is changed. The 0% split causes validation errors when users attempt to update some opportunity fields, such as the Amount and Owner fields. To avoid these issues, configure the platform event trigger so that it runs as a different user. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.")

No Email Support from a Platform Event Trigger

With the default Automated Process running user, sending an email message from a platform event trigger using the Messaging.SingleEmailMessage class isn’t supported. The email can’t be sent because the sender is the Automated Process entity, which has no email address. To send an email, change the running user of the trigger. For more information, see [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm "You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.").

Replaying Past Events

You can replay platform events that were sent in the past. You can replay platform events through Pub/Sub API or Streaming API (CometD) but not Apex and other subscribers. For more information, see these resources.

-   [Java Quick Start](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start-parent.html) in the Pub/Sub API Developer Guide.
-   [Event Message Durability](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-message-durability.html) in the Pub/Sub API Developer Guide.

Salesforce Maintenance Activities and Sandbox Refresh

On rare occasions, some Salesforce maintenance activities, such as an org migration to a new data center or an instance refresh, reset the stream of retained high-volume platform events. Also, a sandbox refresh can cause a move to another Salesforce instance, resulting in a stream reset. Because of the stream reset, the events are no longer available for replay. Also, the Replay ID of events published before the maintenance or sandbox refresh activity has no relation to the Replay ID of events after the activity. For more information, see [How to Prepare for an Org Migration](https://help.salesforce.com/s/articleView?id=000334938&type=1&language=en_US "HTML (New Window)"), [Instance Refresh Maintenance](https://help.salesforce.com/s/articleView?id=000335655&type=1&language=en_US "HTML (New Window)"), and [Refresh Your Sandbox](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_refresh.htm&type=5&language=en_US) in Salesforce Help.

Site switches don’t affect the stream of retained events for subscribers, including Pub/Sub API, Streaming API, empApi Lightning components, Apex triggers, event relays, and flows. However, Apex triggers that are used as parallel subscriptions are affected if the trigger lags behind and hasn’t finished processing all events when the site switch occurs. In this case, the Apex trigger can’t continue processing unprocessed events from before the site switch. The parallel subscriptions resume from events newly published after the site switch. See [Site Switching Overview and FAQ](https://help.salesforce.com/s/articleView?id=000387541&type=1&language=en_US).

Using MuleSoft’s Salesforce Connector after a Hyperforce Migration or Sandbox Refresh

When a Salesforce instance is migrated to Hyperforce, the migration can result in an invalid Replay ID error in the Mule app. Also, performing a sandbox refresh can cause a move to another Salesforce instance, resulting in an invalid Replay ID error in the Mule app. The error can be returned if the Mule app tries to access a Replay ID from the object store that’s no longer valid on the new Hyperforce instance. See the knowledge article about [steps to take to avoid the error](https://help.salesforce.com/s/articleView?id=001117442&type=1&language=en_US).

Millisecond Time Precision in DateTime Fields

For event messages delivered to CometD clients in JSON format, the DateTime fields include the number of milliseconds. The date format, which is in the ISO 8601 standard, is YYYY-MM-DDTHH:mm:ss.sssZ. In API version 42.0 and earlier, DateTime fields don’t include the millisecond part of the time, and the DateTime format is YYYY-MM-DDTHH:mm:ssZ.

For event messages delivered to Apex triggers, DateTime fields don’t include millisecond precision, like DateTime fields of Salesforce objects.

Apex Trigger Subscriptions Disabled in Inactive Salesforce Orgs

If an org becomes inactive, all Apex trigger subscriptions are stopped and disabled. Triggers no longer process incoming event messages and can't process missed event messages. After the org is reactivated, new Apex trigger subscriptions are started when a platform event message is published.

#### See Also

-   [Platform Event Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_event_limits "Learn about the allocations available for platform event definitions, publishing and subscribing to platform events, and event delivery in Pub/Sub API clients, CometD clients, empApi Lightning components, and event relays.")

## Code Examples

```
Opportunity newOpp = new Opportunity(
    OwnerId = customerOrder.createdById,
    AccountId = acc.Id, 
    StageName = 'Qualification', 
    Name = 'A ' + customerOrder.Product_Name__c + ' opportunity for ' + acc.name, 
    CloseDate = Date.today().addDays(7));
```

## Related Topics

- Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig (atlas.en-us.platform_events.meta/platform_events/platform_events_trigger_config.htm)
- Platform Event Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
