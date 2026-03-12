---
title: "Apex Trigger Repartitioning"
domain: platform-events
topic: apex-trigger-repartitioning
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.942Z
estimatedTokens: 526
keywords: [Apex, Trigger, Repartitioning, repartition, already, configured, parallel, subscriptions, PlatformEventSubscriberConfig, Tooling, API, Metadata]
---

# Apex Trigger Repartitioning

> To repartition an Apex trigger that is already configured with parallel subscriptions,
  update the existing PlatformEventSubscriberConfig in Tooling API or Metadata API.

# Apex Trigger Repartitioning

To repartition an Apex trigger that is already configured with parallel subscriptions, update the existing PlatformEventSubscriberConfig in Tooling API or Metadata API.

After a trigger's parallel subscription configuration is modified, new partitions are created. The system keeps the old partitions until it finishes processing the remaining events in those partitions. After all the events are processed, the old partitions are deleted and only the new partitions run.

To update PlatformEventSubscriberConfig in Tooling API, make a PATCH request to this URI with the record ID appended:

```

```

For information about the request body to send for PlatformEventSubscriberConfig, see [Configure Parallel Subscriptions for an Apex Trigger](atlas.en-us.platform_events.meta/platform_events/platform_events_ps_task.htm#platform_events_ps_task "Referencing this multiple-step example, configure an Apex trigger with three partitions and a custom field partition key. Then verify the trigger parallel subscriptions in Setup.").

In Metadata API, you can redeploy the PlatformEventSubscriberConfig component by using the same developer name and different values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

No new repartitioning can start while another one is in progress. Sometimes, after repartitioning is initiated, it can take longer for the system to finish processing events in the old partitions and delete those partitions while new partitions are processing new events. What can cause the delay in event processing in the old partitions is when event processing in the Apex trigger is slow and a large volume of events is published. Another cause for this behavior is that partitioning depends on event-publish activity in the event bus, which is shared with other Salesforce orgs. If there’s no publish activity from any org, the old partitions don't process events and become stagnant. However, this case is rare because it’s unlikely that no org publishes platform events for an extended time period.

## Code Examples

```
/services/data/v66.0/tooling/sobjects/PlatformEventSubscriberConfig/record_ID
```

## Related Topics

- Configure Parallel Subscriptions for an Apex Trigger (atlas.en-us.platform_events.meta/platform_events/platform_events_ps_task.htm)
