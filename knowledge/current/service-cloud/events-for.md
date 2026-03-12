---
title: "Events for"
domain: service-cloud
topic: events-for
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:57.183Z
estimatedTokens: 863
keywords: [Events, events, handlers, Aura, components, controllers, respond, workspace, tabs, opening, closing, gaining, focus., Lightning, web, subscribe, application, their, corresponding, message]
---

# Events for

> Use events and handlers in your Aura components and controllers to respond to events
  like workspace tabs opening, closing, or gaining focus. In Lightning web components, subscribe to
  Aura application events using their corresponding Lightning message channels.

# Events for

Use events and handlers in your Aura components and controllers to respond to events like workspace tabs opening, closing, or gaining focus. In Lightning web components, subscribe to Aura application events using their corresponding Lightning message channels.

Aura application events are received by all rendered Aura components, even those on background tabs. By default, the Lightning message channel events are received by active components only, such as those on the foreground tab or in activated utility bar components. Your component can receive all Lightning message channel events by subscribing with the optional APPLICATION\_SCOPE parameter. For more information, see [Define the Scope of the Message Service](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-scope.html).

-   **[lightning:tabClosed](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabclosed.htm)**
    Indicates that a tab has been closed.
-   **[lightning:tabCreated](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabcreated.htm)**
    Indicates that a tab has been created successfully.
-   **[lightning:tabFocused](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabfocused.htm)**
    Indicates a tab was focused.
-   **[lightning:tabRefreshed](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabrefreshed.htm)**
    Indicates that a tab has been refreshed.
-   **[lightning:tabReplaced](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabreplaced.htm)**
    Indicates that a tab has been replaced successfully.
-   **[lightning:tabUpdated](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabupdated.htm)**
    Indicates that a tab has been updated successfully.
-   **[Subscribe to Aura Application Events in LWC](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_intro.htm)**
    Subscribe to Aura application events using their corresponding Lightning message channels.
-   **[Lightning Web Component Events for Enhanced Messaging](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_enhanced_messaging_lwc_events.htm)**
    JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Messaging. These events apply to Lightning web components in Lightning Experience only.
-   **[Aura Events for Enhanced Messaging](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_messaging_events.htm)**
    JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Messaging. These events apply to Aura components in Lightning Experience only.
-   **[Events for Chat](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_liveagent_events.htm)**
    JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Chat. These events apply to Lightning Experience only.
-   **[Events for Omni-Channel](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_omnichannel_events.htm)**
    JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. There are a few events that are specific to Omni-Channel. These events apply to Lightning Experience only.

## Related Topics

- lightning:tabClosed (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabclosed.htm)
- lightning:tabCreated (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabcreated.htm)
- lightning:tabFocused (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabfocused.htm)
- lightning:tabRefreshed (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabrefreshed.htm)
- lightning:tabReplaced (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabreplaced.htm)
- lightning:tabUpdated (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabupdated.htm)
- Subscribe to Aura Application Events in LWC (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_intro.htm)
- Lightning Web Component Events for Enhanced Messaging (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_enhanced_messaging_lwc_events.htm)
- Aura Events for Enhanced Messaging (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_messaging_events.htm)
- Events for Chat (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_liveagent_events.htm)
