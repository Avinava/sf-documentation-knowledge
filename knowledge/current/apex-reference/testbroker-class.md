---
title: "TestBroker Class"
domain: apex-reference
topic: testbroker-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.466Z
keywords: [TestBroker, Class, Delivers, platform, event, messages, test, bus., method, deliver, multiple, times, verify, subscribers, processed, events, step, way., Signature, Return]
---

# TestBroker Class

> Delivers platform event messages to the test event bus. Use this
      method to deliver test event messages multiple times and verify that event subscribers have
      processed the test events each step of the way.

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