---
title: "Handle Component Event of Instantiated Component"
domain: lightning
topic: handle-component-event-of-instantiated-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.865Z
estimatedTokens: 479
keywords: [Handle, Component, Event, Instantiated, parent, handler, action, instantiates, child, markup]
---

# Handle Component Event of Instantiated Component

> A parent component can set a handler action when it instantiates a child component in
  its markup.

# Handle Component Event of Instantiated Component

A parent component can set a handler action when it instantiates a child component in its markup.

Let’s a look at an example. c:child registers that it may fire a sampleComponentEvent event by using <aura:registerEvent> in its markup.

```

```

c:parent sets a handler for this event when it instantiates c:child in its markup.

```

```

Note how c:parent uses the following syntax to set a handler for the sampleComponentEvent event fired by c:child.

```

```

The syntax looks similar to how you set an attribute called sampleComponentEvent. However, in this case, sampleComponentEvent isn’t an attribute. sampleComponentEvent matches the event name declared in c:child.

```

```

The preceding syntax is a convenient shortcut for the normal way that a component declares a handler for an event. The parent component can only use this syntax to handle events from a direct descendent. If you want to be more explicit in c:parent that you’re handling an event, or if the event might be fired by a component further down the component hierarchy, use an <aura:handler> tag instead of declaring the handler within the <c:child> tag.

```

```

The two versions of c:parent markup behave the same. However, using <aura:handler> makes it more obvious that you’re handling a sampleComponentEvent event.

#### See Also

-   [Component Handling Its Own Event](atlas.en-us.lightning.meta/lightning/events_component_handling_itself.htm "A component can handle its own event by using the <aura:handler> tag in its markup.")

-   [Handling Bubbled or Captured Component Events](atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm "Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.")

## Code Examples

```
<!-- c:child -->
<aura:component>
    <aura:registerEvent name="sampleComponentEvent" type="c:compEvent"/>
</aura:component>
```

```
<!-- parent.cmp -->
<aura:component>
    <c:child sampleComponentEvent="{!c.handleChildEvent}"/>
</aura:component>
```

```
<c:child sampleComponentEvent="{!c.handleChildEvent}"/>
```

```
<aura:registerEvent name="sampleComponentEvent" type="c:compEvent"/>
```

```
<!-- parent.cmp -->
<aura:component>
    <aura:handler name="sampleComponentEvent" event="c:compEvent"
      action="{!c.handleSampleEvent}"/>
    <c:child />
</aura:component>
```

## Related Topics

- Component Handling Its Own Event (atlas.en-us.lightning.meta/lightning/events_component_handling_itself.htm)
- Handling Bubbled or Captured Component Events (atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm)
