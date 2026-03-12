---
title: "TestBroker Class"
domain: apex-reference
topic: testbroker-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.527Z
estimatedTokens: 543
namespace: EventBus
keywords: [TestBroker, Contains, simulate, successful, delivery, failed, publishing, platform, event, change, messages, Apex, test., deliver, Usage, fail]
---

# TestBroker Class

> Contains methods that simulate the successful delivery or failed
      publishing of platform event or change event messages in an Apex test.

**Namespace:** `EventBus`

# TestBroker Class

Contains methods that simulate the successful delivery or failed publishing of platform event or change event messages in an Apex test.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

-   **[TestBroker Methods](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_eventbus_TestBroker_methods)**


## TestBroker Methods

The following are methods for TestBroker.

-   **[deliver()](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_eventbus_TestBroker_deliver)**
    Delivers platform event messages to the test event bus. Use this method to deliver test event messages multiple times and verify that event subscribers have processed the test events each step of the way.
-   **[fail()](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_eventbus_TestBroker_fail)**
    Causes the publishing of platform event messages to fail in the test event bus. Use this method to test Apex publish callbacks.

### deliver()

Delivers platform event messages to the test event bus. Use this method to deliver test event messages multiple times and verify that event subscribers have processed the test events each step of the way.

#### Signature

public void deliver()

#### Return Value

Type: void

#### Usage

Enclose Test.getEventBus().deliver() within the Test.startTest() and Test.stopTest() statement block.

```

```

#### See Also

-   [*Platform Events Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm "Platform Events Developer Guide - HTML (New Window)")


### fail()

Causes the publishing of platform event messages to fail in the test event bus. Use this method to test Apex publish callbacks.

#### Signature

public void fail()

#### Return Value

Type: void

#### Usage

```

```

For more information, see <link>Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks<link/> in the Platform Events Developer Guide.

## Code Examples

```
Test.startTest();
// Create test events
// ...
// Publish test events with EventBus.publish()
// ...
// Deliver test events
Test.getEventBus().deliver();
// Perform validation 
// ...
Test.stopTest();
```

```
// Create test events
// ...
// Publish test events with EventBus.publish()
// ...
// Fail publishing of test events
Test.getEventBus().fail();
// Perform validation 
// ...
```

## Related Topics

- EventBus (atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- TestBroker Methods (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm)
- deliver() (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm)
- fail() (atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm)
