---
title: "Xmd Date Field Input"
domain: bi-dev-guide-rest
topic: xmd-date-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.989Z
estimatedTokens: 485
keywords: [Xmd, Date, Input, extended, metadata, formatting]
---

# Xmd Date Field Input

> The extended metadata (Xmd) for the formatting of a date field.

# Xmd Date Field Input

The extended metadata (Xmd) for the formatting of a date field.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| day | String | The day of the month. | Required | 36.0 |
| epoch​Day | String | The number of days that have elapsed since January 1, 1970 (midnight UTC). | Optional | 36.0 |
| epoch​Second | String | The number of seconds that have elapsed since January 1, 1970 (midnight UTC). Corresponds to _sec_epoch in datasets. | Optional | 36.0 |
| fiscal​Month | String | The month number in fiscal year. Corresponds to _Month_Fiscal in datasets. | Optional | 36.0 |
| fiscal​Quarter | String | The quarter number in fiscal year. Corresponds to _Quarter_Fiscal in datasets. | Optional | 36.0 |
| fiscal​Week | String | The week number in fiscal year. Corresponds to _Week_Fiscal in datasets. | Optional | 36.0 |
| fiscal​Year | String | The Fiscal year. Corresponds to _Year_Fiscal in datasets. | Optional | 36.0 |
| full​Field | String | The full-field field. | Optional | 36.0 |
| hour | String | The number of hours. If the date contains no hours, value is '0.' Corresponds to _Hour in datasets. | Required | 36.0 |
| minute | String | The number of minutes. If the date contains no minutes, value is '0.' Corresponds to _Minute in datasets. | Required | 36.0 |
| month | String | The month number in calendar year. Corresponds to _Month is datasets. | Required | 36.0 |
| quarter | String | The quarter number in calendar year. Corresponds to _Quarter in datasets. | Optional | 36.0 |
| second | String | The number of seconds. If the date contains no seconds, value is '0.' Corresponds to _Second in datasets. | Optional | 36.0 |
| week | String | The week number in calendar year. Corresponds to _Week in datasets. | Required | 36.0 |
| year | String | The calendar year. Corresponds to _Year in datasets. | Required | 36.0 |
