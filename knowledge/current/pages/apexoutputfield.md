---
title: "apex:outputField"
domain: pages
topic: apexoutputfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.812Z
estimatedTokens: 800
keywords: [apex, outputField, read-only, display, label, Salesforce, <apex, outputField>, component, respects, attributes, associated, including, how, it’s]
---

# apex:outputField

> A read-only display of a label and value for a field on a Salesforce object. An <apex:outputField> component respects the
			attributes of the associated field, including how it’s displayed to the user. For
			example, if the specified <apex:outputField> component is a currency field, the appropriat

# apex:outputField

A read-only display of a label and value for a field on a Salesforce object. An <apex:outputField\> component respects the attributes of the associated field, including how it’s displayed to the user. For example, if the specified <apex:outputField\> component is a currency field, the appropriate currency symbol is displayed. Likewise, if the <apex:outputField\> component is a lookup field or URL, the value of the field is displayed as a link.

If custom help is defined for the field in Setup, the field must be a child of an <apex:pageBlock\> or <apex:pageBlockSectionItem\>, and the Salesforce page header must be displayed for the custom help to appear on your Visualforce page. To override the display of custom help, use the <apex:outputField\> in the body of an <apex:pageBlockSectionItem\>.

The Rich Text Area data type can only be used with this component on pages running API versions greater than 18.0.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <span\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| id | String | An identifier that allows the output field component to be referenced by other components in the page. |  | 10.0 | global |
| label | String | A string value to be used as a component label. |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display the output field component, used primarily for adding inline CSS styles. This attribute may not work for all values. If your text requires a class name, use a wrapping span tag. |  | 10.0 | global |
| styleClass | String | The style class used to display the output field component, used primarily to designate which CSS styles are applied when using an external CSS style sheet. This attribute may not work for all values. If your text requires a class name, use a wrapping span tag. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | An expression that references the Salesforce field that's associated with this output field. For example, if you want to display an output field for an account's name field, use value="{!account.name}".You can't associate an output field with a currency field if that field value is calculated using dated exchange rates. |  | 10.0 | global |

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page
with a valid opportunity record in the URL.
For example, if 001D000000IRt53 is the opportunity ID, the resulting URL should be:
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->

<apex:page standardController="Opportunity" tabStyle="Opportunity">
    <apex:pageBlock>
        <apex:pageBlockSection title="Opportunity Information">
            <apex:outputField value="{!opportunity.name}"/>
            <apex:outputField value="{!opportunity.amount}"/>
            <apex:outputField value="{!opportunity.closeDate}"/>
        </apex:pageBlockSection>
    </apex:pageBlock>
</apex:page>
```
