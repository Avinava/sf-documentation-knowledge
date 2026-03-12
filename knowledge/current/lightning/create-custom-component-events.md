---
title: "Create Custom Component Events"
domain: lightning
topic: create-custom-component-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.854Z
estimatedTokens: 218
keywords: [Custom, Component, Events, event, <aura, event>, tag, evt, resource, contain, attributes, fired, handled]
---

# Create Custom Component Events

> Create a custom component event using the <aura:event> tag in a .evt resource. Events can contain
    attributes that can be set before the event is fired and read when the event is
    handled.

# Create Custom Component Events

Create a custom component event using the <aura:event> tag in a .evt resource. Events can contain attributes that can be set before the event is fired and read when the event is handled.

Use type="COMPONENT" in the <aura:event> tag for a component event. For example, this c:compEvent component event has one attribute with a name of message.

```

```

The component that fires an event can set the event’s data. To set the attribute values, call event.setParam() or event.setParams(). A parameter name set in the event must match the name attribute of an <aura:attribute> in the event. For example, if you fire c:compEvent, you could use:

```

```

The component that handles an event can retrieve the event data. To retrieve the attribute value in this event, call event.getParam("message") in the handler’s client-side controller.

## Code Examples

```
<!--c:compEvent-->
<aura:event type="COMPONENT">
    <!-- Add aura:attribute tags to define event shape.
         One sample attribute here. -->
    <aura:attribute name="message" type="String"/>
</aura:event>
```

```
event.setParam("message", "event message here");
```
