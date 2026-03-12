---
title: "Apex Trigger Best Practices"
domain: platform-events
topic: apex-trigger-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:28.173Z
estimatedTokens: 1614
keywords: [Apex, Trigger, Best, Practices, Inefficient, platform, event, triggers, cause, processing, rate, keep, publishing, sure, run]
---

# Apex Trigger Best Practices

> Inefficient Apex platform event triggers cause the trigger event processing rate to not
    keep up with the event publishing rate. To make sure that your triggers run efficiently and
    avoid delays in event processing, use best practices for writing and configuring your
    triggers.

# Apex Trigger Best Practices

Inefficient Apex platform event triggers cause the trigger event processing rate to not keep up with the event publishing rate. To make sure that your triggers run efficiently and avoid delays in event processing, use best practices for writing and configuring your triggers.

Consider one of these tips depending on the trigger conditions.

| Condition | Recommendation |
| --- | --- |
| The trigger batch size is small and the event publishing rate is high. | Fine-Tuning the Trigger Batch Size |
| The trigger batch size is okay, but the trigger doesn’t catch up with the event publishing rate. | Apex Code Best Practices for Platform Event Triggers |
| The trigger code is efficient and batch size is okay, but the trigger doesn’t catch up with the event publishing rate. | Using Parallel Subscriptions |

## Fine-Tuning the Trigger Batch Size

The trigger batch size depends on the event publishing rate and the trigger’s business logic. We recommend that you choose the largest batch size that enables the trigger to keep up with the event publishing rate and stay within Apex governor limits. Reducing the trigger batch size when the event publishing rate is high can slow down event processing. Slow event processing causes a lag between published events and processed events. If the trigger batch size is lower than the default, try increasing it to help the trigger process higher volumes of events and catch up with the event publishing rate.

To change the batch size, see [Adjust the Platform Event Trigger Batch Size](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging/adjust-platform-event-trigger-batch-size) in Trailhead. After changing the batch size, validate it in a test environment and make sure that the trigger runs efficiently with no issues.

## Apex Code Best Practices for Platform Event Triggers

Check out these best practices for writing performant Apex triggers that subscribe to platform events and change events and reduce trigger execution time.

## Bulkification of Apex Triggers

Consider bulkifying SOQL and DML operations in Apex triggers. See [Bulk Apex Triggers](https://trailhead.salesforce.com/content/learn/modules/apex_triggers/apex_triggers_bulk) in Trailhead and [Trigger and Bulk Request Best Practices](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers_bestpract.htm) in the Apex Developer Guide.

## Record Locking and Contention

Sometimes multiple processes try to get exclusive locks to the same records when performing DML operations on the records. This behavior can happen when using parallel subscriptions based on the partition key selected. To void record locks and contention when using parallel subscriptions, see [Choosing a Partition Key](atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm "Which event field you choose for the partition key depends on whether you want to maximize the trigger’s performance or whether the order of event processing is important.").

## Caching Data with Platform Cache

If the trigger fetches record data through repetitive queries and the data doesn’t change between trigger executions, consider using Platform Cache to cache the data. Retrieving cached data instead of querying data every time improves the trigger’s throughput. See [Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm) in the Apex Developer Guide.

## Resilient Platform Event Triggers

Write Apex triggers that are resilient to errors and resume after exceptions, such as limit exceptions or uncaught exceptions, occur during event processing. See [Apply Best Practices for Writing Platform Event Triggers](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging/apply-best-practices-writing-platform-triggers) in the [Platform Events Debugging](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging) module in Trailhead.

## Automation Triggered by Record Changes

Downstream operations that are triggered by a Salesforce record change can result in longer trigger execution times. For example, an account record update can trigger a flow or an object trigger to start. Make sure that the downstream operations don’t slow down the trigger execution.

## Apex Code Analysis

Use AI and machine learning models to scan Apex code and get code recommendations. See [ApexGuru](https://trailhead.salesforce.com/content/learn/modules/apexguru) in Trailhead.

## Using Parallel Subscriptions

Use parallel subscriptions if your event publishing rate is high and you’ve implemented best practices for trigger batch size and efficient trigger code but the trigger processing rate is still slow. To speed up trigger execution, configure parallel subscriptions so that the trigger runs in simultaneous parallel executions. Parallel subscriptions apply only to triggers that are subscribed to custom high-volume platform events. See [Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers](atlas.en-us.platform_events.meta/platform_events/platform_events_ps.htm "To speed up platform event processing in an Apex trigger, use parallel subscriptions to process events simultaneously instead of in a single stream. With parallel subscriptions, you can scale your Apex platform event triggers to handle high volumes of events. Parallel subscriptions are available for custom high-volume platform events but not for standard events or change events.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_events)

#### Important

When you configure parallel subscriptions, for the best performance and to avoid record contention and locking, it’s important that you choose the right partition key for your implementation. See [Choosing a Partition Key](atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm "Which event field you choose for the partition key depends on whether you want to maximize the trigger’s performance or whether the order of event processing is important.").

#### See Also

-   [*Apex Developer Guide*: Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "Apex Developer Guide: Execution Governors and Limits - HTML (New Window)")

## Related Topics

- Choosing a Partition Key (atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm)
- Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers (atlas.en-us.platform_events.meta/platform_events/platform_events_ps.htm)
