---
title: "Related List Reference"
domain: uiapi
topic: related-list-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.146Z
estimatedTokens: 354
keywords: [referenced, collection, metadata]
---

# Related List Reference

> The related list referenced by the collection or
    metadata.

# Related List Reference

The related list referenced by the collection or metadata.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the related list reference. | Small, 50.0 | 50.0 |
| inContextOfRecordId | String | ID of the parent record for the related list. | Small, 50.0 | 50.0 |
| listViewApiName | String | API name of the related list, for example, Contacts. | Small, 50.0 | 50.0 |
| objectApiName | String | API name of the supported related list object, such as Contact. | Small, 50.0 | 50.0 |
| parentObjectApiName | String | API name for the parent object of the related list. | Small, 50.0 | 50.0 |
| recordTypeId | String | Record type ID for the parent of the related list. | Small, 50.0 | 50.0 |
| relatedListId | String | ID of the related list. | Small, 50.0 | 50.0 |
| type | String | Type of related list. | Small, 50.0 | 50.0 |

#### See Also

-   [Related List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm "Metadata that describes a related list.")

-   [Related List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm "A collection of related list records.")

-   [Related List Record Count](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_count.htm "The number of records in a given related list.")

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Related List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm)
- Related List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_collection.htm)
- Related List Record Count (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_count.htm)
