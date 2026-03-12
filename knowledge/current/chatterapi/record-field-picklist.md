---
title: "Record Field: Picklist"
domain: chatterapi
topic: record-field-picklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.839Z
estimatedTokens: 149
keywords: [Record, Picklist, containing, enumerated]
---

# Record Field: Picklist

> Record field containing an enumerated value.

# Record Field: Picklist

Record field containing an enumerated value.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case. | Small, 29.0 | 29.0 |
| type | String | Picklist | Small, 29.0 | 29.0 |
