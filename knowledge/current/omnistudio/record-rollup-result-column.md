---
title: "Record Rollup Result Column"
domain: omnistudio
topic: record-rollup-result-column
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.323Z
estimatedTokens: 343
keywords: [Record, Rollup, Result, Column, Output, representation, consolidated, view, data]
---

# Record Rollup Result Column

> Output representation of the consolidated view of the table column data.

# Record Rollup Result Column

Output representation of the consolidated view of the table column data.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| displayFormat​Type | String | Data type of the field that represents the column. This data type corresponds to the type recognized by the Lightning data table. | Small, 61.0 | 61.0 |
| fieldApiName | String | API name of the field that represents the column of the table. | Small, 61.0 | 61.0 |
| fieldLabel | String | Name of the field that represents the column of the table. | Small, 61.0 | 61.0 |
| isRedirection​Enabled | Boolean | Indicates whether clicking the column label redirects to the relevant record details page (true) or not (false). The value is true if fieldApiName is Name or if displayFormatType is reference, which is a Lookup relation in Salesforce. | Small, 61.0 | 61.0 |
| sequence | Integer | Sequence in which the column appears in the data table. | Small, 61.0 | 61.0 |
| isSortable | Boolean | Indicates whether the column is sortable (true) or not (false). | Small, 61.0 | 61.0 |
| isTypeName | Boolean | Indicates whether the field is of type Name (true) or not (false). | Small, 61.0 | 61.0 |
| sortByField | String | Represents the field that’s used to sort the table. | Small, 61.0 | 61.0 |

## Code Examples

```
"columns": [
    {
      "fieldApiName": "Name",
      "displayFormatType": "text",
      "fieldLabel": "Name",
      "sequence": 0,
      "isRedirectionEnabled": true,
      "isSortable": true,
      "isTypeName": true,
      "sortByField": "Name"
    }
  ]
```
