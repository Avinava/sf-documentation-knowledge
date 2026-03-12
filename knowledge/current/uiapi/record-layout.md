---
title: "Record Layout"
domain: uiapi
topic: record-layout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.075Z
estimatedTokens: 722
keywords: [Record, Layout]
---

# Record Layout

> The layout information for a record.

# Record Layout

The layout information for a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The layout ID. | Small, 41.0 | 41.0 |
| layoutType | String | The layout type for the record. One of these values:Compact—Use this value to get a layout that contains a record’s key fields.Full—(Default) Use this value to get a full layout. | Small, 41.0 | 41.0 |
| mode | String | The access mode for the record. This value determines which fields to get from a layout. Layouts have different fields for create, edit, and view modes. For example, formula fields are rendered in view mode, but not in create mode because they’re calculated at run time, like formulas in a spreadsheet. One of these values:Create—Use this mode if you intend to build UI that lets a user create a record. This mode is used by the /ui-api/record-defaults/create/{apiName} resource.Edit—Use this mode if you intend to build UI that lets a user edit a record. This mode is used by the /ui-api/record-defaults/clone/{recordId} resource.View—(Default) Use this mode to build UI that displays a record. | Small, 41.0 | 41.0 |
| objectApiName | String | The API name of the object that the layout is associated with. | Small, 49.0 | 49.0 |
| recordTypeId | String | The record type ID for this record. | Small, 49.0 | 49.0 |
| saveOptions | Record Layout Save Option[] | The save options for the layout. | Small, 51.0 | 51.0 |
| sections | Record Layout Section[] | A collection of layout sections. | Small, 41.0 | 41.0 |

#### See Also

-   [Record UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm "The layout information, field information, and data for a record.")

-   [Record Defaults](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm "The default information and data needed to create or clone a record. Use these values in a request to POST /ui-api/records.")

-   [Quick Action Layout](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_quick_action_layout.htm "The record layout used by the quick action.")

-   [Get Record Layout Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_layout.htm "Get metadata about page layouts for the specified object type.")

-   [Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.")

-   [Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm "Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.")

## Related Topics

- Record Layout Save Option (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_save_option.htm)
- Record Layout Section (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_section.htm)
- Record UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm)
- Record Defaults (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm)
- Quick Action Layout (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_quick_action_layout.htm)
- Get Record Layout Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_layout.htm)
- Get Default Values to Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)
- Get Default Values to Create a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm)
