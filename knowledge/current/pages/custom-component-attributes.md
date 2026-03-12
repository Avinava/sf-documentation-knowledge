---
title: "Custom Component Attributes"
domain: pages
topic: custom-component-attributes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.031Z
estimatedTokens: 709
keywords: [Custom, Component, Attributes, Apart, standard, Visualforce, markup, <apex, component>, tag, specify, passed, it’s, directly]
---

# Custom Component Attributes

> Apart from standard Visualforce markup, the body of
            an <apex:component> tag can also specify the
            attributes that can be passed in to the custom component when it’s used in a Visualforce page. The values of
            such attributes can then be used directly in the component

# Custom Component Attributes

Apart from standard Visualforce markup, the body of an <apex:component\> tag can also specify the attributes that can be passed in to the custom component when it’s used in a Visualforce page. The values of such attributes can then be used directly in the component, or within the [component’s controller](atlas.en-us.pages.meta/pages/pages_comp_cust_elements_controllers.htm), if applicable. They can’t, however, be used in the constructor of the component’s controller.

Attributes are defined with the <apex:attribute\> tag. For example, the following custom component definition specifies two required attributes named value and textColor. Values for these attributes are referenced in the custom component definition using standard {! } Visualforce expression language syntax:

```

```

Use this component in a Visualforce page with the following markup:

```

```

An <apex:attribute\> tag requires values for the name, description, and type attributes:

-   The name attribute defines how the custom attribute can be referenced in Visualforce pages. The name must be unique across components and is case insensitive. For example, if two attributes are named "Model" and "model", the package treats them the same, potentially causing unexpected behavior.
-   The description attribute defines the help text for the attribute that appears in the component reference library once the custom component has been saved. The custom component is listed in the reference library with the standard components that are also available.
-   The type attribute defines the Apex data type of the attribute. Only the following data types are allowed as values for the type attribute:
    -   Primitives, such as String, Integer, or Boolean.
    -   sObjects, such as Account, My\_Custom\_Object\_\_c, or the generic sObject type.
    -   One-dimensional lists, specified using array-notation, such as String\[\], or Contact\[\].
    -   Maps, specified using type="map". You don’t need to specify the map’s specific data type.
    -   Custom Apex classes.

For information on additional <apex:attribute\> attributes, see [apex:attribute](atlas.en-us.pages.meta/pages/pages_compref_attribute.htm).

## Default Custom Component Attributes

Two attributes are always generated for custom components. These attributes don’t need to be included in your component definition:

id

An identifier that allows the custom component to be referenced by other components in the page. If not specified, a unique identifier is generated automatically.

rendered

A Boolean value that specifies whether the custom component is rendered on the page. If not specified, this value defaults to true.

#### See Also

-   [Best Practices for Accessing Component IDs](atlas.en-us.pages.meta/pages/pages_best_practices_accessing_id.htm)

## Code Examples

```
<apex:component>
    <!-- Attribute Definitions -->
    <apex:attribute name="myValue" description="This is the value for the component."
                    type="String" required="true"/>
    <apex:attribute name="textColor" description="This is color for the text."
                    type="String" required="true"/>

    <!-- Component Definition -->
    <h1 style="color:{!textColor};">
        <apex:outputText value="{!myValue}"/> 
    </h1> 
</apex:component>
```

```
<c:myComponent myValue="My value" textColor="red"/>
```

## Related Topics

- component’s controller (atlas.en-us.pages.meta/pages/pages_comp_cust_elements_controllers.htm)
- apex:attribute (atlas.en-us.pages.meta/pages/pages_compref_attribute.htm)
- Best Practices for Accessing Component IDs (atlas.en-us.pages.meta/pages/pages_best_practices_accessing_id.htm)
