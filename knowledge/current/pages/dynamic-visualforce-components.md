---
title: "Dynamic Visualforce Components"
domain: pages
topic: dynamic-visualforce-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.452Z
estimatedTokens: 778
namespace: Component.Apex.DataTable
keywords: [Dynamic, Visualforce, Components, primarily, intended, markup-driven, language, lets, developers, user, matches, Salesforce, look-and-feel, However, there]
---

# Dynamic Visualforce Components

> Visualforce is primarily intended to be
   a static, markup-driven language that lets developers create a user interface that matches the
    Salesforce look-and-feel. However, there
   are occasions when it’s necessary to programmatically create a page. Usually, this is to
   achieve complicated us

**Namespace:** `Component.Apex.DataTable`

# Dynamic Visualforce Components

Visualforce is primarily intended to be a static, markup-driven language that lets developers create a user interface that matches the Salesforce look-and-feel. However, there are occasions when it’s necessary to programmatically create a page. Usually, this is to achieve complicated user interface behavior that’s difficult or impossible with standard markup.

Dynamic Visualforce components offer a way to create Visualforce pages that vary the content or arrangement of the component tree according to a variety of states, such as a user’s permissions or actions, user or organization preferences, the data being displayed, and so on. Rather than using standard markup, dynamic Visualforce components are designed in Apex.

A dynamic Visualforce component is defined in Apex like this:

```

```

For example, <apex:dataTable\> becomes Component.Apex.DataTable.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The [Standard Visualforce Component Reference](atlas.en-us.pages.meta/pages/pages_compref.htm "This section provides a full list of standard Visualforce components.") contains the dynamic representation for all valid Visualforce components.

Visualforce components that are dynamically represented in Apex behave like regular classes. Every attribute that exists on a standard Visualforce component is available as a property in the corresponding Apex representation with get and set methods. For example, you could manipulate the value attribute on an <apex:outputText\> component as follows:

```

```

Consider using dynamic Visualforce components in the following scenarios:

-   You can use dynamic Visualforce components inside complex control logic to assemble components in combinations that would be challenging or impossible to create using equivalent standard Visualforce. For example, with standard Visualforce components, you typically control the visibility of components using the rendered attribute with the global IF() formula function. By writing your control logic in Apex, you can choose to display components dynamically with a more natural mechanism.
-   If you know that you’ll be iterating over objects with certain fields, but not specifically which objects, dynamic Visualforce components can “plug in” the object representation by using a generic sObject reference. For more information, see [Example Using a Related List](atlas.en-us.pages.meta/pages/pages_dynamic_vf_components_sample.htm#pages_dynamic_vf_components_sample).

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

Dynamic Visualforce components are not intended to be the primary way to create new Visualforce pages in your organization. Existing Visualforce pages shouldn’t be rewritten in a dynamic manner and, for most use cases, standard Visualforce components are acceptable and preferred. You should only use dynamic Visualforce components when the page must adapt itself to user state or actions in ways that can’t be elegantly coded into static markup.

## Code Examples

```
Component.Component_namespace.Component_name
```

```
Component.Apex.OutputText outText = new Component.Apex.OutputText();
outText.value = 'Some dynamic output text.';
```

## Related Topics

- Standard Visualforce Component Reference (atlas.en-us.pages.meta/pages/pages_compref.htm)
- Example Using a Related List (atlas.en-us.pages.meta/pages/pages_dynamic_vf_components_sample.htm)
