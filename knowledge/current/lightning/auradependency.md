---
title: "aura:dependency"
domain: lightning
topic: auradependency
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.849Z
estimatedTokens: 820
keywords: [aura, dependency, <aura, dependency>, tag, declare, dependencies, improves, their, discoverability, framework]
---

# aura:dependency

> The <aura:dependency> tag enables you to declare
  dependencies, which improves their discoverability by the framework.

# aura:dependency

The <aura:dependency> tag enables you to declare dependencies, which improves their discoverability by the framework.

The framework automatically tracks dependencies between definitions, such as components, defined in markup. This enables the framework to send the definitions to the browser. However, if a component’s JavaScript code dynamically instantiates another component or fires an event that isn’t directly referenced in the component’s markup, use <aura:dependency> in the component’s markup to explicitly tell the framework about the dependency. Adding the <aura:dependency> tag ensures that a definition, such as a component, and its dependencies are sent to the client, when needed.

For example, adding this tag to a component marks the sampleNamespace:sampleComponent component as a dependency.

```

```

Add this tag to component markup to mark the event as a dependency.

```

```

Use the <aura:dependency> tag if you fire an event in JavaScript code and you’re not registering the event in component markup using <aura:registerEvent>. Using an <aura:registerEvent> tag is the preferred approach.

The <aura:dependency> tag includes these system attributes.

| System Attribute | Description |
| --- | --- |
| resource | The resource that the component depends on, such as a component or event. For example, resource="markup://sampleNamespace:sampleComponent" refers to the sampleComponent in the sampleNamespace namespace.Using an asterisk (*) for wildcard matching is deprecated. Instead, add an <aura:dependency> tag for each resource that’s not directly referenced in the component’s markup. Wildcard matching can cause save validation errors when no resources match. Wildcard matching can also slow page load time because it sends more definitions than needed to the client. |
| type | The type of resource that the component depends on. The default value is COMPONENT.Using an asterisk (*) for wildcard matching is deprecated. Instead, add an <aura:dependency> tag for each resource that’s not directly referenced in the component’s markup. Be as selective as possible in the types of definitions that you send to the client.The most commonly used values are:COMPONENTEVENTINTERFACEAPPLICATIONMODULE—Use this type to add a dependency for a Lightning web componentUse a comma-separated list for multiple types; for example: COMPONENT,APPLICATION. |

#### See Also

-   [Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm "Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().")

-   [Fire Component Events](atlas.en-us.lightning.meta/lightning/events_component_fire.htm "Fire a component event to communicate data to another component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

-   [Fire Application Events](atlas.en-us.lightning.meta/lightning/events_application_fire.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

## Code Examples

```
<aura:dependency resource="markup://sampleNamespace:sampleComponent" />
```

```
<aura:dependency resource="markup://force:navigateToComponent" type="EVENT"/>
```

## Related Topics

- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
- Fire Component Events (atlas.en-us.lightning.meta/lightning/events_component_fire.htm)
- Fire Application Events (atlas.en-us.lightning.meta/lightning/events_application_fire.htm)
