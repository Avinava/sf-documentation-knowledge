---
title: "Setting Attributes on a Component Reference"
domain: lightning
topic: setting-attributes-on-a-component-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.865Z
estimatedTokens: 225
keywords: [Setting, Attributes, Component, include, another, <lightning, button>, call, <aura, set>, attribute, includes]
---

# Setting Attributes on a Component Reference

> When you include another component, such as <lightning:button>, in a component, we call that a component reference
            to <lightning:button>. You can use <aura:set> to set an attribute on the component
            reference. For example, if your component includes a reference to <lightning:b

# Setting Attributes on a Component Reference

When you include another component, such as <lightning:button>, in a component, we call that a component reference to <lightning:button>. You can use <aura:set> to set an attribute on the component reference. For example, if your component includes a reference to <lightning:button>:

```

```

This is equivalent to:

```

```

The latter syntax without aura:set makes more sense in this simple example. You can also use this simpler syntax in component references to set values for attributes that are inherited from parent components.

aura:set is more useful when you want to set markup as the attribute value. For example, this sample specifies the markup for the else attribute in the aura:if tag.

```

```

#### See Also

-   [Setting Attributes Inherited from a Super Component](atlas.en-us.lightning.meta/lightning/ref_tag_set_attr_super.htm)

## Code Examples

```
<lightning:button label="Save">
    <aura:set attribute="variant" value="brand"/>
</lightning:button>
```

```
<lightning:button label="Save" variant="brand" />
```

```
<aura:component>
    <aura:attribute name="display" type="Boolean" default="true"/>
    <aura:if isTrue="{!v.display}">
        Show this if condition is true
        <aura:set attribute="else">
           <lightning:button label="Save" onclick="{!c.saveRecord}" />
        </aura:set>
    </aura:if>
</aura:component>
```

## Related Topics

- Setting Attributes Inherited from a Super Component (atlas.en-us.lightning.meta/lightning/ref_tag_set_attr_super.htm)
