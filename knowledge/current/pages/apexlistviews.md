---
title: "apex:listViews"
domain: pages
topic: apexlistviews
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.678Z
estimatedTokens: 526
keywords: [apex, listViews, view, picklist, including, associated, records, currently, selected, standard, Salesforce, applications, component, main, tab]
---

# apex:listViews

> The list view picklist for an object, including its associated list of records for the currently selected view. In standard Salesforce applications this component is displayed on the main tab for a particular object.

# apex:listViews

The list view picklist for an object, including its associated list of records for the currently selected view. In standard Salesforce applications this component is displayed on the main tab for a particular object.

See also: <apex:enhancedList\>.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the listViews component to be referenced by other components in the page. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| type | String | The Salesforce object for which list views are displayed, for example, type="Account" or type="My_Custom_Object__c". | Yes | 10.0 | global |

## Facets

| Facet Name | Description | API Version |
| --- | --- | --- |
| body | The components that should appear in the body of the displayed list of records. Note that the order in which a body facet appears in a listViews component does not matter, because any facet with name="body" will control the appearance of the body of the displayed list. Also note that if you define a body facet, it replaces the list of records that would normally display as part of the list view. | 10.0 |
| footer | The components that should appear in the footer of the displayed list of records. Note that the order in which a footer facet appears in the body of a listViews component does not matter, because any facet with name="footer" will control the appearance of the bottom of the displayed list. | 10.0 |
| header | The components that should appear in the header of the displayed list of records. Note that the order in which a header facet appears in the body of a listViews component does not matter, because any facet with name="header" will control the appearance of the top of the displayed list. | 10.0 |

#### See Also

-   [apex:enhancedList](atlas.en-us.pages.meta/pages/pages_compref_enhancedList.htm)

## Code Examples

```
<apex:page showHeader="true" tabstyle="Case">
    <apex:ListViews type="Case" />
    <apex:ListViews type="MyCustomObject__c" />
</apex:page>
```

## Related Topics

- apex:enhancedList (atlas.en-us.pages.meta/pages/pages_compref_enhancedList.htm)
