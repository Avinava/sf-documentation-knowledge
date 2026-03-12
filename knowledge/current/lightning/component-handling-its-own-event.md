---
title: "Component Handling Its Own Event"
domain: lightning
topic: component-handling-its-own-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.874Z
estimatedTokens: 176
keywords: [Component, Handling, Own, Event, handle, <aura, handler>, tag, markup]
---

# Component Handling Its Own Event

> A component can handle its own event by using the <aura:handler> tag in its markup.

# Component Handling Its Own Event

A component can handle its own event by using the <aura:handler> tag in its markup.

The action attribute of <aura:handler> sets the client-side controller action to handle the event. For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The name attributes in <aura:registerEvent> and <aura:handler> must match, since each event is defined by its name.

#### See Also

-   [Handle Component Event of Instantiated Component](atlas.en-us.lightning.meta/lightning/events_component_handling_child.htm "A parent component can set a handler action when it instantiates a child component in its markup.")

## Code Examples

```
<aura:registerEvent name="sampleComponentEvent" type="c:compEvent"/>
<aura:handler name="sampleComponentEvent" event="c:compEvent"
    action="{!c.handleSampleEvent}"/>
```

## Related Topics

- Handle Component Event of Instantiated Component (atlas.en-us.lightning.meta/lightning/events_component_handling_child.htm)
