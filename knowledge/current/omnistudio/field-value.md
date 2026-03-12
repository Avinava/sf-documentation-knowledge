---
title: "Field Value"
domain: omnistudio
topic: field-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:53.423Z
estimatedTokens: 233
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

## Related Topics

- dataType (atlas.en-us.industries_reference.meta/industries_reference/ui_api_responses_field.htm)
- Record (atlas.en-us.industries_reference.meta/industries_reference/ui_api_responses_record.htm)
