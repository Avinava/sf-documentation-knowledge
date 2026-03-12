---
title: "Component Attributes"
domain: lightning
topic: component-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.055Z
estimatedTokens: 922
keywords: [Component, Attributes, member, variables, Apex, They, typed, specific, instance, referenced, component's, markup, expression, enable, components]
---

# Component Attributes

> Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific
        instance of a component, and can be referenced from within the component's markup using an
        expression syntax. Attributes enable you to make components more dynamic.

# Component Attributes

Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.

Use the <aura:attribute> tag to add an attribute to the component or app. Let’s look at the following sample, helloAttributes.app:

```

```

All attributes have a name and a type. Attributes may be marked as required by specifying required="true", and may also specify a default value.

In this case we've got an attribute named whom of type String. If no value is specified, it defaults to "world".

Though not a strict requirement, <aura:attribute> tags are usually the first things listed in a component’s markup, as it provides an easy way to read the component's shape at a glance.

## Attribute Naming Rules

An attribute name must follow these naming rules:

-   Must begin with a letter or an underscore
-   Must contain only alphanumeric or underscore characters

## Expressions

helloAttributes.app contains an expression, {!v.whom}, which is responsible for the component's dynamic output.

{!expression} is the framework's expression syntax. In this case, the expression we are evaluating is v.whom. The name of the attribute we defined is whom, while v is the value provider for a component's attribute set, which represents the view.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Expressions are case sensitive. For example, if you have a custom field myNamespace\_\_Amount\_\_c, you must refer to it as {!v.myObject.myNamespace\_\_Amount\_\_c}.

-   **[Supported aura:attribute Types](atlas.en-us.lightning.meta/lightning/ref_aura_attribute.htm)**
    aura:attribute describes an attribute available on an app, interface, component, or event.
-   **[Basic Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_basic.htm)**

-   **[Function Type](atlas.en-us.lightning.meta/lightning/ref_attr_types_function.htm)**
    An attribute of an aura:method can have a type corresponding to a JavaScript function so that you can pass a function into the method. An attribute of a component can’t have a type corresponding to a JavaScript function.
-   **[Object Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_object.htm)**

-   **[Standard and Custom Object Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_object_salesforce.htm)**

-   **[Collection Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_collection.htm)**

-   **[Custom Apex Class Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm)**
    An Aura component attribute type can correspond to values held in an Apex class. An attribute type can be a custom Apex class, a List standard Apex class, or a Map standard Apex class. To use values held in other standard Apex classes, first create a custom Apex class, and then copy the needed values from instances of the standard class into your custom class.
-   **[Framework-Specific Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_aura.htm)**


#### See Also

-   [Supported aura:attribute Types](atlas.en-us.lightning.meta/lightning/ref_aura_attribute.htm "aura:attribute describes an attribute available on an app, interface, component, or event.")

-   [Using Expressions](atlas.en-us.lightning.meta/lightning/expr_overview.htm "Expressions allow you to make calculations and access property values and other data within component markup. Use expressions for dynamic output or passing values into components by assigning them to attributes.")

## Code Examples

```
<aura:application>
    <aura:attribute name="whom" type="String" default="world"/>
    Hello {!v.whom}!
</aura:application>
```

## Related Topics

- Supported aura:attribute Types (atlas.en-us.lightning.meta/lightning/ref_aura_attribute.htm)
- Basic Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_basic.htm)
- Function Type (atlas.en-us.lightning.meta/lightning/ref_attr_types_function.htm)
- Object Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_object.htm)
- Standard and Custom Object Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_object_salesforce.htm)
- Collection Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_collection.htm)
- Custom Apex Class Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm)
- Framework-Specific Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_aura.htm)
- Using Expressions (atlas.en-us.lightning.meta/lightning/expr_overview.htm)
