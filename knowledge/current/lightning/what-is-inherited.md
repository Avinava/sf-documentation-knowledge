---
title: "What is Inherited?"
domain: lightning
topic: what-is-inherited
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.355Z
estimatedTokens: 884
keywords: [Inherited, topic, extend, definition, component, Attributes, Events, Helpers, Controllers]
---

# What is Inherited?

> This topic lists what is inherited when you extend a definition, such as a component.

# What is Inherited?

This topic lists what is inherited when you extend a definition, such as a component.

When a component contains another component, we refer in the documentation to parent and child components in the containment hierarchy. When a component extends another component, we refer to sub and super components in the inheritance hierarchy.

## Component Attributes

A sub component that extends a super component inherits the attributes of the super component. Use <aura:set> in the markup of a sub component to set the value of an attribute inherited from a super component.

## Events

A sub component that extends a super component can handle events fired by the super component. The sub component automatically inherits the event handlers from the super component.

The super and sub component can handle the same event in different ways by adding an <aura:handler> tag to the sub component. The framework doesn't guarantee the order of event handling.

## Helpers

A sub component's helper inherits the methods from the helper of its super component. A sub component can override a super component's helper method by defining a method with the same name as an inherited method.

## Controllers

A sub component that extends a super component can call actions in the super component's client-side controller. For example, if the super component has an action called doSomething, the sub component can directly call the action using the {!c.doSomething} syntax.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

We don't recommend using inheritance of client-side controllers as this feature may be deprecated in the future to preserve better component encapsulation. We recommend that you put common code in a helper instead.

#### See Also

-   [Favor Composition Over Inheritance](atlas.en-us.lightning.meta/lightning/oo_favor_composition.htm "Aura supports inheritance, but it favors composition. When possible, use composition.")

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

-   [Communicating with Events](atlas.en-us.lightning.meta/lightning/events_intro.htm "The framework uses event-driven programming. You write handlers that respond to interface events as they occur. The events may or may not have been triggered by user interaction.")

-   [Sharing JavaScript Code in a Component Bundle](atlas.en-us.lightning.meta/lightning/js_helper.htm "Put functions that you want to reuse in the component’s helper. Helper functions also enable specialization of tasks, such as processing data and queueing server-side actions. Helper functions are local to a component, improve code reuse, and move the heavy lifting of JavaScript logic away from the client-side controller, where possible.")

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [aura:set](atlas.en-us.lightning.meta/lightning/ref_set_intro.htm "Use <aura:set> in markup to set the value of an attribute inherited from a component or event.")

## Related Topics

- Favor Composition Over Inheritance (atlas.en-us.lightning.meta/lightning/oo_favor_composition.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Communicating with Events (atlas.en-us.lightning.meta/lightning/events_intro.htm)
- Sharing JavaScript Code in a Component Bundle (atlas.en-us.lightning.meta/lightning/js_helper.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- aura:set (atlas.en-us.lightning.meta/lightning/ref_set_intro.htm)
