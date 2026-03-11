---
title: "lightning__tabFocused"
domain: service-cloud
topic: lightningtabfocused
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:50.456Z
keywords: [lightning__tabFocused, lightning, _tabFocused, Response, LWC, Example]
---

# lightning__tabFocused

# lightning\_\_tabFocused

A Lightning message channel that corresponds to the lightning:tabFocused Aura app event. This message channel is available for Lightning web components used within a Lightning console app.

By default, this event is only received when that component's tab comes into focus, not when it leaves focus. To receive all events and minimize performance impact, use a utility item as the only listener.

## Response

The response is the same as that of the [lightning:tabFocused](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabfocused.htm "Indicates a tab was focused.") Aura app event.

## LWC Example

Import the lightning\_\_tabFocused message channel from the @salesforce/messageChannel/ scoped module. The event returns the message in the response.

```

```

For more information, see [Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-subscribe.html).