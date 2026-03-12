---
title: "apex:toolbarGroup"
domain: pages
topic: apextoolbargroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.224Z
estimatedTokens: 823
keywords: [apex, toolbarGroup, group, components, toolbar, aligned, left, right, <apex, toolbarGroup>, component, child, toolbar>, Attributes]
---

# apex:toolbarGroup

> A group of components within a toolbar that can be aligned to the left or right of the toolbar. The <apex:toolbarGroup> component must be a child component of an <apex:toolbar>.

# apex:toolbarGroup

A group of components within a toolbar that can be aligned to the left or right of the toolbar. The <apex:toolbarGroup\> component must be a child component of an <apex:toolbar\>.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the toolbarGroup component to be referenced by other components in the page. |  | 10.0 | global |
| itemSeparator | String | The symbol used to separate toolbar components in the toolbarGroup. Possible values include "none", "line", "square", "disc", and "grid". If not specified, this value defaults to "none". |  | 10.0 | global |
| location | String | The position of the toolbarGroup in the toolbar. Possible values include "left" or "right". If not specified, this value defaults to "left". |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the toolbarGroup. |  | 11.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the toolbarGroup twice. |  | 11.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 11.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 11.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 11.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 11.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 11.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the toolbarGroup component. |  | 11.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the toolbarGroup component. |  | 11.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| separatorClass | String | The style class used to display the toolbar component separator, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. See also the itemSeparator attribute. |  | 10.0 | global |
| style | String | The CSS style used to display the toolbar group, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the toolbar group, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |

#### See Also

-   [apex:toolbar](atlas.en-us.pages.meta/pages/pages_compref_toolbar.htm)

## Code Examples

```
<!-- Page: -->
<apex:page id="thePage">
    <apex:toolbar id="theToolbar">
        <apex:outputText value="Sample Toolbar"/>
        <apex:toolbarGroup itemSeparator="line" id="toobarGroupLinks">
            <apex:outputLink value="http://www.salesforce.com">salesforce</apex:outputLink>
            <apex:outputLink value="https://developer.salesforce.com">apex developer network</apex:outputLink>
        </apex:toolbarGroup>
        <apex:toolbarGroup itemSeparator="line" location="right" id="toobarGroupForm">
            <apex:form id="theForm">
                <apex:inputText id="theInputText">Enter Text</apex:inputText>
                <apex:commandLink value="search" id="theCommandLink"/>
            </apex:form>
        </apex:toolbarGroup>
    </apex:toolbar>
</apex:page>
```

## Related Topics

- apex:toolbar (atlas.en-us.pages.meta/pages/pages_compref_toolbar.htm)
