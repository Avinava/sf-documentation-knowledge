---
title: "apex:column"
domain: pages
topic: apexcolumn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.306Z
estimatedTokens: 2973
keywords: [apex, column, <apex, column>, component, always, child, dataTable>, pageBlockTable>, Attributes, Facets]
---

# apex:column

> A single column in a table. An <apex:column> component must always be a child of an <apex:dataTable> or <apex:pageBlockTable> component.

# apex:column

A single column in a table. An <apex:column\> component must always be a child of an <apex:dataTable\> or <apex:pageBlockTable\> component.

Note that if you specify an sObject field as the value attribute for an <apex:column\>, the associated label for that field is used as the column header by default. To override this behavior, use the headerValue attribute on the column, or the column's header facet.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <td\> tag for the column in every row of the table.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| breakBefore | Boolean | A Boolean value that specifies whether the column should begin a new row in the table. If set to true, the column begins a new row. If not specified, this value defaults to false. |  | 10.0 | global |
| colspan | Integer | The number of columns that this column spans in the table. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| dir | String | The direction in which text in the generated column should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| footerClass | String | The style class used to display the column footer, if defined. This attribute is used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| footercolspan | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footerdir | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footerlang | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronclick | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footerondblclick | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronkeydown | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronkeypress | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronkeyup | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronmousedown | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronmousemove | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronmouseout | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronmouseover | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footeronmouseup | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footerstyle | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footertitle | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| footerValue | String | The text that should be displayed in the column footer. If you specify a value for this attribute, you cannot use the column's footer facet. |  | 12.0 | global |
| headerClass | String | The style class used to display the table header, if defined. This attribute is used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| headercolspan | String | The number of columns that the header column spans in the table, if defined. This attribute cannot be used in Visualforce page versions 16.0 and above. |  | 10.0 | global |
| headerdir | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headerlang | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronclick | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headerondblclick | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronkeydown | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronkeypress | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronkeyup | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronmousedown | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronmousemove | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronmouseout | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronmouseover | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headeronmouseup | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headerstyle | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headertitle | String | This attribute was deprecated in Salesforce API version 16.0 and has no effect on the page. |  | 10.0 | global |
| headerValue | String | The text that should be displayed in the column header. If you specify a value for this attribute, you cannot use the column's header facet. Note also that specifying a value for this attribute overrides the default header label that appears if you use an inputField or outputField in the column body. |  | 12.0 | global |
| id | String | An identifier that allows the column component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs in the column --that is, if the column is clicked. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs in the column--that is, if the column is clicked twice. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs in the column --that is, if the user presses a keyboard key. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs in the column--that is, if the user presses or holds down a keyboard key. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs in the column--that is, if the user releases a keyboard key. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs in the column--that is, if the user clicks a mouse button. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs in the column--that is, if the user moves the mouse pointer. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs in the column--that is, if the user moves the mouse pointer away from the column. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs in the column--that is, if the user moves the mouse pointer over the column. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs in the column--that is, if the user releases the mouse button. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| rowspan | Integer | The number of rows that each cell of this column takes up in the table. |  | 10.0 | global |
| style | String | The style used to display the column, used primarily for adding inline CSS styles. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| styleClass | String | The style class used to display the column, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. Note that this value does not apply to the header and footer cells. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | String | The text that should be displayed in every cell of the column, other than its header and footer cells. If you specify a value for this attribute, you cannot add any content between the column's opening and closing tags. |  | 12.0 | global |
| width | String | The width of the column in pixels (px) or percentage (%). If not specified, this value defaults to 100 pixels. |  | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| footer | The components that appear in the footer cell for the column. Note that the order in which a footer facet appears in the body of a column component does not matter, because any facet with name="footer" will control the appearance of the final cell in the column. If you use a footer facet, you cannot specify a value for the column's footerValue attribute. | 10.0 |
| header | The components that appear in the header cell for the column. Note that the order in which a header facet appears in the body of a column component does not matter, because any facet with name="header" will control the appearance of the first cell in the column. If you use a header facet, you cannot specify a value for the column's headerValue attribute. Note also that specifying a value for this facet overrides the default header label that appears if you use an inputField or outputField in the column body. | 10.0 |

#### See Also

-   [apex:dataTable](atlas.en-us.pages.meta/pages/pages_compref_dataTable.htm)

-   [apex:pageBlockTable](atlas.en-us.pages.meta/pages/pages_compref_pageBlockTable.htm)

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page
with a valid account record in the URL.
For example, if 001D000000IRt53 is the account ID, the resulting URL should be:
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->

<apex:page standardController="Account">
    <apex:pageBlock title="My Content">
        <apex:pageBlockTable value="{!account.Contacts}" var="item">
            <apex:column value="{!item.name}"/>
            <apex:column value="{!item.phone}"/>
        </apex:pageBlockTable>
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- apex:dataTable (atlas.en-us.pages.meta/pages/pages_compref_dataTable.htm)
- apex:pageBlockTable (atlas.en-us.pages.meta/pages/pages_compref_pageBlockTable.htm)
