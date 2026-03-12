---
title: "Handling Bubbled or Captured Application Events"
domain: lightning
topic: handling-bubbled-or-captured-application-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.831Z
estimatedTokens: 989
keywords: [Handling, Bubbled, Captured, Application, Events, Event, propagation, rules, determine, components, containment, hierarchy, handle, bubble, capture]
---

# Handling Bubbled or Captured Application Events

> Event propagation rules determine which components in the containment hierarchy can
    handle events by default in the bubble or capture phases. Learn about the rules and how to
    handle events in the bubble or capture phases.

# Handling Bubbled or Captured Application Events

Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.

The framework supports capture, bubble, and default phases for the propagation of application events. The capture and bubble phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers. The default phase preserves the framework’s original handling behavior.

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

To add a handler for the bubble phase, set phase="bubble".

```

```

The event attribute specifies the event being handled. The format is namespace:eventName.

The action attribute of <aura:handler> sets the client-side controller action to handle the event.

## Handle Captured Event

To add a handler for the capture phase, set phase="capture".

```

```

## Stop Event Propagation

Use the stopPropagation() method in the Event object to stop the event propagating to other components.

## Pausing Event Propagation for Asynchronous Code Execution

Use event.pause() to pause event handling and propagation until event.resume() is called. This flow-control mechanism is useful for any decision that depends on the response from the execution of asynchronous code. For example, you might make a decision about event propagation based on the response from an asynchronous call to native mobile code.

You can call pause() or resume() in the capture or bubble phases.

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
<aura:handler event="c:appEvent" action="{!c.handleBubbledEvent}"
    phase="bubble" />
```

```
<aura:handler event="c:appEvent" action="{!c.handleCapturedEvent}"
    phase="capture" />
```
