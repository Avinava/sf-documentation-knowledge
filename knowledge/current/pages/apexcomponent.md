---
title: "apex:component"
domain: pages
topic: apexcomponent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.340Z
estimatedTokens: 1227
keywords: [apex, component, custom, Visualforce, definitions, wrapped, inside, <apex, component>, tag, Attributes]
---

# apex:component

> A custom Visualforce component. All custom component definitions must be wrapped inside a single <apex:component> tag.

# apex:component

A custom Visualforce component. All custom component definitions must be wrapped inside a single <apex:component\> tag.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container tag, <div\> or <span\>, depending on the layout attribute.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| access | String | Indicates whether the component can be used outside of any page in the same namespace as the component. Possible values are "public" (default) and "global". Use global to indicate the component can be used outside of the component’s namespace. If the access attribute is set to global, the access attribute on all required child apex:attributes must also be set to global. If the access attribute is set to public, the access attribute on child apex:attributes cannot be set to global. Note: Components with this designation are subject to the deprecation policies as described for managed packages. |  | 14.0 |  |
| allowDML | Boolean | If this attribute is set to "true", you can include DML within the component. The default is "false". Allowing DML can cause side-effects that could be problematic for consumers using the component with partial page updates. When allowing DML within a component, you should include rerender attributes so the consumer can appropriately refresh their page. In addition, you should detail, in the description of the component, what data is manipulated by the DML so that consumers of the component are aware of potential side-effects. |  | 13.0 | global |
| controller | String | The name of the Apex controller used to control the behavior of this custom component. |  | 12.0 | global |
| extensions | String | The name of one or more controller extensions that add additional logic to this custom component. |  | 12.0 | global |
| id | String | An identifier that allows the component to be referenced by other tags in the component definition. |  | 12.0 | global |
| language | String | The language used to display labels that have associated translations in Salesforce. This value overrides the language of the user viewing the component. Possible values for this attribute include any language keys for languages supported by Salesforce, for example, "en" or "en-US". For more information, see "Supported Languages" in Salesforce Help. |  | 12.0 | global |
| layout | String | The HTML layout style for the component. Possible values are "block" (which wraps the component with an HTML div tag), "inline" (which wraps the component with an HTML span tag), and "none" (which does not wrap the component with any generated HTML tag). If not specified, this value defaults to "inline". |  | 12.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the custom component is rendered. If not specified, this value defaults to "true". |  | 12.0 | global |
| selfClosing | Boolean | A Boolean value that specifies how the Visualforce editor closes this component. If this attribute is set to "true", the Visualforce editor auto-completes the component as a self-closing tag. If not, it auto-completes the component with open and close tags.For example, if this attribute is set to "true" on a component called myComponent, the editor will auto-complete the component tag as <c:myComponent/>. If it's set to "false", the editor will auto-complete the tag as <c:myComponent></c:myComponent>.If the component includes a componentBody, the default for this attribute is "false". If the component doesn't include a componentBody, the default for the attribute is "true". |  | 15.0 |  |
| shouldAlwaysEscapeExpressionLanguage | Boolean | The attribute shouldAlwaysEscapeExpressionLanguage was deprecated in Salesforce API version 57.0 and has no effect on the page. If you already added this attribute to Visualforce code in response to the Escape Expression Language Evaluations release update, please remove the shouldAlwaysEscapeExpressionLanguage attribute. To ensure the security of your Visualforce pages and components, complete these steps.Reintroduce any manual escaping that you removed from your Visualforce pages and components’ code for this release update.Delete the attribute shouldAlwaysEscapeExpressionLanguage from your Visualforce pages or components. | No | 57.0 |  |

#### See Also

-   [apex:componentBody](atlas.en-us.pages.meta/pages/pages_compref_componentBody.htm)

-   [Creating and Using Custom Components](atlas.en-us.pages.meta/pages/pages_comp_cust.htm)

-   [Using Custom Components in a Visualforce Page](atlas.en-us.pages.meta/pages/pages_comp_cust_using.htm)

## Code Examples

```
<!-- Page: -->
				
				<apex:page>
				<c:myComponent myValue="My component's value" borderColor="red" />
				</apex:page>
				
				<!-- Component:myComponent -->
				
				<apex:component>
				<apex:attribute name="myValue" description="This is the value for the component."
				type="String" required="true"/>
				
				<apex:attribute name="borderColor" description="This is color for the border."
				type="String" required="true"/>
				
				<h1 style="border:{!borderColor}">
				<apex:outputText value="{!myValue}"/>
				</h1>
				
				</apex:component>
```

## Related Topics

- apex:componentBody (atlas.en-us.pages.meta/pages/pages_compref_componentBody.htm)
- Creating and Using Custom Components (atlas.en-us.pages.meta/pages/pages_comp_cust.htm)
- Using Custom Components in a Visualforce Page (atlas.en-us.pages.meta/pages/pages_comp_cust_using.htm)
