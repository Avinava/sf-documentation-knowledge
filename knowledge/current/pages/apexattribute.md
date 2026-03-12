---
title: "apex:attribute"
domain: pages
topic: apexattribute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.158Z
estimatedTokens: 859
keywords: [apex, attribute, definition, custom, component, tag, child, Attributes]
---

# apex:attribute

> A definition of an attribute on a custom component. The attribute tag can be a child of a
			component tag only.

# apex:attribute

A definition of an attribute on a custom component. The attribute tag can be a child of a component tag only.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| access | String | Indicates whether the attribute can be used outside of any page in the same namespace as the attribute. Possible values are "public" (default) and "global". Use global to indicate the attribute can be used outside of the attribute's namespace. If the access attribute on the parent apex:component is set to global, it must also be set to global on this component. If the access attribute on the parent apex:component is set to public, it cannot be set to global on this component. NOTE: Attributes with this designation are subject to the deprecation policies as described for managed packages in the appexchange. |  | 14.0 |  |
| assignTo | Object | A setter method that assigns the value of this attribute to a class variable in the associated custom component controller. If this attribute is used, getter and setter methods, or a property with get and set values, must be defined. |  | 12.0 | global |
| default | String | The default value for the attribute. |  | 13.0 | global |
| description | String | A text description of the attribute. This description is included in the component reference as soon as the custom component is saved. |  | 12.0 | global |
| encode | Boolean | This is a temporary option to address an issue affecting some package installations. It will be removed in the next release. Do not use unless advised to do so by Salesforce. |  | 15.0 |  |
| id | String | An identifier that allows the attribute to be referenced by other tags in the custom component definition. |  | 12.0 | global |
| name | String | The name of the attribute as it is used in Visualforce markup when the associated custom component includes a value for the attribute.The name must be unique across components and is case insensitive. For example, if two attributes are named "Model" and "model", the package treats them the same, potentially causing unexpected behavior.You can’t define attributes named id, rendered, or action. These attributes are either automatically created for all custom component definitions, or otherwise not usable. | Yes | 12.0 | global |
| required | Boolean | A Boolean value that specifies whether a value for the attribute must be provided when the associated custom component is included in a Visualforce page. If set to true, a value is required. If not specified, this value defaults to false. |  | 12.0 | global |
| type | String | The Apex data type of the attribute. If using the assignTo attribute to assign the value of this attribute to a controller class variable, the value for type must match the data type of the class variable. Only the following data types are allowed as values for the type attribute:Primitives, such as String, Integer, or Boolean.sObjects, such as Account, My_Custom_Object__c, or the generic sObject type.One-dimensional lists, specified using array-notation, such as String[], or Contact[].Maps, specified using type="map". You don't need to specify the map's specific data type.Custom Apex types (classes). | Yes | 12.0 | global |

#### See Also

-   [Custom Component Attributes](atlas.en-us.pages.meta/pages/pages_comp_cust_elements_attributes.htm)

## Code Examples

```
<!-- Page: -->

<apex:page>
    <c:myComponent myValue="My component's value" borderColor="red" />
</apex:page>

<!-- Component:myComponent -->

<apex:component>
    <apex:attribute name="myValue" description="This is the value for the component." type="String" required="true"/>
    <apex:attribute name="borderColor" description="This is color for the border." type="String" required="true"/>

    <h1 style="border:{!borderColor}">
        <apex:outputText value="{!myValue}"/>
    </h1>
</apex:component>
```

## Related Topics

- Custom Component Attributes (atlas.en-us.pages.meta/pages/pages_comp_cust_elements_attributes.htm)
