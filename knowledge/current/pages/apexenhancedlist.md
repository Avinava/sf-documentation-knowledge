---
title: "apex:enhancedList"
domain: pages
topic: apexenhancedlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.421Z
estimatedTokens: 929
keywords: [apex, enhancedList, view, picklist, including, associated, records, currently, selected, standard, Salesforce, applications, component, main, tab]
---

# apex:enhancedList

> The list view picklist for an object, including its associated list of records for the currently selected view. In standard Salesforce applications this component is displayed on the main tab for a particular object. This component has additional attributes that can be specified, such as the height 

# apex:enhancedList

The list view picklist for an object, including its associated list of records for the currently selected view. In standard Salesforce applications this component is displayed on the main tab for a particular object. This component has additional attributes that can be specified, such as the height and rows per page, as compared to <apex:listView\>.

Note: When an <apex:enhancedList\> is rerendered through another component's rerender attribute, the <apex:enhancedList\> must be inside of an <apex:outputPanel\> component that has its layout attribute set to "block". The <apex:enhancedList\> component is not allowed on pages that have the attribute showHeader set to false. You can only have five <apex:enhancedList\> components on a single page. Ext JS versions less than 3 should not be included on pages that use this component.

See also: <apex:listView\>.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| customizable | Boolean | A Boolean value that specifies whether the list can be customized by the current user. If not specified, the default value is true. If this attribute is set to false, the current user will not be able to edit the list definition or change the list name, filter criteria, columns displayed, column order, or visibility. However, the current user's personal preferences can still be set, such as column width or sort order. |  | 14.0 |  |
| height | Integer | An integer value that specifies the height of the list in pixels. This value is required. | Yes | 14.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| listId | String | The database ID of the desired list view. When editing a list view definition, this ID is the 15-character string after 'fcf=' in the browser's address bar. This value is required if type is not specified. |  | 14.0 |  |
| oncomplete | String | The JavaScript that runs after the page is refreshed in the browser. Note that refreshing the page automatically calls this JavaScript, while an inline edit and subsequent save does not. |  | 14.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 |  |
| reRender | Object | The ID of one or more components that are redrawn when the result of an AJAX update request returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. Note: When an enhancedList is rerendered through another component's rerender attribute, the enhanceList must be inside of an apex:outputPanel component that has layout attribute set to "block". |  | 14.0 |  |
| rowsPerPage | Integer | An integer value that specifies the number of rows per page. The default value is the preference of the current user. Possible values are 10, 25, 50, 100, 200. Note: If you set the value for greater than 100, a message is automatically displayed to the user, warning of the potential for performance degradation. |  | 14.0 |  |
| type | String | The Salesforce object for which views are displayed, for example, type="Account" or type="My_Custom_Object__c". |  | 14.0 |  |
| width | Integer | An integer value that specifies the width of the list in pixels. The default value is the available page width, or the width of the browser if the list is not displayed in the initially viewable area of the viewport. |  | 14.0 |  |

#### See Also

-   [apex:listViews](atlas.en-us.pages.meta/pages/pages_compref_listViews.htm)

## Code Examples

```
<apex:page>
    <apex:enhancedList type="Account" height="300" rowsPerPage="10" id="AccountList" />
    <apex:enhancedList type="Lead" height="300" rowsPerPage="25"
        id="LeadList" customizable="False" />
</apex:page>
```

## Related Topics

- apex:listViews (atlas.en-us.pages.meta/pages/pages_compref_listViews.htm)
