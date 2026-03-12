---
title: "apex:pageBlock"
domain: pages
topic: apexpageblock
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.887Z
estimatedTokens: 1480
keywords: [apex, pageBlock, area, uses, styling, similar, appearance, Salesforce, detail, any, content, Attributes, Facets]
---

# apex:pageBlock

> An area of a page that uses styling similar to the appearance of a Salesforce detail page, but without any default content.

# apex:pageBlock

An area of a page that uses styling similar to the appearance of a Salesforce detail page, but without any default content.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <div\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| helpTitle | String | The text that displays when a user hovers the mouse over the help link for the page block. If specified, you must also provide a value for helpURL. Note that if a value for a header facet is included in the pageBlock, this attribute is ignored. |  | 12.0 | global |
| helpUrl | String | The URL of a webpage that provides help for the page block. When this value is specified, a help link appears in the upper right corner of the page block. If specified, you must also provide a value for helpTitle. Note that if a value for a header facet is included in the pageBlock, this attribute is ignored. |  | 12.0 | global |
| id | String | An identifier that allows the pageBlock component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| mode | String | The default user mode for the pageBlock component's child elements. This value determines whether lines are drawn separating field values. Possible values are:detail -- data is displayed to the user with colored lines.maindetail -- data is displayed to the user with colored lines and a white background, just like the main detail page for records.edit -- data is displayed to the user without field lines.inlineEdit -- data is displayed as in detail mode, but child components that support it are enabled for inline editing.Displayed lines have nothing to do with requiredness, they are merely visual separators, which make it easier to scan a detail page. If not specified, this attribute defaults to detail. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the page block. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the page block twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the page block. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the page block. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| tabStyle | String | The Salesforce object or custom Visualforce tab that controls the color scheme of the page block. If not specified, this value defaults to the style of the page. If using a Salesforce object, the attribute must be specified with the developer name for the object. For example, to use the styling associated with MyCustomObject, use tabStyle="MyCustomObject__c". To use a custom Visualforce tab, set the attribute to the name (not label) of the tab followed by a double-underscore and the word tab. For example, to use the styling of a Visualforce tab with the name Source, use tabStyle="Source__tab". |  | 10.0 | global |
| title | String | The text displayed as the title of the page block. Note that if a header facet is included in the body of the pageBlock component, its value overrides this attribute. |  | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| footer | The components that appear at the bottom of the page block. If specified, the content of this facet overrides any pageBlockButton components in the pageBlock. Note that the order in which a footer facet appears in the body of a pageBlock component does not matter, because any facet with name="footer" will control the appearance of the bottom block. | 10.0 |
| header | The components that appear in the title bar of the page block. If specified, the content of this facet overrides the pageBlock title tab, any pageBlockButton components, and the value of the helpTitle and helpURL attributes in the pageBlock. Note that the order in which a header facet appears in the body of a pageBlock component does not matter, because any facet with name="header" will control the appearance of the title. | 10.0 |

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page
with a valid account record in the URL.
For example, if 001D000000IRt53 is the account ID, the resulting URL should be:
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->


<!-- Page: -->
<apex:page standardController="Account">
    <apex:form>
        <apex:pageBlock title="My Content" mode="edit">
            <apex:pageBlockButtons>
                <apex:commandButton action="{!save}" value="Save"/>
            </apex:pageBlockButtons>
            <apex:pageBlockSection title="My Content Section" columns="2">
                <apex:inputField value="{!account.name}"/>
                <apex:inputField value="{!account.site}"/>
                <apex:inputField value="{!account.type}"/>
                <apex:inputField value="{!account.accountNumber}"/>
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```
