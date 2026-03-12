---
title: "Handling Bubbled or Captured Component Events"
domain: lightning
topic: handling-bubbled-or-captured-component-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.850Z
estimatedTokens: 1805
keywords: [Handling, Bubbled, Captured, Component, Events, Event, propagation, rules, determine, components, containment, hierarchy, handle, bubble, capture]
---

# Handling Bubbled or Captured Component Events

> Event propagation rules determine which components in the containment hierarchy can
        handle events by default in the bubble or capture phases. Learn about the rules and how to
        handle events in the bubble or capture phases.

# Handling Bubbled or Captured Component Events

Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.

The framework supports capture and bubble phases for the propagation of component events. These phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers. The capture phase executes before the bubble phase.

## Default Event Propagation Rules

By default, every parent in the containment hierarchy can’t handle an event during the capture and bubble phases. Instead, the event propagates to every owner in the containment hierarchy.

A component’s owner is the component that is responsible for its creation. For declaratively created components, the owner is the outermost component containing the markup that references the component firing the event. For programmatically created components, the owner component is the component that invoked $A.createComponent to create it.

The same rules apply for the capture phase, although the direction of event propagation (down) is the opposite of the bubble phase (up).

Confused? It makes more sense when you look at an example in the bubbling phase.

c:owner contains c:container, which in turn contains c:eventSource.

```

```

If c:eventSource fires an event, it can handle the event itself. The event then bubbles up the containment hierarchy.

c:container contains c:eventSource but it’s not the owner because it’s not the outermost component in the markup, so it can’t handle the bubbled event.

c:owner is the owner because c:container is in its markup. c:owner can handle the event.

## Propagation to All Container Components

The default behavior doesn’t allow an event to be handled by every parent in the containment hierarchy. Some components contain other components but aren’t the owner of those components. These components are known as container components. In the example, c:container is a container component because it’s not the owner for c:eventSource. By default, c:container can’t handle events fired by c:eventSource.

A container component has a facet attribute whose type is Aura.Component\[\], such as the default body attribute. The container component includes those components in its definition using an expression, such as {!v.body}. The container component isn’t the owner of the components rendered with that expression.

To allow a container component to handle the event, add includeFacets="true" to the <aura:handler> tag of the container component. For example, adding includeFacets="true" to the handler in the container component, c:container, enables it to handle the component event bubbled from c:eventSource.

```

```

## Handle Bubbled Event

A component that fires a component event registers that it fires the event by using the <aura:registerEvent> tag.

```

```

A component handling the event in the bubble phase uses the <aura:handler> tag to assign a handling action in its client-side controller.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The name attribute in <aura:handler> must match the name attribute in the <aura:registerEvent> tag in the component that fires the event.

## Handle Captured Event

A component handling the event in the capture phase uses the <aura:handler> tag to assign a handling action in its client-side controller.

```

```

The default handling phase for component events is bubble if no phase attribute is set.

## Stop Event Propagation

Use the stopPropagation() method in the Event object to stop the event propagating to other components.

## Pausing Event Propagation for Asynchronous Code Execution

Use event.pause() to pause event handling and propagation until event.resume() is called. This flow-control mechanism is useful for any decision that depends on the response from the execution of asynchronous code. For example, you might make a decision about event propagation based on the response from an asynchronous call to native mobile code.

You can call pause() or resume() in the capture or bubble phases.

## Event Bubbling Example

Let’s look at an example so you can play around with it yourself.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

This sample code uses the default c namespace. If your org has a namespace, use that namespace instead.

First, we define a simple component event.

```

```

c:eventBubblingEmitter is the component that fires c:compEvent.

```

```

Here’s the controller for c:eventBubblingEmitter. When you press the button, it fires the bubblingEvent event registered in the markup.

```

```

c:eventBubblingGrandchild contains c:eventBubblingEmitter and uses <aura:handler> to assign a handler for the event.

```

```

Here’s the controller for c:eventBubblingGrandchild.

```

```

The controller logs the event name when the handler is called.

Here’s the markup for c:eventBubblingChild. We will pass c:eventBubblingGrandchild in as the body of c:eventBubblingChild when we create c:eventBubblingParent later in this example.

```

```

Here’s the controller for c:eventBubblingChild.

```

```

c:eventBubblingParent contains c:eventBubblingChild, which in turn contains c:eventBubblingGrandchild.

```

```

Here’s the controller for c:eventBubblingParent.

```

```

Now, let’s see what happens when you run the code.

1.  In your browser, navigate to c:eventBubblingParent. Create a .app resource that contains <c:eventBubblingParent />.
2.  Click the **Start Bubbling** button that is part of the markup in c:eventBubblingEmitter.
3.  Note the output in your browser’s console:

    ```

    ```


The c:compEvent event is bubbled to c:eventBubblingGrandchild and c:eventBubblingParent as they are owners in the containment hierarchy. The event is not handled by c:eventBubblingChild as c:eventBubblingChild is in the markup for c:eventBubblingParent but it’s not an owner as it’s not the outermost component in that markup.

Now, let’s see how to stop event propagation. Edit the controller for c:eventBubblingGrandchild to stop propagation.

```

```

Now, navigate to c:eventBubblingParent and click the **Start Bubbling** button.

Note the output in your browser’s console:

```

```

The event no longer bubbles up to the c:eventBubblingParent component.

#### See Also

-   [Component Event Propagation](atlas.en-us.lightning.meta/lightning/events_component_propagation.htm "The framework supports capture and bubble phases for the propagation of component events. These phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers.")

-   [Handle Component Event of Instantiated Component](atlas.en-us.lightning.meta/lightning/events_component_handling_child.htm "A parent component can set a handler action when it instantiates a child component in its markup.")

## Code Examples

```
<!--c:owner-->
<aura:component>
    <c:container>
        <c:eventSource />
    </c:container>
</aura:component>
```

```
<aura:handler name="bubblingEvent" event="c:compEvent" action="{!c.handleBubbling}"
    includeFacets="true" />
```

```
<aura:component>
    <aura:registerEvent name="compEvent" type="c:compEvent" />
</aura:component>
```

```
<aura:component>
    <aura:handler name="compEvent" event="c:compEvent" action="{!c.handleBubbling}"/>
</aura:component>
```

```
<aura:component>
    <aura:handler name="compEvent" event="c:compEvent" action="{!c.handleCapture}"
        phase="capture" />
</aura:component>
```

## Related Topics

- Component Event Propagation (atlas.en-us.lightning.meta/lightning/events_component_propagation.htm)
- Handle Component Event of Instantiated Component (atlas.en-us.lightning.meta/lightning/events_component_handling_child.htm)
