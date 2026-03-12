---
title: "Testing Your Platform Event in Apex"
domain: platform-events
topic: testing-your-platform-event-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.668Z
estimatedTokens: 388
keywords: [Testing, Platform, Event, Apex, Add, tests, test, subscribers, package, deploy, code, including, triggers, production, sufficient]
---

# Testing Your Platform Event in Apex

> Add Apex tests to test platform event subscribers. Before you can package or deploy
    Apex code, including triggers, to production, it must have tests and sufficient code coverage.
    Add Apex tests to provide code coverage for your triggers.

# Testing Your Platform Event in Apex

Add Apex tests to test platform event subscribers. Before you can package or deploy Apex code, including triggers, to production, it must have tests and sufficient code coverage. Add Apex tests to provide code coverage for your triggers.

-   **[Event and Event Bus Properties in Test Context](atlas.en-us.platform_events.meta/platform_events/platform_events_test_events.htm)**
    In test context, event messages and the event bus have different properties. State information of events and subscribers is reset and isn’t persisted.
-   **[Deliver Test Event Messages](atlas.en-us.platform_events.meta/platform_events/platform_events_test_deliver.htm)**
    Deliver test event messages after the Test.stopTest() statement. Alternatively, deliver test event messages at any time with the Test.getEventBus().deliver() method. Fail test event messages with the Test.getEventBus().fail() method.
-   **[Test Retried Event Messages](atlas.en-us.platform_events.meta/platform_events/platform_events_test_retry.htm)**
    An Apex trigger can retry processing of an event message by throwing EventBus.RetryableException. In API version 43.0 and later, you can test retried event messages by calling Test.EventBus.deliver() and inspecting EventBusSubscriber fields.

#### See Also

-   [*Apex Developer Guide* : Testing and Code Coverage](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_code_coverage_intro.htm " Apex Developer Guide : Testing and Code Coverage - HTML (New Window)")

## Related Topics

- Event and Event Bus Properties in Test Context (atlas.en-us.platform_events.meta/platform_events/platform_events_test_events.htm)
- Deliver Test Event Messages (atlas.en-us.platform_events.meta/platform_events/platform_events_test_deliver.htm)
- Test Retried Event Messages (atlas.en-us.platform_events.meta/platform_events/platform_events_test_retry.htm)
