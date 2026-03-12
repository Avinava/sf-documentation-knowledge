---
title: "apex:pageBlockSection"
domain: pages
topic: apexpageblocksection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.906Z
estimatedTokens: 1504
keywords: [apex, pageBlockSection, data, <apex, pageBlock>, component, similar, standard, Salesforce, layout, definition, Attributes, Facets]
---

# apex:pageBlockSection

> A section of data within an <apex:pageBlock> component, similar to a section in a standard Salesforce page layout definition.

# apex:pageBlockSection

A section of data within an <apex:pageBlock\> component, similar to a section in a standard Salesforce page layout definition.

An <apex:pageBlockSection\> component consists of one or more columns, each of which spans two cells: one for a field's label, and one for its value. Each component found in the body of an <apex:pageBlockSection\> is placed into the next cell in a row until the number of columns is reached. At that point, the next component wraps to the next row and is placed in the first cell.

To add a field from a Salesforce object to an <apex:pageBlockSection\>, use an <apex:inputField\> or <apex:outputField\> component. Each of these components automatically displays with the field's associated label. To add fields for variables or methods that are not based on Salesforce object fields, or to customize the format of Salesforce object field labels, use an <apex:pageBlockSectionItem\> component. Each <apex:inputField\>, <apex:outputField\>, or <apex:pageBlockSectionItem\> component spans both cells of a single column.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <div\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| collapsible | Boolean | A Boolean value that specifies whether the page block section can be expanded and collapsed by a user. If true, a user can expand and collapse the section. If not specified, this value defaults to true. |  | 11.0 | global |
| columns | Integer | The number of columns that can be included in a single row of the page block section. Note that a single column spans two cells - one for a field's label, and one for its value. If you use child inputField, outputField, or pageBlockSectionItem components in the pageBlockSection, each of the child components is displayed in one column, spanning both cells. If you use any other components in the pageBlockSection, each of the child components is displayed in one column, displaying only in the rightmost cell of the column and leaving the leftmost column cell blank. While you can specify one or more columns for a pageBlockSection, Salesforce stylesheets are optimized for either one or two columns. If not specified, this value defaults to 2. |  | 11.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| id | String | An identifier that allows the pageBlockSection component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the page block section. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the page block section twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the page block section. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the page block section. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| showHeader | Boolean | A Boolean value that specifies whether the page block section title is displayed. If set to true, the header is displayed. If not specified, this value defaults to true. |  | 11.0 | global |
| title | String | The text displayed as the title of the page block section. |  | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| body | The components that appear in the body of the page block section. If specified, the content of this facet overrides the body of the pageBlockSection tag. Note that the order in which a body facet appears in the body of a page block section component does not matter, because any facet with name="body" will control the appearance of the section body. | 11.0 |
| header | The components that appear in the title for the page block section. If specified, the content of this facet overrides the value of the title attribute. Note that the order in which a header facet appears in the body of a page block section component does not matter, because any facet with name="header" will control the appearance of the section title. | 10.0 |

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
