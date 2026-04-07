---
title: "Date Representation"
domain: mobile-sdk
topic: date-representation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.868Z
estimatedTokens: 205
keywords: [Date]
---

# Date Representation

SmartStore does not define a date/time data type. When you create index specs for date/time fields, choose a SmartStore type that matches the format of your JSON input. For example, Salesforce sends dates as strings, so always use a string index spec for Salesforce date fields. To choose an index type for non-Salesforce or custom date fields, consult the following table.

| Type | Format As | Description |
| --- | --- | --- |
| string | An ISO 8601 string | "YYYY-MM-DD HH:MM:SS.SSS" |
| floating | A Julian day number | The number of days since noon in Greenwich on November 24, 4714 BC according to the proleptic Gregorian calendar. This value can include partial days that are expressed as decimal fractions. |
| integer | Unix time | The number of seconds since 1970-01-01 00:00:00 UTC |
