---
title: "Record Defaults Template Clone"
domain: uiapi
topic: record-defaults-template-clone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.060Z
estimatedTokens: 220
keywords: [Record, Defaults, Template, Clone, containing, data, needed, POST, ui-api, records]
---

# Record Defaults Template Clone

> A record template containing the default information and data needed
      to clone a record. Use these values in a request to POST
        /ui-api/records.

# Record Defaults Template Clone

A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| objectInfos | Map<String, Object Info> | A map of object metadata. | Big, 49.0 | 49.0 |
| record | Record Template Clone | Pre-populated record data. | Small, 49.0 | 49.0 |

#### See Also

-   [Get Default Values to Clone a Record—Lightweight](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm "Get the default values for fields for cloning a record. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.")

## Related Topics

- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record Template Clone (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_clone.htm)
- Get Default Values to Clone a Record—Lightweight (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm)
