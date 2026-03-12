---
title: "aura:event"
domain: lightning
topic: auraevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.436Z
estimatedTokens: 255
keywords: [aura, event, represented, tag, attributes]
---

# aura:event

> An event is represented by the aura:event tag,
  which has the following attributes.

# aura:event

An event is represented by the aura:event tag, which has the following attributes.

| Attribute | Type | Description |
| --- | --- | --- |
| access | String | Indicates whether the event can be extended or used outside of its own namespace. Possible values are public (default), and global. |
| description | String | A description of the event. |
| extends | Component | The event to be extended. For example, extends="namespace:myEvent". |
| type | String | Required. Possible values are COMPONENT or APPLICATION. |

#### See Also

-   [Communicating with Events](atlas.en-us.lightning.meta/lightning/events_intro.htm "The framework uses event-driven programming. You write handlers that respond to interface events as they occur. The events may or may not have been triggered by user interaction.")

-   [Event Access Control](atlas.en-us.lightning.meta/lightning/access_events.htm "The access attribute on the aura:event tag controls whether the event can be used outside of the event’s namespace.")

## Related Topics

- Communicating with Events (atlas.en-us.lightning.meta/lightning/events_intro.htm)
- Event Access Control (atlas.en-us.lightning.meta/lightning/access_events.htm)
