---
title: "Record Field: Reference with Date"
domain: chatterapi
topic: record-field-reference-with-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.845Z
estimatedTokens: 224
keywords: [Record, Date, containing, referenced, acted, specific, time, “Created, By...”]
---

# Record Field: Reference with Date

> Record field containing a referenced object that acted at a specific time, for example,
    “Created By...”.

# Record Field: Reference with Date

Record field containing a referenced object that acted at a specific time, for example, “Created By...”.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dateValue | String | Time at which the referenced object acted. Format is ISO 8601. | Medium, 29.0 | 29.0 |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| reference | Reference | Object referenced by the record field. | Medium, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Valid values are:CreatedByLastModifiedBy | Small, 29.0 | 29.0 |

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
