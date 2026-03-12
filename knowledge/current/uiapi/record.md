---
title: "Record"
domain: uiapi
topic: record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.049Z
estimatedTokens: 757
keywords: [Record, data, API, child, relationship]
---

# Record

> The field data, API name, child relationship data, and record type
      information for a record.

# Record

The field data, API name, child relationship data, and record type information for a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name for this record. | Small, 41.0 | 41.0 |
| childRelationships | Map<String, Record Collection> | The child relationship data for this record. | Small, 41.0 | 41.0 |
| fields | Map<String, Field Value> | The field data for this record, matching the requested layout and mode. | Small, 41.0 | 41.0 |
| id | String | The ID of this record. | Small, 41.0 | 41.0 |
| lastModifiedById | String | The ID of the user who last updated this record. | Small, 44.0 | 44.0 |
| lastModifiedDate | String | The date and time when a user last modified this record. Date and time information is in ISO 8601 format. | Small, 44.0 | 44.0 |
| recordTypeId | String | The record type ID for this record. | Small, 48.0 | 48.0 |
| recordTypeInfo | Record Type Info | The record type info for this record, if any.This property is returned for only two levels of nested records. Instead, use recordTypeId, which is returned for every record in a response. | Small, 41.0 | 41.0 |
| systemModstamp | String | The date and time when a user or an automated process (such as a trigger) last modified this record. Date and time information is in ISO 8601 format. | Small, 44.0 | 44.0 |

#### See Also

-   [Record UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm "The layout information, field information, and data for a record.")

-   [List Record Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm "A collection of list view records.")

-   [Record Defaults](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm "The default information and data needed to create or clone a record. Use these values in a request to POST /ui-api/records.")

-   [Batch Result Item](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_result.htm "The results of one subrequest in a batch request.")

-   [Create or Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm "Create or clone a record.")

-   [Update a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm "Update a record's data.")

-   [Get a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.htm "Get a record’s data.")

-   [Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.")

-   [Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm "Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.")

## Related Topics

- Record
                  Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_collection.htm)
- Field Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field_value.htm)
- Record Type
                  Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_type_info.htm)
- Record UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm)
- List Record Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_record_collection.htm)
- Record Defaults (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm)
- Batch Result Item (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_result.htm)
- Create or Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)
- Update a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm)
- Get a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.htm)
