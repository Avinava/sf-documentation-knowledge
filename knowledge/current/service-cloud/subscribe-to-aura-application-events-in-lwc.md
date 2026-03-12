---
title: "Subscribe to Aura Application Events in LWC"
domain: service-cloud
topic: subscribe-to-aura-application-events-in-lwc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:58.053Z
estimatedTokens: 610
keywords: [Subscribe, Aura, Application, Events, LWC, application, events, their, corresponding, Lightning, message, channels.]
---

# Subscribe to Aura Application Events in LWC

> Subscribe to Aura application events using their corresponding Lightning message
    channels.

# Subscribe to Aura Application Events in LWC

Subscribe to Aura application events using their corresponding Lightning message channels.

Aura application events are received by all rendered Aura components, even those on background tabs. By default, the Lightning message channel events are received by active components only, such as those on the foreground tab or in activated utility bar components. Your component can receive all Lightning message channel events by subscribing with the optional APPLICATION\_SCOPE parameter. For more information, see [Define the Scope of the Message Service](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-scope.html).

-   **[lightning\_\_tabClosed](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabClosed.htm)**
    A Lightning message channel that corresponds to the lightning:tabClosed Aura app event.
-   **[lightning\_\_tabCreated](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabCreated.htm)**
    A Lightning message channel that corresponds to the lightning:tabCreated Aura app event. This message channel is available for Lightning web components used within a Lightning console app.
-   **[lightning\_\_tabFocused](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabFocused.htm)**
    A Lightning message channel that corresponds to the lightning:tabFocused Aura app event. This message channel is available for Lightning web components used within a Lightning console app.
-   **[lightning\_\_tabRefreshed](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabRefreshed.htm)**
    A Lightning message channel that corresponds to the lightning:tabRefreshed Aura app event. This message channel is available for Lightning web components used within a Lightning console app.
-   **[lightning\_\_tabReplaced](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabReplaced.htm)**
    A Lightning message channel that corresponds to the lightning:tabReplaced Aura app event. This message channel is available for Lightning web components used within a Lightning console app.
-   **[lightning\_\_tabUpdated](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabUpdated.htm)**
    A Lightning message channel that corresponds to the lightning:tabUpdated Aura app event. This message channel is available for Lightning web components used within a Lightning console app.

## Related Topics

- lightning__tabClosed (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabClosed.htm)
- lightning__tabCreated (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabCreated.htm)
- lightning__tabFocused (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabFocused.htm)
- lightning__tabRefreshed (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabRefreshed.htm)
- lightning__tabReplaced (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabReplaced.htm)
- lightning__tabUpdated (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_tabUpdated.htm)
