---
title: "Record Defaults Template Create"
domain: uiapi
topic: record-defaults-template-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.063Z
estimatedTokens: 234
keywords: [Record, Defaults, Template, containing, data, needed, POST, ui-api, records]
---

# Record Defaults Template Create

> A record template containing the default information and data needed
      to create a record. Use these values in a request to POST
        /ui-api/records.

# Record Defaults Template Create

A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| objectInfos | Map<String, Object Info> | A collection of object metadata. | Big, 49.0 | 49.0 |
| record | Record Template Create | Pre-populated record data. | Small, 49.0 | 49.0 |

#### See Also

-   [Get Default Values to Create a Record—Lightweight](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_create.htm "Get the default values for fields for a new record of a specified object and optional record type. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.")

## Related Topics

- Object Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_info.htm)
- Record Template Create (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_create.htm)
- Get Default Values to Create a Record—Lightweight (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_create.htm)
