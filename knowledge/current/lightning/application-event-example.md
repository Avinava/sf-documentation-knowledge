---
title: "Application Event Example"
domain: lightning
topic: application-event-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.818Z
estimatedTokens: 926
keywords: [Application, Event, Here’s, simple, case, attribute, another, component, Notifier, Handler, Container, Put, Together]
---

# Application Event Example

> Here’s a simple use case of using an application
event to update an attribute in another component.

# Application Event Example

Here’s a simple use case of using an application event to update an attribute in another component.

1.  A user clicks a button in the notifier component, aeNotifier.cmp.
2.  The client-side controller for aeNotifier.cmp sets a message in a component event and fires the event.
3.  The handler component, aeHandler.cmp, handles the fired event.
4.  The client-side controller for aeHandler.cmp sets an attribute in aeHandler.cmp based on the data sent in the event.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The event and components in this example use the default c namespace. If your org has a namespace, use that namespace instead.

## Application Event

The aeEvent.evt application event has one attribute. We’ll use this attribute to pass some data in the event when it’s fired.

```

```

## Notifier Component

The aeNotifier.cmp notifier component uses aura:registerEvent to declare that it may fire the application event. The name attribute is required but not used for application events. The name attribute is only relevant for component events.

The button in the component contains a onclick browser event that is wired to the fireApplicationEvent action in the client-side controller. Clicking this button invokes the action.

```

```

The client-side controller gets an instance of the event by calling $A.get("e.c:aeEvent"). The controller sets the message attribute of the event and fires the event.

```

```

## Handler Component

The aeHandler.cmp handler component uses the <aura:handler> tag to register that it handles the application event.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The handler for an application event won’t work if you set the name attribute in <aura:handler>. Use the name attribute only when you’re handling component events.

When the event is fired, the handleApplicationEvent action in the client-side controller of the handler component is invoked.

```

```

The controller retrieves the data sent in the event and uses it to update the messageFromEvent attribute in the handler component.

```

```

## Container Component

The aeContainer.cmp container component contains the notifier and handler components. This is different from the component event example where the handler contains the notifier component.

```

```

## Put It All Together

You can test this code by adding <c:aeContainer> to a sample aeWrapper.app application and navigating to the application.

https://MyDomainName.lightning.force.com/c/aeWrapper.app.

If you want to access data on the server, you could extend this example to call a server-side controller from the handler’s client-side controller.

#### See Also

-   [Application Events](atlas.en-us.lightning.meta/lightning/events_application.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

-   [Creating Server-Side Logic with Controllers](atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm "The framework supports client-side (JavaScript) and server-side (Apex) controllers. An event is always wired to a client-side controller action, which can in turn call an Apex controller action. For example, a client-side controller might handle an event and call an Apex controller action to persist a record.")

-   [Component Event Example](atlas.en-us.lightning.meta/lightning/events_component_example.htm "Here’s a simple use case of using a component event to update an attribute in another component.")

## Code Examples

```
<!--c:aeEvent-->
<aura:event type="APPLICATION">
    <aura:attribute name="message" type="String"/>
</aura:event>
```

```
<!--c:aeNotifier-->
<aura:component>
    <aura:registerEvent name="appEvent" type="c:aeEvent"/>

    <h1>Simple Application Event Sample</h1>
    <p><lightning:button
        label="Click here to fire an application event"
        onclick="{!c.fireApplicationEvent}" />
    </p>
</aura:component>
```

```
/* aeNotifierController.js */
{
    fireApplicationEvent : function(cmp, event) {
        // Get the application event by using the
        // e.<namespace>.<event> syntax
        var appEvent = $A.get("e.c:aeEvent");
        appEvent.setParams({
            "message" : "An application event fired me. " +
            "It all happened so fast. Now, I'm everywhere!" });
        appEvent.fire();
    }
}
```

```
<!--c:aeHandler-->
<aura:component>
    <aura:attribute name="messageFromEvent" type="String"/>
    <aura:attribute name="numEvents" type="Integer" default="0"/>

    <aura:handler event="c:aeEvent" action="{!c.handleApplicationEvent}"/>

    <p>{!v.messageFromEvent}</p>
    <p>Number of events: {!v.numEvents}</p>
</aura:component>
```

```
/* aeHandlerController.js */
{
    handleApplicationEvent : function(cmp, event) {
        var message = event.getParam("message");

        // set the handler attributes based on event data
        cmp.set("v.messageFromEvent", message);
        var numEventsHandled = parseInt(cmp.get("v.numEvents")) + 1;
        cmp.set("v.numEvents", numEventsHandled);
    }
}
```

## Related Topics

- Application Events (atlas.en-us.lightning.meta/lightning/events_application.htm)
- Creating Server-Side Logic with Controllers (atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm)
- Component Event Example (atlas.en-us.lightning.meta/lightning/events_component_example.htm)
