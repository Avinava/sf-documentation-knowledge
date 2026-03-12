---
title: "Calling Component Methods"
domain: lightning
topic: calling-component-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.125Z
estimatedTokens: 813
keywords: [Calling, Component, <aura, method>, define, part, component's, API, directly, call, component’s, client-side, controller, instead, firing]
---

# Calling Component Methods

> Use <aura:method> to define a method
            as part of a component's API. This enables you to directly call a method in a
            component’s client-side controller instead of firing and handling a component event.
            Using <aura:method> simplifies the code
            needed for a parent component to call a method on a child component that it
            contains.

# Calling Component Methods

Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.

## Communicate Between Components

Use aura:method to communicate down the containment hierarchy. For example, a parent component calls an aura:method on a child component that it contains.

To communicate up the containment hierarchy, fire a component event in the child component and handle it in the parent component.

## Syntax

Use this syntax to call a method in JavaScript code.

```

```

cmp is a reference to the component.

sampleMethod is the name of the aura:method.

arg1, … argN is an optional comma-separated list of arguments passed to the method. Each argument corresponds to an aura:attribute defined in the aura:method markup.

## Using Inherited Methods

A sub component that extends a super component has access to any methods defined in the super component.

An interface can also include an <aura:method> tag. A component that implements the interface can access the method.

## Example

Let's look at an example app.

```

```

c:auraMethodCallerWrapper.app contains a c:auraMethodCaller component.

```

```

c:auraMethodCaller is the parent component. c:auraMethodCaller contains the child component, c:auraMethod.

We'll show how c:auraMethodCaller calls an aura:method defined in c:auraMethod.

We'll use c:auraMethodCallerWrapper.app to see how to return results from synchronous and asynchronous code.

-   **[Return Result for Synchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_sync.htm)**
    aura:method executes synchronously. A synchronous method finishes executing before it returns. Use the return statement to return a value from synchronous JavaScript code.
-   **[Return Result for Asynchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm)**
    aura:method executes synchronously. Use the return statement to return a value from synchronous JavaScript code. JavaScript code that calls a server-side action is asynchronous. Asynchronous code can continue to execute after it returns. You can’t use the return statement to return the result of an asynchronous call because the aura:method returns before the asynchronous code completes. For asynchronous code, use a callback instead of a return statement.

#### See Also

-   [aura:method](atlas.en-us.lightning.meta/lightning/ref_tag_method.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

-   [Component Events](atlas.en-us.lightning.meta/lightning/events_component.htm "A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

## Code Examples

```
cmp.sampleMethod(arg1, … argN);
```

```
<!-- c:auraMethodCallerWrapper.app -->
<aura:application >
    <c:auraMethodCaller />
</aura:application>
```

```
<!-- c:auraMethodCaller.cmp -->
<aura:component >
    <p>Parent component calls aura:method in child component</p>
    <c:auraMethod aura:id="child" />
    
    ...
</aura:component>
```

## Related Topics

- Return Result for Synchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_sync.htm)
- Return Result for Asynchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm)
- aura:method (atlas.en-us.lightning.meta/lightning/ref_tag_method.htm)
- Component Events (atlas.en-us.lightning.meta/lightning/events_component.htm)
