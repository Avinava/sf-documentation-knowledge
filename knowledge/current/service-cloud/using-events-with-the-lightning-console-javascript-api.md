---
title: "Using Events with the Lightning Console JavaScript API"
domain: service-cloud
topic: using-events-with-the-lightning-console-javascript-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:50.090Z
keywords: [Events, Lightning, Console, JavaScript, API, Work, Web, Components, LWC, Subscribe, LMS, Channels, Aura, See]
---

# Using Events with the Lightning Console JavaScript API

# Using Events with the Lightning Console JavaScript API

The Lightning framework uses event-driven programming, which allows you to create handlers to respond to interface events as they occur. The Lightning Console JavaScript API provides several events specific to Lightning console apps.

## Work with Events in Lightning Web Components (LWC)

A Lightning Message Service (LMS) channel is created for each of [Aura tab events](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_lightning.htm "Use events and handlers in your Aura components and controllers to respond to events like workspace tabs opening, closing, or gaining focus. In Lightning web components, subscribe to Aura application events using their corresponding Lightning message channels."). The payloads on the LMS channels are the same as those on the Aura events. Subscribe to the Lightning message channels corresponding to the Aura application events you want to listen for.

## Subscribe to LMS Channels in LWC

| Aura Event | LMS Channel | Payload |
| --- | --- | --- |
| lightning:tabClosed | lightning__tabClosed | tabId |
| lightning:tabCreated | lightning__tabCreated | tabId |
| lightning:tabFocused | lightning__tabFocused | previousTabId, currentTabId |
| lightning:tabRefreshed | lightning__tabRefreshed | tabId |
| lightning:tabReplaced | lightning__tabReplaced | tabId |
| lightning:tabUpdated | lightning__tabUpdated | tabId |

To subscribe to an LMS channel, import the lightning/messageService module and the channel you want. This example imports the @salesforce/messageChannel/lightning\_\_tabCreated channel and subscribes to messages that are published over the channel.

Subscribe when the component is created and unsubscribe when the component is destroyed. For more information, see [Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-subscribe.html "HTML (New Window)").

```

```

## Work with Events in Aura Components

Events are fired from JavaScript controller actions. Events can contain attributes that can be set before the event is fired and read when the event is handled. Each event that works with Lightning console apps returns attributes that can be read once the event is fired. See the reference section of this guide for a list of attributes returned by each event.

To use console events, set up a handler in your Aura component. The following handler, for example, listens for the lightning:tabCreated event, and calls the onTabCreated function in the component’s controller when the event occurs.

```

```

Let’s look at a more fleshed out example. The following component uses the lightning:tabClosed event.

```

```

When a tab is closed, the event handler calls onTabClosed in the component’s controller, which logs the tabId of the closed tab.

```

```

You can use Lightning console events with the Workspace API and Utility Bar API to customize your users’ experience. You can, for example, give a tab focus when it’s refreshed, or notify the user with a modal dialogue when a tab is replaced.

#### See Also

-   [Events for](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_lightning.htm "Use events and handlers in your Aura components and controllers to respond to events like workspace tabs opening, closing, or gaining focus. In Lightning web components, subscribe to Aura application events using their corresponding Lightning message channels.")
    
-   [Trailhead: Connect Components with Events](https://trailhead.salesforce.com/modules/lex_dev_lc_basics/units/lex_dev_lc_basics_events)
    
-   [*Lightning Aura Components Developer Guide*: Communicating with Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/events_intro.htm)