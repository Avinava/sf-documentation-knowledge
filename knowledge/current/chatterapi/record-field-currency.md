---
title: "Record Field: Currency"
domain: chatterapi
topic: record-field-currency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.830Z
estimatedTokens: 164
keywords: [Record, Currency, containing]
---

# Record Field: Currency

> Record field containing a currency value.

# Record Field: Currency

Record field containing a currency value.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Localized string describing the record field. | Small, 29.0 | 29.0 |
| text | String | Text value of the record field. All record fields have a text value. To ensure that all clients can consume new content, inspect the record field’s type property. If it isn’t recognized, render the text value as the default case.Currency is formatted in the default currency of the organization. | Small, 29.0 | 29.0 |
| type | String | Currency | Small, 29.0 | 29.0 |
