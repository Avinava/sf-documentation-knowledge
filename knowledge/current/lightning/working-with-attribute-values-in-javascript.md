---
title: "Working with Attribute Values in JavaScript"
domain: lightning
topic: working-with-attribute-values-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.049Z
estimatedTokens: 564
keywords: [Working, Attribute, JavaScript, common, patterns, useful, Deep, Validate, Defined, Empty]
---

# Working with Attribute Values in JavaScript

> These common patterns are useful for working with attribute values in
  JavaScript.

# Working with Attribute Values in JavaScript

These common patterns are useful for working with attribute values in JavaScript.

component.get(String key) and component.set(String key, Object value) retrieves and assigns values associated with the specified key on the component. Keys are passed in as an expression, which represents an attribute value.

To retrieve an attribute value of a component reference, use component.find("cmpId").get("v.value").

Similarly, to set the attribute value of a component reference, use component.find("cmpId").set("v.value", myValue).

This example shows how you can retrieve and set attribute values on a component reference, represented by the button with an ID of button1.

```

```

This controller action retrieves the label attribute value of a button in a component and sets its value on the buttonLabel attribute.

```

```

In the following examples, cmp is a reference to a component in your JavaScript code.

To get the value of a component’s label attribute:

```

```

## Set an Attribute Value

To set the value of a component’s label attribute:

```

```

## Deep Set an Attribute Value

If an attribute has an object or collection type, such as Map, you can deep set properties in the attribute value using the dot notation for expressions. For example, this code sets a value for the firstName property in the user attribute.

```

```

For deeply nested objects and attributes, continue adding dots to traverse the structure and access the nested values.

Let’s look at a component with a user attribute of type Map.

```

```

When you click the button in the component, you call the deepSet action in the client-side controller.

```

```

The component.set("v.user.firstName", "Nina") line sets a value for the firstName property in the user attribute.

## Validate That an Attribute Value Is Defined

To determine if a component’s label attribute is defined:

```

```

## Validate That an Attribute Value Is Empty

To determine if a component’s label attribute is empty:

```

```

#### See Also

-   [Working with a Component Body in JavaScript](atlas.en-us.lightning.meta/lightning/js_cmp_body.htm "These are useful and common patterns for working with a component’s body in JavaScript.")

## Code Examples

```
<aura:component>
    <aura:attribute name="buttonLabel" type="String"/>
    <lightning:button aura:id="button1" label="Button 1"/>
    {!v.buttonLabel}
    <lightning:button label="Get Label" onclick="{!c.getLabel}"/>
</aura:component>
```

```
({
    getLabel : function(component, event, helper) {
        var myLabel = component.find("button1").get("v.label");
        component.set("v.buttonLabel", myLabel);
    }
})
```

```
var label = cmp.get("v.label");
```

```
cmp.set("v.label","This is a label");
```

```
component.set("v.user.firstName", "Nina");
```

## Related Topics

- Working with a Component Body in JavaScript (atlas.en-us.lightning.meta/lightning/js_cmp_body.htm)
