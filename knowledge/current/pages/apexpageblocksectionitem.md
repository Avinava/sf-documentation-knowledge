---
title: "apex:pageBlockSectionItem"
domain: pages
topic: apexpageblocksectionitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.922Z
estimatedTokens: 1744
keywords: [apex, pageBlockSectionItem, piece, data, <apex, pageBlockSection>, column, row, pageBlockSectionItem>, component, include, two, child, components, content]
---

# apex:pageBlockSectionItem

> A single piece of data in an <apex:pageBlockSection> that takes up one column in one row. An <apex:pageBlockSectionItem> component can include up to two child components. If no content is specified, the column is rendered as an empty space. If one child component is specified, the content spans both

# apex:pageBlockSectionItem

A single piece of data in an <apex:pageBlockSection\> that takes up one column in one row. An <apex:pageBlockSectionItem\> component can include up to two child components. If no content is specified, the column is rendered as an empty space. If one child component is specified, the content spans both cells of the column. If two child components are specified, the content of the first is rendered in the left, "label" cell of the column, while the content of the second is rendered in the right, "data" cell of the column.

Note that if you include an <apex:outputField\> or an <apex:inputField\> component in an <apex:pageBlockSectionItem\>, these components do not display with their label or custom help text as they do when they are children of an <apex:pageBlockSection\>. Also note that <apex:pageBlockSectionItem\> components can't be rerendered; rerender the child components instead.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <tr\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dataStyle | String | The CSS style used to display the content of the right, "data" cell of the pageBlockSection column. |  | 11.0 | global |
| dataStyleClass | String | The CSS style class used to display the content of the right, "data" cell of the pageBlockSection column. |  | 11.0 | global |
| dataTitle | String | The text displayed when you hover over the right, "data" cell of the pageBlockSection column. |  | 11.0 | global |
| dir | String | The direction in which the generated HTML component is read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 11.0 | global |
| helpText | String | The help text that is displayed next to this field as a hover-based tooltip, similar to the text that is displayed next to standard Salesforce fields if custom help is defined for the field in Setup. Note that help text only displays if the showHeader attribute of the parent page is set to true. |  | 12.0 | global |
| id | String | An identifier that allows the pageBlockSectionItem component to be referenced by other components in the page. |  | 11.0 | global |
| labelStyle | String | The CSS style used to display the content of the left, "label" cell of the pageBlockSection column. |  | 11.0 | global |
| labelStyleClass | String | The CSS style class used to display the content of the left, "label" cell of the pageBlockSection column. |  | 11.0 | global |
| labelTitle | String | The text displayed when you hover over the left, "label" cell of the pageBlockSection column. |  | 11.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 11.0 | global |
| onDataclick | String | The JavaScript invoked if the onDataclick event occurs--that is, if the user clicks the right, "data" cell of the pageBlockSection column. |  | 11.0 | global |
| onDatadblclick | String | The JavaScript invoked if the onDatadblclick event occurs--that is, if the user clicks the right, "data" cell of the pageBlockSection column twice. |  | 11.0 | global |
| onDatakeydown | String | The JavaScript invoked if the onDatakeydown event occurs--that is, if the user presses a keyboard key. |  | 11.0 | global |
| onDatakeypress | String | The JavaScript invoked if the onDatakeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 11.0 | global |
| onDatakeyup | String | The JavaScript invoked if the onDatakeyup event occurs--that is, if the user releases a keyboard key. |  | 11.0 | global |
| onDatamousedown | String | The JavaScript invoked if the onDatamousedown event occurs--that is, if the user clicks a mouse button. |  | 11.0 | global |
| onDatamousemove | String | The JavaScript invoked if the onDatamousemove event occurs--that is, if the user moves the mouse pointer. |  | 11.0 | global |
| onDatamouseout | String | The JavaScript invoked if the onDatamouseout event occurs--that is, if the user moves the mouse pointer away from the right, "data" cell of the pageBlockSection column. |  | 11.0 | global |
| onDatamouseover | String | The JavaScript invoked if the onDatamouseover event occurs--that is, if the user moves the mouse pointer over the right, "data" cell of the pageBlockSection column. |  | 11.0 | global |
| onDatamouseup | String | The JavaScript invoked if the onDatamouseup event occurs--that is, if the user releases the mouse button. |  | 11.0 | global |
| onLabelclick | String | The JavaScript invoked if the onLabelclick event occurs--that is, if the user clicks the left, "label" cell of the pageBlockSection column. |  | 11.0 | global |
| onLabeldblclick | String | The JavaScript invoked if the onLabeldblclick event occurs--that is, if the user clicks the left, "label" cell of the pageBlockSection column twice. |  | 11.0 | global |
| onLabelkeydown | String | The JavaScript invoked if the onLabelkeydown event occurs--that is, if the user presses a keyboard key. |  | 11.0 | global |
| onLabelkeypress | String | The JavaScript invoked if the onLabelkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 11.0 | global |
| onLabelkeyup | String | The JavaScript invoked if the onLabelkeyup event occurs--that is, if the user releases a keyboard key. |  | 11.0 | global |
| onLabelmousedown | String | The JavaScript invoked if the onLabelmousedown event occurs--that is, if the user clicks a mouse button. |  | 11.0 | global |
| onLabelmousemove | String | The JavaScript invoked if the onLabelmousemove event occurs--that is, if the user moves the mouse pointer. |  | 11.0 | global |
| onLabelmouseout | String | The JavaScript invoked if the onLabelmouseout event occurs--that is, if the user moves the mouse pointer away from the left, "label" cell of the pageBlockSection column. |  | 11.0 | global |
| onLabelmouseover | String | The JavaScript invoked if the onLabelmouseover event occurs--that is, if the user moves the mouse pointer over the left, "label" cell of the pageBlockSection column. |  | 11.0 | global |
| onLabelmouseup | String | The JavaScript invoked if the onLabelmouseup event occurs--that is, if the user releases the mouse button. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 11.0 | global |

#### See Also

-   [apex:pageBlockSection](atlas.en-us.pages.meta/pages/pages_compref_pageBlockSection.htm)

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
                <apex:pageBlockSectionItem>
                    <apex:outputLabel value="Account Name" for="account__name"/>
                    <apex:inputText value="{!account.name}" id="account__name"/> 
                </apex:pageBlockSectionItem>

                <apex:pageBlockSectionItem>
                    <apex:outputLabel value="Account Site" for="account__site"/>
                    <apex:inputText value="{!account.site}" id="account__site"/> 
                </apex:pageBlockSectionItem>

                <apex:pageBlockSectionItem>
                    <apex:outputLabel value="Account Type" for="account__type"/>
                    <apex:inputText value="{!account.type}" id="account__type"/> 
                </apex:pageBlockSectionItem>

                <apex:pageBlockSectionItem>
                    <apex:outputLabel value="Account Number" for="account__number"/>
                    <apex:inputText value="{!account.accountNumber}" id="account__number"/> 
                </apex:pageBlockSectionItem> 
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- apex:pageBlockSection (atlas.en-us.pages.meta/pages/pages_compref_pageBlockSection.htm)
- apex:pageBlock (atlas.en-us.pages.meta/pages/pages_compref_pageBlock.htm)
