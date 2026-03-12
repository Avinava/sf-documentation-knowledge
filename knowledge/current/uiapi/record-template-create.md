---
title: "Record Template Create"
domain: uiapi
topic: record-template-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.107Z
estimatedTokens: 224
keywords: [Record, Template, containing, data, needed, POST, ui-api, records]
---

# Record Template Create

> A record template containing the default information and data needed
      to create a record. Use these values in a request to POST
        /ui-api/records.

# Record Template Create

A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The record’s object API name. | Small, 49.0 | 49.0 |
| fields | Map<String, Field Value> | A map of field data for the record.If you don’t pass any fields, the response doesn’t include any fields. | Small, 49.0 | 49.0 |
| recordTypeId | String | The RecordType ID of the record. | Small, 49.0 | 49.0 |

#### See Also

-   [Record Defaults Template Create](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_create.htm "A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.")

## Related Topics

- Field Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field_value.htm)
- Record Defaults Template Create (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_create.htm)
