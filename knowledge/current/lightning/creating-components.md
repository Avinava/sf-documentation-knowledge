---
title: "Creating Components"
domain: lightning
topic: creating-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.395Z
estimatedTokens: 1686
keywords: [Creating, Components, functional, units, Lightning, Component, framework]
---

# Creating Components

> Components are the functional units of the Lightning Component framework.

# Creating Components

Components are the functional units of the Lightning Component framework.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Creating Aura components isn't supported in Starter and Pro Suite Editions.

A component encapsulates a modular and potentially reusable section of UI, and can range in granularity from a single line of text to an entire application.

-   **[Component Names](atlas.en-us.lightning.meta/lightning/components_names.htm)**
    A component name must follow the naming rules for Lightning components.
-   **[Create Aura Components in the Developer Console](atlas.en-us.lightning.meta/lightning/components_create_devconsole.htm)**
    The Developer Console is a convenient, built-in tool you can use to create new and edit existing Aura components and other bundles.
-   **[Create Aura Components Using Salesforce CLI](atlas.en-us.lightning.meta/lightning/components_create_cli.htm)**
    To develop Aura components, use Salesforce CLI to synchronize source code between your Salesforce orgs and version control system. Alternatively, you can use the Developer Console.
-   **[Component Markup](atlas.en-us.lightning.meta/lightning/components_markup.htm)**
    Component resources contain markup and have a .cmp suffix. The markup can contain text or references to other components, and also declares metadata about the component.
-   **[Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm)**
    A component bundle contains a component or an app and all its related resources.
-   **[Component IDs](atlas.en-us.lightning.meta/lightning/components_ids.htm)**
    A component has two types of IDs: a local ID and a global ID. You can retrieve a component using its local ID in your JavaScript code. A global ID can be useful to differentiate between multiple instances of a component or for debugging purposes.
-   **[HTML in Components](atlas.en-us.lightning.meta/lightning/components_html.htm)**
    An HTML tag is treated as a first-class component by the framework. Each HTML tag is translated into an <aura:html> component, allowing it to enjoy the same rights and privileges as any other component.
-   **[CSS in Components](atlas.en-us.lightning.meta/lightning/components_css.htm)**
    Style your components with CSS.
-   **[Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm)**
    Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.
-   **[Using Expressions](atlas.en-us.lightning.meta/lightning/expr_overview.htm)**
    Expressions allow you to make calculations and access property values and other data within component markup. Use expressions for dynamic output or passing values into components by assigning them to attributes.
-   **[Component Composition](atlas.en-us.lightning.meta/lightning/components_composition.htm)**
    Composing fine-grained components in a larger component enables you to build more interesting components and applications.
-   **[Component Body](atlas.en-us.lightning.meta/lightning/components_body.htm)**
    The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.
-   **[Component Facets](atlas.en-us.lightning.meta/lightning/components_facets.htm)**
    A facet is any attribute of type Aura.Component\[\]. Use this type as a placeholder for a block of markup. The body attribute is an example of a facet.
-   **[Controlling Access](atlas.en-us.lightning.meta/lightning/access_intro.htm)**
    The framework enables you to control access to your applications, attributes, components, events, interfaces, and methods via the access system attribute. The access system attribute indicates whether the resource can be used outside of its own namespace.
-   **[Using Object-Oriented Development](atlas.en-us.lightning.meta/lightning/oo_intro.htm)**
    The framework provides the basic constructs of inheritance and encapsulation from object-oriented programming and applies them to presentation layer development.
-   **[Best Practices for Conditional Markup](atlas.en-us.lightning.meta/lightning/components_conditional_markup.htm)**
    Using the <aura:if> tag is the preferred approach to conditionally display markup but there are alternatives. Consider the performance cost and code maintainability when you design components. The best design choice depends on your use case.
-   **[Aura Component Versioning for Managed Packages](atlas.en-us.lightning.meta/lightning/components_versioning.htm)**
    Aura component versioning enables you to declare dependencies against specific revisions of an installed managed package.
-   **[Base Components with Minimum API Version Requirements](atlas.en-us.lightning.meta/lightning/components_versioning_min_version.htm)**
    Some Lightning base components require the custom components that use them to be set to a minimum API version. A custom component’s API version must be equal to or later than the latest API version required by any of the components it uses.
-   **[Validations for Aura Component Code](atlas.en-us.lightning.meta/lightning/validation.htm)**
    Validate your Aura component code to ensure compatibility with Aura component APIs, best practices, and avoidance of anti-patterns. There are several ways to validate your code. Minimal save-time validations catch the most significant issues only, while Salesforce DX tools provide more comprehensive static code analysis.
-   **[Using Labels](atlas.en-us.lightning.meta/lightning/labels_intro.htm)**
    Labels are text that presents information about the user interface, such as in the header (1), input fields (2), or buttons (3). While you can specify labels by providing text values in component markup, you can also access labels stored outside your code using the $Label global value provider in expression syntax.
-   **[Localization](atlas.en-us.lightning.meta/lightning/components_l10n.htm)**
    The framework provides client-side localization support on input and output components.
-   **[Supporting Accessibility](atlas.en-us.lightning.meta/lightning/accessibility.htm)**

-   **[Writing Documentation for the Component Library](atlas.en-us.lightning.meta/lightning/docs_intro.htm)**
    Documentation helps developers use your components to develop their apps more effectively. You can provide interactive examples, documentation, and specification descriptions for a component, event, or interface.

## Related Topics

- Component Names (atlas.en-us.lightning.meta/lightning/components_names.htm)
- Create Aura Components in the Developer Console (atlas.en-us.lightning.meta/lightning/components_create_devconsole.htm)
- Create Aura Components Using Salesforce CLI (atlas.en-us.lightning.meta/lightning/components_create_cli.htm)
- Component Markup (atlas.en-us.lightning.meta/lightning/components_markup.htm)
- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
- Component IDs (atlas.en-us.lightning.meta/lightning/components_ids.htm)
- HTML in Components (atlas.en-us.lightning.meta/lightning/components_html.htm)
- CSS in Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Using Expressions (atlas.en-us.lightning.meta/lightning/expr_overview.htm)
