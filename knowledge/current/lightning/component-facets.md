---
title: "Component Facets"
domain: lightning
topic: component-facets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.275Z
estimatedTokens: 348
keywords: [Component, Facets, facet, any, attribute, Aura.Component, placeholder, block, markup]
---

# Component Facets

> A facet is any attribute of type Aura.Component[]. Use this type as a placeholder for a block of markup. The
            body attribute is an example of a facet.

# Component Facets

A facet is any attribute of type Aura.Component\[\]. Use this type as a placeholder for a block of markup. The body attribute is an example of a facet.

To define your own facet, add an aura:attribute tag of type Aura.Component\[\], which is an array of components, to your component. For example, let's create a component called facetHeader.cmp.

```

```

This component has a header facet. Note how we position the output of the header using the v.header expression.

The component doesn't have any output when you access it directly as the header and body attributes aren't set. Let’s create another component, helloFacets.cmp, that sets these attributes.

```

```

The aura:set tag sets the value of the header attribute of facetHeader.cmp.

The body attribute is special. You don’t need to use aura:set if you’re setting the body attribute. Any free markup that’s not enclosed in one of the tags allowed in a component is assumed to be part of the body and is set in the body attribute.

If you use c:helloFacets in an app, the output is:

```

```

#### See Also

-   [Component Body](atlas.en-us.lightning.meta/lightning/components_body.htm "The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.")

-   [Framework-Specific Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_aura.htm)

## Code Examples

```
<!--c:facetHeader-->
<aura:component>
    <aura:attribute name="header" type="Aura.Component[]"/>

    <div>
        <span class="headerClass">{!v.header}</span><br/>
        <span class="bodyClass">{!v.body}</span>
    </div>
</aura:component>
```

```
<!--c:helloFacets-->
<aura:component>
    See how we set the header facet.<br/>

    <c:facetHeader>

        This is the component body for facetHeader.

        <aura:set attribute="header">
            Hello Header!
        </aura:set>
    </c:facetHeader>

</aura:component>
```

```
See how we set the header facet.
Hello Header!
This is the component body for facetHeader.
```

## Related Topics

- Component Body (atlas.en-us.lightning.meta/lightning/components_body.htm)
- Framework-Specific Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_aura.htm)
