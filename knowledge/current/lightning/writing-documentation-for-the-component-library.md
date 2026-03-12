---
title: "Writing Documentation for the Component Library"
domain: lightning
topic: writing-documentation-for-the-component-library
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.790Z
estimatedTokens: 1223
keywords: [Writing, Documentation, Component, Library, helps, developers, components, develop, their, apps, effectively, provide, interactive, examples, specification]
---

# Writing Documentation for the Component Library

> Documentation helps developers use your components to develop their apps more
    effectively. You can provide interactive examples, documentation, and specification descriptions
    for a component, event, or interface.

# Writing Documentation for the Component Library

Documentation helps developers use your components to develop their apps more effectively. You can provide interactive examples, documentation, and specification descriptions for a component, event, or interface.

Each component, event, or interface has a root definition that defines the element’s metadata, as well as attributes, events, or methods.

Component

A component’s root definition is specified in the <aura:component> tag contained in componentName.cmp, as described in [Component Markup](atlas.en-us.lightning.meta/lightning/components_markup.htm "Component resources contain markup and have a .cmp suffix. The markup can contain text or references to other components, and also declares metadata about the component.").

Event

An event’s root definition is specified in the <aura:event> tag contained in componentEvent.evt, as described in [Create Custom Component Events](atlas.en-us.lightning.meta/lightning/events_component_create.htm "Create a custom component event using the <aura:event> tag in a .evt resource. Events can contain attributes that can be set before the event is fired and read when the event is handled.").

Interface

An interface’s root definition is specified in the <aura:interface> tag contained in the interfaceName.intf, as described in [Interfaces](atlas.en-us.lightning.meta/lightning/oo_interfaces.htm "Interfaces define a component’s shape by defining attributes, events, or methods that any implementing component contains. To use an interface, a component must implement it. An interface can’t be used directly in markup.").

The root definition tag determines whether the element is exposed in the [Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker."). You provide the documentation for each element in an .auradoc file that accompanies the other files that define the component, event, or interface.

## Viewing the Documentation

View the Component Library through your org at https://MyDomainName.my.salesforce.com/docs/component-library. Alternatively, view the unauthenticated Component Library at https://developer.salesforce.com/docs/component-library/.

For namespaces that you own, elements with either access="global" or access="public"(default) are surfaced in the Component Library when it’s accessed through your org.

In the unauthenticated Component Library, only the elements with access="global" are visible.

For managed package namespaces, only elements with access="global" are surfaced in the Component Library. Elements with access="public" can be used only by components in the same namespace in the same org. They aren’t available to other orgs that install the package, so they aren’t surfaced in the Component Library. Only global components in managed packages are visible because they are intended for use in any namespace in any org.

Each element can display up to three tabs in the following order.

Example

Displays interactive examples denoted by the <aura:example> tag in the .auradoc file. This tab is hidden if no examples are wired up in your .auradoc file. This tab is not supported if your component has dependency on org data, such as with lightning:recordForm.

Documentation

Displays the content of the .auradoc file. This tab is hidden if an .auradoc file is not available for your component, event, or interface.

Specification

Displays the description of the root definition, attributes, and methods. For namespaces you own, attributes and methods with either access="global" or access="public"(default) are surfaced in the Component Library when it’s accessed through your org. For managed package namespaces, only access="global" attributes and methods are visible.

-   **[Creating Examples](atlas.en-us.lightning.meta/lightning/docs_examples.htm)**
    Examples are interactive and help others learn about a component, event, or interface.
-   **[Creating Documentation Content](atlas.en-us.lightning.meta/lightning/docs_auradoc.htm)**
    Documentation provides usage guidelines and code samples about a component, event, or interface.
-   **[Providing Specification Information and Descriptions](atlas.en-us.lightning.meta/lightning/docs_specs.htm)**
    Descriptions on the **Specification** tab describes a root definition and its attributes and methods.

#### See Also

-   [Controlling Access](atlas.en-us.lightning.meta/lightning/access_intro.htm "The framework enables you to control access to your applications, attributes, components, events, interfaces, and methods via the access system attribute. The access system attribute indicates whether the resource can be used outside of its own namespace.")

## Related Topics

- Component Markup (atlas.en-us.lightning.meta/lightning/components_markup.htm)
- Create Custom Component Events (atlas.en-us.lightning.meta/lightning/events_component_create.htm)
- Interfaces (atlas.en-us.lightning.meta/lightning/oo_interfaces.htm)
- Component
        Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
- Creating Examples (atlas.en-us.lightning.meta/lightning/docs_examples.htm)
- Creating Documentation Content (atlas.en-us.lightning.meta/lightning/docs_auradoc.htm)
- Providing Specification Information and Descriptions (atlas.en-us.lightning.meta/lightning/docs_specs.htm)
- Controlling Access (atlas.en-us.lightning.meta/lightning/access_intro.htm)
