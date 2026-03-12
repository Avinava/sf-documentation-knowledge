---
title: "apex:dataTable"
domain: pages
topic: apexdatatable
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.384Z
estimatedTokens: 2789
keywords: [apex, dataTable, HTML, that’s, defined, iterating, over, data, displaying, item, per, row, <apex, dataTable>, column]
---

# apex:dataTable

> An HTML table that’s defined by iterating over a set of data, displaying information about one item of data per row. The body of the <apex:dataTable> contains one or more column components that specify what information should be displayed for each item of data. The data set can include up to 1,000 i

# apex:dataTable

An HTML table that’s defined by iterating over a set of data, displaying information about one item of data per row. The body of the <apex:dataTable\> contains one or more column components that specify what information should be displayed for each item of data. The data set can include up to 1,000 items, or 10,000 items when the page is executed in read-only mode.

For Visualforce pages running API version 20.0 or higher, an <apex:repeat\> tag can be contained within this component to generate columns.

See also: <apex:panelGrid\>

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated table's <tbody\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| align | String | The position of the rendered HTML table with respect to the page. Possible values include "left", "center", or "right". If left unspecified, this value defaults to "left". |  | 10.0 | global |
| bgcolor | String | The background color of the rendered HTML table. |  | 10.0 | global |
| border | String | The width of the frame around the rendered HTML table, in pixels. |  | 10.0 | global |
| captionClass | String | The style class used to display the caption for the rendered HTML table, if a caption facet is specified. This attribute is used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| captionStyle | String | The style used to display the caption for the rendered HTML table, if a caption facet is specified. This attribute is used primarily for adding inline CSS styles. |  | 10.0 | global |
| cellpadding | String | The amount of space between the border of each table cell and its contents. If the value of this attribute is a pixel length, all four margins are this distance from the contents. If the value of the attribute is a percentage length, the top and bottom margins are equally separated from the content based on a percentage of the available vertical space, and the left and right margins are equally separated from the content based on a percentage of the available horizontal space. |  | 10.0 | global |
| cellspacing | String | The amount of space between the border of each table cell and the border of the other cells surrounding it and/or the table's edge. This value must be specified in pixels or percentage. |  | 10.0 | global |
| columnClasses | String | A comma-separated list of one or more classes associated with the table's columns, used primarily to designate which CSS styles are applied when using an external CSS stylesheet.If more than one class is specified, the classes are applied in a repeating fashion to all columns. For example, if you specify columnClasses="classA, classB", then the first column is styled with classA, the second column is styled with classB, the third column is styled with classA, the fourth column is styled with classB, and so on. |  | 10.0 | global |
| columns | Integer | The number of columns in this table. |  | 10.0 | global |
| columnsWidth | String | A comma-separated list of the widths applied to each table column. Values can be expressed as pixels (for example, columnsWidth="100px, 100px"). |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| first | Integer | The first element in the iteration visibly rendered in the table, where 0 is the index of the first element in the set of data specified by the value attribute. For example, if you did not want to display the first two elements in the set of records specified by the value attribute, set first="2". |  | 10.0 | global |
| footerClass | String | The style class used to display the footer (bottom row) for the rendered HTML table, if a footer facet is specified. This attribute is used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| frame | String | The borders drawn for this table. Possible values include "none", "above", "below", "hsides", "vsides", "lhs", "rhs", "box", and "border". If not specified, this value defaults to "border". |  | 10.0 | global |
| headerClass | String | The style class used to display the header for the rendered HTML table, if a header facet is specified. This attribute is used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| id | String | An identifier that allows the dataTable component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the data table. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the data table twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the data table. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the data table. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onRowClick | String | The JavaScript invoked if the onRowClick event occurs--that is, if the user clicks a row in the data table. |  | 10.0 | global |
| onRowDblClick | String | The JavaScript invoked if the onRowDblClick event occurs--that is, if the user clicks a row in the data table twice. |  | 10.0 | global |
| onRowMouseDown | String | The JavaScript invoked if the onRowMouseDown event occurs--that is, if the user clicks a mouse button in a row of the data table. |  | 10.0 | global |
| onRowMouseMove | String | The JavaScript invoked if the onRowMouseMove event occurs--that is, if the user moves the mouse pointer over a row of the data table. |  | 10.0 | global |
| onRowMouseOut | String | The JavaScript invoked if the onRowMouseOut event occurs--that is, if the user moves the mouse pointer away from a row in the data table. |  | 10.0 | global |
| onRowMouseOver | String | The JavaScript invoked if the onRowMouseOver event occurs--that is, if the user moves the mouse pointer over a row in the data table. |  | 10.0 | global |
| onRowMouseUp | String | The JavaScript invoked if the onRowMouseUp event occurs--that is, if the user releases the mouse button over a row in the data table. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| rowClasses | String | A comma-separated list of one or more classes associated with the table's rows, used primarily to designate which CSS styles are applied when using an external CSS stylesheet.If more than one class is specified, the classes are applied in a repeating fashion to all rows. For example, if you specify columnRows="classA, classB", then the first row is styled with classA, the second row is styled with classB, the third row is styled with classA, the fourth row is styled with classB, and so on. |  | 10.0 | global |
| rows | Integer | The number of rows in this table. |  | 10.0 | global |
| rules | String | The borders drawn between cells in the table. Possible values include "none", "groups", "rows", "cols", and "all". If not specified, this value defaults to "none". |  | 10.0 | global |
| style | String | The style used to display the dataTable component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the dataTable component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| summary | String | A summary of the table's purpose and structure for Section 508 compliance. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | The collection of data displayed in the table. | Yes | 10.0 | global |
| var | String | The name of the variable that represents one element in the collection of data specified by the value attribute. You can then use this variable to display the element itself in the body of the dataTable component tag. | Yes | 10.0 | global |
| width | String | The width of the entire table, expressed either as a relative percentage to the total amount of available horizontal space (for example, width="80%"), or as the number of pixels (for example, width="800px"). |  | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| caption | The components that appear in the caption for the table. Note that the order in which a caption facet appears in the body of a dataTable component doesn’t matter, because any facet with name="caption" will control the appearance of the table's caption. | 10.0 |
| footer | The components that appear in the footer row for the table. Note that the order in which a footer facet appears in the body of a dataTable component doesn’t matter, because any facet with name="footer" will control the appearance of the final row in the table. | 10.0 |
| header | The components that appear in the header row for the table. Note that the order in which a header facet appears in the body of a dataTable component doesn’t matter, because any facet with name="header" will control the appearance of the first row in the table. | 10.0 |

#### See Also

-   [apex:panelGrid](atlas.en-us.pages.meta/pages/pages_compref_panelGrid.htm)

-   [apex:repeat](atlas.en-us.pages.meta/pages/pages_compref_repeat.htm)

## Code Examples

```apex
<!-- For this example to render fully, associate the page
with a valid account record in the URL.
For example: https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53 -->

<!-- Page: -->

<apex:page controller="dataTableCon" id="thePage">
    <apex:dataTable value="{!accounts}" var="account" id="theTable"
        rowClasses="odd,even" styleClass="tableClass">
        <apex:facet name="caption">table caption</apex:facet>
        <apex:facet name="header">table header</apex:facet>
        <apex:facet name="footer">table footer</apex:facet>

        <apex:column>
            <apex:facet name="header">Name</apex:facet>
            <apex:facet name="footer">column footer</apex:facet>
            <apex:outputText value="{!account.name}"/>
        </apex:column>

        <apex:column>
            <apex:facet name="header">Owner</apex:facet>
            <apex:facet name="footer">column footer</apex:facet>
            <apex:outputText value="{!account.owner.name}"/>
        </apex:column>

    </apex:dataTable>
</apex:page>

/*** Controller: ***/

public class dataTableCon {

    List<Account> accounts;

    public List<Account> getAccounts() {
        if(accounts == null)
            accounts = [SELECT name, owner.name FROM account LIMIT 10];
        return accounts;
    }

}
```

```
<table class="tableClass" id="thePage:theTable" border="0" cellpadding="0" cellspacing="0">

    <colgroup span="2"></colgroup>
    <caption>table caption</caption>
    <thead>
        <tr>
            <td colspan="2" scope="colgroup">table header</td>
        </tr>

        <tr>
            <td scope="col">Name</td>
            <td scope="col">Owner</td>
        </tr>
    </thead>

    <tfoot>
        <tr>
            <td scope="col">column footer</td>
            <td scope="col">column footer</td>
        </tr>
        <tr>
            <td colspan="2" scope="colgroup">table footer</td>
        </tr>
    </tfoot>

    <tbody>
        <tr class="odd">
            <td>Bass Manufacturing</td>
            <td>Doug Chapman</td>
        </tr>

        <tr class="even">
            <td>Ball Corp</td>
            <td>Alan Ball</td>
        </tr>

        <tr class="odd">
            <td>Wessler Co.</td>
            <td>Jill Wessler</td>
        </tr>
    </tbody>

</table>
```

## Related Topics

- apex:panelGrid (atlas.en-us.pages.meta/pages/pages_compref_panelGrid.htm)
- apex:repeat (atlas.en-us.pages.meta/pages/pages_compref_repeat.htm)
