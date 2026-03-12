---
title: "Record Field: Reference"
domain: chatterapi
topic: record-field-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.842Z
estimatedTokens: 174
keywords: [Record, containing, another]
---

# Record Field: Reference

> Record field containing a reference to another object.

# Record Field: Reference

Record field containing a reference to another object.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| reference | Reference | Object referenced by the record field. | Medium, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Reference | Small, 29.0 | 29.0 |

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
