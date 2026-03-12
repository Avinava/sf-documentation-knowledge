---
title: "Component"
domain: lightning
topic: component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.643Z
estimatedTokens: 1293
keywords: [Component, work, components]
---

# Component

> Component contains methods to work with
  components.

# Component

Component contains methods to work with components.

## Methods

-   **[addEventHandler()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addEventHandler.htm)**
    Dynamically adds an event handler for a component or application event.
-   **[addHandler()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addHandler.htm)**
    Deprecated. Use addEventHandler() instead.
-   **[addValueHandler()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addValueHandler.htm)**
    Adds handlers to values owned by the component.
-   **[addValueProvider()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addValueProvider.htm)**
    Adds custom value providers to a component.
-   **[autoDestroy()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_autoDestroy.htm)**
    Sets a flag to tell the rendering service whether or not to destroy this component when it is removed from its rendering facet.
-   **[clearReference()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_clearReference.htm)**
    Clears a live reference for the value passed in using property syntax. For example, if you use aura:set to set a value and later want to reset the value using component.set(), clear the reference before resetting the value.
-   **[destroy()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_destroy.htm)**
    Destroys the component and cleans up memory. After a component that is declared in markup is no longer in use, the framework automatically destroys it and frees up its memory. If you create a component dynamically in JavaScript and that component isn't added to a facet (v.body or another attribute of type Aura.Component\[\]), you have to destroy it manually using destroy() to avoid memory leaks.
-   **[find()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_find.htm)**
    Locates a component using its local ID (aura:id).
-   **[get()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_get.htm)**
    Returns the value referenced using property syntax. For example, cmp.get("v.attr") returns the value of the attr attribute.
-   **[getConcreteComponent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getConcreteComponent.htm)**
    Gets the concrete implementation of a component. If the component is concrete, the method returns the component itself. For example, call this method to get the concrete component of a super component.
-   **[getElement()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getElement.htm)**
    If the component renders only a single element, return it. Otherwise, use getElements().
-   **[getElements()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getElements.htm)**
    Returns a map of the elements rendered by the component.
-   **[getEvent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getEvent.htm)**
    Returns a new event instance of the named component event.
-   **[getGlobalId()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getGlobalId.htm)**
    Gets the global ID, which is the generated globally unique id of the component. It can be used to locate the instance later, but will change across page loads.
-   **[getLocalId()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getLocalId.htm)**
    Gets the ID set using the aura:id attribute. Pass the local ID into find() on the parent component to locate this child component.
-   **[getName()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getName.htm)**
    Returns the component’s code-compatible camel case name, such as 'lightningButton'.
-   **[getReference()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getReference.htm)**
    Returns a live reference to the value indicated using property syntax. This method is useful when you dynamically create a component.
-   **[getSuper()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getSuper.htm)**
    Returns the super component.
-   **[getType()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getType.htm)**
    Returns the component’s canonical type; for example, 'lightning:button'.
-   **[getVersion()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getVersion.htm)**
    Returns the component’s version number.
-   **[isConcrete()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_isConcrete.htm)**
    Returns true if the component is concrete, or false otherwise. A concrete component is a sub-component in an inheritance chain.
-   **[isInstanceOf()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_isInstanceOf.htm)**
    Checks whether a component is an instance of the given component or interface name.
-   **[isValid()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_isValid.htm)**
    Returns true if the component has not been destroyed.
-   **[removeEventHandler()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_removeEventHandler.htm)**
    Dynamically removes a component event handler for the specified event.
-   **[set()](atlas.en-us.lightning.meta/lightning/ref_jsapi_component_set.htm)**
    Sets the value referenced using property syntax.

## Related Topics

- addEventHandler() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addEventHandler.htm)
- addHandler() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addHandler.htm)
- addValueHandler() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addValueHandler.htm)
- addValueProvider() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_addValueProvider.htm)
- autoDestroy() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_autoDestroy.htm)
- clearReference() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_clearReference.htm)
- destroy() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_destroy.htm)
- find() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_find.htm)
- get() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_get.htm)
- getConcreteComponent() (atlas.en-us.lightning.meta/lightning/ref_jsapi_component_getConcreteComponent.htm)
