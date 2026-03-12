---
title: "isBetween()"
domain: lightning
topic: isbetween
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.566Z
estimatedTokens: 218
keywords: [isBetween, Checks, date, fromDate, toDate, match, inclusive, Sample, Code]
---

# isBetween()

> Checks if date is between
    fromDate and toDate, where the match is inclusive.

# isBetween()

Checks if date is between fromDate and toDate, where the match is inclusive.

## Signature

isBetween(string | number | Date date, string | number | Date fromDate, string | number | Date toDate, string unit)

## Parameters

date

Type: string | number | Date

A datetime string in ISO8601 format, or a timestamp in milliseconds, or a Date object.

fromDate

Type: string | number | Date

A datetime string in ISO8601 format, or a timestamp in milliseconds, or a Date object.

toDate

Type: string | number | Date

A datetime string in ISO8601 format, or a timestamp in milliseconds, or a Date object.

unit

Type: string

A datetime unit. Options are 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.

## Returns

Type: boolean

Returns true if date is between fromDate and toDate, or false otherwise.

## Sample Code

```

```

## Code Examples

```
// Returns true
$A.localizationService.isBetween("2017-03-07","March 7, 2017", "12/1/2017");
// Returns false
$A.localizationService.isBetween("2017-03-07 12:00", "March 7, 2017 15:00", "12/1/2017");
// Returns true because the unit is "day"
$A.localizationService.isBetween("2017-03-07 12:00", "March 7, 2017 15:00", "12/1/2017", "day");
```
