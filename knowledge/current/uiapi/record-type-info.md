---
title: "Record Type Info"
domain: uiapi
topic: record-type-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.111Z
estimatedTokens: 380
keywords: [Record, Info]
---

# Record Type Info

> Information about a record type.

# Record Type Info

Information about a record type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=uiapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| available | Boolean | Indicates whether this record type is available to the context user when creating a record. | Small, 41.0 | 41.0 |
| defaultRecordTypeMapping | Boolean | Indicates whether this record type mapping is the default for the associated object. | Small, 41.0 | 41.0 |
| master | Boolean | Indicates whether this record type is the master record type. The master record type is the default record type that’s used when a record has no custom record type associated with it. | Small, 41.0 | 41.0 |
| name | String | The UI label of the record type. The label can be translated into any language that Salesforce supports. | Small, 41.0 | 41.0 |
| recordTypeId | String | The ID of the record type. | Small, 41.0 | 41.0 |

#### See Also

-   [Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm "The field data, API name, child relationship data, and record type information for a record.")

-   [Object Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm "The metadata for an object.")

## Related Topics

- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
