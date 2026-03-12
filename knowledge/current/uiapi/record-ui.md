---
title: "Record UI"
domain: uiapi
topic: record-ui
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.116Z
estimatedTokens: 236
keywords: [Record, layout, data]
---

# Record UI

> The layout information, field information, and data for a
      record.

# Record UI

The layout information, field information, and data for a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| layoutUserStates | Map<String, Record Layout User State> | A map of layout IDs to user state information. | Medium, 41.0 | 41.0 |
| layouts | Map<String, Map<String, Map<String, Map<String, Record Layout>>>> | A map of object API names to layout information for each object. | Medium, 41.0 | 41.0 |
| objectInfos | Map<String, Object Info> | A map of object API names to each object’s metadata. | Big, 41.0 | 41.0 |
| records | Map<String, Record> | A map of record IDs to each record’s data. | Small, 41.0 | 41.0 |

#### See Also

-   [Get Record Data and Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm "Get layout information, metadata, and data to build UI for a single record or for a collection of records.")

## Related Topics

- Record Layout User State (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_user_state.htm)
- Record Layout (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Get Record Data and Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
