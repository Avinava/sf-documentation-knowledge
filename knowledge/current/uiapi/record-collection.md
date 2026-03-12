---
title: "Record Collection"
domain: uiapi
topic: record-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.054Z
estimatedTokens: 412
keywords: [Record, Collection, paginated, bodies]
---

# Record Collection

> A paginated collection of Record response bodies.

# Record Collection

A paginated collection of Record response bodies.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | The total count of records returned. | Small, 41.0 | 41.0 |
| currentPageToken | String | Token identifying the current page. | Small, 44.0 | 44.0 |
| currentPageUrl | String | User Interface API URL identifying the current page. | Small, 41.0 | 41.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 44.0 | Small, 44.0 |
| nextPageUrl | String | User Interface API URL identifying the next page. | Small, 41.0 | Small, 41.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | Small, 44.0 | 44.0 |
| previousPageUrl | String | User Interface API URL identifying the previous page. | Small, 41.0 | 41.0 |
| records | Record[] | A collection of records. | Small, 41.0 | 41.0 |

#### See Also

-   [Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm "The field data, API name, child relationship data, and record type information for a record.")

-   [Get Child Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_child_relationships.htm "Get child records for a specified record and child relationship name. Relationships are connections between records. On a record detail page, each record in a related list has a child relationship to the parent record.")

-   [Lookup Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm "Records in a lookup relationship, organized by object type.")

## Related Topics

- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_child_relationships.htm)
- Lookup Values (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_lookup_values.htm)
