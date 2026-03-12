---
title: "Inherited Component Attributes"
domain: lightning
topic: inherited-component-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.337Z
estimatedTokens: 785
keywords: [Inherited, Component, Attributes, sub, extends, super, inherits, Attribute]
---

# Inherited Component Attributes

> A sub component that extends a super component inherits the attributes of the super
        component.

# Inherited Component Attributes

A sub component that extends a super component inherits the attributes of the super component.

Attribute values are identical at any level of extension. There is an exception to this rule for the body attribute, which we'll look at more closely soon.

Let's start with a simple example. c:super has a description attribute with a value of "Default description",

```

```

Don’t worry about the {!v.body} expression for now. We’ll explain that when we talk about the body attribute.

c:sub extends c:super by setting extends="c:super" in its <aura:component> tag.

```

```

Note that sub.cmp has access to the inherited description attribute and it has the same value in sub.cmp and super.cmp.

Use <aura:set> in the markup of a sub component to set the value of an inherited attribute.

## Inherited body Attribute

Every component inherits the body attribute from <aura:component>. The inheritance behavior of body is different than other attributes. It can have different values at each level of component extension to enable different output from each component in the inheritance chain. This will be clearer when we look at an example.

Any free markup that is not enclosed in another tag is assumed to be part of the body. It's equivalent to wrapping that free markup inside <aura:set attribute="body">.

The default renderer for a component iterates through its body attribute, renders everything, and passes the rendered data to its super component. The super component can output the data passed to it by including {!v.body} in its markup. If there is no super component, you've hit the root component and the data is inserted into document.body.

Let's look at a simple example to understand how the body attribute behaves at different levels of component extension. We have three components.

c:superBody is the super component. It inherently extends <aura:component>.

```

```

At this point, c:superBody doesn’t output anything for {!v.body} as it’s just a placeholder for data that will be passed in by a component that extends c:superBody.

c:subBody extends c:superBody by setting extends="c:superBody" in its <aura:component> tag.

```

```

c:subBody outputs:

```

```

In other words, c:subBody sets the value for {!v.body} in its super component, c:superBody.

c:containerBody contains a reference to c:subBody.

```

```

In c:containerBody, we set the body attribute of c:subBody to Body value. c:containerBody outputs:

```

```

#### See Also

-   [aura:set](atlas.en-us.lightning.meta/lightning/ref_set_intro.htm "Use <aura:set> in markup to set the value of an attribute inherited from a component or event.")

-   [Component Body](atlas.en-us.lightning.meta/lightning/components_body.htm "The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.")

-   [Component Markup](atlas.en-us.lightning.meta/lightning/components_markup.htm "Component resources contain markup and have a .cmp suffix. The markup can contain text or references to other components, and also declares metadata about the component.")

## Code Examples

```
<!--c:super-->
<aura:component extensible="true">
    <aura:attribute name="description" type="String" default="Default description" />

    <p>super.cmp description: {!v.description}</p>

    {!v.body}
</aura:component>
```

```
<!--c:sub-->
<aura:component extends="c:super">
    <p>sub.cmp description: {!v.description}</p>
</aura:component
```

```
<!--c:superBody-->
<aura:component extensible="true">
    Parent body: {!v.body}
</aura:component>
```

```
<!--c:subBody-->
<aura:component extends="c:superBody">
    Child body: {!v.body}
</aura:component>
```

```
Parent body: Child body:
```

## Related Topics

- aura:set (atlas.en-us.lightning.meta/lightning/ref_set_intro.htm)
- Component Body (atlas.en-us.lightning.meta/lightning/components_body.htm)
- Component Markup (atlas.en-us.lightning.meta/lightning/components_markup.htm)
