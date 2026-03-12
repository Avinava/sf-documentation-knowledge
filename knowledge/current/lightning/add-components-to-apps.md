---
title: "Add Components to Apps"
domain: lightning
topic: add-components-to-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.962Z
estimatedTokens: 933
keywords: [Add, Components, Apps, you’re, ready, app, look, built-in, base, Salesforce, framework, extending, composition, custom, building]
---

# Add Components to Apps

> When you’re ready to add components to your app, first look at the built-in base
        components that Salesforce provides with the framework. You can also use these components by
        extending them or using composition to add them to custom components that you’re
        building.

# Add Components to Apps

When you’re ready to add components to your app, first look at the built-in base components that Salesforce provides with the framework. You can also use these components by extending them or using composition to add them to custom components that you’re building.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For all the base components, see the [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker."). The lightning namespace includes many base components that implement visual elements common on web pages.

If you can’t find a base component that meets your requirements, consider these options.

-   Use [design variations](atlas.en-us.lightning.meta/lightning/lightning_base_variants.htm "Base component variants correspond to blueprint variations in Lightning Design System. Variants change the appearance of a component and are controlled by the variant attribute.") on base components.
-   Apply [utility classes](https://www.lightningdesignsystem.com/utilities/alignment/ "HTML (New Window)") or custom CSS classes.
-   Combine smaller base components into a more complex, custom component.
-   Create your custom component from [Lightning Design System blueprints](https://www.lightningdesignsystem.com/components/overview/ "HTML (New Window)").

Components are encapsulated and their internals stay private, while their public shape is visible to consumers of the component. This strong separation gives component authors freedom to change the internal implementation details and insulates component consumers from those changes.

The public shape of a component is defined by the attributes that can be set and the events that interact with the component. The shape is essentially the API for developers to interact with the component. To design a new component, think about the attributes that you want to expose and the events that the component can initiate or respond to.

After you’ve defined the shape of any new components, developers can work on the components in parallel. This approach is useful if you have a team working on an app.

To add a custom component to your app, see [Using the Developer Console](atlas.en-us.lightning.meta/lightning/intro_devconsole.htm "The Developer Console provides tools for developing your Aura components and applications.").

#### See Also

-   [Component Composition](atlas.en-us.lightning.meta/lightning/components_composition.htm "Composing fine-grained components in a larger component enables you to build more interesting components and applications.")

-   [Using Object-Oriented Development](atlas.en-us.lightning.meta/lightning/oo_intro.htm "The framework provides the basic constructs of inheritance and encapsulation from object-oriented programming and applies them to presentation layer development.")

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

-   [Communicating with Events](atlas.en-us.lightning.meta/lightning/events_intro.htm "The framework uses event-driven programming. You write handlers that respond to interface events as they occur. The events may or may not have been triggered by user interaction.")

## Related Topics

- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
- design variations (atlas.en-us.lightning.meta/lightning/lightning_base_variants.htm)
- Using the
                Developer Console (atlas.en-us.lightning.meta/lightning/intro_devconsole.htm)
- Component Composition (atlas.en-us.lightning.meta/lightning/components_composition.htm)
- Using Object-Oriented Development (atlas.en-us.lightning.meta/lightning/oo_intro.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Communicating with Events (atlas.en-us.lightning.meta/lightning/events_intro.htm)
