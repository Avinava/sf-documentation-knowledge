---
title: "Record Field: Percent"
domain: chatterapi
topic: record-field-percent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.837Z
estimatedTokens: 165
keywords: [Record, Percent, containing, percentage]
---

# Record Field: Percent

> Record field containing a percentage value.

# Record Field: Percent

Record field containing a percentage value.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| value | Double | Value of the percentage. | Medium, 29.0 | 29.0 |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Percent | Small, 29.0 | 29.0 |
