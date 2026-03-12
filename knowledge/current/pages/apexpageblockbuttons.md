---
title: "apex:pageBlockButtons"
domain: pages
topic: apexpageblockbuttons
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.897Z
estimatedTokens: 1089
keywords: [apex, pageBlockButtons, buttons, styled, standard, Salesforce, component, child, <apex, pageBlock>, Attributes]
---

# apex:pageBlockButtons

> A set of buttons that are styled like standard Salesforce buttons. This component must be a child component of an <apex:pageBlock>.

# apex:pageBlockButtons

A set of buttons that are styled like standard Salesforce buttons. This component must be a child component of an <apex:pageBlock\>.

Note that it is not necessary for the buttons themselves to be direct children of the <apex:pageBlockButtons\> component—buttons that are located at any level within an <apex:pageBlockButtons\> component are styled appropriately.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <td\> tag that contains the buttons. This <td\> tag can be at the top or bottom, or both, of the <apex:pageBlock\>, depending on the value of the location attribute of the <apex:pageBlockButtons\> component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 11.0 | global |
| id | String | An identifier that allows the pageBlockButtons component to be referenced by other components in the page. |  | 11.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 11.0 | global |
| location | String | The area of the page block where the buttons should be rendered. Possible values include "top", "bottom", or "both". If not specified, this value defaults to "both".Note: If a pageBlock header facet is defined, the facet overrides the buttons that would normally appear at the top of the page block. Likewise, if a pageBlock footer facet is defined, the facet overrides the buttons that would normally appear at the bottom of the page block. |  | 11.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks anywhere in the pageBlockButtons component |  | 11.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the pageBlockButtons component twice. |  | 11.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 11.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 11.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 11.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 11.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 11.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the pageBlockButtons component. |  | 11.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the pageBlockButtons component. |  | 11.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 11.0 | global |
| style | String | The style used to display the pageBlockButtons component, used primarily for adding inline CSS styles. |  | 11.0 | global |
| styleClass | String | The style class used to display the pageBlockButtons component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 11.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 11.0 | global |

#### See Also

-   [apex:pageBlock](atlas.en-us.pages.meta/pages/pages_compref_pageBlock.htm)

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

## Related Topics

- apex:pageBlock (atlas.en-us.pages.meta/pages/pages_compref_pageBlock.htm)
