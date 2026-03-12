---
title: "Record Field: Date"
domain: chatterapi
topic: record-field-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.833Z
estimatedTokens: 175
keywords: [Record, Date, containing]
---

# Record Field: Date

> Record field containing a date.

# Record Field: Date

Record field containing a date.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dateValue | String | Date that a machine can read. Format is ISO 8601. | Medium, 29.0 | 29.0 |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Valid values are:DateDateTimeTime | Small, 29.0 | 29.0 |
