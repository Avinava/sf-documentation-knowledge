---
title: "Example: Subscribe to and Replay Events Using a Lightning Component"
domain: api-streaming
topic: example-subscribe-to-and-replay-events-using-a-lightning-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.289Z
estimatedTokens: 695
keywords: [Subscribe, Replay, Events, Lightning, Component, event, streaming, channels, empApi, web, Aura, access, subscribing, channel, listening]
---

# Example: Subscribe to and Replay Events Using a Lightning Component

> Subscribe to event streaming channels with the empApi component in your Lightning web component or Aura component. The
            empApi component provides access to methods for
        subscribing to a streaming channel and listening to event messages.

# Example: Subscribe to and Replay Events Using a Lightning Component

Subscribe to event streaming channels with the empApi component in your Lightning web component or Aura component. The empApi component provides access to methods for subscribing to a streaming channel and listening to event messages.

All types of streaming events are supported, including:

-   Platform events
-   Change Data Capture events
-   PushTopic events (legacy)
-   Generic events (legacy)

The empApi component uses a shared CometD-based Streaming API connection, enabling you to run multiple streaming apps in the browser for one user. The connection isn’t shared across user sessions.

The concurrent CometD client limit applies to the empApi component. Each logged-in user using empApi counts as one concurrent client. The empApi component isn’t recommended for apps or sites that are used by a large number of users, such as Experience Cloud sites, because the limit can be reached. This limit is shared with other CometD clients. For more information, see [Platform Event Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_event_limits.htm) in the Platform Events Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page.

## Subscribe in a Lightning Web Component

To use the empApi in your Lightning web component, import its methods from the lightning/empApi module as follows.

```

```

Then call the imported methods in your JavaScript code.

For an example of how to use the lightning/empApi module and a complete reference, see the [lightning-emp-api documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning-emp-api/documentation "HTML (New Window)") in the Lightning Component Library.

## Subscribe in an Aura Component

To use the empApi methods in your Aura component, add the lightning:empApi component inside your custom component and assign an aura:id attribute to it.

<lightning:empApi aura:id="empApi"/>

Then in the client-side controller, add functions to call the empApi methods.

For an example of how to use the lightning:empApi component and a complete reference, see the [lightning:empApi documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:empApi/documentation "HTML (New Window)") in the Lightning Component Library.

## Code Examples

```
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } 
    from 'lightning/empApi';
```
