---
title: "Create Custom Application Events"
domain: lightning
topic: create-custom-application-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.812Z
estimatedTokens: 273
keywords: [Custom, Application, Events, event, <aura, event>, tag, evt, resource, contain, attributes, fired, handled]
---

# Create Custom Application Events

> Create a custom application event using the <aura:event> tag in a .evt resource. Events can
        contain attributes that can be set before the event is fired and read when the event is
        handled.

# Create Custom Application Events

Create a custom application event using the <aura:event> tag in a .evt resource. Events can contain attributes that can be set before the event is fired and read when the event is handled.

Use type="APPLICATION" in the <aura:event> tag for an application event. For example, this c:appEvent application event has one attribute with a name of message.

```

```

The component that fires an event can set the event’s data. To set the attribute values, call event.setParam() or event.setParams(). A parameter name set in the event must match the name attribute of an <aura:attribute> in the event. For example, if you fire c:appEvent, you could use:

```

```

The component that handles an event can retrieve the event data. To retrieve the attribute in this event, call event.getParam("message") in the handler’s client-side controller.

#### See Also

-   [Application Event Example](atlas.en-us.lightning.meta/lightning/events_application_example.htm "Here’s a simple use case of using an application event to update an attribute in another component.")

## Code Examples

```
<!--c:appEvent-->
<aura:event type="APPLICATION">
    <!-- Add aura:attribute tags to define event shape.
         One sample attribute here. -->
    <aura:attribute name="message" type="String"/>
</aura:event>
```

```
event.setParam("message", "event message here");
```

## Related Topics

- Application Event Example (atlas.en-us.lightning.meta/lightning/events_application_example.htm)
