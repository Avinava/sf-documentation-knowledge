---
title: "Component Event Example"
domain: lightning
topic: component-event-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.859Z
estimatedTokens: 854
keywords: [Component, Event, Here’s, simple, case, attribute, another, Notifier, Handler, Put, Together]
---

# Component Event Example

> Here’s a simple use case of using a component event
to update an attribute in another component.

# Component Event Example

Here’s a simple use case of using a component event to update an attribute in another component.

1.  A user clicks a button in the notifier component, ceNotifier.cmp.
2.  The client-side controller for ceNotifier.cmp sets a message in a component event and fires the event.
3.  The handler component, ceHandler.cmp, contains the notifier component, and handles the fired event.
4.  The client-side controller for ceHandler.cmp sets an attribute in ceHandler.cmp based on the data sent in the event.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The event and components in this example use the default c namespace. If your org has a namespace, use that namespace instead.

## Component Event

The ceEvent.evt component event has one attribute. We’ll use this attribute to pass some data in the event when it’s fired.

```

```

## Notifier Component

The c:ceNotifier component uses aura:registerEvent to declare that it may fire the component event.

The button in the component contains an onclick browser event that is wired to the fireComponentEvent action in the client-side controller. The action is invoked when you click the button.

```

```

The client-side controller gets an instance of the event by calling cmp.getEvent("cmpEvent"), where cmpEvent matches the value of the name attribute in the <aura:registerEvent> tag in the component markup. The controller sets the message attribute of the event and fires the event.

```

```

## Handler Component

The c:ceHandler handler component contains the c:ceNotifier component. The <aura:handler> tag uses the same value of the name attribute, cmpEvent, from the <aura:registerEvent> tag in c:ceNotifier. This wires up c:ceHandler to handle the event bubbled up from c:ceNotifier.

When the event is fired, the handleComponentEvent action in the client-side controller of the handler component is invoked.

```

```

The controller retrieves the data sent in the event and uses it to update the messageFromEvent attribute in the handler component.

```

```

## Put It All Together

Add the c:ceHandler component to a c:ceHandlerApp application. Navigate to the application and click the button to fire the component event.

https://MyDomainName.lightning.force.com/c/ceHandlerApp.app.

If you want to access data on the server, you could extend this example to call a server-side controller from the handler’s client-side controller.

#### See Also

-   [Component Events](atlas.en-us.lightning.meta/lightning/events_component.htm "A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

-   [Creating Server-Side Logic with Controllers](atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm "The framework supports client-side (JavaScript) and server-side (Apex) controllers. An event is always wired to a client-side controller action, which can in turn call an Apex controller action. For example, a client-side controller might handle an event and call an Apex controller action to persist a record.")

-   [Application Event Example](atlas.en-us.lightning.meta/lightning/events_application_example.htm "Here’s a simple use case of using an application event to update an attribute in another component.")

## Code Examples

```
<!--c:ceEvent-->
<aura:event type="COMPONENT">
    <aura:attribute name="message" type="String"/>
</aura:event>
```

```
<!--c:ceNotifier-->
<aura:component>
    <aura:registerEvent name="cmpEvent" type="c:ceEvent"/>

    <h1>Simple Component Event Sample</h1>
    <p><lightning:button
        label="Click here to fire a component event"
        onclick="{!c.fireComponentEvent}" />
    </p>
</aura:component>
```

```
/* ceNotifierController.js */
{
    fireComponentEvent : function(cmp, event) {
        // Get the component event by using the
        // name value from aura:registerEvent
        var cmpEvent = cmp.getEvent("cmpEvent");
        cmpEvent.setParams({
            "message" : "A component event fired me. " +
            "It all happened so fast. Now, I'm here!" });
        cmpEvent.fire();
    }
}
```

```
<!--c:ceHandler-->
<aura:component>
    <aura:attribute name="messageFromEvent" type="String"/>
    <aura:attribute name="numEvents" type="Integer" default="0"/>

    <!-- Note that name="cmpEvent" in aura:registerEvent
     in ceNotifier.cmp -->
    <aura:handler name="cmpEvent" event="c:ceEvent" action="{!c.handleComponentEvent}"/>

    <!-- handler contains the notifier component -->
    <c:ceNotifier />
    
    <p>{!v.messageFromEvent}</p>
    <p>Number of events: {!v.numEvents}</p>

</aura:component>
```

```
/* ceHandlerController.js */
{
    handleComponentEvent : function(cmp, event) {
        var message = event.getParam("message");

        // set the handler attributes based on event data
        cmp.set("v.messageFromEvent", message);
        var numEventsHandled = parseInt(cmp.get("v.numEvents")) + 1;
        cmp.set("v.numEvents", numEventsHandled);
    }
}
```

## Related Topics

- Component Events (atlas.en-us.lightning.meta/lightning/events_component.htm)
- Creating Server-Side Logic with Controllers (atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm)
- Application Event Example (atlas.en-us.lightning.meta/lightning/events_application_example.htm)
