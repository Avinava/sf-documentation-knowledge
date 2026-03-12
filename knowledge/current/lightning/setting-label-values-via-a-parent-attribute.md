---
title: "Setting Label Values via a Parent Attribute"
domain: lightning
topic: setting-label-values-via-a-parent-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.222Z
estimatedTokens: 434
keywords: [Setting, Label, via, Parent, Attribute, useful, want, control, over, labels, child, components]
---

# Setting Label Values via a Parent Attribute

> Setting label values via a parent attribute is useful if
you want control over labels in child components.

# Setting Label Values via a Parent Attribute

Setting label values via a parent attribute is useful if you want control over labels in child components.

Let’s say that you have a container component, which contains another component, inner.cmp. You want to set a label value in inner.cmp via an attribute on the container component. This can be done by specifying the attribute type and default value. You must set a default value in the parent attribute if you are setting a label on an inner component, as shown in the following example.

This is the container component, which contains a default value My Label for the \_label attribute .

```

```

This inner component contains a text area component and a label attribute that’s set by the container component.

```

```

This client-side controller action updates the label value.

```

```

When the component is initialized, you’ll see a button and a text area with the label My Label. When the button in the container component is clicked, the setLabel action updates the label value in the inner component. This action finds the label attribute and sets its value to new label.

#### See Also

-   [Input Component Labels](atlas.en-us.lightning.meta/lightning/labels_overview.htm "A label describes the purpose of an input component. To set a label on an input component, use the label attribute.")

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

## Code Examples

```
<aura:component>
    <aura:attribute name="_label" 
                    type="String" 
                    default="My Label"/>
    <lightning:button label="Set Label" aura:id="button1" onclick="{!c.setLabel}"/>
    <auradocs:inner aura:id="inner" label="{!v._label}"/>
</aura:component>
```

```
<aura:component>
    <aura:attribute name="label" type="String"/>
    <lightning:textarea aura:id="textarea"
                      name="myTextarea"
                      label="{!v.label}"/>
</aura:component>
```

```
({
    setLabel:function(cmp) {
        cmp.set("v._label", 'new label');
    }
})
```

## Related Topics

- Input Component Labels (atlas.en-us.lightning.meta/lightning/labels_overview.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
