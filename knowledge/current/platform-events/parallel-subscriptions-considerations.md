---
title: "Parallel Subscriptions Considerations"
domain: platform-events
topic: parallel-subscriptions-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.934Z
estimatedTokens: 626
keywords: [Parallel, Subscriptions, Considerations, Keep, mind, Active, Apex, Trigger, Deactivating, deleting, PlatformEventSubscriberConfig, Modifying, platformEventConsumer, event, EventUuid]
---

# Parallel Subscriptions Considerations

> Keep in mind these considerations about parallel subscriptions.

# Parallel Subscriptions Considerations

Keep in mind these considerations about parallel subscriptions.

## Active Apex Trigger

You can configure only an active Apex trigger for parallel subscriptions. If you try to configure an inactive trigger, you get an error.

## Deactivating an Apex trigger or deleting PlatformEventSubscriberConfig

If you deactivate an Apex trigger or delete its corresponding PlatformEventSubscriberConfig component, the trigger's parallel subscriptions are deleted. The original subscription is resumed, starting from the earliest Replay ID that one of the parallel subscriptions last processed. As a result, some events can be processed more than once. See "ReplayId System Field" in [Platform Event Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_define_ui.htm).

## Modifying the platformEventConsumer field

You can't modify the platformEventConsumer field in a PlatformEventSubscriberConfig of a trigger that’s configured with parallel subscriptions. To set up parallel subscriptions on another trigger, remove the parallel subscriptions by updating numPartitions to 1 in PlatformEventSubscriberConfig. After the trigger has finished repartitioning, make a separate update to change the platformEventConsumer and numPartitions fields.

We don't recommend deleting and recreating PlatformEventSubscriberConfig because it can result in duplicate event processing.

## Deleting an event field

You can't delete a platform event custom field that’s referenced as a partition key in an active Apex trigger.

## EventUuid as the default partition key due to corrupt schema

If the system can't resolve a custom partition key field due to a corrupt schema, it uses the EventUuid field to partition incoming event batches. This can result in out-of-order events delivered to partitions, because the hash value of the EventUuid field is probably different than the one for the custom partition key field. In later event batches, the system reverts to the partition key field if the schema is resolved and it can get the partition key value.

## Changing the Partition Key Field to Be Optional

If the partition key field is edited to no longer be a required field after the parallel subscriptions feature is enabled for a trigger, the system can't guarantee deterministic distribution of events to the partitions. When you configure parallel subscriptions, the partition key field must be a required field.
