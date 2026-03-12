---
title: "Testing an Apex Trigger Configured with Parallel Subscriptions"
domain: platform-events
topic: testing-an-apex-trigger-configured-with-parallel-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.993Z
estimatedTokens: 335
keywords: [Testing, Apex, Trigger, Configured, Parallel, Subscriptions, test, platform, event, that’s, way, regular]
---

# Testing an Apex Trigger Configured with Parallel Subscriptions

> You can test an Apex platform event trigger that’s configured with parallel
  subscriptions the same way that you test a regular Apex platform event trigger.

# Testing an Apex Trigger Configured with Parallel Subscriptions

You can test an Apex platform event trigger that’s configured with parallel subscriptions the same way that you test a regular Apex platform event trigger.

See [Testing Your Platform Event in Apex](atlas.en-us.platform_events.meta/platform_events/platform_event_apex_tests.htm "Add Apex tests to test platform event subscribers. Before you can package or deploy Apex code, including triggers, to production, it must have tests and sufficient code coverage. Add Apex tests to provide code coverage for your triggers.").

To verify that a trigger is configured for parallel subscriptions, run a query on EventBusSubscriber and select the IsPartitioned field. A value of true means that the trigger uses parallel subscriptions.

This example shows a sample query that gets all Apex trigger subscribers that are subscribed to the Order\_Event\_\_e platform event. The IsPartitioned field is one of the fields returned.

```

```

Sample query result:

ExternalID

01qZ70000008PWi

Name

MyOrderEventTrigger

Position

179

Status

Running

IsPartitioned

true

See [EventBusSubscriber](https://developer.salesforce.com/docs/atlas.en-us.250.0.object_reference.meta/object_reference/sforce_api_objects_eventbussubscriber.htm) in the Object Reference for the Salesforce Platform.

## Code Examples

```
SELECT ExternalId, Name, Position, Status, IsPartitioned FROM EventBusSubscriber 
WHERE Topic='Order_Event__e' AND Type='ApexTrigger'
```

## Related Topics

- Testing Your Platform Event in Apex (atlas.en-us.platform_events.meta/platform_events/platform_event_apex_tests.htm)
