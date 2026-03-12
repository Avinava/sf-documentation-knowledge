---
title: "Record Template Clone"
domain: uiapi
topic: record-template-clone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.104Z
estimatedTokens: 281
keywords: [Record, Template, Clone, containing, data, needed, POST, ui-api, records]
---

# Record Template Clone

> A record template containing the default information and data needed
      to clone a record. Use these values in a request to POST
        /ui-api/records.

# Record Template Clone

A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The record's object API name. | Small, 49.0 | 49.0 |
| cloneSourceId | String | The ID of the cloned record. This top-level property returns the same result as CloneSourceId in the fields property. | Small, 52.0 | 52.0 |
| fields | Map<String, Field Value> | A map of field data for the record.The response includes only requested fields and CloneSourceId. If you don’t pass any fields, the response includes only CloneSourceId. | Small, 49.0 | 49.0 |
| recordTypeId | String | The RecordType ID of the record. | Small, 49.0 | 49.0 |

#### See Also

-   [Record Defaults Template Clone](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_clone.htm "A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.")

## Related Topics

- Field Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field_value.htm)
- Record Defaults Template Clone (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults_template_clone.htm)
