---
title: "Related List Record Collection"
domain: uiapi
topic: related-list-record-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.138Z
estimatedTokens: 693
keywords: [Record, Collection, records]
---

# Related List Record Collection

> A collection of related list records.

# Related List Record Collection

A collection of related list records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | The total count of records returned. | Small, 50.0 | 50.0 |
| columnLabels | Map<String, String> | Map of column API name to column label. | Small, 65.0 | 65.0 |
| currentPageToken | String | The token for the current page of records. | Small, 50.0 | 50.0 |
| currentPageUrl | String | The URL of the current page of records. | Small, 50.0 | 50.0 |
| fields | String[] | The list of fields requested when these records were fetched. If a field isn’t available to the user, an error occurs. | Small, 50.0 | 50.0 |
| listInfoETag | String | An ETag that indicates whether the metadata has changed. | Small, 50.0 | 50.0 |
| listReference | Related List Reference | The reference to the related list that contains the records. | Small, 50.0 | 50.0 |
| nextPageToken | String | The token for the next page of records. | Small, 50.0 | 50.0 |
| nextPageUrl | String | The URL of the next page of records. | Small, 50.0 | 50.0 |
| optionalFields | String[] | The list of optional fields requested when these records were fetched. If a field isn’t available to the user, no error occurs and the field isn’t included in the response. | Small, 50.0 | 50.0 |
| pageSize | Integer | The number of list records viewed at one time. The default value is 50. | Small, 50.0 | 50.0 |
| previousPageToken | String | The token for the previous page of records. | Small, 50.0 | 50.0 |
| previousPageUrl | String | The URL of the previous page of records. | Small, 50.0 | 50.0 |
| records | Record[] | A collection of records. | Small, 50.0 | 50.0 |
| sortBy | String | The API name of the field the list view is sorted by. If the name is preceded with -, the sort order is descending. | Small, 50.0 | 50.0 |
| where | String | The filter applied to returned records, in GraphQL syntax. For example, { and: [ { StageName: { eq: "Prospecting" } }, { Account: { Name: { eq: "Dickenson plc" } } } ] } filters an Opportunity related list to show only opportunities in the Prospecting stage that are linked to the “Dickenson plc” account. | Small, 55.0 | 55.0 |

#### See Also

-   [Get Related List Records with URL Parameters](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records.htm "Returns record data for up to 1,999 records in a related list via URL parameters.")

-   [Get Related List Records with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_get.htm "Returns record data for up to 1,999 records in a related list. This resource uses the POST method to let you enter request parameters in the request body instead of the URL.")

## Related Topics

- ETag (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_intro.htm)
- Related List Reference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_reference.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Get Related List Records with URL Parameters (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records.htm)
- Get Related List Records with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_records_get.htm)
