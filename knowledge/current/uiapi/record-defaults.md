---
title: "Record Defaults"
domain: uiapi
topic: record-defaults
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.057Z
estimatedTokens: 332
keywords: [Record, Defaults, data, needed, clone, POST, ui-api, records]
---

# Record Defaults

> The default information and data needed to create or clone a record.
      Use these values in a request to POST
    /ui-api/records.

# Record Defaults

The default information and data needed to create or clone a record. Use these values in a request to POST /ui-api/records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| layout | Record Layout | Record layout information. | Medium, 41.0 | 41.0 |
| objectInfo | Object Info | Object metadata. | Big, 41.0 | 41.0-41.0 |
| objectInfos | Map<String, Object Info> | A map of object metadata. | Big, 42.0 | 42.0 |
| record | Record | Pre-populated record data. | Small, 41.0 | 41.0 |

#### See Also

-   [Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.")

-   [Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm "Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.")

-   [Create or Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm "Create or clone a record.")

## Related Topics

- Record Layout (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm)
- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Get Default Values to Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)
- Get Default Values to Create a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm)
- Create or Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)
