---
title: "Subscribe to Platform Event Notifications in a Lightning Component"
domain: platform-events
topic: subscribe-to-platform-event-notifications-in-a-lightning-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.138Z
estimatedTokens: 761
keywords: [Subscribe, Platform, Event, Notifications, Lightning, Component, events, empApi, web, Aura, access, subscribing, streaming, channel, listening]
---

# Subscribe to Platform Event Notifications in a Lightning Component

> Subscribe to platform events with the empApi
  component in your Lightning web component or Aura component. The empApi component provides access to methods for subscribing to a streaming channel and
  listening to event messages.

# Subscribe to Platform Event Notifications in a Lightning Component

Subscribe to platform events with the empApi component in your Lightning web component or Aura component. The empApi component provides access to methods for subscribing to a streaming channel and listening to event messages.

The empApi component uses a shared CometD-based Streaming API connection, enabling you to run multiple streaming apps in the browser for one user. The connection isn’t shared across user sessions in other browsers. The empApi component only supports one user per browser. Multiple user sessions aren't supported in one browser.

The event delivery allocation applies for the empApi component. The allocation is per channel and per unique browser session. Also, the concurrent CometD client limit applies to the empApi component. Each logged-in user using empApi counts as one concurrent client. The empApi component isn’t recommended for apps or sites that are used by a large number of users, such as Experience Cloud sites, because the limit can be reached. This limit is shared with other CometD clients. For more information, see [Platform Event Allocations](atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm#platform_event_limits "Learn about the allocations available for platform event definitions, publishing and subscribing to platform events, and event delivery in Pub/Sub API clients, CometD clients, empApi Lightning components, and event relays.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page.

## Subscribe in a Lightning Web Component

To use the empApi methods in your Lightning web component, import the methods from the lightning/empApi module as follows.

```

```

Then call the imported methods in your JavaScript code.

For an example of how to use the lightning/empApi module and a complete reference, see the [lightning-emp-api documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning-emp-api/documentation "HTML (New Window)") in the Lightning Component Library.

## Subscribe in an Aura Component

To use the empApi methods in your Aura component, add the lightning:empApi component inside your custom component and assign an aura:id attribute to it.

<lightning:empApi aura:id="empApi"/>

Then in the client-side controller, add functions to call the component methods.

For an example of how to use the lightning:empApi component and a complete reference, see the [lightning:empApi documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:empApi/documentation "HTML (New Window)") in the Lightning Component Library.

## Code Examples

```
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } 
    from 'lightning/empApi';
```

## Related Topics

- Platform Event Allocations (atlas.en-us.platform_events.meta/platform_events/platform_event_limits.htm)
