---
title: "Setting Attributes Inherited from a Super Component"
domain: lightning
topic: setting-attributes-inherited-from-a-super-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.861Z
estimatedTokens: 439
keywords: [Setting, Attributes, Inherited, Super, Component, <aura, set>, markup, sub, attribute]
---

# Setting Attributes Inherited from a Super Component

> Use <aura:set> in
                the markup of a sub component to set the value of an inherited attribute.

# Setting Attributes Inherited from a Super Component

Use <aura:set> in the markup of a sub component to set the value of an inherited attribute.

Let's look at an example. Here is the c:setTagSuper component.

```

```

c:setTagSuper outputs:

```

```

The address1 attribute doesn't output any value yet as it hasn't been set.

Here is the c:setTagSub component that extends c:setTagSuper.

```

```

c:setTagSub outputs:

```

```

sampleSetTagExc:setTagSub sets a value for the address1 attribute inherited from the super component, c:setTagSuper.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

This usage of <aura:set> works for components and abstract components, but it doesn’t work for interfaces. For more information, see [Setting Attributes Inherited from an Interface](atlas.en-us.lightning.meta/lightning/ref_tag_set_attr_intf.htm).

If you’re using a component by making a reference to it in your component, you can set the attribute value directly in the markup. For example, c:setTagSuperRef makes a reference to c:setTagSuper and sets the address1 attribute directly without using aura:set.

```

```

c:setTagSuperRef outputs:

```

```

#### See Also

-   [Component Body](atlas.en-us.lightning.meta/lightning/components_body.htm "The root-level tag of every component is <aura:component>. Every component inherits the body attribute from <aura:component>.")

-   [Inherited Component Attributes](atlas.en-us.lightning.meta/lightning/oo_cmp_attributes.htm "A sub component that extends a super component inherits the attributes of the super component.")

-   [Setting Attributes on a Component Reference](atlas.en-us.lightning.meta/lightning/ref_tag_set_cmp_ref.htm)

## Code Examples

```
<!--c:setTagSuper-->
<aura:component extensible="true">
    <aura:attribute name="address1" type="String" />
    setTagSuper address1: {!v.address1}<br/>
</aura:component>
```

```
setTagSuper address1:
```

```
<!--c:setTagSub-->
<aura:component extends="c:setTagSuper">
    <aura:set attribute="address1" value="808 State St" />
</aura:component>
```

```
setTagSuper address1: 808 State St
```

```
<!--c:setTagSuperRef-->
<aura:component>
    <c:setTagSuper address1="1 Sesame St" />
</aura:component>
```

## Related Topics

- Setting Attributes Inherited from an Interface (atlas.en-us.lightning.meta/lightning/ref_tag_set_attr_intf.htm)
- Component Body (atlas.en-us.lightning.meta/lightning/components_body.htm)
- Inherited Component Attributes (atlas.en-us.lightning.meta/lightning/oo_cmp_attributes.htm)
- Setting Attributes on a Component Reference (atlas.en-us.lightning.meta/lightning/ref_tag_set_cmp_ref.htm)
