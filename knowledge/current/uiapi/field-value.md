---
title: "Field Value"
domain: uiapi
topic: field-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.833Z
estimatedTokens: 403
keywords: [raw, displayable, record]
---

# Field Value

> The raw and displayable field values for a field in a
    record.

# Field Value

The raw and displayable field values for a field in a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| displayValue | String | The displayable value for a field.This field is non-null in these cases.The value property can be localized to the context user’s language.The value property is a date or currency that can be formatted for display.If the dataType of a field is Date or DateTime, it uses the short format in this table.If the dataType of a field is Currency, it uses the format in this table.The value property is a related record. | Small, 41.0 | 41.0 |
| value | Object | The value of a field in its raw data form.If the field is a related record, the raw value contains a nested Record response body.If this value is null, the displayValue is also null.Date and time information is in ISO 8601 format. | Small, 41.0 | 41.0 |

#### See Also

-   [Record](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm "The field data, API name, child relationship data, and record type information for a record.")

-   [Record Template Clone](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_clone.htm "A record template containing the default information and data needed to clone a record. Use these values in a request to POST /ui-api/records.")

-   [Record Template Create](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_create.htm "A record template containing the default information and data needed to create a record. Use these values in a request to POST /ui-api/records.")

## Related Topics

- dataType (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Record Template Clone (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_clone.htm)
- Record Template Create (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_template_create.htm)
