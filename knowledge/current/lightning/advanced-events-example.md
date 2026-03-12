---
title: "Advanced Events Example"
domain: lightning
topic: advanced-events-example
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.888Z
estimatedTokens: 1495
keywords: [Advanced, Events, builds, simpler, component, application, event, examples, uses, notifier, handler, work, wired, let's, look]
---

# Advanced Events Example

> This example builds on the simpler component and application event
examples. It uses one notifier component and one handler component
that work with both component and application events. Before we see
a component wired up to events, let's look at the individual resources
involved.

# Advanced Events Example

This example builds on the simpler component and application event examples. It uses one notifier component and one handler component that work with both component and application events. Before we see a component wired up to events, let's look at the individual resources involved.

This table summarizes the roles of the various resources used in the example. The source code for these resources is included after the table.

| Resource | Resource Name | Usage |
| --- | --- | --- |
| Event files | Component event (compEvent.evt) and application event (appEvent.evt) | Defines the component and application events in separate resources. eventsContainer.cmp shows how to use both component and application events. |
| Notifier | Component (eventsNotifier.cmp) and its controller (eventsNotifierController.js) | The notifier contains an onclick browser event to initiate the event. The controller fires the event. |
| Handler | Component (eventsHandler.cmp) and its controller (eventsHandlerController.js) | The handler component contains the notifier component (or a <aura:handler> tag for application events), and calls the controller action that is executed after the event is fired. |
| Container Component | eventsContainer.cmp | Displays the event handlers on the UI for the complete demo. |

The definitions of component and application events are stored in separate .evt resources, but individual notifier and handler component bundles can contain code to work with both types of events.

The component and application events both contain a context attribute that defines the shape of the event. This is the data that is passed to handlers of the event.

## Component Event

Here is the markup for compEvent.evt.

```

```

## Application Event

Here is the markup for appEvent.evt.

```

```

## Notifier Component

The eventsNotifier.cmp notifier component contains buttons to initiate a component or application event.

The notifier uses aura:registerEvent tags to declare that it may fire the component and application events. Note that the name attribute is required but the value is only relevant for the component event; the value is not used anywhere else for the application event.

The parentName attribute is not set yet. We will see how this attribute is set and surfaced in eventsContainer.cmp.

```

```

**CSS source**

The CSS is in eventsNotifier.css.

```

```

**Client-side controller source**

The eventsNotifierController.js controller fires the event.

```

```

You can click the buttons to fire component and application events but there is no change to the output because we haven't wired up the handler component to react to the events yet.

The controller sets the context attribute of the component or application event to the parentName of the notifier component before firing the event. We will see how this affects the output when we look at the handler component.

## Handler Component

The eventsHandler.cmp handler component contains the c:eventsNotifier notifier component and <aura:handler> tags for the application and component events.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

{#v.name} is an unbound expression. This means that any change to the value of the parentName attribute in c:eventsNotifier doesn’t propagate back to affect the value of the name attribute in c:eventsHandler. For more information, see [Data Binding Between Components](atlas.en-us.lightning.meta/lightning/expr_data_binding.htm#expr_data_binding "When you add a component in markup, you can use an expression to initialize attribute values in the component based on attribute values of the container component. There are two forms of expression syntax, which exhibit different behaviors for data binding between the components.").

**CSS source**

The CSS is in eventsHandler.css.

```

```

**Client-side controller source**

The client-side controller is in eventsHandlerController.js.

```

```

The name attribute is not set yet. We will see how this attribute is set and surfaced in eventsContainer.cmp.

You can click buttons and the UI now changes to indicate the type of event. The click count increments to indicate whether it's a component or application event. We aren't finished yet though. Notice that the source of the event is undefined as the event context attribute hasn't been set .

## Container Component

Here is the markup for eventsContainer.cmp.

```

```

The container component contains two handler components. It sets the name attribute of both handler components, which is passed through to set the parentName attribute of the notifier components. This fills in the gaps in the UI text that we saw when we looked at the notifier or handler components directly.

Add the c:eventsContainer component to a c:eventsContainerApp application. Navigate to the application.

https://MyDomainName.lightning.force.com/c/eventsContainerApp.app.

Click the **Click here to fire a component event** button for either of the event handlers. Notice that the **\# component events handled** counter only increments for that component because only the firing component's handler is notified.

Click the **Click here to fire an application event** button for either of the event handlers. Notice that the **\# application events handled** counter increments for both the components this time because all the handling components are notified.

#### See Also

-   [Component Event Example](atlas.en-us.lightning.meta/lightning/events_component_example.htm "Here’s a simple use case of using a component event to update an attribute in another component.")

-   [Application Event Example](atlas.en-us.lightning.meta/lightning/events_application_example.htm "Here’s a simple use case of using an application event to update an attribute in another component.")

-   [Event Handling Lifecycle](atlas.en-us.lightning.meta/lightning/events_overview.htm)

## Code Examples

```
<!--c:compEvent-->
<aura:event type="COMPONENT">
    <!-- pass context of where the event was fired to the handler. -->
    <aura:attribute name="context" type="String"/>
</aura:event>
```

```
<!--c:appEvent-->
<aura:event type="APPLICATION">
    <!-- pass context of where the event was fired to the handler. -->
    <aura:attribute name="context" type="String"/>
</aura:event>
```

```
<!--c:eventsNotifier-->
<aura:component>
  <aura:attribute name="parentName" type="String"/>
  <aura:registerEvent name="componentEventFired" type="c:compEvent"/>
  <aura:registerEvent name="appEvent" type="c:appEvent"/>

  <div>
    <h3>This is {!v.parentName}'s eventsNotifier.cmp instance</h3>
    <p><lightning:button
        label="Click here to fire a component event"
        onclick="{!c.fireComponentEvent}" />
    </p>
    <p><lightning:button
        label="Click here to fire an application event"
        onclick="{!c.fireApplicationEvent}" />
    </p>
  </div>
</aura:component>
```

```
/* eventsNotifier.css */
.cEventsNotifier {
    display: block;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
}
```

```
/* eventsNotifierController.js */
{
    fireComponentEvent : function(cmp, event) {
        var parentName = cmp.get("v.parentName");

        // Look up event by name, not by type
        var compEvents = cmp.getEvent("componentEventFired");

        compEvents.setParams({ "context" : parentName });
        compEvents.fire();
    },

    fireApplicationEvent : function(cmp, event) {
        var parentName = cmp.get("v.parentName");

        // note different syntax for getting application event
        var appEvent = $A.get("e.c:appEvent");

        appEvent.setParams({ "context" : parentName });
        appEvent.fire();
    }
}
```

## Related Topics

- Data Binding Between Components (atlas.en-us.lightning.meta/lightning/expr_data_binding.htm)
- Component Event Example (atlas.en-us.lightning.meta/lightning/events_component_example.htm)
- Application Event Example (atlas.en-us.lightning.meta/lightning/events_application_example.htm)
- Event Handling Lifecycle (atlas.en-us.lightning.meta/lightning/events_overview.htm)
